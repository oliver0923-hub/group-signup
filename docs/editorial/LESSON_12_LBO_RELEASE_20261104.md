# M&A Academy｜第 12 堂 Leveraged Buyout 正式上架紀錄

**日期：2026-11-04｜分支：main｜GitHub Pages 來源：docs/**

## 核准範圍與最終課程設計

- 依使用者審閱後核准的第二版：將原 12.2 的 PE／LBO 差別整合入 12.1；減少不必要的「朋友 A／B」對話；保留從零開始的資金流教學。
- 本堂重新定位為「**LBO：收購融資、資本結構與財務風險**」，不只描述借款如何放大報酬，也完整引入 Sources & Uses、資本結構、優先與次順位融資、Debt Waterfall、CFADS／DSCR、債務餘額與 MOIC／IRR、Refinancing、Covenants、Tax Shield、Debt Discipline。
- 與第 11 堂的銜接：LP／GP 已認識後，專門回答「基金已有 LP 資本承諾，為何仍使用交易債務」；故事的 1,000／1,100 萬餐飲平台**不是**晨光咖啡正在商談的 560 萬交易。
- 兩個背景、收購融資、持有與後續事件皆較完整的真實案例：Blackstone × Hilton；KKR、Bain、Vornado × Toys “R” Us。
- 課文中解釋兩種計算模型的差別：「一年期、純槓桿效果」與「四年持有、營運現金流還本」。**禁止在無槓桿比較中忽略原本可歸股東的營運現金**。
- 章節 12.9 與 12.10 為學術延伸，較細的稅盾與債務紀律用可展開段落呈現。
- 共有 17 個主要章節單位（導言＋12.1–12.16）；另有網站共用的 8 題測驗與參考資料列表。

## 實際 GitHub 程式

- `docs/lesson-12-full.js`：正式繁體中文教材，設置 `window.MA_FULL_LESSONS[12]`。
- `docs/lesson-12-simulations.js`：四種獨立互動（Sources & Uses、純槓桿報酬、債權清償順位、CFADS／DSCR），一張債務餘額折線圖，以及五回合可回頭修正決策的個人 LBO 模擬。
- `docs/lesson-12.css`：僅用於第 12 堂的排版、圖表、財務卡、行動版表格與鍵盤焦點樣式。
- `docs/app.js`：已發布課次由 11 → 12；新增 8 題測驗、11 筆來源；第 12 堂專用初始化、章節索引和返回／下一堂導航。
- `docs/index.html`：在主 `app.js` 之前載入第 12 堂課文與模擬程式，並載入專屬 CSS。
- 不修改第 01–11 堂專用教材、模擬與樣式；不修改 `docs/styles.css`、group-signup app 或 Railway。

## 假設、數字及已完成驗算

### 1. Sources & Uses
- 本堂進階交易：舊股價 1,000、交易費 30、現金準備 70 ⇒ Uses 1,100。
- 基金股權 500、優先貸款 450、次順位融資 150 ⇒ Sources 1,100。
- 互動試算選股權 200、其餘 450／150 時 ⇒ Sources 800，提示資金缺口 300；可一鍵重設。

### 2. 一年期純槓桿比較
- 收購價 1,000，股權 400＋借款 600，利率 10%；一年後 EV 1,200。
- 退出先清償本息 660；股權回收 540；股權報酬 `(540-400)/400=35%`。
- EV 降為 800 ⇒ 股權回收 140、報酬 −65%；模型股權剩餘值下限為零。
- 此比較刻意不包含多期還本，以免錯誤地把槓桿方案還本現金當成免費新增價值。

### 3. Debt Waterfall
- 優先貸款 450、次順位 150、股權投入 500；可分配價值 800 ⇒ 450／150／200；價值 520 ⇒ 450／70／0。

### 4. CFADS／DSCR
- EBITDA 200−現金稅負 20−必要 CapEx 50−ΔNWC 10＝CFADS 120。
- 初始貸款 600、利率 8%、第一年本金 60 ⇒ 利息 48、本息 108、DSCR 1.11。
- CFADS 減少為 70 ⇒ DSCR 約 0.65、缺口 38。

### 5. 四年債務餘額及 IRR
- 初始貸款 600，四年還本 60／60／60／70，期末債務 350；利息 48／43.2／38.4／33.6，合計 163.2。
- 四年後 EV 1,300、期末債務 350 ⇒ 股權 950；初始基金股權 400 ⇒ MOIC 2.375×；單筆初始投入＋終端回收模式 IRR 約 24.1%。

### 6. 五回合模擬
- 融資配比 → 固定／浮動貸款 → 新的顧客流失資訊及因應 → 現金準備／基金追加出資／出售資產／協商還款 → 第 4 年或第 6 年退出。
- 嚴重虧損路線：高債務、浮動利率、裁減成本、只動用原有準備金 ⇒ 第一年本息缺口仍約 0.5，模型進入財務困境，股權回收 0。
- 可修正路線：同路線更改為銀行同意延後首年還本並支付協商費 ⇒ 第 6 年 EV 1,210、股權回收 714.5；依簡化現金流 IRR 約 15.6%。
- 另一條可行路線：高債務、浮動利率、保留人才與客戶，基金在第 1 年額外投入 80 ⇒ 第 6 年股權回收 1,429.5；IRR 使用 t0／t1／退出年三個現金流時點，並非以簡單 MOIC 套公式。
- 共驗算 **144 種**借款組合 × 融資條件 × 經營決策 × 現金缺口處理 × 退出選擇，核對資金來源合計 1,100、股權價值非負、現金非負及退出公式。
- 系統另外假設第 2 年起營運改善到足以履行約定本息；超額營業現金投入營運，反映在最終 EV，不重複加進退出現金。這是明示的教學假設，並非實際企業現金流預測。

## 文獻與案例原始來源

- Kaplan & Strömberg (2009), *Journal of Economic Perspectives*, https://doi.org/10.1257/jep.23.1.121
- Axelson, Strömberg & Weisbach (2009), *Journal of Finance*, https://doi.org/10.1111/j.1540-6261.2009.01473.x
- Axelson, Jenkinson, Strömberg & Weisbach (2013), *Journal of Finance*, https://doi.org/10.1111/jofi.12082
- Graham (2000), *Journal of Finance*, https://doi.org/10.1111/0022-1082.00277
- Jensen (1986), *American Economic Review*, https://www.jstor.org/stable/1818789
- Blackstone（2007-10-24）Hilton 交易交割及 57 億美元 equity＋206 億美元債務：https://www.blackstone.com/news/press/hilton-closes-merger-with-blackstone-investment-funds/
- Hilton（2013 IPO Prospectus）2013 年再融資：https://ir.hilton.com/sec-filings/all-sec-filings/content/0001193125-13-473211/d593452d424b4.htm
- Vornado（2005）Toys “R” Us 交易公告：https://investors.vno.com/news-releases/news-release-details/vornado-enters-venture-acquire-toys-r-us
- Toys “R” Us（2005 10-K）融資：https://www.sec.gov/Archives/edgar/data/1005414/000119312506093096/d10k.htm
- Toys “R” Us（2017–2018）重整及美國業務 wind-down：https://case.stretto.com/toyscommittee/caseinfo

## 驗證結果與限制

- JavaScript 解析、章節完整性、互動 DOM ID 唯一性、主程式發佈課次、來源載入順序與題庫資料均已通過靜態檢查。
- 互動元件在模擬 DOM 事件環境中完成基準值、變更、重設、決策前進、返回、改選、重玩及不同結局測試。
- **尚未在公開 GitHub Pages 執行真實手機、鍵盤與瀏覽器端到端驗收。** 程式與模擬 DOM 的測試不能冒充真實裝置操作。
