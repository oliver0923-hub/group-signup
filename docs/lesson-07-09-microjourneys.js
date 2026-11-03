(function(){
'use strict';
const option=(group,val,title,desc,selected)=>'<label class="deep-choice '+(selected===val?'chosen':'')+'"><input type="radio" name="'+group+'" value="'+val+'" '+(selected===val?'checked':'')+'><span><strong>'+title+'</strong><small>'+desc+'</small></span></label>';
const actions=(step,valid)=>'<div class="deep-actions"><button type="button" class="btn" data-back '+(step===0?'disabled':'')+'>← 上一回合</button><button type="button" class="btn primary" data-next '+(valid?'':'disabled')+'>'+(step===2?'看結局':'下一回合 →')+'</button></div>';
function financial(){
 const root=document.getElementById('l7-finance-journey');if(!root)return;
 let state={step:0,metric:null,capex:null,cash:null};
 function render(){
  const t=state.step;
  let html='<div class="deep-progress"><span>'+(t===3?'查核結果':'STEP '+(t+1)+' / 3')+'</span><div class="deep-progress-track"><i style="width:'+((t+1)*25)+'%"></i></div><span>晨光財報查核</span></div>';
  if(t===0)html+='<h3>第一回合｜你先告訴主管哪個數字？</h3><p>晨光年營收 1,000 萬、稅後淨利 128 萬，初步自由現金流 FCFF 為 84 萬。你會用哪個指標來思考收購？</p>'+option('l7f-metric','profit','先用稅後淨利 128 萬','可說明會計獲利，但不能忽略設備支出與營運資金。',state.metric)+option('l7f-metric','fcff','先用 FCFF 84 萬','有利於後續的營運現金流估值，但仍須查核投入假設。',state.metric)+actions(t,!!state.metric);
  else if(t===1)html+='<h3>第二回合｜設備檢查後，新的投入出現</h3><p>原本年度資本支出 CapEx＝75 萬，但設備必須再花 35 萬，其他條件暫不變。</p>'+option('l7f-capex','revise','將 FCFF 修正到 49 萬','原 FCFF 84−追加設備支出 35＝49 萬。',state.capex)+option('l7f-capex','keep','仍採 FCFF 84 萬','忽略新發現的必要設備投資。',state.capex)+actions(t,!!state.capex);
  else if(t===2)html+='<h3>第三回合｜帳上現金不全是多餘現金</h3><p>買 100% 舊股要價 500 萬、銀行計息負債 80 萬、公司帳上現金 100 萬；其中 60 萬必須維持日常營運。</p>'+option('l7f-cash','restricted','只將 40 萬作為可加回的多餘現金','EV＝500＋80−40＝540 萬。',state.cash)+option('l7f-cash','all','把全部 100 萬當成可加回現金','EV＝500＋80−100＝480 萬；忽略營運限制。',state.cash)+actions(t,!!state.cash);
  else{
   const f=state.capex==='revise'?49:84,ev=state.cash==='restricted'?540:480;
   html+='<h3>結果｜你怎樣根據證據修正財務資訊？</h3><div class="model-options"><div class="model-option"><strong>你採用的 FCFF</strong><span>'+f+' 萬</span></div><div class="model-option"><strong>你採用的簡化 EV</strong><span>'+ev+' 萬</span></div></div><p>依目前新增資訊，修正後 FCFF＝180×(1−20%)＋40−110−25＝<strong>49 萬</strong>。多餘現金僅 40 萬時，簡化 EV＝500＋80−40＝<strong>540 萬</strong>。</p><p>'+(state.metric==='profit'?'淨利可幫你理解獲利，但不能直接拿來代替 FCFF。':'你先選 FCFF 作估價基礎，但仍需要資訊查核。')+(state.capex==='revise'?' 你把新設備支出納入模型。':' 你未修正 FCFF，因而比查核後的數值高估 35 萬。')+(state.cash==='restricted'?' 你已區分營運必需現金與多餘現金。':' 你將 60 萬營運必需現金誤當作多餘現金，造成 EV 橋接偏低。')+'</p><p class="note">這是獨立的教學數字與選擇後果，並不直接證明市場上公司的真實售價。研究背景：Kaplan &amp; Ruback（1995）。</p><div class="deep-actions"><button type="button" class="btn" data-back>← 返回前一回合</button><button type="button" class="btn primary" data-reset>重新開始</button></div>';
  }
  root.innerHTML=html;
  root.querySelectorAll('input[type="radio"]').forEach(input=>input.addEventListener('change',()=>{const k=input.name==='l7f-metric'?'metric':input.name==='l7f-capex'?'capex':'cash';state[k]=input.value;render()}));
  root.querySelector('[data-back]')?.addEventListener('click',()=>{state.step=Math.max(0,state.step-1);render()});
  root.querySelector('[data-next]')?.addEventListener('click',()=>{if(state.step<3){state.step++;render()}});
  root.querySelector('[data-reset]')?.addEventListener('click',()=>{state={step:0,metric:null,capex:null,cash:null};render()});
 }
 render();
}
function negotiation(){
 const root=document.getElementById('l9-negotiation-journey');if(!root)return;
 let state={step:0,first:null,review:null,offer:null};
 const news={'530':{name:'另一買家出現',desc:'競爭買方提出 555 萬的初步意向，賣方底價提高到 565 萬。',min:565,risk:0},'560':{name:'重要客戶續約未定',desc:'新資訊顯示收購後可實現的綜效可能減少 25 萬。',min:520,risk:25},'590':{name:'高價交易的融資壓力',desc:'財務部門估計額外資金成本和流動性風險增加 25 萬。',min:520,risk:25}};
 function render(){
  const t=state.step,ev=news[state.first]||news['560'],max=585-ev.risk-(state.review==='audit'?5:0);
  let html='<div class="deep-progress"><span>'+(t===3?'談判結果':'STEP '+(t+1)+' / 3')+'</span><div class="deep-progress-track"><i style="width:'+((t+1)*25)+'%"></i></div><span>星河與晨光的議價</span></div>';
  if(t===0)html+='<h3>第一回合｜星河先出多少？</h3><p>晨光獨立價值 500 萬、賣方底價 520 萬、買方初始上限 585 萬。</p>'+option('l9-first','530','先出 530 萬','可保留較多買方利益，但賣方可能向其他買家詢價。',state.first)+option('l9-first','560','出 560 萬','目前基準下，買賣雙方都有分享綜效的空間。',state.first)+option('l9-first','590','出 590 萬','已高於本組基準下的合理買方上限。',state.first)+actions(t,!!state.first);
  else if(t===1)html+='<h3>第二回合｜新情報：'+ev.name+'</h3><p>'+ev.desc+'</p><p>你是否追加查核以降低資訊不確定性？</p>'+option('l9-review','audit','追加查核費 5 萬','查核有成本，在本例買方上限需再扣 5 萬。',state.review)+option('l9-review','skip','先沿用目前資訊','已知風險不會因不查核而消失。',state.review)+actions(t,!!state.review);
  else if(t===2)html+='<h3>第三回合｜修正報價或退出</h3><p>賣方最低要 <strong>'+ev.min+' 萬</strong>，買方扣除目前風險與額外查核費後的上限 <strong>'+max+' 萬</strong>。你可改掉第一回合報價。</p>'+option('l9-offer','530','最終報價 530 萬','不一定被賣方接受。',state.offer)+option('l9-offer','560','最終報價 560 萬','檢查是否仍在雙方可接受區間。',state.offer)+option('l9-offer','590','最終報價 590 萬','買方可能承受負的預期增量價值。',state.offer)+option('l9-offer','exit','停止交易','保留資金等待另一個機會。',state.offer)+actions(t,!!state.offer);
  else{const bid=Number(state.offer),deal=state.offer!=='exit'&&bid>=ev.min,gain=max-bid;
   html+='<h3>結果｜買賣雙方誰取得多少價值？</h3><div class="model-options"><div class="model-option"><strong>賣方底價</strong><span>'+ev.min+' 萬</span></div><div class="model-option"><strong>買方上限</strong><span>'+max+' 萬</span></div></div><p>'+(state.offer==='exit'?'你選擇不交易。當出價區間消失，退出可能比強行完成更有價值。':!deal?'最終報價低於賣方底價，模型假設賣方拒絕，因此沒有成交、沒有交割價款與股份移轉。':'賣方相對 500 萬獨立價值增加 '+(bid-500)+' 萬，買方預期保留 '+gain+' 萬。'+(gain<0?' 賣方願意接受不代表買方就能賺錢。':' 在本組已知假設下，雙方都有可能接受。'))+'</p><p class="note">競價提高的是賣方外部選擇，不代表標的獲利自動增加；顧客與融資風險會使買方最高合理價格下降。所有數字為示意。</p><div class="deep-actions"><button type="button" class="btn" data-back>← 返回出價</button><button type="button" class="btn primary" data-reset>重玩其他路線</button></div>';
  }
  root.innerHTML=html;
  root.querySelectorAll('input[type="radio"]').forEach(input=>input.addEventListener('change',()=>{const k=input.name==='l9-first'?'first':input.name==='l9-review'?'review':'offer';if(k==='first'&&state.first!==input.value){state.review=null;state.offer=null;}if(k==='review'&&state.review!==input.value)state.offer=null;state[k]=input.value;render()}));
  root.querySelector('[data-back]')?.addEventListener('click',()=>{state.step=Math.max(0,state.step-1);render()});
  root.querySelector('[data-next]')?.addEventListener('click',()=>{if(state.step<3){state.step++;render()}});
  root.querySelector('[data-reset]')?.addEventListener('click',()=>{state={step:0,first:null,review:null,offer:null};render()});
 }
 render();
}
window.MA_NEW_JOURNEYS={init7:financial,init9:negotiation};
})();