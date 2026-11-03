'use strict';
const courseTitles=["課程總綱與學習進度","公司、股份與股東","收購、合併與所有權","企業為什麼進行併購","併購交易如何進行","併購的主要類型","企業如何選擇收購標的","讀懂企業的財務資訊","一家公司究竟值多少？","收購價格如何談出來？","收購價款如何支付？","Private Equity Fund（PE Fund）","Leveraged Buyout（LBO）","盡職調查與交易完成","併購後整合與績效","M&A 策略管理理論","M&A 實證研究方法"];
const COURSE_TOTAL=courseTitles.length-1,PUBLISHED_LESSONS=10;
const summaries=["16 堂課，從基礎觀念一路學習到併購交易、策略與研究方法。","法人、股份、股東、董事會、經理人、所有權與控制權。","股權收購、資產收購、法定合併、母子公司與私有化。","Buy／Build／Ally、綜效、規模經濟、併購動機與價值分配。","買方、賣方、顧問、初步協商、交易流程與交割。","水平、垂直、多角化、跨國、友善與敵意收購。","策略適配、資源互補、Buy／Build／Ally、估值與整合風險。","三大財報、自由現金流、EBITDA、FCFF、EV／股權價值。","同業倍數、DCF、WACC、終值及估值敏感度。","議價上限、賣方底價、收購溢價與綜效分配。","現金、股票、股權稀釋、Earn-out 與契約風險。","GP、LP、基金募集、控股、投資期間、出場與投資報酬。","股權與債務、槓桿、債務償還、MOIC、IRR 與風險。","盡職調查、交易條款、法規、融資條件與交割。","併購後整合、文化差異、人才留任、綜效與併購失敗。","Agency Theory、RBV、TCE、RDT、組織學習與市場力量。","事件研究、長期績效、選擇偏誤、內生性與研究設計。"];
const quizData={
1:[
['持有咖啡公司 40% 股份，代表什麼？',['擁有公司 40% 的咖啡機與現金','持有公司 40% 的股權利益','必然是公司的 CEO'],1,'股份是一種權益，公司的設備仍屬公司所有。'],
['公司積欠銀行 500 萬元，已繳清股款的普通股東原則上如何負責？',['按比例償還所有欠款','不論情況均需清償','通常不會僅因股東身分負個人清償責任'],2,'有限責任是原則，仍須注意個人保證等例外。'],
['CEO 沒有股份，哪個敘述正確？',['仍可以受聘經營公司','不能擔任 CEO','必然控制所有股東投票權'],0,'公司管理與持股是不同身分。'],
['新投資人向原股東買股份，付款給原股東，通常發生什麼事？',['公司存款增加','既有股份持有人改變','公司一定發行新股'],1,'舊股交易不會因交易本身讓公司收到款項。'],
['持股 40%，能確定擁有控制權嗎？',['一定可以','一定不可以','要看表決權、股東結構與治理安排'],2,'持股比例不是判斷控制權的唯一條件。'],
['公司用 15 萬元買了咖啡機，為什麼公司現金少了 15 萬元，卻不代表股東直接損失了 15 萬元財產？',['公司同時取得設備資產','股東已經把公司資產直接領回家','因為設備不具有任何價值'],0,'公司現金變成設備等另一種資產，不能只看銀行帳戶判斷價值。'],
['投資人花 100 萬元認購公司新發行的 250 股，原股東一股也沒賣，持股比例為什麼仍可能下降？',['因為分母的總股數增加','因為每位原股東都收到股款','因為公司原有的股票自動消失'],0,'新股發行使股份總數增加，原股東的比例可能被稀釋。'],
['CEO 的獎金若只按新開分店數量計算，較合理的判斷為何？',['一定會讓每家分店獲利','可能讓經理人更注意展店數量，但不保證創造價值','CEO 不可能受到獎金制度影響'],1,'獎酬制度可能改變經理人關注的指標，但不等於能確定實際行為。']
],
2:[
['A 用一千萬元買下 B 原股東全部股份，通常由誰收款？',['B 原股東','B 公司','B 的債權人'],0,'舊股出售的對價支付給出售股份的股東。'],
['A 只購買 B 某事業部的設備、技術與營業資產。',['B 必然消滅','A 必然取得全部股份','B 可繼續存在'],2,'資產交易不等於買下公司法人。'],
['A 吸收合併 B，A 存續、B 消滅，B 的權利義務原則上如何處理？',['全部消失','由 A 概括承受','由 B 原股東自行承受'],1,'法定合併與單純資產交易的結構不同。'],
['Microsoft 收購 Activision Blizzard 的結構為何？',['兩家公司都消滅','Activision Blizzard 存續為子公司','只買幾款遊戲商標'],1,'交易採反向三角合併的架構。'],
['上市公司完成私有化後？',['必須停業','員工必須離職','可能繼續營業，但不再公開交易'],2,'私有化不同於解散。'],
['你出售自己持有的晨光咖啡舊股，哪個說法最精確？',['晨光咖啡必然增加相同金額的資本','只有公司的股東可能換人，舊股款是原出售股東收到','咖啡店的設備會直接變成買方公司資產'],1,'股權收購交易與公司發行新股不同。'],
['星河持有 60% 同權普通股，能保證通過公司每一項重大決議嗎？',['可以，超過 50% 就不需要其他程序','不可以，仍須依事項檢查股東會、董事會及特別決議門檻','只要有 CEO 同意就可以'],1,'取得過半股份通常代表重要影響，但不同公司法定程序可能有較高門檻。'],
['Jensen 與 Ruback（1983）的公司控制權市場，可以用哪個白話問題理解？',['為什麼不同管理團隊可能競爭取得管理公司資源的權利','為什麼每一筆併購都一定成功','為什麼資產收購絕對沒有風險'],0,'研究討論控制權交易及股東價值，不能從中推出每筆交易保證成功。']
],
3:[
['為何進入新市場可能選擇收購而非自行設立業務？',['一定更便宜','較快取得現有資源與市場基礎','完全沒有整合風險'],1,'收購可能加速進入，但通常需承擔收購溢價與整合風險。'],
['A 價值 100、B 價值 50、合併後 180，綜效是多少？',['30','50','180'],0,'180 − 100 − 50 = 30。'],
['哪項是成本綜效？',['增加海外客戶','合併採購降低單位成本','支付更高收購價格'],1,'共同採購可以減少成本。'],
['CEO 為擴大自己管理的規模而從事低報酬收購？',['規模經濟','營收綜效','Empire Building'],2,'這是代理問題的一種可能表現。'],
['有綜效仍可能讓買方股東受損，主要因為？',['收購價格可能過高','有綜效就必然獲利','股權收購不改變控制權'],0,'綜效的好處可能全被出售價格吸收。'],
['目標公司獨立價值 100 萬、綜效 40 萬、整合成本 10 萬，買方以 140 萬收購。忽略其他條件，買方淨價值是多少？',['+10 萬','0 萬','−10 萬'],2,'100 + 40 − 10 − 140 = −10 萬；有綜效仍可能因出價過高而不划算。'],
['CEO 有大量可支配現金但缺乏高報酬投資機會，仍持續以昂貴價格收購。這最適合拿來檢查什麼可能機制？',['Jensen（1986）的自由現金流代理問題','所有收購一定有規模經濟','法律上公司必須私有化'],0,'自由現金流與管理者誘因可能導致過度投資；但這個故事本身仍不足以證明自利。'],
['某公司收購擁有很強研發能力的團隊，但主要工程師離職。哪個判斷比較合理？',['買到專利就必然保有全部創新能力','預期資源互補綜效可能因人才流失受損','取得股權後不需要整合'],1,'法律上取得企業，與有效保留組織知識及人才是兩回事。']
]};
quizData[4]=[
['在股權收購中，買方支付價款購買原股東的舊股，通常是誰收到錢？',['目標公司','出售股份的原股東','收購方的顧問'],1,'舊股轉讓的價款支付給原股東；公司本身不會直接收到該款項。'],
['哪個敘述最能區分 Signing 與 Closing？',['簽約就是交割完成','簽約後仍可能等待核准與交割條件','只有媒體公告才算交割'],1,'正式契約與實際付款、移轉權益可能發生於不同日期。'],
['為什麼不應該只因「熟悉對方」就決定收購標的？',['熟悉一定降低績效','熟悉可能使搜尋範圍變窄或高估預期價值','不熟悉的企業一定比較好'],1,'既有關係有資訊好處，也可能造成搜尋限制和樂觀評估。'],
['買方發現新增加 150 萬元的整合風險，較合理的反應是？',['保證價格不變','不再做任何調查','重新評估價格、交割條件或風險分配'],2,'盡職調查影響交易價格與契約條件，不只是程序。'],
['Adobe 與 Figma 宣布收購但未完成，最能說明什麼？',['所有收購都會失敗','監管核准可能使已簽約交易終止','企業宣布收購即成為股東'],1,'簽約不代表已交割，監管障礙可能影響交易是否完成。'],
['NDA（保密協議）與 LOI（意向書）的差別，何者較正確？',['簽了 NDA 就等於收購完成','NDA 主要限制機密資訊揭露與使用；LOI 記錄部分初步交易共識，須看具體條款','LOI 中的所有條款一定沒有法律效力'],1,'NDA 著重資訊保護，LOI 著重初步交易安排；部分 LOI 條款可能依法具有拘束力。'],
['Rogan 與 Sorenson（2014）研究共同客戶與併購，最接近的研究發現是什麼？',['共同客戶較多的標的更容易被收購，但合併後績效可能較差','買認識的人一定成功','任何客戶重疊都使企業違法'],0,'研究樣本是全球廣告業，顯示共同客戶與收購選擇及合併後績效存在反向的關聯，不能推論所有產業皆然。'],
['買方擔心賣方比自己更了解租約、稅務和商標權利，這最接近哪個問題？',['規模經濟','資訊不對稱與不良選擇風險','股東有限責任'],1,'雙方資訊不同可能使交易定價與契約安排更困難，盡職調查與保護條款能協助應對，但不保證消除風險。'],
['Adobe 和 Figma 在 2023 年終止已簽署的收購協議，哪種說法正確？',['Figma 已被 Adobe 買下','雙方雖已簽約，但因必要監管核准沒有明確可行路徑而終止，並依約支付終止費','只要雙方 CEO 同意，就能不經主管機關審查完成'],1,'依 Adobe 官方公告與 SEC 申報，雙方在未交割前終止，Adobe 依約支付 10 億美元終止費用。'],
['Graebner（2004）為什麼強調被收購企業原有的管理者？',['他們可能在整合中幫助實現預期價值與意外發現的新價值','收購後應立刻撤換所有原管理者','交易價款只能支付給經理人'],0,'研究在八筆科技公司收購中分析原管理者如何幫助整合，不代表所有情境都有相同效果。']
];

quizData[5]=[
['晨光買下同商圈直接競爭的咖啡連鎖，最先描述哪一種產業關係？',['水平併購','垂直併購','非相關多角化'],0,'兩間企業原本互相競爭。法律上採資產買賣或股權買賣，並不改變這層競爭關係。'],
['晨光購買原本供應咖啡豆的烘焙廠，通常屬於？',['向前垂直整合','向後垂直整合','敵意收購'],1,'咖啡門市把上游供應商納入企業邊界，是向後整合。'],
['買日本咖啡連鎖，同時可能被歸類為？',['只有跨境，不能是水平','水平且跨境','只能算非相關多角化'],1,'跨境是不同法域的地理維度；同為咖啡連鎖的業務關係也可能是水平。'],
['Teece（1980）提醒我們：兩種事業能共用資源代表什麼？',['一定要併購才能共享','即使存在範疇經濟，也不必然需要同一企業擁有','所有供應商都必須保留在外部'],1,'是否適合內部化，還要看專有知識、共同資產與契約協調的特性。'],
['買下甜點品牌並共用會員、外送與門市通路，比較接近哪個機制？',['範疇經濟','敵意收購','法定吸收合併的必要條件'],0,'兩項相關業務可共用能力，可能產生範疇經濟，但仍需計入整合成本。'],
['公司多角化後估值較低，就能確定「多角化使估值下降」嗎？',['可以，相關就是因果','不能，原先較低估值的公司可能更容易選擇多角化','可以，因為每家公司都隨機決定是否多角化'],1,'Campa & Kedia（2002）提醒多角化選擇與企業價值可能有內生性及自我選擇問題。'],
['友善與敵意收購，主要區分的是哪一件事？',['公司是否在同產業','目標董事會支持收購的互動與談判狀態','是否跨越國境'],1,'友善／敵意主要描述收購與目標董事會之間的關係；不能直接推論交易結果好壞。'],
['Schwert（2000）研究敵意收購，最接近哪項提醒？',['新聞標為敵意的交易在每項經濟特徵上都更差','新聞中敵意或友善的區分，也可能和談判何時公開有關','敵意收購都不會成功'],1,'Schwert 發現兩種交易在許多經濟特徵上不易區分，敵意標籤也受談判資訊公開影響。'],
['T-Mobile 與 Sprint 2020 年合併為什麼需要競爭審查及補救？',['兩家公司原本提供競爭性通訊服務，合併可能減弱競爭','只因為其中一家跨境','只因為雙方原本共用會計系統'],0,'水平併購可能有網路整合好處，也可能減少競爭，司法部要求分割部分業務等措施。'],
['CVS 收購 Aetna，哪個敘述較為精確？',['只有上下游關係，完全不存在水平重疊','既涉及不同健康服務環節整合，某些保險產品也有水平重疊','CVS 買下了世界所有的保險公司'],1,'這個案例說明複雜企業可能在不同產品市場同時存在垂直關係與水平重疊。']
];


quizData[6]=[
['企業挑選收購標的之前，最先應該回答哪個問題？',['哪家收購新聞最多','我們究竟缺少什麼能力，以及為什麼要買','哪家公司老闆最熟悉'],1,'先訂策略目的，再看標的能否補上缺口。'],
['A 是合作十年的熟悉品牌，B 是不熟悉但技術互補的公司。哪個推論最合理？',['A 一定比 B 便宜且有價值','B 一定沒有整合風險','熟悉可能降低搜尋成本，也可能限制候選範圍'],2,'Rogan 與 Sorenson（2014）說明共同顧客與併購選擇、後續績效可能存在不同方向的關聯。'],
['Rogan 與 Sorenson（2014）的研究樣本與結果最接近？',['全球廣告業共同客戶較多，收購機率較高但合併後顧客表現可能較差','所有咖啡公司都應避免熟人','所有產業共同客戶都一定創造綜效'],0,'作者利用 1995–2003 全球廣告業資料研究收購選擇及合併後績效，不能直接推論所有產業。'],
['企業透過收購取得程式碼，但工程師離職、授權不完整。這說明什麼？',['只要取得股票就必然取得全部人才與創新能力','資源互補的綜效需要考慮人才、權利及整合安排','所有技術收購都沒有任何價值'],1,'法律所有權與可實現的組織能力不同。'],
['Ransbotham 與 Mitra（2010）關於年輕科技標的的研究提醒什麼？',['越年輕越保證成功','收購時機有提早取得成長選擇權與資訊不確定的取捨','等待越久價格一定越低'],1,'年齡、估值不確定、成長選擇權及專利、私人公司等條件影響收購時機判斷。'],
['某標的獨立股權價值 700 萬、可實現綜效 180 萬、整合花 40 萬、其他風險 30 萬。忽略其他費用，買方最高合理價格約為？',['700 萬','810 萬','950 萬'],1,'700＋180－40－30＝810 萬。實際估值需另看現金流時間價值與資本結構。'],
['公司開價 650 萬，比其他公司的 800 萬便宜，代表一定更值得買嗎？',['是，標價低就是價值高','不，還要考慮獨立價值、客戶集中、整合成本及可實現綜效','是，因為現金支付沒有機會成本'],1,'收購價是否划算必須相對於標的價值與買方增量收益判斷。'],
['如果買方只想試用一套點餐技術，而技術能可靠授權，什麼選項可能值得比較？',['只可以買全部股份','合作或授權、自己建立與收購都可能是替代方案','一定要讓目標公司法律主體消失'],1,'Buy／Build／Ally 的比較可以在不轉移所有權的情況下取得能力。'],
['Disney 收購 Pixar 的人才整合案例，最重要的標的選擇教訓？',['買下創意公司就可以忽略原團隊','原本互補的能力能否保留並部署到買方業務很重要','所有綜效都在簽約當日實現'],1,'Disney 在交易後安排原 Pixar 主管參與動畫業務領導，說明標的的組織人才需納入整合。'],
['eBay 收購 Skype 後曾認列減損又出售多數股權，最合理的解讀？',['會計減損就是當年的全部現金流出','Skype 沒有任何商業價值','策略綜效可能未如預期；減損、出售價與最終現金報酬需分開判斷'],2,'eBay 後來坦承與核心電商業務綜效不足；減損不等於全部投資報酬，因出售後仍保留部分 Skype 股權。']
];


quizData[7]=[
['晨光咖啡年營收 1,000 萬，可以直接說公司每年賺 1,000 萬嗎？',['可以，營收就是淨利','不可以，還要扣成本、費用、利息與稅','可以，因為顧客已付現金'],1,'營收是銷售額，淨利需要扣除成本費用，現金流還要考慮收付款與投資。'],
['公司年底資產 1,050 萬、負債 420 萬，帳面權益為？',['630 萬','1,470 萬','1,050 萬'],0,'會計恆等式：資產 1,050－負債 420＝帳面權益 630，不等於保證的市場股權價值。'],
['晨光 EBIT 180 萬、折舊 40 萬，EBITDA 為？',['140 萬','220 萬','180 萬'],1,'本例沒有其他攤銷時，EBITDA＝EBIT＋折舊＝220；不等於自由現金流。'],
['EBIT 180、稅率 20%、折舊 40、CapEx 75、營運資金增加 25，FCFF 為？',['84 萬','128 萬','220 萬'],0,'180×(1−0.2)+40−75−25＝84 萬；本例的 FCFF 對應 EV 與 WACC。'],
['某公司百分百股份要價 500 萬、計息借款 80 萬、全部 100 萬現金可加回。簡化 EV 是？',['680 萬','480 萬','500 萬'],1,'EV＝股權價值＋計息借款−多餘現金＝500＋80−100＝480。'],
['如果公司帳上現金 100 萬，其中 60 萬必須留作日常營運，什麼說法更合理？',['100 萬全部一定可在 EV 橋接時加回','至少要先辨認可自由移出的多餘現金，不能直接把 100 萬全視為可加回','股東賣舊股時公司必然收到 100 萬'],1,'本例查核確認只有 40 萬屬可加回的多餘現金；現實還要核對法律及營運限制。'],
['用 4 倍 EV／EBITDA 乘上 220 萬 EBITDA，得到的是？',['EV 880 萬，而不是立刻得到股權價值','股東淨利 880 萬','股東帳面權益必然是 880 萬'],0,'先得 EV 880，還要處理淨負債等項目才能得到股權價值。'],
['Kaplan 與 Ruback（1995）的研究，最合理的理解為何？',['DCF 對所有企業永遠只有 10% 誤差','在特定 51 筆高度槓桿交易的樣本中，DCF 估值與市場交易價值具一定接近程度','每家私人咖啡店都可以不用估資金成本'],1,'該研究比較特定年代 51 筆 HLT 的現金流折現與市場交易價，不能當普遍精度保證。'],
['五年 DCF 中終值現值約占 EV 的 63%，最需要注意什麼？',['終值完全不重要','未來很遠的永續成長與折現假設會大幅影響估值','只要最後一年營收很高就不需折現'],1,'終值占比高代表長期假設對估值敏感，且永續成長率應低於 WACC。'],
['Disney 收購 Pixar 公告為 74 億美元全股票交易（淨 Pixar 現金後約 63 億），應怎麼理解？',['兩個數字必須相加成 137 億','74 億是公告時根據換股比率與股價估算的交易價，63 億為扣除 Pixar 淨現金後的公告淨額，並非兩筆付款','用新發行股票支付完全沒有任何股東成本'],1,'全股票交易仍有股權稀釋與經濟對價；公告估值也不代表已被證明的內在價值。']
];


quizData[8]=[
['假設標的獨立股權價值 500 萬、綜效 150 萬、整合 35 萬、風險 20 萬、查核 10 萬，買方示意最高合理價是多少？',['650 萬','585 萬','500 萬'],1,'買方最高價＝500＋150－35－20－10＝585 萬；未扣成本就把綜效全加上去容易過度出價。'],
['晨光私人公司估值 500 萬、出售價 560 萬，12% 加價比率最精確的描述是？',['相對自行估計獨立股權價值的教學加價率','上市股票公告前的觀察市價溢價','政府規定的固定控制權溢價'],0,'私人公司沒有公開上市未受消息影響的股價，基準應清楚說明。'],
['如果賣方最低接受價 520 萬、買方最高價 585 萬，且成交價是 560 萬，誰取得多少新增價值？',['賣方相對獨立價值增量 60 萬，買方增量 25 萬','買方一定取得全部 150 萬綜效','賣方拿 560 萬且公司帳戶自動增加 560 萬'],0,'賣方＝560−500＝60，買方＝585−560＝25；合計增量 85。'],
['用新股支付 560 萬、星河每股簽約參考價 1,000 元，需新發幾股？',['560 股','5,600 股','56,000 股'],1,'560 萬元＝5,600,000 元，除以 1,000 元／股＝5,600 股。'],
['星河原有 15,000 股，新發 5,600 股收購晨光，星河原股東的持股比例約是？',['100%','72.82%','27.18%'],1,'15,000／20,600≈72.82%，被稀釋是所有權比例變動，不代表創造新股沒有經濟成本。'],
['固定換股股數 5,600 股，若買方股價從 1,000 元跌至 800 元，這批股票的當時參考市值是多少？',['560 萬','448 萬','800 萬'],1,'固定股數不變，5,600×800＝448 萬元。這是參考市值，不能當交割後實際保證價值。'],
['績效對價先付 520 萬，一年後達標才多付 40 萬，達標機率 60%、折現率 10%，簡化預期現值約？',['560 萬','544 萬','541.8 萬'],2,'520＋(0.6×40)／1.1≈541.82 萬；名目上限不是現在已收到的現金。'],
['Bertrand、Betschinger 與 Settles（2016）對跨境交易初始溢價的研究，何者最接近？',['國家政治親近度較高與較低初始出價溢價呈關聯','政治關係差就一定無法完成交易','所有政治風險都能用加價完全消除'],0,'研究以聯合國投票衡量政治親近度，指出議價力量與初始出價之間的關係，並非固定的加價規則。'],
['三筆真實案例裡，哪一組支付方式對照正確？',['Microsoft／Activision：股票；Disney／Pixar：現金','Microsoft／Activision：現金；Disney／Pixar：換股；Salesforce／Slack：現金與股票','三筆全部採完全相同的支付方式'],1,'Microsoft 每股現金 95 美元，Disney 每股 Pixar 換 2.3 股 Disney；Salesforce 給 Slack 26.79 美元＋0.0776 股。'],
['如果交易協議使用 Escrow、Earn-out 或終止費，什麼說法最正確？',['全部風險因此在經濟上消失','名目最高價一定等於簽約日已收到的價款','契約可調整付款條件與風險分擔，但不自動消除經濟風險'],2,'特定條款會改變支付時間、條件和責任，並不會使顧客流失、監管或營運風險憑空消失。']
];


// New 07–10 independent quizzes; preserve original 01–06 questions.
const prior7=quizData[7].slice(),prior8=quizData[8].slice();
quizData[7]=[...prior7.slice(0,6),...[["歷史 FCFF 84 萬與下一堂預測 FCFF 45 萬為什麼可以不同？",["兩者是不同期間與假設","FCFF 就是股利","歷史現金流等於 DCF"],0,"必須區分歷史資料與預測設定。"],["CapEx 增加 35 萬、其他不變，原 FCFF 84 萬會變成？",["119 萬","84 萬","49 萬"],2,"FCFF 減少 35 萬。"]]];
quizData[8]=[...prior7.slice(6,10),...[["FCFF 以 WACC 折現先得到什麼？",["EV","當期營收","股利"],0,"FCFF 和 WACC 對應企業價值。"],["其他不變，WACC 提高，未來正現金流的現值通常？",["提高","降低","固定"],1,"折現率提高使現值下降。"],["選同業估值倍數最重要的是？",["公司名稱相似","只看股價","成長、風險與口徑可比"],2,"不具可比性的倍數沒有直接套用意義。"],["DCF 終值占比高有什麼限制？",["對長期假設很敏感","必然完全準確","無須估 WACC"],0,"長期折現率與成長率假設會主導估值。"]]];
quizData[9]=[prior8[0],prior8[1],prior8[2],prior8[7],...[["另一買家提高賣方底價，最直接改變？",["賣方外部選擇","EBIT","買方整合能力"],0,"外部選擇改變議價，未必改變營運價值。"],["賣方底價 600 萬、買方上限 585 萬，合理判斷？",["一定成交","沒有共同可接受區間","買方綜效自動提高"],1,"雙方底線沒有交集，可以改條件或退出。"],["上市公司公告溢價應比對？",["公告前參考股價","晨光獨立價值","借款利率"],0,"公告溢價必須明確界定基準日。"],["股價公告時上升能證明長期整合成功？",["能","不能，反映當時預期","只要價款是現金就能"],1,"公告反應不能代替多年後的實際績效。"]]];
quizData[10]=[...prior8.slice(3,7),prior8[8],prior8[9],...[["新股支付的成本包含？",["原股東持股稀釋與股價風險","永遠零成本","與控制權無關"],0,"股票支付可能改變持股比例。"],["Earn-out 名目最高價與期望現值不同是因為？",["未來有條件付款與折現","股數自動減少","EV 永遠等於最高名目價"],0,"期望現值需考慮達標機率與時點。"]]];
const references={
1:[['SEC Investor.gov — Stocks','https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks'],['台灣公司法（法規檢索）','https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001'],['Fama & Jensen (1983), Separation of Ownership and Control','https://doi.org/10.1086/467037'],['Jensen & Meckling (1976), Agency Costs and Ownership Structure','https://doi.org/10.1016/0304-405X(76)90026-X'],['Microsoft (2023), acquisition completion SEC 8-K','https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm']],
2:[['台灣企業併購法','https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080041'],['Microsoft: Activision Blizzard acquisition, SEC 8-K','https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm'],['Jensen & Ruback (1983), The Market for Corporate Control','https://doi.org/10.1016/0304-405X(83)90004-1'],['Fama & Jensen (1983), Separation of Ownership and Control','https://doi.org/10.1086/467037'],['Lenovo (2014), IBM x86 server business initial closing','https://news.lenovo.com/pressroom/press-releases/lenovo-completes-initial-closing-for-acquisition-of-ibms-x86-server-business/']],
3:[['Andrade, Mitchell & Stafford (2001), New Evidence and Perspectives on Mergers','https://doi.org/10.1257/jep.15.2.103'],['Teece (1980), Economies of Scope and the Scope of the Enterprise','https://doi.org/10.1016/0167-2681(80)90002-5'],['Trautwein (1990), Merger Motives and Merger Prescriptions','https://doi.org/10.1002/smj.4250110404'],['Jensen (1986), Agency Costs of Free Cash Flow','https://www.jstor.org/stable/1818789'],['Roll (1986), The Hubris Hypothesis of Corporate Takeovers','https://doi.org/10.1086/296325'],['Disney and Pixar acquisition announcement (2006)','https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/'],['Microsoft Nokia restructuring (2015)','https://news.microsoft.com/source/2015/07/08/microsoft-announces-restructuring-of-phone-hardware-business']]
};
references[4]=[
['Rogan & Sorenson (2014), Picking a (Poor) Partner, ASQ','https://doi.org/10.1177/0001839214531719'],
['Reuer & Ragozzino (2008), Adverse selection and M&A design, JEBO','https://doi.org/10.1016/j.jebo.2006.04.003'],
['Graebner (2004), Acquired leaders and integration, SMJ','https://doi.org/10.1002/smj.419'],
['Schijven et al. (2026), Thirty-three years after Managing Acquisitions, SMR','https://doi.org/10.1108/SMR-11-2022-0911'],
['Arroyabe, Grimpe & Hussinger (2025), Trade Secret Protection, Strategy Science','https://doi.org/10.1287/stsc.2023.0066'],
['Graebner et al. (2017), The Process of Postmerger Integration','https://doi.org/10.5465/annals.2014.0078'],
['Microsoft / Activision Blizzard: completion SEC 8-K (2023-10-13)','https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm'],
['UK CMA: Microsoft / Activision merger inquiry','https://www.gov.uk/cma-cases/microsoft-slash-activision-blizzard-ex-cloud-streaming-rights-merger-inquiry'],
['Adobe / Figma: termination announcement (2023-12-18)','https://news.adobe.com/news/news-details/2023/adobe-and-figma-mutually-agree-to-terminate-merger-agreement'],
['Adobe / Figma: SEC termination filing','https://www.sec.gov/Archives/edgar/data/796343/000079634323000254/adbe-20231217.htm']
];

references[5]=[
['Teece (1980), Economies of scope and the scope of the enterprise, JEBO','https://doi.org/10.1016/0167-2681(80)90002-5'],
['Ahuja & Novelli (2017), The search for synergy, Academy of Management Annals','https://doi.org/10.5465/annals.2014.0079'],
['Campa & Kedia (2002), Explaining the diversification discount, Journal of Finance','https://doi.org/10.1111/1540-6261.00476'],
['Schwert (2000), Hostility in takeovers, Journal of Finance','https://doi.org/10.1111/0022-1082.00301'],
['Taiwan Fair Trade Commission, Guidelines on Handling Merger Filings','https://www.ftc.gov.tw/internet/english/doc/docDetail.aspx?docid=2719&uid=744'],
['T-Mobile / Sprint closing announcement (2020-04-01)','https://www.t-mobile.com/news/un-carrier/t-mobile-sprint-one-company'],
['US DOJ, T-Mobile / Sprint remedy and final judgment (2020)','https://www.justice.gov/archives/opa/pr/court-enters-final-judgment-t-mobilesprint-transaction'],
['CVS / Aetna completion announcement (2018-11-28)','https://investors.cvshealth.com/news/news-details/2018/CVS-Health-Completes-Acquisition-of-Aetna-Marking-the-Start-of-Transforming-the-Consumer-Health-Experience/default.aspx'],
['US DOJ, CVS / Aetna Medicare Part D remedy (2018)','https://www.justice.gov/archives/opa/pr/justice-department-requires-cvs-and-aetna-divest-aetna-s-medicare-individual-part-d'],
['Lenovo / IBM x86 server business initial closing (2014)','https://news.lenovo.com/pressroom/press-releases/lenovo-completes-initial-closing-for-acquisition-of-ibms-x86-server-business/'],
['Oracle / PeopleSoft negotiated merger agreement (2004)','https://www.oracle.com/corporate/pressrelease/oracle-buys-peoplesoft-121304.html'],
['Oracle / PeopleSoft SEC tender offer closing announcement (2005)','https://www.sec.gov/Archives/edgar/data/875570/000119312505003124/dex99a5clxlxi.htm'],
["T-Mobile 2022 annual integration report, customer migration and merger synergies","https://investor.t-mobile.com/static-files/e12e6af9-1a63-46ba-b987-8077a0914dfa"],
["T-Mobile fiscal Q3 2026 earnings (2026-10-28)","https://www.t-mobile.com/news/business/t-mobile-q3-2026-earnings"],
["CVS 2018 Aetna combined company management structure","https://investors.cvshealth.com/news/news-details/2018/CVS-Health-Announces-Management-Team-for-Combined-Company-Following-Close-of-Aetna-Acquisition-Transaction/default.aspx"],
["CVS 2026 Q2 financial and Aetna segment results","https://investors.cvshealth.com/news/news-details/2026/CVS-HEALTH-CORPORATION-REPORTS-STRONG-SECOND-QUARTER-2026-RESULTS-AND-RAISES-FULL-YEAR-2026-GUIDANCE/default.aspx"],
["Lenovo 2014 initial x86 acquisition rationale and business boundaries","https://news.lenovo.com/pressroom/press-releases/lenovo-plans-to-acquire-ibms-x86-server-business/"],
["Lenovo 2025/26 full-year ISG results","https://news.lenovo.com/pressroom/press-releases/fy-2025-26/"],
["Lenovo 2026/27 fiscal Q1 ISG results","https://news.lenovo.com/pressroom/press-releases/q1-fy-2026-27/"],
["Oracle 2005 integration and restructuring SEC report","https://www.sec.gov/Archives/edgar/data/777676/000119312505248838/d10ka.htm"],
["Oracle PeopleSoft support commitment to at least 2037","https://blogs.oracle.com/peoplesoft/peoplesoft-support-extended-through-at-least-2037-long-term-confidence-continued-innovation"],
["Oracle PeopleTools 8.63 on-premise release (2026-10-20)","https://blogs.oracle.com/peoplesoft/peopletools-8-63-is-now-available-for-on-premises-installation"]
];


references[6]=[
['Rogan & Sorenson (2014), Picking a (Poor) Partner, ASQ','https://doi.org/10.1177/0001839214531719'],
['Ransbotham & Mitra (2010), Target Age and the Acquisition of Innovation, Management Science','https://doi.org/10.1287/mnsc.1100.1223'],
['Capron, Dussauge & Mitchell (1998), Resource Redeployment Following Horizontal Acquisitions, SMJ','https://doi.org/10.1002/%28SICI%291097-0266%28199807%2919%3A7%3C631%3A%3AAID-SMJ963%3E3.0.CO%3B2-9'],
['Graebner (2004), Momentum and Serendipity, SMJ','https://doi.org/10.1002/smj.419'],
['Disney / Pixar January 2006 acquisition agreement','https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/'],
['Disney / Pixar May 2006 acquisition completion','https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/'],
['Pixar official studio history','https://www.pixar.com/our-story'],
['Disney / Pixar 2026 film lineup','https://thewaltdisneycompany.com/news/disney-movies-theaters-spring-2026/'],
['Salesforce / Slack 2020 agreement and deal price','https://investor.salesforce.com/news/news-details/2020/Salesforce-Signs-Definitive-Agreement-to-Acquire-Slack/default.aspx'],
['Salesforce / Slack 2021 completion','https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/'],
['Salesforce Slackbot Jan 2026 launch','https://www.salesforce.com/news/press-releases/2026/01/13/slackbot-announcement/'],
['Slack at Dreamforce Sept 2026','https://slack.com/blog/news/ai-powered-interface-for-work'],
['eBay / Skype 2005 acquisition SEC Form 8-K','https://www.sec.gov/Archives/edgar/data/1065088/000095013405019311/f13541e8vk.htm'],
['eBay / Skype 2009 majority divestiture','https://investors.ebayinc.com/investor-news/press-release-details/2009/EBay-Inc-Completes-Sale-of-Skype/default.aspx'],
['eBay 2014 final investment and synergy commentary','https://investors.ebayinc.com/investor-news/press-release-details/2014/Statement-by-eBay-Inc-eBay-Inc-Reiterates-The-Truth-About-Skype/default.aspx']
];


references[7]=[
['CFA Institute (2026), Free Cash Flow Valuation: FCFF, FCFE, EBIT, WACC and terminal value definitions','https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/free-cash-flow-valuation'],
['Kaplan & Ruback (1995), The Valuation of Cash Flow Forecasts, Journal of Finance','https://doi.org/10.1111/j.1540-6261.1995.tb04050.x'],
['Liu, Nissim & Thomas (2002), Equity Valuation Using Multiples, Journal of Accounting Research','https://doi.org/10.1111/1475-679X.00042'],
['Bhojraj & Lee (2002), Who Is My Peer?, Journal of Accounting Research','https://doi.org/10.1111/1475-679X.00054'],
['Andrade, Mitchell & Stafford (2001), New Evidence and Perspectives on Mergers, JEP','https://doi.org/10.1257/jep.15.2.103'],
['Bromiley (1990), book chapter cited in later Wiley review (bibliographic pointer, not the original chapter)','https://onlinelibrary.wiley.com/doi/10.1111/b.9780631218616.2006.00010.x'],
['Microsoft 2022 offer announcement: Activision Blizzard $95 per share','https://news.microsoft.com/source/2022/01/18/microsoft-to-acquire-activision-blizzard-to-bring-the-joy-and-community-of-gaming-to-everyone-across-every-device/'],
['Microsoft 2023 SEC 8-K confirming Activision Blizzard closing','https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm'],
['Microsoft 2026 Annual Report (Xbox revenue and gaming content)','https://www.microsoft.com/investor/reports/ar26/'],
['Disney / Pixar 2006 all-stock acquisition agreement','https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/'],
['Disney / Pixar 2006 closing announcement','https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/'],
['Disney 2006 SEC 10-K: share issuance and dilution','https://www.sec.gov/Archives/edgar/data/1001039/000119312506241109/d10k.htm'],
['Disney 2026 Pixar films','https://thewaltdisneycompany.com/news/disney-movies-theaters-spring-2026/']
];


references[8]=[
['Cain, Denis & Denis (2011), Earnouts: A Study of Financial Contracting in Acquisition Agreements, Journal of Accounting and Economics','https://doi.org/10.1016/j.jacceco.2010.05.001'],
['Jensen & Ruback (1983), The Market for Corporate Control, Journal of Financial Economics','https://doi.org/10.1016/0304-405X(83)90004-1'],
['Andrade, Mitchell & Stafford (2001), New Evidence and Perspectives on Mergers, JEP','https://doi.org/10.1257/jep.15.2.103'],
['Travlos (1987), Corporate Takeover Bids, Methods of Payment and Bidding Firms Stock Returns, Journal of Finance','https://doi.org/10.1111/j.1540-6261.1987.tb03921.x'],
['Fishman (1989), Preemptive Bidding and the Role of the Medium of Exchange in Acquisitions, Journal of Finance','https://doi.org/10.1111/j.1540-6261.1989.tb02403.x'],
['Bertrand, Betschinger & Settles (2016), Political Affinity and Initial Acquisition Premium, Strategic Management Journal','https://doi.org/10.1002/smj.2438'],
['Microsoft (2022), Activision Blizzard offer $95/share in cash','https://news.microsoft.com/source/2022/01/18/microsoft-to-acquire-activision-blizzard-to-bring-the-joy-and-community-of-gaming-to-everyone-across-every-device/'],
['Activision Blizzard investor information: 45% premium to unaffected close','https://investor.activisionblizzard.com/static-files/0164bd51-ba85-49ed-9ae3-eea498f943c9'],
['Microsoft (2023) completed Activision Blizzard deal, SEC 8-K','https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm'],
['Disney (2006) all-stock Pixar merger announcement','https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/'],
['Disney (2006) closing announcement for Pixar','https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/'],
['Disney (2006) SEC Form 10-K issuance of 279m Disney shares','https://www.sec.gov/Archives/edgar/data/1001039/000119312506241109/d10k.htm'],
['Salesforce (2020) agreement to buy Slack with $26.79 and 0.0776 shares','https://investor.salesforce.com/news/news-details/2020/Salesforce-Signs-Definitive-Agreement-to-Acquire-Slack/default.aspx'],
['Salesforce (2020) transaction financing and consideration, SEC filing','https://www.sec.gov/Archives/edgar/data/1108524/000119312520307414/d86936d425.htm'],
['Salesforce (2021) Slack merger completion SEC 8-K','https://www.sec.gov/Archives/edgar/data/1764925/000119312521220234/d171429d8k.htm'],
['Salesforce (2026) Slackbot product integration announcement','https://www.salesforce.com/news/press-releases/2026/01/13/slackbot-announcement/']
];


const prior7refs=references[7].slice(),prior8refs=references[8].slice();
references[7]=prior7refs.filter((r,i)=>[0,1,2,4,7,8,9,10].includes(i));
references[8]=prior7refs;
references[9]=prior8refs.filter((r,i)=>[1,2,4,5,6,7,8,9].includes(i));
references[10]=prior8refs;
const readProgress=()=>{try{const key='ma-academy-progress-v2',raw=localStorage.getItem(key);if(raw!==null){const v=JSON.parse(raw);return Array.isArray(v)?[...new Set(v.filter(n=>Number.isInteger(n)&&n>=1&&n<=COURSE_TOTAL))]:[]}const old=JSON.parse(localStorage.getItem('ma-academy-progress-v1')||'[]');const v=Array.isArray(old)?old.filter(n=>Number.isInteger(n)&&n>=1&&n<=6):[];localStorage.setItem(key,JSON.stringify(v));return v}catch{return []}};
let completed=readProgress();
const saveProgress=()=>{try{localStorage.setItem('ma-academy-progress-v2',JSON.stringify(completed))}catch{}};
const el=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(title,body)=>'<section class="section"><h2>'+title+'</h2><div class="card">'+body+'</div></section>';
const h3=t=>'<h3>'+t+'</h3>';
const p=t=>'<p>'+t+'</p>';
const call=t=>'<div class="callout">'+t+'</div>';
const div2=(a,b)=>'<div class="grid-2">'+a+b+'</div>';
const mini=(label,value,desc='')=>'<div class="mini"><div class="label">'+label+'</div><div class="value">'+value+'</div>'+(desc?'<p>'+desc+'</p>':'')+'</div>';
const table=(heads,rows)=>'<div class="table-scroll"><table><thead><tr>'+heads.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
function lesson1(){
return card('01｜公司為什麼不是創辦人的私人錢包？',
p('假設你與兩位朋友成立「晨光咖啡股份有限公司」，一共投入新臺幣 100 萬元。你出資 50 萬、朋友 A 出資 30 萬、朋友 B 出資 20 萬。')+
div2(mini('公司收到的出資','100 萬元','屬於公司，不是三人的私人存款'),mini('你個人的出資','50 萬元','換取公司股份而不是直接擁有咖啡機'))+
call('公司是獨立的法人（Legal Person）。股東擁有股份；公司本身擁有咖啡機、現金、品牌與其他資產。')+
p('例如你持有 50% 股份，不代表你個人擁有店裡一半的設備。')+
h3('有限責任（Limited Liability）')+
p('股份有限公司的股東原則上以其繳清的股份金額為限負責。公司欠銀行錢，不表示銀行可以僅依股東身分向你個人追討全部欠款；個人保證或濫用法人地位等情形則可能例外。'))+
card('02｜股份與股東：誰擁有多少？',
p('假設公司共發行 1,000 股相同權利的普通股，每出資 1,000 元取得一股。')+
table(['股東','持股數','持股比例'],[['你','500 股','50%'],['朋友 A','300 股','30%'],['朋友 B','200 股','20%'],['總計','1,000 股','100%']])+
'<div class="bar"><span class="b1" style="width:50%">你 50%</span><span class="b2" style="width:30%">A 30%</span><span class="b3" style="width:20%">B 20%</span></div>'+
p('<strong>持股比例 = 個人持股數 ÷ 已發行股份總數 × 100%。</strong> 同權普通股通常涉及股東會投票、股利分配及清算剩餘財產的權利，但公司有盈餘不等於一定配發股利。'))+
card('03｜所有權不等於經營權',
'<div class="visual"><div class="diagram-node">股東 Shareholders｜持有股份</div><div class="arrow">↓ 選任董事</div><div class="diagram-node">董事會 Board of Directors｜治理與重大決策</div><div class="arrow">↓ 任用或監督</div><div class="diagram-node">CEO / 管理團隊｜日常營運</div></div>'+
p('創辦人、股東、董事、董事長、CEO 可以是同一人，也可以是不同人。持有 30% 股份不一定沒有控制權；持有 50% 也不等於任何決議都能獨自通過，還要看表決權和法律門檻。'))+
card('04｜操作練習：舊股交易 vs. 發行新股',
p('有新投資人願意拿出 100 萬元，假設每股議價 4,000 元。他可向你購買 250 股舊股，也可向公司認購 250 股新股。觀察誰收到現金與持股比例如何改變。')+
'<div class="controls" id="share-widget"><div class="tabs"><button class="tab active" type="button" data-share="old">A｜購買舊股</button><button class="tab" type="button" data-share="new">B｜公司發新股</button></div><div id="share-results"></div></div>')+
card('05｜真實交易：Microsoft × Activision Blizzard',
p('2023 年 10 月 13 日，微軟完成對 Activision Blizzard 的收購。法律上，收購子公司與 Activision Blizzard 合併，後者存續並成為微軟全資子公司。')+
call('重要觀念：企業易主不代表目標公司的法人、員工或品牌一定消失。'))}
function lesson2(){
return card('01｜同樣叫收購，買到的可能不同',
p('星河餐飲集團願意以 500 萬元收購晨光咖啡，但「買下公司」究竟是買原股東持有的股份、購買公司資產，還是透過法律安排合併？')+
table(['交易形式','誰取得款項？','買方取得什麼？'],[
['股權收購 Share Acquisition','出售股份的原股東','既有公司的股份與相應股東權利'],
['資產收購 Asset Acquisition','出售資產的公司','約定移轉的資產、營業及權利'],
['法定合併 Merger','依交易對價與合併安排','公司依法結合，權利義務由存續或新設公司承受']])+
call('先辨認交易形式，再看付款方式。交易是「現金」還是「換股」，與法律上如何結構收購，是兩個不同維度。'))+
card('02｜股權收購：公司仍然是原來那家公司',
p('若星河支付 500 萬元買下晨光咖啡全部 1,000 股，原股東按其出售股份的比例收款；晨光咖啡本身不會因這筆舊股交易直接收到 500 萬元。')+
'<div class="visual"><div class="diagram-node">星河餐飲集團｜100% 股東</div><div class="arrow">↓</div><div class="diagram-node">晨光咖啡｜繼續存在的子公司</div></div>'+
p('原公司向銀行借的款，原則上仍是原公司的債務；母公司也不會僅因為成為股東而自動對子公司所有借款負個人或直接責任。'))+
card('03｜資產收購與合併：法人命運不同',
h3('資產收購')+p('買方可以協商購買設備、商標、技術及相關營業。賣方公司通常仍存在，但契約轉讓、許可、勞工與法律責任可能需要另外處理。')+
h3('吸收合併')+p('A 與 B 法定合併後，由 A 存續、B 消滅，A 依法概括承受 B 的權利義務。新設合併則可能是 A + B → C。')+
call('法律上的公司消滅，不代表原本的品牌或營業據點都必須消失。'))+
card('04｜操作練習：收購多少股份才可能形成控制？',
p('滑動觀察在「每股一票、沒有特別協議」的假設下，持股比例與控制能力的關係。')+
'<div class="controls"><div class="numbers"><div><label>星河餐飲持股比例</label><b id="control-pct">60%</b></div><div><label>其他股東持股</label><b id="other-pct">40%</b></div></div><div class="slider-wrap"><input id="control-slider" type="range" min="0" max="100" value="60" step="5" aria-label="星河餐飲持股百分比"></div><div class="bar" id="control-bar"></div><p id="control-explanation"></p><p class="note">這是教學模型，不是法律控制權的自動判定。</p></div>')+
card('05｜私有化、下市和真實案例',
p('<strong>私有化（Take-private）</strong> 是把公開交易的企業轉為私人持有；<strong>下市（Delisting）</strong> 指股票停止在特定交易所交易；兩者都不等於公司解散。')+
p('Microsoft 收購 Activision Blizzard 使用收購子公司的合併安排；Lenovo 於 2014 年取得 IBM 的 x86 伺服器相關業務，而非整間 IBM。兩個案例分別示範取得公司控制權與取得特定業務。'))}
function lesson3(){
return card('01｜Buy、Build、Ally：為何不自己慢慢成長？',
p('晨光咖啡想進入台中市場，可以自行建立新門市（Build）、收購既有咖啡連鎖（Buy），或與台中物流與通路商合作（Ally）。')+
table(['方式','好處','主要代價'],[['Build｜內部成長','自主掌握建置','可能較慢且需自行開發'],['Buy｜收購','較快取得營運資源','價格、整合與文化風險'],['Ally｜策略聯盟','取得互補能力、保留獨立','較低控制權、合作協調成本']])+
call('好的收購決策，不只是問「買了有什麼好處」，也要問「為何不自己做，或透過合作取得？」'))+
card('02｜綜效：1 + 1 為什麼可能大於 2？',
p('綜效（Synergy）是兩家公司結合後，所創造的價值超過兩者單獨價值之和。')+
div2(mini('A 公司價值','1,000 萬元'),mini('B 公司價值','500 萬元'))+
div2(mini('合併後總價值','1,800 萬元'),mini('額外綜效','300 萬元','1,800 − 1,000 − 500'))+
h3('兩類常見綜效')+
p('<strong>成本綜效：</strong>統一採購、共享物流、降低重複部門成本。<br><strong>營收綜效：</strong>交叉銷售、開拓新市場、共享銷售通路。')+
p('規模經濟（Economies of Scale）讓固定成本分攤至更多產出，但規模太大也可能增加組織協調成本。'))+
card('03｜其他動機：不只有綜效',
table(['動機','可能機制'],[['技術與人才取得','取得難以短期自行建立的能力'],['市場力量','改變競爭與議價條件，不等同效率提升'],['垂直整合','協調供應商或通路，降低某些交易摩擦'],['Empire Building','管理者可能偏好擴大自己管理的企業規模'],['Hubris Hypothesis','管理者過度自信，可能高估價值或支付過高價格']])+
p('Jensen（1986）以自由現金流代理成本探討過度投資；Roll（1986）提出管理者傲慢假說。不同動機可能產生類似的收購行為，但因果機制並不相同。'))+
card('04｜操作練習：綜效不等於買方獲利',
p('假設目標公司獨立價值 100 萬，綜效現值 50 萬，整合成本現值 10 萬，因此收購方在支付收購價格前可取得的總價值是 140 萬。調整成交價格，看看買方是否仍划算。')+
'<div class="controls"><div class="grid-3">'+mini('獨立價值','100 萬')+mini('綜效','+50 萬')+mini('整合成本','−10 萬')+'</div><div class="slider-wrap"><label for="price-slider"><strong>收購價格：<output id="price-out">130</output> 萬元</strong></label><input id="price-slider" type="range" min="100" max="160" step="5" value="130"></div><div class="numbers"><div><label>賣方高於獨立價值的所得</label><b id="seller-gain">+30 萬</b></div><div><label>買方預期淨價值</label><b id="buyer-gain">+10 萬</b></div></div><p id="price-explanation"></p></div>'+
call('價值創造（Value Creation）和價值取得（Value Capture）不同。即使交易有綜效，買方仍可能因出價過高而虧損。'))+
card('05｜真實交易與經典理論',
h3('Disney × Pixar（2006）')+p('Disney 以股票交易收購 Pixar，希望把 Pixar 的創意與動畫技術，結合 Disney 的娛樂、品牌及發行體系。這是資源互補的示例，但不能只憑宣稱的綜效判定最終績效。')+
h3('Microsoft × Nokia 手機業務（2014）')+p('Microsoft 希望結合手機硬體、Windows Phone 與服務生態系；2015 年公布與手機業務相關的重大減損，顯示原有價值預期未充分實現。減損是會計調整，不能直接當成當年現金損失。')+
h3('Trautwein（1990）')+p('將併購動機分為效率、市場力量、估值、管理者帝國擴張、組織決策過程等多種理論，提醒我們不能只用「綜效」解釋所有併購。'))}
function quizHtml(n){
let items=quizData[n].map((q,i)=>'<div class="quiz-question"><fieldset><legend>'+(i+1)+'. '+esc(q[0])+'</legend>'+q[1].map((option,j)=>'<label class="answer"><input type="radio" name="q'+i+'" value="'+j+'"><span>'+String.fromCharCode(65+j)+'. '+esc(option)+'</span></label>').join('')+'</fieldset><div id="feedback-'+i+'"></div></div>').join('');
return card('課後理解檢查｜'+quizData[n].length+' 題',p(n>=7?'完成本堂全部題目，再檢查解析；結果保留於此瀏覽器。':'請先完成五題，再檢查解析。測驗成績會儲存於此瀏覽器。')+'<form id="quiz" novalidate>'+items+'<div class="quiz-actions"><button type="submit" class="btn primary">提交答案並查看解析</button><span class="score" id="quiz-score" aria-live="polite"></span></div></form>');
}
function referencesHtml(n){return card('閱讀依據｜看完故事後再認識原始論文與公告','<div class="references">'+references[n].map((r,i)=>'<div class="refs-item"><strong>'+(i+1)+'. '+esc(r[0])+'</strong><p><a href="'+esc(r[1])+'" target="_blank" rel="noopener noreferrer">開啟來源 ↗</a></p></div>').join('')+'</div>');}
function initShare(){
 const wrap=el('share-widget');if(!wrap)return;
 let kind='old';
 function update(){
  const parts=kind==='old'?[['你',25],['A',30],['B',20],['新投資人',25]]:[['你',40],['A',24],['B',16],['新投資人',20]];
  wrap.querySelectorAll('[data-share]').forEach(b=>{b.classList.toggle('active',b.dataset.share===kind);b.setAttribute('aria-pressed',String(b.dataset.share===kind))});
  el('share-results').innerHTML='<p><strong>'+(kind==='old'?'向原股東購買 250 股':'公司發行 250 股新股')+'</strong></p><div class="bar">'+parts.map((x,i)=>'<span class="b'+(i+1)+'" style="width:'+x[1]+'%">'+x[0]+' '+x[1]+'%</span>').join('')+'</div><div class="numbers"><div><label>誰收到 100 萬元？</label><b style="font-size:16px">'+(kind==='old'?'你（賣股的股東）':'晨光咖啡公司')+'</b></div><div><label>公司收到的新資金</label><b>'+(kind==='old'?'0':'100')+' 萬</b></div></div><p class="note">'+(kind==='old'?'公司總股數仍為 1,000 股。你從 500 股減為 250 股。':'公司總股數增至 1,250 股。原股東未賣股，但持股比例被稀釋。')+'</p>';
 }
 wrap.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',()=>{kind=b.dataset.share;update()}));
 update();
}
function initControl(){
 const slider=el('control-slider');if(!slider)return;
 function update(){
 const v=Number(slider.value);el('control-pct').textContent=v+'%';el('other-pct').textContent=(100-v)+'%';
 el('control-bar').innerHTML=(v?'<span class="b1" style="width:'+v+'%">'+(v>=20?v+'%':'')+'</span>':'')+(v<100?'<span class="b2" style="width:'+(100-v)+'%">'+(100-v>=20?(100-v)+'%':'')+'</span>':'');
 el('control-explanation').textContent=v===100?'全資持有：買方成為唯一股東。':v>50?'過半持股：通常具強大的控制能力，但重大決議可能仍有特別門檻。':v===50?'一半股份：不代表任何股東會決議都能單方面通過。':v>0?'少數股權：可能具影響力，是否能控制須看其他股東及治理安排。':'尚未取得股權。';
 }
 slider.addEventListener('input',update);update();
}
function initPrice(){
 const s=el('price-slider');if(!s)return;
 function update(){const v=Number(s.value),buyer=140-v;el('price-out').textContent=v;el('seller-gain').textContent='+'+(v-100)+' 萬';el('buyer-gain').textContent=(buyer>0?'+':'')+buyer+' 萬';el('buyer-gain').style.color=buyer<0?'#b14c38':'#174e42';el('price-explanation').textContent=buyer>0?'預期為正：買方仍保有部分淨綜效。':buyer===0?'買方預期淨價值為零：全部淨綜效都被收購價格吸收。':'預期為負：收購價格超過買方預期取得的總價值。'}
 s.addEventListener('input',update);update();
}
function initQuiz(n){
 const form=el('quiz');if(!form)return;
 form.addEventListener('submit',e=>{
 e.preventDefault();
 const chosen=quizData[n].map((q,i)=>{const checked=form.querySelector('input[name="q'+i+'"]:checked');return checked?Number(checked.value):null});
 if(chosen.some(x=>x===null)){el('quiz-score').textContent='請先完成全部 '+quizData[n].length+' 題。';return}
 const score=chosen.filter((v,i)=>v===quizData[n][i][2]).length;
 chosen.forEach((v,i)=>{const q=quizData[n][i],ok=v===q[2];el('feedback-'+i).innerHTML='<div class="feedback '+(ok?'':'bad')+'">'+(ok?'✓ 正確':'答案：'+String.fromCharCode(65+q[2]))+'。'+esc(q[3])+'</div>'});
 el('quiz-score').textContent='得分：'+score+' / '+quizData[n].length+(score===quizData[n].length?' · 已掌握本堂核心觀念':' · 可以依解析再複習');
 try{localStorage.setItem((n>=7?'ma-academy-quiz-v2-':'ma-academy-quiz-')+n,JSON.stringify({score,completedAt:new Date().toISOString()}))}catch{}
 });
}
function renderNav(active){
 const nav=el('course-nav');
 nav.innerHTML=courseTitles.map((t,i)=>'<button type="button" class="nav-item '+(active===i?'active ':'')+(i>PUBLISHED_LESSONS?'future':'')+'" data-lesson="'+i+'" '+(active===i?'aria-current="page"':'')+'><span class="nav-num">'+String(i).padStart(2,'0')+'</span><span>'+esc(t)+'</span><span class="nav-state">'+(completed.includes(i)?'✓':i>PUBLISHED_LESSONS?'·':'')+'</span></button>').join('');
 nav.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.lesson))));
 el('progress-fill').style.width=(completed.length/COURSE_TOTAL*100)+'%';el('progress-text').textContent=completed.length+' / '+COURSE_TOTAL;el('progress-percent').textContent=Math.round(completed.length/COURSE_TOTAL*100)+'%';
}
function overview(){
 return '<div class="main-inner"><section class="hero"><div class="eyebrow">WELCOME TO M&A ACADEMY</div><h1>從零開始，真正理解<br>企業如何被收購與合併。</h1><p>16 堂系統性課程：從公司、股份與控制權開始，逐步走向真實交易、企業估值、PE Fund、LBO，以及策略管理與研究方法。</p><div class="hero-tags"><span>16 LESSONS</span><span>INTERACTIVE LEARNING</span><span>RESEARCH-BASED</span></div></section>'+
 card('你的學習路徑',div2(mini('第一階段｜01–04','核心概念','公司、股權、併購動機與交易流程'),mini('第二階段｜05–08','策略與估值','併購類型、標的、財報與 DCF'))+'<div style="height:14px"></div>'+div2(mini('第三階段｜09–12','議價、支付與 PE','談判、換股、PE Fund 與 LBO'),mini('第四階段｜13–16','交易執行與研究','盡職調查、整合、策略與實證')))+
 card('生活常識與學術理論，一起學才有意義',p('保留最容易理解的咖啡店故事、名詞解釋與數字例子，再沿著同一個問題加入互動實驗、真實交易與研究機制；學術不是另一套艱深的版本，而是把直覺解釋得更深入。')+p('模擬中的金額與機率都是教學假設，與真實公司資料分開標示；不必先讀懂艱深期刊，也能學習代理問題、公司控制權與併購綜效。'))+
 '<section class="section"><h2>所有課程</h2><div class="grid-2">'+courseTitles.slice(1).map((t,i)=>'<button type="button" class="course-card '+(i+1>PUBLISHED_LESSONS?'future':'')+'" data-open="'+(i+1)+'"><span class="number">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+esc(t)+'</strong><small>'+esc(summaries[i+1])+'</small><br><span class="pill">'+(completed.includes(i+1)?'已完成':i+1<=PUBLISHED_LESSONS?'完整教材已上架':'即將推出')+'</span></span></button>').join('')+'</div></section></div>';
}
function future(n){return '<div class="main-inner"><section class="hero"><div class="eyebrow">LESSON '+String(n).padStart(2,'0')+' / '+COURSE_TOTAL+'</div><h1>'+esc(courseTitles[n])+'</h1><p>'+esc(summaries[n])+'</p><div class="hero-tags"><span>課綱已規劃</span><span>完整內容尚未上架</span></div></section>'+card('這堂課將學習什麼？',p(summaries[n])+call('本課次目前只有課綱，尚未提供完整教學、互動練習與測驗。')+'<p>請先閱讀已上架的第 01–10 堂完整教材。後續新增教材時，此課次即可延伸。</p><button class="btn primary" data-go="0">返回課程總綱</button>')+'</div>'}
function lesson(n){
 const body=(window.MA_FULL_LESSONS && window.MA_FULL_LESSONS[n]) || (n===1?lesson1():n===2?lesson2():lesson3());
 const sub=n===1?'了解公司是法人、股份代表什麼，以及股東、董事會、CEO 的差異。':n===2?'分辨股權收購、資產收購與合併，理解控制權、私有化及母子公司。':n===3?'了解成長、綜效、資源取得與代理問題，並判斷收購價格如何分配價值。':n===4?'從初步接洽到簽約、核准與交割；練習盡調、選標的與價格談判。':n===5?'辨認水平、垂直、多角化與跨境收購，並理解友善／敵意及企業邊界的選擇。':n===6?'比較候選標的的策略適配、資源互補、關係熟悉、價格與整合風險，做出有依據的收購選擇。':n===7?'從三大財報、FCFF 到 EV／股權價值，先看懂公司的錢。':n===8?'比較倍數、DCF 與折現，理解估值不確定性。':n===9?'認識議價區間、競買者與買賣雙方綜效分配。':'理解現金、股票、混合支付、稀釋與或有對價。';
 return '<div class="main-inner"><section class="hero"><div class="eyebrow">LESSON '+String(n).padStart(2,'0')+' / '+COURSE_TOTAL+' · FOUNDATION</div><h1>'+esc(courseTitles[n])+'</h1><p>'+esc(sub)+'</p><div class="hero-tags"><span>核心概念</span><span>真實案例</span><span>互動試算</span><span>課後理解檢查</span>'+(n>=7&&n<=10&&window['MA_LESSON'+n+'_REVISION']?'<span>'+esc(window['MA_LESSON'+n+'_REVISION'])+'</span>':'')+'</div></section>'+
 body+quizHtml(n)+referencesHtml(n)+
 '<div class="lesson-footer"><button type="button" class="btn" data-go="'+(n-1)+'">← 上一堂</button><button type="button" class="btn primary" id="complete-btn">'+(completed.includes(n)?'✓ 已標記完成｜點此取消':'標記本堂已完成')+'</button><button type="button" class="btn" data-go="'+(n+1)+'">下一堂 →</button></div><p class="status">完成狀態與測驗結果保留在此瀏覽器的 localStorage；跨裝置不會自動同步。</p></div>';
}
function routeFromHash(){const m=location.hash.match(/^#lesson\/(\d+)$/);return m?Number(m[1]):0}
function render(){
 const n=Math.min(COURSE_TOTAL,Math.max(0,routeFromHash()));
 document.title=(n?'第 '+String(n).padStart(2,'0')+' 堂｜'+courseTitles[n]:'課程總綱')+' · M&A Academy';
 renderNav(n);
 el('main').innerHTML=n===0?overview():n<=PUBLISHED_LESSONS?lesson(n):future(n);

 if(n>=1&&n<=3&&window.MA_STORY_ADDITIONS&&window.MA_STORY_ADDITIONS[n]){
  const storySections=Array.from(el('main').querySelectorAll('.main-inner > .section'));
  window.MA_STORY_ADDITIONS[n].forEach(part=>{
   const article=storySections[part.section]?.querySelector('.card');
   if(article)article.insertAdjacentHTML('beforeend',part.html);
  });
 }

 if(n===4)el('main').querySelectorAll('.lesson4-section').forEach(s=>s.classList.add('bridge-section'));
 if(n===5)el('main').querySelectorAll('.lesson5-section').forEach(s=>s.classList.add('bridge-section'));
 if(n===6)el('main').querySelectorAll('.lesson6-section').forEach(s=>s.classList.add('bridge-section'));
 if(n===7)el('main').querySelectorAll('.lesson7-section').forEach(s=>s.classList.add('bridge-section'));
 if(n===8)el('main').querySelectorAll('.lesson8-section').forEach(s=>s.classList.add('bridge-section'));
  if(n===9)el('main').querySelectorAll('.lesson9-section').forEach(s=>s.classList.add('bridge-section'));
  if(n===10)el('main').querySelectorAll('.lesson10-section').forEach(s=>s.classList.add('bridge-section'));


 if(n>=1&&n<=4&&window.MA_EXTRA&&window.MA_EXTRA[n]){
  const originalSections=Array.from(el('main').querySelectorAll('.main-inner > .section'));
  window.MA_EXTRA[n].blocks.forEach(part=>{
   const anchor=originalSections[part.after];
   if(anchor)anchor.insertAdjacentHTML('afterend',part.html);
  });
 }


 if(n===1&&window.MA_L1_DEEP){
  const originals=Array.from(el('main').querySelectorAll('.main-inner > .section')).filter(section=>!section.classList.contains('bridge-section'));
  window.MA_L1_DEEP.blocks.forEach(part=>{
   const anchor=originals[part.after];
   if(anchor)anchor.insertAdjacentHTML('afterend',part.html);
  });
 }

 if((n===2||n===3)&&window['MA_L'+n+'_DEEP']){
  const deep=window['MA_L'+n+'_DEEP'];
  const sectionsBeforeDeep=Array.from(el('main').querySelectorAll('.main-inner > .section')).filter(section=>!section.classList.contains('bridge-section'));
  deep.blocks.forEach(part=>{const target=sectionsBeforeDeep[part.after];if(target)target.insertAdjacentHTML('afterend',part.html)});
 }

 if(n===4&&window.MA_L4_DEEP&&Array.isArray(window.MA_L4_DEEP.blocks)){
  const baseSections=Array.from(el('main').querySelectorAll('.lesson4-section'));
  window.MA_L4_DEEP.blocks.forEach(part=>{
   const target=baseSections[part.after];
   if(target)target.insertAdjacentHTML('afterend',part.html);
  });
 }

 if(n>=1&&n<=PUBLISHED_LESSONS){
  const sections=Array.from(el('main').querySelectorAll('.main-inner > .section'));
  const toc=document.createElement('nav');
  toc.className='lesson-toc card';
  toc.setAttribute('aria-label','本堂章節索引');
  toc.innerHTML='<div class="toc-caption">CONTENTS · 本堂章節索引</div><div class="toc-links">'+sections.map((s,i)=>'<button type="button" class="toc-link" data-toc="'+i+'">'+esc(s.querySelector('h2')?.textContent || '延伸內容')+'</button>').join('')+'</div>';
  el('main').querySelector('.hero')?.insertAdjacentElement('afterend',toc);
  toc.querySelectorAll('[data-toc]').forEach(btn=>btn.addEventListener('click',()=>{sections[Number(btn.dataset.toc)]?.scrollIntoView({behavior:'smooth',block:'start'})}));
 }

 document.querySelectorAll('[data-go],[data-open]').forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.go??b.dataset.open))));
 const mark=el('complete-btn');
 if(mark)mark.addEventListener('click',()=>{completed=completed.includes(n)?completed.filter(x=>x!==n):[...completed,n].sort((a,b)=>a-b);saveProgress();renderNav(n);mark.textContent=completed.includes(n)?'✓ 已標記完成｜點此取消':'標記本堂已完成'});
 if(n===1)initShare();if(n===2)initControl();if(n===3)initPrice();if(n>=1&&n<=PUBLISHED_LESSONS)initQuiz(n);
 if(n===1&&window.MA_L1_DEEP)window.MA_L1_DEEP.init();
 if((n===2||n===3)&&window['MA_L'+n+'_DEEP'])window['MA_L'+n+'_DEEP'].init();if(n===4&&window.MA_LESSON4_INIT)window.MA_LESSON4_INIT();
 if(n===4&&window.MA_L4_DEEP&&window.MA_L4_DEEP.init)window.MA_L4_DEEP.init();
 if(n===5&&window.MA_LESSON5&&window.MA_LESSON5.init)window.MA_LESSON5.init();
 if(n===6&&window.MA_LESSON6&&window.MA_LESSON6.init)window.MA_LESSON6.init();
 if((n===7||n===8)&&window.MA_LESSON7&&window.MA_LESSON7.init)window.MA_LESSON7.init();
  if(n===7&&window.MA_NEW_JOURNEYS)window.MA_NEW_JOURNEYS.init7();
 if((n===9||n===10)&&window.MA_LESSON8&&window.MA_LESSON8.init)window.MA_LESSON8.init();
  if(n===9&&window.MA_NEW_JOURNEYS)window.MA_NEW_JOURNEYS.init9();

 if(n>=1&&n<=4&&window.MA_EXTRA&&window.MA_EXTRA[n])window.MA_EXTRA[n].init();
 el('sidebar').classList.remove('open');el('menu-button').setAttribute('aria-expanded','false');
}
function go(n){if(n<0||n>COURSE_TOTAL)return;const hash='#lesson/'+n;if(location.hash===hash){render();window.scrollTo({top:0,behavior:'smooth'})}else{location.hash=hash;window.scrollTo(0,0)}}
el('menu-button').addEventListener('click',()=>{const o=el('sidebar').classList.toggle('open');el('menu-button').setAttribute('aria-expanded',String(o))});
window.addEventListener('hashchange',render);
render();