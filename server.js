const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000; // ✅ Railway 會提供 PORT，否則使用 3000

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // ✅ 確保靜態文件可用

// ✅ 確保管理頁面可以訪問
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// ✅ 初始化分組資料
let groups = Array(10).fill(null).map(() => ({ members: [] }));

// ✅ 取得最新的分組資料
app.get("/groups", (req, res) => {
    res.json(groups);
});

// ✅ 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

