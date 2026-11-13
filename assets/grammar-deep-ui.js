(function(){
"use strict";
const escapeHTML=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ui={
ja:{name:"文法を深く理解する",overview:"この章で押さえる考え方",rules:"しくみと使い分け",table:"活用・比較表",examples:"解説付き例文",pitfall:"間違いやすいポイント",question:"理解度チェック",answer:"解答と理由を見る",listening:"アラビア語を再生",source:"原書の詳しい解説・追加例文",study:"例文を音読し、主語・時間・性・数を変えて練習しましょう。"},
en:{name:"Deeper grammar guide",overview:"The big idea",rules:"How the grammar works",table:"Conjugation and comparison",examples:"Worked examples",pitfall:"Common mistakes",question:"Check your understanding",answer:"Reveal answer and explanation",listening:"Play Arabic",source:"Complete source chapter and further examples",study:"Read the examples aloud, then change the person, time, gender or number."},
ar:{name:"تَطْبِيقَاتٌ وَأَمْثِلَةٌ",overview:"",rules:"",table:"أَمْثِلَةٌ",examples:"أَمْثِلَةٌ لِلْقِرَاءَةِ وَالِاسْتِمَاعِ",pitfall:"",question:"",answer:"",listening:"اِسْتَمِعْ",source:"الْأَمْثِلَةُ الْأَسَاسِيَّةُ",study:"اِقْرَأْ وَاسْتَمِعْ، ثُمَّ كَرِّرْ بِصَوْتٍ عَالٍ."}
};
function sayArabic(value){
 if(!("speechSynthesis" in window)||!window.SpeechSynthesisUtterance)return;
 const engine=window.speechSynthesis;
 engine.cancel();
 const u=new SpeechSynthesisUtterance(value);
 u.lang="ar-SA";u.rate=.78;
 const voices=engine.getVoices().filter(x=>x.lang&&/^ar/i.test(x.lang));
 if(voices.length)u.voice=voices.find(x=>x.lang==="ar-SA")||voices[0];
 engine.speak(u);
}
function arabic(s,caption){
 return '<button type="button" class="depth-ar" lang="ar" dir="rtl" data-depth-say="'+escapeHTML(s)+'" aria-label="'+escapeHTML(caption)+'">'+escapeHTML(s)+'<span class="depth-sound" aria-hidden="true">◖))</span></button>';
}
window.FSS_BUILD_GRAMMAR_DEPTH=function(n,lang){
 const d=(window.FSS_GRAMMAR_DEPTH||{})[n];
 if(!d)return null;
 const locale=lang==="ja"?0:1,t=ui[lang]||ui.en,isArabic=lang==="ar";
 const box=document.createElement("section");
 box.className="depth-guide"+(isArabic?" depth-ar-only":"");
 box.id="expanded-grammar-"+n;
 box.setAttribute("aria-label",t.name);
 if(isArabic)box.dir="rtl";
 const table=(window.FSS_GRAMMAR_TABLES||{})[n];
 let h='<div class="depth-heading"><div class="depth-eyebrow">'+escapeHTML(lang==="ja"?"詳しい文法ガイド":isArabic?"شَرْحٌ مُوَسَّعٌ":"GRAMMAR COMPANION")+' · '+String(n).padStart(2,"0")+'</div><h3>'+escapeHTML(t.name)+'</h3></div>';
 if(!isArabic){
  h+='<div class="depth-lead"><span class="depth-section-num">01</span><div><h4>'+escapeHTML(t.overview)+'</h4><p>'+escapeHTML(d.lead[locale])+'</p></div></div>';
  h+='<section class="depth-section"><h4>'+escapeHTML(t.rules)+'</h4><ol class="depth-rules">'+d.notes.map((pair,i)=>'<li><span class="depth-rule-index">'+String(i+1).padStart(2,"0")+'</span><p>'+escapeHTML(pair[locale])+'</p></li>').join("")+'</ol></section>';
 }
 if(table&&table.rows?.length){
  h+='<section class="depth-section"><h4>'+escapeHTML(t.table)+'</h4><div class="depth-table-wrap"><table class="depth-table"><thead><tr><th lang="ar">'+(isArabic?"الْعَرَبِيَّةُ":"العَرَبِيَّةُ")+'</th>'+(!isArabic?'<th>'+escapeHTML(lang==="ja"?"意味・文法上の役割":"Meaning and grammatical role")+'</th>':"")+'</tr></thead><tbody>'+table.rows.map(row=>'<tr><td>'+arabic(row[0],t.listening)+'</td>'+(!isArabic?'<td>'+escapeHTML(row[lang==="ja"?1:2])+'</td>':"")+'</tr>').join("")+'</tbody></table></div></section>';
 }
 h+='<section class="depth-section"><h4>'+escapeHTML(t.examples)+'</h4><div class="depth-example-list">'+d.examples.map((row,i)=>'<div class="depth-example"><div class="depth-example-index">'+String(i+1).padStart(2,"0")+'</div><div class="depth-example-main">'+arabic(row[0],t.listening)+(!isArabic?'<p class="depth-explanation">'+escapeHTML(row[locale+1])+'</p>':"")+'</div></div>').join("")+'</div></section>';
 if(!isArabic){
  h+='<section class="depth-section depth-pitfall"><h4>'+escapeHTML(t.pitfall)+'</h4><p>'+escapeHTML(d.pitfall[locale])+'</p></section>';
  h+='<section class="depth-section depth-check"><h4>'+escapeHTML(t.question)+'</h4><p>'+escapeHTML(d.check[locale])+'</p><details><summary>'+escapeHTML(t.answer)+'</summary><div class="depth-answer">'+escapeHTML(d.check[locale+2])+'</div></details></section>';
 }
 h+='<p class="depth-study-note">'+escapeHTML(t.study)+'</p>';
 box.innerHTML=h;
 box.addEventListener("click",event=>{
  const target=event.target.closest("[data-depth-say]");
  if(target&&box.contains(target))sayArabic(target.dataset.depthSay||"");
 });
 return box;
};
window.FSS_GRAMMAR_DEPTH_LABELS=ui;
})();