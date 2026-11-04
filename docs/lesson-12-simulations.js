(function(){
"use strict";
const L=window.MA_LESSON12=window.MA_LESSON12||{};
const el=id=>document.getElementById(id);
const num=n=>Number(n).toLocaleString("zh-TW",{maximumFractionDigits:1});
const pct=n=>(n*100).toFixed(1)+"%";
function panel(cards,id){el(id).innerHTML=cards.map(([label,value])=>'<div class="model-option"><strong>'+label+'</strong><span>'+value+'</span></div>').join("");}
function toolSources(){
 if(!el("l12-sources-tool"))return;
 const e=el("l12-source-equity"),s=el("l12-source-senior"),j=el("l12-source-junior");
 function calc(){
  const E=+e.value,S=+s.value,J=+j.value,sum=E+S+J,balance=sum-1100;
  el("l12-source-equity-out").textContent=num(E)+" 萬";
  el("l12-source-senior-out").textContent=num(S)+" 萬";
  el("l12-source-junior-out").textContent=num(J)+" 萬";
  panel([["基金股權",num(E)+" 萬"],["優先貸款",num(S)+" 萬"],["次順位融資",num(J)+" 萬"],["總資金",num(sum)+" 萬"]],"l12-sources-values");
  el("l12-sources-feedback").innerHTML="<strong>"+(balance===0?"Sources＝Uses，金額平衡":"來源與用途尚未平衡")+"</strong><p>用途＝原股東價款 1,000＋費用 30＋現金準備 70＝1,100 萬；來源＝"+num(E)+"＋"+num(S)+"＋"+num(J)+"＝"+num(sum)+" 萬。</p><p>"+
  (balance<0?"仍缺 "+num(-balance)+" 萬，這個配比尚不能交割。":balance>0?"多籌 "+num(balance)+" 萬，需要重新說明是否保留、償還或調整資金用途，不能當成免費價值。":"款項足夠支付本例 Uses。但銀行仍要評估資產、現金流與合約。")+"</p>";
 }
 [e,s,j].forEach(n=>n.addEventListener("input",calc));
 el("l12-sources-reset").addEventListener("click",()=>{e.value=500;s.value=450;j.value=150;calc()});
 calc();
}
function quickLeverage(){
 if(!el("l12-leverage-tool"))return;
 const debt=el("l12-lev-debt"),ev=el("l12-lev-exit");
 function calc(){
  const d=+debt.value,value=+ev.value,E=1000-d,interest=d*.1,repay=d+interest,claim=Math.max(0,value-repay),shortfall=Math.max(0,repay-value);
  const profit=claim-E,ret=profit/E;
  el("l12-lev-debt-out").textContent=num(d)+" 萬";el("l12-lev-exit-out").textContent=num(value)+" 萬";
  panel([["基金投入",num(E)+" 萬"],["一年本息",num(repay)+" 萬"],["股權剩餘",num(claim)+" 萬"],["股權總報酬",pct(ret)]],"l12-leverage-values");
  el("l12-leverage-feedback").innerHTML="<strong>一年後先還本息、股東才分到剩餘</strong><p>企業出售 "+num(value)+" 萬，應付本金 "+num(d)+"＋利息 "+num(interest)+"＝"+num(repay)+" 萬；普通股權＝max(0, "+num(value)+"－"+num(repay)+")＝"+num(claim)+" 萬。</p><p>基金股權報酬＝("+num(claim)+"－"+num(E)+")÷"+num(E)+"＝"+pct(ret)+"。"+
   (shortfall>0?" <strong>不足清償債權 "+num(shortfall)+" 萬，股權歸零。</strong>":ret<0?" <strong>有槓桿不代表保證獲利。</strong>":" <strong>股權分母變小，報酬變得更敏感。</strong>")+"</p>";
 }
 debt.addEventListener("input",calc);ev.addEventListener("input",calc);
 el("l12-leverage-reset").addEventListener("click",()=>{debt.value=600;ev.value=1200;calc()});
 calc();
}
function waterfall(){
 if(!el("l12-waterfall-tool"))return;
 const input=el("l12-waterfall-proceeds");
 function calc(){
  const value=+input.value,s=Math.min(450,value),j=Math.min(150,Math.max(0,value-450)),eq=Math.max(0,value-600);
  el("l12-waterfall-out").textContent=num(value)+" 萬";
  el("l12-waterfall-bars").innerHTML=[
   ["優先債權",s,450,"senior"],["次順位債權",j,150,"junior"],["普通股東",eq,500,"equity"]
  ].map(([name,paid,claim,kind])=>'<div class="l12-waterfall-row"><div class="l12-waterfall-head"><strong>'+name+'</strong><span>'+num(paid)+' 萬 / '+num(claim)+' 萬</span></div><div class="l12-bar-track"><div class="l12-bar-fill '+kind+'" style="width:'+Math.min(100,100*paid/claim)+'%"></div></div></div>').join("");
  el("l12-waterfall-feedback").innerHTML='<strong>按契約先後順位分配</strong><p>出售價值 '+num(value)+' → 優先 '+num(s)+' → 次順位 '+num(j)+' → 股權 '+num(eq)+'。</p><p>'+
  (value<450?'優先貸款仍缺 '+num(450-value)+'，後面債權與股權都無剩餘。':value<600?'次順位貸款只收回 '+num(j)+'，股權歸零。':'兩層債權全額分配，股東相對原始 500 萬投資 '+(eq>=500?'淨增 '+num(eq-500):'虧損 '+num(500-eq))+' 萬。')+'</p>';
 }
 input.addEventListener("input",calc);el("l12-waterfall-reset").addEventListener("click",()=>{input.value=800;calc()});calc();
}
function dscr(){
 if(!el("l12-dscr-tool"))return;
 const cash=el("l12-dscr-cash"),rate=el("l12-dscr-rate");
 function calc(){
  const c=+cash.value,r=+rate.value,interest=600*r/100,service=interest+60,coverage=c/service,gap=Math.max(0,service-c);
  el("l12-dscr-cash-out").textContent=num(c)+" 萬";el("l12-dscr-rate-out").textContent=r+"%";
  panel([["利息",num(interest)+" 萬"],["第一年還本","60 萬"],["本息合計",num(service)+" 萬"],["DSCR",coverage.toFixed(2)+" 倍"]],"l12-dscr-values");
  el("l12-dscr-feedback").innerHTML='<strong>CFADS＝'+num(c)+'，本息＝'+num(service)+'</strong><p>DSCR＝'+num(c)+'÷'+num(service)+'＝'+coverage.toFixed(2)+' 倍。'+(gap>0?'可供償債現金不足 '+num(gap)+' 萬，需要另尋合法資金來源或協商。':'預估可支付本息，餘裕 '+num(c-service)+' 萬；仍需考慮其他現金需求。')+'</p>';
 }
 cash.addEventListener("input",calc);rate.addEventListener("input",calc);el("l12-dscr-reset").addEventListener("click",()=>{cash.value=120;rate.value=8;calc()});calc();
}
function debtChart(){
 const wrap=el("l12-debt-chart");if(!wrap)return;
 const vals=[600,540,480,420,350],w=580,h=255,l=52,r=24,t=20,b=48;
 const x=i=>l+i*(w-l-r)/4,y=v=>t+(600-v)*(h-t-b)/600;
 const points=vals.map((v,i)=>x(i)+","+y(v)).join(" ");
 const circles=vals.map((v,i)=>'<circle cx="'+x(i)+'" cy="'+y(v)+'" r="5" fill="#237f69"/><text x="'+x(i)+'" y="'+(y(v)-11)+'" text-anchor="middle" font-size="13" fill="#1b5345" font-weight="700">'+v+'</text><text x="'+x(i)+'" y="'+(h-18)+'" text-anchor="middle" font-size="12" fill="currentColor">'+(i===0?"收購日":"第 "+i+" 年")+'</text>').join("");
 const grid=[0,200,400,600].map(v=>'<line x1="'+l+'" y1="'+y(v)+'" x2="'+(w-r)+'" y2="'+y(v)+'" stroke="#dce9e2" stroke-dasharray="3 5"/><text x="'+(l-10)+'" y="'+(y(v)+4)+'" text-anchor="end" font-size="11" fill="currentColor">'+v+'</text>').join("");
 wrap.innerHTML='<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-label="期初債務600，第一年540，第二年480，第三年420，第四年350萬元。"><title>四年債務餘額變化（萬元）</title>'+grid+'<polyline points="'+points+'" fill="none" stroke="#237f69" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'+circles+'</svg><p class="note">本金變化：600 → 540 → 480 → 420 → 350 萬；圖上不包括另外支付的利息 163.2 萬。示意計畫須以實際可供償債現金支持。</p>';
}
const loans={
 low:{name:"穩健融資",equity:700,senior:350,junior:50,description:"借款 400 萬，基金股權投入 700 萬，償債壓力較小；股權成本較高。"},
 mid:{name:"平衡融資",equity:500,senior:450,junior:150,description:"借款 600 萬、股權 500 萬，與 12.2 的完整 Sources & Uses 配比一致。"},
 high:{name:"高度槓桿",equity:300,senior:550,junior:250,description:"借款 800 萬、股權 300 萬，成功時股權倍數較敏感，資金缺口風險也大。"}
};
const terms={
 fixed:{name:"較高的固定利率",sRate:.08,jRate:.13,description:"優先貸款年利率 8%、次順位 13%，面對利率變化的確定性較高。"},
 float:{name:"起初較低的浮動利率",sRate:.06,jRate:.11,description:"起初優先 6%、次順位 11%；新風險事件時分別上升 5 個百分點。"}
};
const responses={
 protect:{name:"保留重要顧客與核心員工",netCash:30,ev4:170,ev6:310,desc:"第一年額外產生的淨可用現金較多，長期價值保留效果較強；成本已反映於淨現金假設。"},
 cut:{name:"大幅削減門市與人力支出",netCash:20,ev4:-50,ev6:-290,desc:"短期多保留一些現金，長期可能流失顧客與知識。"},
 review:{name:"暫緩擴張並重新審查契約",netCash:10,ev4:20,ev6:80,desc:"審慎保留流動性與風險彈性，但成長效果有限。"}
};
const fixes={
 reserve:{name:"只動用原有 70 萬現金準備",desc:"不增加股權，但如果不足以補齊當期本息，會觸發財務困境結局。"},
 sponsor:{name:"向基金額外催繳 80 萬股權",desc:"補足融資缺口，LP 在第 1 年額外投入資本，IRR 須計入不同時間的兩筆出資。"},
 asset:{name:"出售非核心資產取得 100 萬現金",desc:"取得流動性，卻犧牲部分未來企業價值（本模型扣 170 萬）。"},
 refinance:{name:"與銀行協商延後第一年還本",desc:"假設銀行同意延後當年優先貸款本金，並從現金支付 25 萬協商費；債務不會消失。"}
};
const exits={
 early:{name:"第 4 年出售",years:4,base:1250,desc:"較快取得流動性；長期成長尚未完全實現。"},
 late:{name:"第 6 年出售",years:6,base:1500,desc:"容許更多成長，仍要承擔較長時間的經營與債務風險。"}
};
const m=n=>num(n)+" 萬";
function financing(st){
 const loan=loans[st.loan],term=terms[st.term];if(!loan||!term)return null;
 const senior=loan.senior,junior=loan.junior,rateS=term.sRate+(st.term==="float"?.05:0),rateJ=term.jRate+(st.term==="float"?.05:0);
 const interest=senior*rateS+junior*rateJ,amort=senior*.10;
 const operating=65+(responses[st.response]?.netCash||0),service=interest+amort;
 const deficit=Math.max(0,service-operating);
 return {loan,term,senior,junior,rateS,rateJ,interest,amort,operating,service,deficit,dscr:operating/service};
}
function irr(equity,additional,terminal,year){
 if(terminal<=0)return -1;
 if(additional===0)return Math.pow(terminal/equity,1/year)-1;
 let low=-.9999,high=10;
 const f=r=>-equity-additional/(1+r)+terminal/Math.pow(1+r,year);
 for(let i=0;i<120;i++){const mid=(low+high)/2;if(f(mid)>0)low=mid;else high=mid}
 return (low+high)/2;
}
function result(st){
 if(!loans[st.loan]||!terms[st.term]||!responses[st.response]||!fixes[st.fix]||!exits[st.exit])return null;
 const f=financing(st),loan=f.loan,additional=st.fix==="sponsor"?80:0;
 const assetCash=st.fix==="asset"?100:0,refiFee=st.fix==="refinance"?25:0;
 const principal1=st.fix==="refinance"?0:f.amort;
 const due=f.interest+principal1;
 const deficit=Math.max(0,due-f.operating);
 const cashPool=70+additional+assetCash-refiFee,shortfall=Math.max(0,deficit-cashPool);
 const leftCash=Math.max(0,cashPool-deficit);
 const earlyDistress=shortfall>1e-8;
 const exit=exits[st.exit],resp=responses[st.response];
 // Years 2..exit: normal operating cash is assumed sufficient to pay all contractual interest and principal.
 const principalPaydown=principal1+f.amort*(exit.years-1);
 const debtAtExit=Math.max(0,loan.senior-principalPaydown)+loan.junior;
 const ev=earlyDistress?640:exit.base+(exit.years===4?resp.ev4:resp.ev6)-(st.fix==="asset"?170:0);
 const debtClaim=earlyDistress?loan.senior+loan.junior+f.interest:debtAtExit;
 const equityExit=earlyDistress?0:Math.max(0,ev+leftCash-debtClaim);
 const y=earlyDistress?1:exit.years;
 const grossMultiple=equityExit/(loan.equity+additional),annualIRR=irr(loan.equity,additional,equityExit,y);
 return {...f,loan,additional,assetCash,refiFee,principal1,due,deficit,cashPool,shortfall,leftCash,earlyDistress,exit,ev,debtAtExit,debtClaim,equityExit,grossMultiple,annualIRR,years:y,
   investorProfit:equityExit-loan.equity-additional,principalPaydown};
}
function journey(){
 const mount=el("l12-journey");if(!mount)return;
 let st={stage:0,loan:null,term:null,response:null,fix:null,exit:null};
 const fields=["loan","term","response","fix","exit"];
 const titles=["第一回合｜資金來源與用途","第二回合｜銀行提出融資條件","第三回合｜重要顧客流失","第四回合｜應付本息出現缺口","第五回合｜出場時間","結局｜基金報酬與財務風險"];
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
 const options=(field,dict,active)=>'<div class="l12-choice-grid">'+Object.entries(dict).map(([id,item])=>'<button type="button" class="l12-choice '+(active===id?"selected":"")+'" aria-pressed="'+String(active===id)+'" data-l12-field="'+field+'" data-l12-value="'+id+'"><strong>'+esc(item.name)+'</strong><span>'+esc(item.description||item.desc)+'</span></button>').join("")+'</div>';
 function pick(field,value){
  const i=fields.indexOf(field);if(i<0)return;
  st[field]=value;for(let k=i+1;k<fields.length;k++)st[fields[k]]=null;
  render();
 }
 function render(){
  let html="",n=st.stage;
  const loan=loans[st.loan],f=financing(st);
  if(n===0)html='<p>目標公司股份 1,000 萬、交易費 30 萬、交割現金準備 70 萬，合計需要 1,100 萬。基金應投入多少股權？同時思考 LP 所承擔的風險。</p>'+options("loan",loans,st.loan);
  else if(n===1)html='<p>你選的來源：基金股權 '+m(loan.equity)+'＋優先貸款 '+m(loan.senior)+'＋次順位 '+m(loan.junior)+'＝<strong>1,100 萬</strong>，剛好支付 Uses。銀行提供兩種不同利率安排。</p>'+options("term",terms,st.term);
  else if(n===2){
   html='<p>你選擇 <strong>'+terms[st.term].name+'</strong>。現在收到新的營運消息：餐飲平台重要企業團購客戶流失。原先估計第一年 CFADS 約 150 萬，最新保守估計只剩 <strong>65 萬</strong>。</p>'+
   (st.term==="float"?'<div class="callout"><strong>浮動利率同步上升：</strong>優先貸款由 6% 調整至 11%；次順位由 11% 調整至 16%。</div>':'<div class="callout"><strong>固定利率比較穩定：</strong>這筆模型債務的約定利率不因同一波市場利率上升而立即調整。</div>')+
   '<p>要如何回應顧客流失？不同經營策略會影響第一年可用現金及未來企業價值。</p>'+options("response",responses,st.response);
  }else if(n===3){
   html='<p>採取「'+responses[st.response].name+'」後，第一年 CFADS 在本模型變成 <strong>'+m(f.operating)+'</strong>。銀行應收利息 '+m(f.interest)+'、約定本金 '+m(f.amort)+'，本息共 '+m(f.service)+'；DSCR＝'+f.dscr.toFixed(2)+' 倍。</p>'+
    '<p><strong>第一年本息缺口：</strong>'+m(f.deficit)+'。你原先有 70 萬現金準備，接下來要如何處理？</p>'+
    options("fix",fixes,st.fix);
  }else if(n===4){
   const r=result({...st,exit:"early"});
   html='<p>你選擇「'+fixes[st.fix].name+'」。'+
     (r.earlyDistress?'<strong>依目前情境，流動資金仍不足以支付本息，若沒有新的補救協議，將觸發嚴重財務困境。</strong>':'在本次情境與融資條件下，第一年本息已可支付。')+
     '</p><p>接下來決定何時退出；延後持有會帶來額外成長機會，也增加融資與經營不確定性。若上一回合流動資金仍不足，兩種出售時點都無法「自動」消除第一年的問題。</p>'+options("exit",exits,st.exit);
  }else{
   const r=result(st);
   html='<div class="callout"><strong>你完成了一筆 LBO 融資決策</strong><p>股權 '+m(loan.equity)+'＋債務 '+m(loan.senior+loan.junior)+'，銀行條件：「'+terms[st.term].name+'」，風險應對：「'+responses[st.response].name+'」，償債安排：「'+fixes[st.fix].name+'」，預定「'+exits[st.exit].name+'」。</p></div>';
   if(r.earlyDistress){
    html+='<div class="l12-alert"><strong>財務困境結局：第一年還款仍缺 '+m(r.shortfall)+'</strong><p>扣除營運可用現金後需要 '+m(r.deficit)+'，本方案可動用現金來源合計 '+m(r.cashPool)+'，尚缺 '+m(r.shortfall)+'，不應假裝能撐到第 4 或第 6 年。模型假設無其他救援融資，立即進入重組或折價處分，普通股權回收以零計；真實債權結果仍取決於程序與擔保。</p></div>';
   }else{
    html+='<p>第一年本息 '+m(r.due)+'，CFADS '+m(r.operating)+'，融資缺口 '+m(r.deficit)+'，可用來源 '+m(r.cashPool)+'，餘留現金 '+m(r.leftCash)+'。銀行依本次安排完成當期應收款。</p>';
   }
   html+='<div class="model-values">'+[
    ["基金初始出資",m(loan.equity)],["第 1 年追加股權",m(r.additional)],
    ["退出（或困境處置）企業價值",m(r.ev)],["退出時剩餘債務",m(r.debtClaim)],
    ["保留現金",m(r.leftCash)],["基金股權回收",m(r.equityExit)],
    ["總投入股權的簡化倍數",r.grossMultiple.toFixed(2)+"×"],["年化 IRR",pct(r.annualIRR)]]
    .map(([k,v])=>'<div class="model-option"><strong>'+k+'</strong><span>'+v+'</span></div>').join("")+'</div>';
   html+='<div class="model-result"><strong>分配核算</strong><p>'+
     (r.earlyDistress?'因第一年債務履行失敗，本模型把普通股權回收視為 0，年化報酬定義為 -100%（簡化情境）。':
       '第 '+r.years+' 年 EV '+m(r.ev)+'＋持有的現金 '+m(r.leftCash)+'－債務 '+m(r.debtAtExit)+'＝<strong>'+m(r.equityExit)+'</strong> 股權回收。基金總計投入 '+m(loan.equity+r.additional)+'，投資淨獲利／損失 '+m(r.investorProfit)+'。')+
      '</p><p>若有追加股權，IRR 使用第 0 年出資、第 1 年追加出資及退出當年的現金流，而不是直接將 MOIC 硬套單次投資公式。</p></div>'+
      '<p class="note">未計基金管理費／Carry、稅負、實際違約程序費用；初始交易費 30 已包含在 Sources & Uses。持有年第 2 年起假設企業正常化現金流足以支付約定本息，多餘現金投入營運並已反映於情境 EV，不另重複加計；次順位本金在退出時償還。資產出售的 100 萬現金伴隨 EV 額外減少 170 萬，避免憑空創造收益。</p>';
  }
  const chosen=n<5?!!st[fields[n]]:true;
  mount.innerHTML='<div class="card l12-journey-card"><div class="story-timeline"><div><b>'+titles[n]+'</b><p>進度：'+(n===5?'已完成':(n+1)+'/5')+'</p></div></div>'+html+
   '<div class="deep-actions">'+(n>0?'<button type="button" class="btn" id="l12-back">← 回到上一回合</button>':'')+
   (n<5?'<button type="button" class="btn primary" id="l12-next" '+(!chosen?'disabled aria-disabled="true"':'')+'>下一回合 →</button>':'<button type="button" class="btn primary" id="l12-reset-game">重新設計融資方案</button>')+'</div></div>';
  mount.querySelectorAll("[data-l12-field]").forEach(btn=>btn.addEventListener("click",()=>pick(btn.dataset.l12Field,btn.dataset.l12Value)));
  el("l12-back")?.addEventListener("click",()=>{if(st.stage>0){st.stage--;render()}});
  el("l12-next")?.addEventListener("click",()=>{if(chosen&&st.stage<5){st.stage++;render()}});
  el("l12-reset-game")?.addEventListener("click",()=>{st={stage:0,loan:null,term:null,response:null,fix:null,exit:null};render()});
 }
 render();
}
L.init=()=>{toolSources();quickLeverage();waterfall();dscr();debtChart();journey()};
L.calculateFinancing=financing;
L.calculateResult=result;
})();