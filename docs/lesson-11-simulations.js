(function(){
'use strict';
const L=window.MA_LESSON11=window.MA_LESSON11||{};
const el=id=>document.getElementById(id);
const money=x=>Number(x).toLocaleString('zh-TW',{maximumFractionDigits:1});
function showCall(){
 const wrap=el('l11-call-tool');if(!wrap)return;
 const input=el('l11-call'),output=el('l11-call-out'),values=el('l11-call-values'),steps=el('l11-call-steps');
 const calc=()=>{
  const called=Number(input.value),retired=called*.5,insurance=called*.3,family=called*.2;
  output.textContent=money(called)+' 萬';
  values.innerHTML=[['退休基金要繳',retired],['保險公司要繳',insurance],['家族辦公室要繳',family],['尚未催繳承諾',10000-called]]
   .map(([n,v])=>'<div class="model-option"><strong>'+n+'</strong><span>'+money(v)+' 萬</span></div>').join('');
  steps.innerHTML='<strong>出資通知 '+money(called)+' 萬如何分配？</strong><p>① 退休基金：'+money(called)+'×50%＝'+money(retired)+' 萬。</p>'+
   '<p>② 保險公司：'+money(called)+'×30%＝'+money(insurance)+' 萬。</p>'+
   '<p>③ 家族辦公室：'+money(called)+'×20%＝'+money(family)+' 萬。</p>'+
   '<p>④ 基金原本承諾 10,000 萬，尚未催繳＝10,000－'+money(called)+'＝'+money(10000-called)+' 萬。<strong>催繳不等於已全部投資，繳納也不等於直接把錢交給被投資公司。</strong></p>';
 };
 input.addEventListener('input',calc);
 el('l11-call-reset').addEventListener('click',()=>{input.value=4000;calc()});
 calc();
}
function showCarry(){
 const wrap=el('l11-carry-tool');if(!wrap)return;
 const input=el('l11-exit'),output=el('l11-exit-out'),values=el('l11-carry-values'),steps=el('l11-carry-steps');
 const calc=()=>{
  const exit=Number(input.value),profit=exit-6000,carry=Math.max(0,profit)*.2,lp=exit-carry;
  output.textContent=money(exit)+' 萬';
  values.innerHTML=[['投資獲利／虧損',profit],['GP 績效分潤',carry],['LP 收回總額',lp],['LP 淨獲利／虧損',lp-6000]]
  .map(([n,v])=>'<div class="model-option"><strong>'+n+'</strong><span>'+(v>0?'+':'')+money(v)+' 萬</span></div>').join('');
  steps.innerHTML='<strong>簡化分配：本次出售收回 '+money(exit)+' 萬。</strong>'+
   '<p>① 原始投資：6,000 萬；② 投資獲利＝'+money(exit)+'－6,000＝'+money(profit)+' 萬。</p>'+
   '<p>③ GP Carry＝max(0, '+money(profit)+')×20%＝'+money(carry)+' 萬。</p>'+
   '<p>④ LP 收到＝'+money(exit)+'－'+money(carry)+'＝'+money(lp)+' 萬。</p>'+
   '<p>'+(profit<0?'這次出售低於投入本金，LP 承擔損失、GP 在這個簡化模型不取得績效分潤。':profit===0?'剛好收回投入本金，沒有可分配的獲利。':'LP 收回本金並分享利潤；管理團隊的 Carry 取決於獲利分配條件，不是拿走公司價值的 20%。')+'</p>';
 };
 input.addEventListener('input',calc);
 el('l11-carry-reset').addEventListener('click',()=>{input.value=9000;calc()});
 calc();
}
const mandates={
 stable:{name:'重視保本能力與穩健現金回收',desc:'LP 要求基金謹慎看待顧客集中、流動性和退出時機；仍可能虧損。'},
 grow:{name:'願意承擔更高風險換取成長',desc:'LP 希望看到成長潛力，也要求 GP 解釋技術人才與資本支出風險。'}
};
const targets={
 steady:{name:'熟悉商圈的成熟餐飲連鎖',cost:5000,desc:'收入相對穩定、設備需求較低，但高度依賴企業團購大客戶。',news:'新報告：兩家企業團購客戶貢獻很大比例的訂單，下一次續約可能要求折扣。'},
 growth:{name:'具數位會員系統的快速成長品牌',cost:6000,desc:'新會員和展店成長快，但必須保留技術人才，管理體系尚不穩固。',news:'新報告：會員系統核心工程師想離職；若無留任安排，技術綜效可能落空。'}
};
const strategies={
 talent:{name:'優先留住核心團隊、與重要顧客協商',desc:'增加經營協調成本，但較有機會保住知識與客戶。'},
 cost:{name:'立即大幅削減人員與營運費用',desc:'當期改善費用表象，卻可能犧牲客戶與技術能力。'},
 review:{name:'放慢擴張，先重查契約與投資風險',desc:'較穩健，但成長速度與短期退出價格可能受影響。'}
};
const exits={
 now:{name:'較早出售持股（第 4 年）',desc:'立即把股權變成現金；可能放棄未來擴張空間。'},
 later:{name:'延後出售（第 6 年）',desc:'保留成長機會，也更長時間承擔顧客、技術與市場風險。'}
};
function result(st){
 if(!targets[st.target]||!strategies[st.strategy]||!exits[st.exit])return null;
 const t=targets[st.target],call=Number(st.call),base=st.target==='steady'?(st.exit==='now'?6400:7500):(st.exit==='now'?7450:9550);
 const effect={
  talent:{steady:{now:550,later:1050},growth:{now:700,later:1600}},
  cost:{steady:{now:350,later:-750},growth:{now:400,later:-3600}},
  review:{steady:{now:200,later:350},growth:{now:-100,later:250}}
 }[st.strategy][st.target][st.exit];
 const exitValue=base+effect,idle=call-t.cost,profit=exitValue-t.cost,carry=Math.max(0,profit)*.20;
 const lp=exitValue+idle-carry,net=lp-call;
 return {cost:t.cost,call,idle,exitValue,profit,carry,lp,net,lpMultiple:lp/call,
  mismatch:st.mandate==='stable'&&st.target==='growth',duration:st.exit==='now'?4:6};
}
function journey(){
 const mount=el('l11-investment-journey');if(!mount)return;
 let st={stage:0,mandate:null,target:null,call:null,strategy:null,exit:null};
 const titles=['第一回合｜先讀懂 LP 的委託','第二回合｜挑選餐飲投資標的','第三回合｜基金要催繳多少資本？','第四回合｜出現了新的營運情報','第五回合｜要現在出售，還是繼續持有？','結果｜LP 與 GP 各拿多少？'];
 const fields=['mandate','target','call','strategy','exit'];
 const pick=(field,value)=>{
  const n=fields.indexOf(field);if(n<0)return;
  st[field]=field==='call'?Number(value):value;
  for(let k=n+1;k<fields.length;k++)st[fields[k]]=null;
  render();
 };
 const choices=(field,options,selected)=>'<div class="model-options">'+options.map(([key,label,desc])=>
   '<button type="button" class="model-choice '+(String(selected)===String(key)?'selected':'')+'" aria-pressed="'+String(String(selected)===String(key))+'" data-l11-field="'+field+'" data-l11-value="'+key+'"><strong>'+label+'</strong><span>'+desc+'</span></button>').join('')+'</div>';
 function render(){
  const n=st.stage,t=targets[st.target],r=result(st);
  let body='<p class="note">這是由你決定的基金投資，所有金額單位為萬元。按「下一回合」才會取得新的資訊；不同選擇將保留並影響最後的分配。</p>';
  if(n===0){
   body+='<p>遠見一號基金的 LP 已答應提供資金，但你還沒選標的。先決定你要替什麼風險偏好的出資人服務。</p>'+
    choices('mandate',Object.entries(mandates).map(([k,v])=>[k,v.name,v.desc]),st.mandate);
  }else if(n===1){
   body+='<p>你已選定的 LP 偏好：<strong>'+mandates[st.mandate].name+'</strong>。現在兩個標的的投資額與風險並不相同。</p>'+
    choices('target',Object.entries(targets).map(([k,v])=>[k,v.name+'｜投入 '+money(v.cost)+' 萬',v.desc]),st.target);
  }else if(n===2){
   body+='<p>你評估的標的是：<strong>'+t.name+'</strong>，需支付股權投資價款 '+money(t.cost)+' 萬。基金已有 10,000 萬承諾額，但未全部催繳。</p>'+
    '<p>你可以只催繳足夠的資本，也可以多催繳一些以保留基金內現金。不過<strong>未投入的現金不會憑空創造報酬</strong>。</p>'+
    choices('call',[[6000,'催繳 6,000 萬','本次投資完成後，尚有 '+money(6000-t.cost)+' 萬已催繳但未投資的現金。'],[8000,'催繳 8,000 萬','本次投資完成後，基金帳上尚有 '+money(8000-t.cost)+' 萬未投入的已催繳現金。']],st.call);
  }else if(n===3){
   body+='<p>基金催繳 '+money(st.call)+' 萬，支付 '+money(t.cost)+' 萬完成股權投資，尚有 '+money(st.call-t.cost)+' 萬未投資現金。</p>'+
    '<div class="callout"><strong>新取得的盡調／營運資料：</strong><p>'+t.news+'</p></div>'+
    '<p>這時你要選一個經營或治理方式。不同作法不一定立即改變會計淨利，但會改變企業幾年後被出售時的可能價格。</p>'+
    choices('strategy',Object.entries(strategies).map(([k,v])=>[k,v.name,v.desc]),st.strategy);
  }else if(n===4){
   body+='<p>你選擇的治理方式是：<strong>'+strategies[st.strategy].name+'</strong>。</p>'+
    '<p>現在有潛在買家接洽。你可以選擇四年左右先出場，也可以繼續持有，希望企業未來成長，但必須承擔更長時間的經營與市場風險。</p>'+
    '<p>先預測：如果核心人才離職，時間拉長就一定比較有利嗎？請在下面做出決定，之後才會看到投資成果。</p>'+
    choices('exit',Object.entries(exits).map(([k,v])=>[k,v.name,v.desc]),st.exit);
  }else if(n===5){
   if(!r)throw Error('Missing PE decision at result stage');
   const note=r.mismatch?'你選了成長型標的，但原本 LP 比較重視穩健現金回收；即使投資賺錢，也要向 LP 解釋風險與策略是否相容。':'你選的投資風格與 LP 的初始偏好沒有直接矛盾；但這仍不是績效保證。';
   const risk=st.strategy==='cost'&&st.exit==='later'?'你選擇削減核心人力，又決定長期持有，結果因人才／客戶流失而受到更大負面影響。':
      st.strategy==='talent'?'你選擇保留人才及重要客戶關係，這在模型中改善了退出價格；現實仍需觀察投資成本和市場條件。':
      '你選擇先查核再擴張，在模型中少承擔一些治理風險，但可能放慢成長。';
   body+='<div class="callout"><strong>你的投資路線</strong><p>LP 偏好：'+mandates[st.mandate].name+'；標的：'+t.name+'；資本催繳 '+money(r.call)+' 萬；治理：'+strategies[st.strategy].name+'；第 '+r.duration+' 年退出。</p></div>'+
     '<div class="model-values">'+[['投資成本',r.cost],['未投入但已催繳現金',r.idle],['出售股權收到',r.exitValue],['投資獲利／虧損',r.profit],['GP Carry（20%）',r.carry],['LP 最終收回（含閒置現金）',r.lp],['LP 淨獲利／虧損',r.net]].map(([label,v])=>
      '<div class="model-option"><strong>'+label+'</strong><span>'+money(v)+' 萬</span></div>').join('')+'</div>'+
     '<div class="model-result"><strong>資金逐步流動</strong><p>① LP 實際繳付 '+money(r.call)+' 萬。② 基金投入 '+money(r.cost)+' 萬買股權，暫留 '+money(r.idle)+' 萬。③ 第 '+r.duration+' 年以 '+money(r.exitValue)+' 萬出售。④ 單筆投資獲利／虧損：'+money(r.exitValue)+'－'+money(r.cost)+'＝'+money(r.profit)+' 萬。⑤ GP Carry＝max(0, '+money(r.profit)+')×20%＝'+money(r.carry)+' 萬。⑥ LP 回收＝'+money(r.exitValue)+'＋'+money(r.idle)+'－'+money(r.carry)+'＝<strong>'+money(r.lp)+' 萬</strong>；LP 淨利／損失＝'+money(r.net)+' 萬。</p><p>以本次繳付現金為分母，LP 的簡化回收倍數＝'+r.lpMultiple.toFixed(2)+'×（未計費用與不同出資時點）。</p></div>'+
     '<p><strong>故事結果：</strong>'+risk+'</p><p>'+note+'</p><p>觀念提醒：<strong>GP Carry 不是退出價款的 20%，而是本模型獲利部分的 20%。</strong>先前 LP 催繳多餘的現金在結果中返還，未把閒置資金誤算成獲利；真實基金的 Waterfall 與分配時間會更複雜。</p>';
  }
  const done=n>=5;
  const chosen=n===0?!!st.mandate:n===1?!!st.target:n===2?!!st.call:n===3?!!st.strategy:n===4?!!st.exit:true;
  const actions='<div class="deep-actions">'+
    (n>0?'<button type="button" class="btn" id="l11-journey-back">← 上一回合</button>':'')+
    (done?'<button type="button" class="btn primary" id="l11-journey-restart">重玩：更換基金策略</button>':
       '<button type="button" class="btn primary" id="l11-journey-next" '+(!chosen?'disabled aria-disabled="true"':'')+'>下一回合 →</button>')+
    '</div>';
  mount.innerHTML='<div class="card"><div class="story-timeline"><div><b>'+titles[n]+'</b><p>進度：'+(n>=5?'已完成':(n+1)+' / 5')+'</p></div></div>'+body+actions+'</div>';
  mount.querySelectorAll('[data-l11-field]').forEach(btn=>btn.addEventListener('click',()=>pick(btn.dataset.l11Field,btn.dataset.l11Value)));
  el('l11-journey-back')?.addEventListener('click',()=>{if(st.stage>0){st.stage--;render()}});
  el('l11-journey-next')?.addEventListener('click',()=>{if(chosen&&st.stage<5){st.stage++;render()}});
  el('l11-journey-restart')?.addEventListener('click',()=>{st={stage:0,mandate:null,target:null,call:null,strategy:null,exit:null};render()});
 }
 render();
}
L.init=()=>{showCall();showCarry();journey()};
L.calculatePE=({target,call,strategy,exit,mandate})=>result({target,call,strategy,exit,mandate});
})();