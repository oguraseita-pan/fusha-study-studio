(function(){
"use strict";
const B=window.FSS_GRAMMAR_DEPTH=window.FSS_GRAMMAR_DEPTH||{};
function add(n,lead,notes,examples,pitfall,check){B[n]={lead,notes,examples,pitfall,check};}
add(1,
["アラビア語の基本文字は28個。文字そのものと、単語のどこに置かれるかで変わる字形を分けて覚えましょう。まず形を認識し、次に音を結び付けます。","The Arabic alphabet has 28 core letters. Learn the identity of a letter separately from its initial, medial and final shapes; then connect each shape to its sound."],
[
["文字は右から左へ書きます。多くの文字は前後につながりますが、ا・د・ذ・ر・ز・و の6文字は後続の文字に接続しません。これらの後で語が切れて見えても、単語が終わったとは限りません。","Arabic is written right to left. Six letters—ا، د، ذ، ر، ز، و—do not join to the letter following them in writing; a visible break is not necessarily a word boundary."],
["ب・ت・ث・ن・ي などは点の位置と数で区別します。まず字形のグループを作り、短い単語の中で読み分けると定着します。","Distinguish similar shapes by dots, especially ب، ت، ث، ن، ي. Practice them inside short words rather than as isolated symbols only."],
["文字の名前と発音は同じではありません。ب の名前は بَاءٌ（bāʾ）ですが、音は /b/ です。また ء（ハムザ）は特殊な子音として現れます。","Letter names differ from their consonant sounds: ب is called bāʾ but represents /b/. Hamza ء represents a glottal stop and has special spelling rules."]
],
[["بَابٌ","ドア。最初と最後の ب の字形を見比べましょう。","Door: compare the shapes of the two occurrences of ب."],["كِتَابٌ","本。文字を右から順にたどって読みます。","Book: read the connected letters from right to left."],["وَرَقٌ","紙。و・ر の後で字形が切れます。","Paper: observe the non-joining behavior of و and ر."]],
["初学者はすべての文字を同じ幅・独立形で読もうとしがちです。接続した形でも同じ文字だと認識する練習が重要です。","Do not expect every letter to appear in its isolated shape. Recognition across joining forms is essential."],
["次のうち後ろの文字につながらない文字を3つ挙げてください。","Name three letters that do not join to the following letter.","ا・د・ذ・ر・ز・و のいずれか3つ。","Any three of ا، د، ذ، ر، ز، و."]);
add(2,
["短母音・長母音・母音なしを見分けると、初見の単語も音のまとまりごとに読めるようになります。","Recognizing short vowels, long vowels and the absence of a vowel makes it possible to decode unfamiliar words."],
[
["短母音は َ（ファトハ＝a）、ِ（カスラ＝i）、ُ（ダンマ＝u）。長母音は原則 ا＝ā、ي＝ī、و＝ū で表され、長さは意味の違いに関わることがあります。","The short-vowel marks are fatḥa َ (a), kasra ِ (i), and ḍamma ُ (u). Long vowels are commonly represented by ا (ā), ي (ī), and و (ū); length can distinguish words."],
["ْ（スクーン）はその文字の直後に母音がないことを示します。كَتَبَ には3つの短母音があり、مَكْتَب では كْ に母音がありません。","Sukūn ْ means that no vowel follows the consonant. Compare the vowel sequence in كَتَبَ with the consonant cluster in مَكْتَب."],
["ٌ・ً・ٍ はタンウィーン（-un/-an/-in）。主に不定名詞の語末に現れます。多くの会話では文末の格語尾が落ちますが、文章を読むためには必要です。","Tanwīn (ٌ / ً / ٍ) signals -un/-an/-in, typically on indefinite nouns. These endings are often dropped at pauses in speech but remain important in formal reading."]
],
[["كَتَبَ","彼は書いた。短母音 a を3回発音します。","He wrote: three short a vowels."],["كِتَابٌ","本。ا は長母音 ā、語末は -un。","A book: ا marks long ā and the ending is -un."],["مَكْتَبٌ","オフィス。كْ がスクーンで閉じています。","An office: كْ carries no following vowel."]],
["و と ي はいつも長母音になるわけではなく、子音 /w/・/y/ を表す場合もあります。前後の母音を確認しましょう。","و and ي do not always mark long vowels; they can be consonants /w/ and /y/. Read them in context."],
["「短い u」と「長い ū」はどのように書き分けますか？","How do you distinguish short u from long ū in writing?","短い u はダンマ ُ、長い ū は多くの場合ダンマ＋و。","Short u uses ḍamma ُ; long ū usually uses ḍamma followed by و."]);
add(3,
["シャッダは子音を2つ分発音する記号。定冠詞 ال の発音も、次に来る文字が太陽文字か月文字かで変わります。","Shadda doubles a consonant. The pronunciation of the definite article ال depends on whether the following consonant is a sun or moon letter."],
[
["ّ は子音の重複を示します。دَرَسَ（勉強した）と دَرَّسَ（教えた）のように、重子音は意味・動詞型の違いを作ります。","Shadda ّ signals a doubled consonant. Compare دَرَسَ (he studied) and دَرَّسَ (he taught): doubling can change the verb pattern and meaning."],
["太陽文字は ت ث د ذ ر ز س ش ص ض ط ظ ل ن。定冠詞の ل は発音せず、次の子音が重なります。例：الشَّمْسُ → ash-shamsu。","The sun letters are ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Before them the l of al- is assimilated: الشَّمْسُ is pronounced ash-shamsu."],
["月文字の前では定冠詞の l をそのまま読みます。例：الْقَمَرُ → al-qamaru。綴りの ال 自体はどちらの場合も残ります。","Before moon letters the l remains: الْقَمَرُ is al-qamaru. The article is still written ال in both situations."]
],
[["مُعَلِّمٌ","教師。لّ を一拍長く発音します。","Teacher: pronounce the doubled l."],["الشَّمْسُ","太陽。ash-shamsu（太陽文字）。","The sun: ash-shamsu (sun letter)."],["الْبَيْتُ","家。al-baytu（月文字）。","The house: al-baytu (moon letter)."]],
["太陽文字では「ل を書かない」のではありません。綴りは الْـ のままで、発音だけが変わります。","Assimilation changes pronunciation, not the spelling of the article."],
["「الشَّمْسُ」と「الْقَمَرُ」で、定冠詞の l が聞こえるのはどちら？","In which word is the article's l pronounced: الشَّمْسُ or الْقَمَرُ?","الْقَمَرُ。الشَّمْسُ では ش が重子音になります。","الْقَمَرُ. In الشَّمْسُ the sh is doubled instead."]);
add(4,
["ハムザは子音の一種、アリフは文字・長母音を表す表記の一部。似た字形を役割別に整理しましょう。","Hamza is a consonant; alif is a letter that often supports hamza or represents long ā. They must be distinguished by function."],
[
["語頭のハムザトル・カトウ（همزة القطع）は発音します。أَ は a、إِ は i で始まります。一方、ハムザトル・ワスル（همزة الوصل）は語頭から読み始めるときだけ母音を伴い、前の語と連続すると脱落します。","Hamzat al-qaṭʿ is pronounced even when words are connected (e.g., أَ / إِ). Hamzat al-waṣl is pronounced when starting a phrase but elided in connected speech."],
["語中・語末のハムザは ؤ・ئ・أ・ء の形を取ります。周囲の母音によって書き分けます。最初は أَخَذَ、سَأَلَ、سُؤَالٌ、شَيْءٌ を単語ごとに覚えます。","Hamza may appear as ؤ, ئ, أ or ء in medial/final position. The seat depends on surrounding vowels; learn common spellings as whole words first."],
["ى（アリフ・マクスーラ）は主に語末の ā を表し、ي（y/ī）と区別します。ة（ター・マルブータ）は普通の読み終わりでは -a(h)、イダーファなどで接続すると -at- の音が現れます。","Final ى often represents ā, unlike ي. Tāʾ marbūṭa ة is typically pronounced -a(h) at a pause but shows -at- in constructions such as iḍāfa."]
],
[["أَكْتُبُ","私は書く。語頭ハムザを発音します。","I write: pronounce the initial hamza."],["اِسْمٌ","名前。語頭から読む場合の連結ハムザの例。","Name: an example of initial hamzat al-waṣl."],["مَدْرَسَةُ الْبَنَاتِ","女子学校。語をつなげると ة の t が現れます。","Girls' school: the t of ة surfaces in the construct phrase."]],
["すべての ا を「ア」と読むのは誤りです。長母音・ハムザの台座・連結ハムザなど、位置によって働きが違います。","Not every ا is an independent a-sound; its role depends on position and the word."],
["「فَتًى」と「فَتِيٌّ」では語末の文字・音がどう違いますか？","What differs at the end of فَتًى and فَتِيٌّ?","فَتًى は ى（ā）、فَتِيٌّ は ي（y と重子音）。","فَتًى ends with ى (ā); فَتِيٌّ uses ي (doubled y)."]);
add(5,
["アラビア語では名詞に文法上の男性・女性があり、形容詞・代名詞・動詞の形に影響します。人や生物以外にも性があります。","Arabic nouns have grammatical gender, which affects adjectives, pronouns and verbs—even for inanimate objects."],
[
["女性名詞は ة で終わるものが多いですが、すべてではありません。سَيَّارَةٌ（車）は女性、بَيْتٌ（家）は男性です。","Many feminine nouns end in ة, but not all. سَيَّارَةٌ (car) is feminine; بَيْتٌ (house) is masculine."],
["女性形の形容詞は普通 ـَةٌ を付けます：جَدِيدٌ／جَدِيدَةٌ。ただし不規則な形や特別な形容詞もあります。","Many adjectives form the feminine with ة: جَدِيدٌ / جَدِيدَةٌ. There are exceptions and irregular forms."],
["人間以外を表す複数名詞は、標準語では原則として女性単数の形容詞・代名詞・動詞と一致します：الْكُتُبُ جَدِيدَةٌ。単数の性から推測しない点が重要です。","Non-human plural nouns generally take feminine singular agreement in MSA: الْكُتُبُ جَدِيدَةٌ, even though كِتَابٌ is masculine singular."]
],
[["هٰذَا بَيْتٌ جَدِيدٌ.","これは新しい家です（男性名詞）。","This is a new house (masculine)."],["هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ.","これは新しい車です（女性名詞）。","This is a new car (feminine)."],["الْكُتُبُ جَدِيدَةٌ.","本は新しい（非人間複数→女性単数で一致）。","The books are new (non-human plural → feminine singular agreement)."]],
["ة がないから男性名詞、という推測は危険です。شَمْسٌ（太陽）など ة のない女性名詞もあります。","Do not infer masculine gender solely from the absence of ة. شَمْسٌ (sun) is feminine."],
["「新しい車」は جَدِيدٌ と جَدِيدَةٌ のどちら？","Which adjective form describes a car: جَدِيدٌ or جَدِيدَةٌ?","سَيَّارَةٌ は女性名詞なので جَدِيدَةٌ。","جَدِيدَةٌ, because سَيَّارَةٌ is feminine."]);
add(6,
["アラビア語の定・不定は、冠詞の有無だけでなく、形容詞の位置やイダーファの意味まで左右します。","Definiteness in Arabic affects more than articles: it also governs adjective interpretation and possessive structures."],
[
["定冠詞は ال。الْكِتَابُ は「その本」、كِتَابٌ は「ある本／本というもの」。定冠詞がある名詞は通常タンウィーンを付けません。","The article ال marks definiteness: الْكِتَابُ 'the book' versus كِتَابٌ 'a book'. Definites normally lack tanwīn."],
["固有名詞、代名詞、所有接尾辞付き名詞、定名詞を後部にもつイダーファも定です。定／不定を ال の有無だけで判断しないようにします。","Proper names, pronouns, nouns with possessive suffixes and iḍāfa phrases ending in a definite noun can all be definite without taking ال themselves."],
["形容詞も名詞と定性を一致させます。كِتَابٌ جَدِيدٌ は「新しい本」、الْكِتَابُ الْجَدِيدُ は「その新しい本」。一方 الْكِتَابُ جَدِيدٌ は「その本は新しい」という文です。","Attributive adjectives agree in definiteness: كِتَابٌ جَدِيدٌ 'a new book'; الْكِتَابُ الْجَدِيدُ 'the new book'. In الْكِتَابُ جَدِيدٌ the adjective is a predicate."]
],
[["كِتَابٌ جَدِيدٌ","新しい本（名詞句）。","A new book (noun phrase)."],["الْكِتَابُ الْجَدِيدُ","その新しい本（定の名詞句）。","The new book (definite noun phrase)."],["الْكِتَابُ جَدِيدٌ.","その本は新しい（名詞文）。","The book is new (nominal sentence)."]],
["形容詞だけに ال を付けたり、名詞だけに付けたりすると、単純な名詞句ではなく文になる場合があります。","Changing article agreement can change the structure from a noun phrase to a sentence."],
["「その新しい本」を、名詞と形容詞の両方に定冠詞を付けて作ってください。","Form 'the new book' with matching definiteness.","الْكِتَابُ الْجَدِيدُ。","الْكِتَابُ الْجَدِيدُ."]);
add(7,
["代名詞には人称・数・性の区別があります。まず単数6形を使いこなし、その後に双数・複数へ広げます。","Arabic pronouns encode person, number and gender. Master the core singular forms, then add dual and plural."],
[
["独立代名詞：أَنَا（私）、نَحْنُ（私たち）、أَنْتَ／أَنْتِ（あなた・男／女）、هُوَ／هِيَ（彼／彼女）。複数には أَنْتُمْ（あなたたち）、هُمْ（彼ら）、هُنَّ（彼女ら）などがあります。","Independent pronouns include أَنَا / نَحْنُ (I/we), أَنْتَ / أَنْتِ (you m/f), هُوَ / هِيَ (he/she), plus plural أَنْتُمْ, هُمْ and هُنَّ."],
["指示詞は指す名詞の性に合わせます。近称は هٰذَا（男）・هٰذِهِ（女）、遠称は ذٰلِكَ（男）・تِلْكَ（女）。双数 هٰذَانِ／هَاتَانِ は格によって形が変わります。","Demonstratives agree with noun gender: هٰذَا / هٰذِهِ (this m/f), ذٰلِكَ / تِلْكَ (that m/f). Dual demonstratives also vary by case."],
["動詞の主語は活用形から分かることが多く、独立代名詞を省略できます。أَكْتُبُ だけで「私は書く」、هُوَ يَكْتُبُ では「彼」を明示・強調できます。","Subject pronouns can often be omitted because verb forms encode person: أَكْتُبُ already means 'I write'. Independent pronouns may emphasize or clarify."]
],
[["أَنَا مِنَ الْيَابَانِ.","私は日本出身です。","I am from Japan."],["هٰذِهِ شَرِكَةٌ جَدِيدَةٌ.","これは新しい会社です。","This is a new company."],["هُمْ يَعْمَلُونَ فِي دُبَيّ.","彼らはドバイで働いています。","They work in Dubai."]],
["تَكْتُبُ は「あなた（男性）は書く」と「彼女は書く」の両方になり得ます。動詞の形だけでは区別できないところは文脈と代名詞で補います。","تَكْتُبُ can mean 'you (male) write' or 'she writes'. Context or an explicit pronoun resolves ambiguity."],
["女性1人に「あなたは」と呼びかける独立代名詞は？","What independent pronoun addresses one woman?","أَنْتِ (anti)。","أَنْتِ (anti)."]);
add(8,
["名詞文では現在の「～です」に相当する独立の be 動詞を通常置きません。語順と定・不定の関係が意味を決めます。","A present-tense nominal sentence generally has no separate verb meaning 'am/is/are'. Word order and definiteness distinguish subject from predicate."],
[
["基本形は「主語（多くは定）＋述語（多くは不定）」。الْمَكْتَبُ كَبِيرٌ は「そのオフィスは大きい」です。","A common pattern is a definite subject plus an indefinite predicate: الْمَكْتَبُ كَبِيرٌ means 'The office is large.'"],
["述語には名詞・形容詞・前置詞句も入ります。أَنَا مُوَظَّفٌ（私は会社員）、الْكِتَابُ عَلَى الطَّاوِلَةِ（本は机の上）など。","Predicates can be nouns, adjectives or prepositional phrases: أَنَا مُوَظَّفٌ 'I am an employee'; الْكِتَابُ عَلَى الطَّاوِلَةِ 'The book is on the table'."],
["否定は لَيْسَ、過去にする場合は كَانَ を使うのが代表的です。これらは述語の格に影響するため、第39章で詳しく扱います。","Negation commonly uses لَيْسَ; past nominal clauses often use كَانَ. These affect case marking, studied more fully in Chapter 39."]
],
[["أَنَا يَابَانِيٌّ.","私は日本人です（男性話者）。","I am Japanese (male speaker)."],["الْعَيِّنَةُ جَاهِزَةٌ.","サンプルは準備できています。","The sample is ready."],["الْمُدِيرُ فِي الْمَكْتَبِ.","部長はオフィスにいます。","The manager is in the office."]],
["「その新しい本」الْكِتَابُ الْجَدِيدُ と「その本は新しい」الْكِتَابُ جَدِيدٌ は、形容詞の定冠詞の有無で区別されます。","Contrast attributive الْكِتَابُ الْجَدِيدُ ('the new book') with predicative الْكِتَابُ جَدِيدٌ ('the book is new')."],
["「この会社は日本企業です」を名詞文で作ると？","How can you form 'This company is Japanese'?","هٰذِهِ الشَّرِكَةُ يَابَانِيَّةٌ。","هٰذِهِ الشَّرِكَةُ يَابَانِيَّةٌ."]);
add(9,
["形容詞は通常、修飾する名詞の後ろに置き、性・数・定性・格を一致させます。ただし人間以外の複数名詞では特別な一致が起きます。","Attributive adjectives usually follow the noun and agree in gender, number, definiteness and case. Non-human plurals are a major exception to simple number agreement."],
[
["不定：عَيِّنَةٌ جَدِيدَةٌ。定：الْعَيِّنَةُ الْجَدِيدَةُ。形容詞が修飾語なら名詞と定性が一致します。","Indefinite عَيِّنَةٌ جَدِيدَةٌ versus definite الْعَيِّنَةُ الْجَدِيدَةُ: the adjective matches definiteness in a noun phrase."],
["格の一致：رَأَيْتُ عَيِّنَةً جَدِيدَةً（新しいサンプルを見た）では、目的語の名詞とその形容詞がともに対格になります。","Case also agrees: in رَأَيْتُ عَيِّنَةً جَدِيدَةً both noun and modifier are accusative because the phrase is the object."],
["非人間複数は通常女性単数で一致します。الْبُيُوتُ كَبِيرَةٌ（家々は大きい）、الْبُيُوتُ الْكَبِيرَةُ（大きな家々）。人間複数とは扱いが異なります。","Non-human plural nouns typically trigger feminine singular agreement: الْبُيُوتُ كَبِيرَةٌ, الْبُيُوتُ الْكَبِيرَةُ. Human plurals are different."]
],
[["قُمَاشٌ أَبْيَضُ","白い生地。形容詞は後置。","White fabric; the adjective follows."],["الْعَيِّنَةُ الْجَدِيدَةُ","その新しいサンプル。双方が定。","The new sample; both elements are definite."],["الطَّلَبَاتُ كَبِيرَةٌ.","注文（複数）は大きい。非人間複数の一致。","The orders are large; non-human plural agreement."]],
["名詞と形容詞の定性が異なると「その本は新しい」のような名詞文になり得ます。単なる名詞句との違いを必ず確認しましょう。","An adjective with different definiteness from its noun can be a predicate rather than a modifier."],
["رَأَيْتُ عَيِّنَةً جَدِيدَةً の形容詞が -atan になる理由は？","Why does the adjective in رَأَيْتُ عَيِّنَةً جَدِيدَةً take accusative marking?","目的語の名詞 عَيِّنَةً に格・性・数・定性を一致させるため。","It agrees with the object noun in case, gender, number and definiteness."]);
add(10,
["前置詞のあとでは名詞が属格になり、代名詞が後ろにつく場合は接尾辞の形になります。使う動詞とセットで覚えると自然です。","Prepositions are followed by genitive nouns; pronouns appear as suffixes. Learn preposition–verb combinations, not just isolated meanings."],
[
["基本：فِي（中・で）、إِلَى（へ）、مِنْ（から）、عَلَى（上に）、بِـ（～で／～によって）、لِـ（～のために／～へ）。","Core prepositions: فِي (in), إِلَى (to), مِنْ (from), عَلَى (on), بِـ (with/by), لِـ (for/to)."],
["属格の例：فِي مَكْتَبٍ（オフィスで）、مِنَ الشَّرِكَةِ（会社から）。定冠詞があれば不定を表すタンウィーンは消えます。","Examples: فِي مَكْتَبٍ ('in an office') and مِنَ الشَّرِكَةِ ('from the company'). The noun after a preposition is genitive."],
["動詞との結び付き：اِتَّصَلَ بِـ（～に電話する）、بَحَثَ عَنْ（～を探す）、اِحْتَاجَ إِلَى（～を必要とする）。英語・日本語の助詞から機械的に選ばないようにします。","Verb patterns include اِتَّصَلَ بِـ (call), بَحَثَ عَنْ (look for), اِحْتَاجَ إِلَى (need). Do not translate Japanese particles or English prepositions mechanically."]
],
[["أَعْمَلُ فِي شَرِكَةٍ.","会社で働いています。","I work for a company."],["أَبْحَثُ عَنْ فُنْدُقٍ.","ホテルを探しています。","I am looking for a hotel."],["اِتَّصَلْتُ بِالْعَمِيلِ.","顧客に電話しました。","I called the customer."]],
["「電話する」に日本語の「に」をそのまま إِلَى で置き換えないでください。اِتَّصَلَ بِـ が基本の組み合わせです。","The verb اِتَّصَلَ takes بِـ, not a literal translation of English 'to' or Japanese に."],
["「会社で働く」と「顧客に電話する」の前置詞は？","Which prepositions appear with 'work in a company' and 'call a customer'?","أَعْمَلُ فِي شَرِكَةٍ／أَتَّصِلُ بِالْعَمِيلِ。","فِي with work at a company; بِـ with calling a customer."]);
add(11,
["イダーファは2つ以上の名詞を「～の…」としてつなぐ構造です。冠詞・タンウィーン・格の位置に独特の制約があります。","Iḍāfa is a noun-to-noun construction roughly corresponding to 'X of Y'. It has specific rules for articles, tanwīn, and case."],
[
["第一名詞（被所有物）には原則 ال を付けず、タンウィーンも付けません。第二名詞（所有者・限定部）は属格になります：كِتَابُ الْمُدِيرِ。","The first noun normally lacks ال and tanwīn; the second is genitive: كِتَابُ الْمُدِيرِ ('the manager's book')."],
["句全体の定性は最後の限定部分で決まります：كِتَابُ مُدِيرٍ（ある部長の本）と كِتَابُ الْمُدِيرِ（その部長の本）。長いイダーファでも同じです。","Definiteness of the phrase depends on its final possessor: كِتَابُ مُدِيرٍ ('a manager's book') vs. كِتَابُ الْمُدِيرِ ('the manager's book')."],
["第一名詞を形容詞で修飾するとき、一般にイダーファ全体の後に形容詞を置き、修飾対象の格・性・数・定性に一致させます。","An adjective describing the first noun usually follows the entire iḍāfa and agrees with the noun being modified in case, gender, number, and definiteness."]
],
[["مَدِيرُ الشَّرِكَةِ","会社の部長。第一名詞に ال がありません。","The company's manager: no article on the first noun."],["اسْمُ الْعَمِيلِ","顧客の名前。後部の الْعَمِيلِ は属格。","The customer's name; the second noun is genitive."],["غُرْفَةُ الْفُنْدُقِ الْجَدِيدَةُ","ホテルの新しい部屋。形容詞は女性名詞 غُرْفَة を修飾。","The new hotel room; the adjective modifies feminine غُرْفَة."]],
["كِتَابُ الْمُدِيرِ を **الْكِتَابُ الْمُدِيرِ** とはしません。第一名詞に定冠詞を重ねないのが基本です。","Do not add an article to the first noun of a standard iḍāfa: كِتَابُ الْمُدِيرِ is the model."],
["「会社の名前」をイダーファで作ってください。","Form 'the company's name' as an iḍāfa.","اسْمُ الشَّرِكَةِ。","اسْمُ الشَّرِكَةِ."]);
add(12,
["「私の・あなたの・彼の」は名詞の後ろにつく接尾辞で表します。所有接尾辞は前置詞・動詞にも現れます。","Possessive suffixes attach to nouns; closely related object/pronominal suffixes also appear on prepositions and verbs."],
[
["基本形：ـِي（私の）、ـكَ（あなた男）、ـكِ（あなた女）、ـهُ（彼の）、ـهَا（彼女の）、ـنَا（私たちの）、ـكُمْ（あなたたちの）、ـهُمْ（彼らの）。","Core suffixes: ـِي (my), ـكَ (your m), ـكِ (your f), ـهُ (his), ـهَا (her), ـنَا (our), ـكُمْ (your plural), ـهُمْ (their m)."],
["接尾辞が付いた名詞は通常、定の名詞句となります。كِتَابِي（私の本）、شَرِكَتُنَا（私たちの会社）。ة は接尾辞が付くと ت の形になります。","A noun with a possessive suffix is generally definite: كِتَابِي, شَرِكَتُنَا. Tāʾ marbūṭa changes to the written form ت before suffixes."],
["前置詞にも結び付きます：لِي（私に／私の）、لَكَ（あなた男に）、عِنْدِي（私のところに→私にはある）、مَعِي（一緒に）。形が一部変わるので慣用表現で覚えます。","Suffixes also attach to prepositions: لِي, لَكَ, عِنْدِي, مَعِي. Some prepositional forms undergo changes; learn common chunks."]
],
[["هٰذَا كِتَابِي.","これは私の本です。","This is my book."],["هٰذِهِ شَرِكَتُنَا.","こちらは弊社です。","This is our company."],["هَلْ عِنْدَكَ وَقْتٌ؟","時間はありますか？（男性へ）","Do you have time? (to a man)"]],
["所有を表す ـي と、動詞の「私」を表す接頭辞 أَـ は別です。أَكْتُبُ＝私は書く、كِتَابِي＝私の本。","Do not confuse the possessive suffix ـي with the first-person imperfect prefix أَـ."],
["「彼女の会社」はどう言いますか？","How do you say 'her company'?","شَرِكَتُهَا（sharikatuhā）。","شَرِكَتُهَا (sharikatuhā)."]);
add(13,
["疑問文は「Yes/Noか、具体的な情報か」で形を選びます。疑問詞を文頭に置くものが多く、発音では上昇調に頼らなくても構造が伝わります。","Choose between yes/no questions and information questions. Many Arabic question words appear near the start of the clause."],
[
["Yes/No は هَلْ + 文が基本。「～か、それとも～か」の二択では أَ… أَمْ… も使えます。","For yes/no questions, هَلْ + clause is common; أَ… أَمْ… can introduce alternatives."],
["場所 أَيْنَ、時 مَتَى、方法 كَيْفَ、相手 مَنْ、内容 مَاذَا／مَا、数量 كَمْ、理由 لِمَاذَا、選択 أَيُّ。疑問詞に続く名詞の形は構文で変わります。","Use أَيْنَ (where), مَتَى (when), كَيْفَ (how), مَنْ (who), مَاذَا/مَا (what), كَمْ (how many), لِمَاذَا (why), and أَيُّ (which)."],
["正式な数詞質問では كَمْ の後の数えられる名詞（تمييز）は通常単数対格：كَمْ كِتَابًا؟（何冊？）。ただし数詞の詳細規則は第23・34章で扱います。","In standard counting questions, the noun after كَمْ is typically singular accusative: كَمْ كِتَابًا؟ ('How many books?'). Number syntax is developed further in Chapters 23 and 34."]
],
[["هَلْ أَنْتَ مُتَاحٌ غَدًا؟","明日は空いていますか？（男性へ）","Are you available tomorrow? (to a man)"],["كَمْ كِتَابًا عِنْدَكَ؟","本は何冊ありますか？","How many books do you have?"],["لِمَاذَا تَتَعَلَّمُ الْعَرَبِيَّةَ؟","なぜアラビア語を学んでいますか？","Why are you learning Arabic?"]],
["كَمْ の後を必ず複数形にするのは誤りです。数を尋ねる一般的な كَمْ では単数対格が基本です。","Do not automatically use a plural after interrogative كَمْ; a singular accusative count noun is standard."],
["「どこで働いていますか？」を男性に尋ねるなら？","How would you ask a man 'Where do you work?'","أَيْنَ تَعْمَلُ؟","أَيْنَ تَعْمَلُ?"]);
add(14,
["完了形は終わった動作・完了した出来事を表し、語尾の接尾辞で人称を区別します。変化の中心は語末です。","The perfect expresses completed actions and commonly past events. Person is marked mainly by verb endings."],
[
["كَتَبَ（彼は書いた）、كَتَبَتْ（彼女）、كَتَبْتُ（私）、كَتَبْتَ（あなた男）、كَتَبْتِ（あなた女）、كَتَبْنَا（私たち）。語尾の違いを声に出して比較します。","Compare كَتَبَ (he wrote), كَتَبَتْ (she), كَتَبْتُ (I), كَتَبْتَ (you m), كَتَبْتِ (you f), كَتَبْنَا (we)."],
["三人称男性複数は كَتَبُوا、女性複数は كَتَبْنَ。標準語には双数 كَتَبَا／كَتَبَتَا もあります。","The third-person masculine plural is كَتَبُوا, feminine plural كَتَبْنَ; MSA also has dual forms كَتَبَا / كَتَبَتَا."],
["完了形は、時間を表す語（أَمْسِ、الْأُسْبُوعَ الْمَاضِي）と組み合わせると話を作りやすくなります。一般的な過去否定には مَا＋完了形、または لَمْ＋ジャズム形を使えます。","Time expressions such as أَمْسِ make past narratives clearer. Negation may use مَا + perfect or لَمْ + jussive imperfect."]
],
[["ذَهَبْتُ إِلَى الْمَكْتَبِ أَمْسِ.","昨日オフィスへ行きました。","I went to the office yesterday."],["كَتَبَتْ رِسَالَةً.","彼女はメッセージを書きました。","She wrote a message."],["مَا عَمِلْتُ يَوْمَ الْجُمُعَةِ.","金曜日は働きませんでした。","I did not work on Friday."]],
["كَتَبْتُ（私）と كَتَبْتَ（男性のあなた）は語尾の短母音だけで異なります。文字だけでなく音も確認します。","كَتَبْتُ (I) and كَتَبْتَ (you m) differ only in the ending vowel. Listen and pronounce them distinctly."],
["كَتَبَ の「彼女は書いた」「私は書いた」「私たちは書いた」の3形は？","Give the perfect forms of كَتَبَ for she, I and we.","كَتَبَتْ／كَتَبْتُ／كَتَبْنَا。","كَتَبَتْ / كَتَبْتُ / كَتَبْنَا."]);
add(15,
["未完了形は現在の出来事、習慣、文脈に応じた未来などを表します。基本は接頭辞と語尾の組み合わせです。","The imperfect covers present, habitual and contextually future actions. Person is marked by a combination of prefixes and suffixes."],
[
["まず4つの接頭辞：أَ（私）、نَ（私たち）、تَ（あなた／彼女）、يَ（彼）。كَتَبَ → يَكْتُبُ／أَكْتُبُ のように習得します。","Start with four prefixes: أَ (I), نَ (we), تَ (you/she), يَ (he). For كَتَبَ, compare يَكْتُبُ and أَكْتُبُ."],
["語尾も重要です：تَكْتُبِينَ（あなた女性）、يَكْتُبُونَ（彼ら）、نَكْتُبُ（私たち）。同じ تَكْتُبُ は「あなた男性」または「彼女」。","Endings matter: تَكْتُبِينَ (you f), يَكْتُبُونَ (they m), نَكْتُبُ (we). تَكْتُبُ can mean 'you m' or 'she'."],
["未完了形の語幹母音は動詞ごとに異なります。دَرَسَ → يَدْرُسُ、فَتَحَ → يَفْتَحُ。新しい動詞は完了形（彼）＋未完了形（彼）で覚えます。","Stem vowels vary by verb: دَرَسَ → يَدْرُسُ and فَتَحَ → يَفْتَحُ. Learn new verbs as perfect/imperfect pairs."]
],
[["أَعْمَلُ فِي دُبَيّ.","私はドバイで働いています。","I work in Dubai."],["هِيَ تَكْتُبُ رِسَالَةً.","彼女はメッセージを書きます。","She writes a message."],["تَكْتُبِينَ بِالْعَرَبِيَّةِ.","あなた（女性）はアラビア語で書きます。","You (female) write in Arabic."]],
["すべての動詞の語幹が -u- になるわけではありません。活用表の形だけを当てはめず、動詞ごとの母音型を確認します。","Not every verb has the same stem vowel. Check the lexical imperfect rather than guessing from prefixes alone."],
["「私たちは書く」と「あなた（女性）は書く」は？","Give 'we write' and 'you (female) write'.","نَكْتُبُ／تَكْتُبِينَ。","نَكْتُبُ / تَكْتُبِينَ."]);
add(16,
["標準語の動詞活用は単数・双数・複数、男性・女性、人称を組み合わせます。A1ではまず日常で必要な7形、読解では全14区分を理解します。","MSA verb conjugation combines person, gender and singular/dual/plural. Start with high-frequency forms and gradually learn the full paradigm."],
[
["كَتَبَ の未完了形を主語別に整理：私 أَكْتُبُ、私たち نَكْتُبُ、彼 يَكْتُبُ、彼女 تَكْتُبُ、あなた男 تَكْتُبُ、あなた女 تَكْتُبِينَ、彼ら يَكْتُبُونَ。","Essential imperfect paradigm: I أَكْتُبُ, we نَكْتُبُ, he يَكْتُبُ, she تَكْتُبُ, you m تَكْتُبُ, you f تَكْتُبِينَ, they m يَكْتُبُونَ."],
["双数（2人）は يَكْتُبَانِ／تَكْتُبَانِ、女性複数は يَكْتُبْنَ／تَكْتُبْنَ。標準語では文字・公式発言で重要です。","Dual forms include يَكْتُبَانِ / تَكْتُبَانِ; feminine plurals include يَكْتُبْنَ / تَكْتُبْنَ. These are particularly relevant for formal MSA."],
["現在形を接続法・ジャズム形にすると、五動詞（الأفعال الخمسة）では語尾 ن が落ちます：يَكْتُبُونَ → لَنْ يَكْتُبُوا、لَمْ يَكْتُبُوا。","In subjunctive/jussive forms of the 'five verbs', final ن drops: يَكْتُبُونَ → لَنْ يَكْتُبُوا and لَمْ يَكْتُبُوا."]
],
[["نَكْتُبُ الْيَوْمَ.","私たちは今日書きます。","We write today."],["هُمْ يَكْتُبُونَ.","彼らは書いています。","They are writing."],["لَنْ يَكْتُبُوا غَدًا.","彼らは明日書かないでしょう。","They will not write tomorrow."]],
["接頭辞 تَ だけでは「あなた男性／彼女／双数のあなたたち」などを判定できません。語尾と主語を合わせて確認します。","The تَ prefix alone does not determine the subject; read the full ending and context."],
["يَكْتُبُونَ から لَمْ で否定すると、語尾はどう変わる？","How does يَكْتُبُونَ change after لَمْ?","لَمْ يَكْتُبُوا。語尾の ن が落ちます。","لَمْ يَكْتُبُوا; the final ن is dropped."]);
add(17,
["動詞の語根が同じでも、未完了形の語幹母音は一定ではありません。意味とセットで「完了形・未完了形」を覚えることが最も確実です。","Even with a similar three-consonant root, stem vowels in the imperfect are not fully predictable. Memorize the perfect and imperfect together."],
[
["第一形の典型例：كَتَبَ／يَكْتُبُ（書く）、جَلَسَ／يَجْلِسُ（座る）、فَتَحَ／يَفْتَحُ（開ける）。母音型は語彙の一部です。","Common Form I pairs: كَتَبَ / يَكْتُبُ (write), جَلَسَ / يَجْلِسُ (sit), فَتَحَ / يَفْتَحُ (open). The imperfect stem vowel is lexical information."],
["長母音・弱文字を含む語根ではさらに形が変わります。قَالَ／يَقُولُ（言う）、بَاعَ／يَبِيعُ（売る）、دَعَا／يَدْعُو（呼ぶ）などを個別に習得します。","Weak roots may change more: قَالَ / يَقُولُ (say), بَاعَ / يَبِيعُ (sell), دَعَا / يَدْعُو (call)."],
["完了形の「彼」は辞書の見出しとして便利ですが、「私は～する」という会話力には未完了形一人称も必要です。語彙帳では3形を並べましょう。","The third-person perfect is a useful dictionary headword, but speaking also requires a first-person imperfect. Record all three forms together."]
],
[["كَتَبَ — يَكْتُبُ — أَكْتُبُ","書いた・書く（彼）・書く（私）。","Wrote (he) / writes (he) / write (I)."],["جَلَسَ — يَجْلِسُ — أَجْلِسُ","座った・座る（彼）・座る（私）。","Sat (he) / sits (he) / sit (I)."],["بَاعَ — يَبِيعُ — أَبِيعُ","売った・売る（彼）・売る（私）。","Sold (he) / sells (he) / sell (I)."]],
["كَتَبَ→يَكْتُبُ の u を全動詞に当てはめないでください。動詞を新しく学ぶときは必ず相方の未完了形を確認します。","Do not apply the -u- pattern of يَكْتُبُ to every verb. Verify each verb's imperfect."],
["جَلَسَ の未完了形（彼）は？","What is the third-person imperfect of جَلَسَ?","يَجْلِسُ。","يَجْلِسُ."]);
add(18,
["未来は未完了形に سَـ または سَوْفَ を加えて表します。意志・希望・丁寧な依頼の構造とは分けて整理しましょう。","Future time is commonly marked by سَـ or سَوْفَ plus the imperfect. Distinguish that from wanting, planning and making polite requests."],
[
["سَأُرْسِلُ＝私は送ります、سَوْفَ أُرْسِلُ も未来。両者の意味差は文脈・文体によりますが、実用会話では短い سَـ がよく使われます。","سَأُرْسِلُ and سَوْفَ أُرْسِلُ both express future sending. The nuance depends on context; the short prefix سَـ is convenient in common use."],
["未来否定は لَنْ＋接続法：لَنْ أَذْهَبَ（私は行きません）。一方、現在否定は لَا أَذْهَبُ、過去否定は مَا ذَهَبْتُ と整理します。","Future negation uses لَنْ + subjunctive: لَنْ أَذْهَبَ. Contrast present لَا أَذْهَبُ and past مَا ذَهَبْتُ."],
["希望は أُرِيدُ أَنْ＋接続法、丁寧な依頼は هَلْ يُمْكِنُكَ أَنْ＋接続法など。未来の予定を直接言う文と依頼を混同しないようにします。","To express wishes use أُرِيدُ أَنْ + subjunctive; for polite requests هَلْ يُمْكِنُكَ أَنْ ... is common. These are not simply future tense."]
],
[["سَأُرْسِلُ الْعَيِّنَاتِ غَدًا.","明日サンプルを送ります。","I will send the samples tomorrow."],["لَنْ أَتَأَخَّرَ.","私は遅れません。","I will not be late."],["أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ.","アラビア語を学びたいです。","I want to learn Arabic."]],
["أُرِيدُ أَنْ أَذْهَبَ の أَذْهَبَ は直説法の語尾 -u ではなく接続法の -a。聞くだけでは省略されることもあるため、文字で確認します。","After أَنْ, the verb is subjunctive: أَذْهَبَ rather than indicative أَذْهَبُ."],
["「明日送りません」を未来否定で言うと？","Form 'I will not send it tomorrow' using future negation.","لَنْ أُرْسِلَهُ غَدًا。","لَنْ أُرْسِلَهُ غَدًا."]);
})();