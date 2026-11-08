(function(){
"use strict";
const file=location.pathname.match(/lesson-(\d{2})\.html$/);
const lessonNo=file?Number(file[1]):0;
const D=window.LESSON_DATA||(window.FSS_FOUNDATION_LESSONS&&window.FSS_FOUNDATION_LESSONS[lessonNo]);
const root=document.getElementById("content");
if(!D||!root){if(root)root.textContent="教材を読み込めません。ホーム画面から再度開いてください。";return;}
const LS="fss-preferred-language-v2",PS="fss-lesson-completion-v4-"+lessonNo;
const labels={
ja:{home:"← 教材一覧",lesson:"レッスン",goal:"このレッスンでできること",review:"前回の復習",vocabulary:"単語と活用",grammar:"文法のポイント",chunks:"よく使う表現・チャンク",dialogues:"会話例",practice:"話す練習",quiz:"確認テスト",self:"習得チェック",after:"復習方法",verb:"動詞",noun:"名詞",adj:"形容詞",adverb:"副詞",expression:"表現",phrase:"表現",past:"完了形（彼）",imp:"未完了形（彼）",me:"未完了形（私）",plural:"複数形",fem:"女性形",gender:"性",m:"男性名詞",f:"女性名詞",example:"使用例",rule:"ポイント",step:"練習",speak:"声に出して答える",try:"まず日本語を見てアラビア語で答え、答えを表示して確認しましょう。",show:"答えを見る",hide:"答えを隠す",noNotes:"例文を聞いて繰り返し、最後は画面を見ずに話しましょう。",speaking:"アラビア語をタップすると音声が流れます。語末の母音は会話では省略することがあります。",today:"今日",tomorrow:"翌日",later:"3日後",week:"1週間後",todayDesc:"単語と会話例を音読し、聞き取れない部分を繰り返す。",tomorrowDesc:"日本語だけを見てアラビア語を思い出す。",laterDesc:"別の単語に置き換えて新しい文を作る。",weekDesc:"苦手な5表現をもう一度テストする。",complete:"できた",progress:"習得状況",done:"完了",audio:"アラビア語を再生",back:"戻る",prev:"前の課",next:"次の課",instructions:"学習の流れ",flow:"① 単語と文法を確認 ② 表現を聞いて音読 ③ 会話を練習 ④ 訳を隠して確認",practice1:"基本表現を使う",practice2:"状況を変えて練習",practice3:"見ずに話す",all:"アラビア語だけで練習",testName:"例文をアラビア語で言う"},
en:{home:"← All lessons",lesson:"Lesson",goal:"Learning goals",review:"Review",vocabulary:"Vocabulary and word forms",grammar:"Grammar in use",chunks:"Useful chunks",dialogues:"Model dialogues",practice:"Speaking practice",quiz:"Recall quiz",self:"Self-assessment",after:"Review plan",verb:"Verb",noun:"Noun",adj:"Adjective",adverb:"Adverb",expression:"Expression",phrase:"Expression",past:"Perfect (he)",imp:"Imperfect (he)",me:"Imperfect (I)",plural:"Plural",fem:"Feminine",gender:"Gender",m:"Masculine noun",f:"Feminine noun",example:"Example",rule:"Point",step:"Practice",speak:"Answer aloud",try:"Translate into Arabic before revealing the answer.",show:"Show answer",hide:"Hide answer",noNotes:"Listen and repeat the sentences, then speak without notes.",speaking:"Tap Arabic text to hear it. Final vowels may be dropped in ordinary speech.",today:"Today",tomorrow:"Tomorrow",later:"After 3 days",week:"After 1 week",todayDesc:"Read the vocabulary and dialogues aloud.",tomorrowDesc:"Recall Arabic using only the English prompts.",laterDesc:"Replace one word and make a new sentence.",weekDesc:"Retest five difficult chunks.",complete:"I can do it",progress:"Progress",done:"Done",audio:"Play Arabic",back:"Back",prev:"Previous",next:"Next",instructions:"Study flow",flow:"① Vocabulary and grammar ② Listen and repeat ③ Practise dialogues ④ Recall without translation",practice1:"Build the basics",practice2:"Change the situation",practice3:"Speak without notes",all:"Arabic-only practice",testName:"Say this in Arabic"},
ar:{home:"← الدُّرُوسُ",lesson:"الدَّرْسُ",goal:"أَهْدَافُ التَّعَلُّمِ",review:"مُرَاجَعَةٌ",vocabulary:"الْمُفْرَدَاتُ",grammar:"الْقَوَاعِدُ",chunks:"عِبَارَاتٌ مُهِمَّةٌ",dialogues:"الْحِوَارَاتُ",practice:"تَمَارِينُ الْكَلَامِ",quiz:"اِخْتَبِرْ نَفْسَكَ",self:"تَقْيِيمُ التَّقَدُّمِ",after:"خُطَّةُ الْمُرَاجَعَةِ",verb:"فِعْلٌ",noun:"اِسْمٌ",adj:"صِفَةٌ",adverb:"ظَرْفٌ",expression:"عِبَارَةٌ",phrase:"عِبَارَةٌ",past:"الْمَاضِي",imp:"الْمُضَارِعُ لِلْغَائِبِ",me:"الْمُضَارِعُ لِلْمُتَكَلِّمِ",plural:"الْجَمْعُ",fem:"الْمُؤَنَّثُ",gender:"الْجِنْسُ",m:"مُذَكَّرٌ",f:"مُؤَنَّثٌ",example:"مِثَالٌ",rule:"قَاعِدَةٌ",step:"تَمْرِينٌ",speak:"أَجِبْ بِصَوْتٍ عَالٍ",try:"قُلِ الْجُمْلَةَ ثُمَّ اكْشِفِ الْجَوَابَ",show:"أَظْهِرِ الْجَوَابَ",hide:"أَخْفِ الْجَوَابَ",noNotes:"اِسْتَمِعْ وَكَرِّرْ ثُمَّ تَكَلَّمْ دُونَ نَصٍّ",speaking:"اِضْغَطْ عَلَى النَّصِّ لِلسَّمَاعِ",today:"الْيَوْمَ",tomorrow:"غَدًا",later:"بَعْدَ ثَلَاثَةِ أَيَّامٍ",week:"بَعْدَ أُسْبُوعٍ",todayDesc:"اِسْتَمِعْ وَكَرِّرْ",tomorrowDesc:"تَذَكَّرِ الْعِبَارَاتِ",laterDesc:"غَيِّرْ كَلِمَةً",weekDesc:"رَاجِعِ الْعِبَارَاتِ",complete:"أَسْتَطِيعُ",progress:"التَّقَدُّمُ",done:"تَمَّ",audio:"اِسْتَمِعْ",back:"رُجُوعٌ",prev:"السَّابِقُ",next:"التَّالِي",instructions:"خُطُوَاتُ الدِّرَاسَةِ",flow:"اِقْرَأْ ثُمَّ اسْتَمِعْ ثُمَّ تَكَلَّمْ",practice1:"تَدَرَّبْ",practice2:"غَيِّرِ الْمَوْقِفَ",practice3:"تَكَلَّمْ مِنَ الذَّاكِرَةِ",all:"الْعَرَبِيَّةُ فَقَطْ",testName:"قُلْ بِالْعَرَبِيَّةِ"}};

const grammarJaHeadings={"9":["完了形・未完了形・人称変化","名詞と形容詞の性の一致","価格と必要数量の質問","丁寧な依頼表現"],"10":["電話する動詞と前置詞","電話での丁寧な依頼","「分からない・聞こえない」の否定","連絡先の確認と復唱"],"11":["旅行の方向と出発点","旅行の過去形と未来形","便と形容詞の性の一致","搭乗口・座席の場所を尋ねる"],"12":["未完了形の人称接頭辞","完了形の人称語尾","未来形と否定形","疑問詞・聞き返し・会話の継続"],"13":["好みを表す表現","比較級と前置詞 مِنْ","理由を表す لِأَنَّ","丁寧な賛成・反対"],"14":["丁寧に誘う表現","誘いへの承諾・辞退・理由","会う日時と場所を決める","未来の予定と誘い"],"15":["不具合を説明する表現","「まだ～していない」の لَمْ","丁寧に助けを求める","次の対応と詳細の確認"],"16":["取引条件の質問","必要性を表す يَجِبُ","条件文を表す إِذَا","次のアクションを確認する"],"17":["完了形の人称語尾","出来事を順序立てて話す","経験・感想を過去形で述べる","過去の否定形"],"18":["意見を表す أَعْتَقِدُ أَنَّ","理由と対比を伝える","未来の予定と希望","条件付きの予定を説明する"],"19":["聞き返し・確認・会話の修復","質問から依頼につなげる","過去・現在・未来を組み合わせる","数字・日時・場所の確認"],"20":["未完了形の人称変化","過去形と未来形の総復習","疑問文・否定文・依頼表現","名詞の性・複数形・格語尾"]};
const grammarArHeadings={"1":["الْفِعْلُ الْمُضَارِعُ","الْجُمْلَةُ الِاسْمِيَّةُ","أَدَوَاتُ الِاسْتِفْهَامِ"],"2":["الطَّلَبُ الْمُهَذَّبُ","مَعَ وَبِدُونِ","الْمُطَابَقَةُ بَيْنَ الِاسْمِ وَالصِّفَةِ"],"3":["السُّؤَالُ عَنِ السِّعْرِ","السُّؤَالُ عَنِ الْعَدَدِ","صِيغَةُ التَّفْضِيلِ"],"4":["حَرْفُ الْجَرِّ إِلَى","أَدَوَاتُ السُّؤَالِ","أَفْعَالُ الْأَمْرِ"],"5":["السُّؤَالُ عَنِ الْوَقْتِ","الْمُسْتَقْبَلُ بِالسِّينِ","الْمَوَاعِيدُ وَالْمُطَابَقَةُ"],"6":["الْمَاضِي وَضَمَائِرُ الْفَاعِلِ","نَفْيُ الْمَاضِي بِمَا","تَرْتِيبُ الْأَحْدَاثِ بِثُمَّ"],"7":["عِنْدِي لِلْمِلْكِيَّةِ","نَفْيُ الْمُضَارِعِ","الطَّلَبُ الْمُهَذَّبُ"],"8":["التَّعْبِيرُ عَنِ الْأَلَمِ","التَّعْبِيرُ عَنِ الْمُدَّةِ","طَلَبُ الْمُسَاعَدَةِ"],"9":["الْمَاضِي وَالْمُضَارِعُ","الْمُطَابَقَةُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ","السُّؤَالُ عَنِ السِّعْرِ وَالْكَمِّيَّةِ","الطَّلَبُ الْمُهَذَّبُ"],"10":["الِاتِّصَالُ وَحَرْفُ الْجَرِّ","الطَّلَبُ الْمُهَذَّبُ","النَّفْيُ وَعَدَمُ الْفَهْمِ","تَأْكِيدُ مَعْلُومَاتِ الِاتِّصَالِ"],"11":["مِنْ وَإِلَى فِي السَّفَرِ","الْمَاضِي وَالْمُسْتَقْبَلُ","الْمُطَابَقَةُ مَعَ الرِّحْلَةِ","السُّؤَالُ عَنِ الْمَكَانِ"],"12":["ضَمَائِرُ الْمُضَارِعِ","ضَمَائِرُ الْمَاضِي","الْمُسْتَقْبَلُ وَالنَّفْيُ","السُّؤَالُ وَالتَّوْضِيحُ"],"13":["التَّعْبِيرُ عَنِ التَّفْضِيلِ","صِيغَةُ التَّفْضِيلِ وَمِنْ","التَّعْلِيلُ بِلِأَنَّ","الْمُوَافَقَةُ وَالِاخْتِلَافُ"],"14":["الدَّعْوَةُ بِأُسْلُوبٍ مُهَذَّبٍ","الْقَبُولُ وَالِاعْتِذَارُ","تَحْدِيدُ الْوَقْتِ وَالْمَكَانِ","الدَّعْوَةُ وَالْمُسْتَقْبَلُ"],"15":["وَصْفُ الْمُشْكِلَةِ","لَمْ مَعَ الْفِعْلِ الْمُضَارِعِ","طَلَبُ الْمُسَاعَدَةِ","تَأْكِيدُ الْخُطْوَةِ التَّالِيَةِ"],"16":["السُّؤَالُ عَنْ شُرُوطِ التِّجَارَةِ","التَّعْبِيرُ عَنِ الضَّرُورَةِ","الشَّرْطُ بِإِذَا","تَلْخِيصُ الْخُطْوَةِ التَّالِيَةِ"],"17":["تَصْرِيفُ الْفِعْلِ الْمَاضِي","تَرْتِيبُ الْقِصَّةِ","وَصْفُ التَّجْرِبَةِ فِي الْمَاضِي","نَفْيُ الْمَاضِي"],"18":["التَّعْبِيرُ عَنِ الرَّأْيِ","الْأَسْبَابُ وَالْمُقَابَلَةُ","الْمُسْتَقْبَلُ وَالرَّغْبَةُ","الشَّرْطُ بِإِذَا"],"19":["طَلَبُ التَّوْضِيحِ وَالتَّأْكِيدِ","السُّؤَالُ وَالطَّلَبُ","الْمَاضِي وَالْحَاضِرُ وَالْمُسْتَقْبَلُ","تَأْكِيدُ الْأَرْقَامِ وَالْمَوَاعِيدِ"],"20":["تَصْرِيفُ الْمُضَارِعِ","الْمَاضِي وَالْمُسْتَقْبَلُ","الْأَسْئِلَةُ وَالنَّفْيُ وَالطَّلَبُ","الْجِنْسُ وَالْجَمْعُ وَالْإِعْرَابُ"]};

const dialogueJaHeadings={"9":["新しい顧客との初対面","価格・数量の相談","サンプルと次の対応"],"10":["会社へ電話する","聞き取れない内容を確認する","メール・メッセージでフォローする"],"11":["航空便のチェックイン","飛行機の遅延","荷物が見つからないとき"],"12":["カフェで友人と話す","顧客との電話と次回の打ち合わせ","空港とホテルでの問題"],"13":["カフェを選ぶ","2つの商品を比較する","日常生活の選択"],"14":["友人を夕食に誘う","週末の予定を決める","丁寧に予定を変更する"],"15":["住まいの修理を依頼する","配送遅延を確認する","一緒に解決策を考える"],"16":["価格と数量の商談","決済・納期条件を確認する","合意事項をまとめる"],"17":["週末の出来事を友人に話す","出張について説明する","問題が起きた経験を話す"],"18":["週末の計画を立てる","アラビア語の学習について話す","新規事業のアイデアを選ぶ"],"19":["レストラン予約と予定変更","タクシー・遅刻・電話","仕事の依頼・遅延・フォロー"],"20":["総合練習：初対面の会話","総合練習：予約と変更","総合練習：サンプルと納期"]};
const dialogueArHeadings={"9":["مُقَابَلَةُ عَمِيلٍ جَدِيدٍ","السِّعْرُ وَالْكَمِّيَّةُ","الْعَيِّنَاتُ وَالْخُطْوَةُ التَّالِيَةُ"],"10":["مُكَالَمَةُ شَرِكَةٍ","طَلَبُ التَّوْضِيحِ","الْمُتَابَعَةُ كِتَابِيًّا"],"11":["إِجْرَاءَاتُ السَّفَرِ","تَأَخُّرُ الرِّحْلَةِ","فَقْدُ الْأَمْتِعَةِ"],"12":["صَدِيقٌ فِي الْمَقْهَى","اتِّصَالٌ بِعَمِيلٍ","مُشْكِلَةٌ فِي الْمَطَارِ وَالْفُنْدُقِ"],"13":["اخْتِيَارُ مَقْهًى","مُقَارَنَةُ مُنْتَجَيْنِ","خِيَارَاتُ الْحَيَاةِ الْيَوْمِيَّةِ"],"14":["دَعْوَةُ صَدِيقٍ إِلَى الْعَشَاءِ","التَّخْطِيطُ لِعُطْلَةِ نِهَايَةِ الْأُسْبُوعِ","تَغْيِيرُ الْخُطَّةِ بِأَدَبٍ"],"15":["طَلَبُ صِيَانَةِ الشَّقَّةِ","الْمُتَابَعَةُ عِنْدَ تَأَخُّرِ التَّسْلِيمِ","إِيجَادُ حَلٍّ مَعًا"],"16":["السِّعْرُ وَالْكَمِّيَّةُ","شُرُوطُ الدَّفْعِ وَالتَّسْلِيمِ","تَلْخِيصُ الْاتِّفَاقِ"],"17":["الْحَدِيثُ عَنْ نِهَايَةِ الْأُسْبُوعِ","شَرْحُ رِحْلَةِ عَمَلٍ","قِصَّةٌ فِيهَا مُشْكِلَةٌ"],"18":["خُطَّةُ نِهَايَةِ الْأُسْبُوعِ","تَعَلُّمُ الْعَرَبِيَّةِ","اخْتِيَارُ فِكْرَةٍ تِجَارِيَّةٍ"],"19":["حَجْزُ مَطْعَمٍ وَتَغْيِيرُ الْخُطَّةِ","سَيَّارَةُ الْأُجْرَةِ وَالتَّأَخُّرُ","طَلَبُ عَمَلٍ وَالْمُتَابَعَةُ"],"20":["التَّعَارُفُ","الْحَجْزُ وَالتَّغْيِيرُ","الْعَيِّنَاتُ وَالتَّأْخِيرُ"]};
const words={ja:{1:"1",2:"2",3:"3"},en:{1:"1",2:"2",3:"3"},ar:{1:"١",2:"٢",3:"٣"}};
let lang="ja";try{lang=localStorage.getItem(LS)||"ja"}catch(e){}if(!labels[lang])lang="ja";
let completion=[];try{completion=JSON.parse(localStorage.getItem(PS)||"[]")}catch(e){}if(!Array.isArray(completion))completion=[];
const escape=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function locale(v){
 if(v==null)return "";
 if(typeof v==="object")return String(v[lang]||v.ja||v.en||"");
 const s=String(v);
 if(s.includes(" / ")){const parts=s.split(" / ");return lang==="ja"?(parts.slice(1).join(" / ")||parts[0]):parts[0]}
 return s;
}
function jaOnly(v){if(typeof v==="object")return String(v.ja||"");const x=String(v||"").split(" / ");return x.slice(1).join(" / ")||""}
function text(a,b,c){return escape(lang==="ja"?b:lang==="ar"?c:a)}
const t=()=>labels[lang];
const heading=(en,ja,ar)=>text(en,ja,ar);
const ar=s=>s?'<button type="button" class="fss-ar" lang="ar" dir="rtl" data-say="'+escape(s)+'" title="'+escape(t().audio)+'">'+escape(s)+'<span class="fss-play" aria-hidden="true">◖))</span></button>':"";
const caption=(x,cl="")=>lang==="ar"?"":'<div class="fss-translation '+cl+'">'+escape(locale(x))+'</div>';
function grammarCaption(g){
 if(lang==="ar")return "";
 const content=lang==="ja"?g.ja:g.en;
 return '<p class="fss-description">'+escape(content||"")+'</p>';
}
function title(){return lang==="ja"?D.jaTitle||D.title:lang==="ar"?D.arTitle||D.title:D.title}
function goalList(){return (D.goals||[]).map(x=>({en:localeBy(x,"en"),ja:localeBy(x,"ja")}))}
function localeBy(v,language){if(v&&typeof v==="object")return v[language]||v.en||"";let s=String(v||"");let a=s.split(" / ");return language==="ja"?(a.slice(1).join(" / ")||""):a[0]}
function titleAndContent(k,markup,extra){return '<section class="fss-unit" id="fss-'+k+'"><h2 class="fss-h2">'+escape(t()[k])+'</h2>'+(extra||"")+markup+'</section>'}
function draw(){
 document.documentElement.lang=lang;
 document.body.dataset.studyLanguage=lang;
 const goals=goalList();
 const completeCount=goals.filter((g,i)=>completion.includes(i)).length;
 const topic=title();
 const help='<p class="fss-note">'+escape(t().speaking)+'</p>';
 const hero='<header class="fss-hero"><div class="fss-overline">'+(lang==="ar"?"دُرُوسُ الْعَرَبِيَّةِ":"FUṢḤĀ STUDY STUDIO")+' · '+escape(t().lesson)+' '+String(lessonNo).padStart(2,"0")+'</div><h1>'+escape(topic)+'</h1>'+'<div class="fss-feature-ar">'+ar(D.arTitle)+'</div><p class="fss-hero-target">'+escape(lang==="ja"?D.jaOutcome||goals.slice(0,2).map(g=>g.ja).filter(Boolean).join("。"):lang==="en"?D.outcome||"":"")+'</p></header>';
 const aGoals='<div class="fss-list">'+goals.map((g,i)=>'<label class="fss-goal"><input type="checkbox" data-goal="'+i+'" '+(completion.includes(i)?"checked":"")+'><span>'+escape(lang==="ar"?"✓":lang==="ja"?g.ja:g.en)+'</span></label>').join("")+'</div>';
 const goalsContent=lang==="ar"?'<div class="fss-list">'+goals.map((g,i)=>'<label class="fss-goal fss-ar-goal"><input type="checkbox" data-goal="'+i+'" '+(completion.includes(i)?"checked":"")+'><span lang="ar" dir="rtl">'+escape(D.phrases?.[i*3]?.ar||t().complete)+'</span></label>').join("")+'</div>':aGoals;
 const head=titleAndContent("goal",goalsContent,'<div class="fss-progress">'+escape(t().progress)+'：'+completeCount+'/'+goals.length+'</div>');
 const review=(lang==="ar"?[]:(D.review||[])).map((x,i)=>'<article class="fss-review-card"><span class="fss-num">'+String(i+1).padStart(2,"0")+'</span>'+(lang==="ar"?'<p class="fss-description-ar">'+escape(t().noNotes)+'</p>':'<p>'+escape(locale(x))+'</p>')+'</article>').join("");
 const reviewBlock=review?titleAndContent("review",'<div class="fss-review-grid">'+review+'</div>'):"";
 const vocab=(D.vocab||[]).map((v,i)=>{
  const kind=t()[v.type]||t().phrase;
  const forms=[];
  if(v.type==="verb"){
   if(v.past)forms.push([t().past,v.past]);
   if(v.present)forms.push([t().imp,v.present]);
   if(v.me)forms.push([t().me,v.me]);
  }else if(v.type==="noun"){
   if(v.plural)forms.push([t().plural,v.plural]);
   if(v.gender)forms.push([t().gender,/^f/i.test(v.gender)?t().f:t().m]);
  }else if(v.type==="adj"&&v.fem)forms.push([t().fem,v.fem]);
  const formsHtml=forms.length?'<div class="fss-forms">'+forms.map(pair=>'<div class="fss-form"><small>'+escape(pair[0])+'</small>'+(/[\u0600-\u06ff]/.test(pair[1])?ar(pair[1]):'<b>'+escape(pair[1])+'</b>')+'</div>').join("")+'</div>':"";
  let example=v.example&&v.example.ar?'<div class="fss-example"><small>'+escape(t().example)+'</small>'+ar(v.example.ar)+caption(v.example)+'</div>':"";
  return '<article class="fss-vocab-card"><div class="fss-card-top"><b>#'+String(i+1).padStart(2,"0")+'</b><span>'+escape(kind)+'</span></div>'+ar(v.ar)+(lang!=="ar"?(v.roman?'<div class="fss-roman">'+escape(v.roman)+'</div>':"")+caption(v):"")+formsHtml+example+'</article>';
 }).join("");
 const grammar=(D.grammar||[]).map((g,i)=>'<article class="fss-grammar-card"><div class="fss-card-top"><b>'+escape(t().rule)+' '+(i+1)+'</b></div>'+(lang==="en"&&g.title?'<h3>'+escape(typeof g.title==="object"?g.title.en:g.title)+'</h3>':lang==="ja"?'<h3>'+escape(g.titleJa||grammarJaHeadings[lessonNo]?.[i]||t().rule+" "+(i+1))+'</h3>':'<h3 class="fss-ar-subtitle" lang="ar" dir="rtl">'+escape(grammarArHeadings[lessonNo]?.[i]||t().rule+" "+(i+1))+'</h3>')+grammarCaption(g)+(g.example?.ar?'<div class="fss-example">'+ar(g.example.ar)+caption(g.example)+'</div>':"")+'</article>').join("");
 const chunks=(D.phrases||[]).map((p,i)=>'<article class="fss-chunk"><div class="fss-index">'+String(i+1).padStart(2,"0")+'</div><div class="fss-chunk-body">'+ar(p.ar)+(lang!=="ar"?(p.roman?'<div class="fss-roman">'+escape(p.roman)+'</div>':"")+caption(p):"")+'</div></article>').join("");
 const dialogues=(D.dialogues||[]).map((d,i)=>'<section class="fss-dialogue"><h3>'+escape(lang==="ja"?"会話例 "+(i+1)+" · "+(d.title?.ja||dialogueJaHeadings[lessonNo]?.[i]||"会話練習"):lang==="ar"?"حِوَارٌ "+(i+1)+" · "+(dialogueArHeadings[lessonNo]?.[i]||"الْمُحَادَثَةُ"):("Dialogue "+(i+1)+(d.title?" · "+(typeof d.title==="object"?d.title.en:d.title):"")))+'</h3><div class="fss-turns">'+(d.turns||[]).map(x=>'<div class="fss-turn"><span class="fss-role">'+escape(x.role||"•")+'</span><div>'+ar(x.ar)+(lang!=="ar"?(x.roman?'<div class="fss-roman">'+escape(x.roman)+'</div>':"")+caption(x):"")+'</div></div>').join("")+'</div></section>').join("");
 const classes=(D.classes||[]).map((p,i)=>'<article class="fss-practice-step"><h3>'+escape(t()["practice"+(i+1)]||t().step+" "+(i+1))+'</h3>'+(lang==="ar"||lang==="ja"&&!p.jaGoal?"":'<p class="fss-description">'+escape(lang==="ja"?p.jaGoal:p.goal||"")+'</p>')+'<div class="fss-list">'+(lang==="ar"?(D.phrases||[]).slice(i*3,i*3+2).map(q=>({ar:q.ar})):(p.missions||[])).map((m,j)=>'<div class="fss-mission"><span class="fss-step-num">'+String(j+1).padStart(2,"0")+'</span><span>'+(lang==="ar"?ar(m.ar):escape(locale(m)))+'</span></div>').join("")+'</div>'+(p.questions?.length?'<div class="fss-questionbank"><h4>'+escape(t().speak)+'</h4>'+p.questions.map(q=>'<div>'+ar(q.ar)+caption(q)+'</div>').join("")+'</div>':"")+'</article>').join("");
 const tests=(D.test||[]).map((q,i)=>{
  const cue=lang==="ar"?t().testName:locale(q);
  return '<article class="fss-test-card"><div class="fss-test-question"><b>'+(i+1)+'.</b> '+escape(cue)+(lang==="ar"?'<button type="button" class="fss-listen-btn" data-say="'+escape(q.answer?.ar||"")+'" aria-label="'+escape(t().audio)+'">🔊 '+escape(t().audio)+'</button>':"")+'</div><button type="button" class="fss-reveal" data-reveal="'+i+'" aria-expanded="false">'+escape(t().show)+'</button><div class="fss-model" id="fss-answer-'+i+'" hidden>'+ar(q.answer?.ar)+(lang!=="ar"?caption(q.answer):"")+'</div></article>';
 }).join("");

 const assessment=D.assessment;
 let assessmentBlock="";
 if(assessment&&assessment.criteria&&assessment.criteria.length){
  const saved=(()=>{try{return JSON.parse(localStorage.getItem("fss-speaking-rubric-v4-"+lessonNo)||"{}")}catch(e){return {}}})();
  const name=lang==="ja"?["初回","再評価"]:lang==="ar"?["الْأَوَّلُ","الثَّانِي"]:["First","Later"];
  const select=(part,c)=>'<select data-rating="'+escape(part+"-"+c.key)+'" aria-label="'+escape((lang==="ja"?c.ja:c.en)+" "+part)+'"><option value="">—</option>'+[0,1,2,3,4].map(i=>'<option value="'+i+'"'+(saved[part+"-"+c.key]===String(i)?' selected':'')+'>'+i+'</option>').join("")+'</select>';
  const rows=assessment.criteria.map(c=>'<div class="fss-rating-row"><b>'+escape(lang==="ja"?c.ja:lang==="ar"?"✓":c.en)+'</b>'+select("initial",c)+select("final",c)+'</div>').join("");
  const prompts=assessment.benchmark.map((x,i)=>'<div class="fss-mission"><span class="fss-step-num">'+(i+1)+'</span><span>'+escape(lang==="ar"?t().speak:locale(x))+'</span></div>').join("");
  const scales=lang==="ar"?"":'<ul>'+assessment.scale.map(x=>'<li>'+escape(locale(x))+'</li>').join("")+'</ul>';
  const intro=lang==="ja"?"これは自分の成長を比較するための目安であり、CEFRの公式認定ではありません。同じ課題を初回と再評価で行ってください。":lang==="ar"?"هَذَا لِتَقْيِيمِ تَقَدُّمِكَ فَقَطْ":assessment.note;
  const html='<p class="fss-note">'+escape(intro)+'</p><h3>'+escape(lang==="ja"?"共通評価課題":lang==="ar"?"مَهَامُ التَّقْيِيمِ":"Benchmark tasks")+'</h3><div class="fss-list">'+prompts+'</div>'+scales+
  '<div class="fss-rating-row fss-rating-header"><b>'+escape(t().self)+'</b><b>'+escape(name[0])+'</b><b>'+escape(name[1])+'</b></div>'+rows+
  '<div id="fss-rating-result" class="fss-rating-result" aria-live="polite"></div>';
  assessmentBlock=titleAndContent("self",html);
 }
 const sections=[
  head,reviewBlock,
  titleAndContent("vocabulary",'<div class="fss-vocab-grid">'+vocab+'</div>'),
  titleAndContent("grammar",'<div class="fss-grammar-grid">'+grammar+'</div>'),
  titleAndContent("chunks",'<div class="fss-chunks">'+chunks+'</div>',help),
  titleAndContent("dialogues",dialogues),
  titleAndContent("practice",'<div class="fss-practice-grid">'+classes+'</div>','<p class="fss-note">'+escape(t().noNotes)+'</p>'),
  titleAndContent("quiz",'<div class="fss-tests">'+tests+'</div>','<p class="fss-note">'+escape(t().try)+'</p>'),
  assessmentBlock,
  titleAndContent("after",'<div class="fss-review-grid">'+[[t().today,t().todayDesc],[t().tomorrow,t().tomorrowDesc],[t().later,t().laterDesc],[t().week,t().weekDesc]].map(v=>'<div class="fss-review-card"><b>'+escape(v[0])+'</b><p>'+escape(v[1])+'</p></div>').join("")+'</div>')
 ].join("");
 const nav='<div class="fss-lesson-bar"><a class="fss-home" href="../index.html">'+escape(t().home)+'</a><span class="fss-lesson-serial">'+escape(t().lesson)+' '+String(lessonNo).padStart(2,"0")+'</span><div class="fss-language" role="group" aria-label="Learning language"><button data-lang="ja" aria-pressed="'+(lang==="ja")+'">日本語</button><button data-lang="en" aria-pressed="'+(lang==="en")+'">English</button><button data-lang="ar" lang="ar" aria-pressed="'+(lang==="ar")+'">العَرَبِيَّةُ</button></div></div>';
 const bottom='<div class="fss-lesson-links">'+(lessonNo>1?'<a href="lesson-'+String(lessonNo-1).padStart(2,"0")+'.html">← '+escape(t().prev)+'</a>':'<span></span>')+(lessonNo<20?'<a href="lesson-'+String(lessonNo+1).padStart(2,"0")+'.html">'+escape(t().next)+' →</a>':'<a href="../index.html">'+escape(t().home)+'</a>')+'</div>';
 root.innerHTML=nav+'<div class="fss-lesson-wrap">'+hero+'<p class="fss-study-flow">'+escape(t().flow)+'</p>'+sections+bottom+'</div>';
 if(assessmentBlock)updateRatingSummary();
 const currentNav=document.querySelector("#fss-nav");
 if(currentNav)currentNav.setAttribute("data-fss-content-version",String(Date.now()));
}
function updateRatingSummary(){
 const result=root.querySelector("#fss-rating-result");if(!result)return;
 const entries={initial:{sum:0,count:0},final:{sum:0,count:0}};
 root.querySelectorAll("[data-rating]").forEach(el=>{
  if(el.value==="")return;
  const part=el.dataset.rating.split("-")[0];
  if(entries[part]){entries[part].sum+=Number(el.value);entries[part].count++}
 });
 const max=(D.assessment?.criteria?.length||6)*4;
 result.textContent=(lang==="ja"?"初回":lang==="ar"?"الْأَوَّلُ":"First")+" "+entries.initial.count+"/"+(D.assessment.criteria.length)+"："+entries.initial.sum+"/"+max+" · "+(lang==="ja"?"再評価":lang==="ar"?"الثَّانِي":"Later")+" "+entries.final.count+"/"+(D.assessment.criteria.length)+"："+entries.final.sum+"/"+max;
}
function say(s){
 if(!("speechSynthesis" in window))return;
 window.speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(s);u.lang="ar-SA";u.rate=.8;
 const vv=window.speechSynthesis.getVoices().filter(x=>/^ar/i.test(x.lang));
 if(vv.length)u.voice=vv.find(x=>x.lang==="ar-SA")||vv[0];
 window.speechSynthesis.speak(u);
}
root.addEventListener("click",ev=>{
 const switcher=ev.target.closest("[data-lang]");
 if(switcher){const next=switcher.dataset.lang;if(!labels[next])return;const scroll=window.scrollY;lang=next;try{localStorage.setItem(LS,lang)}catch(e){}draw();window.scrollTo(0,scroll);return}
 const sound=ev.target.closest("[data-say]");
 if(sound){say(sound.dataset.say);return}
 const quiz=ev.target.closest("[data-reveal]");
 if(quiz){
  const panel=document.getElementById("fss-answer-"+quiz.dataset.reveal);
  if(!panel)return;panel.hidden=!panel.hidden;quiz.setAttribute("aria-expanded",String(!panel.hidden));quiz.textContent=panel.hidden?t().show:t().hide;
 }
});
root.addEventListener("change",ev=>{
 const rating=ev.target.closest("[data-rating]");
 if(rating){
  const key="fss-speaking-rubric-v4-"+lessonNo;
  let saved={};try{saved=JSON.parse(localStorage.getItem(key)||"{}")}catch(e){}
  saved[rating.dataset.rating]=rating.value;
  try{localStorage.setItem(key,JSON.stringify(saved))}catch(e){}
  updateRatingSummary();
  return;
 }
 const goal=ev.target.closest("[data-goal]");
 if(!goal)return;
 const i=Number(goal.dataset.goal);
 completion=completion.filter(x=>x!==i);
 if(goal.checked)completion.push(i);
 try{localStorage.setItem(PS,JSON.stringify(completion))}catch(e){}
 const bar=root.querySelector(".fss-progress");
 if(bar)bar.textContent=t().progress+"："+completion.length+"/"+(D.goals||[]).length;
});
document.addEventListener("keydown",ev=>{if((ev.key==="Enter"||ev.key===" ")&&ev.target.matches("[data-say]")){ev.preventDefault();say(ev.target.dataset.say)}});
draw();
})();