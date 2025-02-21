const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // 讓 index.html & style.css 可用

// ✅ 確保管理頁面可以訪問
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

// ✅ 初始化分組資料（確保 groups 變數存在）
let groups = Array(10).fill(null).map(() => ({ members: [] }));

// ✅ 取得最新的分組資料
app.get("/groups", (req, res) => {
    res.json(groups);
});

// ✅ 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

