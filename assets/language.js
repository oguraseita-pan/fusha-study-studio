(function languageBoot() {
  "use strict";
  const file = decodeURIComponent(location.pathname.split("/").pop() || "");
  const grammarEn = file === "grammar-en.html";
  const grammarJa = file === "grammar-ja.html";
  const lesson1 = file === "lesson-01.html";
  const lesson2 = file === "lesson-02.html";
  const conversation = file === "conversation.html";
  if (!(grammarEn || grammarJa || lesson1 || lesson2 || conversation)) return;
  const K = "fss-preferred-language-v2";
  const allowed = ["en", "ja", "ar"];
  let mode = localStorage.getItem(K) || (grammarJa || conversation ? "ja" : "en");
  if (!allowed.includes(mode)) mode = "en";

  const jaTranslations = {
    "I am Japanese.":"私は日本人です。","She is a teacher.":"彼女は先生です。",
    "I work at a Japanese company.":"私は日本の会社で働いています。",
    "I study Arabic.":"私はアラビア語を勉強しています。",
    "I go to the office in the morning.":"私は朝、オフィスへ行きます。",
    "I work from nine to five.":"9時から5時まで働きます。",
    "I return home after work.":"仕事が終わったら家に帰ります。",
    "I study Arabic in the evening.":"夜にアラビア語を勉強します。",
    "I speak English at work.":"仕事では英語を話します。",
    "Sometimes I want coffee after work.":"仕事の後に時々コーヒーが飲みたくなります。",
    "I do not understand.":"分かりません。",
    "Again, please. (to a man)":"もう一度お願いします。（男性に）",
    "Slowly, please. (to a man)":"ゆっくりお願いします。（男性に）",
    "What does this mean?":"これはどういう意味ですか？",
    "How do I say this in Arabic?":"これはアラビア語で何と言いますか？",
    "Can you repeat the question? (to a man)":"質問をもう一度言ってもらえますか？（男性に）",
    "Peace be upon you / Hello.":"こんにちは。／あなたに平安を。",
    "And peace be upon you.":"あなたにも平安を。",
    "What is your name? (to a man)":"お名前は何ですか？（男性に）",
    "My name is Ahmad. And what is your name?":"私の名前はアフマドです。あなたのお名前は？",
    "My name is Kenji. I am from Japan.":"私はケンジです。日本出身です。",
    "Where do you live?":"どこに住んでいますか？",
    "I live in Dubai. And you?":"ドバイに住んでいます。あなたは？",
    "I also live in Dubai.":"私もドバイに住んでいます。",
    "When do you go to the office?":"いつオフィスに行きますか？",
    "I go in the morning.":"朝に行きます。",
    "Where do you work?":"どこで働いていますか？",
    "What do you do after work?":"仕事の後は何をしますか？",
    "I go home, then I study Arabic.":"家に帰って、それからアラビア語を勉強します。",
    "Do you study every day?":"毎日勉強していますか？",
    "Yes, I study every day.":"はい、毎日勉強しています。",
    "My name is Sami. I live in Dubai. I go to the office in the morning. I work in a company. I return home in the evening.":"私はサーミーです。ドバイに住んでいます。朝に出勤し、会社で働いて、夕方帰宅します。",
    "Hello! Is this seat free?":"こんにちは！この席は空いていますか？",
    "Yes, please sit / go ahead.":"はい、どうぞ座ってください。",
    "Thanks. My name is Kenji. What is your name?":"ありがとうございます。私はケンジです。お名前は？",
    "My name is Sami. Where do you work?":"サーミーです。どちらで働いていますか？",
    "I work at an office in Dubai.":"ドバイのオフィスで働いています。",
    "Do you study Arabic?":"アラビア語を勉強していますか？",
    "Yes. And would you like coffee?":"はい。コーヒーはいかがですか？",
    "Yes, I would like coffee, please.":"はい、コーヒーをお願いします。",
    "I work in a company.":"私は会社で働いています。",
    "I live in Dubai.":"ドバイに住んでいます。",
    "I go to the office.":"オフィスに行きます。",
    "I return home.":"家に帰ります。",
    "I want coffee.":"コーヒーが欲しいです。",
    "I do not understand the question.":"質問が分かりません。",
    "I speak Japanese.":"日本語を話します。",
    "What is your name? (man)":"お名前は何ですか？（男性に）",
    "This is a Japanese company.":"これは日本の会社です。",
    "I am in the office.":"私はオフィスにいます。",
    "I go back home.":"家に帰ります。",
    "Arabic is a beautiful language.":"アラビア語は美しい言語です。",
    "I have work today.":"今日は仕事があります。",
    "I would like coffee.":"コーヒーをお願いします。",
    "Where do you live? (man)":"どこに住んでいますか？（男性に）",
    "What do you study? (man)":"何を勉強していますか？（男性に）",
    "When do you return? (man)":"いつ戻りますか？（男性に）",
    "Do you understand? (man)":"分かりますか？（男性に）",
    "I am from Japan.":"私は日本出身です。",
    "I work in Dubai.":"ドバイで働いています。",
    "I study after work.":"仕事の後で勉強します。",
    "I learn every day.":"毎日学びます。",
    "What do you do after work? (man)":"仕事の後は何をしますか？（男性に）",
    "I do not understand. Again, please.":"分かりません。もう一度お願いします。",
    "Would you like a coffee? (man)":"コーヒーはいかがですか？（男性に）",
    "I would like water.":"水をお願いします。",
    "I would like tea.":"お茶をお願いします。",
    "I do not want juice.":"ジュースは要りません。",
    "I would like hot tea.":"温かいお茶をお願いします。",
    "I would like cold coffee.":"冷たいコーヒーをお願いします。",
    "Do you want water? (to a man)":"水は要りますか？（男性に）",
    "What would you like to drink? (to a man)":"何をお飲みになりますか？（男性に）",
    "How much is this?":"これはいくらですか？",
    "Do you have tea? (speaking to staff)":"お茶はありますか？（店員に）",
    "The coffee is hot.":"コーヒーは温かいです。",
    "The food is delicious.":"料理はおいしいです。",
    "I do not want sugar.":"砂糖は要りません。",
    "How much is this coffee?":"このコーヒーはいくらですか？",
    "It costs fifteen dirhams.":"15ディルハムです。",
    "Sorry, we do not have juice today.":"申し訳ありません。今日はジュースがありません。",
    "Okay, I would like tea instead.":"分かりました。代わりにお茶をお願いします。",
    "Sorry, I want cold coffee, not hot coffee.":"すみません。温かいコーヒーではなく、冷たいコーヒーをお願いします。",
    "I would like the bill, please.":"お会計をお願いします。",
    "Can I pay by card?":"カードで払えますか？",
    "Hello! What would you like to drink?":"こんにちは！何をお飲みになりますか？",
    "I would like coffee, please.":"コーヒーをお願いします。",
    "Would you like it hot or cold?":"温かいものと冷たいもの、どちらがよいですか？",
    "Hot, please.":"温かい方でお願いします。",
    "Would you like milk?":"ミルクは入れますか？",
    "Yes, with milk, without sugar.":"はい、ミルク入りで、砂糖なしでお願いします。",
    "Okay.":"かしこまりました。",
    "Thank you.":"ありがとうございます。",
    "You are welcome.":"どういたしまして。",
    "Hello. Do you have a table for one?":"こんにちは。1人用の席はありますか？",
    "Yes, please come in. Here is the menu.":"はい、どうぞお入りください。こちらがメニューです。",
    "Thanks. How much is this meal?":"ありがとうございます。この料理はいくらですか？",
    "Twenty-five dirhams.":"25ディルハムです。",
    "Good. I want this meal and water.":"では、この料理と水をお願いします。",
    "Would you like tea too?":"お茶もいかがですか？",
    "No, thank you.":"いいえ、結構です。",
    "All right.":"承知しました。",
    "I eat at the restaurant.":"レストランで食べます。",
    "I drink water.":"水を飲みます。",
    "I order tea.":"お茶を注文します。",
    "I want a meal.":"食事が欲しいです。",
    "I prefer coffee.":"コーヒーの方が好きです。",
    "I pay the bill.":"会計を払います。",
    "Do you have tea?":"お茶はありますか？",
    "I drink juice.":"ジュースを飲みます。",
    "This is a good restaurant.":"ここは良いレストランです。",
    "I would like the menu.":"メニューをお願いします。",
    "This is a tasty meal.":"これはおいしい料理です。",
    "This is a small table.":"これは小さなテーブルです。",
    "I would like the bill.":"お会計をお願いします。",
    "Water, please.":"お水をお願いします。",
    "Do you have juice?":"ジュースはありますか？",
    "How much is this tea?":"このお茶はいくらですか？",
    "With milk, without sugar.":"ミルク入り、砂糖なしでお願いします."
  };
  const phraseEnglish = [
    "Hello / Peace be upon you.","And peace be upon you.","Good morning.","Good morning (reply).","Good evening.",
    "How are you? (to a man)","I am fine, thank you.","Nice to meet you. (to a man)","See you again.","Goodbye.",
    "What is your name? (to a man)","My name is ...","Where are you from? (to a man)","I am from Japan.","Where do you live? (to a man)",
    "I live in Dubai.","What do you do for work? (to a man)","I work for a Japanese company.","I am learning Arabic.","I speak a little Arabic.",
    "I did not understand.","Speak slowly, please. (to a man)","Could you repeat that? (to a man)","What does this mean?","How do I say this in Arabic?",
    "Do you speak English? (to a man)","I know this word.","I do not know.","Is this correct?","Please help me. (to a man)",
    "Do you have a table for two?","May I have the menu, please?","What would you recommend I order? (to a man)","I would like this dish.","Water, please.",
    "Coffee without sugar, please.","Is this dish spicy?","I am vegetarian. (male speaker)","Without onions, please.","The bill, please.",
    "Can I pay by card?","The food was delicious.","How much is this?","What is the price of this?","Do you have a bigger size?",
    "Do you have this in black?","May I try this on?","This is very expensive.","Is there a discount?","I will take this.",
    "I am just looking.","Where is the cashier?","Where is the bathroom?","Where is the metro station?","How do I get to the airport?",
    "Is it far?","Can I walk there?","Go straight. (to a man)","Turn right. (to a man)","Turn left. (to a man)",
    "It is next to the bank.","I do not know the way.","I want to go to the airport.","Take me to this address, please.","How long does it take?",
    "About how much will it cost?","Can you wait here? (to a man)","Stop here, please.","I am in a bit of a hurry.","Can I pay by card?",
    "Please send me the location. (to a man)","Is this the right place?","I have a reservation under ...","I would like to check in.","What time is checkout?",
    "Is breakfast included?","What is the Wi-Fi password?","The air conditioning is not working.","I need another towel.","Can I change rooms?",
    "Where is the elevator?","I would like to extend my stay.","What time is it now?","It is nine o'clock.","When does the meeting start?",
    "Are you free tomorrow? (to a man)","Let's meet at five.","Can we start earlier?","Can we postpone the appointment?","I will arrive in ten minutes.",
    "I am a little late.","Is Thursday convenient for you?","Do you have a moment?","I would like to discuss this issue.","Could you send the file?",
    "When will it be ready?","I will review it and reply to you.","Is everything clear?","I sent the email.","We need more time.",
    "Let's confirm the appointment.","Thank you for your cooperation.","How was your day?","What do you like to do on weekends?","I like travelling.",
    "Would you like to have coffee together?","It is hot today.","Do you have any plans for tomorrow?","I am busy today.","Maybe tomorrow.",
    "It was nice meeting you.","Let's talk later.","I need help.","I feel sick.","I have a sore throat.",
    "I have a fever.","Where is the nearest pharmacy?","I need a doctor.","I am allergic to ...","Is there a hospital nearby?",
    "Call an ambulance, please.","I lost my phone.","Where is this flight's check-in counter?","Here is my passport.","I have one suitcase.",
    "Where is the boarding gate?","When does boarding start?","The flight is delayed.","Is this flight going to Dubai?","Where is baggage claim?",
    "My suitcase did not arrive.","I need help."
  ];
  const phraseCategories = [
    "Greetings and goodbyes","Introduction, home and work","Asking for repetition and clarification",
    "Restaurant and café","Shopping, prices and payments","Directions and locations","Taxi and travel",
    "Hotel and accommodation","Time and appointments","Work and office","Small talk and invitations",
    "Health, pharmacy and help","Airport and air travel"
  ];
  const arabicCategories = [
    "التَّحِيَّاتُ","التَّعَارُفُ","السُّؤَالُ وَالْفَهْمُ","الْمَطْعَمُ وَالْمَقْهَى","التَّسَوُّقُ",
    "الْأَمَاكِنُ وَالطُّرُقُ","سَيَّارَةُ الْأُجْرَةِ","الْفُنْدُقُ","الْوَقْتُ وَالْمَوَاعِيدُ",
    "الْعَمَلُ","الْحَدِيثُ الْيَوْمِيُّ","الصِّحَّةُ","الْمَطَارُ"
  ];

  const STYLE = [
    "#fssbar{position:sticky;top:0;z-index:100000;background:#102e38;color:white;display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:11px max(15px,calc((100% - 1100px)/2));font:600 13px system-ui,-apple-system,sans-serif;box-shadow:0 4px 14px #0002;direction:ltr}",
    "#fssbar a{color:#e2faf5;text-decoration:none;margin-right:auto;font-size:12px;padding:7px 10px}",
    "#fssbar .fss-options{display:flex;gap:6px;align-items:center}",
    "#fssbar button{border:1px solid #759a96;background:transparent;color:white;border-radius:8px;font:600 13px system-ui;padding:8px 11px;cursor:pointer}",
    "#fssbar button[aria-pressed=true]{background:#e6f7ef;color:#115247;border-color:#d6f3e6}",
    "#fssbar .fss-prompt{color:#bdcecf;font-size:11px;margin-right:4px}",
    ".fss-note{margin:12px auto;max-width:900px;background:#e6f4ee;border:1px solid #b9ddd0;border-radius:10px;padding:14px 17px;color:#245349;font:14px/1.7 system-ui}",
    ".fss-jp{font:500 14px/1.6 -apple-system,BlinkMacSystemFont,'Noto Sans JP',sans-serif;color:#194a49}",
    "body.fss-mode-ja .fss-jp{display:block}body.fss-mode-en .fss-jp{display:none}",
    "#fsspractice{max-width:1020px;margin:26px auto 65px;padding:20px 22px;font-family:system-ui;background:#f8fcfb;color:#153e38;border-radius:16px}",
    "#fsspractice h1{font:bold 29px/1.5 'Noto Naskh Arabic',serif;text-align:center;direction:rtl}",
    "#fsspractice .fss-unit{background:white;border:1px solid #d9e9e4;border-radius:15px;margin:15px 0;padding:17px}",
    "#fsspractice h2{text-align:right;font:bold 24px 'Noto Naskh Arabic',serif}",
    "#fsspractice .fss-phrase{border-top:1px solid #edf3f1;display:flex;gap:12px;align-items:center;justify-content:space-between;padding:15px 4px}",
    "#fsspractice .fss-ar{font:normal clamp(34px,4vw,48px)/1.8 'Noto Naskh Arabic','Amiri',serif;direction:rtl;flex:1;text-align:right}",
    "#fsspractice .fss-audio{font:600 18px system-ui;border-radius:50%;background:#e1f4ed;color:#126457;border:0;width:39px;height:39px;cursor:pointer;flex:none}",
    "body.fss-mode-ar > :not(#fssbar):not(#fsspractice):not(script){display:none!important}",
    "body.fss-mode-ar{background:#f1f6f4!important}",
    "body.fss-mode-ja .fss-english-gloss{display:none!important}",
    "body.fss-mode-en .fss-japanese-gloss{display:none!important}",
    "@media print{#fssbar{display:none!important}body.fss-mode-ar > #fsspractice{display:block!important}}",
    "@media(max-width:640px){#fssbar{padding:10px 12px}#fssbar .fss-prompt{display:none}#fsspractice{padding:10px}#fsspractice .fss-ar{font-size:38px}}"
  ].join("\n");

  function arabicNormalized(s) {
    return (s || "").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[.؟!،\s]/g, "").trim();
  }
  function documentNumber() {
    const nodes = Array.from(document.querySelectorAll(".chapter"));
    let last = 0;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].getBoundingClientRect().top <= 190) last = i;
    }
    return last + 1;
  }
  function grammarLink(target) {
    const destination = target === "en" ? "grammar-en.html" : "grammar-ja.html";
    return destination + "?chapter=" + documentNumber();
  }
  function setMode(next) {
    if (!allowed.includes(next)) return;
    localStorage.setItem(K,next);
    if ((grammarEn && next === "ja") || (grammarJa && next === "en")) {
      location.href = grammarLink(next);
      return;
    }
    mode = next;
    apply();
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang="ar-SA"; u.rate = 0.79;
    const match = speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("ar"));
    if(match)u.voice=match;
    speechSynthesis.speak(u);
  }
  function addSwitcher() {
    const css=document.createElement("style");
    css.textContent=STYLE;
    document.head.appendChild(css);
    const bar=document.createElement("div");
    bar.id="fssbar";
    bar.setAttribute("role","navigation");
    bar.setAttribute("aria-label","Study language");
    bar.innerHTML='<a href="../index.html">⌂ Study Studio</a><span class="fss-prompt">Study view</span><div class="fss-options"><button type="button" data-mode="en">English</button><button type="button" data-mode="ja">日本語</button><button type="button" data-mode="ar" lang="ar" dir="rtl">العَرَبِيَّةُ</button></div>';
    document.body.insertBefore(bar,document.body.firstChild);
    bar.querySelectorAll("button[data-mode]").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
  }
  function applyLessonTranslations() {
    const nodes=document.querySelectorAll(".excard .eng,.dialogue .dturn .en,.vex .answer");
    nodes.forEach(node=>{
      if(!node.dataset.fssEn)node.dataset.fssEn=node.textContent.trim();
      const ja=jaTranslations[node.dataset.fssEn];
      node.textContent=mode==="ja"&&ja?ja:node.dataset.fssEn;
      node.setAttribute("lang",mode==="ja"&&ja?"ja":"en");
    });
    let note=document.getElementById("fss-note");
    if(!note){
      note=document.createElement("aside");note.id="fss-note";note.className="fss-note";
      const anchor=document.querySelector(".controls") || document.querySelector(".sheet");
      if(anchor)anchor.insertAdjacentElement("afterend",note);
    }
    note.hidden=mode!=="ja";
    note.textContent=lesson1
      ? "日本語表示：主要例文・会話には日本語訳を表示します。講師用の時間割・詳しい指示は英語のままです。授業の目標は、自己紹介・仕事・毎日の習慣を話すことです。"
      : "日本語表示：主要例文・会話には日本語訳を表示します。講師用の時間割・詳しい指示は英語のままです。授業の目標は、注文・価格確認・変更や品切れへの対応です。";
  }
  function applyPhrasebookTranslations(){
    const phrases=Array.from(document.querySelectorAll(".phrase"));
    const map=new Map();
    phrases.forEach((p,i)=>{
      const jp=p.querySelector(".japanese"),ar=p.querySelector(".arabic");
      if(!jp)return;
      if(!jp.dataset.fssOriginal)jp.dataset.fssOriginal=jp.textContent.trim();
      if(i<phraseEnglish.length && ar)map.set(arabicNormalized(ar.textContent),phraseEnglish[i]);
      jp.textContent=mode==="en"?(phraseEnglish[i]||jp.dataset.fssOriginal):jp.dataset.fssOriginal;
      jp.lang=mode==="en"?"en":"ja";
    });
    document.querySelectorAll(".dialog-turn").forEach(el=>{
      const jp=el.querySelector(".japanese");
      const ar=el.querySelector(".arabic");
      if(!jp||!ar)return;
      if(!jp.dataset.fssOriginal)jp.dataset.fssOriginal=jp.textContent.trim();
      jp.textContent=mode==="en"?(map.get(arabicNormalized(ar.textContent))||jp.dataset.fssOriginal):jp.dataset.fssOriginal;
      jp.lang=mode==="en"?"en":"ja";
    });
    document.querySelectorAll(".unit-banner h2").forEach((el,i)=>{
      if(!el.dataset.fssOriginal)el.dataset.fssOriginal=el.textContent;
      el.textContent=mode==="en"?(phraseCategories[i]||el.dataset.fssOriginal):el.dataset.fssOriginal;
    });
    let note=document.getElementById("fss-note");
    if(!note){
      note=document.createElement("aside");note.id="fss-note";note.className="fss-note";
      const anchor=document.querySelector(".toolbar");
      if(anchor)anchor.insertAdjacentElement("afterend",note);
    }
    note.hidden=mode!=="en";
    note.textContent="English view: all 132 core phrase translations are available in English. Dialogue and detailed practice directions may still contain Japanese; use the Arabic-only view for speaking and listening practice.";
  }
  let built=false;
  function makeArabicView(){
    if(built)return;
    built=true;
    const panel=document.createElement("main");
    panel.id="fsspractice";
    panel.setAttribute("lang","ar");
    panel.setAttribute("dir","rtl");
    const heading=document.createElement("h1");
    heading.textContent="تَدَرَّبْ عَلَى الْعَرَبِيَّةِ";
    panel.appendChild(heading);
    const groups=grammarEn||grammarJa
      ?Array.from(document.querySelectorAll(".chapter"))
      :conversation
        ?Array.from(document.querySelectorAll(".unit"))
        :Array.from(document.querySelectorAll(".sheet"));
    let count=0;
    groups.forEach((section,i)=>{
      let samples;
      if(grammarEn||grammarJa)samples=Array.from(section.querySelectorAll(".example .arline"));
      else if(conversation)samples=Array.from(section.querySelectorAll(".phrase .arabic, .dialog-turn .arabic"));
      else samples=Array.from(section.querySelectorAll('[lang="ar"],.arline'));
      samples=samples.filter(el=>!el.querySelector('[lang="ar"]'));
      const used=new Set(),texts=[];
      samples.forEach(el=>{
        const value=el.textContent.trim().replace(/\s+/g," ");
        const k=arabicNormalized(value);
        if(!k||used.has(k)||value.length>175||value.length<2)return;
        used.add(k);texts.push(value);
      });
      if(!texts.length)return;
      const unit=document.createElement("section");unit.className="fss-unit";
      const h=document.createElement("h2");
      const digit=String(i+1).replace(/\d/g,x=>"٠١٢٣٤٥٦٧٨٩"[Number(x)]);
      h.textContent=conversation?(arabicCategories[i]||"الْقِسْمُ "+digit)
        :grammarEn||grammarJa?"الدَّرْسُ "+digit:"الْقِسْمُ "+digit;
      unit.appendChild(h);
      texts.forEach(s=>{
        count++;
        const row=document.createElement("div");row.className="fss-phrase";
        const label=document.createElement("div");label.className="fss-ar";label.dir="rtl";label.textContent=s;
        const btn=document.createElement("button");btn.type="button";btn.className="fss-audio";btn.textContent="▶";btn.setAttribute("aria-label","استمع");
        btn.onclick=()=>speak(s);
        row.append(label,btn);unit.appendChild(row);
      });
      panel.appendChild(unit);
    });
    document.body.appendChild(panel);
    if(count===0){const p=document.createElement("p");p.textContent="لَا تُوجَدُ أَمْثِلَةٌ.";panel.appendChild(p)}
  }
  function apply(){
    if((lesson1||lesson2)&&mode!=="ar")applyLessonTranslations();
    if(conversation&&mode!=="ar")applyPhrasebookTranslations();
    if(mode==="ar")makeArabicView();
    document.body.classList.remove("fss-mode-en","fss-mode-ja","fss-mode-ar");
    document.body.classList.add("fss-mode-"+mode);
    const practice=document.getElementById("fsspractice");
    if(practice)practice.hidden=mode!=="ar";
    const note=document.getElementById("fss-note");
    if(note)note.hidden=mode==="ar" || (lesson1||lesson2?mode!=="ja":mode!=="en");
    document.querySelectorAll("#fssbar button[data-mode]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===mode)));
    if(mode!=="ar")document.body.classList.remove("hide-en");
    const hide=document.getElementById("hide");if(hide && mode!=="ar")hide.textContent="Hide English / romanization";
  }
  function start(){
    addSwitcher();
    if((grammarEn&&mode==="ja")||(grammarJa&&mode==="en")){
      location.replace(grammarLink(mode));
      return;
    }
    apply();
    const n=Number(new URLSearchParams(location.search).get("chapter"));
    if((grammarEn||grammarJa)&&Number.isInteger(n)&&n>=1&&n<=51){
      const target=document.querySelectorAll(".chapter")[n-1];
      if(target)requestAnimationFrame(()=>setTimeout(()=>target.scrollIntoView({block:"start"}),160));
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();