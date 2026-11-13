(function(){
"use strict";const B=window.FSS_GRAMMAR_DEPTH=window.FSS_GRAMMAR_DEPTH||{};
function add(n,lead,notes,examples,pitfall,check){B[n]={lead,notes,examples,pitfall,check};}
add(36,
["未完了形には直説法・接続法・ジャズム（短形）の3つの法があります。接続する助詞によって動詞の語尾が変わるため、意味とセットで比較します。","The Arabic imperfect has indicative, subjunctive and jussive moods. Particles determine the mood and often change the verb ending."],
[
["規則動詞の基本：يَكْتُبُ（直説法・-u）、أَنْ يَكْتُبَ（接続法・-a）、لَمْ يَكْتُبْ（ジャズム・無母音）。語幹は同じでも語尾が異なります。","For a regular verb: indicative يَكْتُبُ (-u), subjunctive أَنْ يَكْتُبَ (-a), and jussive لَمْ يَكْتُبْ (sukūn)."],
["接続法を導く代表：أَنْ（～すること）、لَنْ（未来の否定）、目的の لِـ。ジャズムを導く代表：لَمْ（過去の否定）、لَا（禁止）、条件の助詞の一部。","Common subjunctive triggers are أَنْ, لَنْ and purpose لِـ. Common jussive triggers include لَمْ and prohibitive لَا, plus some conditional particles."],
["五動詞（المضارع الخمسة）は通常の語尾 -u/-a/-ْ の代わりに ن の有無で区別：يَكْتُبُونَ（直説）→ لَنْ يَكْتُبُوا（接続）／لَمْ يَكْتُبُوا（ジャズム）。女性複数 ـنَ は別の挙動です。","The five-verb forms mark subjunctive/jussive by dropping ن: يَكْتُبُونَ → لَنْ يَكْتُبُوا / لَمْ يَكْتُبُوا. Feminine plural ـنَ behaves differently."]
],
[["أُرِيدُ أَنْ أَذْهَبَ.","行きたいです（接続法）。","I want to go (subjunctive)."],["لَنْ أَتَأَخَّرَ.","遅れません（未来否定・接続法）。","I will not be late (subjunctive)."],["لَمْ أَتَأَخَّرْ.","遅れませんでした（ジャズム）。","I was not late (jussive)."]],
["لَمْ のあとに通常の直説法を置かないでください。語末の母音・語尾 ن の有無が誤答になりやすい点です。","Do not retain indicative endings after لَمْ. Pay attention to final vowels and whether ن remains."],
["أَنْ يَكْتُبُ はなぜ誤りですか？","Why is أَنْ يَكْتُبُ incorrect in formal MSA?","أَنْ は接続法を導くため、正しくは أَنْ يَكْتُبَ。","Because أَنْ takes the subjunctive: أَنْ يَكْتُبَ."]);
add(37,
["弱動詞は語根に و や ي が含まれる動詞です。完了形・未完了形・命令形・接続法／ジャズムで文字が消えたり長母音が変化したりします。","Weak verbs contain a root letter و or ي. Their perfect, imperfect, imperative and mood forms may lose a letter or change vowel length."],
[
["初頭弱動詞（مثال）：وَصَلَ → يَصِلُ（到着する）。末尾弱動詞（ناقص）：دَعَا → يَدْعُو（呼ぶ）、رَمَى → يَرْمِي（投げる）。","Initial-weak example: وَصَلَ → يَصِلُ. Final-weak examples: دَعَا → يَدْعُو, رَمَى → يَرْمِي."],
["中間弱動詞（أجوف）：قَالَ → يَقُولُ（言う）、بَاعَ → يَبِيعُ（売る）。一人称過去は قُلْتُ、بِعْتُ となり、単純な接尾辞追加では作れません。","Hollow verbs: قَالَ → يَقُولُ and بَاعَ → يَبِيعُ. First-person perfects are قُلْتُ and بِعْتُ; merely adding a suffix to the third-person form fails."],
["ジャズム形：يَدْعُو → لَمْ يَدْعُ、يَرْمِي → لَمْ يَرْمِ のように最後の弱文字が落ちることがあります。規則を覚える際は代表語を一組ずつ比較します。","Jussive final-weak forms can drop the final weak letter: يَدْعُو → لَمْ يَدْعُ, يَرْمِي → لَمْ يَرْمِ."]
],
[["قَالَ → قُلْتُ → يَقُولُ","彼は言った→私は言った→彼は言う。","He said → I said → he says."],["بَاعَ → بِعْتُ → يَبِيعُ","彼は売った→私は売った→彼は売る。","He sold → I sold → he sells."],["لَمْ يَدْعُ أَحَدًا.","彼は誰も呼びませんでした。","He did not call anyone."]],
["قَالَ に直接 ـتُ を付けて قَالْتُ とするのは誤り。中間弱動詞は母音が変化します。","Do not form the first-person perfect of قَالَ as **قَالْتُ**; the correct form is قُلْتُ."],
["「私は売った」と「彼は売る」の形は？","Give 'I sold' and 'he sells' from بَاعَ.","بِعْتُ／يَبِيعُ。","بِعْتُ / يَبِيعُ."]);
add(38,
["派生動詞の第II〜X形は、同じ語根に異なる型を適用して意味・自他関係・相互性などを表します。ただし意味は型だけでは完全に予測できません。","Derived Forms II–X modify a root through patterns that may indicate causation, intensification, reciprocity or reflexivity. The exact meaning remains lexical."],
[
["主要な形：II فَعَّلَ（例 عَلَّمَ 教える）、III فَاعَلَ（شَارَكَ 参加する）、IV أَفْعَلَ（أَرْسَلَ 送る）、V تَفَعَّلَ（تَعَلَّمَ 学ぶ）。","Examples: II فَعَّلَ (عَلَّمَ teach), III فَاعَلَ (شَارَكَ participate), IV أَفْعَلَ (أَرْسَلَ send), V تَفَعَّلَ (تَعَلَّمَ learn)."],
["続き：VI تَفَاعَلَ（تَعَاوَنَ 協力する）、VII اِنْفَعَلَ（اِنْكَسَرَ 壊れた）、VIII اِفْتَعَلَ（اِجْتَمَعَ 集まる）、IX اِفْعَلَّ（اِحْمَرَّ 赤くなる）、X اِسْتَفْعَلَ（اِسْتَخْدَمَ 使う）。","Further forms: VI تَفَاعَلَ (تَعَاوَنَ cooperate), VII اِنْفَعَلَ (اِنْكَسَرَ break), VIII اِفْتَعَلَ (اِجْتَمَعَ meet), IX اِفْعَلَّ (اِحْمَرَّ become red), X اِسْتَفْعَلَ (اِسْتَخْدَمَ use)."],
["派生形にも完了形・未完了形・命令形・マスダルがあります。أَرْسَلَ／يُرْسِلُ／أَرْسِلْ／إِرْسَالٌ のように4形をまとめて覚えましょう。","Derived verbs also have perfects, imperfects, imperatives and maṣdars. Study pairs such as أَرْسَلَ / يُرْسِلُ / أَرْسِلْ / إِرْسَالٌ."]
],
[["تَعَلَّمْتُ الْعَرَبِيَّةَ.","アラビア語を学びました（第V形）。","I learned Arabic (Form V)."],["أُرْسِلُ رِسَالَةً.","メッセージを送ります（第IV形）。","I send a message (Form IV)."],["اِجْتَمَعْنَا أَمْسِ.","昨日集まりました（第VIII形）。","We met yesterday (Form VIII)."]],
["派生動詞IIが常に使役、IIIが常に相互動作というわけではありません。型は意味の手掛かりであり、最終的には語彙として覚えます。","Do not assume Form II is always causative or Form III always reciprocal; patterns provide clues, not fixed translations."],
["أَرْسَلَ（送った）の未完了形とマスダルは？","Give the imperfect and maṣdar of أَرْسَلَ.","يُرْسِلُ／إِرْسَالٌ。","يُرْسِلُ / إِرْسَالٌ."]);
add(39,
["名詞文を過去・否定・強調に変えると、كَانَ・لَيْسَ・إِنَّ がよく使われます。それぞれ主語と述語の格の扱いが異なります。","كَانَ, لَيْسَ and إِنَّ modify nominal clauses for past tense, negation and emphasis. They change the case assignment of the subject/predicate."],
[
["كَانَ（～だった）：名前に当たる部分は主格、述語は対格。كَانَ الْجَوُّ حَارًّا（天気は暑かった）。一人称は كُنْتُ。","With كَانَ, the subject remains nominative and the predicate becomes accusative: كَانَ الْجَوُّ حَارًّا. First person: كُنْتُ."],
["لَيْسَ（～ではない）：同様に名詞側は主格、述語は原則対格：لَيْسَ الْمَكْتَبُ بَعِيدًا。前置詞句が述語となる場合は形が異なります。","With لَيْسَ, the nominal subject is nominative and the predicate is generally accusative: لَيْسَ الْمَكْتَبُ بَعِيدًا."],
["إِنَّ（確かに）：後続の名詞を対格に、述語を通常主格にします：إِنَّ الْعَمَلَ مُهِمٌّ。接続代名詞を付けた إِنَّنِي（私は確かに）なども頻出です。","إِنَّ puts the following subject-like noun in the accusative and keeps the predicate nominative: إِنَّ الْعَمَلَ مُهِمٌّ. Pronominal suffixes also attach."]
],
[["كُنْتُ مَشْغُولًا.","私は忙しかったです（男性話者）。","I was busy (male speaker)."],["لَيْسَ هٰذَا صَحِيحًا.","これは正しくありません。","This is not correct."],["إِنَّ الْمَوْعِدَ مُهِمٌّ.","その予定は確かに重要です。","The appointment is indeed important."]],
["كَانَ と إِنَّ を同じ格変化として暗記しないでください。كَانَ は述語が対格、إِنَّ は後ろの名詞が対格です。","Do not confuse case government: كَانَ affects the predicate, إِنَّ the noun immediately following it."],
["كَانَ الْجَوُّ حَارًّا の対格はどの語ですか？","Which word is accusative in كَانَ الْجَوُّ حَارًّا?","حَارًّا（述語）。","حَارًّا (the predicate)."]);
add(40,
["受動態では「誰がしたか」を明示せず、行為を受けた対象を文の中心にします。フスハーでは動詞の内部母音を変える受動形が重要です。","The passive focuses on the affected entity rather than the agent. MSA frequently expresses the passive by changing the verb's internal vowels."],
[
["基本第I形：完了形 فَعَلَ → فُعِلَ、未完了形 يَفْعَلُ → يُفْعَلُ のように母音が変化します：كَتَبَ → كُتِبَ、يَكْتُبُ → يُكْتَبُ。","Typical Form I passive patterns are فُعِلَ for the perfect and يُفْعَلُ for the imperfect: كَتَبَ → كُتِبَ; يَكْتُبُ → يُكْتَبُ."],
["能動文の直接目的語が受動文では主格になります：كَتَبَ الْمُوَظَّفُ التَّقْرِيرَ → كُتِبَ التَّقْرِيرُ。","The active direct object becomes the nominative passive subject: كَتَبَ الْمُوَظَّفُ التَّقْرِيرَ → كُتِبَ التَّقْرِيرُ."],
["派生形の受動態も語形ごとに規則があります。実務文書では『送付された』『確認された』『決定された』のような受動表現がよく使われます。","Derived forms also have passive patterns. Formal documents often use passives meaning 'was sent', 'was confirmed', or 'was decided'."]
],
[["كُتِبَ التَّقْرِيرُ.","報告書が書かれました。","The report was written."],["يُرْسَلُ الْمِلَفُّ الْيَوْمَ.","資料は今日送られます。","The file is sent today."],["فُتِحَ الْبَابُ.","ドアが開けられました。","The door was opened."]],
["受動態では元の目的語を対格のまま残さないでください。新しい主語として主格になります。","Do not retain the old object in the accusative when it becomes the passive subject; it is nominative."],
["能動形 كَتَبَ の過去受動形は？","What is the perfect passive of كَتَبَ?","كُتِبَ。","كُتِبَ."]);
add(41,
["論理的に話すには理由・目的・結果・譲歩を区別することが重要です。似た意味の接続詞でも、後ろに続く動詞・名詞の格が違います。","Clear reasoning requires distinguishing cause, purpose, result and concession. Similar-looking connectors may govern different structures."],
[
["理由は لِأَنَّ（～だから）。名詞を導く場合は إِنَّ 類の構文なので対格に注意：لِأَنَّ الْوَقْتَ قَصِيرٌ（時間が短いので）。","For reasons use لِأَنَّ. With a following noun, the construction resembles إِنَّ and assigns accusative: لِأَنَّ الْوَقْتَ قَصِيرٌ."],
["目的は لِـ＋接続法や مِنْ أَجْلِ＋名詞。例：أَدْرُسُ لِأَتَحَسَّنَ（上達するために勉強する）。","For purpose use لِـ + subjunctive or مِنْ أَجْلِ + noun: أَدْرُسُ لِأَتَحَسَّنَ."],
["譲歩（～にもかかわらず）：رَغْمَ أَنَّ／عَلَى الرَّغْمِ مِنْ أَنَّ など。まず『理由を説明する文』と『予想と違う結果の文』を区別しましょう。","Concession can be expressed with رَغْمَ أَنَّ and related phrases. Distinguish normal causes from unexpected outcomes."]
],
[["لَا أَسْتَطِيعُ الْحُضُورَ لِأَنَّنِي مَشْغُولٌ.","忙しいので出席できません。","I cannot attend because I am busy."],["أَدْرُسُ لِأَتَحَسَّنَ.","上達するために勉強しています。","I study in order to improve."],["رَغْمَ أَنَّهُ مَشْغُولٌ، سَيَأْتِي.","忙しいにもかかわらず、彼は来ます。","Although he is busy, he will come."]],
["لِأَنَّ（理由）と لِـ＋接続法（目的）を混同しないでください。「何が原因か」と「何のためにするか」は別です。","Do not confuse a reason introduced by لِأَنَّ with a purpose introduced by لِـ + subjunctive."],
["「学ぶために読んでいます」を目的の لِـ で言うと？","Form 'I read in order to learn' with purpose لِـ.","أَقْرَأُ لِأَتَعَلَّمَ。","أَقْرَأُ لِأَتَعَلَّمَ."]);
add(42,
["条件文は『もしAならB』ですが、実現可能な条件・反実仮想・一般法則では使う助詞と動詞の組み合わせが異なります。","Conditionals vary depending on whether they express realistic possibilities, hypothetical alternatives or general rules."],
[
["إِذَا は実際に起こり得る条件に便利です：إِذَا وَصَلَ الطَّلَبُ، سَأُخْبِرُكَ（注文が届いたら連絡します）。未来の話でも条件節に完了形を使えます。","إِذَا introduces realistic conditions: إِذَا وَصَلَ الطَّلَبُ، سَأُخْبِرُكَ. The conditional verb can be perfect even with future reference."],
["لَوْ は実現しない・現実と違う可能性を想像するときに使います：لَوْ كَانَ عِنْدِي وَقْتٌ، لَذَهَبْتُ（時間があれば行ったのに）。結果節に لَـ が現れることがあります。","لَوْ often marks counterfactuals: لَوْ كَانَ عِنْدِي وَقْتٌ، لَذَهَبْتُ ('If I had time, I would have gone')."],
["إِنْ＋ジャズム形は書き言葉でよく使われる条件です：إِنْ تَدْرُسْ تَنْجَحْ（勉強すれば成功します）。まず إِذَا と لَوْ の意味の違いから覚えます。","إِنْ + jussive is a formal conditional: إِنْ تَدْرُسْ تَنْجَحْ. Start by contrasting إِذَا and لَوْ."]
],
[["إِذَا كَانَ ذٰلِكَ مُمْكِنًا، سَأُرْسِلُهُ.","可能ならそれを送ります。","If that is possible, I will send it."],["لَوْ كُنْتُ هُنَاكَ، لَسَاعَدْتُكَ.","もし私がそこにいたら、手伝ったでしょう。","If I had been there, I would have helped you."],["إِنْ تَدْرُسْ تَنْجَحْ.","勉強すれば成功します。","If you study, you will succeed."]],
["إِذَا の後が完了形だから必ず過去の条件と判断しないようにします。意味は文全体と後続節で決まります。","A perfect after إِذَا need not refer to the past. Determine timing from the full construction."],
["現実に起こり得る「明日時間があれば」と、反実の「もし時間があったら」はどの助詞？","Which particles best introduce realistic 'if I have time tomorrow' and counterfactual 'if I had time'?","前者 إِذَا、後者 لَوْ。","إِذَا for realistic conditions; لَوْ for counterfactual conditions."]);
add(43,
["誰かの発言を別の人に伝えるときは、直接引用・أنَّ の内容節・動詞 قَالَ（言った）などの構造を選びます。","Reported speech can use direct quotations or embedded content clauses after verbs such as قَالَ."],
[
["直接引用：قَالَ: «سَأَحْضُرُ غَدًا»（『明日来ます』と言った）。話者の言葉をそのまま残す形式です。","Direct speech can quote the original words: قَالَ: «سَأَحْضُرُ غَدًا»."],
["間接的に述べるときは أَنَّ を用いて内容節を導けます：قَالَ إِنَّهُ سَيَحْضُرُ。直説法・時制の対応は英語の機械的な時制の一致とは異なります。","An embedded statement can use إِنَّ/أَنَّ constructions: قَالَ إِنَّهُ سَيَحْضُرُ. Arabic does not follow English backshifting mechanically."],
["確認・報告・伝達には أَخْبَرَ（知らせた）、أَكَّدَ（確認した）、ذَكَرَ（述べた）などを使います。発言内容と自分の推測を混同しないようにします。","Reporting verbs include أَخْبَرَ, أَكَّدَ and ذَكَرَ. Keep the reported fact separate from your inference."]
],
[["قَالَ الْعَمِيلُ إِنَّهُ مَشْغُولٌ.","顧客は忙しいと言いました。","The customer said he was busy."],["أَكَّدَ الْمُدِيرُ أَنَّ السِّعْرَ صَحِيحٌ.","部長は価格が正しいと確認しました。","The manager confirmed that the price is correct."],["أَخْبَرَنِي أَنَّهُ سَيَأْتِي غَدًا.","彼は明日来ると私に知らせました。","He told me that he would come tomorrow."]],
["発言者の言葉と『自分がそう判断した』という意見は違います。أَعْتَقِدُ أَنَّ…（思う）と قَالَ إِنَّ…（言った）を分けます。","Distinguish reported speech (قَالَ إِنَّ) from your own opinion (أَعْتَقِدُ أَنَّ)."],
["「顧客が忙しいと言った」の報告動詞は？","Which verb introduces 'The customer said he was busy'?","قَالَ（言った）。","قَالَ ('said')."]);
add(44,
["能動分詞・受動分詞は動詞から作られた名詞・形容詞に近い形で、「～する人」「～されたもの」「～している状態」などを表します。","Active and passive participles are verb-derived forms that can describe an agent, a patient, or a resulting state."],
[
["第I形の基本：能動分詞 فَاعِلٌ（كَاتِبٌ 書き手）、受動分詞 مَفْعُولٌ（مَكْتُوبٌ 書かれたもの）。人称・数・性や定性に合わせて変化します。","Form I templates: active participle فَاعِلٌ (كَاتِبٌ 'writer') and passive participle مَفْعُولٌ (مَكْتُوبٌ 'written'). They inflect as nominal/adjectival forms."],
["派生形の分詞は多くの場合、未完了形から接頭辞 مُـ を用いる型になります：أَرْسَلَ（IV）→ مُرْسِلٌ（送信者）／مُرْسَلٌ（送られた）。","Derived participles often begin with مُـ: أَرْسَلَ (Form IV) → مُرْسِلٌ (sender) / مُرْسَلٌ (sent)."],
["分詞が述語になると状態を述べられます：الْبَابُ مَفْتُوحٌ（ドアは開いています）。単純な『過去形』と同一視しないでください。","Participles can be predicates describing a state: الْبَابُ مَفْتُوحٌ ('The door is open'). They are not simply finite past verbs."]
],
[["الْبَابُ مَفْتُوحٌ.","ドアは開いています。","The door is open."],["هٰذَا مِلَفٌّ مَكْتُوبٌ بِالْعَرَبِيَّةِ.","これはアラビア語で書かれたファイルです。","This is a file written in Arabic."],["الْمُرْسِلُ وَالْمُسْتَلِمُ","送信者と受信者。","The sender and recipient."]],
["مَكْتُوبٌ（書かれた）と كُتِبَ（書かれた・過去受動動詞）は文法上の品詞が違います。","مَكْتُوبٌ is a participle; كُتِبَ is a finite passive perfect verb."],
["كَتَبَ の能動分詞と受動分詞は？","Give the Form I active and passive participles of كَتَبَ.","كَاتِبٌ／مَكْتُوبٌ。","كَاتِبٌ / مَكْتُوبٌ."]);
add(45,
["長い名詞句は、イダーファ・形容詞・所有接尾辞・関係節を組み合わせて作ります。どの語がどの名詞を修飾するかを段階的に確認します。","Long noun phrases combine iḍāfa, adjectives, possessive suffixes and relative clauses. Parse them from the core noun outward."],
[
["中心となる名詞を見つけます：مَدِيرُ الْمَبِيعَاتِ（営業部長）。その前後に名詞句の構成要素を追加します。","Find the head noun first: مَدِيرُ الْمَبِيعَاتِ ('sales manager'). Add modifiers around the structure without losing track of its head."],
["形容詞は通常イダーファの後に置きます。修飾する名詞の性・数・定性・格に合わせます：مَدِيرُ الشَّرِكَةِ الْجَدِيدُ（新しい部長）対 مَدِيرُ الشَّرِكَةِ الْجَدِيدَةِ（新しい会社の部長）。","In iḍāfa, a following adjective agrees with the noun it modifies: مَدِيرُ الشَّرِكَةِ الْجَدِيدُ (the new manager) versus مَدِيرُ الشَّرِكَةِ الْجَدِيدَةِ (manager of the new company)."],
["関係節を追加すると、直前の名詞に追加説明を与えられます。読むときはイダーファの境界、形容詞、関係代名詞の指示先を確認します。","Relative clauses add further detail; when reading, identify iḍāfa boundaries and the antecedent of each adjective or pronoun."]
],
[["مَدِيرُ الشَّرِكَةِ الْجَدِيدُ","その会社の新しい部長。","The new manager of the company."],["مَدِيرُ الشَّرِكَةِ الْجَدِيدَةِ","その新しい会社の部長。","The manager of the new company."],["مَوْعِدُ تَسْلِيمِ الْعَيِّنَةِ","サンプルの納入予定日。","The sample delivery date."]],
["形容詞をどちらの名詞に一致させるかで意味が変わります。単語の意味だけでなく語尾と構造を読みます。","Agreement can change which noun an adjective modifies; endings are crucial for meaning."],
["مَدِيرُ الشَّرِكَةِ الْجَدِيدَةِ の「新しい」は何を修飾する？","In مَدِيرُ الشَّرِكَةِ الْجَدِيدَةِ, what is 'new'?","الشَّرِكَةِ（会社）を修飾します。","It modifies الشَّرِكَةِ (the company)."]);
add(46,
["否定・例外・限定・強調は、意見や契約条件を正確に伝えるうえで重要です。「全部ではない」「～だけ」を区別して表現します。","Negation, exceptions and focus expressions help specify exactly what is excluded or emphasized."],
[
["例外は إِلَّا（～を除いて／～しか）。名詞の格は文型と否定の有無によって変わるため、初級では「例外に当たる表現」をまとまりで覚えます。","إِلَّا introduces exceptions or restrictive meaning. Case marking of the exception varies by construction; learn common full clauses first."],
["限定には فَقَطْ（～だけ）、إِنَّمَا（まさに～だけ）など。لَا ... إِلَّا ... も『～しか…ない』を表します。","Focus words include فَقَطْ ('only'), إِنَّمَا ('only/indeed'), and لَا ... إِلَّا ('nothing except/only')."],
["否定と限定の位置により意味が変わります。『すべての注文は届いていない』と『すべてが届いていないわけではない』は別の主張です。","The scope of negation matters. 'Not all orders arrived' is not the same as 'All orders failed to arrive'."]
],
[["أُرِيدُ هٰذَا فَقَطْ.","これだけ欲しいです。","I want only this."],["لَا أَحْتَاجُ إِلَّا إِلَى عَيِّنَةٍ وَاحِدَةٍ.","サンプル1点だけ必要です。","I need only one sample."],["حَضَرَ الْجَمِيعُ إِلَّا الْمُدِيرَ.","部長を除いて全員出席しました。","Everyone attended except the manager."]],
["إِلَّا を英語の only と一対一で置き換えないでください。肯定・否定・名詞の格によって文型が変わります。","Do not replace every English 'only' with إِلَّا. Its syntax depends on negation and the exception construction."],
["「これだけ欲しいです」を簡単に表す副詞は？","Which simple word expresses 'I want only this'?","فَقَطْ：أُرِيدُ هٰذَا فَقَطْ。","فَقَطْ: أُرِيدُ هٰذَا فَقَطْ."]);
add(47,
["比較・評価は単なる形容詞暗記ではなく、基準を明示し理由を説明する表現です。価格・品質・納期など実務のテーマで学びます。","Effective comparisons identify a criterion and explain a reason. Practice with price, quality, delivery time and practical choices."],
[
["比較の形：أَفْضَلُ مِنْ（～よりよい）、أَرْخَصُ مِنْ（～より安い）、أَسْرَعُ مِنْ（～より速い）。一つの基準で比較し、そのあと理由を述べます。","Compare using أَفْضَلُ مِنْ, أَرْخَصُ مِنْ or أَسْرَعُ مِنْ. State the metric before giving reasons."],
["理由と対比：لِأَنَّ（なぜなら）、لَكِنْ（しかし）、مِنْ نَاحِيَةٍ أُخْرَى（一方で）。長文ではどの対象の利点を説明しているか明確にします。","Connect evaluation with لِأَنَّ (because), لَكِنْ (but) and مِنْ نَاحِيَةٍ أُخْرَى (on the other hand)."],
["結論は أُفَضِّلُ ...（私は～を選ぶ／好む）、هٰذَا أَنْسَبُ（こちらの方が適切）などで明示します。","Conclude with أُفَضِّلُ ('I prefer') or هٰذَا أَنْسَبُ ('This is more suitable')."]
],
[["هٰذَا الْقُمَاشُ أَفْضَلُ مِنْ ذٰلِكَ.","この生地はあちらよりよいです。","This fabric is better than that one."],["هٰذَا أَغْلَى، لَكِنَّهُ أَفْضَلُ جَوْدَةً.","こちらは高価ですが、品質はよいです。","This is more expensive but better in quality."],["أُفَضِّلُ هٰذَا لِأَنَّهُ أَسْرَعُ.","こちらの方が速いので好みます。","I prefer this because it is faster."]],
["比較の目的語を省略しすぎると、何と何を比較しているか伝わりません。基準（価格・品質）を明示する練習をしましょう。","A comparison without a stated criterion may be ambiguous. Make price, quality or time explicit."],
["「こちらはあちらより安い」を言ってください。","Say 'This is cheaper than that one'.","هٰذَا أَرْخَصُ مِنْ ذٰلِكَ。","هٰذَا أَرْخَصُ مِنْ ذٰلِكَ."]);
add(48,
["自分の意見を筋道立てて話すには「結論→理由→例→補足→再結論」の型が便利です。B1〜B2では接続語の種類を増やします。","For structured opinions, use a sequence: claim, reason, example, qualification and conclusion. At B1–B2, connectors carry more nuance."],
[
["結論：أَعْتَقِدُ أَنَّ...（私は～と思う）、فِي رَأْيِي（私の意見では）。接続詞の後の名詞の格に注意します。","State a position with أَعْتَقِدُ أَنَّ or فِي رَأْيِي. Pay attention to the grammar of the following noun."],
["理由・例：لِأَنَّ（なぜなら）、مَثَلًا（例えば）、عَلَى سَبِيلِ الْمِثَالِ（例として）。一つの理由だけでなく複数の根拠を並べます。","Support your claim with لِأَنَّ, مَثَلًا or عَلَى سَبِيلِ الْمِثَالِ; develop reasons rather than listing disconnected statements."],
["対比・結論：مَعَ ذٰلِكَ（それでも）、مِنْ نَاحِيَةٍ أُخْرَى（一方で）、لِذٰلِكَ（したがって）。段落の関係が見えるように使います。","Develop contrast and conclusion with مَعَ ذٰلِكَ, مِنْ نَاحِيَةٍ أُخْرَى and لِذٰلِكَ."]
],
[["فِي رَأْيِي، هٰذَا الْخِيَارُ أَفْضَلُ.","私の意見では、こちらの選択肢がよいです。","In my opinion, this option is better."],["مَعَ ذٰلِكَ، نَحْتَاجُ إِلَى وَقْتٍ أَكْثَرَ.","それでも、もう少し時間が必要です。","Even so, we need more time."],["لِذٰلِكَ، أُفَضِّلُ الْخِيَارَ الثَّانِيَ.","したがって、2番目の案を選びます。","Therefore, I prefer the second option."]],
["難しい接続詞を増やしても理由と結論がつながっていなければ不自然です。内容を組み立ててから表現を選びます。","Sophisticated connectors cannot compensate for weak logic. Structure the reasoning first."],
["「私の意見では」と「したがって」を表す表現は？","Give an expression for 'in my opinion' and 'therefore'.","فِي رَأْيِي／لِذٰلِكَ。","فِي رَأْيِي / لِذٰلِكَ."]);
add(49,
["業務文書では、依頼・確認・期限・条件・謝意を誤解のない順番で示すことが重要です。フスハーの丁寧な書き言葉を短文から学びます。","Professional Arabic emphasizes clear requests, confirmations, deadlines, terms and thanks. Build polite written communication from concise sentence patterns."],
[
["書き出しは内容に応じて السَّلَامُ عَلَيْكُمْ、تَحِيَّةً طَيِّبَةً など。相手の肩書きや地域文化に合わせる必要がありますが、基本は明確さです。","Openings may include السَّلَامُ عَلَيْكُمْ or تَحِيَّةً طَيِّبَةً depending on the context. Clarity is more important than excessive formality."],
["依頼には يُرْجَى ...（～をお願いいたします）、نَرْجُو ...（～を希望します）、هَلْ يُمْكِنُكُمْ ...؟（～していただけますか）など。相手・期日・対象を明示します。","Polite requests may use يُرْجَى, نَرْجُو or هَلْ يُمْكِنُكُمْ ...؟. State who, what, and by when."],
["合意事項の確認は نُؤَكِّدُ ...（確認します）、سَنُرْسِلُ ...（送ります）など。数量・価格・出荷日などの数字は文中に明示します。","Confirm agreed details with نُؤَكِّدُ and next actions with سَنُرْسِلُ. Include exact quantities, prices and dates."]
],
[["نَرْجُو إِرْسَالَ الْعَيِّنَاتِ.","サンプルの送付をお願いいたします。","We kindly request that you send the samples."],["نُؤَكِّدُ مَوْعِدَ التَّسْلِيمِ.","納入日程を確認いたします。","We confirm the delivery schedule."],["شُكْرًا لِتَعَاوُنِكُمْ.","ご協力ありがとうございます。","Thank you for your cooperation."]],
["丁寧な表現でも、『いつ・何を・どの数量』が曖昧なら実務では不十分です。文章の最後に次の行動を明示しましょう。","Politeness does not replace specifics. A business message must clarify timing, item, quantity and next action."],
["「サンプルの送付をお願いします」を نَرْجُو で作ってください。","Form 'Please send the samples' using نَرْجُو.","نَرْجُو إِرْسَالَ الْعَيِّنَاتِ。","نَرْجُو إِرْسَالَ الْعَيِّنَاتِ."]);
add(50,
["ニュース・説明文を読むときは、すべての単語を一度に訳すのではなく、主語・述語・時・場所・原因・結果を抽出します。","When reading news, identify subject, predicate, time, place, cause and result before translating every word."],
[
["見出しは動詞・格語尾の省略が起こり得ます。本文では قَالَ（述べた）、أَعْلَنَ（発表した）、أَضَافَ（付け加えた）、وَفْقًا لِـ（～によると）などを手掛かりにします。","Headlines may omit elements. In prose, reporting expressions such as قَالَ, أَعْلَنَ, أَضَافَ and وَفْقًا لِـ help track the source of information."],
["受動態・関係節・イダーファが長文を複雑にします。まず動詞を見つけ、誰が行為者かを確認し、その後に修飾部分を展開します。","Passives, relative clauses and iḍāfa chains make sentences complex. Find the main verb, identify participants, then unpack modifiers."],
["要約では「何が起きたか」「なぜ」「次にどうなるか」を2〜3文で説明します。難しい構文を模倣するより、根拠を正確に保つことを優先します。","Summarize what happened, why it happened and what comes next in two or three sentences. Accuracy matters more than copying elaborate syntax."]
],
[["أَعْلَنَتِ الشَّرِكَةُ عَنْ مَشْرُوعٍ جَدِيدٍ.","会社は新規事業を発表しました。","The company announced a new project."],["وَفْقًا لِلتَّقْرِيرِ، زَادَتِ الْمَبِيعَاتُ.","報告書によると、売上が増加しました。","According to the report, sales increased."],["سَيَبْدَأُ الْمَشْرُوعُ الْأُسْبُوعَ الْمُقْبِلَ.","事業は来週開始します。","The project will start next week."]],
["見出しだけで推測した内容を、本文の事実として扱わないでください。発言者と確定情報を分けて読みます。","Do not treat inferences from a headline as confirmed facts from the article. Separate quoted statements from verified events."],
["وَفْقًا لِلتَّقْرِيرِ はどんな情報を示す？","What does وَفْقًا لِلتَّقْرِيرِ signal?","「報告書によると」。情報の出典を示します。","'According to the report': the source of information."]);
add(51,
["総合演習では、学習した文法を実際の発話・文章に転換します。単語を知っていることと、必要な形に活用できることを分けて評価します。","Integrated practice turns grammar knowledge into real speaking and writing. Assess whether you can use forms in context, not merely recognize them."],
[
["短文を構築するときは、①誰が（人称・性・数）、②いつ（過去・現在・未来）、③何を（目的語・格）、④どこで／なぜ（前置詞・理由）、の順で決めます。","Build sentences by deciding: (1) who (person/gender/number), (2) when (tense), (3) what (object and case), (4) where/why (prepositions and reasons)."],
["文をつなげるときは ثُمَّ（その後）、لِأَنَّ（理由）、لَكِنْ（対比）、إِذَا（条件）を必要な場面で使います。無理に難しい接続詞を入れないことが大切です。","Connect ideas with ثُمَّ, لِأَنَّ, لَكِنْ and إِذَا where useful. Avoid adding advanced connectors without a clear relation."],
["見直しの順序：動詞の主語・時制→名詞の定性と性→形容詞の一致→目的語と前置詞→格語尾。まず伝達できる短文を作り、次に正式なフスハーへ精密化します。","Review in this order: person/tense, noun definiteness and gender, adjective agreement, objects and prepositions, then formal case endings. Build clear sentences before refining formal accuracy."]
],
[["أُرِيدُ أَنْ أُغَيِّرَ الْمَوْعِدَ.","予定を変更したいです。","I want to change the appointment."],["لَنْ أَحْضُرَ لِأَنَّنِي مَشْغُولٌ.","忙しいので出席しません（男性話者）。","I will not attend because I am busy (male speaker)."],["إِذَا وَصَلَتِ الْعَيِّنَاتُ، سَأُخْبِرُكَ.","サンプルが届いたらお知らせします。","If the samples arrive, I will inform you."]],
["例文を丸暗記できても、人称・時制・数量を変えると誤ることがあります。毎回少なくとも2つの要素を変えて練習しましょう。","Memorizing examples is not enough. Change at least two variables (person, tense, quantity, place) when practicing."],
["「サンプルが届いたら、明日顧客に知らせる」を作ってください。","Form 'If the samples arrive, I will inform the customer tomorrow'.","إِذَا وَصَلَتِ الْعَيِّنَاتُ، سَأُخْبِرُ الْعَمِيلَ غَدًا。","إِذَا وَصَلَتِ الْعَيِّنَاتُ، سَأُخْبِرُ الْعَمِيلَ غَدًا."]);
})();