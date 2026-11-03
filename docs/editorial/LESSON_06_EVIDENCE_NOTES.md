# M&A Academy｜第 06 堂學術、案例與模型驗證紀錄

> 課次：企業如何選擇收購標的。製作日期：2026-11-03。遵循 `docs/MA_Academy_Authoring_Standard_v3.md`。原有第 01–05 堂鎖定不動。所有故事及模型均為**單人自主學習**，不包含小組活動。

## 教學主線與區分

從「晨光咖啡要買哪一家公司」出發：A 山谷咖啡（熟悉但共同顧客多），B 微光科技咖啡（技術強但人才／權利風險大），C 港灣烘焙（要價低但重要顧客集中）。

- 核心教學：收購標的選擇 ≠ 單看標價、知名度或關係熟悉。依序判斷策略適配（fit）→ 資源互補（complementarity）→ 估值／溢價（valuation and premium）→ 人才與整合（PMI）→ 替代方案（Build / Buy / Ally）。
- 全部模擬數字是假設；不以「作者曾提出理論」推論個別企業成果；收購股權價款支付給出售舊股的股東，而不是把現金當成自動增資。
- 主頁 16 個章節＋3 項互動＋10 題單人測驗。主教材檔案：`docs/lesson-06-full.js`。互動檔案：`docs/lesson-06-simulations.js`。

## 文獻轉譯與證據邊界

| 原始期刊與 DOI | 文獻研究做了什麼／能支持什麼 | 本堂生活化解釋及互動 | 不能推論 |
|---|---|---|---|
| Rogan, Michelle, & Olav Sorenson (2014). [*Picking a (Poor) Partner: A Relational Perspective on Acquisitions*](https://doi.org/10.1177/0001839214531719), **Administrative Science Quarterly 59**(2):301–329. | 以 1995–2003 年全球廣告業資料，比較共同客戶與收購發生及併購後客戶流失／留存客戶銷售的關聯。共同客戶增加被收購機會，對合併後績效則呈不利關聯；正面偏誤及搜尋限制是候選機制。 | A 熟悉合作企業但共同顧客重疊；第一輪可能偏好 A，第二輪揭露顧客流失風險，讓讀者決定再查核或改選。 | 不可將廣告業的平均關聯套成所有產業的因果定律；不能直接說認識的人都不適合買。 |
| Ransbotham, Sam, & Sabyasachi Mitra (2010). [*Target Age and the Acquisition of Innovation in High-Technology Industries*](https://doi.org/10.1287/mnsc.1100.1223), **Management Science 56**(11):2076–2093. | 以 1995–2001 年電信科技收購事件研究及分析模型討論目標年齡、早期取得成長選擇權、估值不確定與近期專利／私人公司條件。 | B 剛起步、技術強但不成熟；等待可能獲得更多資訊，收購價也可能改變，故必須比較買、建置、授權。 | 不代表年輕企業總是便宜、總是值得收購。文獻不是對本堂虛構 B 的實際估計。 |
| Capron, Laurence, Pierre Dussauge, & Will Mitchell (1998). [*Resource Redeployment Following Horizontal Acquisitions in Europe and North America, 1988–1992*](https://doi.org/10.1002/%28SICI%291097-0266%28199807%2919%3A7%3C631%3A%3AAID-SMJ963%3E3.0.CO%3B2-9), **Strategic Management Journal 19**(7):631–661. | 研究資源在收購方與被收購事業之間如何重新部署，重點不只在收購完成而是能力如何互補與重新配置。 | 晨光與科技標的互補，必須將技術部署進原門市；買到程式碼不等於自動完成部署。 | 不可將水平收購研究當成所有科技併購績效的直接因果定律。 |
| Graebner, Melissa E. (2004). [*Momentum and Serendipity: How Acquired Leaders Create Value in the Integration of Technology Firms*](https://doi.org/10.1002/smj.419), **Strategic Management Journal 25**(8–9):751–777. | 八筆科技收購的質性研究：被收購管理者可協助實現預期及未預見的整合價值。 | B 的技術人才留任及文化整合；Disney／Pixar 原 Pixar 高階人才在收購後負責動畫領導。 | 不是測量每種產業人才流失成本的統計係數，不表示所有收購都應完全不整合。 |

本堂沒有使用尚未能以原始文章確認的 Arts／Cassiman／Hou 新近研究，以免把出版年份或研究發現猜成已核對事實。

## 真實案例：公司背景、交易、整合與後續

### Disney / Pixar（2006）

- **併購前**：Disney 具有全球發行、消費商品、主題樂園及品牌資源；Pixar 擅長電腦動畫創作與技術，雙方原已合作發行多部電影。
- **交易**：2006-01-24 公告全股票收購，1 股 Pixar 換 2.3 股 Disney；依當時 Disney 股價公告價值約 **74 億美元**，扣 Pixar 現金後的公布淨額約 63 億美元。2006-05-05 完成交割。[交易公告](https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/) · [交割公告](https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/)。
- **整合**：Ed Catmull 和 John Lasseter 參與兩家動畫工作室高階管理／創作；Pixar 原營運與據點保留的安排；Steve Jobs 加入 Disney 董事會。這是公司實際公告的設計，非保證績效因果。
- **截至 2026-11**：Pixar 仍以品牌營運，2026 年電影規劃包含《Hoppers》。[Pixar 官方歷史](https://www.pixar.com/our-story) · [Disney 2026 電影公告](https://thewaltdisneycompany.com/news/disney-movies-theaters-spring-2026/)。
- **教學重點**：既有合作能否替代收購？取得創作團隊、品牌與通路的互補效益，是否值得交易價格和人才整合風險？

### Salesforce / Slack（2020–2026）

- **併購前**：Salesforce 雲端 CRM；Slack 工作訊息、頻道與跨系統協作。
- **交易**：2020-12-01 簽訂協議，Slack 每股對價 26.79 美元現金＋0.0776 股 Salesforce，當時公告交易企業價值約 **277 億美元**；2021-07-21 交割。[原始公告](https://investor.salesforce.com/news/news-details/2020/Salesforce-Signs-Definitive-Agreement-to-Acquire-Slack/default.aspx) · [交割公告](https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/)。
- **整合**：CRM 內的客戶資料與工作流程，在 Slack 頻道與協作介面串接；2026 年仍在推進 Slackbot／Agentforce 等產品整合。[2026-01 Slackbot](https://www.salesforce.com/news/press-releases/2026/01/13/slackbot-announcement/) · [2026-09 產品公告](https://slack.com/blog/news/ai-powered-interface-for-work)。
- **證據邊界**：產品發布能證明仍有開發／整合活動，不能單獨證明 277 億美元成本已由增量現金流回收。

### eBay / Skype（2005–2011）

- **併購前**：eBay 電商市集；Skype 網路語音與視訊通訊。原本預期讓買賣雙方更有效溝通，但兩者未產生預想中的核心協同。
- **交易與後續**：2005-10-14 交割，初期對價約 26 億美元；2007 年認列約 14 億美元帳面減損；2009-11-19 以企業估值約 27.5 億美元出售約七成股份、eBay 留約三成；2011 年 Skype 全部股權以 85 億美元售給 Microsoft。[SEC 2005](https://www.sec.gov/Archives/edgar/data/1065088/000095013405019311/f13541e8vk.htm) · [eBay 2009](https://investors.ebayinc.com/investor-news/press-release-details/2009/EBay-Inc-Completes-Sale-of-Skype/default.aspx) · [eBay 2014 對最終財務結果的回顧](https://investors.ebayinc.com/investor-news/press-release-details/2014/Statement-by-eBay-Inc-eBay-Inc-Reiterates-The-Truth-About-Skype/default.aspx)。
- **關鍵區分**：會計減損不是當年現金流出，且後來出售剩餘持股可能使整體投資結果與單純減損金額差異很大。eBay 官方曾指出最終 Skype 投資有淨收益，但仍認為與電商業務的策略綜效不足；兩種事實不矛盾。

## 模型公式（教學示意，不是期刊估計係數）

### 快速候選排序

`適配分數 = 0.65 × 需求對應的能力分數 + 0.35 × [100 − 0.6 × 顧客集中度 × (集中敏感度/100) − 0.4 × 人員流失度 × (人才敏感度/100)]`。

能力分數、集中度、人才流失度為程式內的固定虛構特徵（0–100）。此分數僅供比較不同策略需求，並非股權價值或購買價格。

### 簡易價格試算

`買方淨值 = 預期綜效 × 實現比例 − 45（整合）− 20（額外風險）− 收購溢價`，所有數字單位萬元；獨立股權價值與支付價款中的相同部分抵銷。

### 五回合三家公司數值

| 標的 | 獨立股權價值 | 賣方開價 | 預期綜效 | 整合成本 | 已知風險 | 新揭露風險 | 充分查核下保護效果 |
|---|---:|---:|---:|---:|---:|---:|---:|
| A 熟悉品牌 | 720 | 820 | 320 | 70 | 45 | 100 | 55 |
| B 技術品牌 | 850 | 1100 | 530 | 105 | 65 | 130 | 95 |
| C 低價烘焙 | 630 | 670 | 230 | 55 | 80 | 175 | 55 |

- 深入查核費 25、基本查核費 8（同時點示意支出）；若改選其他公司，另加搜尋費 20，且新標的風險增加 60，因為原始盡調不能直接移植。
- 收購價格可選初始要價−70、原價或＋90。若沒有對該標的做深入查核，低價出價可能遭賣方拒絕；本模型假設需改回原要價或停止。
- 保護條款／留任措施：A 成本20、B25、C20；有效風險分擔效果按查核程度及是否臨時改標的調整。**保護不是讓實際經濟損失自然消失**。
- 股權收購買方增量淨值＝目標獨立股權價值＋預期綜效－整合－已知／新增風險＋保護效果－保護成本－查核費－搜尋成本－交易股權對價。
- 改為合作：選試行可分享綜效 38%／設置費20，長期合作分享55%／設置費45；風險成本按本模型 30% 比例，若有保障則支付12並減少買方預期承擔的風險20。**這些都是用於說明機制的假設。**
- 自行建置：試點預期額外價值240、支出140及風險65；較完整建置預期額外價值350、支出190及風險125；增加管理支援支付12、效果20。退出交易不支付任何股權價款，已支付的查核／搜尋費不假設退回。
- 交割成功時，款項付給**出售舊股的原股東**；如未成交，買方不取得標的股份，賣方不會收到收購對價。

## QA

- 16 個章節；10 題測驗；三種互動；五回合動態劇情；無小組／分組、人數分配活動。
- 驗證 JavaScript 語法、HTML 元素數量平衡、互動 DOM ID 唯一、不同路線結局及返回操作；共用程式更新後回歸驗證第 01–05 堂。
- 第 06 堂新頁面的實際 GitHub Pages 瀏覽器顯示可能因無外部操作權限而未驗證，**不得將模擬測試通過冒充端到端公開網站 QA**。
