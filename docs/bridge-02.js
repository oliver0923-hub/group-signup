(function(){
 window.MA_EXTRA=window.MA_EXTRA||{};
 window.MA_EXTRA[2]={blocks:[{"after":5,"html":"<section class=\"section bridge-section\"><h2>角色扮演｜你是收購方，究竟要買什麼？</h2><div class=\"card\"><p>星河餐飲想用 500 萬元取得晨光咖啡。假設晨光咖啡還欠銀行 200 萬元，最重要的門市租約也可能有移轉限制。請切換交易架構，觀察<strong>錢流向誰、法人是否存續、債務和契約要如何考慮</strong>。</p>\n<div class=\"controls\" id=\"structure-widget\"><div class=\"tabs\"><button class=\"tab active\" type=\"button\" data-structure=\"share\">① 股權收購</button><button class=\"tab\" type=\"button\" data-structure=\"asset\">② 資產收購</button><button class=\"tab\" type=\"button\" data-structure=\"merger\">③ 吸收合併</button></div>\n<div class=\"model-options\"><label><input id=\"structure-debt\" type=\"checkbox\" checked> 公司仍欠銀行 200 萬元</label><label><input id=\"structure-lease\" type=\"checkbox\" checked> 店面租約限制移轉或控制權變更</label></div><div class=\"model-result\" id=\"structure-feedback\" aria-live=\"polite\"></div></div>\n<p>它其實是<strong>公司控制權和權利義務如何轉移</strong>的問題。Jensen &amp; Ruback（1983）將公司控制權市場視為不同經營團隊競爭管理企業資源的場域。這不是說每種交易都一樣，而是先釐清「取得控制權」與「取得部分資產」的差異。<a href=\"https://doi.org/10.1016/0304-405X(83)90004-1\" target=\"_blank\" rel=\"noopener noreferrer\">研究原文 ↗</a></p>\n<p class=\"note\">法律提示：此處是示意情境，不是交易契約。實務上債務承擔、租約移轉、員工與許可是否需核准，依適用法律及交易條款判斷。</p></div></section>"},{"after":8,"html":"<section class=\"section bridge-section\"><h2>新聞判讀挑戰｜同樣寫「收購」，其實差在哪？</h2><div class=\"card\"><p>請選擇一則交易，再猜它最接近哪一種形式。這是訓練你看到新聞標題後，會回頭確認法律文件的習慣。</p><div class=\"controls\" id=\"detective-widget\">\n<label for=\"detective-case\">選擇案例</label><select id=\"detective-case\"><option value=\"0\">Microsoft × Activision Blizzard（2023）</option><option value=\"1\">Lenovo × IBM x86 伺服器業務（2014）</option><option value=\"2\">假設：A 吸收合併 B，最後只剩 A</option></select>\n<div class=\"choice-grid\"><button class=\"tab\" type=\"button\" data-detective=\"0\">購買特定營業</button><button class=\"tab\" type=\"button\" data-detective=\"1\">透過合併子公司取得目標控制權</button><button class=\"tab\" type=\"button\" data-detective=\"2\">A 吸收 B，B 法人消滅</button></div><div class=\"model-result\" id=\"detective-feedback\" aria-live=\"polite\">選擇你認為最貼近的一種描述。</div></div>\n<p>Microsoft 的案例採反向三角合併，Activision Blizzard 存續成為子公司；Lenovo 取得 IBM 的特定 x86 伺服器業務，而非整間 IBM。<strong>交易類型不是從新聞用字直接推測，而是要看公告及法律安排。</strong></p></div></section>"},{"after":9,"html":"<section class=\"section bridge-section\"><h2>小型控制權市場｜管理能力帶來的價值，誰會拿走？</h2><div class=\"card\"><p>假設一間咖啡公司的獨立價值是 800 萬元，新買方認為自己能透過改善庫存和供應鏈，讓它價值達到 1,100 萬元。這<strong>300 萬元是買方預期的改善空間</strong>，不是已經實現的利潤。</p>\n<div class=\"controls\" id=\"control-market-widget\"><label for=\"control-market-price\">新買方打算出價：<output id=\"control-market-out\">950 萬元</output></label><input id=\"control-market-price\" type=\"range\" min=\"800\" max=\"1200\" step=\"25\" value=\"950\">\n<div class=\"numbers\"><div><label>賣方高於原價值所取得</label><b id=\"control-market-seller\">+150 萬</b></div><div><label>買方預期可保留價值</label><b id=\"control-market-buyer\">+150 萬</b></div></div><div class=\"model-result\" id=\"control-market-feedback\" aria-live=\"polite\"></div></div>\n<p>這帶出一個易懂的研究問題：<strong>即使新團隊真的比較會管理，若出價太高，最後可能是舊股東得到大部分好處。</strong> Jensen &amp; Ruback（1983）的回顧將控制權交易、目標股東與收購方的利益一起討論。模型數字全是示意，真實案例須另估計風險及交易費用。</p></div></section>"}],init:function(){
 var by=function(id){return document.getElementById(id)};
 var w=by('structure-widget');if(w){
  var mode='share';
  var configs={
   share:['買下股份，原公司仍存在','出售股份的原股東','晨光咖啡法人不因換股東而消滅','銀行原有借款原則上仍留在晨光咖啡，買方不會僅因持股就直接成為債務人','要查核租約是否有控制權變更條款'],
   asset:['買下特定資產或營業','出售資產的晨光咖啡公司','目標原公司一般仍存在','銀行借款通常仍由賣方公司承擔，但可能存在依法律或交易條件的例外','資產及租約可能要取得出租人同意才能移轉'],
   merger:['吸收合併（假設星河為存續公司）','依合併契約安排的股東或其他對價權利人','晨光咖啡作為消滅公司，星河概括承受其權利義務','星河原則上依法概括承受消滅公司借款及其他義務','特定契約與法規核准事項仍應確認']
  };
  var update=function(){
    w.querySelectorAll('[data-structure]').forEach(function(b){var yes=b.dataset.structure===mode;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',String(yes))});
    var c=configs[mode];
    by('structure-feedback').innerHTML='<strong>'+c[0]+'</strong><p><b>500 萬由誰取得？</b>'+c[1]+'</p><p><b>公司身分：</b>'+c[2]+'</p><p><b>借款：</b>'+(by('structure-debt').checked?c[3]:'本例沒有這筆借款，但仍應查核其他負債')+'</p><p><b>租約：</b>'+(by('structure-lease').checked?c[4]:'本例沒有這個特殊限制，但仍需逐項查核合約及法規')+'</p>';
  };
  w.querySelectorAll('[data-structure]').forEach(function(b){b.addEventListener('click',function(){mode=b.dataset.structure;update()})});
  by('structure-debt').addEventListener('change',update);by('structure-lease').addEventListener('change',update);update();
 }
 var d=by('detective-widget');if(d){
  var cases=[[1,'收購子公司與 Activision Blizzard 合併，目標公司存續並成為 Microsoft 全資子公司。'],[0,'Lenovo 購買 IBM x86 伺服器相關業務，而非 IBM 全部股份；跨國交易形式仍可能有多種法律安排。'],[2,'A 吸收合併 B，只有 A 存續，因此 B 法人資格消滅。']];
  var reset=function(){d.querySelectorAll('[data-detective]').forEach(function(b){b.classList.remove('active');b.setAttribute('aria-pressed','false')});by('detective-feedback').textContent='選擇你認為最貼近的一種描述。'};
  by('detective-case').addEventListener('change',reset);
  d.querySelectorAll('[data-detective]').forEach(function(b){b.addEventListener('click',function(){
   var n=Number(by('detective-case').value),v=Number(b.dataset.detective),c=cases[n];
   d.querySelectorAll('[data-detective]').forEach(function(z){z.classList.toggle('active',z===b);z.setAttribute('aria-pressed',String(z===b))});
   by('detective-feedback').innerHTML='<strong>'+(v===c[0]?'判斷正確！':'再注意交易文件的結構。')+'</strong><p>'+c[1]+'</p>';
  })});reset();
 }
 var p=by('control-market-widget');if(p){
  var update=function(){
   var price=Number(by('control-market-price').value),seller=price-800,buyer=1100-price;
   by('control-market-out').textContent=price+' 萬元';
   by('control-market-seller').textContent='+'+seller+' 萬';
   by('control-market-buyer').textContent=(buyer>0?'+':'')+buyer+' 萬';
   by('control-market-feedback').innerHTML='<strong>'+(buyer>0?'買方仍有預期增值空間':buyer===0?'預期改善價值全部反映在收購價格裡':'買方支付的價格超過自己的估計價值')+'</strong><p>買方保留價值 = 1,100 − '+price+' = '+buyer+' 萬元（示意）。</p>';
  };
  by('control-market-price').addEventListener('input',update);update();
 }
 }};
})();