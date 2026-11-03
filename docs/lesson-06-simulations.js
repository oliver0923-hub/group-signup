(function(){
const L=window.MA_LESSON6=window.MA_LESSON6||{};
const el=id=>document.getElementById(id);
const num=x=>Number(x).toLocaleString('zh-TW',{maximumFractionDigits:1});
const signed=x=>(x>0?'+':'')+num(x);
const targets={
A:{name:'A｜山谷咖啡（熟悉的合作夥伴）',short:'山谷咖啡',worth:720,ask:820,synergy:320,integration:70,risk:45,hidden:100,cover:55,protectCost:20,channel:95,tech:25,supply:80,concentration:70,retention:25,guess:'relationship',
 clue:'你們長期合作，關係很好。然而，共同客戶比例很高，原本沒有共同採購的顧客可能在交易後減少訂單。',
 deep:'深入查核顧客發票與續約意願後，發現共同客戶重複採購問題比最初想像更重要。若要維持忠誠度，應保留部分原本品牌和服務方式。',
 basic:'基本查核只看到合併後可省物流成本，但不完全知道哪些顧客會在兩家成為同一老闆後轉單。',
 theory:'Rogan & Sorenson（2014）提醒：共同顧客的關係可能增加標的被選中的機率，卻未必有利合併後績效。這是特定廣告業樣本，不是本咖啡店的統計預測。',
 failure:'一旦合併使某些顧客失去第二個選擇，原本預計的綜效可能被顧客流失抵銷。'},
B:{name:'B｜微光科技咖啡（創新技術）',short:'微光科技',worth:850,ask:1100,synergy:530,integration:105,risk:65,hidden:130,cover:95,protectCost:25,channel:55,tech:98,supply:35,concentration:30,retention:85,guess:'technology',
 clue:'數位系統很吸引人，但部分核心程式碼由外部團隊參與製作，兩位重要工程師對收購後的管理安排沒有承諾。',
 deep:'深入查核後，你取得了較清楚的軟體權利文件及關鍵工程師意願，知道需要留任計畫和部分合約變更才有機會實現跨門市技術綜效。',
 basic:'基本查核能看見好用的 App 和成長數據，卻還不能確定所有技術權利及人才留任安排。',
 theory:'Ransbotham & Mitra（2010）研究高科技標的年齡與收購時機，並指出價格、資訊與技術選擇權之間的權衡；不是所有年輕技術公司都值得高價收購。',
 failure:'取得程式碼不等於取得未來創新能力；關鍵人才離職或授權不完整可能使綜效難以實現。'},
C:{name:'C｜港灣烘焙（價格較低）',short:'港灣烘焙',worth:630,ask:670,synergy:230,integration:55,risk:80,hidden:175,cover:55,protectCost:20,channel:65,tech:20,supply:82,concentration:95,retention:35,guess:'price',
 clue:'營收看似穩定，但是一家大型連鎖客戶貢獻約八成營收。這名客戶與創辦人私交深，契約能否長期維持需要核對。',
 deep:'深入核對契約後，發現重要客戶有重新議價和不續約的可能；要保留這段關係，可能必須維持原團隊及重新談付款條件。',
 basic:'基本查核只有總營收和年度損益，看不清重要顧客是否可在換股東後繼續交易。',
 theory:'收購標價最低不代表股權價值最低。評估需要把顧客集中、整合及未來現金流流失的風險納入。',
 failure:'如果核心客戶不續約，便宜的買價也無法阻止後續營業現金流下降。'}
};
function classifier(){
 const box=el('l6-score-tool');if(!box)return;
 const weights={channel:'channel',tech:'tech',supply:'supply'};
 const update=()=>{
   const need=el('l6-need').value,r=Number(el('l6-risk').value),t=Number(el('l6-retention').value);
   el('l6-risk-out').textContent=r+' / 100';el('l6-retention-out').textContent=t+' / 100';
   const rows=Object.entries(targets).map(([id,x])=>{
     const score=.65*x[weights[need]]+.35*(100-.6*x.concentration*(r/100)-.4*x.retention*(t/100));
     return {id,score,description:x.short};
   }).sort((a,b)=>b.score-a.score);
   const top=rows[0].score;
   el('l6-score-results').innerHTML=rows.map(x=>'<div class="model-option '+(x.score===top?'winner':'')+'"><strong>'+x.description+'</strong><span>'+num(x.score)+' 分</span><div class="model-meter"><span style="width:'+Math.max(0,Math.min(100,x.score))+'%"></span></div></div>').join('');
   const ranks=rows.map(x=>x.description).join(' → ');
   el('l6-score-explain').innerHTML='<strong>依你設定的條件，目前排序：'+ranks+'</strong><p>示意分數＝0.65 × 核心能力適配分數＋0.35 × 風險調整分數。風險調整分數＝100－0.6×顧客集中度×敏感度－0.4×人才流失度×敏感度。它的目的在於觀察判斷標準如何改變排序，<strong>不是可直接支付的公司估值</strong>。</p>';
 };
 ['l6-need','l6-risk','l6-retention'].forEach(id=>el(id)?.addEventListener(id==='l6-need'?'change':'input',update));update();
}
function price(){
 const box=el('l6-price-tool');if(!box)return;
 const update=()=>{
 const gross=Number(el('l6-gross').value),rate=Number(el('l6-realization').value),premium=Number(el('l6-premium').value);
 const realized=gross*rate/100,net=realized-45-20-premium;
 el('l6-gross-out').textContent=gross+' 萬';el('l6-realization-out').textContent=rate+'%';el('l6-premium-out').textContent=premium+' 萬';
 el('l6-synergy-value').textContent=num(realized)+' 萬';el('l6-buyer-value').textContent=signed(net)+' 萬';
 el('l6-price-explain').innerHTML='<strong>'+(net>0?'在此假設下，買方預期取得正淨價值':net<0?'在此假設下，即使有綜效也可能買貴':'預期綜效恰好抵銷成本與溢價')+'</strong><p>'+gross+' × '+rate+'%－45－20－'+premium+'＝'+num(net)+' 萬。實際收購時，需要以現值與一致的估值口徑比較。</p>';
 };
 ['l6-gross','l6-realization','l6-premium'].forEach(id=>el(id)?.addEventListener('input',update));update();
}
function game(){
 const root=el('l6-journey');if(!root)return;
 let st={stage:0,target:null,guess:null,dd:null,mode:null,switchTo:null,offer:null,altType:null,protection:null};
 const options=(items,selected,name)=>items.map(x=>'<label class="deep-choice '+(x[0]===selected?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+x[0]+'" '+(x[0]===selected?'checked':'')+'><span><strong>'+x[1]+'</strong>'+(x[2]?'<small>'+x[2]+'</small>':'')+'</span></label>').join('');
 const progress=n=>'<div class="deep-progress"><span>'+(n===5?'決策結果':'STEP '+(n+1)+' / 5')+'</span><div class="deep-progress-track"><i style="width:'+((n+1)/6*100)+'%"></i></div><span>單人標的選擇</span></div>';
 const bind=(name,key)=>root.querySelectorAll('input[name="'+name+'"]').forEach(x=>x.addEventListener('change',()=>{st[key]=x.value;if(key==='target'){st.guess=null;st.dd=null;st.mode=null;st.switchTo=null;st.offer=null;st.altType=null;st.protection=null}if(key==='mode'){st.switchTo=null;st.offer=null;st.altType=null;st.protection=null}if(key==='switchTo')st.offer=null;if(key==='offer'||key==='switchTo'||key==='altType')st.protection=null;render()}));
 const click=(id,fn)=>root.querySelector('#'+id)?.addEventListener('click',fn);
 const actionRow=(stage,ready,forward)=>'<div class="deep-actions"><button type="button" class="btn" id="l6-back" '+(stage===0?'disabled':'')+'>← 上一回合</button><button type="button" class="btn primary" id="l6-next" '+(ready?'':'disabled')+'>'+forward+'</button></div>';
 const doRisk=(x,deep,protect,switched)=>{
   if(!protect)return 0;
   return x.cover*(switched?.22:(deep?1:.4));
 };
 function render(){
  const n=st.stage,x=st.target?targets[st.target]:null;
  if(n===0){
   root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">初選 · 資訊還不完整</p><h3>第一回合｜從三家公司選出第一個接洽對象</h3><p>晨光想同時比較既有通路、數位技術和烘焙供應。你現在沒有足夠資料判斷誰最好，但必須先安排一間公司接受深入評估。</p><fieldset class="deep-fieldset"><legend>先評估誰？</legend>'+options(Object.entries(targets).map(([k,v])=>[k,v.name,k==='A'?'我們認識很久，合作流程熟悉':k==='B'?'技術很有潛力，可能需要較高買價':'報價最低，但顧客來源還沒查清']),st.target,'l6-target')+'</fieldset><fieldset class="deep-fieldset"><legend>你最容易因為哪個理由喜歡它？</legend>'+options([['relationship','很熟悉，因此覺得安全'],['technology','技術成長空間很大'],['price','價格看起來低'],['other','有明確可以實現的資源互補']],st.guess,'l6-guess')+'</fieldset><p class="note">先把你的直覺記下來，暫時不給對錯答案；下個回合才會看到當初沒有的資訊。</p>'+actionRow(n,st.target&&st.guess,'查看新資訊 →')+'</div>';
   bind('l6-target','target');bind('l6-guess','guess');
  }else if(n===1){
   root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">調查前 · 資料不對稱</p><h3>第二回合｜你選的公司，出現了令人擔心的新線索</h3><p>目前的標的是 <strong>'+x.name+'</strong>。你一開始覺得它有吸引力，但剛收到這個新資訊：</p><div class="deep-feedback review"><strong>新的風險線索</strong><p>'+x.clue+'</p></div><p>你可以花 25 萬元對契約、顧客和人員進行深入查核，也可以花 8 萬元做基本查核。深入調查會讓你在談判或整合時更有依據，<strong>卻不會讓風險自己消失</strong>。</p><fieldset class="deep-fieldset"><legend>你選擇哪種查核方式？</legend>'+options([['deep','深入盡職調查｜25 萬','取得更多完整資訊，並可能設計較有效的保護措施'],['basic','基本查核｜8 萬','成本較低，但對關鍵問題的不確定性較高']],st.dd,'l6-dd')+'</fieldset>'+actionRow(n,!!st.dd,'考慮替代方案 →')+'</div>';
   bind('l6-dd','dd');
  }else if(n===2){
   const deep=st.dd==='deep';
   root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">風險更新 · 策略不是不可改變</p><h3>第三回合｜看過新資訊後，還要買嗎？</h3><div class="deep-context">你選了 '+x.name+'。'+(deep?x.deep:x.basic)+'</div><p>你現在可以<strong>維持原本收購目標、改成合作、自行建立類似能力、改選另一間公司，或者退出</strong>。如果現在換標的，原本已支付的查核費不會退回，而且新目標仍有未查清的風險。</p><fieldset class="deep-fieldset"><legend>你想怎麼做？</legend>'+options([['buy','仍打算收購這家企業','可取得控制權，但需付收購溢價與整合成本'],['ally','改採合作或授權，不買股份','投入較少，但只能分享部分綜效，也未必能控制全部資源'],['build','自行建立類似的能力','不買這三家，但需要自行招聘與建置'],['switch','改選另一家候選公司','不被第一印象綁住，但新公司有尚未查核的資訊'],['stop','暫停所有擴張','不支付收購價，已花的查核成本仍可能無法收回']],st.mode,'l6-mode')+'</fieldset>'+actionRow(n,!!st.mode,'安排下一步 →')+'</div>';
   bind('l6-mode','mode');
  }else if(n===3){
   let fields='';
   if(st.mode==='buy'||st.mode==='switch'){
     const switched=st.mode==='switch',selected=switched?st.switchTo:st.target,t=selected?targets[selected]:null;
     fields+=(switched?'<fieldset class="deep-fieldset"><legend>改選哪個新標的？（初始查核不會自動轉移）</legend>'+options(Object.entries(targets).filter(([k])=>k!==st.target).map(([k,v])=>[k,v.name,'新標的仍有不熟悉的風險']),st.switchTo,'l6-switch')+'</fieldset>':'<div class="deep-context">你維持原先標的 '+x.name+'，將進行股權收購談判。</div>');
     if(t)fields+='<p>這個標的假設的獨立股權價值為 '+t.worth+' 萬元、賣方初始開價 '+t.ask+' 萬元。以下三個出價，是對<strong>完整舊股</strong>的股權收購價。</p><fieldset class="deep-fieldset"><legend>你願意提出的價格？</legend>'+options([['low',num(t.ask-70)+' 萬｜折價議價','賣方可能拒絕，必須有足夠可信的查核證據'],['ask',num(t.ask)+' 萬｜接受開價','較可能獲得賣方支持，但買方剩餘價值較少'],['high',num(t.ask+90)+' 萬｜提高報價','可能提高吸引力，但容易吃掉綜效']],st.offer,'l6-offer')+'</fieldset>';
     else fields+='<p class="note">請先指定新的候選標的，再進行股權收購出價。</p>';
   }else if(st.mode==='ally'){
     fields='<p>你不再購買股票，改以契約取得部分能力。合作範圍越廣，可能分享更多綜效，但協調成本與依賴也較高。</p><fieldset class="deep-fieldset"><legend>合作要做到什麼程度？</legend>'+options([['pilot','先試行六個月｜小範圍','承諾較少、成果較低，但容易調整方向'],['license','簽較完整的授權或長期合作','可能取得更多能力，但也增加費用及承諾']],st.altType,'l6-alt')+'</fieldset>';
   }else if(st.mode==='build'){
     fields='<p>你決定自己建置系統或通路。工程師、門市營運和顧客開發都需要時間和成本；以下是兩種已折成同一時點的示意淨現值方案。</p><fieldset class="deep-fieldset"><legend>自行建立到什麼程度？</legend>'+options([['pilot','先做小型試點','投資較少，成長速度較慢'],['license','直接建置較完整能力','投入多、速度可能較快，但也可能有高固定成本']],st.altType,'l6-alt')+'</fieldset>';
   }else{
     fields='<div class="deep-context">你已決定不進行新交易；下一步仍會統計已支付的查核成本，並解釋為何不交易有時是合理選擇。</div>';
   }
   const ready=st.mode==='stop'||(st.mode==='buy'&&st.offer)||(st.mode==='switch'&&st.switchTo&&st.offer)||(st.mode==='ally'&&st.altType)||(st.mode==='build'&&st.altType);
   root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">設計方案 · 價格和控制方式</p><h3>第四回合｜交易價格、合作範圍與建置成本</h3>'+fields+actionRow(n,!!ready,'面對最後的條件 →')+'</div>';
   bind('l6-switch','switchTo');bind('l6-offer','offer');bind('l6-alt','altType');
  }else if(n===4){
   const switched=st.mode==='switch',t=switched?targets[st.switchTo]:x;
   let html='';
   if(st.mode==='buy'||switched){
     const discount=st.offer==='low',rejected=discount&&(switched||st.dd!=='deep');
     html='<p>本情境的收購標的是 <strong>'+t.name+'</strong>。'+(switched?'你剛才改換標的，但並沒有對新標的再做完整的盡調。':'你已得到與它有關的調查結果。')+'</p>'+
       '<div class="deep-feedback review"><strong>交易中的最後一道障礙</strong><p>'+t.clue+'</p></div>';
     if(rejected){
       html+='<div class="deep-context">你提出低於開價 70 萬的出價，但對賣方而言，目前沒有足夠完整、可核對的調查證據。因此<strong>本教學情境假設賣方拒絕這個折價報價</strong>。要繼續買，只能接受賣方原先開價，或退出。</div><fieldset class="deep-fieldset"><legend>你要如何回應賣方？</legend>'+options([['counter','提高到原本開價，繼續談交易','買方需額外付出 70 萬，且仍承擔整合與風險'],['walk','放棄交易','不取得股份，但已付的查核費與搜尋費用仍需承擔']],st.protection,'l6-protect')+'</fieldset>';
     }else{
       html+='<p>你還能選擇在契約與整合安排中投入額外成本，例如關鍵人才留任、重要客戶續約及條款保障。這不能完全消除風險，也不能取代任何法定核准。</p><fieldset class="deep-fieldset"><legend>最後的風險決策</legend>'+options([['mitigate','投入適當的保護及整合措施','可減少買方預期承擔的一部分風險，但需要額外成本'],['accept','不再追加保護措施','保留成本，但承擔原先預估風險'],['walk','不再進行這筆收購','停止支付收購價，保留其他選擇']],st.protection,'l6-protect')+'</fieldset>';
     }
   }else if(st.mode==='ally'){
     html='<p>你選擇不取得股份。合作契約可以讓晨光取得部分技術或通路，但也需要決定是否投入額外的關鍵客戶／技術權利保障。</p><fieldset class="deep-fieldset"><legend>最後的合約安排</legend>'+options([['mitigate','加入較完整的履約與權利保障','支付 12 萬元設計與履約管理費，減少一部分預期風險'],['accept','維持較簡單的合作契約','節省設計費，但仍有協作與續約風險'],['walk','不合作','退出，僅負擔已支出的初步查核費']],st.protection,'l6-protect')+'</fieldset>';
   }else if(st.mode==='build'){
     html='<p>自行建立不需要買任何公司的股份，但技術或門市仍可能面對人才招募和時間延誤。你可以追加外部顧問與管理支援，或維持原方案。</p><fieldset class="deep-fieldset"><legend>建置前最後確認</legend>'+options([['mitigate','增加人才和管理支援，投入 12 萬','可能改善執行成功率，但不保證'],['accept','照原方案執行','保留資金，但自行承擔執行風險'],['walk','停止建置','僅負擔前期查核費，不再投入資本']],st.protection,'l6-protect')+'</fieldset>';
   }else{
     html='<p>你已經選擇暫停擴張。這不代表你什麼都沒學到：如果標的風險與要價難以協調，<strong>不買也可能是價值最高的選擇</strong>。</p><fieldset class="deep-fieldset"><legend>確認是否退出本次計畫？</legend>'+options([['walk','確認暫停','不再支出收購或整合費用；已支付的查核費仍需計入']],st.protection,'l6-protect')+'</fieldset>';
   }
   root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">簽約與執行前 · 最後決策</p><h3>第五回合｜你願意承擔哪些風險？</h3>'+html+actionRow(n,!!st.protection,'查看完整決策結局')+'</div>';
   bind('l6-protect','protection');
  }else{
   const dd=st.dd==='deep'?25:8,switched=st.mode==='switch',t=switched?targets[st.switchTo]:x,mode=st.mode,
   noDeal=mode==='stop'||st.protection==='walk',isBuy=(mode==='buy'||switched)&&!noDeal,ally=mode==='ally'&&!noDeal,build=mode==='build'&&!noDeal,
   additionalSearch=switched?20:0;
   let value=0,price=0,seller=0,protectedValue=0,safetyCost=0,label='未成交／停止',equation='',detail='';
   if(isBuy){
     const low=st.offer==='low',rejected=low&&(switched||st.dd!=='deep');
     price=t.ask+(rejected?0:low?-70:st.offer==='high'?90:0);
     seller=price;
     const mitigated=st.protection==='mitigate'&&!rejected;
     protectedValue=mitigated?(switched?Math.round(t.cover*.22):st.dd==='deep'?t.cover:Math.round(t.cover*.4)):0;
     safetyCost=mitigated?t.protectCost:0;
     const risk=t.risk+t.hidden+(switched?60:0);
     value=t.worth+t.synergy-t.integration-risk+protectedValue-safetyCost-dd-additionalSearch-price;
     label=switched?'已改選標的並完成示意股權收購':'依選擇完成示意股權收購';
     equation=t.worth+'（獨立股權價值）＋'+t.synergy+'（預期綜效）－'+t.integration+'（整合成本）－'+risk+'（風險）＋'+protectedValue+'（保護預期效果）－'+safetyCost+'（保護成本）－'+dd+'（已付盡調）－'+additionalSearch+'（重新搜尋）－'+price+'（股權收購價）';
     detail=rejected?'賣方拒絕原本折價報價，依本情境假設你改成接受原開價。':'交易價因你的出價選擇和可核實的資料而不同。';
   }else if(ally){
     const share=st.altType==='pilot'?.38:.55,setup=st.altType==='pilot'?20:45,baseRisk=(t.risk+t.hidden)*.3;
     protectedValue=st.protection==='mitigate'?20:0;safetyCost=st.protection==='mitigate'?12:0;
     value=t.synergy*share-setup-baseRisk+protectedValue-safetyCost-dd;
     label=st.altType==='pilot'?'已採取小規模合作':'已簽較完整合作契約';
     equation=num(t.synergy*share)+'（預期可分享的綜效）－'+setup+'（合作設置）－'+num(baseRisk)+'（合作風險）＋'+protectedValue+'（合約保障）－'+safetyCost+'（保障成本）－'+dd+'（查核）';
     detail='你沒有購買對方股份，所以也不會把合作支出寫成收購價；雙方仍然保有各自的股權與經營主體。';
   }else if(build){
     const gross=st.altType==='pilot'?240:350,setup=st.altType==='pilot'?140:190,risk=st.altType==='pilot'?65:125;
     protectedValue=st.protection==='mitigate'?20:0;safetyCost=st.protection==='mitigate'?12:0;
     value=gross-setup-risk+protectedValue-safetyCost-dd;
     label='自行建立新能力';
     equation=gross+'（預期額外經濟價值）－'+setup+'（自行建置）－'+risk+'（執行與時程風險）＋'+protectedValue+'（管理支援預期效果）－'+safetyCost+'（支援成本）－'+dd+'（初步查核）';
     detail='你不需買下任何現有公司；但從頭建置也會花時間，並且承擔新員工訓練與市場進入風險。';
   }else{
     value=-dd-additionalSearch;label='未完成新收購或合作';
     equation='－'+dd+'（已付查核費）－'+additionalSearch+'（若改選標的的搜尋費）';
     detail='未支付收購價，也沒有取得標的股份。這些支出是已發生的決策成本，不能因為退出就假設可退款。';
   }
   const initialGuess=st.guess===x.guess;
   const status=isBuy?'賣方收到 '+num(seller)+' 萬元舊股價款；買方取得公司股份，目標法人原則上仍存在。':'沒有出售舊股的價款流入目標原股東；'+(ally?'雙方依合作契約保有原有股份。':build?'晨光自行建立能力。':'本次新交易未完成。');
   root.innerHTML='<div class="deep-progress"><span>最後結果</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>5 個決策階段完成</span></div><div class="deep-scene"><h3>'+label+'</h3><div class="deep-stats"><div><small>你最初選擇</small><b class="small-b">'+x.short+'</b></div><div><small>最後採用</small><b class="small-b">'+(isBuy?t.short:ally?'合作方案':build?'自行建置':'不交易')+'</b></div><div><small>賣方收到的舊股價款</small><b>'+num(seller)+' 萬</b></div><div><small>買方示意增量淨值</small><b>'+signed(value)+' 萬</b></div></div><div class="deep-feedback '+(initialGuess?'good':'review')+'"><strong>'+(initialGuess?'你的第一印象與這個標的最顯眼的特徵一致':'第一印象不是最後的收購理由')+'</strong><p>'+x.clue+'</p></div><h3>一、你起初看中的是什麼？</h3><p>'+x.theory+'</p><h3>二、哪個新資訊改變決策？</h3><p>'+(st.dd==='deep'?x.deep:x.basic)+' '+t.failure+'</p><h3>三、錢怎麼流動，誰得到什麼？</h3><p>'+status+'</p><div class="deep-conclusion"><strong>買方示意淨值：'+signed(value)+' 萬元</strong><p>'+equation+' = '+num(value)+' 萬。</p><p>'+detail+'</p><p>'+(value<0?'在這組假設中，這條路線預期淨值為負。並不代表其他標的或不同價格也必然沒有價值。':value===0?'在本組假設下，好處與成本相抵；仍應考慮風險。':'在本組假設中，預期淨值為正；仍非真實交易獲利保證。')+'</p></div><p class="note">本模擬所有數字、綜效、風險與合作比例都屬於教學假設；買方示意淨值以同一時點比較，並非上市公司財報或學術論文係數。若低價報價被拒而選擇退出，將沒有股權移轉。</p><div class="deep-actions"><button type="button" class="btn" id="l6-revise">← 回到第五回合修改</button><button type="button" class="btn primary" id="l6-restart">重玩：改選另一家公司</button></div></div>';
   click('l6-revise',()=>{st.stage=4;render()});
   click('l6-restart',()=>{st={stage:0,target:null,guess:null,dd:null,mode:null,switchTo:null,offer:null,altType:null,protection:null};render()});
   return;
  }
  click('l6-next',()=>{const ready=n===0?st.target&&st.guess:n===1?st.dd:n===2?st.mode:n===3?(st.mode==='stop'||(st.mode==='switch'&&st.switchTo&&st.offer)||(st.mode==='buy'&&st.offer)||((st.mode==='ally'||st.mode==='build')&&st.altType)):st.protection;if(ready){st.stage++;render()}});
  click('l6-back',()=>{if(st.stage>0){st.stage--;render()}});
 }
 render();
}
L.init=()=>{classifier();price();game()};
})();