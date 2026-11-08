(function(){
"use strict";
var match=location.pathname.match(/lesson-(\d{2})\.html$/);
if(!match)return;
var n=Number(match[1]),key="fss-preferred-language-v2";
function ready(){
 if(document.getElementById("fss-lesson-top"))return;
 var nav=document.createElement("nav");nav.id="fss-lesson-top";nav.setAttribute("aria-label","Lesson navigation and study language");
 nav.innerHTML='<a href="../index.html" aria-label="Back to study home">← <span class="fss-brand-long">Fuṣḥā Study Studio</span><span class="fss-brand-short">戻る</span></a><span class="fss-lesson-number">LESSON '+String(n).padStart(2,"0")+'</span><div class="fss-language-switch" role="group" aria-label="Learning language"><button type="button" data-fss-lang="ja">日本語</button><button type="button" data-fss-lang="en">English</button><button type="button" data-fss-lang="ar" lang="ar">العَرَبِيَّةُ</button></div>';
 document.body.insertBefore(nav,document.body.firstChild);
 function textClean(t){return (t||"").replace(/\s+/g," ").trim()}
 function removeInstructionBlocks(){
  if(n<=4){
   document.querySelectorAll("section.sheet").forEach(function(s){
    var kicker=textClean(s.querySelector(".section-head .kicker")?.textContent||"");
    if(/^(HOW TO USE|WEEK AT A GLANCE)/i.test(kicker))s.remove();
   });
   document.querySelectorAll(".teacheronly,.teacher-note,.teacher-note-box,.trow,.timeline-row").forEach(function(x){x.remove()});
   document.querySelectorAll(".cover-desc").forEach(function(x){x.textContent="Personal study · Modern Standard Arabic (Fuṣḥā)"});
   document.querySelectorAll(".cover-footer").forEach(function(x){x.textContent="Listen · repeat · practise · review"});
   document.querySelectorAll("section.sheet .kicker").forEach(function(x){
     if(/^(MON|WED|FRI)\b/i.test(textClean(x.textContent)))x.textContent="SPEAKING PRACTICE";
   });
   document.querySelectorAll("section.sheet h1").forEach(function(x){x.textContent=x.textContent.replace(/^Lesson ([ABC])\s*[—–-]/,"Practice $1 —")});
  }
  if(n===3){
   document.querySelector("#schedule")?.remove();
   document.querySelectorAll("a[href='#schedule']").forEach(function(x){x.remove()});
   var kicker=document.querySelector(".hero .kicker");if(kicker)kicker.textContent="FUṢḤĀ · LESSON 03 · PERSONAL STUDY";
   document.querySelectorAll(".tr[data-en]").forEach(function(x){
     var e=x.getAttribute("data-en")||"";
     if(/\b(teacher note|the teacher should|teacher changes|ask the teacher|your Syrian teacher)\b/i.test(e)){
       x.setAttribute("data-en","Change one detail and say your answer aloud.");
       x.setAttribute("data-ja","条件を1つ変えて、自分の答えを声に出して練習する。");
       x.setAttribute("data-ar","غَيِّرْ شَيْئًا وَتَكَلَّمْ بِصَوْتٍ عَالٍ.");
     }
   });
   document.querySelectorAll(".tr[data-en]").forEach(function(x){
     if(/Friday performance check/i.test(x.dataset.en||"")){
       x.dataset.en="Self-assessment";x.dataset.ja="自己評価";x.dataset.ar="التَّقْيِيمُ الذَّاتِيُّ";
     }
   });
  }
  if(n>=5&&n<=8){
    var intro=document.querySelector("main.wrap > header.hero > p");
    if(intro)intro.textContent="自主学習 · Learn at your own pace";
    document.querySelectorAll("main.wrap > section").forEach(function(s){
      var h=s.querySelector("h2");if(!h)return;
      if(/^Class \d+/.test(h.textContent)){
        h.textContent=h.textContent.replace(/^Class (\d+).*$/,"Practice $1 · 会話練習");
        s.querySelectorAll(".time,.schedule,.schedule-row").forEach(function(x){x.remove()});
      }
      s.querySelectorAll("h3").forEach(function(x){
        x.textContent=x.textContent.replace(/Quick teacher drills/gi,"Self-practice drills").replace(/Teacher listening script\s*\/\s*講師による聞き取り/gi,"Listening and reading practice / 聞き取り練習");
      });
    });
   document.querySelectorAll(".hint,p.small,div.small").forEach(function(x){
     var t=x.textContent||"";
     if(/\bTeacher:\s*/i.test(t)){
       var start=t.search(/\bTeacher:\s*/i);
       var lead=t.slice(0,start).trim();
       if(lead)x.textContent=lead;
       else x.remove();
     }else if(/Use simple English for teacher instructions/i.test(t)){
       x.textContent="Tap Arabic words to listen. Repeat aloud and create your own examples.";
     }
   });
   document.querySelectorAll("main.wrap p,main.wrap .hint").forEach(function(x){
      if(x.querySelector(".ar"))return;
      var v=x.textContent||"";
      if(/teacher should|with the teacher|ask the teacher to|Teacher listens|Teacher reads/i.test(v)&&v.length<300){
        x.textContent=v.replace(/with the teacher/gi,"aloud").replace(/ask the teacher to/gi,"try to").replace(/Teacher reads/gi,"Listen and repeat").replace(/Teacher listens/gi,"Record yourself").replace(/Teacher should/gi,"Try to").replace(/the teacher/gi,"a speaking partner");
      }
   });
  }
  if(n<=4){
   document.querySelectorAll("section.sheet p,section.sheet .note,section.sheet .prompt,section.sheet .hint,section.sheet li").forEach(function(x){
    if(x.querySelector("[lang=ar],.ar,.arabic"))return;
    var t=textClean(x.textContent);
    if(/^(Teacher agreement|Teacher note|Calendar note|For your teacher|Teacher cue|Quick teacher drill)/i.test(t)||
       /teacher (should|will|reads|asks|models|deliberately|can model)|ask the teacher|teacher instructions|先生には|講師は/i.test(t)){
       if(t.length<600)x.remove();
    }
   });
  }
 }
 removeInstructionBlocks();

 function finishPersonalization(){
  if(n<=4){
    document.querySelectorAll("section.sheet").forEach(function(sec){
      var header=(sec.querySelector(".section-head h1")?.textContent||"").trim();
      if(/^(Please teach in clear|Instructions for the teacher|Teacher guide)/i.test(header)){sec.remove();return}
      sec.querySelectorAll(".note").forEach(function(el){
        var label=(el.querySelector("b,strong,h3")?.textContent||"").trim();
        if(/teacher (agreement|note|drill|prompt|cue|tips)|講師(?:向け|メモ)/i.test(label))el.remove();
      });
      sec.querySelectorAll(".section-head .kicker,.cover-kicker").forEach(function(el){
        el.textContent=el.textContent.replace(/\bWEEK\b/gi,"LESSON").replace(/\b(?:MON|WED|FRI)(?:DAY|NESDAY)?\b/gi,"PRACTICE");
      });
      sec.querySelectorAll(".section-head .sub,.fineprint,.prompt,.role p,.jpsection p").forEach(function(el){
        if(el.querySelector(".ar,[lang=ar]"))return;
        var t=el.textContent||"";
        if(/teacher should|teacher reads|teacher asks|teacher changes|teacher cues|teacher may|teacher gives|the teacher will|ask the teacher|先生には|先生の質問|講師に/i.test(t)){
          el.textContent="自分で例文を声に出し、条件や役割を変えて繰り返し練習する。 Listen, repeat and try a new variation without notes.";
        }
      });
    });
  }
  if(n>=5&&n<=8){
    var label=document.querySelector("main.wrap > header.hero > small");
    if(label)label.textContent="FUṢḤĀ · PERSONAL STUDY · LESSON "+n;
    document.querySelectorAll("main.wrap .hint,main.wrap p").forEach(function(el){
      if(el.querySelector(".ar,[lang=ar]"))return;
      var t=(el.textContent||"").trim();
      if(!/teacher|講師|先生/i.test(t))return;
      if(/^The teacher reads these four lines/i.test(t)){
        el.textContent="Read these four lines aloud twice (or use speech playback). Then answer a question and rebuild the conversation.";
      }else if(/Task 2 \(surprise\).*Teacher changes/i.test(t)){
        el.textContent="Task 2: Change one detail (person, place, time or reason) and respond again.";
      }else if(/^Mission \d+: Teacher asks/i.test(t)){
        el.textContent=t.replace(/Teacher asks/,"Answer").replace(/\.$/," aloud.");
      }else if(/^Mission \d+: Teacher (offers|refuses|changes)/i.test(t)){
        el.textContent=t.replace(/Teacher (offers|refuses|changes)/i,"Imagine the other person $1").replace(/\.$/," and respond aloud.");
      }else if(/^Drill \d+: Teacher asks/i.test(t)){
        el.textContent=t.replace("Teacher asks","Answer questions about");
      }else if(/teacher should|with the teacher|ask the teacher|for teacher/i.test(t)&&t.length<450){
        el.textContent="Read the model aloud, try both roles, and repeat without looking.";
      }
    });
  }
 }
 finishPersonalization();
 function splitBilingual(){
  if(n<5||n>8)return;
  document.querySelectorAll(".trans").forEach(function(el){
   if(el.hasAttribute("data-fss-bilingual")||el.querySelector(".ar"))return;
   var raw=el.textContent||"";
   var i=raw.search(/[\u3040-\u30ff\u3400-\u9fff]/);
   if(i<0)return;
   var en=raw.slice(0,i).trim().replace(/\s*[/／]\s*$/,"").trim(),ja=raw.slice(i).trim();
   if(!en||!ja)return;
   el.textContent="";
   var a=document.createElement("span");a.className="fss-en-piece";a.lang="en";a.textContent=en;
   var b=document.createElement("span");b.className="fss-ja-piece";b.lang="ja";b.textContent=ja;
   el.append(a,b);el.setAttribute("data-fss-bilingual","");
  });
 }
 splitBilingual();
 var panel=null;
 function say(text){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(text);u.lang="ar-SA";u.rate=.78;var v=speechSynthesis.getVoices().find(function(x){return x.lang&&x.lang.toLowerCase().startsWith("ar")});if(v)u.voice=v;window.speechSynthesis.speak(u)}
 function makeArabicPractice(){
  if(panel)return;
  panel=document.createElement("main");panel.id="fss-ar-practice";panel.lang="ar";panel.dir="rtl";
  var h=document.createElement("h1");h.textContent="تَدَرَّبْ عَلَى الْعَرَبِيَّةِ";panel.append(h);
  var grid=document.createElement("div");grid.className="fss-ar-grid";
  var seen=new Set();
  document.querySelectorAll("main .ar,main [lang=ar],section.sheet .ar,section.sheet [lang=ar]").forEach(function(el){
    if(el.querySelector(".ar,[lang=ar]"))return;
    var t=textClean(el.textContent);if(t.length<2||t.length>230)return;
    var norm=t.replace(/[\u064b-\u065f\u0670\s\u0640]/g,"");
    if(seen.has(norm))return;seen.add(norm);
    var row=document.createElement("div");row.className="fss-ar-card";
    var word=document.createElement("span");word.textContent=t;
    var button=document.createElement("button");button.type="button";button.textContent="▶";button.setAttribute("aria-label","استمع");
    button.addEventListener("click",function(){say(t)});word.addEventListener("click",function(){say(t)});
    row.append(word,button);grid.append(row);
  });
  panel.append(grid);document.body.append(panel);
 }
 function setLanguage(next){
   if(!["ja","en","ar"].includes(next))return;
   try{localStorage.setItem(key,next)}catch(e){}
   document.body.classList.remove("fss-lesson-ja","fss-lesson-en","fss-lesson-ar");
   document.body.classList.add("fss-lesson-"+next);
   nav.querySelectorAll("[data-fss-lang]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.fssLang===next))});
   if(n<=2){
      var old=document.querySelector("#fssbar button[data-mode='"+next+"']");
      if(old)old.click();
   }else if(n===3&&next!=="ar"){
      document.querySelector(".modes button[data-lang='"+next+"']")?.click();
   }else if(n>=9&&typeof window.fssSetLessonLanguage==="function"){
      window.fssSetLessonLanguage(next);
   }
   if(n>=3){
      if(next==="ar")makeArabicPractice();
      document.body.classList.toggle("fss-personal-ar",next==="ar");
      if(panel)panel.hidden=next!=="ar";
      if(n===3&&next==="ar")document.querySelector(".modes button[data-lang='ar']")?.click();
   }
 }
 nav.querySelectorAll("button[data-fss-lang]").forEach(function(b){b.addEventListener("click",function(){setLanguage(b.dataset.fssLang)})});
 var saved="ja";try{saved=localStorage.getItem(key)||"ja"}catch(e){}
 setLanguage(["en","ja","ar"].includes(saved)?saved:"ja");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready,{once:true});else ready();
})();