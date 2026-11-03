(function(){
const L=window.MA_LESSON8=window.MA_LESSON8||{};
const el=id=>document.getElementById(id);
const val=id=>Number(el(id).value);
const fmt=x=>Number(x).toLocaleString('zh-TW',{maximumFractionDigits:2});
const signed=x=>(x>0?'+':'')+fmt(x);
const pct=x=>fmt(100*x)+'%';
function cards(parent,items){
 el(parent).innerHTML=items.map(([title,value])=>'<div class="model-option"><strong>'+title+'</strong><span>'+value+'</span></div>').join('');
}
function bargain(){
 if(!el('l8-bargain-tool'))return;
 const ids=['l8-bid','l8-synergy','l8-risk','l8-rival'];
 const draw=()=>{
  const bid=val('l8-bid'),syn=val('l8-synergy'),risk=val('l8-risk'),rival=val('l8-rival'),max=500+syn-risk-10,min=520+rival,accepted=bid>=min;
  ids.forEach(id=>{el(id+'-out').textContent=fmt(val(id))+' 萬'});
  cards('l8-bargain-results',[['買方最高價',fmt(max)+' 萬'],['賣方最低價',fmt(min)+' 萬'],['賣方增量收益',accepted?fmt(bid-500)+' 萬':'未成交'],['買方增量收益',accepted?signed(max-bid)+' 萬':'未成交']]);
  const msg=min>max?'本組參數沒有雙方都能接受且讓買方非負收益的價格區間。':bid<min?'雖然可能有人認為報價划算，但賣方保留價尚未滿足，假設不成交。':bid>max?'賣方願意接受，但報價超過買方最高合理價，買方預期會損失價值。':'在本組假設下，賣方願意接受且買方仍有非負的預期增量價值。';
  el('l8-bargain-explain').innerHTML='<strong>'+msg+'</strong><p>買方最高價＝500＋'+syn+'－'+risk+'－10＝'+fmt(max)+' 萬；賣方最低價＝520＋'+rival+'＝'+fmt(min)+' 萬。'+(accepted?'成交價 '+bid+' 萬相對 500 萬參考價的示意加價比率＝'+fmt((bid-500)/500*100)+'%；這不是公開上市公司公告前股價溢價。':'此時不應顯示已完成股權轉移或賣方已收股款。')+'</p>';
 };
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function pay(){
 if(!el('l8-payment-tool'))return;
 const ids=['l8-total','l8-stockpct','l8-price'];
 const draw=()=>{
 const total=val('l8-total'),stockFrac=val('l8-stockpct')/100,market=val('l8-price');
 const stock=total*stockFrac,cash=total-stock,newShares=stock*10000/1000,oldShares=15000,frac=newShares/(oldShares+newShares),nominal=newShares*market/10000;
 ids.forEach(id=>el(id+'-out').textContent=id==='l8-stockpct'?val(id)+'%':id==='l8-price'?fmt(market)+' 元':fmt(val(id))+' 萬');
 cards('l8-payment-results',[['約定即期現金',fmt(cash)+' 萬'],['新發買方股份',fmt(newShares)+' 股'],['買方原股東持股',pct(1-frac)],['賣方持有買方股份',pct(frac)],['固定股數目前參考市值',fmt(nominal)+' 萬'],['現金＋股份參考總值',fmt(cash+nominal)+' 萬']]);
 el('l8-payment-explain').innerHTML='<strong>股份支付 '+fmt(stock)+' 萬（簽約價值）÷每股 1,000 元＝新增 '+fmt(newShares)+' 股。</strong><p>買方原持有 15,000 股；新增後共 '+fmt(oldShares+newShares)+' 股，舊股東比例 '+pct(1-frac)+'。股數在固定換股的簡化情境下不變；買方股價現在為 '+fmt(market)+' 元，固定發出的股票「參考」市值是 '+fmt(nominal)+' 萬。實際合併後市場價格另受綜效與資訊影響，不能將參考市值視為保證實現的報酬。</p>';
 };
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function earnout(){
 if(!el('l8-earnout-tool'))return;
 const ids=['l8-upfront','l8-contingent','l8-prob','l8-discount'];
 const draw=()=>{
  const upfront=val('l8-upfront'),extra=val('l8-contingent'),prob=val('l8-prob')/100,r=val('l8-discount')/100,pv=prob*extra/(1+r),expected=upfront+pv;
  ids.forEach(id=>el(id+'-out').textContent=id==='l8-prob'||id==='l8-discount'?val(id)+'%':fmt(val(id))+' 萬');
  cards('l8-earnout-results',[['現在確定的約定價款',fmt(upfront)+' 萬'],['名目最高總額',fmt(upfront+extra)+' 萬'],['一年後額外對價預期現值',fmt(pv)+' 萬'],['全部預期對價現值',fmt(expected)+' 萬']]);
  el('l8-earnout-explain').innerHTML='<strong>估算：'+fmt(upfront)+'＋('+fmt(prob*100)+'% × '+fmt(extra)+') ÷(1＋'+fmt(r*100)+'%)＝'+fmt(expected)+' 萬。</strong><p>多寫「最高可得 '+fmt(upfront+extra)+' 萬」不能當作今天已收到這筆錢。真正支付仍取決於合約、達標指標、績效認定與雙方義務；模型採單一年期、單一風險調整折現率。</p>';
 };
 ids.forEach(id=>el(id)?.addEventListener('input',draw));draw();
}
function scenario(){
 const root=el('l8-journey');if(!root)return;
 let state={stage:0,first:null,motive:null,dd:null,offer:null,payment:null,risk:null};
 const choices=(items,selected,name)=>items.map(item=>'<label class="deep-choice '+(selected===item[0]?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+item[0]+'" '+(selected===item[0]?'checked':'')+'><span><strong>'+item[1]+'</strong>'+(item[2]?'<small>'+item[2]+'</small>':'')+'</span></label>').join('');
 const progress=n=>'<div class="deep-progress"><span>'+(n===5?'完整談判結果':'STEP '+(n+1)+' / 5')+'</span><div class="deep-progress-track"><i style="width:'+((n+1)/6*100)+'%"></i></div><span>星河與晨光的談判</span></div>';
 const event=()=>state.first==='530'?{name:'競價者出現',desc:'另一個集團突然提出 555 萬的意向報價，朋友 A 認為不必接受太低的價格。',min:565,risk:0,mechanism:'賣方外部選擇變強，保留價格上升；不代表競價者必然可以完成交易。'}:
 state.first==='560'?{name:'顧客續約疑慮',desc:'晨光最大的企業訂單客戶尚未完成續約。預期整合後額外價值可能少 25 萬。',min:520,risk:25,mechanism:'原本想像的綜效，需要扣除顧客和整合風險。'}:
 {name:'資金成本上升',desc:'你初步表態願意出 590 萬後，財務部門指出資金調度比預期困難，合約融資及流動性預期成本增加 25 萬。',min:520,risk:25,mechanism:'更高出價不會減少整合或融資成本；即使賣方滿意，買方也可能付出過高代價。'};
 const fee=()=>state.dd==='deep'?15:5;
 const hidden=()=>state.dd==='deep'?0:20;
 const riskAction=()=>state.risk==='retain'?(state.dd==='deep'?28:12):0;
 const riskActionCost=()=>state.risk==='retain'?12:0;
 const sy=()=>150-35-20-event().risk-fee()-hidden()+riskAction()-riskActionCost();
 function draw(){
   const n=state.stage,ev=event();
   if(n===0){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">星期一｜開始接洽</p><h3>第一回合｜你第一口報價要出多少？</h3><p>晨光獨立股權估值 500 萬；星河估計新增綜效 150 萬，但還要整合、承擔風險與查核費。出售股東的原始底價假設是 520 萬。你不知道後面會出現什麼新消息。</p><fieldset class="deep-fieldset"><legend>初始意向報價（未簽約）</legend>'+choices([['530','530 萬｜比較保守','保留一些買方空間，但可能讓賣方繼續尋找競價者'],['560','560 萬｜中間價格','初步願意分給賣方一部分綜效'],['590','590 萬｜快速提高價格','對賣方更有吸引力，但買方可能留下太少淨價值']],state.first,'l8-first')+'</fieldset><fieldset class="deep-fieldset"><legend>你為什麼打算這樣出價？</legend>'+choices([['control','想取得控制權並整合營運'],['competition','擔心競爭者先買走'],['value','希望保住買方自己的增量價值']],state.motive,'l8-motive')+'</fieldset><p class="note">這只是第一輪報價，不會直接輸出最終結局。下一段會出現對應的資訊變化。</p>'+actions(n,state.first&&state.motive,'進入下一幕 →')+'</div>';
     bind('l8-first','first');bind('l8-motive','motive');
   }else if(n===1){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第二週｜外部環境改變</p><h3>第二回合｜意向報價以後，事情並沒有停下來</h3><p>你第一口報價是 '+state.first+' 萬。現在收到一個<strong>與這條故事路線相連的教學情境事件</strong>：</p><div class="deep-feedback review"><strong>'+ev.name+'</strong><p>'+ev.desc+'</p></div><p>'+ev.mechanism+'</p><fieldset class="deep-fieldset"><legend>面對新資訊，選哪種查核深度？</legend>'+choices([['deep','深入查核｜15 萬','取得較完整的客戶、融資及整合資料，並能設計更精確的留任方案'],['basic','基本查核｜5 萬','立即成本較低，但須保留更多尚未辨認的不確定性']],state.dd,'l8-dd')+'</fieldset><p class="note">做深入盡調不會自動讓經濟風險消失；它主要改變資訊與後續措施的效果。競爭事件也不等於政府核准已經取得。</p>'+actions(n,!!state.dd,'修正最後出價 →')+'</div>';
     bind('l8-dd','dd');
   }else if(n===2){
     const cap=500+150-35-20-ev.risk-fee()-hidden();
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第三週｜協商條件</p><h3>第三回合｜你有權改價，也有權不買</h3><p>目前出售股東的示意最低接受價是 <strong>'+ev.min+' 萬</strong>；若不考慮最後一回合的額外管理措施，買方最高合理價約 <strong>'+fmt(cap)+' 萬</strong>。這兩個價格不一定仍有重疊。</p><fieldset class="deep-fieldset"><legend>你向原股東提出的最終股權報價？</legend>'+choices([['540','540 萬','價格較低；如果未滿足賣方底價，交易不成立'],['570','570 萬','接近初始上限，留給買方的綜效可能變少'],['600','600 萬','對賣方很有吸引力，但可能讓買方負預期淨值'],['walk','暫時退出談判','不取得股權，先前查核費仍會發生']],state.offer,'l8-offer')+'</fieldset><p>這裡不要求你必須成交。即使你最初出價很高，獲得新資料後也可以修正；但任何修改都可能讓賣方選擇其他買家。</p>'+actions(n,!!state.offer,'決定支付方式 →')+'</div>';
     bind('l8-offer','offer');
   }else if(n===3){
     const sale=state.offer!=='walk'&&Number(state.offer)>=ev.min;
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第四週｜現金、股票或混合</p><h3>第四回合｜用什麼支付，不只是財務部門的小事</h3><p>你提出 '+(state.offer==='walk'?'不交易':state.offer+' 萬')+'；'+(sale?'依此教學情境，這一金額達到賣方示意底價，尚需決定支付安排。':'這個價格未達到賣方底價（或你已退出），因此最終不能完成股權交易；你仍可在此練習支付安排如何影響價值。')+'</p><fieldset class="deep-fieldset"><legend>對於本筆提議，採取什麼支付形式？</legend>'+choices([['cash','全部以現金支付','賣方拿確定的現金；買方需籌集流動性'],['stock','全部發行星河新股','現金支出較少，但原股東稀釋；賣方分享未來股票變動'],['mixed','50% 現金＋50% 星河新股','現金確定性與股價風險分別分配']],state.payment,'l8-payment')+'</fieldset><p class="note">在本堂示意中，原有星河股東擁有 15,000 股、股權獨立價值 1,500 萬；發股以每股 1,000 元的參考價格計算。交易未完成時，任何支付形式都不會使股票或現金真的移轉。</p>'+actions(n,!!state.payment,'決定風險處理 →')+'</div>';
     bind('l8-payment','payment');
   }else if(n===4){
     root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">交割前｜最後的經營與契約準備</p><h3>第五回合｜如果技術、人員與顧客流失，誰承擔損失？</h3><p>除了契約上的價款分配，買方還能真正投入資源降低部分風險。本題有一種<strong>實際留任與顧客維持方案</strong>，不是單靠合約條款把經濟損失變不見。</p><fieldset class="deep-fieldset"><legend>最後的選擇</legend>'+choices([['retain','支付 12 萬，實施留任與重要客戶維持方案','充分查核下預期減少損失 28 萬；基本查核下效果較不明確，估計 12 萬'],['none','不增加管理方案','省下當前費用，但維持原先預估風險'],['stop','取消本次交易','即使賣方願意賣，也可以不成交；但查核費不會自動退回']],state.risk,'l8-riskplan')+'</fieldset><p class="note">本模型假設必要核准及交割程序可依法完成時才會成交；管理方案不代表政府核准可用錢買到。特定交易的終止費取決於合約，本題不設終止費。</p>'+actions(n,!!state.risk,'揭曉買賣雙方的價值')+'</div>';
     bind('l8-riskplan','risk');
   }else{
     const isCandidate=state.offer!=='walk'&&Number(state.offer)>=ev.min&&state.risk!=='stop',
       P=isCandidate?Number(state.offer):0,netSy=sy();
     const cashFrac=state.payment==='cash'?1:state.payment==='mixed'?.5:0,cash=P*cashFrac,stock=P-cash,issued=stock*10,
       buyerShares=15000,totalShares=buyerShares+issued,postValue=1500+500+netSy-cash;
     const sellerFraction=totalShares?issued/totalShares:0,stockSellerValue=postValue*sellerFraction,oldBuyerValue=postValue*(1-sellerFraction);
     const sellerTotal=isCandidate?cash+stockSellerValue:0;
     const buyerGain=isCandidate?oldBuyerValue-1500:-fee();
     const sellerGain=isCandidate?sellerTotal-500:0;
     const totalGain=isCandidate?buyerGain+sellerGain:-fee();
     const referencePremium=isCandidate?(P-500)/500*100:0;
     const title=isCandidate?'依本堂假設完成股權交割':state.offer==='walk'?'你決定退出本次談判':state.risk==='stop'?'你在最後階段取消交易':'賣方沒有接受這一報價';
     const sellingShares=isCandidate?issued:0;
     const financial= isCandidate
       ?'合併前買方股權價值 1,500＋晨光獨立股權價值 500＋預期淨增量 '+fmt(netSy)+'－現金支付 '+fmt(cash)+'＝合併後留在買方股權中的示意經濟價值 '+fmt(postValue)+'。'
       :'未完成本次股權收購。買方不支付股權收購價、不發行新股，已付查核費 '+fee()+' 萬需保留為交易前費用。';
     const cashExpl=isCandidate?'晨光出售股東收現金 '+fmt(cash)+' 萬，並持有星河新股 '+fmt(issued)+' 股；以合併後示意股權價值計算，這些新股的估計價值約 '+fmt(stockSellerValue)+' 萬。原星河股東持有合併後 '+pct(1-sellerFraction)+' 的普通股、晨光原股東共同持有 '+pct(sellerFraction)+'。':'沒有股份變更，星河原股東依然持有原有 15,000 股；晨光原股東也沒有在本次模擬收到出售款項。';
     const explanation=isCandidate
       ?'晨光股東的總價值＝現金 '+fmt(cash)+'＋新股估計價值 '+fmt(stockSellerValue)+'＝'+fmt(sellerTotal)+'；相較原獨立價值 500，預期增量 '+signed(sellerGain)+'。星河舊股東原持股價值 1,500，在本模型下新股發行與支付後的示意價值為 '+fmt(oldBuyerValue)+'，其增量為 '+signed(buyerGain)+'。兩方增量相加＝'+fmt(netSy)+'，對價本身只是分配，不憑空創造綜效。'
       :'買方的示意損失僅為已支付查核費 '+fee()+' 萬，賣方沒有收到對價；沒有取得晨光控制權，也沒有支付交割後整合費。';
     root.innerHTML=progress(n)+'<div class="deep-scene"><h3>'+title+'</h3><div class="deep-stats"><div><small>談判最後報價</small><b class="small-b">'+(isCandidate?fmt(P)+' 萬':state.offer==='walk'?'退出':fmt(state.offer)+' 萬（未成交）')+'</b></div><div><small>晨光出售股東收到的即期現金</small><b>'+fmt(cash)+' 萬</b></div><div><small>晨光原股東收到的新股</small><b>'+fmt(sellingShares)+' 股</b></div><div><small>星河舊股東預期增量價值</small><b>'+signed(buyerGain)+' 萬</b></div></div><h3>第一層｜原本的出價為何可能改變？</h3><p>'+ev.name+'：'+ev.desc+' '+ev.mechanism+'</p><p>你選擇的查核深度為 '+(state.dd==='deep'?'深入查核':'基本查核')+'，費用 '+fee()+' 萬。'+(state.dd==='deep'?'已取得較完整資料，但仍有預期風險。':'未查清部分風險，因此另預留 20 萬的預期不確定性成本。')+'</p><h3>第二層｜這筆交易有沒有創造淨價值？</h3><div class="deep-feedback review"><strong>合併前的增量價值（未分配的餅）</strong><p>150（預期綜效）－35（整合成本）－20（基礎風險）－'+ev.risk+'（新增情境成本）－'+fee()+'（查核）－'+hidden()+'（未解不確定性）＋'+riskAction()+'（管理措施預期效果）－'+riskActionCost()+'（措施成本）＝<strong>'+fmt(netSy)+' 萬元</strong>。</p></div><p>'+financial+'</p><h3>第三層｜現金與股份分別落到誰手上？</h3><p>'+cashExpl+'</p><div class="deep-conclusion"><strong>價值分配：原星河股東 '+signed(buyerGain)+' 萬；原晨光股東 '+signed(sellerGain)+' 萬</strong><p>'+explanation+'</p><p><strong>雙方增量合計：'+signed(totalGain)+' 萬</strong>。'+(isCandidate?'此結果反映預期經濟增量與股票股權比例，並非未來保證市場價格。':'未成交時的增量合計僅反映已付查核費。')+'</p></div><h3>第四層｜和研究機制連起來</h3><p>Fishman（1989）討論現金與股票如何受到競爭者和資訊不對稱影響；Travlos（1987）討論支付方式所傳遞的市場訊號。若一筆境外交易還有政治阻力，Bertrand 等人（2016）提供另一個思考初始溢價的角度。這些研究都不能替本題的虛構數字提供真實因果驗證。</p><p class="note">股權數字：星河原有 15,000 股、每股簽約參考價 1,000 元；若支付股票，新增股數＝（股票對價萬元）×10。計算用合併後股權示意價值，而非對交割後市價的保證；未成交則不發股、不付款。本題假設股權價值只有普通股，無額外計息負債、稅務與反稀釋條款。</p><div class="deep-actions"><button type="button" class="btn" id="l8-revise">← 返回第五回合</button><button type="button" class="btn primary" id="l8-restart">重新談判不同的出價</button></div></div>';
     click('l8-revise',()=>{state.stage=4;draw()});
     click('l8-restart',()=>{state={stage:0,first:null,motive:null,dd:null,offer:null,payment:null,risk:null};draw()});
     return;
   }
   click('l8-back',()=>{if(state.stage>0){state.stage--;draw()}});
   click('l8-next',()=>{
    const valid=state.stage===0?state.first&&state.motive:state.stage===1?state.dd:state.stage===2?state.offer:state.stage===3?state.payment:state.risk;
    if(valid){state.stage++;draw()}
   });
 }
 function actions(n,ready,label){
  return '<div class="deep-actions"><button type="button" class="btn" id="l8-back" '+(n===0?'disabled':'')+'>← 上一回合</button><button type="button" class="btn primary" id="l8-next" '+(ready?'':'disabled')+'>'+label+'</button></div>';
 }
 function bind(name,key){
  root.querySelectorAll('input[name="'+name+'"]').forEach(inp=>inp.addEventListener('change',()=>{
   const old=state[key];state[key]=inp.value;
   if(old!==inp.value){
    if(key==='first'){state.dd=null;state.offer=null;state.payment=null;state.risk=null;}
    if(key==='dd'){state.offer=null;state.payment=null;state.risk=null;}
    if(key==='offer'){state.payment=null;state.risk=null;}
    if(key==='payment')state.risk=null;
   }
   draw();
  }));
 }
 function click(id,callback){root.querySelector('#'+id)?.addEventListener('click',callback);}
 draw();
}
L.init=function(){bargain();pay();earnout();scenario();};
})();