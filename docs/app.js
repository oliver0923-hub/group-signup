'use strict';
const courseTitles=['課程總綱與學習進度','公司、股份與股東','收購、合併與所有權','企業為什麼進行併購','併購交易如何進行','併購的主要類型','企業如何選擇收購標的','企業估值基礎','收購價格與支付方式','Private Equity Fund','Leveraged Buyout（LBO）','盡職調查與交易完成','併購後整合與績效','M&A 策略管理理論','M&A 實證研究方法'];
const summaries=[
'14 堂課，從基礎觀念一路學習到 M&A 交易、策略與研究方法。',
'法人、股份、股東、董事會、經理人、所有權與控制權。',
'股權收購、資產收購、法定合併、母子公司與私有化。',
'Buy／Build／Ally、綜效、規模經濟、併購動機與價值分配。',
'買方、賣方、顧問、初步協商、交易流程與交割。',
'水平、垂直、多角化、跨國、友善與敵意收購。',
'策略適配、資源互補、Buy／Build／Ally、估值與整合風險。',
'財務報表、自由現金流、企業價值、股權價值、DCF。',
'收購溢價、現金收購、換股收購與綜效分配。',
'GP、LP、基金募集、控股、投資期間、出場與投資報酬。',
'股權與債務、槓桿、債務償還、MOIC、IRR 與風險。',
'盡職調查、交易條款、法規、融資條件與交割。',
'併購後整合、文化差異、人才留任、綜效與併購失敗。',
'Agency Theory、RBV、TCE、RDT、組織學習與市場力量。',
'事件研究、長期績效、選擇偏誤、內生性與研究設計。'];
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
const readProgress=()=>{try{const x=JSON.parse(localStorage.getItem('ma-academy-progress-v1')||'[]');return Array.isArray(x)?x.filter(n=>Number.isInteger(n)&&n>=1&&n<=14):[]}catch{return []}};
let completed=readProgress();
const saveProgress=()=>{try{localStorage.setItem('ma-academy-progress-v1',JSON.stringify(completed))}catch{}};
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
return card('課後理解檢查｜'+quizData[n].length+' 題',p('請先完成五題，再檢查解析。測驗成績會儲存於此瀏覽器。')+'<form id="quiz" novalidate>'+items+'<div class="quiz-actions"><button type="submit" class="btn primary">提交答案並查看解析</button><span class="score" id="quiz-score" aria-live="polite"></span></div></form>');
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
 try{localStorage.setItem('ma-academy-quiz-'+n,JSON.stringify({score,completedAt:new Date().toISOString()}))}catch{}
 });
}
function renderNav(active){
 const nav=el('course-nav');
 nav.innerHTML=courseTitles.map((t,i)=>'<button type="button" class="nav-item '+(active===i?'active ':'')+(i>4?'future':'')+'" data-lesson="'+i+'" '+(active===i?'aria-current="page"':'')+'><span class="nav-num">'+String(i).padStart(2,'0')+'</span><span>'+esc(t)+'</span><span class="nav-state">'+(completed.includes(i)?'✓':i>4?'·':'')+'</span></button>').join('');
 nav.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.lesson))));
 el('progress-fill').style.width=(completed.length/14*100)+'%';el('progress-text').textContent=completed.length+' / 14';el('progress-percent').textContent=Math.round(completed.length/14*100)+'%';
}
function overview(){
 return '<div class="main-inner"><section class="hero"><div class="eyebrow">WELCOME TO M&A ACADEMY</div><h1>從零開始，真正理解<br>企業如何被收購與合併。</h1><p>14 堂系統性課程：從公司、股份與控制權開始，逐步走向真實交易、企業估值、PE Fund、LBO，以及策略管理與研究方法。</p><div class="hero-tags"><span>14 LESSONS</span><span>INTERACTIVE LEARNING</span><span>RESEARCH-BASED</span></div></section>'+
 card('你的學習路徑',div2(mini('第一階段｜01–04','核心概念','公司、股權、併購動機與交易流程'),mini('第二階段｜05–08','策略與估值','併購類型、標的選擇與收購價格'))+'<div style="height:14px"></div>'+div2(mini('第三階段｜09–12','PE 與交易實務','基金、LBO、盡職調查、整合'),mini('第四階段｜13–14','研究與實證','理論、公告事件研究與因果識別')))+
 card('生活常識與學術理論，一起學才有意義',p('保留最容易理解的咖啡店故事、名詞解釋與數字例子，再沿著同一個問題加入互動實驗、真實交易與研究機制；學術不是另一套艱深的版本，而是把直覺解釋得更深入。')+p('模擬中的金額與機率都是教學假設，與真實公司資料分開標示；不必先讀懂艱深期刊，也能學習代理問題、公司控制權與併購綜效。'))+
 '<section class="section"><h2>所有課程</h2><div class="grid-2">'+courseTitles.slice(1).map((t,i)=>'<button type="button" class="course-card '+(i+1>4?'future':'')+'" data-open="'+(i+1)+'"><span class="number">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+esc(t)+'</strong><small>'+esc(summaries[i+1])+'</small><br><span class="pill">'+(completed.includes(i+1)?'已完成':i+1<=4?'完整教材已上架':'即將推出')+'</span></span></button>').join('')+'</div></section></div>';
}
function future(n){return '<div class="main-inner"><section class="hero"><div class="eyebrow">LESSON '+String(n).padStart(2,'0')+' / 14</div><h1>'+esc(courseTitles[n])+'</h1><p>'+esc(summaries[n])+'</p><div class="hero-tags"><span>課綱已規劃</span><span>完整內容尚未上架</span></div></section>'+card('這堂課將學習什麼？',p(summaries[n])+call('本課次目前只有課綱，尚未提供完整教學、互動練習與測驗。')+'<p>請先閱讀第 01–04 堂已上架內容。後續新增教材時，此課次即可延伸。</p><button class="btn primary" data-go="0">返回課程總綱</button>')+'</div>'}
function lesson(n){
 const body=(window.MA_FULL_LESSONS && window.MA_FULL_LESSONS[n]) || (n===1?lesson1():n===2?lesson2():lesson3());
 const sub=n===1?'了解公司是法人、股份代表什麼，以及股東、董事會、CEO 的差異。':n===2?'分辨股權收購、資產收購與合併，理解控制權、私有化及母子公司。':n===3?'了解成長、綜效、資源取得與代理問題，並判斷收購價格如何分配價值。':'從初步接洽到簽約、核准與交割；練習盡調、選標的與價格談判。';
 return '<div class="main-inner"><section class="hero"><div class="eyebrow">LESSON '+String(n).padStart(2,'0')+' / 14 · FOUNDATION</div><h1>'+esc(courseTitles[n])+'</h1><p>'+esc(sub)+'</p><div class="hero-tags"><span>核心概念</span><span>真實案例</span><span>互動試算</span><span>課後理解檢查</span></div></section>'+
 body+quizHtml(n)+referencesHtml(n)+
 '<div class="lesson-footer"><button type="button" class="btn" data-go="'+(n-1)+'">← 上一堂</button><button type="button" class="btn primary" id="complete-btn">'+(completed.includes(n)?'✓ 已標記完成｜點此取消':'標記本堂已完成')+'</button><button type="button" class="btn" data-go="'+(n+1)+'">下一堂 →</button></div><p class="status">完成狀態與測驗結果保留在此瀏覽器的 localStorage；跨裝置不會自動同步。</p></div>';
}
function routeFromHash(){const m=location.hash.match(/^#lesson\/(\d+)$/);return m?Number(m[1]):0}
function render(){
 const n=Math.min(14,Math.max(0,routeFromHash()));
 document.title=(n?'第 '+String(n).padStart(2,'0')+' 堂｜'+courseTitles[n]:'課程總綱')+' · M&A Academy';
 renderNav(n);
 el('main').innerHTML=n===0?overview():n<=4?lesson(n):future(n);

 if(n>=1&&n<=3&&window.MA_STORY_ADDITIONS&&window.MA_STORY_ADDITIONS[n]){
  const storySections=Array.from(el('main').querySelectorAll('.main-inner > .section'));
  window.MA_STORY_ADDITIONS[n].forEach(part=>{
   const article=storySections[part.section]?.querySelector('.card');
   if(article)article.insertAdjacentHTML('beforeend',part.html);
  });
 }

 if(n===4)el('main').querySelectorAll('.lesson4-section').forEach(s=>s.classList.add('bridge-section'));
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

 if(n>=1&&n<=4){
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
 if(n===1)initShare();if(n===2)initControl();if(n===3)initPrice();if(n>=1&&n<=4)initQuiz(n);
 if(n===1&&window.MA_L1_DEEP)window.MA_L1_DEEP.init();
 if((n===2||n===3)&&window['MA_L'+n+'_DEEP'])window['MA_L'+n+'_DEEP'].init();if(n===4&&window.MA_LESSON4_INIT)window.MA_LESSON4_INIT();
 if(n===4&&window.MA_L4_DEEP&&window.MA_L4_DEEP.init)window.MA_L4_DEEP.init();
 if(n>=1&&n<=4&&window.MA_EXTRA&&window.MA_EXTRA[n])window.MA_EXTRA[n].init();
 el('sidebar').classList.remove('open');el('menu-button').setAttribute('aria-expanded','false');
}
function go(n){if(n<0||n>14)return;const hash='#lesson/'+n;if(location.hash===hash){render();window.scrollTo({top:0,behavior:'smooth'})}else{location.hash=hash;window.scrollTo(0,0)}}
el('menu-button').addEventListener('click',()=>{const o=el('sidebar').classList.toggle('open');el('menu-button').setAttribute('aria-expanded',String(o))});
window.addEventListener('hashchange',render);
render();