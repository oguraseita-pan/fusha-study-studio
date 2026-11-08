(function(){
const L=window.FSS_makeLesson;
L(7,{
title:"Hotels, Home & Requests",jaTitle:"ホテル・住まい・丁寧な依頼",arTitle:"الْفُنْدُقُ وَالْبَيْتُ وَالطَّلَبَاتُ",
goals:[["Check into a hotel and confirm a reservation.","ホテルで予約を確認し、チェックインできる"],["Describe a room or home problem clearly.","部屋や住まいの不具合を説明できる"],["Ask for help and confirm the solution.","丁寧に修理・対応を依頼し、時間を確認できる"]],
review:[["Say when and where you met someone yesterday.","昨日誰といつどこで会ったか話す"],["Ask someone to repeat something slowly.","相手にゆっくり言い直してもらう"]],
vocab:[
["v","أَحْجِزُ","aḥjizu","I book / reserve","予約する","حَجَزَ","يَحْجِزُ","أَحْجِزُ"],
["v","أَحْتَاجُ","aḥtāju","I need","必要とする","اِحْتَاجَ","يَحْتَاجُ","أَحْتَاجُ"],
["v","أَطْلُبُ","aṭlubu","I request","依頼する","طَلَبَ","يَطْلُبُ","أَطْلُبُ"],
["v","أُصْلِحُ","uṣliḥu","I fix","修理する","أَصْلَحَ","يُصْلِحُ","أُصْلِحُ"],
["v","أَنْتَظِرُ","antaẓiru","I wait","待つ","اِنْتَظَرَ","يَنْتَظِرُ","أَنْتَظِرُ"],
["v","يَعْمَلُ","yaʿmalu","it works / he works","動作する・働く","عَمِلَ","يَعْمَلُ","أَعْمَلُ"],
["n","فُنْدُقٌ","funduq","hotel","ホテル","فَنَادِقُ","m"],
["n","غُرْفَةٌ","ghurfa","room","部屋","غُرَفٌ","f"],
["n","حَجْزٌ","ḥajz","reservation","予約","حُجُوزَاتٌ","m"],
["n","مِفْتَاحٌ","miftāḥ","key","鍵","مَفَاتِيحُ","m"],
["n","مُكَيِّفٌ","mukayyif","air conditioner","エアコン","مُكَيِّفَاتٌ","m"],
["n","بَابٌ","bāb","door","ドア","أَبْوَابٌ","m"],
["n","مِصْعَدٌ","miṣʿad","elevator","エレベーター","مَصَاعِدُ","m"],
["n","حَمَّامٌ","ḥammām","bathroom","浴室・トイレ","حَمَّامَاتٌ","m"],
["n","مُشْكِلَةٌ","mushkila","problem","問題","مَشَاكِلُ","f"],
["n","صِيَانَةٌ","ṣiyāna","maintenance","保守・修理","","f"],
["n","مُوَظَّفٌ","muwaẓẓaf","staff member","スタッフ","مُوَظَّفُونَ","m"],
["a","نَظِيفٌ","naẓīf","clean","清潔な","نَظِيفَةٌ"],
["a","مَكْسُورٌ","maksūr","broken","壊れた","مَكْسُورَةٌ"],
["a","مُتَاحٌ","mutāḥ","available","空いている・利用可能","مُتَاحَةٌ"]
],
grammar:[
["Express possession with عِنْدِي","「～がある」を表す عِنْدِي","عِنْدِي + noun means 'I have...'. It works well for reservations and problems.","عِنْدِي＋名詞で「私には～があります」。予約や問題を伝えるときに便利です。",["عِنْدِي حَجْزٌ بِاسْمِي.","ʿindī ḥajzun bi-ismī","I have a reservation under my name.","私の名前で予約しています。"]],
["Negative present with لَا","現在の否定 لَا","Put لَا before the imperfect verb: لَا يَعْمَلُ means 'does not work'.","未完了形の前に لَا を置くと現在の否定になります。لَا يَعْمَلُ は「動いていません」。",["الْمُكَيِّفُ لَا يَعْمَلُ.","al-mukayyifu lā yaʿmal","The air conditioner isn't working.","エアコンが動きません。"]],
["Polite requests with هَلْ يُمْكِنُ","丁寧な依頼 هَلْ يُمْكِنُ","هَلْ يُمْكِنُ أَنْ ...؟ asks if something is possible. Keep the following verb in the proper form.","هَلْ يُمْكِنُ أَنْ ...؟ は「～してもらえますか」。後ろの動詞の形にも気をつけます。",["هَلْ يُمْكِنُ إِرْسَالُ شَخْصٍ لِلصِّيَانَةِ؟","hal yumkinu irsālu shakhṣin liṣ-ṣiyāna","Could you send someone for maintenance?","修理担当の方を呼んでもらえますか？"]]
],
phrases:[
["عِنْدِي حَجْزٌ بِاسْمِي.","ʿindī ḥajzun bi-ismī","I have a reservation under my name.","私の名前で予約しています。"],
["أُرِيدُ تَسْجِيلَ الْوُصُولِ.","urīdu tasjīla al-wuṣūl","I'd like to check in.","チェックインをお願いします。"],
["أَيْنَ غُرْفَتِي؟","ayna ghurfatī","Where is my room?","私の部屋はどこですか？"],
["أَيْنَ الْمِصْعَدُ؟","ayna al-miṣʿad","Where is the elevator?","エレベーターはどこですか？"],
["الْمُكَيِّفُ لَا يَعْمَلُ.","al-mukayyifu lā yaʿmal","The AC isn't working.","エアコンが動きません。"],
["هُنَاكَ مُشْكِلَةٌ فِي الْغُرْفَةِ.","hunāka mushkilatun fī al-ghurfa","There is a problem in the room.","部屋に問題があります。"],
["الْبَابُ مَكْسُورٌ.","al-bābu maksūr","The door is broken.","ドアが壊れています。"],
["أَحْتَاجُ إِلَى مُسَاعَدَةٍ.","aḥtāju ilā musāʿada","I need some help.","助けが必要です。"],
["هَلْ يُمْكِنُ إِرْسَالُ شَخْصٍ لِلصِّيَانَةِ؟","hal yumkinu irsālu shakhṣin liṣ-ṣiyāna","Could someone come to repair it?","修理担当者に来てもらえますか？"],
["مَتَى سَيَأْتِي الْفَنِّيُّ؟","matā sayaʾtī al-fanniyy","When will the technician come?","修理担当者はいつ来ますか？"],
["هَلْ يُمْكِنُ تَغْيِيرُ الْغُرْفَةِ؟","hal yumkinu taghyīru al-ghurfa","Could I change rooms?","部屋を変更できますか？"],
["شُكْرًا عَلَى مُسَاعَدَتِكَ.","shukran ʿalā musāʿadatika","Thank you for your help.","ご対応ありがとうございます。"]
],
dialogues:[
["Hotel check-in","ホテルでのチェックイン",[
["A","مَرْحَبًا، عِنْدِي حَجْزٌ بِاسْمِي.","marḥaban, ʿindī ḥajzun bi-ismī","Hello, I have a reservation.","こんにちは。予約しています。"],
["B","أَهْلًا بِكَ. مَا اسْمُكَ؟","ahlan bika. mā ismuka","Welcome. What is your name?","ようこそ。お名前は？"],
["A","اِسْمِي كِينْجِي. أُرِيدُ تَسْجِيلَ الْوُصُولِ.","ismī kīnjī. urīdu tasjīla al-wuṣūl","I'm Kenji. I'd like to check in.","ケンジです。チェックインしたいです。"],
["B","تَفَضَّلْ، هَذَا مِفْتَاحُ غُرْفَتِكَ.","tafaḍḍal, hādhā miftāḥu ghurfatika","Here is your room key.","こちらが部屋の鍵です。"]
]],
["Reporting a problem","不具合を伝える",[
["A","هُنَاكَ مُشْكِلَةٌ فِي غُرْفَتِي.","hunāka mushkilatun fī ghurfatī","There's a problem in my room.","部屋に問題があります。"],
["B","مَا الْمُشْكِلَةُ؟","mā al-mushkila","What's the problem?","どのような問題ですか？"],
["A","الْمُكَيِّفُ لَا يَعْمَلُ.","al-mukayyifu lā yaʿmal","The AC isn't working.","エアコンが動きません。"],
["B","سَنُرْسِلُ شَخْصًا لِلصِّيَانَةِ.","sanursilu shakhṣan liṣ-ṣiyāna","We'll send someone for maintenance.","修理担当者を手配します。"]
]],
["Requesting a solution","解決を依頼する",[
["A","مَتَى سَيَأْتِي الْفَنِّيُّ؟","matā sayaʾtī al-fanniyy","When will the technician come?","担当者はいつ来ますか？"],
["B","خِلَالَ سَاعَةٍ.","khilāla sāʿa","Within an hour.","1時間以内です。"],
["A","هَلْ يُمْكِنُ تَغْيِيرُ الْغُرْفَةِ إِذَا لَمْ يَعْمَلِ الْمُكَيِّفُ؟","hal yumkinu taghyīru al-ghurfa idhā lam yaʿmal al-mukayyif","Could I change rooms if the AC doesn't work?","直らなければ部屋を変更できますか？"],
["B","نَعَمْ، سَنُسَاعِدُكَ.","naʿam, sanusāʿiduka","Yes, we will help you.","はい、対応いたします。"]
]]
],
practice:[
["Handle a hotel check-in.","ホテルでチェックインする。",[["State a name and confirm a reservation.","名前と予約の有無を伝える。"],["Ask where the room and elevator are.","部屋とエレベーターの場所を尋ねる。"]],[0,1,3]],
["Explain an apartment issue.","住まいの不具合を説明する。",[["Describe a broken air conditioner and door.","エアコンとドアの不具合を説明する。"],["Request maintenance and ask when someone can come.","修理を依頼し、訪問時間を確認する。"]],[4,6,9]],
["Negotiate a practical solution.","解決策を確認する。",[["Explain why the proposed solution is not enough.","提案された対応で不十分な点を伝える。"],["Ask about an alternative room or another visit time.","部屋の変更や別の訪問時刻を尋ねる。"]],[8,10,11]]
]
});
L(8,{
title:"Health, Pharmacy & Feeling Unwell",jaTitle:"体調・薬局・症状の説明",arTitle:"الصِّحَّةُ وَالصَّيْدَلِيَّةُ",
goals:[["Describe basic symptoms and where you feel pain.","体調不良と痛みの場所を説明できる"],["Explain when symptoms started and how long they lasted.","症状がいつ始まり、どのくらい続いているか話せる"],["Ask for a pharmacy or medical appointment.","薬局や診察の場所・予約を尋ねられる"]],
review:[["Explain a problem and ask for help.","不具合と助けが必要な理由を伝える"],["Ask when assistance will arrive.","対応に来る時間を尋ねる"]],
vocab:[
["v","أَشْعُرُ","ashʿuru","I feel","感じる","شَعَرَ","يَشْعُرُ","أَشْعُرُ"],
["v","أَتَأَلَّمُ","ataʾallamu","I feel pain","痛む","تَأَلَّمَ","يَتَأَلَّمُ","أَتَأَلَّمُ"],
["v","أَسْتَطِيعُ","astaṭīʿu","I can","できる","اِسْتَطَاعَ","يَسْتَطِيعُ","أَسْتَطِيعُ"],
["v","أَحْتَاجُ","aḥtāju","I need","必要だ","اِحْتَاجَ","يَحْتَاجُ","أَحْتَاجُ"],
["v","أُرِيدُ","urīdu","I want","欲しい・～したい","أَرَادَ","يُرِيدُ","أُرِيدُ"],
["v","أَتَنَاوَلُ","atanāwalu","I take / consume","飲む・服用する","تَنَاوَلَ","يَتَنَاوَلُ","أَتَنَاوَلُ"],
["n","صِحَّةٌ","ṣiḥḥa","health","健康","","f"],
["n","صَيْدَلِيَّةٌ","ṣaydaliyya","pharmacy","薬局","صَيْدَلِيَّاتٌ","f"],
["n","طَبِيبٌ","ṭabīb","doctor","医師","أَطِبَّاءُ","m"],
["n","مُسْتَشْفًى","mustashfā","hospital","病院","مُسْتَشْفَيَاتٌ","m"],
["n","أَلَمٌ","alam","pain","痛み","آلَامٌ","m"],
["n","رَأْسٌ","raʾs","head","頭","رُؤُوسٌ","m"],
["n","حَلْقٌ","ḥalq","throat","喉","حُلُوقٌ","m"],
["n","مَعِدَةٌ","maʿida","stomach","胃","مِعَدٌ","f"],
["n","دَوَاءٌ","dawāʾ","medicine","薬","أَدْوِيَةٌ","m"],
["n","حُمَّى","ḥummā","fever","熱","حُمَّيَاتٌ","f"],
["n","مَوْعِدٌ","mawʿid","appointment","予約","مَوَاعِيدُ","m"],
["a","مَرِيضٌ","marīḍ","sick","病気の","مَرِيضَةٌ"],
["a","مُتْعَبٌ","mutʿab","tired","疲れた","مُتْعَبَةٌ"],
["a","شَدِيدٌ","shadīd","severe / strong","強い・ひどい","شَدِيدَةٌ"]
],
grammar:[
["I have pain: عِنْدِي أَلَمٌ","痛みの場所：عِنْدِي أَلَمٌ","Use عِنْدِي أَلَمٌ فِي ... to report where something hurts. This is for language practice, not medical diagnosis.","عِنْدِي أَلَمٌ فِي ... で「～が痛い」と説明します。医療判断ではなく、語学練習の表現です。",["عِنْدِي أَلَمٌ فِي الْحَلْقِ.","ʿindī alamun fī al-ḥalq","I have a sore throat.","喉が痛いです。"]],
["Duration using مُنْذُ","継続期間：مُنْذُ","مُنْذُ means 'since/for' when discussing when a symptom began: مُنْذُ يَوْمَيْنِ means 'for two days'.","مُنْذُ は「～から・～前から」。مُنْذُ يَوْمَيْنِ は「2日前から・2日間」です。",["عِنْدِي حُمَّى مُنْذُ يَوْمَيْنِ.","ʿindī ḥummā mundhu yawmayn","I've had a fever for two days.","2日前から熱があります。"]],
["Polite requests for help","丁寧な助けの求め方","Use أَحْتَاجُ إِلَى ... ('I need...') and هَلْ يُمْكِنُ ...؟ ('Is it possible...?').","أَحْتَاجُ إِلَى ... は「～が必要」、هَلْ يُمْكِنُ ...؟ は「～できますか」。",["أَحْتَاجُ إِلَى طَبِيبٍ.","aḥtāju ilā ṭabīb","I need a doctor.","医師の診察が必要です。"]]
],
phrases:[
["لَا أَشْعُرُ بِحَالٍ جَيِّدَةٍ.","lā ashʿuru biḥālin jayyida","I don't feel well.","体調がよくありません。"],
["عِنْدِي أَلَمٌ فِي الْحَلْقِ.","ʿindī alamun fī al-ḥalq","I have a sore throat.","喉が痛いです。"],
["عِنْدِي صُدَاعٌ.","ʿindī ṣudāʿ","I have a headache.","頭が痛いです。"],
["عِنْدِي أَلَمٌ فِي الْمَعِدَةِ.","ʿindī alamun fī al-maʿida","I have a stomachache.","胃が痛いです。"],
["عِنْدِي حُمَّى.","ʿindī ḥummā","I have a fever.","熱があります。"],
["مُنْذُ يَوْمَيْنِ.","mundhu yawmayn","For two days.","2日前からです。"],
["مُنْذُ مَتَى تَشْعُرُ بِالْأَلَمِ؟","mundhu matā tashʿuru bil-alam","How long have you had the pain?","いつから痛みますか？"],
["أَيْنَ أَقْرَبُ صَيْدَلِيَّةٍ؟","ayna aqrabu ṣaydaliyya","Where is the nearest pharmacy?","最寄りの薬局はどこですか？"],
["أَحْتَاجُ إِلَى طَبِيبٍ.","aḥtāju ilā ṭabīb","I need a doctor.","医師に診てもらいたいです。"],
["هَلْ يُمْكِنُنِي حَجْزُ مَوْعِدٍ؟","hal yumkinunī ḥajzu mawʿid","Can I make an appointment?","診察予約はできますか？"],
["لَا أَسْتَطِيعُ الْأَكْلَ.","lā astaṭīʿu al-akl","I can't eat.","食べられません。"],
["شُكْرًا، سَأَتَّبِعُ تَعْلِيمَاتِ الطَّبِيبِ.","shukran, sa-attabiʿu taʿlīmāti aṭ-ṭabīb","Thank you. I'll follow the doctor's instructions.","ありがとうございます。医師の指示に従います。"]
],
dialogues:[
["At a pharmacy","薬局で",[
["A","مِنْ فَضْلِكَ، لَا أَشْعُرُ بِحَالٍ جَيِّدَةٍ.","min faḍlika, lā ashʿuru biḥālin jayyida","Excuse me, I don't feel well.","すみません、体調がよくありません。"],
["B","مَا الْمُشْكِلَةُ؟","mā al-mushkila","What's the problem?","どうしましたか？"],
["A","عِنْدِي أَلَمٌ فِي الْحَلْقِ.","ʿindī alamun fī al-ḥalq","My throat hurts.","喉が痛いです。"],
["B","مُنْذُ مَتَى؟","mundhu matā","Since when?","いつからですか？"]
]],
["Explaining symptoms","症状と期間を伝える",[
["A","مُنْذُ مَتَى تَشْعُرُ بِالْأَلَمِ؟","mundhu matā tashʿuru bil-alam","Since when have you had the pain?","いつから痛みますか？"],
["B","مُنْذُ يَوْمَيْنِ.","mundhu yawmayn","For two days.","2日前からです。"],
["A","هَلْ عِنْدَكَ حُمَّى؟","hal ʿindaka ḥummā","Do you have a fever?","熱はありますか？"],
["B","نَعَمْ، وَلَا أَسْتَطِيعُ الْأَكْلَ.","naʿam, wa-lā astaṭīʿu al-akl","Yes, and I can't eat.","はい、食事もできません。"]
]],
["Booking a consultation","診察を予約する",[
["A","أَحْتَاجُ إِلَى طَبِيبٍ.","aḥtāju ilā ṭabīb","I need a doctor.","医師に診てもらいたいです。"],
["B","هَلْ تُرِيدُ حَجْزَ مَوْعِدٍ؟","hal turīdu ḥajza mawʿid","Would you like to make an appointment?","予約をご希望ですか？"],
["A","نَعَمْ، هَلْ يُمْكِنُ الْيَوْمَ؟","naʿam, hal yumkinu al-yawm","Yes, is today possible?","はい、今日でも可能ですか？"],
["B","سَأَتَحَقَّقُ مِنَ الْمَوَاعِيدِ الْمُتَاحَةِ.","sa-ataḥaqqa mina al-mawāʿīd al-mutāḥa","I'll check available times.","空き時間を確認します。"]
]]
],
practice:[
["Describe symptoms accurately.","症状を正確に説明する。",[["Name three symptoms and one location of pain.","3つの症状と痛む場所を話す。"],["Say whether symptoms started today or two days ago.","今日か2日前か、開始時期を伝える。"]],[0,1,4,5]],
["Ask for health services.","医療サービスの場所を尋ねる。",[["Ask for the nearest pharmacy.","最寄りの薬局を尋ねる。"],["Explain you need an appointment and ask about availability.","診察予約を依頼し、空きを尋ねる。"]],[7,8,9]],
["Answer unplanned questions.","予想外の質問に対応する。",[["Answer questions about when, where and how severe.","いつから・どこが・どのくらいひどいか答える。"],["Give a 45-second symptom description without notes.","45秒間、症状を台本なしで説明する。"]],[6,10,11]]
]
});
})();