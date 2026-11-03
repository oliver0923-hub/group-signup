(function(){
  window.MA_EXTRA=window.MA_EXTRA||{};
  window.MA_EXTRA[1]={blocks:[{"after":4,"html":"<section class=\"section bridge-section\"><h2>一起做決策｜CEO 想開豪華分店，股東同意嗎？</h2><div class=\"card\"><p>假設你聘請一位 CEO。董事會有兩個投資方案：<strong>穩健改善</strong>讓公司增加 30 萬元價值；<strong>豪華擴張</strong>只讓公司增加 10 萬元，但 CEO 另外得到 12 萬元相當的私人利益（例如規模與職權帶來的好處）。你會選哪個？CEO 又可能怎麼選？</p><div class=\"mechanism-flow\"><span>股東出資</span><b>→</b><span>經理人做決策</span><b>→</b><span>雙方誘因不同</span><b>→</b><span>可能出現效率損失</span></div>\n<div class=\"controls\" id=\"agency-widget\">\n<label for=\"manager-equity\">CEO 自己持有多少股份？<output id=\"agency-equity-out\">10%</output></label><input type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"10\" id=\"manager-equity\">\n<label for=\"board-monitoring\">董事會的監督與約束程度（示意）<output id=\"agency-monitor-out\">0%</output></label><input type=\"range\" min=\"0\" max=\"100\" step=\"10\" value=\"0\" id=\"board-monitoring\">\n<div class=\"numbers\"><div><label>CEO 選穩健方案的誘因分數</label><b id=\"agency-safe\">3.0</b></div><div><label>CEO 選豪華擴張的誘因分數</label><b id=\"agency-luxury\">13.0</b></div></div><div class=\"model-result\" id=\"agency-feedback\" aria-live=\"polite\"></div></div>\n<p><strong>這就是代理問題（Agency Problem）的直覺。</strong>如果管理者沒有承擔公司全部損益，卻擁有決策權，就可能對某些方案有不同的偏好。Jensen &amp; Meckling（1976）將這類誘因衝突與代理成本納入企業分析。<a href=\"https://doi.org/10.1016/0304-405X(76)90026-X\" target=\"_blank\" rel=\"noopener noreferrer\">原始期刊論文 ↗</a></p><p class=\"note\">模型把公司增值的持股比例與私人好處放在同一單位比較，僅用來展示機制；不是 CEO 薪酬、董事會行為或論文的實證估計。</p><div class=\"bridge-question\">操作挑戰：CEO 持股提高到 70%，方案會改變嗎？若持股很低，但董事會增加監督，結果又會如何？</div></div></section>"},{"after":6,"html":"<section class=\"section bridge-section\"><h2>董事會互動劇場｜重大決策到底誰說了算？</h2><div class=\"card\"><p>假設 CEO 主張收購台中一間咖啡連鎖。這項決策不是只有「CEO」和「股東」兩個角色。點擊流程的四個步驟，理解公司為什麼要設計不同的決策與監督權力。</p>\n<div class=\"controls\" id=\"governance-widget\"><div class=\"tabs\"><button class=\"tab active\" type=\"button\" data-stage=\"0\">① 提出</button><button class=\"tab\" type=\"button\" data-stage=\"1\">② 批准</button><button class=\"tab\" type=\"button\" data-stage=\"2\">③ 執行</button><button class=\"tab\" type=\"button\" data-stage=\"3\">④ 監督</button></div><div class=\"model-result\" id=\"governance-feedback\" aria-live=\"polite\"></div></div>\n<p>Fama &amp; Jensen（1983）分析的就是這種<strong>將決策的提出、批准、執行和監督分開</strong>的組織安排。最容易理解的比喻：學生社團若由同一個人提案、核准預算、自己花錢、最後自己驗收，容易缺少相互制衡。<a href=\"https://doi.org/10.1086/467037\" target=\"_blank\" rel=\"noopener noreferrer\">原始論文 ↗</a></p>\n<div class=\"bridge-question\">想一想：如果有位 CEO 同時是大股東，這四項工作就能不經程序由他一人完成嗎？答案要看法律、公司章程與授權安排，不能單憑職稱判斷。</div></div></section>"}],init:function(){
    var by=function(id){return document.getElementById(id)};
    var w=by('agency-widget');
    if(w){
      var update=function(){
        var share=Number(by('manager-equity').value)/100;
        var monitoring=Number(by('board-monitoring').value)/100;
        var safe=share*30,luxury=share*10+12*(1-monitoring);
        by('agency-equity-out').textContent=Math.round(share*100)+'%';
        by('agency-monitor-out').textContent=Math.round(monitoring*100)+'%';
        by('agency-safe').textContent=safe.toFixed(1);
        by('agency-luxury').textContent=luxury.toFixed(1);
        var choice=safe>luxury?'穩健改善':safe<luxury?'豪華擴張':'兩方案誘因相同';
        by('agency-feedback').innerHTML='<strong>在此示意模型下，CEO 較可能選：'+choice+'</strong><p>穩健改善帶給公司 +30 萬元；豪華擴張只有 +10 萬元。若 CEO 選豪華擴張，公司相較於穩健方案就少創造 20 萬元。監督與持股會影響經理人偏好的方案。</p>';
      };
      ['manager-equity','board-monitoring'].forEach(function(id){by(id).addEventListener('input',update)});update();
    }
    var g=by('governance-widget');
    if(g){
      var steps=[
        ['提出 Initiation','CEO 和管理團隊提出收購構想、估算效益及交易成本。這是決策管理（Decision Management）的一部分。'],
        ['批准 Ratification','董事會或其他依法有權機關審議提案；重大事項可能另需股東會同意。這屬決策控制（Decision Control）。'],
        ['執行 Implementation','授權人員洽談、查核、簽約與整合，並依批准的方案執行。這也是決策管理的一部分。'],
        ['監督 Monitoring','治理機關評估交易成果、人才與財務績效，必要時要求改善。這也是決策控制的一部分。']
      ];
      var show=function(i){
        g.querySelectorAll('[data-stage]').forEach(function(b){var a=Number(b.dataset.stage)===i;b.classList.toggle('active',a);b.setAttribute('aria-pressed',a?'true':'false')});
        by('governance-feedback').innerHTML='<strong>'+steps[i][0]+'</strong><p>'+steps[i][1]+'</p>';
      };
      g.querySelectorAll('[data-stage]').forEach(function(b){b.addEventListener('click',function(){show(Number(b.dataset.stage))})});show(0);
    }
  }};
})();