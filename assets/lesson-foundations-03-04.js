(function(){
const L=window.FSS_makeLesson;
L(3,{
title:"Shopping, Prices & Quantities",jaTitle:"買い物・価格・数量・サイズ",arTitle:"التَّسَوُّقُ وَالْأَسْعَارُ",
goals:[["Ask about prices, sizes, colours and quantities.","価格・サイズ・色・数量について質問できる"],["Compare products and make a purchasing decision.","商品を比較し、希望するものを伝えられる"],["Complete a basic purchase, including payment.","支払いまでの買い物の会話を続けられる"]],
review:[["Order a drink and ask its price.","飲み物を注文して値段を尋ねる"],["Ask for an alternative when an item is unavailable.","商品がないときに代わりを依頼する"]],
vocab:[
["v","أَشْتَرِي","ashtarī","I buy","買う","اِشْتَرَى","يَشْتَرِي","أَشْتَرِي"],
["v","أَبِيعُ","abīʿu","I sell","売る","بَاعَ","يَبِيعُ","أَبِيعُ"],
["v","أَخْتَارُ","akhtāru","I choose","選ぶ","اِخْتَارَ","يَخْتَارُ","أَخْتَارُ"],
["v","أَبْحَثُ","abḥathu","I look for","探す","بَحَثَ","يَبْحَثُ","أَبْحَثُ"],
["v","أَدْفَعُ","adfaʿu","I pay","払う","دَفَعَ","يَدْفَعُ","أَدْفَعُ"],
["v","أَحْتَاجُ","aḥtāju","I need","必要だ","اِحْتَاجَ","يَحْتَاجُ","أَحْتَاجُ"],
["n","سِعْرٌ","siʿr","price","価格","أَسْعَارٌ","m"],
["n","مَقَاسٌ","maqās","size","サイズ","مَقَاسَاتٌ","m"],
["n","لَوْنٌ","lawn","colour","色","أَلْوَانٌ","m"],
["n","قَمِيصٌ","qamīṣ","shirt","シャツ","قُمُصٌ","m"],
["n","قُمَاشٌ","qumāsh","fabric","生地","أَقْمِشَةٌ","m"],
["n","عَيِّنَةٌ","ʿayyina","sample","サンプル","عَيِّنَاتٌ","f"],
["n","كَمِّيَّةٌ","kammiyya","quantity","数量","كَمِّيَّاتٌ","f"],
["n","بِطَاقَةٌ","biṭāqa","card","カード","بِطَاقَاتٌ","f"],
["n","إِيصَالٌ","īṣāl","receipt","領収書","إِيصَالَاتٌ","m"],
["n","خَصْمٌ","khaṣm","discount","値引き","خُصُومَاتٌ","m"],
["a","كَبِيرٌ","kabīr","large","大きい","كَبِيرَةٌ"],
["a","صَغِيرٌ","ṣaghīr","small","小さい","صَغِيرَةٌ"],
["a","غَالٍ","ghālin","expensive","高い","غَالِيَةٌ"],
["a","رَخِيصٌ","rakhīṣ","cheap","安い","رَخِيصَةٌ"]
],
grammar:[
["Asking about prices","価格の聞き方","بِكَمْ هَذَا؟ asks the price of a masculine item; use هَذِهِ for a feminine item.","男性名詞には بِكَمْ هَذَا؟、女性名詞には بِكَمْ هَذِهِ؟ を使います。",["بِكَمْ هَذَا الْقَمِيصُ؟","bikam hādhā al-qamīṣ","How much is this shirt?","このシャツはいくらですか？"]],
["How many and how much","数量を表す كَمْ","كَمْ asks 'how many' and may refer to quantity or a number of items. Learn the question as a complete chunk.","كَمْ は数量を聞く「いくつ・どれくらい」。まずは كَمْ قِطْعَةً؟（何点ですか？）などをひとまとまりで覚えます。",["كَمْ قِطْعَةً تُرِيدُ؟","kam qiṭʿatan turīd","How many pieces do you want?","何点ご希望ですか？"]],
["Comparative adjectives","比較級：もっと大きい・安い","أَكْبَرُ means 'larger' and أَرْخَصُ means 'cheaper'. They are useful for changing choices.","「もっと大きい」は أَكْبَرُ、「もっと安い」は أَرْخَصُ。商品を選び直すときに使えます。",["هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟","hal ʿindakum maqāsun akbar","Do you have a larger size?","もっと大きいサイズはありますか？"]]
],
phrases:[
["أَبْحَثُ عَنْ قَمِيصٍ أَبْيَضَ.","abḥathu ʿan qamīṣin abyaḍ","I'm looking for a white shirt.","白いシャツを探しています。"],
["بِكَمْ هَذَا؟","bikam hādhā","How much is this?","これはいくらですか？"],
["هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟","hal ʿindakum maqāsun akbar","Do you have a larger size?","もっと大きいサイズはありますか？"],
["هَلْ عِنْدَكُمْ لَوْنٌ آخَرُ؟","hal ʿindakum lawnun ākhar","Do you have another colour?","別の色はありますか？"],
["أُرِيدُ ثَلَاثَ قِطَعٍ.","urīdu thalātha qiṭaʿ","I'd like three pieces.","3点欲しいです。"],
["هَلْ هَذَا مُتَوَفِّرٌ؟","hal hādhā mutawaffir","Is this available?","これは在庫がありますか？"],
["هَذَا غَالٍ جِدًّا.","hādhā ghālin jiddan","This is very expensive.","これはとても高いです。"],
["هَلْ يُمْكِنُ أَنْ يَكُونَ السِّعْرُ أَقَلَّ؟","hal yumkinu an yakūna as-siʿru aqall","Could the price be lower?","もう少し安くなりますか？"],
["أُفَضِّلُ هَذَا اللَّوْنَ.","ufaḍḍilu hādhā al-lawn","I prefer this colour.","この色の方が好きです。"],
["سَآخُذُ هَذَا، مِنْ فَضْلِكَ.","sa-ākhudhu hādhā, min faḍlika","I'll take this one, please.","こちらをいただきます。"],
["هَلْ يُمْكِنُنِي الدَّفْعُ بِالْبِطَاقَةِ؟","hal yumkinunī ad-dafʿu bil-biṭāqa","Can I pay by card?","カードで支払えますか？"],
["هَلْ يُمْكِنُنِي الْحُصُولُ عَلَى إِيصَالٍ؟","hal yumkinunī al-ḥuṣūlu ʿalā īṣāl","Could I have a receipt?","領収書をもらえますか？"]
],
dialogues:[
["Checking sizes","サイズの確認",[
["A","مَرْحَبًا، أَبْحَثُ عَنْ قَمِيصٍ.","marḥaban, abḥathu ʿan qamīṣ","Hello, I'm looking for a shirt.","こんにちは。シャツを探しています。"],
["B","أَيَّ مَقَاسٍ تُرِيدُ؟","ayya maqāsin turīd","What size do you want?","どのサイズをご希望ですか？"],
["A","هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟","hal ʿindakum maqāsun akbar","Do you have a larger size?","もっと大きいサイズはありますか？"],
["B","نَعَمْ، هَذَا مَقَاسٌ أَكْبَرُ.","naʿam, hādhā maqāsun akbar","Yes, this is a larger size.","はい、こちらが大きいサイズです。"]
]],
["Quantity and price","数量と値段",[
["A","بِكَمْ هَذَا الْقُمَاشُ؟","bikam hādhā al-qumāsh","How much is this fabric?","この生地はいくらですか？"],
["B","بِخَمْسِينَ دِرْهَمًا لِلْمِتْرِ.","bikhamsīna dirhaman lil-mitr","Fifty dirhams per metre.","1メートル50ディルハムです。"],
["A","أُرِيدُ ثَلَاثَةَ أَمْتَارٍ.","urīdu thalāthata amtār","I would like three metres.","3メートル欲しいです。"],
["B","حَسَنًا. هَلْ تُرِيدُ شَيْئًا آخَرَ؟","ḥasanan. hal turīdu shayʾan ākhar","Okay. Anything else?","承知しました。ほかにありますか？"]
]],
["Finishing a purchase","購入と会計",[
["A","سَآخُذُ هَذَا، مِنْ فَضْلِكَ.","sa-ākhudhu hādhā, min faḍlika","I'll take this one.","こちらをいただきます。"],
["B","هَلْ سَتَدْفَعُ نَقْدًا أَمْ بِالْبِطَاقَةِ؟","hal satadfaʿu naqdan am bil-biṭāqa","Cash or card?","現金ですか、カードですか？"],
["A","بِالْبِطَاقَةِ. هَلْ يُمْكِنُنِي الْحُصُولُ عَلَى إِيصَالٍ؟","bil-biṭāqa. hal yumkinunī al-ḥuṣūlu ʿalā īṣāl","Card. May I have a receipt?","カードで。領収書をもらえますか？"],
["B","بِالتَّأْكِيدِ. تَفَضَّلْ.","bit-taʾkīd. tafaḍḍal","Of course. Here you are.","もちろんです。どうぞ。"]
]]
],
practice:[
["Check a product before buying.","購入前に商品を確認する。",[["Ask about two colours, two sizes and one price.","2色・2サイズ・価格について質問する。"],["Ask the seller to show a different item.","別の商品を見せてもらう。"]],[1,2,3]],
["Negotiate quantity and preference.","数量と好みを伝える。",[["Ask for three pieces and change your mind to five.","3点から5点へ数量を変更する。"],["Explain why one choice is too expensive.","ある商品が高すぎる理由を伝える。"]],[4,6,7]],
["Complete a purchase.","買い物を完了させる。",[["Choose an item, request a receipt and pay by card.","選択・領収書・カード払いを行う。"],["Repeat with fabric, shirt and sample as the product.","生地・シャツ・サンプルに置き換える。"]],[9,10,11]]
]
});
L(4,{
title:"Taxis, Directions & Getting Around",jaTitle:"タクシー・道案内・移動",arTitle:"سَيَّارَةُ الْأُجْرَةِ وَالطَّرِيقُ",
goals:[["Tell a driver your destination and meeting point.","タクシーで目的地と集合場所を伝えられる"],["Ask for and understand simple directions.","道を尋ね、簡単な方向指示を理解できる"],["Ask about travel time and fix a misunderstanding.","所要時間を聞き、行き先の間違いを訂正できる"]],
review:[["Ask how much something costs and say a quantity.","値段と数量を確認する"],["Practise a polite request with مِنْ فَضْلِكَ.","مِنْ فَضْلِكَ を使って依頼する"]],
vocab:[
["v","أَذْهَبُ","adhhabu","I go","行く","ذَهَبَ","يَذْهَبُ","أَذْهَبُ"],
["v","أَصِلُ","aṣilu","I arrive","到着する","وَصَلَ","يَصِلُ","أَصِلُ"],
["v","أَنْتَظِرُ","antaẓiru","I wait","待つ","اِنْتَظَرَ","يَنْتَظِرُ","أَنْتَظِرُ"],
["v","أَسْتَخْدِمُ","astakhdimu","I use","使う","اِسْتَخْدَمَ","يَسْتَخْدِمُ","أَسْتَخْدِمُ"],
["v","أَنْعَطِفُ","unʿaṭifu","I turn","曲がる","اِنْعَطَفَ","يَنْعَطِفُ","أَنْعَطِفُ"],
["v","أُرِيدُ","urīdu","I want","欲しい・～したい","أَرَادَ","يُرِيدُ","أُرِيدُ"],
["n","مَطَارٌ","maṭār","airport","空港","مَطَارَاتٌ","m"],
["n","فُنْدُقٌ","funduq","hotel","ホテル","فَنَادِقُ","m"],
["n","مَحَطَّةٌ","maḥaṭṭa","station","駅","مَحَطَّاتٌ","f"],
["n","طَرِيقٌ","ṭarīq","road / route","道・経路","طُرُقٌ","m"],
["n","سَيَّارَةٌ","sayyāra","car","車","سَيَّارَاتٌ","f"],
["n","سَائِقٌ","sāʾiq","driver","運転手","سَائِقُونَ","m"],
["n","يَمِينٌ","yamīn","right","右","","m"],
["n","يَسَارٌ","yasār","left","左","","m"],
["n","مَسَافَةٌ","masāfa","distance","距離","مَسَافَاتٌ","f"],
["n","دَقِيقَةٌ","daqīqa","minute","分","دَقَائِقُ","f"],
["a","قَرِيبٌ","qarīb","near","近い","قَرِيبَةٌ"],
["a","بَعِيدٌ","baʿīd","far","遠い","بَعِيدَةٌ"],
["a","مُبَاشِرٌ","mubāshir","direct","直接の","مُبَاشِرَةٌ"],
["e","هُنَاكَ","hunāk","there","あそこ"]
],
grammar:[
["Direction with إِلَى","方向の前置詞 إِلَى","إِلَى means 'to/toward' and is often used with أَذْهَبُ, 'I go'.","إِلَى は「～へ」。أَذْهَبُ إِلَى ... で行き先を伝えます。",["أَذْهَبُ إِلَى الْمَطَارِ.","adhhabu ilā al-maṭār","I am going to the airport.","空港へ行きます。"]],
["Where and how","場所・方法を尋ねる疑問詞","Use أَيْنَ for 'where' and كَيْفَ for 'how'. These questions are useful for asking directions.","場所は أَيْنَ、方法は كَيْفَ。道案内では文章ごと覚えると使いやすいです。",["كَيْفَ أَذْهَبُ إِلَى الْمَحَطَّةِ؟","kayfa adhhabu ilā al-maḥaṭṭa","How do I get to the station?","駅へはどう行けばいいですか？"]],
["Simple directions and commands","道案内で使う命令形","Go straight: اِذْهَبْ مُبَاشَرَةً. Turn right: اِنْعَطِفْ يَمِينًا. These forms address one man.","直進は اِذْهَبْ مُبَاشَرَةً、右折は اِنْعَطِفْ يَمِينًا。ここでは男性1人への指示の形です。",["اِنْعَطِفْ يَسَارًا عِنْدَ الْإِشَارَةِ.","inʿaṭif yasāran ʿinda al-ishāra","Turn left at the traffic light.","信号を左に曲がってください。"]]
],
phrases:[
["إِلَى الْمَطَارِ، مِنْ فَضْلِكَ.","ilā al-maṭār, min faḍlika","To the airport, please.","空港までお願いします。"],
["أُرِيدُ أَنْ أَذْهَبَ إِلَى هَذَا الْفُنْدُقِ.","urīdu an adhhab(a) ilā hādhā al-funduq","I want to go to this hotel.","このホテルへ行きたいです。"],
["أَيْنَ الْمَحَطَّةُ؟","ayna al-maḥaṭṭa","Where is the station?","駅はどこですか？"],
["كَيْفَ أَذْهَبُ إِلَى هُنَاكَ؟","kayfa adhhabu ilā hunāk","How do I get there?","そこへはどう行きますか？"],
["اِذْهَبْ مُبَاشَرَةً.","idhhab mubāsharatan","Go straight.","まっすぐ行ってください。"],
["اِنْعَطِفْ يَمِينًا.","inʿaṭif yamīnan","Turn right.","右に曲がってください。"],
["اِنْعَطِفْ يَسَارًا.","inʿaṭif yasāran","Turn left.","左に曲がってください。"],
["هَلْ هُوَ بَعِيدٌ مِنْ هُنَا؟","hal huwa baʿīdun min hunā","Is it far from here?","ここから遠いですか？"],
["كَمْ دَقِيقَةً يَسْتَغْرِقُ الطَّرِيقُ؟","kam daqīqatan yastaghriqu aṭ-ṭarīq","How many minutes does it take?","何分くらいかかりますか？"],
["أَنَا أَنْتَظِرُ عِنْدَ الْمَدْخَلِ.","anā antaẓiru ʿinda al-madkhal","I'm waiting at the entrance.","入口で待っています。"],
["هَذَا لَيْسَ الْعُنْوَانَ الصَّحِيحَ.","hādhā laysa al-ʿunwāna aṣ-ṣaḥīḥ","This isn't the correct address.","これは正しい住所ではありません。"],
["تَوَقَّفْ هُنَا، مِنْ فَضْلِكَ.","tawaqqaf hunā, min faḍlika","Please stop here.","ここで止めてください。"]
],
dialogues:[
["In a taxi","タクシーに乗る",[
["A","إِلَى الْمَطَارِ، مِنْ فَضْلِكَ.","ilā al-maṭār, min faḍlika","To the airport, please.","空港までお願いします。"],
["B","حَسَنًا. أَيُّ مَطَارٍ؟","ḥasanan. ayyu maṭār","Okay. Which airport?","承知しました。どの空港ですか？"],
["A","مَطَارُ دُبَيّ الدَّوْلِيُّ.","maṭāru dubayy ad-dawlī","Dubai International Airport.","ドバイ国際空港です。"],
["B","حَسَنًا، هَيَّا بِنَا.","ḥasanan, hayyā binā","Okay, let's go.","分かりました。行きましょう。"]
]],
["Asking directions","道を尋ねる",[
["A","مِنْ فَضْلِكَ، أَيْنَ الْمَحَطَّةُ؟","min faḍlika, ayna al-maḥaṭṭa","Excuse me, where is the station?","すみません、駅はどこですか？"],
["B","اِذْهَبْ مُبَاشَرَةً، ثُمَّ اِنْعَطِفْ يَمِينًا.","idhhab mubāsharatan, thumma inʿaṭif yamīnan","Go straight, then turn right.","まっすぐ行ってから右折してください。"],
["A","هَلْ هِيَ بَعِيدَةٌ؟","hal hiya baʿīda","Is it far?","遠いですか？"],
["B","لَا، هِيَ قَرِيبَةٌ.","lā, hiya qarība","No, it's nearby.","いいえ、近いです。"]
]],
["Correcting a destination","行き先を訂正する",[
["A","هَذَا لَيْسَ الْعُنْوَانَ الصَّحِيحَ.","hādhā laysa al-ʿunwāna aṣ-ṣaḥīḥ","This isn't the right address.","これは正しい住所ではありません。"],
["B","أَيْنَ تُرِيدُ أَنْ تَذْهَبَ؟","ayna turīdu an tadhhaba","Where do you want to go?","どこへ行きたいですか？"],
["A","إِلَى الْفُنْدُقِ، مِنْ فَضْلِكَ.","ilā al-funduq, min faḍlika","To the hotel, please.","ホテルまでお願いします。"],
["B","حَسَنًا، سَأُغَيِّرُ الطَّرِيقَ.","ḥasanan, sa-ughayyiru aṭ-ṭarīq","Okay, I'll change the route.","承知しました。経路を変更します。"]
]]
],
practice:[
["Give destinations and meeting points.","行き先と集合場所を伝える。",[["Request transport to an airport and a hotel.","空港とホテルへの移動を依頼する。"],["Describe the entrance where you will wait.","待つ入口を説明する。"]],[0,1,9]],
["Follow and give directions.","道順を聞く・説明する。",[["Give directions using straight, right and left.","直進・右折・左折を組み合わせる。"],["Ask if a place is near or far and how long it takes.","距離と所要時間を質問する。"]],[2,5,6,8]],
["Handle a wrong route.","間違った経路を訂正する。",[["Explain the current address is incorrect.","今の住所が間違っていると伝える。"],["Confirm the new destination and ask the driver to stop.","目的地を再確認して停止を依頼する。"]],[10,11]]
]
});
})();