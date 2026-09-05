const express = require("express");
const path = require("path");
const crypto = require("crypto");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;
const GROUP_COUNT = 5;
const MAX_GROUP_SIZE = 4;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
if (!ADMIN_PASSWORD) throw new Error("ADMIN_PASSWORD is required");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adminSessionToken = crypto.randomBytes(32).toString("hex");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function parseCookies(req) {
    const raw = req.headers.cookie || "";
    return Object.fromEntries(
        raw.split(";")
           .map(v => v.trim())
           .filter(Boolean)
           .map(v => {
               const i = v.indexOf("=");
               return [decodeURIComponent(v.slice(0, i)), decodeURIComponent(v.slice(i + 1))];
           })
    );
}

function requireAdmin(req, res, next) {
    const cookies = parseCookies(req);
    if (cookies.adminSession !== adminSessionToken) {
        return res.status(401).send("Unauthorized");
    }
    next();
}

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/admin", (req, res) => res.sendFile(path.join(__dirname, "public", "admin.html")));

app.post("/admin/login", (req, res) => {
    if (String(req.body.password || "") !== ADMIN_PASSWORD) {
        return res.status(401).send("Incorrect password");
    }
    res.setHeader("Set-Cookie", `adminSession=${adminSessionToken}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=28800`);
    res.send("Login successful");
});

app.post("/admin/logout", requireAdmin, (req, res) => {
    res.setHeader("Set-Cookie", "adminSession=; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=0");
    res.send("Logged out");
});

async function initDb() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS registrations (
            id SERIAL PRIMARY KEY,
            group_index INTEGER NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS members (
            id SERIAL PRIMARY KEY,
            registration_id INTEGER NOT NULL REFERENCES registrations(id) ON DELETE CASCADE,
            name TEXT NOT NULL,
            student_id TEXT NOT NULL UNIQUE,
            department TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_registrations_group_index
        ON registrations(group_index);

        CREATE INDEX IF NOT EXISTS idx_members_registration_id
        ON members(registration_id);
    `);
}

function cleanMember(member) {
    return {
        name: String(member?.name || "").trim(),
        studentId: String(member?.studentId || "").trim(),
        department: String(member?.department || "").trim()
    };
}

function validGroupIndex(value) {
    return Number.isInteger(value) && value >= 0 && value < GROUP_COUNT;
}

app.get("/groups", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT r.group_index, COUNT(m.id)::int AS count
            FROM registrations r
            JOIN members m ON m.registration_id = r.id
            GROUP BY r.group_index
        `);
        const groups = Array.from({ length: GROUP_COUNT }, () => ({ members: [] }));
        for (const row of result.rows) {
            if (row.group_index >= 0 && row.group_index < GROUP_COUNT) {
                groups[row.group_index].members = Array.from({ length: row.count }, () => ({}));
            }
        }
        res.json(groups);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error. Please try again.");
    }
});

app.get("/admin/groups", requireAdmin, async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT r.group_index, m.name, m.student_id, m.department
            FROM registrations r
            JOIN members m ON m.registration_id = r.id
            ORDER BY r.group_index, r.id, m.id
        `);

        const groups = Array.from({ length: GROUP_COUNT }, () => ({ members: [] }));
        for (const row of result.rows) {
            if (row.group_index >= 0 && row.group_index < GROUP_COUNT) {
                groups[row.group_index].members.push({
                    name: row.name,
                    studentId: row.student_id,
                    department: row.department
                });
            }
        }
        res.json(groups);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error. Please try again.");
    }
});

app.post("/signup", async (req, res) => {
    const groupIndex = req.body.groupIndex;
    const members = Array.isArray(req.body.members) ? req.body.members.map(cleanMember) : [];

    if (!validGroupIndex(groupIndex) || members.length === 0 || members.some(m => !m.name || !m.studentId || !m.department)) {
        return res.status(400).send("Invalid signup information.");
    }
    if (members.length > MAX_GROUP_SIZE) {
        return res.status(400).send("A signup can include at most 4 students.");
    }

    const ids = members.map(m => m.studentId);
    if (new Set(ids).size !== ids.length) {
        return res.status(400).send("One or more student IDs are already registered.");
    }

    const client = await pool.connect();
    try {
        await client.query("BEGIN");
        await client.query("SELECT pg_advisory_xact_lock($1)", [groupIndex]);

        const duplicate = await client.query(
            "SELECT student_id FROM members WHERE student_id = ANY($1::text[]) LIMIT 1",
            [ids]
        );
        if (duplicate.rowCount > 0) {
            await client.query("ROLLBACK");
            return res.status(409).send("One or more student IDs are already registered.");
        }

        const countResult = await client.query(`
            SELECT COUNT(*)::int AS count
            FROM members m
            JOIN registrations r ON r.id = m.registration_id
            WHERE r.group_index = $1
        `, [groupIndex]);

        if (countResult.rows[0].count + members.length > MAX_GROUP_SIZE) {
            await client.query("ROLLBACK");
            return res.status(409).send("This group does not have enough remaining seats.");
        }

        const reg = await client.query(
            "INSERT INTO registrations(group_index) VALUES($1) RETURNING id",
            [groupIndex]
        );

        for (const member of members) {
            await client.query(
                "INSERT INTO members(registration_id, name, student_id, department) VALUES($1,$2,$3,$4)",
                [reg.rows[0].id, member.name, member.studentId, member.department]
            );
        }

        await client.query("COMMIT");
        res.send("Registration successful!");
    } catch (error) {
        await client.query("ROLLBACK");
        console.error(error);
        if (error.code === "23505") return res.status(409).send("One or more student IDs are already registered.");
        res.status(500).send("Server error. Please try again.");
    } finally {
        client.release();
    }
});

app.post("/remove", requireAdmin, async (req, res) => {
    try {
        const groupIndex = req.body.groupIndex;
        const studentId = String(req.body.studentId || "").trim();
        if (!validGroupIndex(groupIndex) || !studentId) return res.status(400).send("Invalid removal request.");

        const result = await pool.query(`
            DELETE FROM members
            WHERE id IN (
                SELECT m.id FROM members m
                JOIN registrations r ON r.id=m.registration_id
                WHERE r.group_index=$1 AND m.student_id=$2
            )
            RETURNING registration_id
        `, [groupIndex, studentId]);

        if (!result.rowCount) return res.status(404).send("No registration found for this student ID.");

        await pool.query(`
            DELETE FROM registrations r
            WHERE r.id=$1 AND NOT EXISTS (
                SELECT 1 FROM members m WHERE m.registration_id=r.id
            )
        `, [result.rows[0].registration_id]);

        res.send("Student removed.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error. Please try again.");
    }
});

app.get("/export.csv", requireAdmin, async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT r.group_index, m.name, m.student_id, m.department
            FROM registrations r
            JOIN members m ON m.registration_id=r.id
            ORDER BY r.group_index, r.id, m.id
        `);

        const esc = value => '"' + String(value ?? "").replace(/"/g, '""') + '"';
        const rows = [["Group","Name","Student ID","Department"]];
        for (const row of result.rows) {
            rows.push([row.group_index + 1, row.name, row.student_id, row.department]);
        }

        const csv = "\uFEFF" + rows.map(row => row.map(esc).join(",")).join("\r\n");
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", "attachment; filename=group-signup.csv");
        res.send(csv);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error. Please try again.");
    }
});

initDb()
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => {
        console.error("Database initialization failed:", error);
        process.exit(1);
    });
