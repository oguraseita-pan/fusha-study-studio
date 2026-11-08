(function(){
"use strict";
const lessons=window.FSS_FOUNDATION_LESSONS=window.FSS_FOUNDATION_LESSONS||{};
function phrase(a){return {ar:a[0],roman:a[1],en:a[2],ja:a[3]}}
function vocabulary(a){
 const v={type:({v:"verb",n:"noun",a:"adj",e:"expression"})[a[0]]||"expression",ar:a[1],roman:a[2],en:a[3],ja:a[4]};
 if(a[0]==="v"){v.past=a[5];v.present=a[6];v.me=a[7]||a[1];}
 if(a[0]==="n"){v.plural=a[5];v.gender=a[6]||"m";}
 if(a[0]==="a")v.fem=a[5];
 return v;
}
function make(n,src){
 const D={week:n,title:src.title,jaTitle:src.jaTitle,arTitle:src.arTitle,
 outcome:src.goals[0][0],jaOutcome:src.goals[0][1],
 goals:src.goals.map(x=>({en:x[0],ja:x[1]})),
 review:(src.review||[]).map(x=>({en:x[0],ja:x[1]})),
 vocab:src.vocab.map(vocabulary),
 grammar:src.grammar.map(g=>({title:g[0],titleJa:g[1],en:g[2],ja:g[3],example:phrase(g[4])})),
 phrases:src.phrases.map(phrase),
 dialogues:src.dialogues.map(x=>({title:{en:x[0],ja:x[1]},turns:x[2].map(y=>({role:y[0],...phrase(y.slice(1))}))})),
 classes:src.practice.map(x=>({goal:x[0],jaGoal:x[1],missions:x[2].map(y=>({en:y[0],ja:y[1]})),
 questions:(x[3]||[]).map(i=>phrase(src.phrases[i]))})),
 checks:src.goals.map(x=>({en:x[0],ja:x[1]}))
 };
 D.test=[0,2,4,6,8,10].filter(i=>D.phrases[i]).map(i=>({en:"Say: "+D.phrases[i].en,ja:"「"+D.phrases[i].ja+"」をアラビア語で言う",answer:D.phrases[i]}));
 lessons[n]=D;
 return D;
}
window.FSS_makeLesson=make;
})();