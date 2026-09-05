const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// 5 groups, maximum 4 students per group
let groups = Array(5).fill(null).map(() => ({ members: [] }));

app.get("/groups", (req, res) => {
    res.json(groups);
});

app.post("/signup", (req, res) => {
    const { groupIndex, members } = req.body;

    if (
        !Number.isInteger(groupIndex) ||
        groupIndex < 0 ||
        groupIndex >= groups.length ||
        !Array.isArray(members) ||
        members.length === 0
    ) {
        return res.status(400).send("Invalid signup information.");
    }

    if (members.length > 4) {
        return res.status(400).send("A signup can include at most 4 students.");
    }

    if (groups[groupIndex].members.length + members.length > 4) {
        return res.status(400).send("This group does not have enough remaining seats.");
    }

    groups[groupIndex].members.push(...members);
    res.send(`Successfully joined Group ${groupIndex + 1}!`);
});

app.post("/remove", (req, res) => {
    const { groupIndex, studentId } = req.body;

    if (
        !Number.isInteger(groupIndex) ||
        groupIndex < 0 ||
        groupIndex >= groups.length ||
        !studentId
    ) {
        return res.status(400).send("Invalid removal request.");
    }

    const originalLength = groups[groupIndex].members.length;
    groups[groupIndex].members = groups[groupIndex].members.filter(
        member => member.studentId !== studentId
    );

    if (groups[groupIndex].members.length === originalLength) {
        return res.status(404).send("Student not found.");
    }

    res.send("Student removed.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
