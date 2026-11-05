(function(){
'use strict';
var D=window.LESSON_DATA;if(!D)return;
var id='fusha-lesson-'+D.week+'-v2';
var E=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var AR=function(s){return '<span class="ar" dir="rtl" lang="ar" tabindex="0" role="button" aria-label="Play Arabic: '+E(s)+'" data-say="'+E(s)+'">'+E(s)+'</span>'};
var FR=function(x){return '<div class="fr"><div class="arbox">'+AR(x.ar)+'</div><div class="roman">'+E(x.roman||'')+'</div><div class="trans en">'+E(x.en||'')+'</div><div class="trans ja">'+E(x.ja||'')+'</div></div>'};
var ui={ja:true,en:true,answers:false};
function block(title,tag,html,idx){return '<section id="s'+idx+'" class="unit"><div class="section-kicker">'+E(tag)+'</div><h2>'+E(title)+'</h2>'+html+'</section>'}
var parts=[];var nav=[];
function add(title,tag,html){var n=parts.length;parts.push(block(title,tag,html,n));nav.push('<a href="#s'+n+'">'+E(title)+'</a>')}
function lessonHeader(){
return '<header class="hero"><div class="kicker">FUSHA SPEAKING LAB · WEEK '+D.week+' · A1 → A2</div><div class="hero-top"><div><h1>'+E(D.title)+'</h1><p class="subtitle">'+E(D.jaTitle)+' · '+E(D.dates)+'</p><p>'+E(D.outcome)+'</p></div><div class="hero-ar">'+AR(D.arTitle)+'</div></div><div class="metrics"><div><b>3 × 120</b><small>CLASS MINUTES</small></div><div><b>'+D.vocab.length+'</b><small>WORDS & CHUNKS</small></div><div><b>'+D.dialogues.length+'</b><small>MODEL DIALOGUES</small></div><div><b>'+D.grammar.length+'</b><small>GRAMMAR POINTS</small></div></div></header>'}
add('Weekly mission','YOUR TARGET','<p class="lead">'+E(D.outcome)+'</p><div class="two"><div class="panel"><h3>By the end / できるようになること</h3><ul>'+D.goals.map(function(g){return '<li>'+E(g)+'</li>'}).join('')+'</ul></div><div class="panel"><h3>How to study / 使い方</h3><p><b>Student:</b> Review the vocabulary before each class, then keep the page closed during the free role-play.</p><p><b>Teacher:</b> Speak slowly in simple English for instructions. Use Fuṣḥā for dialogue. Model first; correct 3 important errors after the task.</p><p class="fine">Tap Arabic text to play device-based speech synthesis. The voice may vary by browser; it is not a human recording.</p></div></div>');
add('Recall before learning','SPACED RETRIEVAL','<div class="number-grid">'+D.review.map(function(t,i){return '<div class="panel"><div class="mini">REVIEW '+(i+1)+'</div><p>'+E(t.en)+'</p><p class="muted">'+E(t.ja)+'</p></div>'}).join('')+'</div><div class="teacher"><b>Teacher cue:</b> “No notes. Try first. I will give a hint if needed.” Retest these phrases during Class 3.</div>');
add('Core vocabulary · '+D.vocab.length,'INPUT · WORD FORMS','<p>For verbs: perfect, imperfect and “I” present. For nouns: gender and plural where helpful. Practice the example in a new sentence.</p><div class="vocab-grid">'+D.vocab.map(function(v,i){
var form='';
if(v.type==='verb')form='<div class="forms"><span>Past / 完了形 '+AR(v.past||v.ar)+'</span><span>He present / 未完了形 '+AR(v.present||'')+'</span><span>I present / 私 '+AR(v.me||'')+'</span></div>';
else if(v.type==='noun')form='<div class="forms"><span>Gender '+E(v.gender||'—')+'</span>'+(v.plural?'<span>Plural / 複数 '+AR(v.plural)+'</span>':'')+'</div>';
else if(v.type==='adj')form='<div class="forms"><span>Masculine '+AR(v.ar)+'</span><span>Feminine '+AR(v.fem||v.ar)+'</span></div>';
return '<article class="vcard"><span class="mini">WORD '+String(i+1).padStart(2,'0')+' · '+E(v.type||'expression')+'</span><div class="v-title">'+AR(v.ar)+'</div><div class="roman">'+E(v.roman)+'</div><div class="trans en">'+E(v.en)+'</div><div class="trans ja">'+E(v.ja)+'</div>'+form+'<div class="usage"><span class="mini">EXAMPLE</span>'+FR(v.example)+'</div></article>'
}).join('')+'</div>');
add('Grammar you will actually use','GRAMMAR · THINK THEN SPEAK',D.grammar.map(function(g,i){return '<article class="grammar-card"><div class="mini">RULE '+(i+1)+'</div><h3>'+E(g.title)+'</h3><p class="en">'+E(g.en)+'</p><p class="ja">'+E(g.ja)+'</p>'+FR(g.example)+'<div class="teacher"><b>Teacher prompt:</b> '+E(g.drill)+'</div></article>'}).join(''));
add('12 high-use chunks','READY-TO-SAY SENTENCES','<p>Read aloud three times, then hide the translations and answer without looking.</p><div class="phrases">'+D.phrases.map(function(x,i){return '<div class="phrase"><b class="mini">'+String(i+1).padStart(2,'0')+'</b>'+FR(x)+'</div>'}).join('')+'</div>');
for(var k=0;k<D.dialogues.length;k++){
(function(d,ix){
add('Dialogue '+(ix+1)+' · '+d.title,'SPEAKING MODEL','<p><b>Round 1:</b> Read with the teacher. <b>Round 2:</b> Hide translations. <b>Round 3:</b> Change the details and swap roles.</p><div class="dialogue">'+d.turns.map(function(x){return '<div class="turn"><div class="speaker">'+E(x.role)+'</div>'+FR(x)+'</div>'}).join('')+'</div><div class="teacher"><b>Teacher variation:</b> '+E(d.twist)+'</div>');
})(D.dialogues[k],k)
}
D.classes.forEach(function(c,i){
var defaultRows=[['00–10','Warm up from memory. No notes.'],['10–25','Review old expressions with new details.'],['25–45','Introduce and drill the target grammar and words.'],['45–65','Listen, shadow and substitute words.'],['65–90','Role-play round 1 and 2; switch roles.'],['90–110','Surprise conversation with no script.'],['110–120','Three corrections, repeat, assign review.']];
add('Class '+(i+1)+' · '+c.name,'3 × 120-MINUTE LESSON PLANS','<div class="classhead"><b>'+E(c.day)+'</b><span>'+E(c.goal)+'</span></div><div class="schedule">'+defaultRows.map(function(r){return '<div class="schedule-row"><b>'+r[0]+'</b><span>'+E(r[1])+'</span></div>'}).join('')+'</div><h3>Role-play ladder / ロールプレイ</h3><div class="steps">'+c.missions.map(function(m,j){return '<div class="step"><b>Mission '+(j+1)+'</b><div>'+E(m.en)+'</div><p class="ja">'+E(m.ja)+'</p></div>'}).join('')+'</div><h3>Question bank for the teacher</h3><div class="qa-grid">'+c.questions.map(function(q){return '<div class="qcard">'+AR(q.ar)+'<div class="trans en">'+E(q.en)+'</div><div class="trans ja">'+E(q.ja)+'</div></div>'}).join('')+'</div><div class="teacher"><b>Teacher cue in simple English:</b> '+E(c.teacher)+'<br><b>Exit task:</b> '+E(c.exit)+'</div>');
});
add('Self-test and teacher answer key','ACTIVE RECALL','<p>Speak each answer before revealing the model. Different but correct Fuṣḥā answers are acceptable.</p><div class="testgrid">'+D.test.map(function(q,i){return '<div class="testq"><b>'+(i+1)+'. '+E(q.en)+'</b><div class="ja">'+E(q.ja)+'</div><div class="answer">'+FR(q.answer)+'</div></div>'}).join('')+'</div><h3>Performance check / 到達度</h3><div class="checks">'+D.checks.map(function(q,i){return '<label><input type="checkbox" data-progress="'+E('check-'+i)+'">'+E(q)+'</label>'}).join('')+'</div><div class="teacher"><b>Suggested rubric:</b> 0 = cannot yet, 1 = with prompts, 2 = independent. Rate: meaning / questions / pronunciation / flexibility. Keep the same scorecard in Week 12 for comparison.</div>');

if(D.assessment){
var A=D.assessment;
var optionHtml='<option value="">—</option>'+[0,1,2,3,4].map(function(n){return '<option value="'+n+'">'+n+'</option>'}).join('');
var rubricRows=A.criteria.map(function(x){
return '<div class="rubric-row"><div><b>'+E(x.en)+'</b><div class="ja">'+E(x.ja)+'</div><div class="fine">'+E(x.desc)+'</div></div><div><label class="small" for="rating-initial-'+E(x.key)+'">Initial</label><select id="rating-initial-'+E(x.key)+'" data-rating-key="initial-'+E(x.key)+'" aria-label="Initial '+E(x.en)+'">'+optionHtml+'</select></div><div><label class="small" for="rating-final-'+E(x.key)+'">Final</label><select id="rating-final-'+E(x.key)+'" data-rating-key="final-'+E(x.key)+'" aria-label="Final '+E(x.en)+'">'+optionHtml+'</select></div></div>'
}).join('');
var benchmark=A.benchmark.map(function(q,i){return '<div class="step"><b>Task '+(i+1)+'</b><p>'+E(q)+'</p></div>'}).join('');
var scale=A.scale.map(function(q){return '<li>'+E(q)+'</li>'}).join('');
var roadmap=A.roadmap.map(function(q,i){return '<div class="step"><b>Step '+(i+1)+'</b><p>'+E(q)+'</p></div>'}).join('');
add('Final speaking assessment · Scorecard','FINAL CHECKPOINT · RECORD & COMPARE',
'<p>'+E(A.note)+'</p><h3>Benchmark tasks / 共通評価タスク</h3><div class="steps">'+benchmark+'</div>'+
'<h3>Score definitions / 評価基準</h3><ul>'+scale+'</ul><p class="fine">Use the same benchmark tasks and scoring anchors at both time points. Empty fields are not counted.</p>'+
'<div class="rubric-header"><div>Evaluation dimension / 評価項目</div><div>Initial</div><div>Final</div></div>'+
rubricRows+
'<div class="rubric-scores"><div>Initial: <strong id="score-initial">— / 24</strong></div><div>Final: <strong id="score-final">— / 24</strong></div><div>Difference: <strong id="score-change">—</strong></div></div>'+
'<p class="fine">Scores are saved only in this browser. A score change describes these tasks, not a certified CEFR level.</p>'+
'<h3>Next 4 weeks / 修了後の学習</h3><div class="steps">'+roadmap+'</div>');
}

add('Pronunciation & real-life Arabic','FUṢḤĀ ↔ SPOKEN','<div class="two"><div class="panel"><h3>Fuṣḥā target / 標準語</h3><p>'+E(D.speaking.fusha)+'</p></div><div class="panel"><h3>Real conversation / 実際の会話</h3><p>'+E(D.speaking.real)+'</p></div></div><div class="teacher"><b>Keep the distinction clear:</b> The lesson uses Fuṣḥā. Any Syrian or Gulf alternative is a comparison, not a replacement for the model sentence. Word-final case endings are often omitted when speaking.</div>');
add('Homework and error log','SPACED PRACTICE','<div class="two"><div class="panel"><h3>Repeat for retention</h3><p><b>Today:</b> 5 min read and record.</p><p><b>Tomorrow:</b> 5 min from Japanese or English prompts.</p><p><b>3 days later:</b> 5 min role-play without notes.</p><p><b>Next week:</b> review 5 phrases in the warm-up.</p></div><div class="panel"><h3>Teacher notes / 講師メモ</h3><label class="small" for="note">Three corrections, useful expressions, next lesson needs:</label><textarea id="note" rows="8" placeholder="1. Pronunciation&#10;2. Grammar&#10;3. Useful phrase"></textarea><div class="fine">Stored only in this browser (not synced).</div></div></div>');
document.getElementById('content').innerHTML=lessonHeader()+'<nav class="section-nav" aria-label="Lesson sections">'+nav.join('')+'</nav>'+parts.join('')+'<footer>Fuṣḥā Study Studio · Week '+D.week+' · Lesson material for student and teacher · '+E(D.dates)+'</footer>';
var saved;
try{saved=JSON.parse(localStorage.getItem(id)||'{}')}catch(_){saved={}}
var done=document.querySelectorAll('[data-progress]');
done.forEach(function(x){x.checked=!!saved[x.dataset.progress];x.addEventListener('change',function(){saved[x.dataset.progress]=x.checked;persist()})});
document.getElementById('note').value=saved.note||'';document.getElementById('note').addEventListener('input',function(){saved.note=this.value;persist()});
function persist(){try{localStorage.setItem(id,JSON.stringify(saved))}catch(_){}}

if(D.assessment){
var els=document.querySelectorAll('[data-rating-key]');
function recompute(){
var totals={initial:{sum:0,count:0},final:{sum:0,count:0}};
els.forEach(function(x){var prefix=x.dataset.ratingKey.split('-')[0];if(x.value!==''){totals[prefix].sum+=Number(x.value);totals[prefix].count++}});
['initial','final'].forEach(function(k){var el=document.getElementById('score-'+k);if(el)el.textContent=totals[k].count===6?totals[k].sum+' / 24':totals[k].count+' / 6 rated'});
var diff=document.getElementById('score-change');
if(diff)diff.textContent=totals.initial.count===6&&totals.final.count===6?String(totals.final.sum-totals.initial.sum):'—';
}
els.forEach(function(x){var k=x.dataset.ratingKey;x.value=saved[k]===undefined?'':String(saved[k]);x.addEventListener('change',function(){saved[k]=x.value;persist();recompute()})});
recompute();
}

function prefs(){document.body.classList.toggle('hide-ja',!ui.ja);document.body.classList.toggle('hide-en',!ui.en);document.body.classList.toggle('show-answers',ui.answers);document.querySelectorAll('[data-switch]').forEach(function(b){var k=b.dataset.switch;b.setAttribute('aria-pressed',String(!!ui[k]));b.classList.toggle('selected',!!ui[k])})}
document.querySelectorAll('[data-switch]').forEach(function(b){b.addEventListener('click',function(){var k=b.dataset.switch;ui[k]=!ui[k];prefs()})});prefs();
function speak(s){var state=document.getElementById('voice-state');if(!('speechSynthesis' in window)){state.textContent='Arabic speech is unavailable in this browser.';return}window.speechSynthesis.cancel();var utt=new SpeechSynthesisUtterance(s);utt.lang='ar-SA';utt.rate=.78;var voices=window.speechSynthesis.getVoices().filter(function(v){return v.lang&&v.lang.toLowerCase().startsWith('ar')});if(voices.length)utt.voice=voices.find(function(v){return v.lang==='ar-SA'})||voices[0];state.textContent=voices.length?'Playing Arabic speech.':'Using the device default voice; install an Arabic voice if needed.';window.speechSynthesis.speak(utt)}
document.getElementById('content').addEventListener('click',function(ev){var el=ev.target.closest('[data-say]');if(el)speak(el.dataset.say)});
document.getElementById('content').addEventListener('keydown',function(ev){if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches('[data-say]')){ev.preventDefault();speak(ev.target.dataset.say)}});
})();
