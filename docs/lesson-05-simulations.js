(function(){
 const lesson=window.MA_LESSON5=window.MA_LESSON5||{};
 const $=id=>document.getElementById(id);
 const fmt=n=>(Math.round(n*10)/10).toLocaleString('zh-TW',{maximumFractionDigits:1});
 function quickClassifier(){
   const root=$('l5-classifier');if(!root)return;
   const cases={
    h:['水平併購','主要競爭者的經營活動合在同一控制者之下，可能共用成本，也可能減弱競爭。'],
    v:['垂直併購','取得供應鏈上游事業。即使能控制豆源，也需要比較收購和長約合作。'],
    r:['相關多角化','不同產品可共用顧客、配送、設備或品牌，但要檢查真的共享了什麼。'],
    u:['非相關多角化','業務差距較大；不代表絕對不好，但總公司需要能管理不同能力與市場。']
   };
   function draw(){
    const k=$('l5-relation').value,foreign=$('l5-country').value==='foreign',supported=$('l5-support').value==='yes';
    const [label,description]=cases[k];
    $('l5-classifier-result').innerHTML='<strong>這筆交易可以同時描述為：'+label+' ＋ '+(foreign?'跨境收購':'境內收購')+' ＋ '+(supported?'董事會支持的友善交易':'目標董事會不支持的收購企圖')+'</strong><p>'+description+'</p><p><b>重要區別：</b>'+(foreign?'跨境會增加法域、文化、稅務與匯率等需要查核的問題；不改變這筆業務原本是水平或垂直的關係。':'境內只是本例的地理條件，不保證交易沒有競爭或契約風險。')+' '+(supported?'董事會支持，也不保證價格公平或整合必定成功。':'若買方直接向公開公司的股東提出收購，仍須遵守適用的公開收購、股東保障與競爭規範，不能把董事會反對等同違法。')+'</p>';
   }
   ['l5-relation','l5-country','l5-support'].forEach(id=>$(id)?.addEventListener('change',draw));draw();
 }
 function boundary(){
   const root=$('l5-boundary');if(!root)return;
   const variables=['l5-specificity','l5-coordination','l5-burden'];
   function draw(){
     const s=Number($('l5-specificity').value),c=Number($('l5-coordination').value),b=Number($('l5-burden').value);
     $('l5-specificity-out').textContent=s+' / 100';
     $('l5-coordination-out').textContent=c+' / 100';
     $('l5-burden-out').textContent=b+' / 100';
     const ally=90-.35*s-.25*c,acquire=75+.2*s+.15*c-.45*b,best=Math.max(ally,acquire);
     $('l5-boundary-bars').innerHTML=[['簽約合作',ally],['收購烘豆廠',acquire]].map(v=>'<div class="model-option '+(v[1]===best?'winner':'')+'"><strong>'+v[0]+'</strong><span>'+fmt(v[1])+' 萬</span><div class="model-meter"><span style="width:'+Math.max(0,Math.min(100,v[1]/110*100))+'%"></span></div></div>').join('');
     $('l5-boundary-result').innerHTML='<strong>在這組教學假設下，較高的示意淨值來自：'+(acquire>ally?'收購烘豆廠':ally>acquire?'維持簽約合作':'兩種安排相近')+'</strong><p>契約難以保障的專屬技術和反覆協調需求提高時，內部組織可能更有吸引力；但公司自行管理工廠的負擔越高，收購也可能不划算。這是用數字演示 Teece（1980）的企業邊界直覺，而不是該論文的估計係數。</p>';
   }
   variables.forEach(id=>$(id)?.addEventListener('input',draw));draw();
 }
 const targets={
  h:{name:'水平｜隔壁日光咖啡連鎖',caption:'和晨光販售相近產品，彼此可能爭取同一批外帶顧客。',primary:'cost',synergy:240,premium:70,integration:35,risk:28,shock:55,remedy:40,problem:'主管機關提出競爭疑慮，並要求說明合併是否減少同商圈競爭。',explanation:'原本是競爭者，可能共享採購和配送；但兩家店合在一起，也可能讓顧客少一個選擇。',action:'收購時可評估適當的競爭補救或調整，但不能假定主管機關必然批准。',mechanism:'水平整合的成本好處必須與市場競爭、顧客流失和監管條件一起比較。',cross:'境內水平'},
  v:{name:'垂直｜專用配方的烘豆供應商',caption:'每天供應晨光的豆子，技術和烘焙設備對晨光新品非常重要。',primary:'coordination',synergy:235,premium:75,integration:40,risk:45,shock:65,remedy:60,problem:'烘豆設備非常專用，原來的核心技師可能在換股東後離開；另外還有一份有終止權的長約。',explanation:'熟悉的供應商不代表不用查核；高資產專屬性可能讓內部管理較有效，但人才和契約的移轉仍不自動成立。',action:'可投入人才留任及權利確認，但不能只靠買設備就保證技術能被保留。',mechanism:'Teece（1980）：專有知識和難以分割的共同資產，會改變公司應否擴張邊界的經濟考量。',cross:'境內垂直'},
  r:{name:'相關多角化｜甜點品牌',caption:'顧客可能在買咖啡時加購甜點，雙方也可共享會員與外送。',primary:'scope',synergy:210,premium:65,integration:35,risk:42,shock:45,remedy:35,problem:'甜點師傅擔心被收購後產品全部標準化，幾位核心設計者有離職打算。',explanation:'共用通路和客群可能是真正的範疇經濟，但創新人才若離開，原本預估的綜效可能落空。',action:'先設計適當的品牌及人才保留安排，再決定整合程度。',mechanism:'Ahuja & Novelli（2017）提醒我們要追問具體的資源分享與組織機制，而非只看多角化的總體名稱。',cross:'境內相關多角化'},
  u:{name:'非相關多角化｜停車場管理公司',caption:'跨入較不相同的服務業務，看起來能讓營收來源更分散。',primary:'portfolio',synergy:115,premium:75,integration:53,risk:40,shock:70,remedy:30,problem:'總公司缺少停車場定價與法規專長，原有客群也未必和咖啡門市重疊。',explanation:'業務分散不等於能自然創造額外現金流；總公司可能新增控制與專業管理成本。',action:'審查是否具備適合的管理能力；沒有明確共享資源時，保留不交易是合理選項。',mechanism:'Campa & Kedia（2002）說明多角化折價存在自我選擇問題；不能只看平均估值就判斷因果。',cross:'境內非相關多角化'},
  x:{name:'水平＋跨境｜日本咖啡連鎖',caption:'海外也販售咖啡，有既有的顧客、門市與特色品牌。',primary:'market',synergy:270,premium:100,integration:60,risk:40,shock:75,remedy:80,problem:'海外租約與當地許可的安排不同，且日圓匯率變化使未來現金流更不確定。',explanation:'咖啡連鎖的業務關係仍是水平，但交易跨越不同國家，所以還有跨境法規、匯率與文化適配問題。',action:'可提高當地法律、租約和營運查核，必要時調整交易安排，不保證所有必要同意都能取得。',mechanism:'同一筆交易可以同時具有產業類型和跨境維度；不應拿單一「跨國」標籤替代市場分析。',cross:'水平且跨境'}
 };
 const reasonOptions=[['cost','整合採購、系統或重複成本'],['coordination','減少供應鏈協調與契約摩擦'],['scope','共用顧客、品牌與通路'],['portfolio','多事業組合與管理能力'],['market','取得外國市場顧客與通路']];
 const option=(options,selected,name)=>options.map(a=>'<label class="deep-choice '+(selected===a[0]?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+a[0]+'" '+(a[0]===selected?'checked':'')+'><span><strong>'+a[1]+'</strong>'+(a[2]?'<small>'+a[2]+'</small>':'')+'</span></label>').join('');
 function simulate(){
  const root=$('l5-journey');if(!root)return;
  let st={step:0,target:null,reason:null,verify:null,mode:null,response:null};
  const progress=n=>'<div class="deep-progress"><span>'+(n===4?'策略結局':'STEP '+(n+1)+' / 4')+'</span><div class="deep-progress-track"><i style="width:'+((n+1)/5*100)+'%"></i></div><span>晨光咖啡的擴張選擇</span></div>';
  const click=(id,fn)=>root.querySelector('#'+id)?.addEventListener('click',fn);
  const radios=(name,key)=>root.querySelectorAll('input[name="'+name+'"]').forEach(el=>el.addEventListener('change',()=>{st[key]=el.value;if(key==='target')st.reason=null;render()}));
  function render(){
   const n=st.step;
   if(n===0){
    root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第一週 · 尋找下一個成長方向</p><h3>第一回合｜你先對哪種企業感興趣？</h3><p>你熟悉晨光咖啡的日常營運。現在有五個不同的拓展方向，每一種都可能有好處，但你還沒看到重要風險。先選擇一種，再猜猜它最想解決什麼問題。</p><fieldset class="deep-fieldset"><legend>你想先評估哪個標的？</legend>'+option(Object.entries(targets).map(([key,t])=>[key,t.name,t.caption]),st.target,'l5-target')+'</fieldset><fieldset class="deep-fieldset"><legend>你認為這個選擇最主要的策略理由是什麼？</legend>'+option(reasonOptions,st.reason,'l5-reason')+'</fieldset><p class="note">不會在這裡立刻公布答對答錯。下一回合將揭露你所選標的才會遇到的特定新資訊。</p><div class="deep-actions"><button type="button" class="btn" disabled>← 上一回合</button><button type="button" class="btn primary" id="l5-next" '+(st.target&&st.reason?'':'disabled')+'>前往盡調 →</button></div></div>';
    radios('l5-target','target');radios('l5-reason','reason');
   }else if(n===1){
    const t=targets[st.target];
    root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第二週 · 新資訊出現</p><h3>第二回合｜你遇到第一個真正的障礙</h3><p>你原本想評估：<strong>'+t.name+'</strong>。'+t.explanation+'</p><div class="deep-feedback review"><strong>查核線索</strong><p>'+t.problem+'</p></div><p>現在你需要決定要投入多少成本核對資料。<strong>花更多錢做調查不代表風險自動消失</strong>，但可能讓之後的補救更有方向。</p><fieldset class="deep-fieldset"><legend>你打算怎麼查核？</legend>'+option([['deep','深入查核｜18 萬元','涵蓋契約、顧客、核心人員與當地法規；有機會辨認更有效的補救方法'],['basic','基本查核｜5 萬元','花費較少，但處理後續風險時可用的資訊更有限']],st.verify,'l5-verify')+'</fieldset><div class="deep-actions"><button type="button" class="btn" id="l5-back">← 回到標的選擇</button><button type="button" class="btn primary" id="l5-next" '+(st.verify?'':'disabled')+'>決定交易方式 →</button></div></div>';
    radios('l5-verify','verify');
   }else if(n===2){
    const t=targets[st.target],deep=st.verify==='deep',dd=deep?18:5;
    root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第三週 · 企業邊界的選擇</p><h3>第三回合｜你一定要把對方買下來嗎？</h3><p>目前標的為：<strong>'+t.name+'</strong>。你的資訊查核費用為 '+dd+' 萬元。現在要決定是否必須取得對方的所有權，才能得到想要的資源。</p><fieldset class="deep-fieldset"><legend>要怎麼取得這項能力？</legend>'+option([['acquire','收購並由自己控制營運','需要支付收購溢價及整合成本，也取得較直接的控制權'],['ally','簽約合作，不取得對方股份','可以分享部分成果，但需要契約協調，也無法掌握所有決策'],['stop','暫不擴張／不進行交易','保留資金與選擇；已花的查核費用無法回收']],st.mode,'l5-mode')+'</fieldset><p><strong>這就是企業邊界（Firm Boundary）的問題：</strong>你不是只有「買哪間公司」一個選項，還可以問同樣的能力能否透過契約、共同投資、供應關係或不進行交易來取得。下面的比較會扣除各方案不同的預期成本。</p><div class="deep-actions"><button type="button" class="btn" id="l5-back">← 返回查核資訊</button><button type="button" class="btn primary" id="l5-next" '+(st.mode?'':'disabled')+'>查看最後的環境變化 →</button></div></div>';
    radios('l5-mode','mode');
   }else if(n===3){
    const t=targets[st.target],deep=st.verify==='deep';
    const remedy=t.remedy*(deep?1:.45);
    root.innerHTML=progress(n)+'<div class="deep-scene"><p class="deep-scene-date">第四週 · 最後一次風險更新</p><h3>第四回合｜你願意多花錢降低風險嗎？</h3><p>你選擇的是：<strong>'+t.name+'</strong>，方式是：<strong>'+(st.mode==='acquire'?'取得所有權':st.mode==='ally'?'與對方合作':'暫時不擴張')+'</strong>。</p><div class="deep-feedback review"><strong>此標的主要的新風險</strong><p>'+t.problem+'</p><p>'+t.action+'</p></div><p>'+(st.mode==='stop'?'雖然你已決定不交易，現在仍可思考是否重啟策略：本模擬的結果會以不交易為基準，不支付收購價或合作費。':'假設你可以選擇不追加費用，或付費建立必要的調整與補救安排。若已深入查核，所提出的方案可能更有針對性；但<strong>主管機關的核准、員工留任和客戶選擇都不是買方單方面能保證的</strong>。')+'</p><fieldset class="deep-fieldset"><legend>最後的決定</legend>'+option([['remedy','投入補救｜依方案支付額外成本','例如人才留任、合約保障或符合競爭要求的適當調整；無法保證把風險降到零'],['accept','維持目前安排，不追加補救費','節省當下成本，但仍承擔已知的不確定性'],['withdraw','不交易／停止合作','不承擔後續的收購、整合或合作成本；已支出的查核費仍可能無法回收']],st.response,'l5-response')+'</fieldset><p class="note">在本模型中，選擇收購並繼續時，假定一切必要條件最後都合法滿足；這不代表現實主管機關一定會批准。</p><div class="deep-actions"><button type="button" class="btn" id="l5-back">← 回去改選取得方式</button><button type="button" class="btn primary" id="l5-next" '+(st.response?'':'disabled')+'>揭曉完整策略結果</button></div></div>';
    radios('l5-response','response');
   }else{
    const t=targets[st.target],deep=st.verify==='deep',dd=deep?18:5,proceed=st.mode!=='stop'&&st.response!=='withdraw',
      acq=st.mode==='acquire',remedy=st.response==='remedy',first=t.synergy,eff=(deep?1:.45),
      effect=proceed&&remedy?t.remedy*eff*(acq?1:.4):0,mitigationCost=proceed&&remedy?(acq?16:12):0,
      base=proceed?(acq?first-t.premium-t.integration-t.risk-t.shock:first*.42-24-t.risk*.4-t.shock*.35):0,
      net=proceed?base+effect-mitigationCost-dd:-dd;
    const right=st.reason===t.primary;
    const alternativeAcq=t.synergy-t.premium-t.integration-t.risk-t.shock;
    const alternativeAlliance=t.synergy*.42-24-t.risk*.4-t.shock*.35;
    const optLabel=st.mode==='acquire'?'收購並控制目標事業':st.mode==='ally'?'以契約合作，不取得股份':'沒有新增交易';
    const formula=proceed?(acq?'綜效 '+t.synergy+' − 收購溢價 '+t.premium+' − 整合成本 '+t.integration+' − 原估風險 '+t.risk+' − 新揭露風險 '+t.shock+' ＋ 補救效果 '+fmt(effect)+' − 補救成本 '+mitigationCost+' − 查核費 '+dd:'合作可分享綜效 '+fmt(t.synergy*.42)+' − 合作設置費 24 − 部分風險 '+fmt(t.risk*.4+t.shock*.35)+' ＋ 補救效果 '+fmt(effect)+' − 補救成本 '+mitigationCost+' − 查核費 '+dd):'不擴張，仍支出已付的查核費 '+dd+' 萬元';
    root.innerHTML='<div class="deep-progress"><span>策略結果</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>四回合完成</span></div><div class="deep-scene"><h3>'+(proceed?'你的方案已完成本次教學假設的策略決策。':'你選擇不再擴張，這也可能是合理的決定。')+'</h3><div class="deep-stats"><div><small>標的及分類</small><b class="small-b">'+t.name+'</b></div><div><small>最後策略</small><b class="small-b">'+(proceed?optLabel:'沒有新增交易')+'</b></div><div><small>預期增量淨值</small><b>'+(net>0?'+':'')+fmt(net)+' 萬</b></div><div><small>額外查核費</small><b>'+dd+' 萬</b></div></div><div class="deep-feedback '+(right?'good':'review')+'"><strong>'+(right?'✓ 你原本的策略理由貼近這個標的':'→ 原本的理由不一定是這個標的最直接的機制')+'</strong><p>'+t.explanation+'</p></div><h3>第一層｜你改變了企業的哪一道邊界？</h3><p>這是：<strong>'+t.cross+'</strong>。'+(proceed?(acq?'你選擇取得所有權，因此企業內部活動擴張，還要負擔收購溢價與整合成本。':'你選擇用契約合作，因此沒有取得對方股份，協作仍需處理利益分配和控制權問題。'):'你保留原本公司的業務與所有權範圍，沒有因這次計畫而增加新事業。')+'</p><h3>第二層｜為什麼不是「所有收購都最好」？</h3><p>若暫不考慮查核與額外補救，這個標的的<strong>收購基準淨值為 '+fmt(alternativeAcq)+' 萬</strong>，而<strong>合作基準淨值為 '+fmt(alternativeAlliance)+' 萬</strong>；不交易的未來增量投資價值則先記作 0。不同方案在「多取得多少好處」與「需要付多少成本」之間有不同取捨。</p><h3>第三層｜你做了什麼補救？</h3><p>'+(remedy&&proceed?'你支付 '+mitigationCost+' 萬元補救成本，假設能讓買方預期承擔的風險下降 '+fmt(effect)+' 萬元。這種效果也取決於你是否做過深入查核。':'你沒有採用額外付費補救措施，因此不能直接把原本風險當成已經消失。')+'</p><div class="deep-conclusion"><strong>你這條路線的預期淨值：'+(net>0?'+':'')+fmt(net)+' 萬元</strong><p>'+formula+' = '+fmt(net)+' 萬</p><p>'+(net>0?'在本組假設下，這條路線預期增加經濟價值；但不代表真實交易必然成功。':net===0?'預估利益恰好抵銷成本；現實仍需考慮不確定性與替代方案。':'在本組假設下，預期成本大於增量收益；有時不交易更合理。')+'</p></div><h3>第四層｜從故事回到論文</h3><p>'+t.mechanism+'</p><p class="note">所有數字、綜效分配率（合作 42%）、風險比例及補救成效都是用來解釋機制的教學假設，不是學術論文的統計估計。基準淨值不含已支付的查核費；退出時查核費已成沉沒成本。不同交易還需另外查核法律、監管與市場競爭。</p><div class="deep-actions"><button type="button" class="btn" id="l5-revise">← 回到第四回合修改</button><button type="button" class="btn primary" id="l5-restart">重新挑選不同事業</button></div></div>';
    click('l5-revise',()=>{st.step=3;render()});
    click('l5-restart',()=>{st={step:0,target:null,reason:null,verify:null,mode:null,response:null};render()});
    return;
   }
   click('l5-next',()=>{const ready=n===0?st.target&&st.reason:n===1?st.verify:n===2?st.mode:st.response;if(ready){st.step++;render()}});
   click('l5-back',()=>{if(st.step>0){st.step--;render()}});
  }
  render();
 }
 lesson.init=function(){quickClassifier();boundary();simulate();};
})();