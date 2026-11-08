(function(){
const L=window.FSS_makeLesson;
L(5,{
title:"Time, Appointments & Plans",jaTitle:"時間・予定・約束",arTitle:"الْوَقْتُ وَالْمَوَاعِيدُ",
goals:[["Ask and answer questions about time and dates.","時刻・日付・曜日について質問できる"],["Arrange a meeting and confirm its time and place.","会う日時と場所を決めて確認できる"],["Change an appointment politely and suggest another time.","予定を丁寧に変更し、別の日時を提案できる"]],
review:[["Say where you are going and ask how long it takes.","行き先と所要時間を伝える"],["Practise numbers and prices out loud.","数字と値段を声に出して復習する"]],
vocab:[
["v","أَلْتَقِي","altaqī","I meet","会う","اِلْتَقَى","يَلْتَقِي","أَلْتَقِي"],
["v","أَنْتَظِرُ","antaẓiru","I wait","待つ","اِنْتَظَرَ","يَنْتَظِرُ","أَنْتَظِرُ"],
["v","أَبْدَأُ","abdaʾu","I start","始める","بَدَأَ","يَبْدَأُ","أَبْدَأُ"],
["v","أَنْتَهِي","antahī","I finish","終える","اِنْتَهَى","يَنْتَهِي","أَنْتَهِي"],
["v","أُغَيِّرُ","ughayyiru","I change","変更する","غَيَّرَ","يُغَيِّرُ","أُغَيِّرُ"],
["v","أُؤَكِّدُ","uʾakkidu","I confirm","確認する","أَكَّدَ","يُؤَكِّدُ","أُؤَكِّدُ"],
["n","وَقْتٌ","waqt","time","時間","أَوْقَاتٌ","m"],
["n","سَاعَةٌ","sāʿa","hour / clock","時間・時計","سَاعَاتٌ","f"],
["n","دَقِيقَةٌ","daqīqa","minute","分","دَقَائِقُ","f"],
["n","مَوْعِدٌ","mawʿid","appointment","約束・予約","مَوَاعِيدُ","m"],
["n","اِجْتِمَاعٌ","ijtimāʿ","meeting","会議","اِجْتِمَاعَاتٌ","m"],
["n","يَوْمٌ","yawm","day","日","أَيَّامٌ","m"],
["n","أُسْبُوعٌ","usbūʿ","week","週","أَسَابِيعُ","m"],
["n","شَهْرٌ","shahr","month","月","شُهُورٌ","m"],
["n","صَبَاحٌ","ṣabāḥ","morning","朝","أَصْبَاحٌ","m"],
["n","مَسَاءٌ","masāʾ","evening","夕方","أَمْسِيَاتٌ","m"],
["a","مُتَاحٌ","mutāḥ","available / free","都合がつく","مُتَاحَةٌ"],
["a","مَشْغُولٌ","mashghūl","busy","忙しい","مَشْغُولَةٌ"],
["a","مُنَاسِبٌ","munāsib","suitable","都合がよい","مُنَاسِبَةٌ"],
["e","غَدًا","ghadan","tomorrow","明日"]
],
grammar:[
["Asking the time","時刻の聞き方","كَمِ السَّاعَةُ؟ means 'What time is it?' To schedule something, ask مَتَى ...؟ ('When...?').","今の時刻は كَمِ السَّاعَةُ؟、予定の日時を聞くときは مَتَى ...؟ を使います。",["كَمِ السَّاعَةُ الْآنَ؟","kami as-sāʿatu al-āna","What time is it now?","今何時ですか？"]],
["Simple future with سَـ","未来を表す سَـ","Put سَـ before the imperfect to express the future: سَأَرْسِلُ means 'I will send'.","未完了形の前に سَـ を付けると未来を表せます。سَأَرْسِلُ は「送ります」。",["سَأَلْتَقِي بِكَ غَدًا.","sa-altaqī bika ghadan","I'll meet you tomorrow.","明日お会いします。"]],
["Agreement and availability","予定調整の表現","مُتَاحٌ is masculine; مُتَاحَةٌ is feminine. مَوْعِدٌ مُنَاسِبٌ means a suitable appointment.","「空いている」は男性 مُتَاحٌ、女性 مُتَاحَةٌ。「都合のよい予定」は مَوْعِدٌ مُنَاسِبٌ。",["هَلْ أَنْتَ مُتَاحٌ غَدًا؟","hal anta mutāḥun ghadan","Are you free tomorrow? (to a man)","明日は空いていますか？（男性に）"]]
],
phrases:[
["كَمِ السَّاعَةُ الْآنَ؟","kami as-sāʿatu al-āna","What time is it now?","今何時ですか？"],
["السَّاعَةُ الثَّالِثَةُ.","as-sāʿatu ath-thālitha","It's three o'clock.","3時です。"],
["مَتَى سَنَلْتَقِي؟","matā sanaltaqī","When shall we meet?","いつ会いましょうか？"],
["هَلْ أَنْتَ مُتَاحٌ غَدًا؟","hal anta mutāḥun ghadan","Are you free tomorrow?","明日は空いていますか？"],
["أَنَا مَشْغُولٌ صَبَاحًا.","anā mashghūlun ṣabāḥan","I'm busy in the morning.","午前中は忙しいです。"],
["هَلْ نَلْتَقِي بَعْدَ الظُّهْرِ؟","hal naltaqī baʿda aẓ-ẓuhr","Shall we meet in the afternoon?","午後に会いませんか？"],
["السَّاعَةُ الرَّابِعَةُ تُنَاسِبُنِي.","as-sāʿatu ar-rābiʿatu tunāsibunī","Four o'clock works for me.","4時なら都合がよいです。"],
["أَيْنَ سَنَلْتَقِي؟","ayna sanaltaqī","Where shall we meet?","どこで会いましょうか？"],
["لَدَيَّ اِجْتِمَاعٌ غَدًا.","ladayya ijtimāʿun ghadan","I have a meeting tomorrow.","明日会議があります。"],
["أُرِيدُ تَغْيِيرَ الْمَوْعِدِ.","urīdu taghyīra al-mawʿid","I'd like to change the appointment.","予定を変更したいです。"],
["هَلْ يُنَاسِبُكَ يَوْمُ الْخَمِيسِ؟","hal yunāsibuka yawmu al-khamīs","Does Thursday work for you?","木曜日は都合がよいですか？"],
["سَأُؤَكِّدُ الْمَوْعِدَ لَاحِقًا.","sa-uʾakkidu al-mawʿida lāḥiqan","I'll confirm the appointment later.","後で予定を確認します。"]
],
dialogues:[
["Arranging a meeting","打ち合わせを決める",[
["A","مَتَى سَنَلْتَقِي؟","matā sanaltaqī","When shall we meet?","いつ会いましょうか？"],
["B","هَلْ أَنْتَ مُتَاحٌ غَدًا؟","hal anta mutāḥun ghadan","Are you free tomorrow?","明日は空いていますか？"],
["A","نَعَمْ، بَعْدَ الظُّهْرِ.","naʿam, baʿda aẓ-ẓuhr","Yes, in the afternoon.","はい、午後なら大丈夫です。"],
["B","إِذًا، السَّاعَةَ الرَّابِعَةَ.","idhan, as-sāʿata ar-rābiʿa","Then at four.","では4時に。"]
]],
["Changing a plan","予定を変更する",[
["A","أَعْتَذِرُ، أُرِيدُ تَغْيِيرَ الْمَوْعِدِ.","aʿtadhiru, urīdu taghyīra al-mawʿid","Sorry, I'd like to change the meeting.","すみません、予定を変更したいです。"],
["B","لَا مُشْكِلَةَ. مَتَى تُفَضِّلُ؟","lā mushkila. matā tufaḍḍil","No problem. When do you prefer?","大丈夫です。いつがご希望ですか？"],
["A","هَلْ يُنَاسِبُكَ يَوْمُ الْخَمِيسِ؟","hal yunāsibuka yawmu al-khamīs","Does Thursday work for you?","木曜日はどうですか？"],
["B","نَعَمْ، هَذَا مُنَاسِبٌ.","naʿam, hādhā munāsib","Yes, that works.","はい、都合がよいです。"]
]],
["Confirming the location","場所を確認する",[
["A","أَيْنَ سَنَلْتَقِي؟","ayna sanaltaqī","Where shall we meet?","どこで会いましょうか？"],
["B","فِي مَكْتَبِنَا فِي دُبَيّ.","fī maktabinā fī dubayy","At our office in Dubai.","ドバイの弊社オフィスで。"],
["A","السَّاعَةَ الرَّابِعَةَ، صَحِيحٌ؟","as-sāʿata ar-rābiʿa, ṣaḥīḥ","At four, correct?","4時で合っていますか？"],
["B","نَعَمْ، سَأُؤَكِّدُ الْمَوْعِدَ.","naʿam, sa-uʾakkidu al-mawʿid","Yes, I'll confirm the appointment.","はい、予定を確定します。"]
]]
],
practice:[
["Ask about time and availability.","時間と空き状況を尋ねる。",[["Ask when two people can meet.","会える日時について質問する。"],["Offer a morning and an afternoon option.","午前と午後の候補を提案する。"]],[0,2,3]],
["Arrange or reschedule.","予定を決め直す。",[["Arrange a meeting for a specific time and location.","具体的な時刻と場所を決める。"],["Decline one option and propose another day.","候補を1つ断り、別の日を提案する。"]],[5,7,10]],
["Confirm without notes.","見ずに予定を確認する。",[["Confirm who, where and when.","相手・場所・日時を確認する。"],["Explain you will confirm by message later.","後でメッセージで確認すると伝える。"]],[8,9,11]]
]
});
L(6,{
title:"Yesterday, Past Events & Short Stories",jaTitle:"昨日の出来事・過去形",arTitle:"الْمَاضِي وَمَا حَدَثَ أَمْسِ",
goals:[["Say what you did yesterday using perfect verbs.","完了形を使って昨日の行動を説明できる"],["Tell a short past story in chronological order.","過去の出来事を時系列で短く話せる"],["Ask someone about their weekend and reply.","週末について質問し、答えられる"]],
review:[["Say tomorrow's plan using سَـ.","سَـ を使って明日の予定を話す"],["Ask about a meeting time and place.","会う日時・場所を確認する"]],
vocab:[
["v","ذَهَبْتُ","dhahabtu","I went","行った","ذَهَبَ","يَذْهَبُ","أَذْهَبُ"],
["v","عَمِلْتُ","ʿamiltu","I worked","働いた","عَمِلَ","يَعْمَلُ","أَعْمَلُ"],
["v","دَرَسْتُ","darastu","I studied","勉強した","دَرَسَ","يَدْرُسُ","أَدْرُسُ"],
["v","أَكَلْتُ","akaltu","I ate","食べた","أَكَلَ","يَأْكُلُ","آكُلُ"],
["v","شَرِبْتُ","sharibtu","I drank","飲んだ","شَرِبَ","يَشْرَبُ","أَشْرَبُ"],
["v","رَجَعْتُ","rajaʿtu","I returned","帰った","رَجَعَ","يَرْجِعُ","أَرْجِعُ"],
["v","شَاهَدْتُ","shāhadtu","I watched","見た","شَاهَدَ","يُشَاهِدُ","أُشَاهِدُ"],
["v","قَابَلْتُ","qābaltu","I met","会った","قَابَلَ","يُقَابِلُ","أُقَابِلُ"],
["v","اِشْتَرَيْتُ","ishtaraytu","I bought","買った","اِشْتَرَى","يَشْتَرِي","أَشْتَرِي"],
["v","نِمْتُ","nimtu","I slept","寝た","نَامَ","يَنَامُ","أَنَامُ"],
["n","عَمَلٌ","ʿamal","work","仕事","أَعْمَالٌ","m"],
["n","يَوْمٌ","yawm","day","日","أَيَّامٌ","m"],
["n","أُسْبُوعٌ","usbūʿ","week","週","أَسَابِيعُ","m"],
["n","مَطْعَمٌ","maṭʿam","restaurant","レストラン","مَطَاعِمُ","m"],
["n","صَدِيقٌ","ṣadīq","friend","友人","أَصْدِقَاءُ","m"],
["n","فِيلْمٌ","fīlm","film / movie","映画","أَفْلَامٌ","m"],
["n","رِحْلَةٌ","riḥla","trip","旅行","رِحْلَاتٌ","f"],
["a","جَمِيلٌ","jamīl","nice / beautiful","よい・美しい","جَمِيلَةٌ"],
["a","طَوِيلٌ","ṭawīl","long","長い","طَوِيلَةٌ"],
["e","أَمْسِ","ams","yesterday","昨日"]
],
grammar:[
["Perfect tense: I, he and she","完了形：私・彼・彼女","The perfect marks a completed action. ذَهَبَ means 'he went', ذَهَبْتُ 'I went', and ذَهَبَتْ 'she went'.","完了形は完了した動作を表します。ذَهَبَ（彼は行った）、ذَهَبْتُ（私は行った）、ذَهَبَتْ（彼女は行った）の形を比較します。",["ذَهَبْتُ إِلَى الْمَكْتَبِ أَمْسِ.","dhahabtu ilā al-maktab amsi","I went to the office yesterday.","昨日オフィスへ行きました。"]],
["Negative past using مَا","過去の否定 مَا","For a simple past negative in Fuṣḥā, مَا + perfect can be used: مَا ذَهَبْتُ ('I did not go').","過去の否定には مَا＋完了形を使えます。مَا ذَهَبْتُ は「行きませんでした」。",["مَا عَمِلْتُ يَوْمَ السَّبْتِ.","mā ʿamiltu yawma as-sabt","I didn't work on Saturday.","土曜日は働きませんでした。"]],
["Link events with ثُمَّ","出来事をつなぐ ثُمَّ","Use ثُمَّ for 'then'. It helps turn separate past actions into a coherent short story.","ثُمَّ は「その後」。複数の過去の動作をつなげると、出来事の順序を説明できます。",["عَمِلْتُ، ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ.","ʿamiltu, thumma rajaʿtu ilā al-bayt","I worked and then went home.","働いてから家に帰りました。"]]
],
phrases:[
["مَاذَا فَعَلْتَ أَمْسِ؟","mādhā faʿalta amsi","What did you do yesterday?","昨日何をしましたか？（男性に）"],
["ذَهَبْتُ إِلَى الْمَكْتَبِ.","dhahabtu ilā al-maktab","I went to the office.","オフィスに行きました。"],
["عَمِلْتُ حَتَّى الْمَسَاءِ.","ʿamiltu ḥattā al-masāʾ","I worked until evening.","夕方まで働きました。"],
["تَنَاوَلْتُ الْغَدَاءَ مَعَ صَدِيقٍ.","tanāwaltu al-ghadāʾa maʿa ṣadīq","I had lunch with a friend.","友人と昼食をとりました。"],
["رَجَعْتُ إِلَى الْبَيْتِ مَسَاءً.","rajaʿtu ilā al-bayt masāʾan","I returned home in the evening.","夕方帰宅しました。"],
["شَاهَدْتُ فِيلْمًا فِي الْبَيْتِ.","shāhadtu fīlman fī al-bayt","I watched a movie at home.","家で映画を見ました。"],
["كَيْفَ كَانَتْ عُطْلَتُكَ؟","kayfa kānat ʿuṭlatuka","How was your holiday / weekend?","休みはどうでしたか？"],
["كَانَ يَوْمًا جَمِيلًا.","kāna yawman jamīlan","It was a nice day.","よい一日でした。"],
["مَا ذَهَبْتُ إِلَى الْعَمَلِ أَمْسِ.","mā dhahabtu ilā al-ʿamal amsi","I didn't go to work yesterday.","昨日は仕事に行きませんでした。"],
["قَابَلْتُ عَمِيلًا جَدِيدًا.","qābaltu ʿamīlan jadīdan","I met a new customer.","新しい顧客に会いました。"],
["اِشْتَرَيْتُ شَيْئًا جَدِيدًا.","ishtaraytu shayʾan jadīdan","I bought something new.","新しいものを買いました。"],
["وَبَعْدَ ذَلِكَ ذَهَبْتُ إِلَى الْبَيْتِ.","wa-baʿda dhālika dhahabtu ilā al-bayt","After that, I went home.","その後、家に帰りました。"]
],
dialogues:[
["Yesterday at work","昨日の仕事",[
["A","مَاذَا فَعَلْتَ أَمْسِ؟","mādhā faʿalta amsi","What did you do yesterday?","昨日何をしましたか？"],
["B","ذَهَبْتُ إِلَى الْمَكْتَبِ وَعَمِلْتُ.","dhahabtu ilā al-maktab wa-ʿamiltu","I went to the office and worked.","出社して仕事をしました。"],
["A","هَلْ قَابَلْتَ عَمِيلًا؟","hal qābalta ʿamīlan","Did you meet a customer?","顧客に会いましたか？"],
["B","نَعَمْ، قَابَلْتُ عَمِيلًا جَدِيدًا.","naʿam, qābaltu ʿamīlan jadīdan","Yes, I met a new customer.","はい、新しい顧客に会いました。"]
]],
["A weekend story","週末の出来事",[
["A","كَيْفَ كَانَتْ عُطْلَتُكَ؟","kayfa kānat ʿuṭlatuka","How was your weekend?","週末はどうでしたか？"],
["B","كَانَتْ جَمِيلَةً. ذَهَبْتُ إِلَى مَطْعَمٍ.","kānat jamīla. dhahabtu ilā maṭʿam","It was nice. I went to a restaurant.","よかったです。レストランに行きました。"],
["A","مَعَ مَنْ ذَهَبْتَ؟","maʿa man dhahabta","With whom did you go?","誰と行きましたか？"],
["B","مَعَ صَدِيقٍ، ثُمَّ رَجَعْتُ إِلَى الْبَيْتِ.","maʿa ṣadīq, thumma rajaʿtu ilā al-bayt","With a friend, then I went home.","友人とです。その後帰宅しました。"]
]],
["Changing the subject","主語を変えて答える",[
["A","هَلْ ذَهَبَ صَدِيقُكَ إِلَى الْعَمَلِ؟","hal dhahaba ṣadīquka ilā al-ʿamal","Did your friend go to work?","友人は仕事に行きましたか？"],
["B","نَعَمْ، ذَهَبَ صَبَاحًا.","naʿam, dhahaba ṣabāḥan","Yes, he went in the morning.","はい、彼は朝行きました。"],
["A","وَأَنْتَ؟","wa-anta","And you?","あなたは？"],
["B","مَا ذَهَبْتُ، بَقِيتُ فِي الْبَيْتِ.","mā dhahabtu, baqītu fī al-bayt","I didn't go. I stayed at home.","私は行かず、家にいました。"]
]]
],
practice:[
["Use six past verbs.","過去形の動詞6個を使う。",[["Say six things you did or didn't do yesterday.","昨日したこと・しなかったことを6文で話す。"],["Change three I-statements to he-statements.","「私は」を「彼は」に3文変換する。"]],[0,1,8]],
["Tell a short chronological story.","時系列で短い話を作る。",[["Describe your morning, afternoon and evening yesterday.","昨日の朝・午後・夜を説明する。"],["Link events with ثُمَّ and بَعْدَ ذَلِكَ.","ثُمَّ と بَعْدَ ذَلِكَ でつなぐ。"]],[2,4,11]],
["Hold a past-tense conversation.","過去の会話を続ける。",[["Ask what someone did last weekend.","相手の週末について質問する。"],["Speak for one minute without looking at any script.","台本を見ずに1分間話す。"]],[6,7,9]]
]
});
})();