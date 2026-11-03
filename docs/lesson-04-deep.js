(function(){
 const lesson=window.MA_L4_DEEP=window.MA_L4_DEEP||{};
 lesson.init=function(){
  const root=document.getElementById('l4-deal-journey');if(!root)return;
  const deals={
   A:{label:'A｜晨光咖啡（既有合作品牌）',intro:'雙方有不少共同顧客，此處另外假設星河和晨光已有幾年的通路合作，熟悉雙方店長與供貨方式。',synergy:300,baseRisk:80,newRisk:100,riskName:'共同顧客之外的老客戶可能流失',story:'原本你認為客戶重疊可以提高服務效率。新的訪談卻顯示：不曾同時跟兩家公司往來的老客戶，有人擔心被合併後失去原本的服務方式。',reason:'client',deepCover:60,lightCover:20,external:'主要租約的房東表示可以續約，但交割後必須完成調整，估計將增加 20 萬元成本。',externalCost:20,legal:'租約與顧客關係',academic:'這和 Rogan 與 Sorenson（2014）研究的直覺相近：因共同客戶而熟悉的標的容易被選中，卻不保證併購後保留其他客戶。研究對象是廣告業，本模擬不是該研究的估計值。'},
   B:{label:'B｜晴日咖啡（新興數位品牌）',intro:'擁有很受歡迎的手機訂購流程與年輕顧客，團隊相對陌生。',synergy:420,baseRisk:100,newRisk:110,riskName:'部分品牌與軟體權利的歸屬還未釐清',story:'系統看起來很好用，但部分程式碼由合作廠商開發。交易後究竟誰有完整使用權，還需要看授權與契約文件。',reason:'ip',deepCover:95,lightCover:30,external:'軟體權利人願意完成必要的權利確認與移轉文件，估計費用 30 萬元；如果不處理，就不能依原假設順利取得完整營運能力。',externalCost:30,legal:'著作權、軟體授權與第三方同意',academic:'Reuer 與 Ragozzino（2008）研究資訊不對稱如何與交易支付設計相關。本模擬的權利查核只是示例，不是該論文檢驗的具體個案。'},
   C:{label:'C｜北岸咖啡（同商圈競爭者）',intro:'已經有幾家熱門門市，買下後可能更快擴張，但市場重疊高。',synergy:380,baseRisk:90,newRisk:210,riskName:'競爭主管機關可能對整合後市場力量有所疑慮',story:'初步分析顯示兩家公司在幾個商圈都很強勢。主管機關可能要求調整交易條件，極端情況也可能無法核准。',reason:'competition',deepCover:0,lightCover:0,external:'本虛構情境假設主管機關僅在買方願意縮減部分營業重疊安排時可能同意交割，估計會減少 110 萬元預期綜效。真正的核准權仍屬主管機關。',externalCost:110,legal:'競爭審查與營業調整',academic:'監管限制不能單靠買賣雙方簽好契約就消失。Adobe／Figma 的真實案例提醒我們，已簽約的交易也可能因必要核准無明確可行路徑而終止。'}
  };
  const risks=[['client','不共同的老客戶可能流失'],['ip','智慧財產及授權可能不完整'],['competition','整合後的市場競爭可能受主管機關審查']];
  const choices=(items,current,name)=>items.map(opt=>'<label class="deep-choice '+(current===opt[0]?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+opt[0]+'" '+(current===opt[0]?'checked':'')+'><span><strong>'+opt[1]+'</strong>'+(opt[2]?'<small>'+opt[2]+'</small>':'')+'</span></label>').join('');
  const fmt=x=>x.toLocaleString('zh-TW');
  const progress=(i)=>'<div class="deep-progress"><span>'+(i===4?'交易結局':'STEP '+(i+1)+' / 4')+'</span><div class="deep-progress-track"><i style="width:'+((i+1)/5*100)+'%"></i></div><span>星河餐飲收購日記</span></div>';
  let state={step:0,target:null,guess:null,diligence:null,offer:null,clause:null,closing:null};
  const on=id=>root.querySelector('#'+id);
  const click=(id,cb)=>on(id)?.addEventListener('click',cb);
  const radio=(name,field)=>root.querySelectorAll('input[name="'+name+'"]').forEach(input=>input.addEventListener('change',()=>{state[field]=input.value;if(field==='target')state.guess=null;render()}));
  function render(){
   const i=state.step;
   if(i===0){
    root.innerHTML=progress(i)+'<div class="deep-scene"><p class="deep-scene-date">MONDAY · 開始找標的</p><h3>第一回合｜三家公司都願意談，先認識哪一家？</h3><p>前面你是晨光咖啡的原股東；為了理解買方怎麼決策，現在暫時換位扮演星河餐飲的收購決策者。你可以選擇晨光咖啡或另外兩間虛構品牌作為標的，打算以股權收購進入新的市場。假設三家公司獨立經營的股權價值都約 1,000 萬元，但它們的能力和風險完全不同。你只能先選一個做深入評估。</p><fieldset class="deep-fieldset"><legend>想優先認識哪一家？</legend>'+choices(Object.entries(deals).map(([key,d])=>[key,d.label,d.intro]),state.target,'l4-target')+'</fieldset><fieldset class="deep-fieldset"><legend>你認為最值得特別提防的是哪個問題？</legend>'+choices(risks,state.guess,'l4-guess')+'</fieldset><p class="note">不用急著答對。你還沒看到完整資料，後面會根據目標揭露不同問題。</p><div class="deep-actions"><button class="btn" disabled>← 前一回合</button><button class="btn primary" id="l4-next" '+(state.target&&state.guess?'':'disabled')+'>進入下一輪查核 →</button></div></div>';
    radio('l4-target','target');radio('l4-guess','guess');
   }else if(i===1){
    const d=deals[state.target];
    root.innerHTML=progress(i)+'<div class="deep-scene"><p class="deep-scene-date">WEEK 2 · NDA 後的資料室</p><h3>第二回合｜你發現了一件先前沒有人告訴你的事</h3><p>假設買賣雙方先簽了保密協議（NDA），才安排適當的資料室存取。你目前評估的是 <strong>'+d.label+'</strong>。</p><div class="deep-feedback review"><strong>新的調查線索：'+d.riskName+'</strong><p>'+d.story+'</p></div><p>資料揭露不代表盡職調查已完成。你可以花更多時間和費用向顧客、法律顧問和管理團隊查核，也可以只做基本的必要確認。兩種方式的資訊品質和現金成本不同。</p><fieldset class="deep-fieldset"><legend>你決定做到多深入？</legend>'+choices([['deep','深入盡職調查｜費用 25 萬元','核實更多契約與風險細節，有機會提出更有針對性的保障條款'],['basic','基本盡職調查｜費用 5 萬元','保留資金與時間，但若要釐清風險，證據可能較不完整']],state.diligence,'l4-diligence')+'</fieldset><p class="note">重要：盡調本身不會神奇地消除客戶流失、著作權爭議或監管障礙；它能改善資訊，讓你決定要不要買、如何報價和要求何種保護。</p><div class="deep-actions"><button class="btn" id="l4-back">← 回到標的選擇</button><button class="btn primary" id="l4-next" '+(state.diligence?'':'disabled')+'>開始談價與契約 →</button></div></div>';
    radio('l4-diligence','diligence');
   }else if(i===2){
    const d=deals[state.target];
    const cost=state.diligence==='deep'?25:5;
    root.innerHTML=progress(i)+'<div class="deep-scene"><p class="deep-scene-date">WEEK 4 · 價格與契約條款</p><h3>第三回合｜正式價格，不只是把數字寫上去</h3><p>賣方表示願意在至少 1,000 萬元的價格下繼續討論。假設你的初始經濟模型估計此標的具有 '+d.synergy+' 萬元可能綜效、基本風險成本 '+d.baseRisk+' 萬，以及查核後新增的示意風險 '+d.newRisk+' 萬。你已支付／承諾支付查核費 '+cost+' 萬元。</p><p>現在請同時決定<strong>收購價</strong>和<strong>風險保護條款</strong>。你可以要求適當的賠償保證、價款保留或交割條件，但條款有成本，也不能把所有商業或監管風險都轉嫁掉。</p><fieldset class="deep-fieldset"><legend>你願意提出多少報價？</legend>'+choices([['1000','1,000 萬','接近賣方最低要求，賣方可能不願多做讓步'],['1080','1,080 萬','支付一定溢價，但仍希望保留綜效'],['1160','1,160 萬','加大對賣方的吸引力，買方也承擔較高成本'],['1240','1,240 萬','高價爭取標的，未必與風險相稱']],state.offer,'l4-offer-choice')+'</fieldset><fieldset class="deep-fieldset"><legend>你會怎麼處理已知的風險？</legend>'+choices([['protect','要求適當條件、賠償條款與保留款｜設計成本 15 萬','若經查核有足夠證據，可能減少買方最終承受的一部分風險；監管風險不能靠合約排除'],['plain','只採用一般交易條款，不額外設計保障｜成本 0','較快推進，但已知商業風險仍由買方預期承擔']],state.clause,'l4-clause')+'</fieldset><p class="note">本模擬假設賣方接受不低於 1,000 萬的報價與上述條款，且於本回合完成簽署（Signing）。只是簽約了，還不代表已經交割（Closing）。</p><div class="deep-actions"><button class="btn" id="l4-back">← 回到資料查核</button><button class="btn primary" id="l4-next" '+(state.offer&&state.clause?'':'disabled')+'>簽約後，查看交割條件 →</button></div></div>';
    radio('l4-offer-choice','offer');radio('l4-clause','clause');
   }else if(i===3){
    const d=deals[state.target];
    root.innerHTML=progress(i)+'<div class="deep-scene"><p class="deep-scene-date">AFTER SIGNING · 等待必要條件</p><h3>第四回合｜雙方簽了約，還有最後一關</h3><p>你和賣方已簽署附有條件的交易協議，但尚未交割。這時發現一項必須在交割前處理的事項：</p><div class="deep-feedback review"><strong>第三方／主管機關的條件</strong><p>'+d.external+'</p></div><p><strong>接下來的二選一</strong>不是「你批准監管機關的決定」，而是決定你<strong>是否願意接受</strong>額外成本、經濟價值變化與契約風險。如果選擇繼續，本虛構案例另外假設必要第三方最終同意並完成交割；真實交易不保證如此。</p><fieldset class="deep-fieldset"><legend>你最後會怎麼做？</legend>'+choices([['proceed','接受交割條件並繼續完成交易','承擔額外成本或綜效損失；仍必須確實取得必要同意'],['exit','依未滿足交割條件終止本次交易','不取得任何股份；已支出的查核及條款設計費用仍可能無法取回']],state.closing,'l4-close-choice')+'</fieldset><p class="note">本模型假設符合合法終止條件，且沒有另約終止費。現實交易可能因解除權、違約、終止費或努力義務不同而有完全不同的結果，例如 Adobe／Figma 的終止費是依正式契約支付。</p><div class="deep-actions"><button class="btn" id="l4-back">← 返回條件談判</button><button class="btn primary" id="l4-next" '+(state.closing?'':'disabled')+'>揭曉完整交易結果</button></div></div>';
    radio('l4-close-choice','closing');
   }else{
    const d=deals[state.target],cost=state.diligence==='deep'?25:5,clauseCost=state.clause==='protect'?15:0,
    protection=state.clause==='protect'?(state.diligence==='deep'?d.deepCover:d.lightCover):0,
    offer=Number(state.offer),totalRisk=d.baseRisk+d.newRisk,executed=state.closing==='proceed';
    const buyerNet=executed?1000+d.synergy-totalRisk+protection-d.externalCost-cost-clauseCost-offer:-cost-clauseCost;
    const sellerCash=executed?offer:0,score=state.guess===d.reason;
    const explain=executed?'依本教學情境的額外假設，必要同意已取得，價金已支付，星河透過股權收購成為新股東。':'沒有完成交割，也沒有取得股份；已投入的查核與談判設計費用仍可能是沉沒成本。';
    const formula=executed?'1,000（目標獨立股權價值）＋ '+d.synergy+'（預期綜效） − '+totalRisk+'（原有與新揭露風險） ＋ '+protection+'（示意買方風險分擔） − '+d.externalCost+'（交割額外成本或綜效減少） − '+cost+'（盡調） − '+clauseCost+'（保障設計） − '+offer+'（價款）':'− '+cost+'（已支出查核） − '+clauseCost+'（已支出條款設計）；不計買方尚未支付的收購價款。';
    const warning=executed&&buyerNet<0?'依此假設，這是一筆買方預期淨值為負的交易。交易完成不等於交易值得做。':executed?'在此組假設下買方預期淨值非負，但不能保證日後整合真的產生相同績效。':'停止交易不等於完全沒損失；它可能避免更大的後續風險。';
    root.innerHTML='<div class="deep-progress"><span>交易結果</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>4 輪完成</span></div><div class="deep-scene"><h3>'+ (executed?'這筆交易在模擬中完成交割。':'你決定不完成這筆交易。') +'</h3><p>'+explain+'</p><div class="deep-stats"><div><small>你選擇的標的</small><b class="small-b">'+d.label+'</b></div><div><small>交易進度</small><b class="small-b">'+(executed?'已交割 Closing':'未交割 / 終止')+'</b></div><div><small>出售股東收到款項</small><b>'+fmt(sellerCash)+' 萬</b></div><div><small>買方示意淨價值</small><b>'+(buyerNet>0?'+':'')+fmt(buyerNet)+' 萬</b></div></div><div class="deep-feedback '+(score?'good':'review')+'"><strong>'+(score?'✓ 你的風險預測貼近本題的新資訊':'→ 你最初猜的風險不是這次最主要的問題')+'</strong><p>對 '+d.label+' 而言，本輪揭露的是：'+d.riskName+'。其他風險也可能存在，但要用不同資料查核。</p></div><h3>第一層｜資訊與標的選擇</h3><p>你最先選擇：'+d.label+'。'+d.academic+'</p><h3>第二層｜誰付錢，誰取得控制權？</h3><p>'+ (executed?'本情境假設為舊股收購，股款 '+fmt(offer)+' 萬元支付給出售股份的原股東，而不是直接當成被收購公司取得的增資。買方因此取得目標公司全部股份，目標法人仍存續。':'由於交易沒有交割，賣方沒有收到股票出售價款；雙方原有股權結構不因本次未完成的交易而改變。') +'</p><h3>第三層｜拆開成本，才知道為什麼划算或不划算</h3><div class="deep-conclusion"><strong>示意買方淨價值：'+(buyerNet>0?'+':'')+fmt(buyerNet)+' 萬元</strong><p>'+formula+'</p><p>'+warning+'</p></div><h3>第四層｜契約保護不等於市場風險消失</h3><p>'+(state.clause==='protect'?'你花了 '+clauseCost+' 萬設計保護條款。假設買方可承擔的預期風險因契約安排轉移 '+protection+' 萬，但它不會讓消費者一定留下、也不能讓監管機關必然批准。':'你沒有另外設計保護條款，原本估計的風險仍主要由買方承擔。')+'</p><p class="note">所有數值均為教學假設，並以同一時點的價值口徑示意；其中「風險分擔」表示買方預期承擔的損失變化，而非整體經濟損失自然消失。不能以本模型推斷真實交易的市場價值。</p><div class="deep-actions"><button class="btn" id="l4-revise">← 回到第四輪改選</button><button class="btn primary" id="l4-restart">重玩：換另一個收購標的</button></div></div>';
    click('l4-revise',()=>{state.step=3;render()});
    click('l4-restart',()=>{state={step:0,target:null,guess:null,diligence:null,offer:null,clause:null,closing:null};render()});
    return;
   }
   click('l4-next',()=>{const ready=i===0?state.target&&state.guess:i===1?state.diligence:i===2?state.offer&&state.clause:state.closing;if(ready){state.step++;render()}});
   click('l4-back',()=>{if(state.step>0){state.step--;render()}});
  }
  render();
 };
})();