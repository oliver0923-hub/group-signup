(function(){
'use strict';
const full=window.MA_FULL_LESSONS||{};
const one=String(full[7]||''),two=String(full[8]||'');
const a=one.split(/(?=<section class="section chapter)/g).filter(Boolean);
const b=two.split(/(?=<section class="section chapter)/g).filter(Boolean);
if(a.length!==21||b.length!==12){throw new Error('M&A 07–10 split expects original lesson 07=21 and 08=12 sections');}
const m7={1:'7.1',2:'7.2',3:'7.3',4:'7.4',5:'7.5',14:'7.6',6:'7.7',15:'7.8',7:'8.1',8:'8.2',9:'8.3',10:'8.4',11:'8.5',12:'8.6',13:'8.7',16:'8.8',17:'8.9',18:'8.10',19:'8.11',20:'8.12'};
const m8={1:'9.1',2:'9.2',3:'9.3',4:'10.1',5:'10.2',6:'10.3',7:'10.4',8:'10.5',9:'10.6',10:'10.7',11:'10.8'};
const s=(lesson,title,text)=>'<section class="section chapter lesson'+lesson+'-section"><h2>'+title+'</h2><div class="card">'+text+'</div></section>';
function reuse(parts,n,from,to){
 return parts[n].replace(new RegExp('lesson'+from+'-section','g'),from===to?'lesson'+to+'-section':'lesson'+from+'-section lesson'+to+'-section')
  .replace(from===7?/\b7\.(\d+)\b/g:/\b8\.(\d+)\b/g,(old,num)=>(from===7?m7:m8)[Number(num)]||old);
}
full[7]=
s(7,'第 07 堂｜讀懂企業的財務資訊','<p class="lesson7-scene"><strong>承接第六堂：</strong>星河選中了晨光咖啡。朋友 A 問：「有人出價 500 萬買我們公司，該賣嗎？」在討論出價以前，你要先知道公司每年賣多少、賺多少、投資多少，以及實際剩下多少現金。</p><p><strong>本堂獨立教學設定：</strong>晨光年營收 1,000 萬元，帳上現金 100 萬、計息借款 80 萬，全部舊股示意要價 500 萬。這些不是前幾堂情境的正式交易價格。</p><div class="callout"><strong>本堂核心：</strong>營收 ≠ 獲利 ≠ 自由現金流；帳上現金不等於股東可領的錢；企業價值 EV 也不同於股權價值 Equity Value。完整的估值方法留到下一堂。</div><p class="note">金額均為新臺幣萬元的教學假設，真實交易的官方資料將另外標示。</p>')+
[1,2,3,4,5,14,6,15].map(i=>reuse(a,i,7,7)).join('')+
s(7,'7.9｜兩筆真實交易：買股價款不能直接等於營收','<h3>Microsoft × Activision Blizzard</h3><p>2022 年 1 月公布每股現金 95 美元的收購條件，2023 年 10 月完成。這是股東的<strong>交易對價</strong>，不是標的單一年份的營收或 FCFF。<a href="https://news.microsoft.com/source/2022/01/18/microsoft-to-acquire-activision-blizzard-to-bring-the-joy-and-community-of-gaming-to-everyone-across-every-device/" target="_blank" rel="noopener noreferrer">Microsoft 原始公告 ↗</a> · <a href="https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm" target="_blank" rel="noopener noreferrer">交割 SEC 8-K ↗</a></p><h3>Disney × Pixar</h3><p>Disney 在 2006 年宣布以股票交換 Pixar 股份，每股 Pixar 換 2.3 股 Disney；舊股東取得的對價也可能是股份而非現金。<a href="https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/" target="_blank" rel="noopener noreferrer">Disney 官方公告 ↗</a></p><p><strong>研究橋接：</strong>Kaplan &amp; Ruback（1995）在特定高度槓桿交易樣本中比較現金流折現估值與市場價值；Liu、Nissim &amp; Thomas（2002）則研究估值倍數表現。這些研究凸顯財務指標與口徑的重要性，不代表任何企業的營收就是公平收購價。下一堂再學方法。</p>')+
s(7,'7.10｜財報查核：三回合個人決策','<p>你是星河的財務分析者。從獲利和 FCFF 選擇報告方式、接收設備投資新證據，再判斷帳上現金有多少真正可用。後面的數字和結局會依前面判斷改變。</p><div id="l7-finance-journey" aria-live="polite">正在載入財報查核……</div><p class="note">FCFF 原為 84 萬；若 CapEx 多 35 萬則為 49 萬；100 萬現金中 60 萬是營運必需。全部是可重玩的獨立示意設定。</p>')+
s(7,'7.11｜回顧：先讀懂錢，再判斷價值','<p>EBIT 180、稅率 20%、折舊 40、CapEx 75、營運資金增加 25 時，FCFF＝180×80%＋40−75−25＝<strong>84 萬元</strong>。這不是營收、淨利，也不是股東立即收到的股利。</p><p><strong>先學會對齊期間：</strong>本堂 84 萬是歷史示意，下一堂 DCF 第一年預測 FCFF 45 萬採用<strong>不同未來營運假設</strong>。不要把兩組數字當作同一年的矛盾資料。</p><p><strong>第八堂將回答：這些現金流的現值是多少？</strong></p>');
full[8]=
s(8,'第 08 堂｜一家公司究竟值多少？','<p class="lesson8-scene"><strong>從第七堂往下一步：</strong>你已經知道晨光如何產生自由現金流、EV 與股權價值如何橋接。現在問題變成：「未來的現金流，今天到底值多少？」</p><p>本堂從資產法、同業倍數到現金流折現（DCF），再用五回合估值決策練習，檢查預測與風險如何影響價格。</p><div class="callout"><strong>資料時點注意：</strong>前一堂的歷史 FCFF＝84 萬，本堂 DCF 第一年的預測 FCFF＝45 萬，是<strong>另設的未來營運與資本支出條件</strong>，不能直接當成同一年同一情境的兩個答案。</div><p class="note">咖啡店所有數字為教學假設，真實案例另外用公司公告核對。</p>')+
[7,8,9,10,11,12,13,16,17,18,19,20].map(i=>reuse(a,i,7,8)).join('')
.replaceAll('第 08 堂會繼續處理價格談判與現金／股票支付','第 09 堂處理談判，第 10 堂再比較現金／股票支付')
.replaceAll('第 08 堂會接著問：即使我們估出合理價值，買方與賣方究竟該如何談價？又該支付現金還是股票？','第 09 堂會問：有了估值，買賣雙方究竟要怎麼談出成交價？')
.replaceAll('第八堂的付款與議價問題','第九堂的價格談判與第十堂的支付問題');
full[9]=
s(9,'第 09 堂｜收購價格如何談出來？','<p class="lesson9-scene"><strong>回到晨光與星河的談判桌。</strong>估出公司的價值，不代表買方與賣方會同意相同價格。本堂你會看到雙方的底線、競價者與綜效如何影響出價。</p><p><strong>獨立議價教學情境：</strong>晨光 100% 舊股獨立價值 500 萬；星河預期綜效 150 萬，扣整合與風險 55 萬、查核費 10 萬，買方上限 585 萬；賣方最低 520 萬。本情境不是第八堂的 DCF 正式估值結論。</p><div class="callout"><strong>本堂核心：</strong>Acquisition Premium、保留價格、競價與價值分配。現金／股票支付工具留到第十堂。</div>')+
[1,2,3].map(i=>reuse(b,i,8,9)).join('')+
s(9,'9.4｜兩件交易：不是每家公司都要付一樣的溢價','<h3>Microsoft × Activision Blizzard</h3><p>Microsoft 2022 年宣布每股現金 95 美元；依 Activision 對股東說明，這比 2022 年 1 月 14 日的公告前收盤價高<strong>約 45%</strong>。這是上市股票的<strong>公告前參考股價溢價</strong>，不能直接套到私人公司晨光的估值。<a href="https://news.microsoft.com/source/2022/01/18/microsoft-to-acquire-activision-blizzard-to-bring-the-joy-and-community-of-gaming-to-everyone-across-every-device/" target="_blank" rel="noopener noreferrer">收購公告 ↗</a> · <a href="https://investor.activisionblizzard.com/static-files/0164bd51-ba85-49ed-9ae3-eea498f943c9" target="_blank" rel="noopener noreferrer">股東說明 ↗</a></p><h3>Disney × Pixar</h3><p>Disney 在 2006 年公告約 74 億美元的全股票交易，扣 Pixar 淨現金後的公告淨額約 63 億美元；這不是可以相加的兩筆付款。比價前應確認股權對價、淨現金與價值口徑。<a href="https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/" target="_blank" rel="noopener noreferrer">官方公告 ↗</a></p><p>Jensen &amp; Ruback（1983）回顧控制權市場的目標股東收益；Andrade 等人（2001）討論併購股東價值分配。這些研究不能直接決定晨光的單一「正確溢價」。</p>')+
s(9,'9.5｜個人決策：三回合議價','<p>你替星河提出第一個報價；新的競價、顧客或融資資訊取決於原本出價；最後可以修正出價或終止。每次重玩會得到不同的價值分配。</p><div id="l9-negotiation-journey" aria-live="polite">正在載入價格談判……</div><p class="note">買方上限 585 萬，賣方底價 520 萬。這是單人練習，不是預測真實市場成交價。</p>')+
s(9,'9.6｜回顧：交易有綜效，買方仍可能買貴','<p>若 560 萬成交，賣方相對 500 萬獨立價值增加 60 萬，買方相對最高願付價 585 萬保留 25 萬。<strong>價格決定價值如何在買賣雙方之間分配。</strong></p><p>競價可能提高賣方底價，風險可能壓低買方上限。當區間不重疊，退出也可能比硬買合理。<strong>第十堂會比較同樣 560 萬應該怎樣支付。</strong></p>');
full[10]=
s(10,'第 10 堂｜收購價款如何支付？','<p class="lesson10-scene"><strong>價格談妥，付款才剛開始。</strong>本堂以晨光全部舊股參考價 560 萬為獨立教學情境，討論現金、股票、混合對價與未來有條件付款。朋友 A 想收到現金，朋友 B 想分享星河股票，星河則要考慮自己的流動性。</p><div class="callout"><strong>核心問題：</strong>名目交易價一樣，誰承擔股價風險、何時收到款項、原股東被稀釋多少，可能完全不同。</div><p class="note">股數與股價以各互動明示的教學基準計算；真實案例不使用咖啡店的虛構係數。</p>')+
[4,5,6,7,8,9,10,11].map(i=>reuse(b,i,8,10)).join('')
.replaceAll('第 10 堂 LBO','第 12 堂 LBO')
.replaceAll('第 09 堂接著會介紹 Private Equity Fund','第 11 堂接著會介紹 Private Equity Fund');

// 第十堂 Earn-out 是重要但偏進階的財務契約內容：預設可自主展開，降低首次閱讀的負荷。
(function foldOptionalEarnout(){
 const sections=full[10].split(/(?=<section class="section chapter)/g).filter(Boolean);
 const index=sections.findIndex(v=>v.includes('<h2>10.6｜或有對價'));
 if(index<0)throw new Error('Earn-out section 10.6 not found after split');
 const part=sections[index],start=part.indexOf('<div class="card">')+'<div class="card">'.length,end=part.lastIndexOf('</div></section>');
 if(start<17||end<=start)throw new Error('Cannot create optional Earn-out accordion');
 sections[index]=part.slice(0,start)
 +'<p class="note">本節為進階選讀：想先掌握現金與股票的差別，可先完成第 10.7 節的個人決策；若要理解績效對價、條件付款與現值，再展開下方導讀與完整試算。</p><details class="think-detail"><summary>展開進階單元｜Earn-out 的完整導讀、計算與風險分攤</summary>'
 +part.slice(start,end)+'</details>'+part.slice(end);
 full[10]=sections.join('');
})();

// Narrative correction: fictional comparables are never presented as verified market transactions.
(function revisePeerValuationStories(){
 const revisions=[{"n":8,"key":"8.2","heading":"8.2｜用別人的生意估價？先問四倍 EBITDA 從哪裡來","body":"<p class=\"lesson8-scene\"><strong>估值會議｜星河的財務主管拿出一張比較表。</strong>晨光股東希望以 500 萬出售全部舊股，星河不能只靠直覺判斷這個價格。財務主管說：「先學一種估價方法，再檢查它能不能用。」</p>\n<p>他先提醒大家：「目前沒有足夠可靠、能直接拿來比較的私人咖啡店成交資料。下面的<strong>『河岸咖啡』完全是虛構的教學公司</strong>，不是市場上的真實成交案例，也不是咖啡產業的平均倍數。」</p>\n<div class=\"story-timeline\"><div><b>第一步｜假設別家公司的數字</b><p>河岸咖啡年度 EBITDA（息稅折舊攤銷前利益）為 100 萬元，營運企業價值 EV（Enterprise Value）為 400 萬元。所以 EV／EBITDA＝400 ÷ 100＝<strong>4 倍</strong>。這個 4 倍只是為了學會倍數怎麼算。</p></div><div><b>第二步｜試算晨光的企業價值</b><p>第七堂已知道晨光歷史 EBITDA＝220 萬元。<strong>暫時假設兩家真的可以比較</strong>，晨光的示意 EV＝220 × 4＝<strong>880 萬元</strong>。這還不是賣股份的價格。</p></div><div><b>第三步｜換算成股權價值</b><p>若同時假設晨光計息負債 80 萬、帳上 100 萬現金全部可算多餘現金，股權價值＝880－80＋100＝<strong>900 萬元</strong>。若查核後發現只有 40 萬現金可加回，則變成 880－80＋40＝<strong>840 萬元</strong>。</p></div></div>\n<p>朋友 A 問：「我想賣 500 萬，怎麼算出來是 900 萬？難道我們開價太便宜？」財務主管回答：「<strong>還不能下結論。</strong>500 萬是賣方的初步要價；900 萬是靠虛構同業倍數和一組現金假設推導的試算。兩個數字差很大，代表我們需要查證，而不是證明有人出價太低。」</p>\n<p>例如河岸可能有更穩定的顧客和較少設備更新需求，而晨光可能要更換咖啡機、企業團購客戶也還沒續約。<strong>EBITDA 不會直接扣除購買設備的現金支出</strong>，因此兩家即使有相同的 EBITDA，也未必能產生相同的自由現金流。</p>\n<div class=\"callout\"><strong>請分清楚：</strong>500 萬是股東的示意要價；880 萬是套用假設倍數的企業價值；900 萬及 840 萬是在兩種現金條件下推算的股權價值。<strong>它們都不是已被市場證實的公允成交價。</strong></div>\n<details class=\"think-detail\"><summary>自己算算看：EV 880 萬不變，為何股權價值會從 900 變 840 萬？</summary><p>股權價值＝EV－計息債務＋可自由運用的多餘現金。當多餘現金從 100 降為 40 萬，股權價值便降低 60 萬。公司仍有 100 萬存款，但其中 60 萬必須留作營運。</p></details>\n<p>研究連結：Liu、Nissim 與 Thomas（2002）比較不同估值倍數的表現，提醒我們應理解指標選擇與資料限制，而不是相信一個萬用倍數。<a href=\"https://doi.org/10.1111/1475-679X.00042\" target=\"_blank\" rel=\"noopener noreferrer\">Liu et al.（2002），Journal of Accounting Research ↗</a></p>"},{"n":8,"key":"8.3","heading":"8.3｜找可比較企業：同樣賣咖啡，就能用相同倍數嗎？","body":"<p class=\"lesson8-scene\"><strong>隔天｜顧問真正開始找資料。</strong>昨天的河岸咖啡只是教學假設，不是市場資料。星河要用倍數出價，必須先找到財務口徑一致、營運風險相近的比較對象。</p>\n<p>顧問列出三個候選：一家主要做外帶的街角咖啡店、一家快速展店的精品咖啡連鎖，以及一家同樣賣咖啡的大型便利商店。它們都賣咖啡，<strong>但賺錢的方式、設備投資與顧客結構未必相同</strong>。</p>\n<table><thead><tr><th>要核對的條件</th><th>原因</th></tr></thead><tbody><tr><td>客人從哪裡來？</td><td>散客、企業團購與會員訂單的流失風險不同</td></tr><tr><td>需要多少新設備？</td><td>相同 EBITDA 不等於相同自由現金流</td></tr><tr><td>規模與成長速度接近嗎？</td><td>快速展店可能意味不同的租金、風險與預期</td></tr><tr><td>比較的是 EV 還是股權市值？</td><td>估值指標的分子和分母必須正確對應</td></tr></tbody></table>\n<p>所以「有在賣咖啡」只是開始，<strong>不是已經找到可靠同業</strong>。缺少可信的交易和財務資料時，倍數法只能作為理解估值敏感度的參考，不能當成最後一口價的鐵律。</p>\n<p>Bhojraj 與 Lee（2002）研究如何依影響估值的公司特徵選取比較企業，而不只是看產業分類。它提供比較對象選擇的研究思路，但不能保證私人咖啡店的成交價格。<a href=\"https://doi.org/10.1111/1475-679X.00054\" target=\"_blank\" rel=\"noopener noreferrer\">Bhojraj &amp; Lee（2002），Journal of Accounting Research ↗</a></p>\n<p><strong>接下來：</strong>如果同業資料無法完全信任，那麼能否回頭估計晨光自己明年、後年真正可能產生的現金流？這就是 DCF 的起點。</p>"}];
 for(const r of revisions){
  const parts=full[r.n].split(/(?=<section class="section chapter)/g).filter(Boolean);
  const i=parts.findIndex(x=>x.includes('<h2>'+r.key+'｜'));
  if(i<0)throw new Error('Cannot locate lesson '+r.n+' '+r.key);
  const opening=parts[i].slice(0,parts[i].indexOf('<h2>'));
  parts[i]=opening+'<h2>'+r.heading+'</h2><div class="card">'+r.body+'</div></section>';
  full[r.n]=parts.join('');
 }
})();

(function reviseNarrativeFlow(){
 const revision={"n":8,"key":"8.4","heading":"8.4｜DCF 的第一步：為什麼明年的錢要先折回今天？","body":"<p class=\"lesson8-scene\"><strong>比較過其他咖啡企業後，星河財務主管換了一張白紙。</strong>「先不用任何同業資料。如果今天給你 100 元，或一年後給你 110 元，你要怎麼知道兩者差多少？」</p>\n<p>假設你要求的年報酬率是 10%，今天 100 元經過一年就相當於 110 元。因此，一年後才收到的 110 元，<strong>今天的現值（Present Value）＝110 ÷（1＋10%）＝100 元</strong>；如果兩年後才收到 121 元，今天現值＝121 ÷ 1.1²＝100 元。</p>\n<div class=\"story-timeline\"><div><b>今天（t＝0）</b><p>100 元現在就可使用。</p></div><div><b>一年後（t＝1）</b><p>110 元 ÷ 1.10＝今天的 100 元。</p></div><div><b>兩年後（t＝2）</b><p>121 元 ÷ 1.10²＝今天的 100 元。</p></div></div>\n<p>這是<strong>貨幣時間價值（Time Value of Money）</strong>；把未來不同時點的錢換算到今天稱為<strong>折現（Discounting）</strong>，所用的比率稱為折現率（Discount Rate）。這裡的 10% 只是為了教算法，<strong>不是晨光實際的 WACC</strong>；金額能否收到、未來風險多大，都會影響應採用的折現率。</p>\n<p>那麼，把「未來收到 110 元」換成「晨光第一年、第二年……預計能產生多少企業自由現金流」呢？<strong>現金流折現法（Discounted Cash Flow, DCF）</strong>就是分年預測這些現金，再折回今天加總。下一節我們不直接使用上一堂的歷史 FCFF 84 萬，而是依新設備投資假設，重新估計未來第一年的 45 萬。</p>\n<details class=\"think-detail\"><summary>小考：如果折現率為 10%，明年的 110 元在今天一定比現在的 100 元更值錢嗎？</summary><p>在兩筆錢的風險相同、且採同一折現率的簡化假設下，<strong>它們今天的現值相同</strong>，因為 110 ÷ 1.10＝100。不能直接比較不同時間點的名目金額。</p></details>"};
 const corrections=[[7,"星河選中了晨光咖啡。朋友 A 問：「有人出價 500 萬買我們公司，該賣嗎？」","星河把晨光咖啡列入收購候選，初步表示願意討論以 500 萬元購買全部既有股份，但雙方還沒有簽約。朋友 A 問你：「星河想買我們公司，我們該賣嗎？」"],[7,"週四下午｜把歷史財報交給讀者","週二下午｜根據剛核對的財報做試算"],[7,"週二下午｜星河發現有兩個不同價格","週三上午｜星河分清股東要價和企業價值"],[7,"週五上午｜對價和企業價值重新對帳","週三下午｜把借款和現金放進估值橋接"],[8,"你問財務顧問：「晨光咖啡到底值多少？」顧問說可以從三個角度切入。","星河拿到股東提出的 500 萬元初步要價，請財務顧問不要直接把對方想收到的價錢當成估值結論。顧問說可以從三個角度切入。"],[8,"第 10 堂 LBO","第 12 堂 LBO"],[8,"週四早上｜開始做五年的現金流預測","估值會議的下一步｜開始做五年現金流預測"],[8,"週五中午｜拿預測與同業數字交叉檢查","完成兩種估值後｜解釋為什麼結果不同"],[8,"估值表上第一次出現兩種差很多的價值。","使用虛構 4 倍 EBITDA 得到示意 EV 880 萬，DCF 卻在另一組預測下估得約 464.2 萬。不是挑比較高的答案，而是要找出背後假設。"],[8,"週五下午｜進入真正的收購決策","最後的練習｜根據資訊更新估值"],[8,"前面三個工具練「固定其他假設，只改一個變數」；","前面那個 DCF／同業倍數工具練「固定其他假設，只改一個變數」；"],[9,"本情境不是第八堂的 DCF 正式估值結論。","為了單獨練習議價，這裡重新假設雙方使用 500 萬作為標的獨立股權價值的參考基準；不是第八堂 DCF 算出的約 484.2 萬股權估值，也不是已成交價格。"],[9,"你和朋友 A、B 是晨光咖啡股東。","先站在賣方的角度：你和朋友 A、B 是晨光咖啡股東。等一下再輪流從星河買方的角度思考，便能理解兩邊為什麼有不同的底線。"],[9,"週一中午，咖啡還沒喝完","同一天｜換到星河的買方桌邊"],[9,"財務主管把價格、綜效與可能增加的風險寫進同一張表：「先試著改數字，再判斷你剛才想的 560 萬合不合理。」","財務主管把雙方願付與願收的價格寫成一張表：「剛才的 560 萬只是可能報價，不是已經成交。我們先看在不同成本和競價條件下，這個數字還合不合理。」"],[9,"星河開始明白：單靠買方自己的估值，不足以決定對方願不願賣。下一個問題更實際：如果真的談到一個價格，<strong>到底要付現金還是給股票？</strong>","星河開始明白：單靠買方的估值，不能決定賣方是否接受。下一節先看真實交易公告如何定義溢價，再親自練一次修正出價；至於<strong>支付現金還是股票</strong>，我們留到第十堂。"],[10,"本堂以晨光全部舊股參考價 560 萬為獨立教學情境，討論現金、股票、混合對價與未來有條件付款。","上一堂的 560 萬是可能成交的示意報價，並不是已簽約交易。本堂為了比較支付方式，<strong>暫以晨光全部舊股的 560 萬名目價款作共同基準</strong>，討論現金、股票、混合對價與有條件付款。"],[10,"股數與股價以各互動明示的教學基準計算；","為便於初學者練習，本堂把星河的股數縮小成 15,000 股，並假設雙方以每股 1,000 元作為簽約換股參考價。後續若改用每股 800 元試算，代表股份估值的假設改變，<strong>不代表星河的股票一定已上市、可以即時按此價格賣出</strong>。股數與股價以各互動明示的教學基準計算；"],[10,"星河用 <strong>560 萬現金</strong>向三位晨光原股東買走 100% 的既有股份。","<strong>先試第一種付款方案：</strong>如果星河選擇全現金，並在交割條件都滿足後，用 <strong>560 萬現金</strong>向三位晨光原股東買下 100% 的既有股份。這只是方案比較，還不是已完成交易。"],[10,"週五上午，最後一次核對條件","討論完付款工具後｜還有風險沒有解決"],[10,"注意：7.14–7.16 的歷史現金流與股價模型是讓你了解估值方法；第八堂這裡的 500 萬獨立股權價值、150 萬綜效及 15,000 股，都是<strong>本堂獨立設定</strong>。","注意：第七堂先讀財務資訊、第八堂練習估值、第九堂討論議價；本節則練習把估值、價格與支付安排一起考慮。此處的 500 萬獨立股權價值、150 萬預期綜效和星河原有 15,000 股，都是<strong>本堂獨立設定</strong>。"]];
 const arr=full[revision.n].split(/(?=<section class="section chapter)/g).filter(Boolean);
 const idx=arr.findIndex(x=>x.includes('<h2>'+revision.key+'｜'));
 if(idx<0)throw new Error('Missing DCF chapter 8.4');
 arr[idx]=arr[idx].slice(0,arr[idx].indexOf('<h2>'))+'<h2>'+revision.heading+'</h2><div class="card">'+revision.body+'</div></section>';
 full[revision.n]=arr.join('');
 for(const [n,oldValue,newValue] of corrections){
  if(!full[n].includes(oldValue))throw new Error('Narrative text changed L'+n+': '+oldValue.slice(0,60));
  full[n]=full[n].replace(oldValue,newValue);
 }
})();

(function clarifyDcfCashAssumption(){
 const marker='注意，這裡終值現值約占整個 EV 的';
 if(!full[8].includes(marker))throw new Error('DCF note anchor missing');
 full[8]=full[8].replace(marker,'<span class="note"><strong>估值口徑提醒：</strong> 這一張 DCF 表為了演練公式，仍假設帳上 100 萬全部可視為多餘現金，故股權價值約 484.2 萬；如果改採財報查核後「只有 40 萬多餘現金」的另一組條件，股權價值就應降為 464.2－80＋40＝約 424.2 萬。<strong>現金假設一改，不能只改文字而不改股權橋接。</strong></span> '+marker);
})();
window.MA_LESSON7_REVISION='2026-11-04 · 獨立財務單元';
window.MA_LESSON8_REVISION='2026-11-04 · 獨立估值單元';
window.MA_LESSON9_REVISION='2026-11-04 · 獨立議價單元';
window.MA_LESSON10_REVISION='2026-11-04 · 獨立支付單元';
})();