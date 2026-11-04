# M&A Academy｜第 11 堂 Private Equity Fund 正式上架紀錄

**日期：2026-11-04｜正式分支：main｜GitHub Pages 根目錄：docs/**

## 核准編輯與課文

- 使用者審閱並核准第 11 堂 PE 內容，包括從零開始解釋基金、GP／LP、Capital Commitment、Capital Call、PE 治理及退出。
- 特別依照審閱意見深化 LP／GP：誰有錢、誰有專業能力 → 基金與管理公司的差別 → LP 承諾與權益 → GP 法律角色與管理公司 → LPA → LPAC 與利益衝突 → 責任與誘因。
- 真實案例延長：Blackstone／Hilton（2007 收購→治理與 CEO 變動→2013 IPO→2018 Blackstone 退出）與 KKR／李長榮化工（公司歷史→2018 股份轉換協議→KKR Asian Fund III 和收購聯盟→2019 交割及下市）。
- 故事延續星河餐飲與晨光咖啡的未完成收購討論；為 PE 基金另設遠見一號基金與較大規模的餐飲平台，**沒有假裝之前 560 萬交易已經完成**。
- 實際教材有 12 節，包括主故事、兩個長案例、基金分配與個人多回合模擬；另由共用 app 自動加入 8 題測驗及 9 項原始參考來源。
- **課程第 11 堂正式列入已發布**，第 12–16 堂仍為待製作規劃。

## GitHub 檔案與程式

- `docs/lesson-11-full.js`：正式繁體中文課文，定義 `window.MA_FULL_LESSONS[11]`。
- `docs/lesson-11-simulations.js`：`window.MA_LESSON11.init()`；Capital Call 即時分配、Carry 盈虧試算，以及依前面選擇改變後續風險與結果的個人決策模擬。
- `docs/lesson-11.css`：只針對第 11 堂的選擇卡、財務結果、鍵盤 focus 及手機單欄樣式。
- `docs/app.js`：已上架上限 10→11；新增 8 題多選測驗與 9 個參考來源；路由、章節索引、11 堂互動初始化、前後課連結。
- `docs/index.html`：在 `app.js` 前載入兩個第 11 堂 JS；在原樣式後載入第 11 堂專屬 CSS。
- 無修改第 01–10 堂專屬課文、故事與互動來源，也無修改 `docs/styles.css`、group-signup app、資料庫或 Railway。

## 模型核對

### Capital Call
總承諾 10,000，LP 出資承諾 50%／30%／20%。催繳 4,000 時應分配 2,000／1,200／800，未催繳 6,000；滑桿改為 7,000 時退休基金應繳 3,500；重設回 4,000。

### Carry
投入 6,000、退出 9,000，獲利 3,000，GP Carry 20%＝600，LP 收回 8,400；若退出價格 4,000，虧損 2,000，GP Carry＝0，LP 收回 4,000。忽略管理費、優先報酬及複雜基金分配是此模型明確列出的限制。

### 連續個人決策
從 LP 風險偏好、投資標的、Capital Call、治理應對到退出時點，再顯示資金分配。新情報依目標為顧客集中或工程人才流失；返回前一回合可修改決策。

驗算路線 A：成長型平台（6,000 成本）、8,000 催繳、削減人力、延後退出 → 售價 5,950，閒置已催繳現金 2,000，Carry 0，LP 收回 7,950，淨損 50。

驗算路線 B：相同基金資本和標的，改為保留人才及延後退出 → 售價 11,150，Carry 1,030，LP 收回 12,120，淨收益 4,120。

各路線皆遵守 `LP 收回 + GP Carry = 股權出售價款 + 基金未投資現金`；盈虧由真實分支變數和明確教學假設決定，不冒充經驗研究估計係數。

## 主要來源與證據區隔

- Kaplan & Strömberg (2009), *Journal of Economic Perspectives*: https://doi.org/10.1257/jep.23.1.121
- Gompers, Kaplan & Mukharlyamov (2016), *Journal of Financial Economics*: https://doi.org/10.1016/j.jfineco.2016.06.003（79 位 PE 投資者受訪的實務調查，並非所有操作均有因果驗證）
- Kaplan & Schoar (2005), *Journal of Finance*: https://doi.org/10.1111/j.1540-6261.2005.00780.x
- ILPA Principles: https://ilpa.org/industry-guidance/principles-best-practices/ilpa-principles/
- Blackstone 收購公告（2007-07-03）：https://www.blackstone.com/news/press/hilton-hotels-corporation-to-be-acquired-by-blackstone-investments-funds/
- Blackstone 交割公告（2007-10-24）：https://www.blackstone.com/news/press/hilton-closes-merger-with-blackstone-investment-funds/
- Blackstone CEO 人事（2007-10-29）：https://www.blackstone.com/news/press/hilton-hotels-corporation-appoints-christopher-nassetta-as-president-and-ceo/
- KKR／李長榮化工交割（2019-01-29）：https://media.kkr.com/news-details?news_id=14f2c234-73d7-4f59-a210-d225562978d1
- Blackstone Hilton 完全退出與約 140 億美元投資收益：公司 2018 第二季投資人溝通；不等於 GP 自身 Carry，也不能據此反算 LP 個別 IRR。

## 驗收與限制

- 已完成 JavaScript 語法檢查，並在模擬 DOM 事件環境中驗證 Capital Call／Carry 的基準、滑動、重設及盈虧。
- 已驗證個人模擬的至少兩條分支（含虧損路線）、依標的揭露不同情報、返回上一回合、更換決策與重新開始。
- 已驗證第 11 堂 12 個章節單位、13 個互動 DOM ID 無重複，測驗 8 題、參考資料 9 項，來源載入在 app 路由前。
- **尚未執行真實瀏覽器的完整手機、鍵盤、公開 GitHub Pages 端到端測試**；無法將程式與模擬 DOM 檢查冒充完整真實裝置驗收。
