(function(){
 const lessons=window.MA_L1_DEEP=window.MA_L1_DEEP||{};
 lessons.blocks=[{"after":4,"html":"<section class=\"section deep-section\"><h2>咖啡店的一年｜你來做三輪決策</h2><div class=\"card\">\n<p>現在，我們不急著做對錯題。假設你和兩位朋友真的成立了晨光咖啡。這一年裡，將陸續遇到三件小事：<strong>設備該買還是租？投資人進來時，錢要交給誰？老闆不在店裡時，經理人應該用什麼標準評估？</strong></p>\n<p>每一輪先做選擇，接著猜猜會發生什麼。<strong>前面兩輪不會立刻公布正確答案</strong>；第三輪做完，才會把你一路選擇產生的現金流、股權與經營誘因一起整理出來。中途可以返回修改選擇，看最後結果怎麼改變。</p>\n<div class=\"deep-game\" id=\"l1-journey\" aria-label=\"晨光咖啡三回合決策模擬\"><p>互動故事載入中……</p></div>\n<p class=\"note\">所有金額與情境均為教學假設；先不計折舊、交易稅負、資金成本及其他營業收入。目的是理解法人、股份和經營決策的關係，不是完整會計報表。</p>\n</div></section>"},{"after":6,"html":"<section class=\"section deep-section\"><h2>真的有人買公司了｜三步拆解 Microsoft 收購新聞</h2><div class=\"card\">\n<p>新聞標題可能只有一句：「微軟完成收購動視暴雪」。但你已經學會，<strong>買到一家公司，不一定等於把它的辦公室、遊戲或現金直接搬到微軟帳上。</strong>接下來用三個連續問題，試著看懂 SEC 原始文件描述的交易結果。</p>\n<div class=\"deep-game\" id=\"l1-case-steps\" aria-label=\"Microsoft 收購案三步推理\"><p>案例練習載入中……</p></div>\n<p class=\"note\">案例取材自 Microsoft 2023 年 10 月 13 日向 SEC 提交的 8-K。依交易條件，收購子公司併入 Activision Blizzard，Activision Blizzard 存續成為全資子公司；符合規定的普通股權利轉換為每股 95 美元現金，法定例外另有安排。<a href=\"https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm\" target=\"_blank\" rel=\"noopener noreferrer\">查看 SEC 原始申報文件 ↗</a></p>\n</div></section>"}];
 lessons.init=function(){
  const choose=(items,picked,name)=>items.map(it=>'<label class="deep-choice '+(picked===it[0]?'chosen':'')+'"><input type="radio" name="'+name+'" value="'+it[0]+'" '+(picked===it[0]?'checked':'')+'><span class="deep-choice-dot" aria-hidden="true"></span><span><strong>'+it[1]+'</strong><small>'+it[2]+'</small></span></label>').join('');
  function setHTML(node,html){node.innerHTML=html;}
  function startJourney(){
    const root=document.getElementById('l1-journey');if(!root)return;
    const state={step:0,equipment:null,equipmentGuess:null,funding:null,fundingGuess:null,bonus:null,bonusGuess:null};
    const sections=[
      {title:'第一輪｜開店那天，咖啡機該怎麼準備？',date:'第 1 週',intro:'公司成立時，股東合計投入 100 萬元，錢已經在「晨光咖啡公司」帳戶。店裡需要一台咖啡機，廠商提出兩種選擇。',main:'equipment',label:'你會怎麼做？',options:[['buy','公司買一台 15 萬元的咖啡機','公司付款後取得設備的所有權'],['rent','花 4 萬元租用一段期間的設備服務','租金當期支付並已使用，設備所有權仍在出租方']],guess:'equipmentGuess',guessLabel:'如果咖啡機是「買下來」的，它在法律上通常是誰的財產？',guessOptions:[['company','晨光咖啡公司'],['founder','我這位出資 50% 的股東'],['three','三個朋友各自擁有其中一部分']]},
      {title:'第二輪｜新投資人想拿 100 萬元進場',date:'第 6 個月',intro:'咖啡店逐漸有了顧客。一位新投資人願意以每股 4,000 元的協議價格，取得 250 股。他提出兩種方式：向你買舊股，或由公司發行新股。',main:'funding',label:'你希望採用哪一種方式？',options:[['old','把自己原有的 250 股賣給投資人','買方與你個人完成舊股交易'],['new','讓公司發行 250 股新股給投資人','新投資人將資金投入公司']],guess:'fundingGuess',guessLabel:'你選的這個方式，100 萬元交易款會直接進入誰的帳戶？',guessOptions:[['personal','你個人'],['company','晨光咖啡公司'],['all','三個原股東平均分配']]},
      {title:'第三輪｜店變忙了，你決定聘請 CEO',date:'第 9 個月',intro:'你的時間有限，於是聘請專業經理人管理晨光咖啡。兩種獎金制度都可以合法談妥，但可能帶來不同的行為誘因。',main:'bonus',label:'你會先採用哪一種獎金指標？',options:[['stores','依分店數量成長評估','開越多店，越可能提高個人獎金'],['profit','依經過約定調整的營運利潤評估','在其他條件不變下，重視利潤改善']],guess:'bonusGuess',guessLabel:'你選的獎金制度，最可能讓經理人優先注意什麼？',guessOptions:[['stores','增加分店數量'],['profit','改善營運利潤'],['none','完全不受獎金制度影響']]}
    ];
    const render=()=>{
      const step=state.step;
      if(step<3){
        const s=sections[step];
        const chosen=state[s.main],guess=state[s.guess];
        const progress='<div class="deep-progress"><span>STEP '+(step+1)+' / 3</span><div class="deep-progress-track"><i style="width:'+((step+1)/3*100)+'%"></i></div><span>'+s.date+'</span></div>';
        const conditional=step===1?'<div class="deep-context">上一輪你選擇：<b>'+(state.equipment==='buy'?'由公司買下咖啡機':'由公司租用設備服務')+'</b>。現在投資人只是在討論股份，並不是直接買咖啡機。</div>':step===2?'<div class="deep-context">前一輪選擇：<b>'+(state.funding==='old'?'你個人出售 250 股舊股':'公司發行 250 股新股')+'</b>。不論股東如何變動，經理人依然可以由公司聘任。</div>':'';
        setHTML(root,progress+'<div class="deep-scene"><p class="deep-scene-date">'+s.date+' · 晨光咖啡</p><h3>'+s.title+'</h3><p>'+s.intro+'</p>'+conditional+'<fieldset class="deep-fieldset"><legend>'+s.label+'</legend>'+choose(s.options,chosen,'journey-main')+'</fieldset><fieldset class="deep-fieldset"><legend>先猜一下：'+s.guessLabel+'</legend>'+choose(s.guessOptions.map(x=>[x[0],x[1],'']),guess,'journey-guess')+'</fieldset><div class="deep-actions"><button type="button" class="btn" id="journey-back" '+(step===0?'disabled':'')+'>← 前一輪</button><span class="deep-action-note">'+(chosen&&guess?'兩項選擇已完成；結果留到最後一起揭曉。':'請先完成兩個選擇')+'</span><button type="button" class="btn primary" id="journey-next" '+(!chosen||!guess?'disabled':'')+'>'+(step===2?'揭曉全年結果':'繼續下一輪 →')+'</button></div></div>');
        root.querySelectorAll('input[name="journey-main"]').forEach(input=>input.addEventListener('change',()=>{state[s.main]=input.value;render()}));
        root.querySelectorAll('input[name="journey-guess"]').forEach(input=>input.addEventListener('change',()=>{state[s.guess]=input.value;render()}));
        root.querySelector('#journey-next')?.addEventListener('click',()=>{if(state[s.main]&&state[s.guess]){state.step++;render()}});
        root.querySelector('#journey-back')?.addEventListener('click',()=>{if(state.step>0){state.step--;render()}});
        return;
      }
      const purchase=state.equipment==='buy';
      const issue=state.funding==='new';
      const cash=(purchase?85:96)+(issue?100:0);
      const equity=issue?40:25,inv=issue?20:25;
      const total=issue?1250:1000;
      const eqCorrect=state.equipmentGuess==='company';
      const fundCorrect=state.fundingGuess===(issue?'company':'personal');
      const bonusCorrect=state.bonusGuess===state.bonus;
      const score=[eqCorrect,fundCorrect,bonusCorrect].filter(Boolean).length;
      const feedback=(ok,label,answer)=>'<div class="deep-feedback '+(ok?'good':'review')+'"><strong>'+(ok?'✓':'→')+' '+label+'</strong><p>'+answer+'</p></div>';
      const dividend=issue?'公司實際增加 100 萬元資金。你持有原本的 500 股，但總股份增加為 1,250 股，因此持股由 50% 降至 40%。':'投資人把 100 萬元付給你。你個人賣出 250 股，持股由 50% 降至 25%；公司本身不會因這筆舊股交易而多出 100 萬元。';
      setHTML(root,'<div class="deep-progress"><span>YEAR END / 結局</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>3 輪完成</span></div><div class="deep-scene"><p class="deep-scene-date">一年後 · 對照你自己的經營選擇</p><h3>恭喜你完成三輪決策。先看結果，不急著判斷誰比較會經營。</h3><div class="deep-stats"><div><small>公司示意現金</small><b>'+cash+' 萬</b></div><div><small>公司已發行股份</small><b>'+total.toLocaleString('en-US')+' 股</b></div><div><small>你個人的持股比例</small><b>'+equity+'%</b></div><div><small>新投資人持股比例</small><b>'+inv+'%</b></div></div><p class="note">現金僅計初始出資、第一輪的設備支出與第二輪的股款流向，不包含其他營業收支；你賣舊股收到的款項不計入公司現金。</p><h3>第一輪｜資產到底屬於誰？</h3><p>'+(purchase?'公司花 15 萬買下咖啡機；公司現金因此少 15 萬，但也取得一台設備作為公司資產。':'公司支付 4 萬設備租用服務費，現金少 4 萬，咖啡機仍屬出租方。')+'</p>'+feedback(eqCorrect,'你的所有權猜想','在本題「公司買下設備」的設定中，設備屬晨光咖啡公司，而不是由某位股東個人直接持有。')+'<h3>第二輪｜股份和金流</h3><p>'+dividend+'</p>'+feedback(fundCorrect,'交易款項猜想',issue?'新股發行時，投資人是把款項交給公司；因此公司獲得資金，但原股東持股比例被稀釋。':'舊股交易時，買方付給出售舊股的人。投資人與你交換的是股份，不是直接替公司增資。')+'<h3>第三輪｜經理人的動機</h3><p>'+(state.bonus==='stores'?'你選擇依分店數量成長評估 CEO。在其他條件不變下，經理人可能會更重視開新店，即使某些店的投資報酬不佳。':'你選擇依營運利潤評估 CEO。這可能更重視成本與獲利，但如果只看短期利潤，也可能忽略長期研發與人才投入。')+'</p>'+feedback(bonusCorrect,'你對誘因的預測','獎金指標通常會影響注意力與行為，但不保證決策結果；這正是代理問題要研究的制度設計。')+'<div class="deep-conclusion"><strong>你的三個推理有 '+score+' / 3 項符合題目設定。</strong><p>最重要的不是取得滿分，而是你已經區分了：<b>公司財產、股東個人收款、股份比例、經理人決策誘因</b>四個層次。</p></div><div class="deep-actions"><button type="button" class="btn" id="journey-revise">← 回到第三輪修改</button><button type="button" class="btn primary" id="journey-reset">重新選一條故事路線</button></div></div>');
      root.querySelector('#journey-reset')?.addEventListener('click',()=>{state.step=0;state.equipment=null;state.equipmentGuess=null;state.funding=null;state.fundingGuess=null;state.bonus=null;state.bonusGuess=null;render()});
      root.querySelector('#journey-revise')?.addEventListener('click',()=>{state.step=2;render()});
    };
    render();
  }
  function startCase(){
    const root=document.getElementById('l1-case-steps');if(!root)return;
    const qs=[
      {title:'第一層｜新聞說收購，你認為買到了什麼？',description:'Microsoft 想取得 Activision Blizzard 這家公司的控制權。以下何者最接近本次交易安排？',options:[['assets','只買了幾款遊戲的品牌與設備'],['control','透過合併安排取得目標公司的全部股權控制'],['staff','只把原公司的員工直接聘走']]},
      {title:'第二層｜被收購公司的原股東呢？',description:'收購完成時，符合條件的普通股轉成每股領取 95 美元現金的權利。這筆現金通常付給誰？',options:[['company','Activision Blizzard 公司帳戶'],['holders','符合交易條件的原普通股股東'],['workers','所有員工平均分配']]},
      {title:'第三層｜原來那家公司還在嗎？',description:'收購子公司與 Activision Blizzard 合併後，由後者存續。交易完成後哪個描述最接近？',options:[['disappear','Activision Blizzard 及其業務全部消失'],['subsidiary','Activision Blizzard 存續成為 Microsoft 全資子公司'],['independent','公司完全不受 Microsoft 控制']]}
    ];
    let phase=0;const answers=[null,null,null];
    const render=()=>{
      if(phase<3){const q=qs[phase];root.innerHTML='<div class="deep-progress"><span>讀文件 '+(phase+1)+' / 3</span><div class="deep-progress-track"><i style="width:'+((phase+1)/3*100)+'%"></i></div></div><div class="deep-scene"><h3>'+q.title+'</h3><p>'+q.description+'</p><div class="deep-fieldset" role="group" aria-label="選擇一個答案">'+choose(q.options,answers[phase],'case-q')+'</div><div class="deep-actions"><button class="btn" type="button" id="case-back" '+(phase===0?'disabled':'')+'>← 上一步</button><span class="deep-action-note">最後一層完成才一次揭曉。</span><button class="btn primary" type="button" id="case-next" '+(answers[phase]?'':'disabled')+'>'+(phase===2?'核對 SEC 文件':'繼續推理 →')+'</button></div></div>';
       root.querySelectorAll('input[name="case-q"]').forEach(i=>i.addEventListener('change',()=>{answers[phase]=i.value;render()}));
       root.querySelector('#case-next')?.addEventListener('click',()=>{if(answers[phase]){phase++;render()}});
       root.querySelector('#case-back')?.addEventListener('click',()=>{if(phase>0){phase--;render()}});
       return}
      const expected=['control','holders','subsidiary'];const correct=answers.filter((a,i)=>a===expected[i]).length;
      const explanation=['買方使用的是透過合併子公司完成的交易結構，不是只取得幾款遊戲的個別商標。','依條件，普通股權利轉為每股 95 美元現金。這項收購對價原則上是支付給合格的原股東；法定例外另行處理。','Activision Blizzard 存續為 Microsoft 全資子公司；品牌和業務未因公司股東改變就一定停止營運。'];
      root.innerHTML='<div class="deep-progress"><span>文件閱讀完成</span><div class="deep-progress-track"><i style="width:100%"></i></div><span>'+correct+' / 3</span></div><div class="deep-scene"><h3>把新聞拆開後，故事清楚多了。</h3>'+qs.map((q,i)=>feedback(answers[i]===expected[i],'第 '+(i+1)+' 層｜'+q.title,explanation[i])).join('')+'<div class="deep-conclusion"><strong>不必記住法律程序的所有細節。</strong><p>目前只要能分辨「股權與控制權由誰取得」、「交易價款付給誰」、「目標公司還存不存在」，就已建立閱讀下一堂併購課的基礎。</p></div><div class="deep-actions"><button type="button" class="btn" id="case-revise">← 回到第三層</button><button type="button" class="btn primary" id="case-restart">重新挑戰</button></div></div>';
      root.querySelector('#case-revise')?.addEventListener('click',()=>{phase=2;render()});
      root.querySelector('#case-restart')?.addEventListener('click',()=>{phase=0;answers.fill(null);render()});
    };
    const feedback=(ok,label,answer)=>'<div class="deep-feedback '+(ok?'good':'review')+'"><strong>'+(ok?'✓ ':'→ ')+label+'</strong><p>'+answer+'</p></div>';
    render();
  }
  startJourney();startCase();
 };
})();