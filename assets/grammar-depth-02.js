(function(){
"use strict";const B=window.FSS_GRAMMAR_DEPTH=window.FSS_GRAMMAR_DEPTH||{};
function add(n,lead,notes,examples,pitfall,check){B[n]={lead,notes,examples,pitfall,check};}
add(19,
["否定は「いつのことか」「どの文の種類か」によって助詞と動詞の形が変わります。次の5種類を一つの表で整理しましょう。","Arabic negation changes with tense, sentence type and verb mood. The five main patterns should be compared side by side."],
[
["現在・習慣：لَا＋直説法の未完了形 → لَا أَعْمَلُ（働いていません）。過去：مَا＋完了形 → مَا عَمِلْتُ（働きませんでした）。","Present/habitual: لَا + indicative imperfect, e.g. لَا أَعْمَلُ. Past: مَا + perfect, e.g. مَا عَمِلْتُ."],
["過去の否定は لَمْ＋ジャズム形も重要：لَمْ أَعْمَلْ。時間は過去ですが、動詞は見た目が未完了形で、語末がジャズムになります。","A second past-negative pattern is لَمْ + jussive imperfect: لَمْ أَعْمَلْ. Despite past meaning, the verb looks imperfect and takes jussive marking."],
["未来の否定：لَنْ＋接続法 → لَنْ أَعْمَلَ。名詞文の否定：لَيْسَ ...。禁止「～するな」：لَا＋ジャズム形 → لَا تَكْتُبْ。","Future negation: لَنْ + subjunctive; nominal-sentence negation: لَيْسَ; prohibition: لَا + jussive (لَا تَكْتُبْ)."]
],
[["لَا أَذْهَبُ الْيَوْمَ.","今日は行きません（現在）。","I am not going today."],["لَمْ أَذْهَبْ أَمْسِ.","昨日は行きませんでした。","I did not go yesterday."],["لَنْ أَذْهَبَ غَدًا.","明日は行きません。","I will not go tomorrow."]],
["لَمْ の後は完了形ではありません。لَمْ ذَهَبْتُ ではなく لَمْ أَذْهَبْ。لَا は現在否定にも禁止にも使いますが、動詞の語尾が異なります。","Do not use a perfect after لَمْ: use لَمْ أَذْهَبْ. Also distinguish ordinary negation لَا أَكْتُبُ from prohibitive لَا تَكْتُبْ."],
["「昨日行かなかった」を لَمْ で作ってください。","Express 'I did not go yesterday' with لَمْ.","لَمْ أَذْهَبْ أَمْسِ。","لَمْ أَذْهَبْ أَمْسِ."]);
add(20,
["命令形は相手に何かを頼む・指示するための形です。相手の性別・人数に合わせて変化し、禁止形とは作り方が違います。","Imperatives address the listener and vary by gender and number. Their formation differs from negative commands."],
[
["第I形の基本例：يَكْتُبُ →（あなた男）اُكْتُبْ。語頭の接頭辞を除き、必要な場合は連結ハムザを補います。すべての動詞に同じ母音を当てはめないでください。","For Form I, يَكْتُبُ leads to masculine singular اُكْتُبْ; the person prefix is removed and an initial vowel may be supplied. Stem vowels vary."],
["女性1人には اُكْتُبِي、男性複数には اُكْتُبُوا。第II形などでは أَرْسِلْ（送ってください）のように語頭ハムザの型が異なります。","Use اُكْتُبِي for a woman and اُكْتُبُوا for a masculine plural. Derived verbs can have different imperative shapes, e.g. أَرْسِلْ."],
["禁止形は命令形に لَا を付けるのではなく、لَا＋未完了形ジャズム：لَا تَكْتُبْ（書かないで）。丁寧にするには مِنْ فَضْلِكَ などを添えます。","Prohibition uses لَا + jussive imperfect, not لَا + imperative: لَا تَكْتُبْ. Add مِنْ فَضْلِكَ for politeness."]
],
[["اِفْتَحِ الْبَابَ، مِنْ فَضْلِكَ.","ドアを開けてください（男性へ）。","Please open the door (to a man)."],["أَرْسِلِ الْعَيِّنَةَ.","サンプルを送ってください（男性へ）。","Send the sample (to a man)."],["لَا تَتَأَخَّرْ.","遅れないでください（男性へ）。","Do not be late (to a man)."]],
["اُكْتُبْ の綴り・発音から命令形を一律に推測するのは危険です。弱動詞や派生動詞では独自の形が生じます。","Do not generalize one imperative shape to every verb. Weak and derived verbs require their own patterns."],
["「書かないでください」を男性1人に言うと？","How do you tell one man 'Do not write'?","لَا تَكْتُبْ。","لَا تَكْتُبْ."]);
add(21,
["アラビア語の語彙は、しばしば3子音の語根と、その間に入る母音・接頭辞・接尾辞の型から作られます。ただし語根だけでは意味は確定しません。","Much Arabic vocabulary is built from consonantal roots and morphological patterns. A root suggests a semantic family but does not determine each word's meaning by itself."],
[
["例：ك-ت-ب は「書く」に関する語族。كَتَبَ（書いた）、كِتَابٌ（本）、كَاتِبٌ（書き手）、مَكْتَبٌ（オフィス）、مَكْتَبَةٌ（図書館／書店）。","The root ك-ت-ب connects كَتَبَ (write), كِتَابٌ (book), كَاتِبٌ (writer), مَكْتَبٌ (office), مَكْتَبَةٌ (library/bookshop)."],
["第I形 فَعَلَ を基準に、第II形 فَعَّلَ、第III形 فَاعَلَ、第IV形 أَفْعَلَ などがあります。語根と型を分けて語彙を整理します。","Form I is commonly modeled as فَعَلَ, with derived patterns such as II فَعَّلَ, III فَاعَلَ and IV أَفْعَلَ. Separate root from pattern when studying."],
["動詞だけでなくマスダル（動名詞）・能動分詞・受動分詞も同じ語根から派生します。学習時は意味・語形・用法をセットにします。","Verbal nouns, active participles and passive participles also derive from related roots. Learn meaning, pattern and syntactic use together."]
],
[["كَتَبَ الْمُوَظَّفُ رِسَالَةً.","社員がメッセージを書きました。","The employee wrote a message."],["هٰذَا كِتَابٌ مُفِيدٌ.","これは役立つ本です。","This is a useful book."],["هِيَ كَاتِبَةٌ.","彼女は作家です。","She is a writer."]],
["「同じ語根ならほぼ同じ意味」と決め付けないでください。派生によって使い方や意味が大きく変わります。","Do not assume words sharing a root are interchangeable; derived patterns can alter meaning substantially."],
["مَكْتَبٌ と مَكْتَبَةٌ は同じ語根ですが、通常何を意味しますか？","What do مَكْتَبٌ and مَكْتَبَةٌ commonly mean?","مَكْتَبٌ＝オフィス、مَكْتَبَةٌ＝図書館／書店。","Office versus library/bookshop."]);
add(22,
["名詞の数は単数・双数（2つ）・複数（3つ以上）。規則複数と破格複数を分け、形容詞の一致も一緒に覚えましょう。","Arabic distinguishes singular, dual and plural, with sound (regular) and broken plurals. Agreement can differ by animacy."],
[
["双数：主格は ـَانِ、対格・属格は ـَيْنِ：مُوَظَّفَانِ／مُوَظَّفَيْنِ。イダーファに入ると語尾の ن が脱落します。","Dual endings: nominative ـَانِ, accusative/genitive ـَيْنِ, as in مُوَظَّفَانِ / مُوَظَّفَيْنِ. The final ن is dropped in a construct phrase."],
["健全男性複数：ـُونَ（主格）／ـِينَ（対格・属格）。健全女性複数：ـَاتٌ が基本ですが、格語尾を伴います。複数が常に ـات で作れるわけではありません。","Sound masculine plural: ـُونَ nominative versus ـِينَ accusative/genitive. Sound feminine plural commonly uses ـَات with case endings. Not every noun forms a sound plural."],
["破格複数は内部の型が変わります：كِتَابٌ → كُتُبٌ、رَجُلٌ → رِجَالٌ。非人間複数の修飾語は通常女性単数形になります。","Broken plurals change internal patterns: كِتَابٌ → كُتُبٌ; رَجُلٌ → رِجَالٌ. Non-human plurals typically take feminine singular agreement."]
],
[["رَأَيْتُ مُوَظَّفَيْنِ.","社員2人を見ました（対格・双数）。","I saw two employees (dual accusative)."],["الْمُهَنْدِسُونَ هُنَا.","技術者たちはここにいます（男性健全複数）。","The engineers are here (sound masculine plural)."],["الْكُتُبُ الْجَدِيدَةُ","新しい本（複数）。非人間複数は女性単数一致。","New books: non-human plural with feminine singular agreement."]],
["「2」は単なる複数ではありません。双数の語尾があり、格によって ـانِ／ـينِ が変わります。","Do not treat 'two' as ordinary plural; dual has its own case-sensitive endings."],
["「社員2人を見ました」の مُوَظَّفَانِ はどう変わる？","What dual form replaces مُوَظَّفَانِ as the object of 'I saw'?","مُوَظَّفَيْنِ。","مُوَظَّفَيْنِ."]);
add(23,
["数詞の構造は名詞との一致が独特です。まず0〜10を確実に読み、1・2と3〜10の規則の違いを理解しましょう。","Arabic number syntax is distinctive. First learn 0–10, then distinguish the rules for 1–2 from those for 3–10."],
[
["1・2は被修飾名詞と性を合わせるのが基本。كِتَابٌ وَاحِدٌ（本1冊）、سَيَّارَةٌ وَاحِدَةٌ（車1台）。双数名詞なら「2」を言わずとも2つの意味になります。","For 1–2, gender generally matches the counted noun: كِتَابٌ وَاحِدٌ, سَيَّارَةٌ وَاحِدَةٌ. Dual forms themselves already encode 'two'."],
["3〜10は数詞の性が名詞と原則逆になり、後ろの名詞は複数属格になります：ثَلَاثَةُ كُتُبٍ（本3冊）、ثَلَاثُ سَيَّارَاتٍ（車3台）。","For 3–10, numeral gender normally contrasts with the singular noun's gender; the counted noun is plural genitive: ثَلَاثَةُ كُتُبٍ, ثَلَاثُ سَيَّارَاتٍ."],
["11以上の数詞では規則が変わります。11〜99の単数対格の数えられる名詞、100以上の属格などは第34章の補足で整理します。","Rules change above 10. Chapters on higher numbers cover the singular accusative counted noun for 11–99 and other constructions with hundreds."]
],
[["كِتَابٌ وَاحِدٌ","本1冊。","One book."],["ثَلَاثَةُ كُتُبٍ","本3冊。3 は男性名詞の性と逆。","Three books; opposite gender of the singular noun."],["ثَلَاثُ سَيَّارَاتٍ","車3台。","Three cars."]],
["ثَلَاثَةُ سَيَّارَاتٍ と機械的に数詞を選ぶのは誤りです。سَيَّارَةٌ は女性名詞なので ثَلَاثُ を用います。","Do not use ثَلَاثَةُ with feminine سَيَّارَةٌ; use ثَلَاثُ."],
["「車5台」と「本5冊」の数詞は同じ形ですか？","Do 'five cars' and 'five books' use the same numeral gender?","違います。خَمْسُ سَيَّارَاتٍ／خَمْسَةُ كُتُبٍ。","No: خَمْسُ سَيَّارَاتٍ versus خَمْسَةُ كُتُبٍ."]);
add(24,
["格は名詞の役割（主語・目的語・前置詞の後など）を示します。まず主格・対格・属格を、定名詞と不定名詞で比較しましょう。","Case endings show the grammatical function of nouns. Compare nominative, accusative and genitive in definite and indefinite forms."],
[
["不定名詞の基本：كِتَابٌ（主格 -un）、كِتَابًا（対格 -an）、كِتَابٍ（属格 -in）。定名詞なら الْكِتَابُ／الْكِتَابَ／الْكِتَابِ（-u/-a/-i）。","Core indefinite forms: كِتَابٌ (-un nominative), كِتَابًا (-an accusative), كِتَابٍ (-in genitive); definite: الْكِتَابُ / الْكِتَابَ / الْكِتَابِ."],
["主語と名詞文の述語は通常主格、直接目的語や一部の副詞的表現は対格、前置詞の後・イダーファの後部は属格。形容詞も名詞の格に合わせます。","Subjects and nominal predicates are typically nominative; direct objects and certain adverbials accusative; after prepositions and in the second iḍāfa position genitive. Adjectives agree in case."],
["例外：双数・男性健全複数は文字の語尾で格が変化。『二格名詞（ممنوع من الصرف）』は通常タンウィーンを取らず、特定条件で属格に -a を用います。会話では多くの格語尾が休止時に省略されます。","Important exceptions: dual and sound masculine plurals use different endings. Diptotes (ممنوع من الصرف) normally lack tanwīn and may show -a in the genitive. Pausal speech often omits endings."]
],
[["جَاءَ طَالِبٌ.","学生が来ました（主格）。","A student came (nominative)."],["رَأَيْتُ طَالِبًا.","学生を見ました（対格）。","I saw a student (accusative)."],["تَحَدَّثْتُ مَعَ طَالِبٍ.","学生と話しました（属格）。","I spoke with a student (genitive)."]],
["対格 -an のアリフは必ず追加するわけではありません。ة で終わる語やハムザの綴りなど、特殊な語末表記があります。","Do not always add an alif for -an; tāʾ marbūṭa and certain hamza endings are exceptions."],
["فِي の後の الْمَكْتَبُ はどの格になり、どの語尾を取る？","After فِي, what case and ending does الْمَكْتَبُ take?","属格：فِي الْمَكْتَبِ（-i）。","Genitive: فِي الْمَكْتَبِ (-i)."]);
add(25,
["基本語順は「動詞＋主語＋目的語」も「主語＋動詞＋目的語」もあり、意味の焦点や動詞の一致が変わることがあります。","MSA allows both verb–subject–object (VSO) and subject–verb–object (SVO). Word order affects information structure and sometimes agreement."],
[
["動詞文の基本形：كَتَبَ الْمُوَظَّفُ الرِّسَالَةَ（社員が手紙を書いた）。كَتَبَ＝動詞、الْمُوَظَّفُ＝主格の主語、الرِّسَالَةَ＝対格の目的語。","In كَتَبَ الْمُوَظَّفُ الرِّسَالَةَ, the verb comes first, followed by nominative subject and accusative object."],
["複数主語が動詞より後ろに来る標準的なVSO語順では、動詞が三人称単数になることがあります：جَاءَ الْمُوَظَّفُونَ。一方、主語先行なら الْمُوَظَّفُونَ جَاءُوا。","With a following plural subject in canonical VSO, the verb can remain third-person singular: جَاءَ الْمُوَظَّفُونَ. With a preceding plural subject: الْمُوَظَّفُونَ جَاءُوا."],
["格語尾が省略される会話では、語順・前置詞・文脈が意味を支えます。書き言葉で格を確認するときは、誰が何をしたかを必ず分析します。","In speech without case endings, word order, prepositions and context support interpretation. Formal reading requires identifying who did what."]
],
[["أَرْسَلَ الْمُدِيرُ رِسَالَةً.","部長がメッセージを送りました。","The manager sent a message."],["جَاءَ الْعُمَلَاءُ.","顧客たちが来ました（動詞先行）。","The customers came (verb-first)."],["الْعُمَلَاءُ جَاءُوا.","顧客たちは来ました（主語先行）。","The customers came (subject-first)."]],
["複数主語なのに動詞が単数形だから誤り、とは限りません。VSOの一致規則を確かめます。","A singular-looking verb with a following plural subject can be correct under VSO agreement."],
["「社員たちが来た」を動詞先行と主語先行の2通りで言ってください。","Give verb-first and subject-first versions of 'The employees came'.","جَاءَ الْمُوَظَّفُونَ／الْمُوَظَّفُونَ جَاءُوا。","جَاءَ الْمُوَظَّفُونَ / الْمُوَظَّفُونَ جَاءُوا."]);
add(26,
["接続詞は短文を一つの説明にまとめます。比較・理由・関係節を使うと、単純な会話から段落へ広げられます。","Conjunctions connect short utterances into coherent explanations. Comparison, reasons and relative clauses allow longer descriptions."],
[
["وَ は単純な並列、فَ は直後・結果、ثُمَّ は時間的な「それから」。この3つを分けると出来事の順序が明確になります。","وَ simply joins; فَ often signals immediate sequence or consequence; ثُمَّ marks a subsequent step. Use them distinctly in narratives."],
["対比は لَكِنْ（しかし）、理由は لِأَنَّ（なぜなら）。لِأَنَّ の後に明示的な名詞がくれば対格になる構造に注意します。","لَكِنْ introduces contrast; لِأَنَّ gives a reason. With a following noun after لِأَنَّ, case is affected by the particle."],
["関係節は定名詞を説明する場合に الَّذِي／الَّتِي などの関係代名詞を使います。不定名詞では関係代名詞なしで文が続くことがあり、第31章で詳しく学びます。","Definite noun antecedents often take relative pronouns الَّذِي / الَّتِي. An indefinite noun can take a relative-like modifying clause without a relative pronoun; see Chapter 31."]
],
[["عَمِلْتُ ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ.","働いてから家に帰りました。","I worked, then went home."],["أُرِيدُ هٰذَا، لَكِنَّهُ غَالٍ.","これが欲しいですが、高いです。","I want this, but it is expensive."],["هٰذَا الْكِتَابُ الَّذِي قَرَأْتُهُ.","これは私が読んだ本です。","This is the book that I read."]],
["وَ と ثُمَّ はどちらも日本語で「そして」と訳せますが、出来事の順序を明示するかどうかが違います。","Both وَ and ثُمَّ may translate as 'and', but ثُمَّ adds sequence."],
["「働いた。その後家に帰った」を ثُمَّ でつなげてください。","Join 'I worked. Then I went home' using ثُمَّ.","عَمِلْتُ ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ。","عَمِلْتُ ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ."]);
add(27,
["文法書の中心はフスハー（現代標準アラビア語・MSA）です。地域方言は実際の生活に重要ですが、語形・語彙・否定を混ぜると学習が難しくなります。","This book teaches Modern Standard Arabic (Fuṣḥā). Regional dialects matter in daily life, but mixing forms and negation systems without labels makes learning harder."],
[
["MSAはニュース、書類、教育、地域間の正式な連絡で使われます。UAEを含む湾岸地域の日常会話は、話者や場面によって湾岸口語や他地域の方言が使われます。","MSA is used for news, documents, education and formal cross-regional communication. Daily speech in the Gulf varies across speakers, regions and situations."],
["MSAの例：أُرِيدُ أَنْ أَذْهَبَ（行きたい）。湾岸地域では أَبْغَى など別の動詞・言い方が使われることがありますが、地域差があります。","MSA uses أُرِيدُ أَنْ أَذْهَبَ ('I want to go'); some Gulf varieties use expressions such as أَبْغَى, with variation by region and speaker."],
["まずフスハーの主語・動詞・疑問詞を習得し、方言を学ぶときは『Gulf／Egyptian／Levantine』のようにラベルを付けて別に保存します。","Learn the MSA system first. When adding dialectal vocabulary, label its variety explicitly (Gulf, Egyptian, Levantine, etc.)."]
],
[["أُرِيدُ أَنْ أَذْهَبَ.","私は行きたいです（MSA）。","I want to go (MSA)."],["هَلْ تَتَكَلَّمُ الْعَرَبِيَّةَ؟","アラビア語を話しますか？（MSA）。","Do you speak Arabic? (MSA)."],["أَيْنَ الْمَكْتَبُ؟","オフィスはどこですか？（MSA）。","Where is the office? (MSA)."]],
["語尾を落として発音することと、文法体系そのものが方言になることは同じではありません。MSAの読み上げと実際の会話発音を分けて練習しましょう。","Dropping pausal case endings is not the same as switching to dialect grammar. Distinguish MSA pronunciation conventions from dialect structures."],
["MSAの「私は行きたい」は何という文型？","Which MSA pattern expresses 'I want to go'?","أُرِيدُ أَنْ أَذْهَبَ。","أُرِيدُ أَنْ أَذْهَبَ."]);
add(28,
["目的語の代名詞は動詞の後ろに接尾辞として付きます。「誰に／何を」によって、前置詞を介する場合もあります。","Object-pronoun suffixes attach to verbs, while indirect relationships may require prepositions and related suffix forms."],
[
["動詞の直接目的語接尾辞：ـنِي（私を）、ـكَ（あなた男を）、ـكِ（あなた女を）、ـهُ（彼を／それを）、ـهَا（彼女を／それを）、ـنَا（私たちを）、ـهُمْ（彼らを）。","Common direct-object suffixes: ـنِي (me), ـكَ (you m), ـكِ (you f), ـهُ (him/it), ـهَا (her/it), ـنَا (us), ـهُمْ (them m)."],
["「私は彼に電話した」は اِتَّصَلْتُ بِهِ のように動詞＋前置詞 بِـ＋接尾辞となります。すべての動詞が直接目的語を取るわけではありません。","With verbs that require a preposition, the suffix goes on the preposition: اِتَّصَلْتُ بِهِ ('I called him'). Not every verb takes a direct object."],
["二重目的語を持つ動詞や、接尾辞が続くと綴りが変わる動詞があります。基本は短い頻出の組み合わせから練習します。","Some verbs take multiple objects, and spelling can shift when suffixes attach. Build fluency with short, frequent forms first."]
],
[["رَأَيْتُهُ أَمْسِ.","昨日彼に会いました／彼を見ました。","I saw him yesterday."],["أُرْسِلُهَا غَدًا.","明日それ（女性名詞）を送ります。","I will send it (feminine noun) tomorrow."],["اِتَّصَلْتُ بِهِ.","彼に電話しました。","I called him."]],
["「私は彼に電話した」に رَأَيْتُهُ と同じ直接目的語の形を使うことはできません。動詞が必要とする前置詞を確認します。","Do not attach a direct-object suffix to a verb that requires a preposition such as اِتَّصَلَ بِـ."],
["「私はそれ（女性名詞）を送りました」を作ると？","How do you say 'I sent it' when 'it' refers to a feminine noun?","أَرْسَلْتُهَا。","أَرْسَلْتُهَا."]);
add(29,
["أَنْ を使うと「～することを望む／～したい／～できる」のように、別の動詞を従属させられます。後続の動詞形が大切です。","The particle أَنْ introduces a subordinate imperfect in the subjunctive, often after verbs of wanting, trying or ability."],
[
["基本：أُرِيدُ أَنْ أَذْهَبَ（行きたい）。動詞 أَذْهَبُ が接続法の أَذْهَبَ に変わります（普通の規則動詞）。","In أُرِيدُ أَنْ أَذْهَبَ, the imperfect shifts from indicative أَذْهَبُ to subjunctive أَذْهَبَ."],
["語尾のある形では変化が異なります。تُرِيدِينَ → أَنْ تَكْتُبِي（女性のあなたが書くこと）、يَكْتُبُونَ → أَنْ يَكْتُبُوا（彼らが書くこと）など。","In forms with suffixes the change differs: تَكْتُبِينَ → أَنْ تَكْتُبِي, يَكْتُبُونَ → أَنْ يَكْتُبُوا."],
["～するために、という目的なら لِـ＋接続法（لِأَتَعَلَّمَ）も重要です。マスダルを使う言い換えも可能で、第30章とつなげて学びます。","Purpose can be marked with لِـ + subjunctive (لِأَتَعَلَّمَ); nominalized alternatives using verbal nouns appear in Chapter 30."]
],
[["أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ.","アラビア語を学びたいです。","I want to learn Arabic."],["هَلْ تَسْتَطِيعُ أَنْ تَأْتِيَ؟","来られますか？（男性へ）","Can you come? (to a man)"],["أَدْرُسُ لِأَفْهَمَ.","理解するために勉強します。","I study in order to understand."]],
["أَنْ の直後の動詞は通常の直説法 -u ではありません。語末を読まない会話でも、書き言葉では区別が必要です。","After أَنْ, do not retain a regular indicative -u ending in careful written MSA."],
["「私は本を読みたい」を أُرِيدُ أَنْ で作ってください。","Say 'I want to read a book' with أُرِيدُ أَنْ.","أُرِيدُ أَنْ أَقْرَأَ كِتَابًا。","أُرِيدُ أَنْ أَقْرَأَ كِتَابًا."]);
add(30,
["マスダル（المصدر）は動詞の動作や概念を名詞として表します。英語の 'reading' / 'to read' に近い働きをする場合がありますが、名詞として格を持ちます。","A maṣdar (verbal noun) names the action or concept expressed by a verb. It can function like 'reading' or 'to read' but behaves grammatically as a noun."],
[
["第I形のマスダルは形が多様で、完全には予測できません。كَتَبَ → كِتَابَةٌ（書くこと）、دَرَسَ → دِرَاسَةٌ（勉強）、عَمِلَ → عَمَلٌ（仕事）。","Form I maṣdar patterns vary and are often lexical: كَتَبَ → كِتَابَةٌ, دَرَسَ → دِرَاسَةٌ, عَمِلَ → عَمَلٌ."],
["派生形では比較的規則性があります。عَلَّمَ（教えた・II）→ تَعْلِيمٌ（教育）、اِجْتَمَعَ（会った・VIII）→ اِجْتِمَاعٌ（会議）。","Derived forms are often more predictable: عَلَّمَ (Form II) → تَعْلِيمٌ; اِجْتَمَعَ (Form VIII) → اِجْتِمَاعٌ."],
["マスダルは名詞なので前置詞の後で属格を取ったり、イダーファになったりします：قَبْلَ السَّفَرِ（旅行前）、بَعْدَ الِاجْتِمَاعِ（会議後）。","A maṣdar behaves as a noun: it can follow prepositions or enter iḍāfa constructions, e.g. قَبْلَ السَّفَرِ, بَعْدَ الِاجْتِمَاعِ."]
],
[["أُحِبُّ الْقِرَاءَةَ.","読書が好きです。","I like reading."],["بَعْدَ الِاجْتِمَاعِ","会議の後で。","After the meeting."],["تَعَلُّمُ الْعَرَبِيَّةِ مُفِيدٌ.","アラビア語学習は役立ちます。","Learning Arabic is useful."]],
["すべての第I形動詞から同じ規則でマスダルを作ることはできません。辞書や語彙帳で確認します。","Do not assume one universal maṣdar pattern for every Form I verb."],
["دَرَسَ（勉強する）のマスダルは？","What is the maṣdar of دَرَسَ?","دِرَاسَةٌ。","دِرَاسَةٌ."]);
add(31,
["関係節は「私が買った本」「先週会った人」のように名詞を詳しく説明します。定名詞か不定名詞かで形が違います。","Relative clauses add identifying or descriptive information to nouns. Definite and indefinite antecedents are handled differently."],
[
["定名詞に続く関係代名詞：الَّذِي（男単）、الَّتِي（女単）、الَّذِينَ（男性人間複数）。関係代名詞は修飾される名詞と性・数などを合わせます。","Definite antecedents take relative pronouns: الَّذِي (masculine singular), الَّتِي (feminine singular), الَّذِينَ (masculine human plural)."],
["目的語が関係節の内部で省略されるように見えるとき、標準語では『戻り代名詞』（ضمير عائد）が現れます：الْكِتَابُ الَّذِي قَرَأْتُهُ（私がそれを読んだ本）。","A resumptive pronoun can appear inside the clause: الْكِتَابُ الَّذِي قَرَأْتُهُ literally 'the book that I read it'."],
["不定名詞では関係代名詞なしで後続文が修飾することがあります：رَأَيْتُ رَجُلًا يَعْمَلُ هُنَا（ここで働く男性に会った）。","Indefinite nouns can be modified by a following clause without an overt relative pronoun: رَأَيْتُ رَجُلًا يَعْمَلُ هُنَا."]
],
[["هٰذَا الْعَمِيلُ الَّذِي قَابَلْتُهُ.","こちらが私の会った顧客です。","This is the customer whom I met."],["هٰذِهِ الشَّرِكَةُ الَّتِي أَعْمَلُ فِيهَا.","こちらが私の勤める会社です。","This is the company where I work."],["رَأَيْتُ رَجُلًا يَعْمَلُ هُنَا.","ここで働く男性に会いました。","I saw a man who works here."]],
["英語の関係代名詞をそのまま日本語訳して省略する癖には注意。アラビア語は関係代名詞と戻り代名詞の両方が必要な場合があります。","A relative pronoun and a resumptive suffix may both be required; English-style omission is not a reliable guide."],
["「私の勤める会社」の女性名詞に使う関係代名詞は？","Which relative pronoun follows feminine الشَّرِكَةُ?","الَّتِي。","الَّتِي."]);
add(32,
["比較級・最上級には أَفْعَلُ 型が多く用いられます。比較対象には مِنْ を使いますが、性・定性や語形によって形が変わります。","Arabic commonly uses an أَفْعَل pattern for comparisons. A comparison often uses مِنْ; forms and syntax change in superlative constructions."],
[
["比較級：أَكْبَرُ（より大きい）、أَصْغَرُ（より小さい）、أَفْضَلُ（よりよい）、أَرْخَصُ（より安い）。A＋比較級＋مِنْ＋B の形が基本です。","Common comparatives include أَكْبَرُ, أَصْغَرُ, أَفْضَلُ, أَرْخَصُ. Pattern: A + comparative + مِنْ + B."],
["最上級は定冠詞やイダーファと組み合わせます：أَفْضَلُ مُنْتَجٍ（最良の商品）、الْمُنْتَجُ الْأَفْضَلُ（最良の商品）。前後の意味関係に注意します。","Superlatives may appear in iḍāfa-like constructions (أَفْضَلُ مُنْتَجٍ) or with a definite adjective (الْمُنْتَجُ الْأَفْضَلُ)."],
["すべての形容詞が単純な أَفْعَل 型になるわけではありません。程度を表す أَكْثَرُ＋マスダルのような表現も使われます。","Not all adjectives form simple comparatives. Periphrastic expressions such as أَكْثَرُ + verbal noun are also used."]
],
[["هٰذَا أَرْخَصُ مِنْ ذٰلِكَ.","これはあれより安いです。","This is cheaper than that."],["هٰذَا الْقُمَاشُ أَفْضَلُ.","この生地の方がよいです。","This fabric is better."],["هٰذَا أَفْضَلُ حَلٍّ.","これが最良の解決策です。","This is the best solution."]],
["比較の مِنْ と、起点・出身を表す مِنْ は同じ綴りでも役割が違います。比較文全体で判断します。","مِنْ can mark the comparative standard or a source/origin; interpret it from the clause."],
["「これの方が安い」を أَرْخَصُ で作ると？","How do you say 'This is cheaper'?","هٰذَا أَرْخَصُ。","هٰذَا أَرْخَصُ."]);
add(33,
["複数形は語尾変化だけでなく、格・所有構造・形容詞の一致と結び付きます。特に双数・健全男性複数・破格複数を比較しましょう。","Plural forms interact with case, iḍāfa and agreement. Compare dual, sound masculine/feminine plurals and broken plurals systematically."],
[
["双数：主格 ـَانِ、対格・属格 ـَيْنِ。健全男性複数：主格 ـُونَ、対格・属格 ـِينَ。通常の語尾の短母音とは異なる『文字で見える格変化』です。","Dual: ـَانِ nominative / ـَيْنِ accusative-genitive. Sound masculine plural: ـُونَ nominative / ـِينَ accusative-genitive. These are letter-changing case endings."],
["健全女性複数は通常 ـَات を付け、対格も -i（カスラ）を使うなど通常の単数名詞と異なります：رَأَيْتُ مُوَظَّفَاتٍ。","Sound feminine plurals take ـَات and use kasra for accusative as well as genitive in the regular declension: رَأَيْتُ مُوَظَّفَاتٍ."],
["破格複数にはさまざまな型があり、単数から自動生成できない場合が多いです。非人間複数の女性単数一致にも注意してください。","Broken plurals have varied patterns that may not be predictable from the singular. Remember non-human plural agreement."]
],
[["جَاءَ مُوَظَّفُونَ.","社員たちが来ました（男性健全複数・主格）。","Employees came (sound masculine plural, nominative)."],["رَأَيْتُ مُوَظَّفِينَ.","社員たちを見ました（対格）。","I saw employees (accusative)."],["رَأَيْتُ سَيَّارَاتٍ جَدِيدَةً.","新しい車を複数見ました。","I saw new cars."]],
["女性健全複数の対格を男性単数と同様に -a と考えないでください。定・不定を含めて具体例で確認します。","The sound feminine plural has its own accusative marking; do not simply apply masculine singular endings."],
["主格 مُوَظَّفُونَ が対格になると？","What is the accusative of مُوَظَّفُونَ?","مُوَظَّفِينَ。","مُوَظَّفِينَ."]);
add(34,
["1〜10は入口です。実際の会話・仕事では11〜99・100以上の数え方と、数える名詞（تمييز）の形が不可欠です。","Numbers above ten are essential in real conversation and business. Their gender patterns and counted nouns (tamyīz) are not the same as those for 3–10."],
[
["11・12は、原則として名詞の性と数詞が一致します。11：أَحَدَ عَشَرَ كِتَابًا（男性名詞）、إِحْدَى عَشْرَةَ سَيَّارَةً（女性名詞）。数えられる名詞は通常単数対格です。","For 11–12, the numeral generally agrees in gender with the counted noun. Compare أَحَدَ عَشَرَ كِتَابًا and إِحْدَى عَشْرَةَ سَيَّارَةً. The counted noun is singular accusative."],
["13〜19は一の位が性の逆転、十の位 عَشَرَ／عَشْرَةَ が一致するパターン。20・30…90 は عِشْرُونَ／ثَلَاثُونَ … の形で、11〜99の被数名詞は原則単数対格です。","For 13–19 the unit part generally shows reverse gender and the ten-part agrees. Tens are عِشْرُونَ, ثَلَاثُونَ and so on. The counted noun is typically singular accusative across 11–99."],
["100・1000の後ろは原則単数属格：مِئَةُ كِتَابٍ（本100冊）、أَلْفُ كِتَابٍ（本1000冊）。21・22・23以降は性と格の処理がさらに変わります。","After 100 or 1000, the counted noun is typically singular genitive: مِئَةُ كِتَابٍ and أَلْفُ كِتَابٍ. Compound numerals such as 21, 22, 23 require further attention to gender/case."]
],
[["ثَلَاثَةُ كُتُبٍ","本3冊（複数属格）。","Three books (plural genitive)."],["أَحَدَ عَشَرَ كِتَابًا","本11冊（単数対格）。","Eleven books (singular accusative)."],["مِئَةُ كِتَابٍ","本100冊（単数属格）。","One hundred books (singular genitive)."]],
["3〜10の複数属格規則を11〜99にも使うのは誤りです。11〜99は原則『単数対格』と覚え直してください。","Do not extend the plural-genitive pattern of 3–10 to 11–99; the latter typically uses singular accusative."],
["本3冊・11冊・100冊では、كِتَاب の数・格はどう違う？","How does the form of 'book' change after 3, 11 and 100?","3冊＝كُتُبٍ（複数属格）、11冊＝كِتَابًا（単数対格）、100冊＝كِتَابٍ（単数属格）。","3: plural genitive; 11: singular accusative; 100: singular genitive."]);
add(35,
["出来事の順序・時点・条件をつなぐことで、いつ何をしたか、次に何をするかを正確に表せます。","Temporal phrases and condition markers let you explain when events happened, the sequence, and what happens under a condition."],
[
["前後関係：قَبْلَ（～の前）、بَعْدَ（～の後）。後ろは名詞・マスダル・أنْ＋動詞などが続きます：قَبْلَ الِاجْتِمَاعِ（会議前）。","Before and after: قَبْلَ / بَعْدَ, commonly followed by nouns, maṣdars or verbal clauses."],
["順序：أَوَّلًا（まず）、ثُمَّ（それから）、بَعْدَ ذٰلِكَ（その後）、أَخِيرًا（最後に）。短い過去の話でも3段階をつなぐと理解しやすくなります。","Sequence: أَوَّلًا (first), ثُمَّ (then), بَعْدَ ذٰلِكَ (after that), أَخِيرًا (finally). Use them in simple narratives."],
["条件：إِذَا は現実に起こり得る条件、لَوْ は反実仮想・仮定的な条件に使われます。詳しい動詞の型や結果節は第42章で復習します。","إِذَا introduces likely/real conditions; لَوْ often introduces hypothetical or counterfactual conditions. See Chapter 42 for detailed structures."]
],
[["قَبْلَ الِاجْتِمَاعِ سَأُرْسِلُ الْمِلَفَّ.","会議前に資料を送ります。","I will send the file before the meeting."],["عَمِلْتُ ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ.","働いてから帰宅しました。","I worked, then went home."],["إِذَا وَصَلَتِ الْعَيِّنَةُ، سَأُخْبِرُكَ.","サンプルが届いたらお知らせします。","If the sample arrives, I will tell you."]],
["إِذَا 節に完了形が使われても、全体が過去を意味するとは限りません。未来の条件を表すことがあります。","A perfect verb after إِذَا does not automatically make the whole sentence past; the clause often refers to a future condition."],
["「サンプルが届いたら連絡します」を条件文で作ってください。","Form 'If the sample arrives, I will contact you'.","إِذَا وَصَلَتِ الْعَيِّنَةُ، سَأَتَّصِلُ بِكَ。","إِذَا وَصَلَتِ الْعَيِّنَةُ، سَأَتَّصِلُ بِكَ."]);
})();