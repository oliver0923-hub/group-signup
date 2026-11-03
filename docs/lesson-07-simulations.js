(function(){
const L=window.MA_LESSON7=window.MA_LESSON7||{};
const el=id=>document.getElementById(id);
const fmt=x=>Number(x).toLocaleString('zh-TW',{maximumFractionDigits:1});
const signed=x=>(x>0?'+':'')+fmt(x);
const get=id=>Number(el(id).value);
const r2=x=>Math.round(x*100)/100;
function dcf(fcf1,growth,wacc,terminal){
 const r=wacc/100,g=terminal/100,gr=growth/100;
 if(!(r>g))return null;
 let pv=0,flows=[];
 for(let year=1;year<=5;year++){
   const fcf=fcf1*Math.pow(1+gr,year-1);
   const part=fcf/Math.pow(1+r,year);
   pv+=part;flows.push({year,fcf,pv:part});
 }
 const tv=flows[4].fcf*(1+g)/(r-g);
 const pvTv=tv/Math.pow(1+r,5);
 return {pv,pvTv,ev:pv+pvTv,terminalWeight:100*pvTv/(pv+pvTv),flows,tv};
}
function statementTool(){
 if(!el('l7-financial-tool'))return;
 const ids=['l7-revenue','l7-cogs','l7-capex','l7-nwc'];
 function draw(){
   const revenue=get('l7-revenue'),cogs=get('l7-cogs'),capex=get('l7-capex'),nwc=get('l7-nwc');
   const ebit=revenue-cogs-220,ebitda=ebit+40,net=(ebit-20)*.8,cfo=net+40-nwc,fcfe=cfo-capex,fcff=ebit*.8+40-capex-nwc;
   ids.forEach(id=>{el(id+'-out').textContent=fmt(get(id))+' 萬'});
   const rows=[['營收',revenue],['EBIT',ebit],['EBITDA',ebitda],['稅後淨利',net],['CFO',cfo],['FCFF',fcff],['FCFE',fcfe]];
   el('l7-financial-results').innerHTML=rows.map(([label,value])=>'<div class="model-option"><strong>'+label+'</strong><span>'+fmt(value)+' 萬</span></div>').join('');
   el('l7-financial-explain').innerHTML='<strong>FCFF = '+fmt(ebit)+' × 80% ＋ 40 − '+fmt(capex)+' − '+fmt(nwc)+' = '+fmt(fcff)+' 萬元。</strong><p>FCFE = CFO '+fmt(cfo)+' − CapEx '+fmt(capex)+' = '+fmt(fcfe)+' 萬元。由於本例沒有新增借還款，FCFF 與 FCFE 的差距為稅後利息 16 萬元。較高營收不保證較高自由現金：也要觀察成本、設備投資和營運資金。</p>';
 }
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function bridgeTool(){
 if(!el('l7-bridge-tool'))return;
 const ids=['l7-ev','l7-debt','l7-cash'];
 function draw(){
  const ev=get('l7-ev'),debt=get('l7-debt'),cash=get('l7-cash'),eq=ev-debt+cash;
  ids.forEach(id=>{el(id+'-out').textContent=fmt(get(id))+' 萬'});
  const result=[['營運事業 EV',ev],['計息淨負債',debt-cash],['股權 Equity',eq]];
  el('l7-bridge-results').innerHTML=result.map(([title,value])=>'<div class="model-option"><strong>'+title+'</strong><span>'+signed(value)+' 萬</span></div>').join('');
  el('l7-bridge-explain').innerHTML='<strong>'+fmt(ev)+'（EV）－'+fmt(debt)+'（計息借款）＋'+fmt(cash)+'（可加回現金）＝'+fmt(eq)+' 萬股權價值。</strong><p>這裡只改變資本結構與非營運現金，不另外改動營運 FCFF；負的淨負債表示此簡化模型中現金超過計息借款。實際企業可能還有其他債務性項目，且部分現金不能自由移出營運。</p>';
 }
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function dcfTool(){
 if(!el('l7-dcf-tool'))return;
 const ids=['l7-fcf1','l7-growth','l7-wacc','l7-terminal','l7-peer'];
 function draw(){
  const f=get('l7-fcf1'),g=get('l7-growth'),r=get('l7-wacc'),t=get('l7-terminal'),mult=get('l7-peer'),res=dcf(f,g,r,t);
  for(const id of ids){el(id+'-out').textContent=id==='l7-fcf1'?fmt(f)+' 萬':id==='l7-peer'?mult.toFixed(1)+'×':get(id)+'%'}
  if(!res){el('l7-dcf-explain').textContent='長期成長率必須低於 WACC。';return}
  const equity=res.ev-80+100,peerEv=mult*220,peerEquity=peerEv-80+100;
  const rows=[['五年 FCFF 現值',res.pv],['終值現值',res.pvTv],['DCF 企業 EV',res.ev],['DCF 股權',equity],['倍數法股權',peerEquity]];
  el('l7-dcf-results').innerHTML=rows.map(([name,value])=>'<div class="model-option"><strong>'+name+'</strong><span>'+fmt(value)+' 萬</span></div>').join('');
  el('l7-dcf-explain').innerHTML='<strong>DCF 企業價值約 '+fmt(res.ev)+' 萬元；其中終值占 '+fmt(res.terminalWeight)+'%。</strong><p>DCF 股權＝EV −80（借款）＋100（本段示意全部可加回的現金）。倍數法採 220 萬 EBITDA × '+mult.toFixed(1)+' 倍取得 EV，再用相同淨負債橋接。兩者不必得出相同數字；應追問誰的假設更適合晨光。</p>';
  el('l7-dcf-flows').innerHTML='<strong>五年現金流與現值（萬元）</strong><div class="l7-flow-list">'+res.flows.map(x=>'<div><span>第 '+x.year+' 年：FCFF '+fmt(x.fcf)+'</span><b>現值 '+fmt(x.pv)+'</b></div>').join('')+'</div><p>第 5 年末終值 '+fmt(res.tv)+' 萬，折回今天 '+fmt(res.pvTv)+' 萬。</p>';
 }
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function game(){
 const root=el('l7-journey');if(!root)return;
 let s={step:0,method:null,belief:null,diligence:null,assumptions:null,synergy:null,price:null,protection:null};
 const methods={
   dcf:{name:'DCF：預測未來自由現金流',short:'DCF 現金流',hint:'你正在假設未來 FCFF 每年可成長；若設備需要汰換，應反映在 FCFF，而不是只看營收。',deep:'查核發現，過去 84 萬元 FCFF 不能直接當作未來每年都能持續的現金；預估下一年正常化 FCFF 可能只有 35–60 萬元。'},
   peer:{name:'同業倍數：參照其他咖啡連鎖',short:'同業倍數',hint:'其他連鎖經營模式不一定和晨光相同，直接照抄倍數會把成長與風險差異忽略。',deep:'進一步核對發現，所謂 4 倍 EBITDA 的比較公司擴張很快，晨光的正常化 EBITDA 可能低於歷史 220 萬，應重選倍數與基礎。'},
   assets:{name:'調整淨資產：看設備、應收與負債',short:'調整淨資產',hint:'財報的帳面權益 630 萬不等於可出售資產的公允價值，更不代表所有顧客與技術已入帳。',deep:'設備重售價與帳面值可能不同，部分應收款與存貨也可能存在折價，帳面權益 630 萬需經估價調整。'}
 };
 const option=(arr,name,selected)=>arr.map(a=>'<label class="deep-choice '+(a[0]===selected?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+a[0]+'" '+(a[0]===selected?'checked':'')+'><span><strong>'+a[1]+'</strong>'+(a[2]?'<small>'+a[2]+'</small>':'')+'</span></label>').join('');
 const progress=n=>'<div class="deep-progress"><span>'+(n===5?'估值結局':'STEP '+(n+1)+' / 5')+'</span><div class="deep-progress-track"><i style="width:'+((n+1)/6*100)+'%"></i></div><span>晨光咖啡股權估值</span></div>';
 const bind=(name,key)=>root.querySelectorAll('input[name="'+name+'"]').forEach(i=>i.addEventListener('change',()=>{
   const before=s[key];s[key]=i.value;
   if(key==='method'&&before!==i.value){s.diligence=null;s.assumptions=null;s.synergy=null;s.price=null;s.protection=null;}
   if(key==='diligence'&&before!==i.value){s.assumptions=null;s.synergy=null;s.price=null;s.protection=null;}
   if(key==='assumptions'&&before!==i.value){s.synergy=null;s.price=null;s.protection=null;}
   if(key==='synergy'&&before!==i.value){s.price=null;s.protection=null;}
   if(key==='price'&&before!==i.value){s.protection=null;}
   render();
 }));
 const click=(id,cb)=>root.querySelector('#'+id)?.addEventListener('click',cb);
 const actions=(ready,next)=>'<div class="deep-actions"><button type="button" class="btn" id="l7-back" '+(s.step===0?'disabled':'')+'>← 上一步</button><button type="button" class="btn primary" id="l7-next" '+(ready?'':'disabled')+'>'+next+'</button></div>';
 function estimate(){
   const method=s.method,ass=s.assumptions,deep=s.diligence==='deep',excess=deep?40:20,dd=deep?20:8,riskExtra=deep?0:25;
   const dcfLevels={cautious:[35,14],base:[45,12],optimistic:[60,10]};
   let ev=null,eq=null,explain='';
   if(method==='dcf'){
     const [f,w]=dcfLevels[ass],d=dcf(f,3,w,2);
     ev=d.ev;eq=ev-80+excess;
     explain='預測 FCFF₁ '+f+' 萬，五年成長 3%，WACC '+w+'%，永續 g 2%；EV '+fmt(ev)+'，扣借款 80，加回可加回現金 '+excess+'。';
   }else if(method==='peer'){
     const levels={cautious:[180,2.5],base:[200,3],optimistic:[220,4]};
     const [ebitda,multiple]=levels[ass];
     ev=ebitda*multiple;eq=ev-80+excess;
     explain='可比較 EBITDA '+ebitda+' 萬 × EV／EBITDA '+multiple+' 倍＝EV '+fmt(ev)+'；扣借款 80，加回可加回現金 '+excess+'。';
   }else{
     const haircut={cautious:230,base:130,optimistic:50}[ass];
     eq=630-haircut;
     explain='帳面權益 630 萬，依所選情境調整可能需折價的資產及負債估計 '+haircut+' 萬，得到股權價值 '+fmt(eq)+'；已是股權口徑，不能再重複扣除銀行借款或加上原已包含的現金。';
   }
   return {eq,ev,dd,excess,riskExtra,explain};
 }
 function render(){
   const n=s.step,method=methods[s.method];
   if(n===0){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">星期一｜先看見 500 萬報價</p><h3>第一回合｜你打算從哪個角度判斷價格？</h3><p>晨光年營收 1,000 萬、帳上存款 100 萬、計息銀行借款 80 萬、歷史 EBITDA 220 萬、帳面權益 630 萬。朋友想以 <strong>500 萬</strong>賣出公司全部既有股份。光靠這些資料，你還不能確定價格合不合理。</p><fieldset class="deep-fieldset"><legend>先選一個估值起點（之後仍可比較其他方法）</legend>'+option(Object.entries(methods).map(([key,value])=>[key,value.name]),'l7-method',s.method)+'</fieldset><fieldset class="deep-fieldset"><legend>目前對「500 萬」的第一印象</legend>'+option([['cheap','感覺便宜'],['expensive','感覺偏貴'],['uncertain','資訊還不夠，先保留判斷']],'l7-belief',s.belief)+'</fieldset><p class="note">第一印象不會直接決定勝負。後面有新資訊，你可以修正。</p>'+actions(s.method&&s.belief,'查看資料漏洞 →')+'</div>';
     bind('l7-method','method');bind('l7-belief','belief');
   }else if(n===1){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">星期三｜有些重要資訊還沒有看見</p><h3>第二回合｜第一次估值，被新資料打斷</h3><p>你目前採用的是：<strong>'+method.name+'</strong>。</p><div class="deep-feedback review"><strong>必須補上的資料</strong><p>'+method.hint+' '+method.deep+'</p></div><p>另外，帳面<strong>現金 100 萬</strong>並不全是多餘現金，咖啡店需要一定存款支付員工和原物料；目前也還不確定有沒有額外維修需求。你可以支付 20 萬做較完整的盡職調查，或先花 8 萬基本查核。</p><fieldset class="deep-fieldset"><legend>選擇查核深度</legend>'+option([['deep','完整查核｜20 萬','確認其中 60 萬需留作日常營運，多餘現金 40 萬；更清楚評估各種風險'],['basic','初步查核｜8 萬','僅保守認列 20 萬可加回的現金，尚有額外未解的不確定性']],'l7-diligence',s.diligence)+'</fieldset><p class="note">完整查核只會讓資料更清楚，並不能確保未來顧客不流失；初步查核也不是把整筆銀行存款都算作股東可以自由拿走的錢。</p>'+actions(s.diligence,'修正估值假設 →')+'</div>';
     bind('l7-diligence','diligence');
   }else if(n===2){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第二週｜用三種情境建立估值區間</p><h3>第三回合｜你會選擇保守、基準還是樂觀預測？</h3><p>你已完成：<strong>'+(s.diligence==='deep'?'深入查核':'基本查核')+'</strong>。'+method.deep+'</p><fieldset class="deep-fieldset"><legend>估值假設（每一種估值法會套用相應變數）</legend>'+option([['cautious','保守：較低 FCFF／倍數，或較大的淨資產調整','對顧客、設備更新與景氣風險保持餘裕'],['base','基準：採中間預測','不是絕對正確，只是其中一組可檢查的情境'],['optimistic','樂觀：較高 FCFF／倍數，或較小資產調整','可能高估未來現金流，因此要解釋成長來源']],'l7-assumptions',s.assumptions)+'</fieldset><p class="note">DCF 情境：第一年正常化 FCFF 35／45／60、WACC 14%／12%／10%；倍數法情境：EBITDA 180／200／220 與倍數 2.5／3／4；資產法情境：帳面股權 630 扣減 230／130／50 萬，都是虛構示意。</p>'+actions(s.assumptions,'評估收購方綜效 →')+'</div>';
     bind('l7-assumptions','assumptions');
   }else if(n===3){
     const e=estimate();
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第三週｜價格不能只看目標公司</p><h3>第四回合｜星河買下晨光，究竟能額外創造什麼？</h3><p>依目前假設，你估計晨光的<strong>獨立股權價值約 '+fmt(e.eq)+' 萬元</strong>。這還沒有加上星河餐飲自己的專屬綜效，也不代表賣方會按你的估值成交。</p><p>星河也許可以共享配送、降低採購成本，或把會員系統接到更多門市。但若大改菜單、員工離開，可能損害品牌與顧客關係。你需要對增量價值和執行成本做一組有說明的選擇。</p><fieldset class="deep-fieldset"><legend>你認為星河的整合計畫是哪種情境？</legend>'+option([['conservative','保留品牌、緩慢整合｜綜效 80、整合 35、其他風險 50 萬','保留特色，效率提升較慢'],['balanced','分階段整合｜綜效 130、整合 55、其他風險 60 萬','兼顧效率和人員／客戶保留'],['aggressive','快速全面整合｜綜效 200、整合 100、其他風險 85 萬','預期綜效較大，但執行難度與下檔風險也較高']],'l7-synergy',s.synergy)+'</fieldset><p class="note">此回合的買方綜效是對獨立股權估值的「增量」假設，並不把晨光原有未來現金流再加算一次。選擇樂觀情境不保證真實能實現。</p>'+actions(s.synergy,'提出收購價 →')+'</div>';
     bind('l7-synergy','synergy');
   }else if(n===4){
     const e=estimate(),scale={conservative:[80,35,50],balanced:[130,55,60],aggressive:[200,100,85]},v=scale[s.synergy],
     max=e.eq+v[0]-v[1]-v[2]-e.riskExtra-e.dd;
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第四週｜和出售股東談價</p><h3>第五回合｜價值不等於成交價，誰來承擔風險？</h3><p>你的獨立股權估值約 <strong>'+fmt(e.eq)+' 萬</strong>；在這組預期綜效與風險條件下，還需扣除查核費。暫不加入契約保護時，買方能支付的「預期不虧損上限」約為 <strong>'+fmt(max)+' 萬元</strong>。這只是模型計算，實際談判仍取決於賣方意願及其他競買者。</p><p>出售股東原先要求 500 萬，並表示在本堂假設中最低可接受 <strong>480 萬元</strong>；若你只報 460 萬，即使自己覺得划算也不會成交。</p><fieldset class="deep-fieldset"><legend>你最後出價多少（買下全部舊股）？</legend>'+option([['460','460 萬：低於賣方保留價格','價格低可能保護買方，但賣方會拒絕'],['500','500 萬：接受原始報價','達到賣方可接受價格，但買方價值須重新計算'],['550','550 萬：提高報價','較高價不能自然創造額外綜效'],['walk','不交易／停止談判','保留資金，但先前已支付的查核費不能假設退回']],'l7-price',s.price)+'</fieldset><fieldset class="deep-fieldset"><legend>是否花費另外 12 萬設計保護安排？</legend>'+option([['protected','設定適當保障：花 12 萬，預期減少買方承擔風險 25 萬','例如部分價款保留、適當聲明與保證；對方必須同意，且不等於風險消失'],['plain','不追加保護安排：成本 0','減少契約成本，但保留原有的預期風險']],'l7-protection',s.protection)+'</fieldset><p class="note">本模型假設賣方願意接受所列兩種保護安排，且 500／550 萬可在符合一切必要程序後交割；460 萬出價則遭拒。這只是情境安排，現實由具體協商與法定條件決定。</p>'+actions(s.price&&s.protection,'揭曉估值與談判結果')+'</div>';
     bind('l7-price','price');bind('l7-protection','protection');
   }else{
     const e=estimate(),sy={conservative:[80,35,50],balanced:[130,55,60],aggressive:[200,100,85]}[s.synergy];
     const protectedFlag=s.protection==='protected',protection=protectedFlag?25:0,protectCost=protectedFlag?12:0;
     const accepted=s.price==='500'||s.price==='550',price=accepted?Number(s.price):0;
     const net=accepted?e.eq+sy[0]-sy[1]-sy[2]-e.riskExtra+protection-protectCost-e.dd-price:-e.dd;
     const before=accepted?e.eq+sy[0]-sy[1]-sy[2]-e.riskExtra-e.dd-price:0;
     const title=accepted?'交易在本堂假設中完成交割':s.price==='460'?'賣方拒絕了 460 萬的報價':'你決定不進行收購';
     const realSource=s.method==='dcf'?'DCF 未來現金流假設':s.method==='peer'?'可比較公司及適用倍數': '資產與負債的重新估值';
     const initial=s.belief==='cheap'?'你最初直覺認為價格便宜。':s.belief==='expensive'?'你最初直覺認為價格偏貴。':'你最初選擇保留判斷。';
     root.innerHTML='<div class="deep-progress"><span>完整估值與談判結果</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>五回合完成</span></div><div class="deep-scene"><h3>'+title+'</h3><div class="deep-stats"><div><small>估值方法</small><b class="small-b">'+methods[s.method].short+'</b></div><div><small>獨立股權估值</small><b>'+fmt(e.eq)+' 萬</b></div><div><small>出售股東收到舊股價款</small><b>'+fmt(price)+' 萬</b></div><div><small>買方示意淨值</small><b>'+signed(net)+' 萬</b></div></div><h3>第一層｜最初印象和後來的證據</h3><p>'+initial+' 但你採用的 '+realSource+' 需要根據新資訊修正。'+methods[s.method].deep+'</p><div class="deep-feedback review"><strong>你的獨立股權價值是怎麼來的？</strong><p>'+e.explain+'</p></div><h3>第二層｜企業價值和股權價值不能混用</h3><p>'+(s.method==='assets'?'你使用調整淨資產的股權價值口徑，沒有再重複扣除原本包含在資產負債表的現金與借款。':'你先得到營運 EV，再處理計息銀行借款 80 萬與可加回現金 '+e.excess+' 萬元。剩下需要營運的現金沒有當成股東可以抽走的資產。')+'</p><h3>第三層｜誰收到款項？價格和價值差多少？</h3><p>'+(accepted?'你支付 '+price+' 萬元給出售晨光咖啡舊股的原股東，買方依本堂假設完成股份收購。公司自己沒有因此額外收到這筆增資款，原先的營運義務仍在公司內。':'這筆交易沒有完成；原股東沒有收到本次股權出售價款，買方也沒有取得晨光咖啡的股份。')+'</p><div class="deep-conclusion"><strong>示意買方增量淨價值：'+signed(net)+' 萬元</strong><p>'+(accepted?fmt(e.eq)+'（獨立股權價值）＋'+sy[0]+'（綜效）－'+sy[1]+'（整合）－'+sy[2]+'（策略風險）－'+e.riskExtra+'（查核不足的額外預期風險）＋'+protection+'（買方風險分擔）－'+protectCost+'（保護安排費）－'+e.dd+'（盡調）－'+price+'（舊股收購價）':'－'+e.dd+'（已支付查核費）；未交割，不支付股權價款或事後整合費')+' = '+fmt(net)+' 萬元。</p><p>'+(accepted&&net<0?'即使完成收購，買方預期仍可能失去價值，這提醒我們不能只看綜效或交易是否成功交割。':accepted?'在這組模型假設下買方預期淨值非負，但不保證未來營運真的如預測。':'不買並不等於所有成本都歸零；前期查核已發生，也可能幫助你避免更大的未來損失。')+'</p></div><h3>第四層｜保護條款不能消除整體經濟風險</h3><p>'+(protectedFlag&&accepted?'你付了 12 萬元，假設契約讓買方預期承擔的風險減少 25 萬。這代表風險在相關各方間的分配有改變，不是所有損失憑空消失。':'你沒有以已完成交易的方式採用額外風險保障，或交易並未成立；不應因此把原本可能的風險當成已消失。')+'</p><p class="note">所有預測數字、稅率、溢價、賣方保留價及綜效均為示意，沒有從期刊研究或真實公司報表推估。沒有計入融資結構、少數股權、稅務細節及交易後實際現金流。本模型不計未成交時的終止費，實務以合約為準。</p><div class="deep-actions"><button type="button" class="btn" id="l7-revise">← 回到最後回合</button><button type="button" class="btn primary" id="l7-restart">重玩：改用另一種估值方法</button></div></div>';
     click('l7-revise',()=>{s.step=4;render()});
     click('l7-restart',()=>{s={step:0,method:null,belief:null,diligence:null,assumptions:null,synergy:null,price:null,protection:null};render()});
     return;
   }
   click('l7-back',()=>{if(s.step>0){s.step--;render()}});
   click('l7-next',()=>{
     const valid=s.step===0?s.method&&s.belief:s.step===1?s.diligence:s.step===2?s.assumptions:s.step===3?s.synergy:s.price&&s.protection;
     if(valid){s.step++;render()}
   });
 }
 render();
}
L.init=()=>{statementTool();bridgeTool();dcfTool();game()};
})();