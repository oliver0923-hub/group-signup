const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000; // ✅ Railway 會提供 PORT，否則使用 3000

app.use(express.json()); // ✅ 確保可以解析 JSON
app.use(express.urlencoded({ extended: true })); // ✅ 解析 URL 編碼的請求體
app.use(express.static(path.join(__dirname, "public"))); // ✅ 提供靜態文件

// ✅ 確保首頁（/）自動導向 index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ 讓管理頁面可用
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// ✅ 初始化 10 組，每組最多 12 人
let groups = Array(10).fill(null).map(() => ({ members: [] }));

// ✅ 取得最新的分組資料
app.get("/groups", (req, res) => {
    res.json(groups);
});

// ✅ 🔥 修正 `/signup` POST API，處理報名請求！
app.post("/signup", (req, res) => {
    let { groupIndex, members } = req.body;

    // 確保請求資料有效
    if (groupIndex === undefined || !members || !Array.isArray(members) || members.length === 0) {
        return res.status(400).send("❌ 無效的報名資訊！");
    }

    // 檢查組別是否已滿
    if (groups[groupIndex].members.length + members.length > 12) {
        return res.status(400).send("❌ 這組已滿，請選擇其他組！");
    }

    // 加入新成員
    groups[groupIndex].members.push(...members);
    res.send(`✅ 成功加入第 ${groupIndex + 1} 組！`);
});

// ✅ 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


