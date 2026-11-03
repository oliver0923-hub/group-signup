(function(){
 window.MA_EXTRA=window.MA_EXTRA||{};
 window.MA_EXTRA[3]={blocks:[{"after":1,"html":"<section class=\"section bridge-section\"><h2>市場擴張沙盤｜自己開店、收購，還是合作？</h2><div class=\"card\"><p>晨光咖啡想在台中擴張。假設三個方案的淨經濟價值，已經以同一時點的現值衡量。在沒有特殊難度時，自建（Build）預期淨值 85 萬、收購（Buy）80 萬、合作（Ally）77 萬。但你若很急著搶進市場，自建可能錯過機會；若整合非常困難，收購成本就可能急遽上升。</p>\n<div class=\"controls\" id=\"strategy-widget\"><label for=\"strategy-urgency\">市場進入有多急迫？<output id=\"strategy-urgency-out\">60 / 100</output></label><input type=\"range\" min=\"0\" max=\"100\" step=\"10\" id=\"strategy-urgency\" value=\"60\">\n<label for=\"strategy-integration\">併購整合有多困難？<output id=\"strategy-integration-out\">20 / 100</output></label><input type=\"range\" min=\"0\" max=\"100\" step=\"10\" id=\"strategy-integration\" value=\"20\">\n<div class=\"model-values\" id=\"strategy-results\" aria-live=\"polite\"></div><div id=\"strategy-feedback\" class=\"model-result\"></div></div>\n<p><strong>思考方式：</strong>收購可以節省取得資源的時間，但可能需要支付溢價並整合組織；合作不用買下對方，但有協調成本；自建能自主發展，但要等待能力成熟。這些都是在比較不同的擴張策略，而不只是問「收購好不好」。</p>\n<p class=\"note\">全部是假設數字；教學模型的計算為 Build = 85 − 0.8 × 急迫程度；Buy = 80 − 0.6 × 整合難度；Ally = 77 − 0.4 × 急迫程度。它不是已驗證的產業公式。</p><div class=\"bridge-question\">試著把急迫程度調到 0、整合難度調到 100，哪種方法比較好？再把急迫程度調到 100、整合難度調到 0，會發生什麼變化？</div></div></section>"},{"after":5,"html":"<section class=\"section bridge-section\"><h2>猜猜真正的動機｜同樣買公司，背後故事可能完全不同</h2><div class=\"card\"><p>Trautwein（1990）整理多種併購動機。先不用背七種分類，選擇一則情境，試著找出<strong>哪個理論最能解釋它</strong>，接著看我們還需要哪些證據，才有資格說「真的是這個原因」。</p><div class=\"controls\" id=\"motive-widget\">\n<label for=\"motive-case\">模擬案例</label><select id=\"motive-case\"><option value=\"0\">A 收購供應商，主張可以共用配送中心、降低進貨成本</option><option value=\"1\">B 公司有大量現金、好投資機會不多，CEO 卻持續收購擴大規模</option><option value=\"2\">C 公司 CEO 認為自己能把目標經營得遠勝市場，因此付出很高溢價</option></select>\n<div class=\"choice-grid\"><button class=\"tab\" type=\"button\" data-motive=\"0\">效率／綜效</button><button class=\"tab\" type=\"button\" data-motive=\"1\">帝國擴張</button><button class=\"tab\" type=\"button\" data-motive=\"2\">過度自信</button></div><div class=\"model-result\" id=\"motive-feedback\" aria-live=\"polite\">先選擇一種最接近的解釋。</div></div>\n<p>管理者想把公司做大，可能符合 Jensen（1986）的自由現金流與代理問題；CEO 高估自己判斷能力，可能符合 Roll（1986）的 Hubris 假說；共用配送降低成本則是效率綜效。<strong>這些都只是候選機制，不是單靠故事就能證實的事實。</strong></p><p class=\"note\">原文：<a href=\"https://doi.org/10.1002/smj.4250110404\" target=\"_blank\" rel=\"noopener noreferrer\">Trautwein（1990）</a> · <a href=\"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=99580\" target=\"_blank\" rel=\"noopener noreferrer\">Jensen（1986）</a> · <a href=\"https://www.jstor.org/stable/2353017\" target=\"_blank\" rel=\"noopener noreferrer\">Roll（1986）</a></p></div></section>"},{"after":6,"html":"<section class=\"section bridge-section\"><h2>風險模擬｜預估有綜效，不等於能全部做到</h2><div class=\"card\"><p>假設一筆收購預估能創造 50 萬元綜效，還需 10 萬元整合成本。最開始收購溢價為 30 萬元。如果最後只達成 70% 的預估綜效，買方還會獲利嗎？</p><div class=\"controls\" id=\"synergy-risk-widget\">\n<label for=\"realization-slider\">綜效預估達成比例（示意）<output id=\"realization-out\">70%</output></label><input type=\"range\" id=\"realization-slider\" min=\"0\" max=\"100\" step=\"5\" value=\"70\">\n<label for=\"premium-slider\">收購溢價（高於目標獨立價值）<output id=\"premium-out\">30 萬</output></label><input type=\"range\" id=\"premium-slider\" min=\"0\" max=\"60\" step=\"5\" value=\"30\">\n<div class=\"numbers\"><div><label>預期實現的綜效</label><b id=\"realized-synergy\">35.0 萬</b></div><div><label>買方預期淨價值</label><b id=\"expected-net\">−5.0 萬</b></div></div><div id=\"synergy-risk-feedback\" class=\"model-result\" aria-live=\"polite\"></div></div>\n<div class=\"mechanism-flow\"><span>預測綜效</span><b>→</b><span>執行時只部分達成</span><b>→</b><span>扣除整合成本與溢價</span><b>→</b><span>決定買方淨價值</span></div>\n<p><strong>計算方式：</strong>買方預期淨值 = 50 × 達成比例 − 10 − 收購溢價。這是把風險直觀地轉成比例的教學模型，不是正式統計機率，也不代表真實收購的風險估計。Andrade、Mitchell &amp; Stafford（2001）提醒我們需區分併購的整體價值創造與價值在買賣雙方之間如何分配。<a href=\"https://doi.org/10.1257/jep.15.2.103\" target=\"_blank\" rel=\"noopener noreferrer\">原文摘要與全文 ↗</a></p></div></section>"},{"after":7,"html":"<section class=\"section bridge-section\"><h2>Disney × Pixar 模擬｜公司買到了，創造力買得到嗎？</h2><div class=\"card\"><p>Disney 在 2006 年完成收購 Pixar，並安排 Pixar 的關鍵高階人才參與動畫業務領導。這件事可以幫我們理解：法律上買到公司和品牌，不代表自動買到團隊之間良好的工作關係。<a href=\"https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/\" target=\"_blank\" rel=\"noopener noreferrer\">Disney 完成收購的官方公告 ↗</a></p>\n<p>以下是<strong>反事實教學實驗</strong>，不是 Pixar 的實際數據。假設人才與跨部門合作都達到 100% 時，最多能創造 60 萬元合作價值，還要扣掉 12 萬元整合成本。</p>\n<div class=\"controls\" id=\"pixar-widget\"><label for=\"pixar-talent\">重要創意人才留任程度<output id=\"pixar-talent-out\">80%</output></label><input type=\"range\" id=\"pixar-talent\" min=\"0\" max=\"100\" value=\"80\" step=\"10\">\n<label for=\"pixar-coop\">雙方團隊協作與通路運用程度<output id=\"pixar-coop-out\">70%</output></label><input type=\"range\" id=\"pixar-coop\" min=\"0\" max=\"100\" value=\"70\" step=\"10\">\n<div class=\"numbers\"><div><label>估計實現合作價值</label><b id=\"pixar-gross\">33.6 萬</b></div><div><label>扣整合成本後</label><b id=\"pixar-net\">21.6 萬</b></div></div><div class=\"model-result\" id=\"pixar-feedback\" aria-live=\"polite\"></div></div>\n<p>這是資源互補的白話版：<strong>買到一份契約不等於建立一個能協作的組織。</strong>未來第 12 堂談併購後整合時，會再仔細研究這類問題。</p></div></section>"}],init:function(){
 var by=function(id){return document.getElementById(id)};
 var fmt=function(x){return (Math.round(x*10)/10).toFixed(1)};
 var s=by('strategy-widget');if(s){
  var update=function(){
   var urgency=Number(by('strategy-urgency').value),difficulty=Number(by('strategy-integration').value);
   by('strategy-urgency-out').textContent=urgency+' / 100';by('strategy-integration-out').textContent=difficulty+' / 100';
   var values=[['Build 自建',85-0.8*urgency],['Buy 收購',80-0.6*difficulty],['Ally 合作',77-0.4*urgency]];
   var best=Math.max.apply(null,values.map(function(x){return x[1]}));
   by('strategy-results').innerHTML=values.map(function(v){return '<div class="model-option '+(v[1]===best?'winner':'')+'"><strong>'+v[0]+'</strong><span>'+fmt(v[1])+' 萬</span><div class="model-meter"><span style="width:'+Math.max(0,Math.min(100,v[1]/85*100))+'%"></span></div></div>'}).join('');
   by('strategy-feedback').innerHTML='<strong>在這組假設下，預期淨價值最高的是：'+values.find(function(x){return x[1]===best})[0]+'</strong><p>當市場急迫，自建可能來不及；當整合困難，收購可能得不償失。因此策略選擇需要把替代方案放在一起比較。</p>';
  };
  ['strategy-urgency','strategy-integration'].forEach(function(id){by(id).addEventListener('input',update)});update();
 }
 var m=by('motive-widget');if(m){
  var cases=[
    [0,'效率綜效：如果真的共用倉儲與配送，可以降低每單位成本。','證據：比較收購前後採購、物流及整合成本，並確認不是需求下滑造成的費用變化。'],
    [1,'帝國擴張／代理問題：管理者可能偏好規模擴張，即使沒有足夠有利的投資機會。','證據：分析 CEO 薪酬、董事會監督、自由現金流、投資機會與收購後績效。'],
    [2,'Hubris 假說：管理者可能過度相信自己的預測與管理能力，因而出價過高。','證據：檢查收購前預測、相對市場估值的溢價、歷史預測準確性與事後結果。']
  ];
  var reset=function(){m.querySelectorAll('[data-motive]').forEach(function(b){b.classList.remove('active');b.setAttribute('aria-pressed','false')});by('motive-feedback').textContent='先選擇一種最接近的解釋。'};
  by('motive-case').addEventListener('change',reset);
  m.querySelectorAll('[data-motive]').forEach(function(b){b.addEventListener('click',function(){
   var i=Number(by('motive-case').value),v=Number(b.dataset.motive),c=cases[i];
   m.querySelectorAll('[data-motive]').forEach(function(z){z.classList.toggle('active',z===b);z.setAttribute('aria-pressed',String(z===b))});
   by('motive-feedback').innerHTML='<strong>'+(v===c[0]?'這是最直接的候選解釋。':'這個機制未必能解釋題目最直接的線索。')+'</strong><p>'+c[1]+'</p><p><b>若要認真驗證：</b>'+c[2]+'</p><p>單靠故事不足以斷定因果關係。</p>';
  })});reset();
 }
 var r=by('synergy-risk-widget');if(r){
  var update=function(){
   var rate=Number(by('realization-slider').value),premium=Number(by('premium-slider').value),synergy=50*rate/100,net=synergy-10-premium;
   by('realization-out').textContent=rate+'%';by('premium-out').textContent=premium+' 萬';
   by('realized-synergy').textContent=fmt(synergy)+' 萬';by('expected-net').textContent=(net>0?'+':'')+fmt(net)+' 萬';
   by('synergy-risk-feedback').innerHTML='<strong>'+(net>0?'在此情境下仍有預期正收益':net===0?'預期價值剛好抵銷交易支出':'原本看似可行的出價可能太高')+'</strong><p>50 × '+rate+'% − 10 − '+premium+' = '+fmt(net)+' 萬元。</p>';
  };
  ['realization-slider','premium-slider'].forEach(function(id){by(id).addEventListener('input',update)});update();
 }
 var p=by('pixar-widget');if(p){
  var update=function(){
   var talent=Number(by('pixar-talent').value),coop=Number(by('pixar-coop').value),gross=60*talent/100*coop/100,net=gross-12;
   by('pixar-talent-out').textContent=talent+'%';by('pixar-coop-out').textContent=coop+'%';
   by('pixar-gross').textContent=fmt(gross)+' 萬';by('pixar-net').textContent=fmt(net)+' 萬';
   by('pixar-feedback').innerHTML='<strong>'+(net>0?'在此假設下有淨合作價值':net===0?'剛好抵銷整合成本':'合作價值不足以抵銷整合成本')+'</strong><p>即使公司已被收購，人才、技術與市場通路能否協作，仍影響綜效的實現。</p>';
  };
  ['pixar-talent','pixar-coop'].forEach(function(id){by(id).addEventListener('input',update)});update();
 }
 }};
})();