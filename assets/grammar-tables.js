(function(){
"use strict";
const T=window.FSS_GRAMMAR_TABLES=window.FSS_GRAMMAR_TABLES||{};
function add(n,ja,en,rows){T[n]={title:[ja,en],rows};}
add(9,"形容詞の一致を比較","Adjective agreement side by side",[
["سَيَّارَةٌ جَدِيدَةٌ","女性名詞・不定","Feminine, indefinite"],
["السَّيَّارَةُ الْجَدِيدَةُ","女性名詞・定（名詞句）","Feminine, definite noun phrase"],
["السَّيَّارَةُ جَدِيدَةٌ.","名詞文：「その車は新しい」","Predicate: 'The car is new'"],
["سَيَّارَاتٌ جَدِيدَةٌ","非人間複数＋女性単数形容詞","Non-human plural + fem. sg. adjective"]
]);
add(13,"疑問詞クイック一覧","Question-word quick reference",[
["هَلْ","～ですか？（Yes/No）","Yes/no question"],
["أَيْنَ","どこ","Where"],
["مَتَى","いつ","When"],
["كَيْفَ","どのように","How"],
["مَاذَا / مَا","何","What"],
["مَنْ","誰","Who"],
["لِمَاذَا","なぜ","Why"],
["كَمْ","いくつ・いくら","How many/how much"],
["أَيُّ","どの・どちらの","Which"]
]);
add(14,"完了形：كَتَبَ（書く）の人称表","Full perfect paradigm: كَتَبَ",[
["كَتَبْتُ","私は書いた","I wrote"],
["كَتَبْنَا","私たちは書いた","We wrote"],
["كَتَبْتَ","あなた（男性）は書いた","You (m.sg.) wrote"],
["كَتَبْتِ","あなた（女性）は書いた","You (f.sg.) wrote"],
["كَتَبْتُمَا","あなたたち2人は書いた","You (dual) wrote"],
["كَتَبْتُمْ","あなたたち（男性複数）は書いた","You (m.pl.) wrote"],
["كَتَبْتُنَّ","あなたたち（女性複数）は書いた","You (f.pl.) wrote"],
["كَتَبَ","彼は書いた","He wrote"],
["كَتَبَتْ","彼女は書いた","She wrote"],
["كَتَبَا","彼ら2人は書いた","They (m.dual) wrote"],
["كَتَبَتَا","彼女たち2人は書いた","They (f.dual) wrote"],
["كَتَبُوا","彼ら（男性複数）は書いた","They (m.pl.) wrote"],
["كَتَبْنَ","彼女たち（女性複数）は書いた","They (f.pl.) wrote"]
]);
add(16,"未完了形：كَتَبَ の全人称活用","Full imperfect paradigm of كَتَبَ",[
["أَكْتُبُ","私は書く","I write"],
["نَكْتُبُ","私たちは書く","We write"],
["تَكْتُبُ","あなた（男性）は書く","You (m.sg.) write"],
["تَكْتُبِينَ","あなた（女性）は書く","You (f.sg.) write"],
["تَكْتُبَانِ","あなたたち2人は書く","You (dual) write"],
["تَكْتُبُونَ","あなたたち（男性複数）は書く","You (m.pl.) write"],
["تَكْتُبْنَ","あなたたち（女性複数）は書く","You (f.pl.) write"],
["يَكْتُبُ","彼は書く","He writes"],
["تَكْتُبُ","彼女は書く","She writes"],
["يَكْتُبَانِ","彼ら2人は書く","They (m.dual) write"],
["تَكْتُبَانِ","彼女たち2人は書く","They (f.dual) write"],
["يَكْتُبُونَ","彼ら（男性複数）は書く","They (m.pl.) write"],
["يَكْتُبْنَ","彼女たち（女性複数）は書く","They (f.pl.) write"]
]);
add(19,"否定助詞・時制・動詞形の比較","Negation and mood at a glance",[
["لَا أَكْتُبُ","現在否定：لا＋直説法","Present negation: lā + indicative"],
["مَا كَتَبْتُ","過去否定：ما＋完了形","Past negation: mā + perfect"],
["لَمْ أَكْتُبْ","過去否定：لم＋ジャズム","Past negation: lam + jussive"],
["لَنْ أَكْتُبَ","未来否定：لن＋接続法","Future negation: lan + subjunctive"],
["لَا تَكْتُبْ","禁止：لا＋ジャズム","Prohibition: lā + jussive"],
["لَسْتُ مُتْعَبًا","名詞文の否定：لَيْسَ の活用","Nominal-sentence negation with laysa"]
]);
add(22,"数の形と格語尾","Number forms and case",[
["مُوَظَّفٌ","単数・主格","Singular nominative"],
["مُوَظَّفَانِ","双数・主格","Dual nominative"],
["مُوَظَّفَيْنِ","双数・対格／属格","Dual accusative/genitive"],
["مُوَظَّفُونَ","男性健全複数・主格","Sound masc. plural nominative"],
["مُوَظَّفِينَ","男性健全複数・対格／属格","Sound masc. plural acc./gen."],
["مُوَظَّفَاتٌ","女性健全複数・主格","Sound fem. plural nominative"],
["مُوَظَّفَاتٍ","女性健全複数・対格／属格","Sound fem. plural acc./gen."]
]);
add(24,"3つの格とタンウィーン","The three cases and tanwīn",[
["كِتَابٌ / الْكِتَابُ","主格：-un／-u","Nominative: -un/-u"],
["كِتَابًا / الْكِتَابَ","対格：-an／-a","Accusative: -an/-a"],
["كِتَابٍ / الْكِتَابِ","属格：-in／-i","Genitive: -in/-i"],
["رَأَيْتُ كِتَابًا","目的語は対格","Direct object = accusative"],
["فِي الْمَكْتَبِ","前置詞の後は属格","After preposition = genitive"],
["اسْمُ الْمُدِيرِ","イダーファの後部は属格","Second iḍāfa noun = genitive"]
]);
add(34,"数詞と後ろの名詞の形","Number ranges and counted nouns",[
["كِتَابٌ وَاحِدٌ","1：性一致・単数","1: agreement, singular"],
["كِتَابَانِ","2：双数形","2: dual"],
["ثَلَاثَةُ كُتُبٍ","3〜10：性の逆転・複数属格","3–10: reverse gender, plural genitive"],
["أَحَدَ عَشَرَ كِتَابًا","11：基本的に性一致・単数対格","11: gender match, singular accusative"],
["ثَلَاثَةَ عَشَرَ كِتَابًا","13〜19：組み合わせに注意・単数対格","13–19: mixed gender rules, singular accusative"],
["عِشْرُونَ كِتَابًا","20〜99：単数対格","20–99: singular accusative"],
["مِئَةُ كِتَابٍ","100：単数属格","100: singular genitive"],
["أَلْفُ كِتَابٍ","1000：単数属格","1000: singular genitive"]
]);
add(36,"直説法・接続法・ジャズム","Indicative, subjunctive and jussive",[
["يَكْتُبُ","直説法・-u","Indicative -u"],
["أَنْ يَكْتُبَ","接続法・-a","Subjunctive -a"],
["لَمْ يَكْتُبْ","ジャズム・-ْ","Jussive -ْ"],
["يَكْتُبُونَ","五動詞・直説法・ن あり","Five verbs: indicative with ن"],
["لَنْ يَكْتُبُوا","五動詞・接続法・ن 脱落","Five verbs: subjunctive without ن"],
["لَمْ يَكْتُبُوا","五動詞・ジャズム・ن 脱落","Five verbs: jussive without ن"]
]);
add(37,"弱動詞：語根位置による違い","Weak-verb types",[
["وَصَلَ / يَصِلُ","初頭弱動詞：و が落ちることがある","Initial weak: و may disappear"],
["قَالَ / يَقُولُ / قُلْتُ","中間弱動詞：長母音が変化","Hollow: vowel changes across forms"],
["بَاعَ / يَبِيعُ / بِعْتُ","中間弱動詞：語幹が変化","Hollow: stem alternation"],
["دَعَا / يَدْعُو / لَمْ يَدْعُ","末尾弱動詞：ジャズムで弱文字が落ちる","Final weak: jussive can lose final letter"],
["رَمَى / يَرْمِي / لَمْ يَرْمِ","末尾弱動詞：弱文字が落ちる","Final weak: shortened jussive"]
]);
add(38,"派生動詞第I〜X形の語形と代表語","Derived verb patterns I–X",[
["كَتَبَ","I：基本動詞『書く』","I: basic verb 'write'"],
["عَلَّمَ","II：教える（فَعَّلَ）","II: teach (faʿʿala)"],
["شَارَكَ","III：参加する（فَاعَلَ）","III: participate (fāʿala)"],
["أَرْسَلَ","IV：送る（أَفْعَلَ）","IV: send (afʿala)"],
["تَعَلَّمَ","V：学ぶ（تَفَعَّلَ）","V: learn (tafaʿʿala)"],
["تَعَاوَنَ","VI：協力する（تَفَاعَلَ）","VI: cooperate (tafāʿala)"],
["اِنْكَسَرَ","VII：壊れた（اِنْفَعَلَ）","VII: broke (infaʿala)"],
["اِجْتَمَعَ","VIII：集まる（اِفْتَعَلَ）","VIII: meet (iftaʿala)"],
["اِحْمَرَّ","IX：赤くなる（اِفْعَلَّ）","IX: turn red (ifʿalla)"],
["اِسْتَخْدَمَ","X：使う（اِسْتَفْعَلَ）","X: use (istafʿala)"]
]);
add(39,"كَانَ・لَيْسَ・إِنَّ の格","Case patterns with kāna, laysa, inna",[
["الْجَوُّ حَارٌّ.","基本の名詞文：主語・述語とも主格","Base nominal clause: nominative subject & predicate"],
["كَانَ الْجَوُّ حَارًّا.","過去：述語は対格","kāna: accusative predicate"],
["لَيْسَ الْجَوُّ حَارًّا.","否定：述語は対格","laysa: accusative predicate"],
["إِنَّ الْجَوَّ حَارٌّ.","強調：إِنَّ の後の名詞が対格","inna: accusative subject after particle"]
]);
add(40,"能動・受動の対応","Active/passive transformation",[
["كَتَبَ الْمُوَظَّفُ التَّقْرِيرَ.","能動形：社員が報告書を書いた","Active: employee wrote report"],
["كُتِبَ التَّقْرِيرُ.","過去受動：報告書が書かれた","Passive perfect: report was written"],
["يُكْتَبُ التَّقْرِيرُ.","未完了形受動：報告書が書かれる","Passive imperfect: report is written"],
["مَكْتُوبٌ","受動分詞：書かれた状態","Passive participle: written"]
]);
})();
