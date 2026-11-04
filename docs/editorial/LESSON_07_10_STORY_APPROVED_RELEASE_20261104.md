# M&A Academy｜已審稿故事正式上線：第 07–10 堂

**2026-11-04｜GitHub Pages / main/docs**

## 本次編輯範圍
使用者先審閱了第 08 堂 8.1–8.5、09／10 開場的連續故事改寫，再審閱並同意第 07 堂 7.1–7.11 的完整故事。正式修訂採單一主線：晨光咖啡股東收到星河收購意向 → 理解財務報表 → 分清自由現金流與企業價值 → 同業估價與 DCF → 議價 → 支付。減少將「虛構、示意」反覆放進人物對話的痕跡；課程數字的性質仍在每堂開頭或需要比較的節點清楚交代。

## 程式實作（重要）
- 舊 `lesson-07-guided-20261104.js` / `lesson-08-guided-20261104.js` 和 `lesson-07-10-split.js` 仍提供結構與既有工具 DOM。
- **`lesson-07-10-narrative-v2.js` 是目前 07–10 已審稿文本的優先覆蓋層。** `index.html` 必須在 split 腳本之後、個人模擬和 `app.js` 之前載入。日後編修正式故事，優先修改這份檔案而非只修改舊來源。
- 本次改寫 07 開場與 7.1–7.11 共 12 節、08 開場與 8.1–8.5 共 6 節、09／10 開場共 2 節，合計 20 個章節單位。
- 原 07 財報四滑桿 `l7-financial-tool`、EV／股權橋接 `l7-bridge-tool`（改成可展開的反向練習）、個人三回合 `l7-finance-journey`，原 08 DCF 和五回合 `l7-dcf-tool`、`l7-journey`，及 09／10 互動不刪除。
- 7.8 新增「固定股權報價 500 萬」的直接互動 `l7-bid-bridge`：銀行借款 80 萬，現金分類由 100 改成 40，則報價隱含 EV 從 480 變 540 萬；與舊模型「固定 EV、推算股權價值」概念不同，已明確分開。

## 數字口徑
- 07 歷史報表：營收 1,000，EBIT 180，折舊 40，EBITDA 220，淨利 128，CFO 143，CapEx 75，ΔNWC 25，FCFE 68，FCFF 84。
- 07.6 假設額外 CapEx 50 時，FCFF＝34；07.10 原三回合模擬另揭露額外 CapEx 35 時 FCFF＝49，兩者是不同資訊分支。
- 07.7 初始股權報價 500、計息借款 80、全部 100 現金先作多餘現金 → 隱含 EV＝480；07.8 查核後有 60 必須留作營運，多餘現金 40 → 隱含 EV＝540。**兩者都是固定股權報價所對應的 EV，不是獨立估出的內在價值。**
- 08.2 河岸咖啡示範 EV／EBITDA＝400／100＝4 倍；晨光 EV＝220×4＝880，扣借款 80 加多餘現金 40，股權價值 840。
- 08.5 歷史 FCFF 84 與下一年預測 FCFF 45 不同；五年成長 3%、WACC 12%、終值成長 2%，DCF EV 約 464.2，扣借款 80 加現金 40，股權價值約 424.2。第 09 堂為純議價練習，另將獨立股權價值設回 500 並明示與 DCF 結果不同。
- 第 10 堂 560 是比較付款方式的共同基準，不是已簽約或交割的結果。

## 期刊與真實案例
- Kaplan, S. N., & Ruback, R. S. (1995), *The Valuation of Cash Flow Forecasts: An Empirical Analysis*, *Journal of Finance*. DOI: https://doi.org/10.1111/j.1540-6261.1995.tb04050.x （已對照期刊官網修正）
- Liu, J., Nissim, D., & Thomas, J. (2002), *Equity Valuation Using Multiples*, *Journal of Accounting Research*. DOI: https://doi.org/10.1111/1475-679X.00042
- Bhojraj, S., & Lee, C. M. C. (2002), *Who Is My Peer?*, *Journal of Accounting Research*. DOI: https://doi.org/10.1111/1475-679X.00054
- 現實交易仍以 Microsoft／Activision Blizzard (2022 公告、2023 交割) 與 Disney／Pixar (2006 公告) 之公司原始公告作為故事對照；四倍 EBITDA、晨光與河岸皆為案例演練，不應冒充真實交易倍數。

## QA 結果與未驗證事項
- 已在 JavaScript runtime 組裝原始 07／08 + split + story v2，核對 07/08/09/10 節數為 12／13／7／9，DOM IDs 不重複；07 的新橋接直接測試 100→480、40→540、70→510 與重設；既有模型 ID 都在。
- 已核對 index 腳本載入順序、app 第 01–10 堂題庫題數和答案索引，以及編輯檔案 JavaScript 語法。
- **未執行真實手機瀏覽器、鍵盤操作、全部互動路線及 GitHub Pages 頁面的完整 E2E；不得將靜態檢查稱為全部使用者情境已通過。**
- Lesson 01 專屬檔、02–06 專屬檔、app.js、styles.css、後端與 Railway 均未修改。共用 index.html 只加載本篇文本腳本，並把初始側欄計數從 14 改為 16；Lesson 01 原始內容與路由均保留。
