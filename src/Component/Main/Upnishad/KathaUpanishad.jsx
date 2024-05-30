import React, { useState } from "react";

const Vedas =[
  {
     id:1,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"1",
     shlok:{
        line1:"ॐ उशन्ह वै वाजश्रवस: सर्ववेदसं ददौ। \n तस्य ह नचिकेता नाम पुत्र आस॥ १ ॥ ",
        
     },
     translationHindi:"प्रसिद्ध है कि यज्ञफलके इच्छुक वाजश्रवाके पुत्रने [विश्वजित् यज्ञमें] अपना सारा धन दे दिया। उसका नचिकेता नामक एक प्रसिद्ध पुत्र था॥ १ ॥",
     translationEnglish:"Once upon a time, the son of Vajasrava, being desirous of fruit, gaveaway everything. He had, as the story goes, a son named Naciketa.",
     commentaryHindi:"यहाँ जो आख्यायिका है वह विद्याकी स्तुतिके लिये है। उशन् अर्थात् कामनावाला। ‘ह’ और ‘वै’ ये निपात पहले बीते हुए वृत्तान्तको स्मरण करानेके लिये हैं। ‘वाज’ अन्नको कहते हैं; उसके दानादिके कारण जिसका श्रव यानी यश हो उसे वाजश्रवा कहते हैं; अथवा रूढिसे भी यह उसका नाम हो सकता है। उस वाजश्रवाके पुत्र वाजश्रवसने, जिसमें सर्वस्व समर्पण किया जाता है उस विश्वजित् यज्ञद्वारा, उसके फलकी इच्छासे यजन किया। उस यज्ञमें उसने सर्ववेदस् यानी अपना सारा धन दे डाला। कहते हैं, उस यजमानका नचिकेता नामक एक पुत्र था॥ १ ॥ ",
     commentaryEnglish:"Wan, being desirous of; ha and vai (equivalent to - once upon a time) aretwo indeclinable particles, recalling to mind what happened before.Vajasrava is he whose iravah, fame, is consequent on the giving of vdjam,food. Or it is a proper name. His son, Vajasravasa, being desirous of thefruit of the sacrifice, performed the Visvajit sacrifice in which all is givenaway. In that sacrifice, he dadau, gave away; sarvavedasam, all (his) wealth.Tasya, of him, of that performer of sacrifice; dsa, there was; ha, as the storygoes; naciketa nama putrah, a son named Naciketa.",
     
  },
  {
     id:2,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"2",
     shlok:{
        line1:"तँह् कुमाँर् सन्तं दक्षिणासु नीयमानासु श्रद्धाविवेश सोऽमन्यत॥ २ ॥  ",
        
     },
     translationHindi:"जिस समय दक्षिणाएँ (दक्षिणास्वरूप गौएँ) ले जायी जा रही थीं, उसमें—यद्यपि अभी वह कुमार ही था—श्रद्धा (आस्तिक्यबुद्धि)-का आवेश हुआ। वह सोचने लगा॥ २ ॥ ",
     translationEnglish:" As the presents were being carried (to the Brahmanas) faith tookpossession of him who was still a boy. He thought:",
     commentaryHindi:"जो कुमार अर्थात् प्रथम अवस्थामें ही स्थित है और जिसे पुत्रोत्पादनकी शक्ति प्राप्त नहीं हुर्इ उस बालक नचिकेतामें श्रद्धाका अर्थात् पिताकी हितकामनासे प्रयुक्त आस्तिक्य बुद्धिका आवेश—प्रवेश हुआ। किस समय प्रवेश हुआ? इसपर कहते हैं—जिस समय ऋत्विक् और सदस्योंके लिये दक्षिणाएँ लायी जा रही थीं अर्थात् दक्षिणाके लिये विभाग करके गौएँ लायी जा रही थीं, उस समय नचिकेताने श्रद्धाविष्ट होकर विचार किया॥ २ ॥ ",
     commentaryEnglish:"Tam, into him, into Naciketa; kumaram santam, while still in the primeof life, still not adolescent, still a mere boy; sraddha, faith (in the verity ofthe scriptures), induced by a desire for his father's good; avivesa, entered.At what time? This is being stated: daksinasu nivamanasu, when gifts werebeing carried, when cows meant for presents were being led separately(according to each one's due), to the priests and the assembled Brahmanas;sah, he, that Naciketa who had an influx of faith; amanyata, thought.How he thought is being stated in pitodaka etc. ",
     
  },
  {
     id:3,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"3",
     shlok:{
        line1:"पीतोदका जग्धतृणा दुग्धदोहा निरिन्द्रिया:। \n अनन्दा नाम ते लोकास्तान्स गच्छति ता ददत्॥ ३ ॥ ",
        
     },
     translationHindi:"जो जल पी चुकी हैं, जिनका घास खाना समाप्त हो चुका है, जिनका दूध भी दुह लिया गया है और जिनमें प्रजननशक्तिका भी अभाव हो गया है उन गौओंका दान करनेसे वह दाता, जो अनन्द (आनन्दशून्य)-लोक हैं उन्हींको जाता है॥ ३ ॥ ",
     translationEnglish:" He goes to those worlds that are known as joyless, who gives away thecows that have drunk water and eaten grass (for good), whose milk hasbeen milked (for the last time), and which have lost their organs.",
     commentaryHindi:"दक्षिणाके लिये लायी हुर्इ गौओंका विशेषण बतलाते हैं; जिन्होंने जल पी लिया है वे पीतोदका कहलाती हैं, जो तृण (घास) खा चुकी हैं [अर्थात् जिनमें और घास खानेकी शक्ति नहीं रही है] वे जग्धतृणा हैं, जिनका क्षीर नामक दोह दुहा जा चुका है वे दुग्धदोहा हैं तथा निरिन्द्रिया—जो सन्तान उत्पन्न करनेमें असमर्था अर्थात् बूढ़ी और निष्फल गौएँ हैं उन इस प्रकारकी गौओंको दक्षिणा-बुद्धिसे देनेवाला यजमान जो अनन्द अर्थात् सुखहीन लोक हैं उन्हींको जाता है॥ ३ ॥ ",
     commentaryEnglish:"The cows meant for offering to the Brahmanas are being described:Those by which udakam, water, has been pitam, drunk, are pitodakdh;tthose by which trnam, grass, has been jagdham, eaten, are jagdha- trnah;those whose dohah, milk, has been dugdhah, h; nirindriyah, those thatmilked, are dugdha-doh' are devoid of the power of their organs, incapableof bearing calves; that is to say, the cows that are decrepit and barren.Dadat, giving; tah, those, the cows that are of this kind; to the priests asrewards for their service; sah, he, the performer of sacrifice; gacchati, goes;tan, to those (worlds); anandah namate lokah, which worlds are known asdevoid of happiness, joyless.",
     
  },
  {
     id:4,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"4",
     shlok:{
        line1:"स होवाच पितरं तत कस्मै मां दास्यसीति। \n द्वितीयं तृतीयं त्ँहोवाच मृत्यवे त्वा ददामीति॥ ४ ॥",
        
     },
     translationHindi:"तब वह अपने पितासे बोला—‘हे तात! आप मुझे किसको देंगे?’ इसी प्रकार उसने दुबारा-तिबारा भी कहा। तब पिताने उससे ‘मैं तुझे मृत्युको दूँगा’ ऐसा कहा॥ ४ ॥ ",
     translationEnglish:". He said to his father, `Father, to whom will you offer me?' He spoke tohim a second time and a third time. To him (the father) said, To Death Ioffer you.'",
     commentaryHindi:"तब, इस प्रकार यज्ञकी पूर्णता न होनेके कारण पिताको प्राप्त होनेवाला अनिष्ट फल मुझ-जैसे सत्पुत्रको आत्म-बलिदान करके भी निवृत्त करना चाहिये— ऐसा मानकर वह पिताके समीप जाकर बोला—‘हे तात! आप मुझे किस ऋत्विग्विशेषको दक्षिणामें देंगे?’ इस प्रकार कहनेपर पिताद्वारा बारम्बार उपेक्षा किये जानेपर भी उसने दूसरे-तीसरे बार भीबार भी यही बात कही कि ‘मुझे किसको देंगे? मुझे किसको देंगे?’ तब पिता यह सोचकर कि यह बालकोंके-से स्वभाववाला नहीं है, क्रोधित हो गया और उस पुत्रसे बोला— ‘मैं तुझे सूर्यके पुत्र मृत्युको देता हूँ’॥ ४ ॥ पिताद्वारा इस प्रकार कहे जानेपर वह पुत्र एकान्तमें अनुताप करने लगा, किस प्रकार? सो बतलाते हैं—",
     commentaryEnglish:"The evil result thus accruing to my father as a consequence of theimperfection of the sacrifice should be warded off by me, who am a goodson, by perfecting the sacrifice even through an offering of myself', thinkingthus, sah, he-approached his father; and uvaca ha, said; pitaram, to the father; 'Tata (same as tata), 0 father; kasmai, to whom, to which of thepriests; mam dasyasi, will you offer me, that is to say, offer me as apresent?' iti. Though ignored by his father who was addressed thus,dvitiyam trtiyam uvaca, he spoke even-a second time and a third time, thus:To whom will you offer me?' To whom will you offer me?' Incensed at thethought, 'This one is not behaving like a boy', the father uvaca ha, said, tam,to him, to his son: 'Mrtrave, to Death, to the son of the Sun. dadami, I giveaway: ti-5 (which is same as tvam), you'; iti, (this much).That son, having been spoken to thus, sorrowfully cogitated in a solitaryplace. How? That is being said:",
     
  },
  {
     id:5,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"5",
     shlok:{
        line1:"बहूनामेमि प्रथमो बहूनामेमि मध्यम:। \n किंस्विद्यमस्य कर्तव्यं यन्मयाद्य करिष्यति॥ ५ ॥ ",
        
     },
     translationHindi:"मैं बहुत-से [शिष्य या पुत्रों]-में तो प्रथम (मुख्य वृत्तिसे) चलता हूँ और बहुतोंमें मध्यम (मध्यम वृत्तिसे) जाता हूँ। यमका ऐसा क्या कार्य है जिसे पिता आज मेरे द्वारा सिद्ध करेंगे॥ ५ ॥ ",
     translationEnglish:" Among many I rank as belonging to the highest; among many I rankas belonging to the middling. What purpose can there be of Death that myfather will get achieved today through me?",
     commentaryHindi:"मैं बहुत-से शिष्य अथवा पुत्रोंमें तो प्रथम अर्थात् आगे रहकर मुख्य शिष्यादि वृत्तिसे चलता हूँ तथा बहुत-से मध्यम शिष्यादिमें मध्यम रहकर मध्यम-वृत्तिसे बर्तता हूँ। अधम वृत्तिसे मैं कभी नहीं रहता। उस ऐसे विशिष्टगुणसम्पन्न पुत्रको भी पिताने ‘मैं तुझे मृत्युको देता हूँ’ ऐसा कहा। परन्तु यमका ऐसा कौन-सा कर्तव्य—प्रयोजन इन्हें पूर्ण करना है जिसे ये इस प्रकार दिये हुए मेरे द्वारा सिद्ध करेंगे? अवश्य किसी प्रयोजनकी अपेक्षा न करके ही पिताने क्रोधवश ऐसा कहा है। तथापि ‘पिताका वचन मिथ्या न हो’ ऐसा विचारकर उसने अपने पितासे, जो यह सोचकर कि ‘मैंने क्या कह डाला?’ शोकातुर हो रहे थे, खेदपूर्वक कहा॥ ५ ॥ ",
     commentaryEnglish:"Bahunam, among many--of many sons or disciples; emi, I go (rank);prathamah, as first owing to the best conduct of a disciple etc. This is theidea. And bahunam, among many --many middling ones; madh▶'amahemi, I move (count) as a middling one, I behave in a middling manner. Butnever do I behave as the worst.' Though I am a son possessed of suchquality, still to me my father has said, 'To Death I offer you.' Kim svit, what;kartavyam, purpose: vamas.va, of Death-can there be; which purpose he(my father) adva, today: karisvati, will achieve: mava, through me, bysending me?'My father must have certainly spoken so out of anger, without anyconsideration of purpose. Still, that utterance of the father must not befalsified', thinking thus, he said sorrowfully to his father, remorseful as thelatter was because of the thought 'What a thing I have uttered!'",
     
  },
  {
     id:6,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"6",
     shlok:{
        line1:"अनुपश्य यथा पूर्वे प्रतिपश्य तथापरे। \n सस्यमिव मर्त्य: पच्यते सस्यमिवाजायते पुन:॥ ६ ॥ ",
        
     },
     translationHindi:" जिस प्रकार पूर्वपुरुष व्यवहार करते थे उसका विचार कीजिये तथा जैसे वर्तमानकालीन अन्य लोग प्रवृत्त होते हैं उसे भी देखिये। मनुष्य खेतीकी तरह पकता (वृद्ध होकर मर जाता) है और खेतीकी भाँति फिर उत्पन्न हो जाता है॥ ६ ॥",
     translationEnglish:"Consider successively how your forefathers behaved, and considerhow others behave (now). Man decays and dies like corn, and emergesagain like corn.",
     commentaryHindi:"आपके पिता-पितामह आदि पुरुष अनुक्रमसे जिस प्रकार आचरण करते आये हैं उसकी आलोचना कीजिये—उसपर दृष्टि डालिये। उन्हें देखकर आपको उन्हींके आचरणोंका पालन करना चाहिये। तथा वर्तमानकालीन जो दूसरे साधुलोग आचरण करते हैं उनकी भी आलोचना कीजिये। उनमेंसे किसीका भी आचरण अपने कथनको मिथ्या करना नहीं था और न इस समय ही किसीका है। इसके विपरीत असत्पुरुषोंका आचरण मिथ्या करना ही है। किन्तु अपने आचरणको मृषा करके कोर्इ अजर-अमर नहीं हो सकता। क्योंकि मनुष्य खेतीकी तरह पकता अर्थात् जीर्ण होकर मर जाता है तथा मरकर खेतीके समान पुन: उत्पन्न—आविर्भूत हो जाता है। इस प्रकार इस अनित्य जीवलोकमें असत्य आचरणसे लाभ ही क्या है? अत: अपने सत्यका पालन कीजिये अर्थात् मुझे यमराजके पास भेजिये॥ ६ ॥ \n पुत्रके इस प्रकार कहनेपर पिताने अपनी सत्यताकी रक्षाके लिये उसे यमराजके पास भेज दिया। वह यमराजके घर पहुँचकर तीन रात्रि टिका रहा, क्योंकि यम उस समय बाहर गये हुए थे। प्रवाससे लौटनेपर यमराजसे उनकी भार्या अथवा मन्त्रियोंने समझाते हुए कहा— ",
     commentaryEnglish:"Anupasya: anu, successively; paiya, consider, have a look at; yatha, how;your, purve, forebears, dead father, grandfather and others behaved. Andseeing them, it behoves you to tread in their footsteps. Tatha, similarly too;as apare, others--other holy men behave; them also you pratipasya,consider. Not that in them there ever was, or is, any falsification. Opposedto that is the behaviour of bad people, which consists of paltering with truth.Besides, not by prevarication can anyone become free from death anddecrepitude. For martrah, man; sas;am iva, like corn; pacyate, decays anddies; and after dying, punah, again ; sasyam iva ajayate, reappears (is born)like corn. Thus what does one gain in this impermanent human world bybreaking one's own words? Protect your own truth, and send me to Death.This is the idea. \nHaving been addressed thus, the father sent (him) for the sake of his ownveracity. And he, having gone to Death's abode, lived for three nights (i.e.days), Death being out. When Death returned from his sojourn, hiscouncillors or wives said to him by way of advice:",
     
  },
  {
     id:7,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"7",
     shlok:{
        line1:"वैश्वानर: प्रविशत्यतिथिर्ब्राह्मणो गृहान्। \n तस्यैतांशान्तिं कुर्वन्ति हर वैवस्वतोदकम्॥ ७ ॥ ",
        
     },
     translationHindi:"ब्राह्मण-अतिथि होकर अग्नि ही घरोंमें प्रवेश करता है। [साधु पुरुष] उस अतिथिकी यह [अर्घ्य-पाद्य-दानरूपा] शान्ति किया करते हैं। अत: हे वैवस्वत! [इस ब्राह्मण-अतिथिकी शान्तिके लिये] जल ले जाइये॥ ७ ॥ ",
     translationEnglish:" A Brahmana guest enters the houses like fire. For him theyaccomplish this kind of propitiation. 0 Death, carry water (for him)",
     commentaryHindi:"ब्राह्मण-अतिथिके रूपमें साक्षात् वैश्वानर—अग्नि ही दग्ध करता हुआ-सा घरोंमें प्रवेश करता है। उस अग्निके दाहको मानो शान्त करते हुए ही साधु-गृहस्थजन यह पाद्यादि दानरूप शान्ति किया करते हैं। अत: हे वैवस्वत! नचिकेताको पाद्य देनेके लिये जल ले जाइये। क्योंकि ऐसा न करनेमें प्रत्यवाय सुना जाता है॥ ७ ॥",
     commentaryEnglish:"Brahmanah, a Brahmana; as atithih, a guest; pravisati, enters; likevaisvanarah, fire itself; as though burning grhan, the houses. Since tasva, forhis sake-for the guest; the good people kurvanti, accomplish; etdm, thiskind of, sdntim, propitiation -consisting in offering water for washing feet, aseat, etc., just as people do for allaying the conflagration of fire-and sinceevil consequences are declared in case of not doing so (Mu. I. ii. 3);therefore vaivasvata. 0 Death; Kara, carry; udakam, water --for Naciketa,for washing his feet.",
     
  },
  {
     id:8,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"8",
     shlok:{
        line1:"आशाप्रतीक्षे संगतंसूनृतां च इष्टापूर्ते पुत्रपशूंश्च सर्वान्। \n एतद्वृङ्क्ते पुरुषस्याल्पमेधसो यस्यानश्नन्वसति ब्राह्मणो गृहे॥ ८ ॥ ",
        
     },
     translationHindi:" जिसके घरमें ब्राह्मण-अतिथि बिना भोजन किये रहता है उस मन्दबुद्धि पुरुषकी ज्ञात और अज्ञात वस्तुओंकी प्राप्तिकी इच्छाएँ, उनके संयोगसे प्राप्त होनेवाले फल, प्रिय वाणीसे होनेवाले फल, यागादि इष्ट एवं उद्यानादि पूर्त कर्मोंके फल तथा समस्त पुत्र और पशु आदिको वह नष्ट कर देता है॥ ८ ॥",
     translationEnglish:"If in anyone's house a Brahmana guest abides without food, thatBrahmana destroys hope and expectation, the results of holy association andsweet discourse, sacrifices and charities, sons and cattleall these-of that manof little intelligence.",
     commentaryHindi:" जिसके घरमें ब्राह्मण बिना भोजन किये रहता है उस मन्दमति पुरुषके ‘आशा-प्रतीक्षा’—आशा—जिनका कोर्इ ज्ञान नहीं है उन प्राप्तव्य इष्ट पदार्थोंकी इच्छा तथा अपने प्राप्तव्य ज्ञात पदार्थोंकी प्रतीक्षा एवं संगत—उनके संयोगसे प्राप्त होनेवाले फल, सूनृता—प्रिय वाणी और उससे होनेवाले फल, ‘इष्टापूर्त’— इष्ट—यागादिसे प्राप्त होनेवाले फल और पूर्त—बाग बगीचोंके लगानेसे होनेवाले फल तथा पुत्र और पशु—इन उपर्युक्त सभीको नष्ट कर देता है। अत: तात्पर्य यह है कि अतिथि सभी अवस्थाओंमें अनुपेक्षणीय है॥ ८ ॥ \n  [मन्त्रियोंद्वारा] इस प्रकार कहे जानेपर यमराजने नचिकेताके पास जा उसकी पूजा करनेके अनन्तर कहा—",
     commentaryEnglish:"Aidpratikse: did is the wish for a desirable thing which is attainablethough unknown; pratiksd is expectation for something that is attainableand known; these two, hope and expectation, are didpratikse; samgatam isthe fruit derived from the association with the holy people'; sunrtdm ca:.sunrtd is sweet discourse--the fruit of that also; ista-purte: ista is the fruit ofsacrifice and purta is that of (charitable) work like construction ofresthouses etc.; putra pasun ca, sons and cattle; sarvdn eta! should besarvam etas, all this, as described; (he) vrhkte, excludes (from), i.e.destroys; purusasya alpamedhasah, from (i.e. of) a man of little intelligence;yasya, in whose; grhe, house; brdhmanah, a Brahmana; vasati, abides;anainan, without food. Therefore, a guest should not be neglected under anycondition. This is the idea.Having been told thus, Death approached Naciketa with adoration andsaid:",
     
  },
  {
     id:9,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"9",
     shlok:{
        line1:"तिस्रो रात्रीर्यदवात्सीर्गृहे मे अनश्नन्ब्रह्मन्नतिथिर्नमस्य:। \n नमस्तेऽस्तु ब्रह्मन्स्वस्ति मेऽस्तु तस्मात्प्रति त्रीन्वरान्वृणीष्व॥ ९ ॥ ",
        
     },
     translationHindi:"हे ब्रह्मन्! तुम्हें नमस्कार हो; मेरा कल्याण हो। तुम नमस्कारयोग्य अतिथि होकर भी मेरे घरमें तीन रात्रितक बिना भोजन किये रहे; अत: एक-एक रात्रिके लिये एक-एक करके मुझसे तीन वर माँग लो॥ ९ ॥ ",
     translationEnglish:"O Brahmana, since you have lived in my house for three nights withoutfood, a guest and an adorable person as you are, let my salutations be toyou, and let good accrue to me (by averting the fault arising) from that(lapse). Ask for three boons one in respect of each (night)",
     commentaryHindi:" हे ब्रह्मन्! क्योंकि अतिथि और नमस्कारयोग्य होकर भी तुम तीन रात्रितक बिना कुछ भोजन किये मेरे घरमें रहे हो, अत: तुम्हें नमस्कार है। हे ब्रह्मन्! मेरे घरमें बिना भोजन किये आपके निवास करनेके निमित्तसे हुए दोषसे, उससे प्राप्त हुए अनिष्ट फलकी शान्तिद्वारा, मेरा मङ्गल—शुभ हो। यद्यपि तुम्हारी कृपासे ही मेरा सब प्रकार कल्याण हो जायगा, तथापि अपनी अधिक प्रसन्नताके लिये तुम बिना भोजन किये बितायी हुर्इ एक-एक रात्रिके प्रति मुझसे तीन वर—अपने अभीष्ट पदार्थविशेष माँग लो॥ ९ ॥ \n नचिकेताने कहा—यदि आप वर देना चाहते हैं तो—",
     commentaryEnglish:"Brahman, O Brahmana; yat, since; avatsih, you have lived; grhe me, inmy house; tisrah ratrih, for three nights; anasnan, without eating; atithih, aguest; and namaslvah, worthy of being saluted (venerable)as you are;therefore namah to astu, let salutations be to you. Brahman, O Brahmana ;let there be svasti, good fortune; me, for me; through the aversion of theevil accruing tasmdt, therefrom, from the lapse caused by your abiding inmy house without food. Although all good will befall me through yourfavour, still for your propitiation all the more, vrn%sva, ask for: trip varan,three boons- any particular three things you like; prati, one in respect ofeach night you have spent without food.As for Naciketa, he said:",
     
  },
  {
     id:10,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"10",
     shlok:{
        line1:" शान्तसंकल्प: सुमना यथा स्या- द्वीतमन्युर्गौतमो माभि मृत्यो।  \n त्वत्प्रसृष्टं माभिवदेत्प्रतीत एतत्त्रयाणां प्रथमं वरं वृणे॥ १० ॥",
        
     },
     translationHindi:"हे मृत्यो! जिससे मेरे पिता वाजश्रवस मेरे प्रति शान्तसङ्कल्प, प्रसन्नचित्त और क्रोधरहित हो जायँ तथा आपके भेजनेपर मुझे पहचानकर बातचीत करें—यह मैं [आपके दिये हुए] तीन वरोंमेंसे पहला वर माँगता हूँ॥ १० ॥ ",
     translationEnglish:"O Death, of the three boons I ask this one as the first, viz that (myfather) Gautama may become freed from anxiety, calm of mind, freed fromanger towards me, and he may recognize me and talk to me when freed byyou",
     commentaryHindi:"जिस प्रकार मेरे पिता गौतम मेरे प्रति शान्तसङ्कल्प—जिनका ऐसा सङ्कल्प शान्त हो गया है कि ‘न जाने मेरा पुत्र यमराजके पास जाकर क्या करेगा’, सुमना:—प्रसन्नचित्त और वीतमन्यु—क्रोधरहित हो जायँ और हे मृत्यो! आपके भेजे हुए—घरकी ओर जानेके लिये छोड़े हुए मुझसे विश्वस्त—लब्धस्मृति होकर अर्थात् ऐसा स्मरण करके कि यह मेरा वही पुत्र मेरे पास लौट आया है, सम्भाषण करें। यह अपने पिताकी प्रसन्नतारूप प्रयोजन ही मैं अपने तीन वरोंमेंसे पहला वर माँगता हूँ॥ १० ॥",
     commentaryEnglish:"If you want to grant boons, then, mrt}'o, O Death; (I pray so) vatha, asmy father gautamah, Gautama; st'at, may become; Santa-.sarhkalpah --onewhose mind is freed, with regard to me, from the anxiety, 'How may my sonbehave after reaching Death'; sumanah, calm of mind; and also vitamanvuh,free from anger; ma abhi, towards me; moreover, he abhivadet, may talk to;ma, me; tvatprasrstam, freed by you-sent towards home; pratitah, getting hismemory revived, i. e. recognizing (me) thus: 'That very son of mine iscome't ; Irayanam, of the three boons; vrne, I ask for; prathamam, as thefirst boon; etas, this one-that has this purpose, viz the satisfaction of myfather.Death said:",
     
  },
  {
     id:11,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"11",
     shlok:{
        line1:" यथा पुरस्ताद्भविता प्रतीत औद्दालकिरारुणिर्मत्प्रसृष्ट:। \n सुखंरात्री: शयिता वीतमन्यु- स्त्वां ददृशिवान्मृत्युमुखात्प्रमुक्तम्॥ ११ ॥",
        
     },
     translationHindi:"मुझसे प्रेरित होकर अरुणपुत्र उद्दालक तुझे पूर्ववत् पहचान लेगा। और शेष रात्रियोंमें सुखपूर्वक सोवेगा, क्योंकि तुझे मृत्युके मुखसे छूटकर आया हुआ देखेगा॥ ११ ॥ ",
     translationEnglish:"Having recognized (you), Auddalaki Aruni will be (possessed ofaffection) just as he had before. Seeing you freed from the jaws of Death, hewill get over his anger and will, with my permission, sleep happily formany a night.",
     commentaryHindi:"मृत्युमुखान्मृत्युगोचरात् प्रमुक्तं सन्तम्॥ ११ ॥ तेरे पिताकी बुद्धि जिस प्रकार पहले तेरे प्रति स्नेहयुक्ता थी उसी प्रकार वह औद्दालकि अब भी प्रीतियुक्त होकर तेरे प्रति विश्वस्त हो जायगा। यहाँ उद्दालकको ही ‘औद्दालकि’ कहा है तथा अरुणका पुत्र होनेसे वह आरुणि है। अथवा यह भी हो सकता है कि वह द्व्यामुष्यायण* हो। मत्प्रसृष्ट: अर्थात् मुझसे आज्ञप्त होकर वह शेष रात्रियोंमें भी सुखपूर्वक यानी प्रसन्न चित्तसे शयन करेगा तथा [यह सोचकर] वीतमन्यु—क्रोधहीन हो जायगा कि तुझ पुत्रको मृत्युके मुखसे अर्थात् मृत्युके अधिकारसे मुक्त हुआ देखा है॥ ११ ॥",
     commentaryEnglish:"Yathd, as -the kind of affectionate feeling that your father had towardsyou: purastut. before: your father audddlakih, Auddalaki ; pratitah, havingrecognized (you) ; bhavitd, will become -possessed of affection, in that verysame way. Uddalaka and Auddalaki refer to the same (person). And he isArunih, the son of Aruna; or he bears two family names.1 Matprasrstah,being permitted by me; (your father) sayitd, will sleep; during ratrih,nightsother (future) nights, too; sukham, happily-with a composed mind;and he will become vitanianvuh free from anger-as well; tvdm dadrsivdn,having seen you-his son, mrtvumukhat pramuktam, as having been freedfrom the jaws-from the grasp-of Death. \n Naciketa said:",
     
  },
  {
     id:12,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"12",
     shlok:{
        line1:"स्वर्गे लोके न भयं किंचनास्ति न तत्र त्वं न जरया बिभेति। उभे तीर्त्वाशनायापिपासे शोकातिगो मोदते स्वर्गलोके॥ १२ ॥ ",
        
     },
     translationHindi:"हे मृत्युदेव! स्वर्गलोकमें कुछ भी भय नहीं है। वहाँ आपका भी वश नहीं चलता। वहाँ कोर्इ वृद्धावस्थासे भी नहीं डरता। स्वर्गलोकमें पुरुष भूख-प्यास—दोनोंको पार करके शोकसे ऊपर उठकर आनन्दित होता है॥ १२ ॥ ",
     translationEnglish:"In heaven there is no fear-- you are not there, (and) nobody is struckwith fear because of old age. Having transcended both hunger and thirst,and crossed over sorrow, one rejoices in the heavenly world.",
     commentaryHindi:"स्वर्गलोकमें रोगादिके कारण होनेवाला भय तनिक भी नहीं है। हे मृत्यो! वहाँ आपकी भी सहसा दाल नहीं गलती। अत: इस लोकके समान वहाँ वृद्धावस्थासे युक्त होकर कोर्इ पुरुष आपसे कहीं नहीं डरता। बल्कि पुरुष भूख-प्यास दोनोंको पार करके, जो शोकको अतिक्रमण कर जाय ऐसा शोकातीत होकर मानसिक दु:खसे छुटकारा पाकर उस दिव्य स्वर्गलोकमें आनन्दित होता है॥ १२ ॥",
     commentaryEnglish:"Svarge loke, in the heavenly world; bhayam kimcana na asti, there is nofear whatsoever-fear arising from disease etc.; and tvam, you, 0 Death; natatra, are not there-you do not exert your might there all of a sudden; so,unlike what happens in this world, there jaraya, because of old age; nabibheti, nobody shudders-at you. Moreover, ubhe asanaya- pipase tirtva,having transcended both hunger and thirst; and sokatigah, having crossedover sorrowbeing free from mental unhappiness; (one) modate, rejoices;svargaloke, in the divine heavenly world.",
     
  },
  {
     id:13,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"13",
     shlok:{
        line1:"स त्वमग्निंस्वग्र्यमध्येषि मृत्यो प्रब्रूहि त्वंश्रद्दधानाय मह्यम्। \n  स्वर्गलोका अमृतत्वं भजन्त एतद्द्वितीयेन वृणे वरेण॥ १३ ॥ ",
        
     },
     translationHindi:"हे मृत्यो! आप स्वर्गके साधनभूत अग्निको जानते हैं, सो मुझ श्रद्धालुके प्रति उसका वर्णन कीजिये, [जिसके द्वारा] स्वर्गको प्राप्त हुए पुरुष अमृतत्व प्राप्त करते हैं। दूसरे वरसे मैं यही माँगता हूँ॥ १३ ॥ ",
     translationEnglish:" O Death, such as you are, you know that Fire which leads to heaven.Of that you tell me who am full of faith. The dwellers of heaven getimmortality. This I ask for through the second boon.",
     commentaryHindi:"हे मृत्यो! क्योंकि आप ऐसे गुणवाले स्वर्गलोककी प्राप्तिके साधनभूत अग्निको स्मरण रखते यानी जानते हैं, अत: मुझ स्वर्गार्थी श्रद्धालुके प्रति उसका वर्णन कीजिये; जिस अग्निका चयन करनेसे स्वर्गप्राप्त पुरुष अर्थात् स्वर्ग ही जिनका लोक है ऐसे यजमानगण अमृतत्व—अमरता अर्थात्देवभावको प्राप्त हो जाते हैं। इस अग्निविज्ञानको मैं दूसरे वरद्वारा माँगता हूँ॥ १३ ॥",
     commentaryEnglish:"Mrtyo, O Death; since sah tram, you, such as you are; adhyesi, remember,i.e. know; svargyam agnim, the Fire that is the means for the attainment ofheaven-heaven that is possessed of the qualities aforesaid; (therefore) tvam,you; prabruhi, speak; mahyam sraddadh5nay1a, to me who am full of faith,and who pray for heaven-(tell me of that Fire) by worshipping which;svarga-lokah, the dwellers of heaven, those who have got heaven as theirplace of attainment, the sacrificers: bhajante, get; amrtatvam, immortality,divinity. That fact which is etat, this knowledge of Fire; vrne, I seek for;dvitiyena varena, through the second boon.This is the promise of Death:",
     
  },
  {
     id:14,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"14",
     shlok:{
        line1:"प्र ते ब्रवीमि तदु मे निबोध स्वग्र्यमग्निं नचिकेत: प्रजानन्। \n अनन्तलोकाप्तिमथो प्रतिष्ठां विद्धि त्वमेतं निहितं गुहायाम्॥ १४ ॥ ",
        
     },
     translationHindi:" हे नचिकेत:! उस स्वर्गप्रद अग्निको अच्छी तरह जाननेवाला मैं तेरे प्रति उसका उपदेश करता हूँ। तू उसे मुझसे अच्छी तरह समझ ले। इसे तू अनन्तलोकको प्राप्ति करानेवाला, उसका आधार और बुद्धिरूपी गुहामें स्थित जान॥ १४ ॥",
     translationEnglish:" O Naciketa, being well aware of the Fire that is conducive to heaven,I shall tell you of it. That very thing you understand, with attention, frommy words. That Fire which is the means for the attainment of heaven andwhich is the support of the world, know it to be established in the intellect(of the enlightened ones).",
     commentaryHindi:"हे नचिकेत:! जिसके लिये तुमने प्रार्थना की थी उस स्वग्र्य—स्वर्गप्राप्तिमें हितावह अर्थात् स्वर्गके साधनरूप अग्निको तू एकाग्रचित्त होकर मेरे वचनसे अच्छी तरह समझ ले उसे सम्यक् प्रकारसे जाननेवाला—उसका विशेषज्ञ मैं तेरे प्रति उसका वर्णन करता हूँ। ‘मैं कहता हूँ’ ‘तू उसे समझ ले’ ये वाक्य शिष्यके बुद्धिको समाहित करनेके लिये हैं। अब उस अग्निकी स्तुति करते हैं। जो अनन्त लोकाप्ति अर्थात् स्वर्गलोकरूप फलकी प्राप्तिका साधन तथा विराड्रूपसे जगत्की प्रतिष्ठा—आश्रय है, मेरे द्वारा कहे हुए उस इस अग्निको तू गुहामें अर्थात् बुद्धिमान् पुरुषोंकी बुद्धिमें स्थित जान॥ १४ ॥",
     commentaryEnglish:"Naciketah, O Naciketa; te, to you; pra-bravimi, I shall say -what wasprayed for by you. Me, from me, from my words: nibodha, understand withattention; tat u, that very thing: viz svargyam agnim, the Fire that isconducive to heaven-that is the means for the attainment of heaven; which Ishall tell you, prajanan, being well aware of (it) this is the idea. Theexpressions, 'I shall tell you' and `understand with attention' are meant forfixing the attention of the disciple (on the subject). Now he praises the Fire:That (Fire) which is anantalokaptim, the attainment of infinite world-that is,the means for the attainment of the result, viz heaven; atho, and also;pratistham, the support--of the universe in the form of Viratt (CosmicPerson). Etam, this, this Fire which is being spoken of by me; viddhi, youknow; (as) nihitam guhayam, located in the hidden place- i.e. placed in theintellect of men of knowledge.These are words of the Upanisad itself:",
     
  },
  {
     id:15,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"15",
     shlok:{
        line1:"लोकादिमग्निं तमुवाच तस्मै या इष्टका यावतीर्वा यथा वा। \n स चापि तत्प्रत्यवदद्यथोक्त- मथास्य मृत्यु: पुनरेवाह तुष्ट:॥ १५ ॥",
        
     },
     translationHindi:" तब यमराजने लोकोंके आदिकारणभूत उस अग्निका तथा उसके चयन करनेमें जैसी और जितनी ईंटें होती हैं, एवं जिस प्रकार उसका चयन किया जाता है उन सबका नचिकेताके प्रति वर्णन कर दिया। और उस नचिकेताने भी जैसा उससे कहा गया था वह सब सुना दिया। इससे प्रसन्न होकर मृत्यु फिर बोला॥ १५ ॥",
     translationEnglish:"Death told him of the Fire that is the source of the world, the classand number of bricks, as also the manner of arranging for the fire. And he(Naci keta), too, repeated verbatim, with understanding, all these as theywere spoken. Then Death, being satisfied with this, said again:",
     commentaryHindi:"नचिकेताने जिसके लिये प्रार्थना की थी और जिसका प्रकरण चल रहा है प्रथम शरीरी होनेके कारण लोकोंके आदिभूत उस अग्निका यमने नचिकेताके प्रति वर्णन कर दिया। तथा स्वरूपत: जिस प्रकारकी और संख्यामें जितनी ईंटोंका चयन करना चाहिये एवं यथा यानी जिस तरह अग्निका चयन किया जाता है वह सब भी कह दिया। तथा उस नचिकेताने भी, जिस प्रकार उसे मृत्युने बताया था वह सब समझकर ज्यों-का-त्यों सुना दिया। तब उसके प्रत्युच्चारणसे प्रसन्न हो मृत्युने इन तीन वरके अतिरिक्त और भी वर देनेकी इच्छासे उससे फिर कहा॥ १५ ॥",
     commentaryEnglish:"Tasmai, to him, to Naciketa; Death uvaca, spoke of, tam lokadim agnim,that Fire-that is being dealt with, and that was prayed for by Naciketa - theFire which (as Virat) preceded the world-since it was the first embodiedbeing. Moreover. rah istakah, the class of bricks, that are to be collected (forthe sacrificial altar): raratih ra. how many (the bricks are to be) in number;y,atha va, or how - how the fire is to be arranged' --all these he said, this isthe significance. Sal, ca api, and he, Naciketa, too; pratravadat, repeatedverbatim, with understanding; tat, all that, vathoktam, just as Death hadspoken. Atha. then; tussah, being satisfied. by his repition; mrtvuh, Death;punah eva aha, said over again-desiring to offer another boon besides thethree.",
     
  },
  {
     id:16,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"16",
     shlok:{
        line1:"तमब्रवीत्प्रीयमाणो महात्मा वरं तवेहाद्य ददामि भूय:। \n तवैव नाम्ना भवितायमग्नि: सृङ्कां चेमामनेकरूपां गृहाण॥ १६ ॥",
        
     },
     translationHindi:"महात्मा यमने प्रसन्न होकर उससे कहा—‘अब मैं तुझे एक वर और भी देता हूँ। यह अग्नि तेरे ही नामसे प्रसिद्ध होगा और तू इस अनेक रूपवाली मालाको ग्रहण कर॥ १६ ",
     translationEnglish:"Feeling delighted, that high-souled one said to him, Out of favourtowards you, I now grant again another boon. This fire will be known byyour name indeed. And accept this multiformed necklace as well.",
     commentaryHindi:"अपने शिष्यकी योग्यताको देखकर प्रसन्न हुए—प्रीतिका अनुभव करते हुए महात्मा—अक्षुद्रबुद्धि यमने नचिकेतासे कहा—अब मैं प्रसन्नताके कारण तुझे फिर भी यह चौथा वर और देता हूँ। मेरे द्वारा कहा हुआ यह अग्नि तुझ नचिकेताके ही नामसे प्रसिद्ध होगा तथा तू यह शब्द करनेवाली रत्नमयी, अनेकरूपा विचित्रवर्णा माला भी ग्रहण—स्वीकार कर। अथवा सृङ्का यानी कर्ममयी अनिन्दिता गति ग्रहण कर। तात्पर्य यह है कि इसके सिवा अनेक फलका कारण होनेसे तू मुझसे कर्मविज्ञानको और भी स्वीकार कर॥ १६ ॥",
     commentaryEnglish:"How did he say? Priyamanah, being delightedfeeling highly pleased atthe fitness of the disciple; mahatma, the high-souled one, one who was notnarrow-minded; tam, to him, to Naciketa; abravit, said: `Ilia, here, out offavour; Lava, towards you; a fourth boon,' adt'a, now, dadami, I offer;hhurah, again. Ayam agnih, this fire -the fire that is being spoken of by me;bhavita, will become -famous; Lava eva namna, by your name indeed. Ca,moreover; grhana, accept; imam, this; srnkam, necklace; (which is)anekarupam, multiformed and variegated---re- sounding, set with jewels,and of various hues. Or srnkam (may mean) the course-that consists of ritesand is not ignoble; grhana, you accept.' The idea is this: `You accept anadditional knowledge about (variegated) karma---(multiformed) because itleads to various results.' \n He (Yama) praises the karma itself again:",
     
  },
  {
     id:17,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"17",
     shlok:{
        line1:"त्रिणाचिकेतस्त्रिभिरेत्य सन्धिं त्रिकर्मकृत्तरति जन्ममृत्यू। \n ब्रह्मजज्ञं देवमीड्यं विदित्वा निचाय्येमां शान्तिमत्यन्तमेति॥ १७ ॥",
        
     },
     translationHindi:"त्रिणाचिकेत अग्निका तीन बार चयन करनेवाला मनुष्य [माता, पिता और आचार्य—इन] तीनोंसे सम्बन्धको प्राप्त होकर जन्म और मृत्युको पार कर जाता है। तथा ब्रह्मसे उत्पन्न हुए, ज्ञानवान् और स्तुतियोग्य देवको जानकर और उसे अनुभव कर इस अत्यन्त शान्तिको प्राप्त हो जाता है॥ १७ ॥ ",
     translationEnglish:"`One who, getting connection with the three, piles up the Naciketafire thrice, and undertakes three kinds of work, crosses over death. Gettingknowledge of that omniscient One who is born of Brahma and is thepraiseworthy Deity, and realizing Him, he attains this peace fully",
     commentaryHindi:"जिसने तीन बार नाचिकेत अग्निका चयन किया है उसे त्रिणाचिकेत कहते हैं। अथवा उसका ज्ञान अध्ययन और अनुष्ठान करनेवाला ही त्रिणाचिकेत है। वह त्रिणाचिकेत माता, पिता और आचार्य—इन तीनोंसे सन्धि—सन्धान यानी सम्बन्धको प्राप्त होकर अर्थात् यथाविधि माता आदिकी शिक्षाको प्राप्त कर; क्योंकि एक दूसरी श्रुतिसे उनकी शिक्षा ही धर्मज्ञानकी प्रामाणिकतामें हेतु मानी गयी है; जैसा कि—“माता-पिता एवं आचार्यसे शिक्षित पुरुष कहे” इत्यादि श्रुतिसे जाना जाता है। अथवा वेद, स्मृति और शिष्ट पुरुषोंसे या प्रत्यक्ष, अनुमान और आगमसे [सम्बन्ध प्राप्त करके] यज्ञ, अध्ययन और दान—इन तीन कर्मोंको करनेवाला पुरुष जन्म और मृत्युको तर जाता है—उन्हें पार कर लेता है, क्योंकि उन (वेदादि अथवा प्रत्यक्षादि प्रमाणों)-से स्पष्ट ही शुद्धि होती देखी है। तथा ‘ब्रह्मजज्ञ’ ब्रह्मज—ब्रह्मा यानी हिरण्यगर्भसे उत्पन्न हुआ ब्रह्मज कहलाता है; इस प्रकार जो ब्रह्मज है और ज्ञ (ज्ञाता) भी है उसे ब्रह्मजज्ञ कहते हैं। वह सर्वज्ञ है। उस देवको—जो द्योतन आदिके कारण देव कहलाता है, और ज्ञानादि गुणवान् होनेसे ईड्य—स्तुतियोग्य है उसे शास्त्रसे जानकर और ‘निचाय्य’ अर्थात् आत्मभावसे देखकर अपनी बुद्धिसे प्रत्यक्ष होनेवाली इस आत्यन्तिक शान्ति—उपरतिको प्राप्त हो जाता है। अर्थात् ज्ञान और कर्मके समुच्चयका अनुष्ठान करनेसे वैराज पदको प्राप्त कर लेता है॥ १७ ॥",
     commentaryEnglish:"Sandhim etya, getting connection; tribhih, with the three-with mother,father, and teacher, i.e. getting his instruction from mother etc., properlyforthat is known as a source of valid knowledge from another Vedic text: Asone who has a mother, father. and teacher should say' etc. (Br. IV. i. 2). Or(tribhih may mean) through the Vedas, the Smrtis, and the good people; orthrough direct perception, inference, and the scriptures; for it is a matter ofexperience that clarity' follows from them. Trinaciketah, one who has piledup the Naciketa fire thrice; or*one who is possessed of its knowledge,studies it, and performs it; and trikarmakrt, one who undertakes three kindsof karma-sacrifice, study (of the Vedas), and charity; tarati, crosses over;janmamrtyu, birth and death. Moreover, viditva, knowing-from scriptures;brahmajajnam : one that is born from Brahma, i.e. Hiranyagarbha, isbrahmaja (Virat); and one who is brahmaja and jna, illumined, isbrahmajajna - for He (i.e. Virat) is omniscient; (knowing) that devam,Deity, who is so called because of His effulgence (which is the derivativemeaning), i.e. One who is possessed of such attributes as knowledge;",
     
  },
  {
     id:18,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"18",
     shlok:{
        line1:"त्रिणाचिकेतस्त्रयमेतद्विदित्वा य एवं विद्वाँश्चिनुते नाचिकेतम्। \n स मृत्युपाशान्पुरत: प्रणोद्य शोकातिगो मोदते स्वर्गलोके॥ १८ ॥",
        
     },
     translationHindi:"जो त्रिणाचिकेत विद्वान् अग्निके इस त्रयको [यानी कौन ईंटें हों, कितनी संख्यामें हों और किस प्रकार अग्निचयन किया जाय—इसको] जानकर नाचिकेत अग्निका चयन करता है वह देहपातसे पूर्व ही मृत्युके बन्धनोंको तोड़कर शोकसे पार हो स्वर्गलोकमें आनन्दित होता है॥ १८ ॥ ",
     translationEnglish:"One who performs the Naciketa sacrifice thrice after having knownthese three (factors), and he who having known thus, accomplishes theNaciketa sacrifice, casts off the snares of Death even earlier, and crossingover sorrow rejoices in heaven.",
     commentaryHindi:"जो त्रिणाचिकेत अग्निके पूर्वोक्त त्रयको जानकर अर्थात् जो ईंटें होनी चाहिये, जितनी होनी चाहिये तथा जिस प्रकार अग्निचयन करना चाहिये—इन तीनों बातोंको समझकर उस अग्निको आत्मस्वरूपसे जाननेवाला जो विद्वान् अग्नि—क्रतुका चयन करता—साधन करता है वह अधर्म, अज्ञान और रागद्वेषादिरूप मृत्युके बन्धनोंको पुरत:—अग्रत: अर्थात् देहपातसे पूर्व ही अपनोदन—त्याग करके शोकसे पार हुआ अर्थात् मानसिक दु:खोंसे मुक्त हुआ स्वर्गमें यानी वैराजलोकमें विराडात्मस्वरूपकी प्राप्ति होनेसे आनन्दित होता है॥ १८ ॥",
     commentaryEnglish:"Viditvd, after knowing; etat travam, these threedescribed earlier, 'theclass and number of bricks, as also the manner of arranging for the fire' (1.i. 15); he who becomes trinnciketah. a performer of the Naciketa sacrificethrice; and vah, who; exam vidvan, having known the Fire (Vira-t) thus-asidentified with oneself; cinute, accomplishes; naciketam, the Naciketa fire -performs the sacrifice called Naciketa[ ; sah, he; pranodva, casting of:mrtvuparan, the snares of Death- consisting in vice, ignorance, desire,hatred, etc.. puratall, even earlier -- i. e. before death; .okatigah, crossingover sorrow, i.e. freed from mental sorrow; inodate, rejoices; svargaloke, inheaven, in the world of Virat, by becoming identified with Him.",
     
  },
  {
     id:19,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"19",
     shlok:{
        line1:"एष तेऽग्निर्नचिकेत: स्वर्ग्यो यमवृणीथा द्वितीयेन वरेण। \n एतमग्निं तवैव प्रवक्ष्यन्ति जनास- स्तृतीयं वरं नचिकेतो वृणीष्व॥ १९ ॥",
        
     },
     translationHindi:"हे नचिकेत:! तूने द्वितीय वरसे जिसे वरण किया था वह यह स्वर्गका साधनभूत अग्नि तुझे बतला दिया। लोग इस अग्निको तेरा ही कहेंगे। हे नचिकेत:! तू तीसरा वर और माँग ले॥ १९ ॥ ",
     translationEnglish:"O Naciketa, this is for you the boon about the Fire that leads toheaven, for which you prayed through the second boon. People will speakof this Fire as yours indeed. O Naciketa, ask for the third boon.'",
     commentaryHindi:"हे नचिकेत:! अपने दूसरे वरसे तूने जिस अग्निका वरण किया था— जिसके लिये तूने प्रार्थना की थी वह स्वर्गप्राप्तिका साधनभूत यह अग्निविज्ञानरूप वर मैंने तुझे दे दिया। इस प्रकार उपर्युक्त अग्निविज्ञानका उपसंहार कहा गया। यही नहीं, लोग इस अग्निको तेरे ही नामसे पुकारेंगे।यह तुझसे प्रसन्न हुए मैंने तुझे चौथा वर दिया था। हे नचिकेत:! अब तू तीसरा वर और माँग ले, क्योंकि उसे बिना दिये मैं ऋणी ही हूँ—ऐसा इसका अभिप्राय है॥ १९ ॥",
     commentaryEnglish:"Naciketah, O Naciketa; te, to you; esah, this is; svargrah agnih, the Firethe boon about the Fire that leads to heaven; yam, which-which Fire as aboon; avrnithah, you prayed for; dvitTi'ena varena, through the secondboon. That boon about the Fire is granted to you. This is only a conclusionof what was said earlier. Moreover, janasah (is the same as januh), people;pravaksyanti, will speak of; etam agnim, this Fire; Lava eva, as yours-byyour name-indeed. This is the fourth boon that I have given out of mysatisfaction. Naciketah, 0 Naciketa; vrnisva, ask for; trtiyam varam, thethird boon. The idea is this: 'Unless that is given, I shall remain indebted.' \n This much only, as indicated by the two boons, and not the trueknowledge of the reality, called the Self, is attainable through the earliermantras and brahmanas (of the Vedas) which are concerned with injunctionand prohibition. Hence, for the elimination of the natural ignorance, whichis the seed of mundane existence, which consists in superimposing activity,agentship, and enjoyment on the Self, and which has for its contents thoseobjects of prohibition and injunction (the subject matter of the scriptures), itis necessary to speak of the knowledge of the unity of the Self and Brahman-which knowledge is opposed to this ignorance, is devoid of any tinge ofsuperimposition (on the Self) of activity, agentship, and enjoyment, and hasfor its object absolute emancipation. Therefore the subsequent text is begun.Through the story is being elaborated the fact as to how in the absence ofthe knowledge of the Self, which is the subject matter of the third boon,there cannot be any contentment even after getting the second boon. Sinceone who has desisted from the impermanent ends and means that arecomprised in the abovementioned rites becomes qualified for the knowledgeof the Self, therefore, with a view to decrying those ends and means,Naciketa is being tempted through the presentation of sons etc. Having beentold, 'O Naciketa, you ask for the third boon', Naciketa sai",
     
  },
  {
     id:20,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"20",
     shlok:{
        line1:"येयं प्रेते विचिकित्सा मनुष्ये- ऽस्तीत्येके नायमस्तीति चैके। \n  एतद्विद्यामनुशिष्टस्त्वयाहं वराणामेष वरस्तृतीय:॥ २० ॥",
        
     },
     translationHindi:"मरे हुए मनुष्यके विषयमें जो यह सन्देह है कि कोर्इ तो कहते हैं ‘रहता है’ और कोर्इ कहते हैं ‘नहीं रहता’ आपसे शिक्षित हुआ मैं इसे जान सकूँ। मेरे वरोंमें यह तीसरा वर है॥ २० ॥ ",
     translationEnglish:"This doubt that arises, consequent on the death of a man -somesaying, It exists', and others saying It does not exist'-I would know this,under your instruction. Of all the boons, this one is the third boon",
     commentaryHindi:" विधि-प्रतिषेध ही जिसके प्रयोजन हैं ऐसे उपर्युक्त मन्त्रब्राह्मणद्वारा इन दो वरोंसे सूचित इतनी ही वस्तु ज्ञातव्य है। आत्मतत्त्वविषयक यथार्थ ज्ञान इसका विषय नहीं है। अब, जो विधि-प्रतिषेधका विषय है, आत्माम क्रिया, कारक और फलका अध्यारोप करना ही जिसका लक्षण है तथा जो संसारका बीजस्वरूप है उस स्वाभाविक अज्ञानकी निवृत्तिके लिये उससे विपरीत ब्रह्मात्मैक्य विज्ञान कहना है, जो कि क्रिया, कारक और फलके अध्यारोपरूप लक्षणसे शून्य और आत्यन्तिक नि:श्रेयसरूपप्रयोजनवाला है; इसीके लिये आगेका ग्रन्थ आरम्भ किया जाता है। इसी बातको आख्यायिकाद्वारा विस्तृत करते हैं कि तीसरे वरसे प्राप्त होनेवाले आत्मज्ञानके बिना द्वितीय वरकी प्राप्तिसे भी अकृतार्थता ही है। क्योंकि आत्मज्ञानमें उसी पुरुषका अधिकार है जो पूर्वोक्त कर्मविषयक साध्य-साधन लक्षण एवं अनित्य फलोंसे विरक्त हो गया हो। इसलिये उनकी निन्दाके लिये पुत्रादिके उपन्याससे नचिकेताको प्रलोभित किया जाता है। ‘हे नचिकेत:! तुम तीसरा वर माँग लो’ इस प्रकार कहे जानेपर नचिकेता बोला— \n मरे हुए मनुष्यके विषयमें जो इस प्रकारका सन्देह है कि कोर्इ लोग तो ऐसा कहते हैं कि शरीर, इन्द्रिय, मन और बुद्धिसे अतिरिक्त देहान्तरसे सम्बन्ध रखनेवाला आत्मा रहता है और किन्हींका कथन है कि ऐसा कोर्इ आत्मा नहीं रहता; अत: इसके विषयमें हमें प्रत्यक्ष अथवा अनुमानसे कोर्इ निश्चित ज्ञान नहीं होता और परम पुरुषार्थ इस विज्ञानके ही अधीन है। इसलिये आपसे शिक्षित अर्थात् विज्ञापित होकर मैं इसे भली प्रकार जान सकूँ। यही मेरे वरोंमेंसे बचा हुआ तीसरा वर है॥ २० ॥",
     commentaryEnglish:"Yd imam vicikitsa, this doubt, that arises; prete manusve, when a mandies; eke, some (say); asti iti, (It), the Self, which is distinct from the body,senses, mind, and intellect, and which gets connected with a fresh body (inthe next life), exists; ca eke, and others (say); avam, this one, a Self of thiskind; na asti, does not exist. Hence It is a thing whose knowledge can beacquired by us neither through direct perception nor through inference. Andyet the supreme human goal is dependent on a clear knowledge of It. Therefore, tvaya anusistah, being instructed by you, aham, I ; etas vidyam, wouldknow this. Varanam, of all the boons; esah, this one; varah, boon; is trtitvah,the third -the remaining one. \n With a view to testing whether this one (i.e. Naciketa) is absolutely fit ornot for the knowledge of the Self, which (knowledge) is the means for thehighest consummation, Death says:",
     
  },
  {
     id:21,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"21",
     shlok:{
        line1:"देवैरत्रापि विचिकित्सितं पुरा न हि सुज्ञेयमणुरेष धर्म:। \n अन्यं वरं नचिकेतो वृणीष्व मा मोपरोत्सीरति मा सृजैनम्॥ २१ ॥",
        
     },
     translationHindi:"पूर्वकालमें इस विषयमें देवताओंको भी सन्देह हुआ था, क्योंकि यह सूक्ष्मधर्म सुगमतासे जाननेयोग्य नहीं है। हे नचिकेत:! तू दूसरा वर माँग ले, मुझे न रोक। तू मेरे लिये यह वर छोड़ दे॥ २१ ॥ ",
     translationEnglish:"With regard to this, even the gods entertained doubts in days of yore;for being subtle, this substance (the Self) is not truly comprehended. O Naciketa, ask for some other boon; do not press me; give up this (boon) thatis demanded of me.",
     commentaryHindi:"इस आत्मतत्त्वके विषयमें पहले—पूर्वकालमें देवताओंने भी विचिकित्सा—संशय किया था। साधारण पुरुषोंके लिये यह तत्त्व सुने जानेपर भी सुज्ञेय—अच्छी तरह जानने योग्य नहीं है, क्योंकि यह ‘आत्मा’ नामवाला धर्म बड़ा ही अणु—सूक्ष्म है। अत: हे नचिकेत:! कोर्इ दूसरा निश्चित फल देनेवाला वर माँग ले। जैसे धनी ऋणीको दबाता है उसी प्रकार तू मुझे न रोक। इस वरको तू मेरे लिये छोड़ दे॥ २१ ॥",
     commentaryEnglish:"Pura, in days of yore; atra, with regard to this thing; vicikitsitam, doubtwas entertained; derail, api, even by gods; hi, since; esah dharmah, thisprinciple -called the Self; na suvijnevam, is not trulyl comprehensible-tocommon people, even though heard by them; It being anuh, subtle. Hencenaciketah, O Naciketa; vrnisva, you ask for; anyam varam, some other boon- whose result is not subject to doubt. Ma up- arotsih, do not press; ma, me -as a creditor does a debtor-ma, being the same as mam (me); atisrja, giveup; enam, this boon; that is directed towards ma, me (that is to say,demanded of me). \n Being spoken to thus, Naciketa said:",
     
  },
  {
     id:22,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"22",
     shlok:{
        line1:"देवैरत्रापि विचिकित्सितं किल त्वं च मृत्यो यन्न सुज्ञेयमात्थ। वक्ता चास्य त्वादृगन्यो न लभ्यो नान्यो वरस्तुल्य एतस्य कश्चित्॥ २२ ॥",
        
     },
     translationHindi:"[नचिकेता बोला—] हे मृत्यो! इस विषयमें निश्चय ही देवताओंको भी सन्देह हुआ था तथा इसे आप भी सुगमतासे जानने योग्य नहीं बतलाते। [इसीसे वह मुझे और भी अधिक अभीष्ट है] तथा इस धर्मका वक्ता भी आपके समान अन्य कोर्इ नहीं मिल सकता और न इसके समान कोर्इ दूसरा वर ही है॥ २२ ॥ ",
     translationEnglish:"Even the gods entertained doubt with regard to this thing; and O Death, since you too say that It is not truly comprehended and since anyother instructor like you, of this thing, is not to be had, (therefore) there isno other boon comparable to this one.",
     commentaryHindi:"यह बात हमने अभी आपहीसे सुनी है कि इस विषयमें देवताओंने भी सन्देह किया था। और हे मृत्यो! आप भी इस आत्मतत्त्वको सुगमतासे जानने योग्य नहीं बतलाते। अत: पण्डितोंसे अज्ञातव्य होनेके कारण इस धर्मका कथन करनेवाला आपके समान कोर्इ और पण्डित ढूँढ़नेसे भी नहीं मिल सकता। और यह वर भी नि:श्रेयसकी प्राप्तिका कारण है। अत: इसके समान और कोर्इ भी वर नहीं है, क्योंकि और सभी वर अनित्य फलयुक्त हैं—यह इसका अभिप्राय है॥ २२ ॥",
     commentaryEnglish:"Atra, with regard to this thing; doubt was entertained even by the gods'-this has been heard by us from yourself. Ca, and, mrtvo, O Death: vat, since:tram, you; attha, say; that the reality of the Self, na sujneyam, is not trulycomprehended: therefore, this thing being unknowable even to the learned;vakta ca asva, an instructor of this principle: anvah, anyone else-who is alearned man, tvudrk, like you; na labh vah, N not to be had -even bysearching. But this boon is the means for the attainment of the highest goal.Hence na anyah varah, there is no other boon; kah cit, whatsoever; which is etasya tulyah, comparable to this one-since all the other bear impermanentfruits; this is the purport. \n Although told thus, still Death says by way of tempting:",
     
  },
  {
     id:23,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"23",
     shlok:{
        line1:"शतायुष: पुत्रपौत्रान्वृणीष्वबहून्पशून्हस्तिहिरण्यमश्वान्। \n भूमेर्महदायतनं वृणीष्व स्वयं च जीव शरदो यावदिच्छसि॥ २३ ॥",
        
     },
     translationHindi:"हे नचिकेत:! तू सौ वर्षकी आयुवाले बेटे-पोते, बहुत-से पशु, हाथी, सुवर्ण और घोड़े माँग ले, विशाल भूमण्डल भी माँग ले तथा स्वयं भी जितने वर्ष इच्छा हो जीवित रह॥ २३ ॥ ",
     translationEnglish:"Ask for sons and grandsons that will be centenarians. Ask for manyanimals, elephants, and gold, and horses, and a vast expanse of the earth.And you yourself live for as many years as you like.",
     commentaryHindi:"जिनकी सौ वर्षकी आयु हो ऐसे शतायु पुत्र और पौत्र माँग ले। तथा गौ आदि बहुत-से पशु, हाथी और सुवर्ण तथा घोड़े और पृथिवीका महान् विस्तृत आयतन—आश्रय—मण्डल अर्थात् राज्य माँग ले। परन्तु यदि स्वयं अल्पायु हो तो ये सब व्यर्थ ही हैं—इसलिये कहते हैं—तू स्वयं भी जितना जीना चाहे उतने वर्ष जीवित रह; अर्थात् शरीर यानी समग्र इन्द्रियकलापको धारण कर॥ २३ ॥",
     commentaryEnglish:"Vrnisva, you ask for; putra-pautran, sons and grandsons; who aresatayusah, gifted with a hundred years of life. Moreover, bahun, many;pasun, animals, such as cows etc.; hasti-hiranyam, elephants and gold; andasvan, horses. Besides, vrnisva, ask for; mahat ayatanam, a vast expanse,habitat, region, a kingdom; bhumeh, of the earth. Furthermore, all this isuseless if one is short-lived. Therefore he says: ca, and; svayam, youyourself; jiva, live, hold to your body with all the senses unimpaired; for asmany ..aradah, years; yavat icchasi, as you wishto live.",
     
  },
  {
     id:24,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"24",
     shlok:{
        line1:"एतत्तुल्यं यदि मन्यसे वरं वृणीष्व वित्तं चिरजीविकां च। \n महाभूमौ नचिकेतस्त्वमेधि कामानां त्वा कामभाजं करोमि॥ २४ ॥",
        
     },
     translationHindi:"इसीके समान यदि तू कोर्इ और वर समझता हो तो उसे, अथवा धन और चिरस्थायिनी जीविका माँग ले। हे नचिकेत:! इस विस्तृत भूमिमें तू वृद्धिको प्राप्त हो। मैं तुझे कामनाओंको इच्छानुसार भोगनेवाला किये देता हूँ॥ २४ ॥ ",
     translationEnglish:"If you think some other boon to be equal to this, ask for that. Ask forwealth and long life. O Naciketa, you become (a ruler) over a vast region. Imake you fit for the enjoyment of (all) delectable things.",
     commentaryHindi:"इस उपर्युक्त वरके समान यदि तू कोर्इ और वर समझता हो तो उसे भी माँग ले। यही नहीं, धन अर्थात् प्रचुर सुवर्ण और रत्न आदि तथा उस धनके साथ चिरस्थायिनी जीविका भी माँग ले। अधिक क्या, हे नचिकेत:! इस विस्तृत भूमिमें तू राजा होकर वृद्धिको प्राप्त हो। और तो क्या, मैं तुझे दैवी और मानुषी सभी कामनाओंका कामभागी अर्थात् इच्छानुसार भोगनेवाला किये देता हूँ, क्योंकि मैं सत्य-संकल्प देवता हूँ॥ २४ ॥ ",
     commentaryEnglish:"Yadi, if; manvase, you think, some other varam, boon; etat-tulvam, equalto this-as it has been presented; even that boon, vrnisva, you ask for.Moreover, (you ask for) vittam, wealth -plenty of gold, jewels, etc.; ca cirajvikam, and long life-i. e. you ask for a long life together with wealth. Inbrief, tvam, you, Naciketa; edhi, become a king; mahabhumau, over a vastregion. Besides, karomi, I make; tva, you; kamabhajam, partaker of theenjoyment--fit for enjoyment; kamanam, of enjoyable things--divine as wellas human, for I am a deity whose will never fails.",
     
  },
  {
     id:25,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"25",
     shlok:{
        line1:"ये ये कामा दुर्लभा मर्त्यलोके सर्वान्कामाँश्छन्दत: प्रार्थयस्व। \n  इमा रामा: सरथा: सतूर्या न हीदृशा लभ्यनीया मनुष्यै:।  \n आभिर्मत्प्रत्ताभि: परिचारयस्व नचिकेतो मरणं मानुप्राक्षी:॥ २५ ॥",
        
     },
     translationHindi:"मनुष्यलोकमें जो-जो भोग दुर्लभ हैं उन सब भोगोंको तू स्वच्छन्दतापूर्वक माँग ले। यहाँ रथ और बाजोंके सहित ये रमणियाँ हैं। ऐसी स्त्रियाँ मनुष्योंको प्राप्त होने योग्य नहीं होतीं। मेरे द्वारा दी हुर्इ इन कामिनियोंसे तू अपनी सेवा करा। परन्तु हे नचिकेत:! तू मरणसम्बन्धी प्रश्न मत पूछ॥ २५ ॥ ",
     translationEnglish:"Whatever things there be that are desirable but difficult to get -- prayfor all those cherished things according to your choice. Here are thesewomen with chariots and musical instrumentssuch are surely not to be hadby mortals. With these, who are offered by me, you get yourself served. O Naciketa, do not inquire about death.",
     commentaryHindi:"इस मर्त्यलोकमें जो-जो कामनाएँ—प्रार्थनीय वस्तुएँ दुर्लभ हैं उन सबको छन्दत:—इच्छानुसार माँग ले। इसके सिवा ये रामा—जो पुरुषोंके साथ रमण करती हैं उन्हें ‘रामा’ कहते हैं, ऐसी ये दिव्य अप्सराएँ सरथा—रथोंके सहित और सतूर्या—तूर्यों (बाजों)-के सहित मौजूद हैं। हम-जैसे देवताओंकी कृपाके बिना ये अर्थात् ऐसी स्त्रियाँ मरणधर्मा मनुष्योंको प्राप्त होने योग्य नहीं हैं। मेरे द्वारा दी हुर्इ इन परिचारिकाओंसे तू अपनी परिचर्या अर्थात् पादप्रक्षालनादि सेवा करा; किन्तु हे नचिकेत:! मरण अर्थात् मरनेके पश्चात् जीव रहता है या नहीं—ऐसा कौएके दाँतोंकी परीक्षाके समान मरणसम्बन्धी प्रश्न मत पूछ, तुझे ऐसा प्रश्न करना उचित नहीं है॥ २५ ॥",
     commentaryEnglish:"Ye ye, all things; that are kamah, desirable; and durlabadh, difficult toget; martyaloke, in the human world; sarvdn kaman, all those desirablethings; prdrthayasva, ask for; chandatah, according to your choice.Moreover, imdh, here are; the celestial ny▶nphs-the ramah (lit. women)who are so called because they delight (ramayanti) men; (and who arethere) sarathdh, with chariots; and saturt0h, with musical instruments.ldrsdh, such (women), no hi lambhanivdh, are surely not to be had-withoutthe favour of persons like us; manusyaih, by mortals. Abhih, by these--bythese female attendants; mat- prattabhih, who are offered by me;paricdrayasva, get yourself served-i.e. get your own service performed,such as washing of feet etc. O Naciketa, maranam, of death-as to theproblem of death, as to whether anything exists after the fall of the body ornot, which question is (useless) like the examination of the teeth of a crow;ma anuprdksih, do not inquire -it does not befit you to ask thus. \n Although tempted thus, Naciketa who, like a vast lake, was not to beperturbed, said:",
     
  },
  {
     id:26,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"26",
     shlok:{
        line1:"श्वोभावा मर्त्यस्य यदन्तकैत- त्सर्वेन्द्रियाणां जरयन्ति तेज:। \n अपि सर्वं जीवितमल्पमेव तवैव वाहास्तव नृत्यगीते॥ २६ ॥",
        
     },
     translationHindi:"हे यमराज! ये भोग ‘कल रहेंगे या नहीं’—इस प्रकारके हैं और सम्पूर्ण इन्द्रियोंके तेजको जीर्ण कर देते हैं। यह सारा जीवन भी बहुत थोड़ा ही है। आपके वाहन और नाच-गान आपके ही पास रहें [हमें उनकी आवश्यकता नहीं है]॥ २६ ॥ ",
     translationEnglish:"O Death, ephemeral are these, and they waste away the vigour of allthe organs that a man has. All life, without exception, is short indeed. Letthe vehicles be yours alone; let the dances and songs be yours.",
     commentaryHindi:"आपने जिन भोगोंका उल्लेख किया है वे तो श्वोभाव हैं—जिनका भाव अर्थात् अस्तित्व ‘कल रहेंगे या नहीं’ इस प्रकार सन्देहयुक्त हो उन्हें श्वोभाव कहते हैं। बल्कि हे अन्तक—हे मृत्यो! ये अप्सरा आदि भोग तो मनुष्यका जो यह सम्पूर्ण इन्द्रियोंका तेज है उसे जीर्ण—क्षीण ही कर देते हैं, अत: धर्म, वीर्य, प्रज्ञा, तेज और यश आदिका क्षय करनेवाले होनेसे ये अनर्थके ही कारण हैं। और आप जो दीर्घजीवन देना चाहते हैं उसके विषयमें भी सुनिये। ब्रह्माका जो सम्पूर्ण जीवन—आयु है वह भी अल्प ही है, फिर हम-जैसोंके दीर्घजीवनकी तो बात ही क्या है? अत: आपके रथादि वाहन और नाच-गान आपके ही रहें॥ २६ ॥",
     commentaryEnglish:"Antaka, O Death; the enjoyable things enumerated by you are svobhavah,ephemeral-whose existence (bhavah) invariably is subject to the doubt as towhether they will exist or not tomorrow (.svah); moreover, all thoseenjoyable things such as nymphs etc. jaravanti, waste away; tejah, thevigour; rat, that (that there is); sarvendriyanam, of all the organs; martyasra,of a human being; so these enjoyable things are an evil since they wearaway virtue, strength, intelligence, energy, fame, etc. As for long life whichyou wish to offer, about that too listen: Sarvam api jivitam, all life-even thatof Brahma; is alpam eva, short indeed; what need be said of the longevity ofthose like us? Therefore, let vahah, the vehicles etc; and so also nrtyagite,the dances and songs; remain tava eva, yours alone.",
     
  },
  {
     id:27,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"27",
     shlok:{
        line1:"न वित्तेन तर्पणीयो मनुष्यो लप्स्यामहे वित्तमद्राक्ष्म चेत्त्वा। \n जीविष्यामो यावदीशिष्यसि त्वं वरस्तु मे वरणीय: स एव॥ २७ ॥",
        
     },
     translationHindi:"मनुष्यको धनसे तृप्त नहीं किया जा सकता। अब यदि आपको देख लिया है तो धन तो हम पा ही लेंगे। जबतक आप शासन करेंगे हम जीवित रहेंगे; किन्तु हमारा प्रार्थनीय वर तो वही है॥ २७ ॥ ",
     translationEnglish:"Man is not to be satisfied with wealth. Now that we have met you, weshall get wealth. We shall live as long as you will rule. But the boon that isworth praying for by me is that alone.",
     commentaryHindi:"मनुष्यको अधिक धनसे भी तृप्त नहीं किया जा सकता है। लोकमें धनकी प्राप्ति किसीको भी तृप्त करनेवाली नहीं देखी गयी। अब, जब कि हम आपको देख चुके हैं तो, यदि हमें धनकी लालसा होगी तो, उसे हम प्राप्त कर ही लेंगे। इसी प्रकार दीर्घजीवन भी पा लेंगे। जबतक आप याम्यपदपर शासन करेंगे तबतक हम भी जीवित रहेंगे। भला कोर्इ भी मनुष्य आपके सम्पर्कमें आकर अल्पायु या अल्पधन कैसे रह सकता है? किन्तु वर तो वह जो आत्मविज्ञान है वही हमारा वरणीय है॥ २७ ॥",
     commentaryEnglish:"Besides, manusyah, man; na tarpaniyah, is not to be satisfied; vittena,with wealth-in abundance, for the acquisition of wealth is not seen in thisworld to satisfy anyone. Should there arise in us any hankering for wealth,lapsyamahe, we shall acquire, i.e. we shall get; vittam, wealth; cetadraksma, now that we have seen; tva, you - tva being the same as tvam,you. Thus, too, we shall get longevity. fvisyamah, we shall live; yavat, aslong as; tvam, you; isis.vasi (should rather be Fsisyase), will rule -lord itover in the position of Death. How can a man, after having met you,become poor or short-lived? Varah to me varaniyah sah eva, but the boonthat is worth praying for by me is that alone -that which is the knowledge ofthe Self.",
     
  },
  {
     id:28,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"28",
     shlok:{
        line1:"अजीर्यताममृतानामुपेत्य जीर्यन्मर्त्य: क्वध:स्थ: प्रजानन्। \n अभिध्यायन्वर्णरतिप्रमोदा- नतिदीर्घे जीविते को रमेत॥ २८ ॥",
        
     },
     translationHindi:"कभी जराग्रस्त न होनेवाले अमरोंके समीप पहुँचकर नीचे पृथ्वीपर रहनेवाला कौन जराग्रस्त विवेकी मनुष्य होगा जो केवल शारीरिक वर्णके रागसे प्राप्त होनेवाले [स्त्रीसम्भोग आदि] सुखोंको [अस्थिररूपमें] देखता हुआ भी अति दीर्घ जीवनमें सुख मानेगा?॥ २८ ॥ ",
     translationEnglish:"Having reached the proximity of the undecaying immortals, whatdecaying mortal who dwells on this lower region, the earth, but knows ofhigher goals, will take delight in a long life while conscious of theworthlessness of music, disport, and the joy thereof?",
     commentaryHindi:"वयोहानिरूप जीर्णताको प्राप्त न होनेवाले अमरों—देवताओंकी सन्निधिमें पहुँचकर उनसे प्राप्त होने योग्य अपने अन्य उत्कृष्ट प्रयोजनको—प्राप्तव्यको जानता—प्राप्त करता हुआ भी जो स्वयं जीर्ण होनेवाला और मरणधर्मा है अर्थात् जरामरणशील है ऐसा क्वध:स्थ—‘कु’ पृथिवीको कहते हैं, वह अन्तरिक्षादि लोकोंकी अपेक्षा अध:—नीची [होनेके कारण ‘क्वध:’ कहलाती] है, उसपर जो स्थित होता है वह क्वध:स्थ कहा जाता है; ऐसा होकर भी—इस प्रकार अविवेकियोंद्वारा प्रार्थनीय पुत्र, धन और सुवर्ण आदि अस्थिर पदार्थोंको कैसे माँगेगा? कहीं ‘क्वध:स्थ:’ के स्थानमें ‘क्व तदास्थ:’ ऐसा भी पाठ है। इस पक्षमें अक्षरोंकी योजना इस प्रकार करनी चाहिये। उन पुत्रादिमें जिसकी आस्था—आस्थिति अर्थात् तत्परतापूर्वक प्रवृत्ति है वह ‘तदास्थ’ है। जो उनसे भी उत्कृष्टतर और दुष्प्राप्य पुरुषार्थको पानेका इच्छुक है वह पुरुष उनमें आस्था करनेवाला कैसे होगा? अर्थात् उन्हें असार समझनेवाला कोर्इ भी पुरुष उनका अर्थी (इच्छुक) नहीं हो सकता, क्योंकि सभी लोग उत्तरोत्तर उन्नत ही होना चाहते हैं; अत: मैं पुत्र-धन आदि लोभोंसे प्रलोभित नहीं किया जा सकता। तथा वर्णके रागसे प्राप्त होनेवाले अप्सरा आदि सुखोंकी अस्थिररूपमें भावना करता हुआ; उन्हें यथावत् (मिथ्यारूपसे) समझता हुआ कौन विवेकी पुरुष अति दीर्घ जीवनमें प्रेम करेगा?॥ २८ ॥",
     commentaryEnglish:"achieve a human goal higher than that, difficult though it is to secure,become tadasthah, occupied with them? The idea is that nobody who knowstheir worthlessness will hanker after them. For every person verily wants togo higher and higher up. Therefore, I am not to be seduced by the lure ofsons, wealth, etc. Moreover, kah, who, what sensible man; ahhidhvavan,while deliberating on-ascertaining the real nature of, varnaratipramodan,music, disport, and delight - derivable from celestial nymphs etc.; astransitory, rameta, will delight; atidirghe jivite, in a long life? achieve a human goal higher than that, difficult though it is to secure,become tadasthah, occupied with them? The idea is that nobody who knowstheir worthlessness will hanker after them. For every person verily wants togo higher and higher up. Therefore, I am not to be seduced by the lure ofsons, wealth, etc. Moreover, kah, who, what sensible man; ahhidhvavan,while deliberating on-ascertaining the real nature of, varnaratipramodan,music, disport, and delight - derivable from celestial nymphs etc.; astransitory, rameta, will delight; atidirghe jivite, in a long life?",
     
  },
  {
     id:29,
     Part:" 1",
     Valli:" 1",
     mantraNumber:"29",
     shlok:{
        line1:"यस्मिन्निदं विचिकित्सन्ति मृत्यो यत्साम्पराये महति ब्रूहि नस्तत्। \n योऽयं वरो गूढमनुप्रविष्टो नान्यं तस्मान्नचिकेता वृणीते॥ २९ ॥",
        
     },
     translationHindi:"हे मृत्यो! जिस (परलोकगत जीव)-के सम्बन्धमें लोग ‘है या नहीं है’ ऐसा सन्देह करते हैं तथा जो महान् परलोकके विषयमें [निश्चित विज्ञान] है वह हमसे कहिये। यह जो गहनतामें अनुप्रविष्ट हुआ वर है इससे अन्य और कोर्इ वर नचिकेता नहीं माँगता॥ २९ ॥ ",
     translationEnglish:"O Death, tell us of that thing about which people entertain doubt inthe context of the next world and whose knowledge leads to a great result.Apart from this boon, which relates to the inscrutable thing, Naciketa doesnot pray for any other.",
     commentaryHindi:"हे मृत्यो! जिस परलोकगत जीवके विषयमें ऐसा सन्देह करते हैं कि मरनेके अनन्तर ‘रहता है या नहीं रहता’ उस महान्—महान् प्रयोजनके निमित्तभूत साम्पराय—परलोकके सम्बन्धमें उस आत्माका जो निश्चित विज्ञान है वह हमसे कहिये। अधिक क्या, यह जो आत्मविषयक प्रकृत वर है वह बड़ा ही गूढ—गहन है और दुर्विवेचनीयताको प्राप्त हो रहा है। उस वरसे अन्य अविवेकी पुरुषोंद्वारा प्रार्थनीय कोर्इ और अनित्य वस्तुविषयक वर नचिकेता मनसे भी नहीं माँगता—यह श्रुतिका वचन है॥ २९ ॥",
     commentaryEnglish:"Hence give up alluring me with transitory things, and bruhi nah, tell us;tat, that, which is prayed for by me; yasmin, about which-which Self;people idam vicikitsanti, entertain this doubt -as to whether it exists or not;sdmpardye, in the context of the next world-when a man dies; yat, whichwhich conclusive knowledge of the Self; mahati, is calculated to lead to agreat result. To be brief, ayam varah, this boon-that relates to the Self underdiscussion; yah, which (boon); gudham anupravistah, has entered into aninaccessible recess-has become very inscrutable; apart from that boonanyam, any other-any boon with regard to the non-Self that can be soughtafter by senseless people; naciketd na vrnTie, Naciketa does not pray foreven in thought. This (last sentence) is a statement by the Upanisad itself(and is not an utterance of Naciketa).",
     
  },
  {
     id:30,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"1",
     shlok:{
        line1:"अन्यच्छ्रेयोऽन्यदुतैव प्रेय- स्ते उभे नानार्थे पुरुषंसिनीत:। \n तयो: श्रेय आददानस्य साधु भवति हीयतेऽर्थाद्य उ प्रेयो वृणीते॥ १ ॥",
        
     },
     translationHindi:"श्रेय (विद्या) और है तथा प्रेय (अविद्या) और ही है। वे दोनों विभिन्न प्रयोजनवाले होते हुए ही पुरुषको बाँधते हैं। उन दोनोंमेंसे श्रेयको ग्रहण करनेवालेका शुभ होता है और जो प्रेयको वरण करता है वह पुरुषार्थसे पतित हो जाता है॥ १ ॥ ",
     translationEnglish:"The preferable is different indeed; and so, indeed, is the pleasurable different. These two, serving divergent purposes, (as they do), bind men. Good befalls him who accepts the preferable among these two. He who selects the pleasurable, falls from the true end.",
     commentaryHindi:"श्रेय अर्थात् नि:श्रेयस अन्यत्—भिन्न ही है तथा प्रेय यानी प्रियतर वस्तु भी अन्य ही है। वे श्रेय और प्रेय दोनों विभिन्न प्रयोजनवाले होनेपर भी अधिकारी यानी वर्णाश्रमादिविशिष्ट पुरुषका बन्धन कर देते हैं; अर्थात् सब लोग उन्हींके द्वारा अपने [विद्या-अविद्या-सम्बन्धी] कर्त्तव्यसे युक्त हो जाते हैं। अभ्युदयकी इच्छावाला पुरुष प्रेयसे और अमृतत्वका इच्छुक श्रेयसे प्रवृत्त होता है। अत: श्रेय और प्रेय इन दोनोंके प्रयोजनोंकी कर्त्तव्यताके कारण सब लोग उनसे बद्ध कहे जाते हैं। वे यद्यपि एक-एक पुरुषार्थसे सम्बन्ध रखनेवाले हैं तो भी विद्या और अविद्यारूप होनेके कारण परस्पर विरुद्ध हैं, अत: एकका परित्याग किये बिना एक पुरुषद्वारा उन दोनोंका साथ-साथ अनुष्ठान न हो सकनेके कारण उनमेंसे अविद्यारूप प्रेयको छोड़कर केवल श्रेयको ही स्वीकार करनेवालेका साधु—शुभ यानी कल्याण होता है। जो मूढ दूरदर्शी नहीं है वह इस अर्थ—पुरुषार्थ अर्थात् परमार्थसम्बन्धी नित्य प्रयोजनसे च्युत हो जाता है; वह कौन है? वही जो कि प्रेयको वरण करता है—यह इसका तात्पर्य है॥ १ ॥",
     commentaryEnglish:"Sreyah, the preferable, the supreme goal (freedom); anyat eva, (is) certainly different. Similarly, uta, too; preyah, the more pleasant; anyat eva, (is) different indeed. Te ubhe, both of them -the pleasurable and the preferable; nano arthe, serving divergent purposes - as they do; sinhtah, bind ; purusam, man - one who, as subject to caste, stage of life, etc., is competent (for either). All men are impelled by these two under an idea of personal duty; for according as one hankers after prosperity or immortality, one engages in the pleasurable or the preferable. Therefore, all men are said to be bound by these two through their sense of duty with regard to what leads to the pleasurable or the preferable. These two, though related severally to the (two) human goals', are opposed to each other, inasmuch as they are of the nature of knowledge and ignorance. Thus since these cannot be performed together by the same person, without discarding either of the two, therefore tayoh, of the two; adadanasya, to one who accepts; only sreyah, the preferable, by discarding the pleasurable, (the latter) being of the nature of ignorance; sadhu hhavati, well-being, good, comes (as a result). But he who is a short-sighted, the ignorant man, hiyate, gets alienated; arthat, from this objective, from the human goal, i.e. he falls from the eternal supreme purpose. Who is that man? Yah u, the one that; prevah vrnite, selects, i.e. takes hold of, the pleasurable. If both can be done by a man at will, why do people cling mostly to the pleasurable only? This is being answered:",
     
  },
  {
     id:31,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"2",
     shlok:{
        line1:"श्रेयश्च प्रेयश्च मनुष्यमेत- स्तौ सम्परीत्य विविनक्ति धीर:। \n श्रेयो हि धीरोऽभि प्रेयसो वृणीते प्रेयो मन्दो योगक्षेमाद्वृणीते॥ २ ॥",
        
     },
     translationHindi:"श्रेय और प्रेय [परस्पर मिले हुए-से होकर] मनुष्यके पास आते हैं। उन दोनोंको बुद्धिमान् पुरुष भली प्रकार विचारकर अलग-अलग करता है। विवेकी पुरुष प्रेयके सामने श्रेयको ही वरण करता है; किन्तु मूढ योग-क्षेमके निमित्तसे प्रेयको वरण करता है॥ २ ॥ ",
     translationEnglish:"The preferable and the pleasurable approach man. The man of intelligence, having considered them, separates the two. The intelligent one selects the electable in preference to the delectable; the nonintelligent one selects the delectable for the sake of growth and protection (of the body etc.).",
     commentaryHindi:"वे मनुष्यके अधीन हैं—यह बात ठीक है। तथापि वे श्रेय और प्रेय मन्दबुद्धि पुरुषोंके लिये साधन और फलदृष्टिसे जिनका पार्थक्य करना बहुत कठिन है ऐसे होकर परस्पर मिले हुएसे ही मनुष्य यानी इस जीवको प्राप्त होते हैं। अत: हंस जिस प्रकार जलसे दूध अलग कर लेता है उसी प्रकार धीर—बुद्धिमान् पुरुष उन श्रेय और प्रेय पदार्थोंका भली प्रकार परिगमन कर—मनसे उनकी आलोचना कर उनके गौरव और लाघवका विवेक यानी पृथक्करण करता है। इस प्रकार श्रेयका विवेचन कर वह प्रेयकी अपेक्षा अधिक अभीष्ट होनेके कारण श्रेयको ही ग्रहण करता है। परन्तु ऐसा करता कौन है? वही जो बुद्धिमान् है। इसके विपरीत जो मन्द—अल्प बुद्धि है, वह विवेकशक्तिका अभाव होनेके कारण, जो योग-क्षेमका ही कारण है अर्थात् जो शरीरादिकी वृद्धि और रक्षाका ही निमित्त है उस पशु-पुत्रादिरूप प्रेयको ही वरण करता है॥ २ ॥",
     commentaryEnglish:"True it is that they are subject to (human) option; still, since they are not easily distinguishable by men of poor intellect, either with regard to their means or with regard to their fruits, therefore, sreyasca preyasca, the preferable and the pleasurable; manus- vam etah (ci-itah), approach this man, as though they are intermixed. Therefore, just as a swan separates milk from water, similarly dhirah, a man of intelligence, samparitya, having surveyed fully, having considered mentally their importance and unimportance; vivinakti, separates; tau, those two, viz the preferable and the pleasurable things. And having distinguished, sreyah hi, the electable indeed; abhivrnite, (he) selects, because of its higher value; preyasah, in comparison with the delectable. Who is he (that perfers)? Dhirah, the intelligent man. As for the mandate, the man of poor intelligence; he, because of a lack of discrimination, yogaksemat, for the sake of yoga and ksema, i.e. for the growth and protection of the body etc.; vrnite, selects; preyah, the delectable, constituted by cattle, sons, etc.",
     
  },
  {
     id:32,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"3",
     shlok:{
        line1:"स त्वं प्रियान्प्रियरूपाँश्च कामा- नभिध्यायन्नचिकेतोऽत्यस्राक्षी:। \n नैताँसृङ्कां वित्तमयीमवाप्तो यस्यां मज्जन्ति बहवो मनुष्या:॥ ३ ॥",
        
     },
     translationHindi:" हे नचिकेत:! उस तूने पुत्र-वित्तादि प्रिय और अप्सरा आदि प्रियरूप भोगोंको, उनका असारत्व चिन्तन करके त्याग दिया है और जिसमें बहुत-से मनुष्य डूब जाते हैं, उस इस धनप्राया निन्दित गतिको तू प्राप्त नहीं हुआ॥ ३ ॥",
     translationEnglish:"O Naciketa ! you, such as you are, have discarded, after consideration, all the desirable things that are themselves delightful or are the producers of delight. You have not accepted this path of wealth in which many a man comes to grief.",
     commentaryHindi:"हे नचिकेत:! तेरी बुद्धिमत्ता धन्य है; जिस तूने कि मेरे द्वारा बारम्बार प्रलोभित किये जानेपर भी पुत्रादि प्रिय तथा अप्सरा आदि प्रियरूप भोगोंको, उनकी अनित्यता और असारता आदि दोषोंका विचार करके परित्याग कर दिया, और जिसमें मूढ पुरुष प्रवृत्त हुआ करते हैं उस वित्तमयी—धनप्राया निन्दित गतिको तू प्राप्त नहीं हुआ, जिस मार्गमें कि बहुत-से मूढ पुरुष डूब जाते अर्थात् दु:ख उठाते हैं॥ ३ ॥",
     commentaryEnglish:"Sah tvam, you, such as you are--though tempted by me again and again; abhidhyayan, having considered -the defects such as impermanence and insubstantiality of; kdman, desirable things; viz privan, dear ones, such as children etc.; ca, and; priyarupan, producers of delight, such as nymphs etc. I ; naciketah, O Naciketa; atyasrdksih, you have discarded. What an intelligence you have! Na avaptah, you have not accepted; etam, this; ugly srhkam, course; vittama- yim, abounding in wealth, which is resorted to by ignorant people; yasydm, in which course; bahavah, many; manusyah, men; majjanti, sink, come to grief. \n It has been said, `Good befalls him who accepts the preferable among these two. He who selects the pleasurable, falls from the true end.' (I.ii.l) Why is that so? Because:",
     
  },
  {
     id:33,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"4",
     shlok:{
        line1:"दूरमेते विपरीते विषूची अविद्या या च विद्येति ज्ञाता। \n विद्याभीप्सिनं नचिकेतसं मन्ये न त्वा कामा बहवोऽलोलुपन्त॥ ४ ॥",
        
     },
     translationHindi:"जो विद्या और अविद्यारूपसे जानी गयी हैं वे दोनों अत्यन्त विरुद्ध स्वभाववाली और विपरीत फल देनेवाली हैं। मैं तुझ नचिकेताको विद्याभिलाषी मानता हूँ, क्योंकि तुझे बहुत-से भोगोंने भी नहीं लुभाया॥ ४ ॥ ",
     translationEnglish:"That which is known as knowledge and that which is known as ignorance are widely contradictory, and they follow divergent courses. I consider Naciketa to be an aspirant for knowledge, (because) the enjoyable things, multifarious though they be, did not tempt you.",
     commentaryHindi:"उनमेंसे श्रेयको ग्रहण करनेवालेका शुभ होता है और जो प्रेयको वरण करता है वह स्वार्थसे पतित हो जाता है’ ऐसा जो ऊपर (इस वल्लीके प्रथम मन्त्रमें) कहा गया है, सो क्यों? [इसपर यमराज कहते हैं,] क्योंकि—ये दोनों प्रकाश और अन्धकारके समान विवेक और अविवेकरूप होनेसे ‘दूरम्’ अर्थात् महान् अन्तरके साथ विपरीत हैं—आपसमें एक-दूसरेसे व्यावृत्तरूप हैं। और विषूची अर्थात् नाना गतिवाले हैं यानी संसार और मोक्षके कारण होनेसे विभिन्न फलयुक्त हैं। वे कौन हैं—इसपर कहते हैं—‘जो कि पण्डितोंद्वारा प्रेयको विषय करनेवाली अविद्या तथा श्रेयोविषया विद्यारूपसे जानी गयी हैं। उनमें तुझ नचिकेताको मैं विद्याभिलाषी अर्थात् विद्यार्थी मानता हूँ। क्यों मानता हूँ? क्योंकि अविवेकियोंकी बुद्धिको प्रलोभित करनेवाले अप्सरा आदि बहुत-से भोग भी तुम्हें लुभा नहीं सके—उन्होंने तेरे हृदयमें अपने भोगकी इच्छा उत्पन्न करके तुझे श्रेयोमार्गसे विचलित नहीं किया। अत: मैं तुझे विद्यार्थी यानी श्रेयका पात्र समझता हूँ—यह इसका अभिप्राय है॥ ४ ॥",
     commentaryEnglish:"Ete, these two; are durum, widely, by a great distance; viparite, contradictory, mutually exclusive, like light and darkness, they being of the nature of discrimination and non-discrimination; visuci (i.e. visucvau), have divergent courses, i.e. they produce different results, being the causes of worldly existence and emancipation. This is the idea. Which are they? The answer is: Yd ca, that which; jnata, is fully ascertained, known by the learned; avidva iti, as ignorance-which has for its object the pleasurable; ya ca, and that which; (is known) vidya iti, as knowledge-which has for its object the preferable. Of these two, mange, I consider; you naciketasam, Naciketa; vidvabhipsinam, as desirous of knowledge. Why? Because, kamah, the enjoyable things, such as nymphs etc.-which distract the intellect of the unenlightened; although they are bahavah, many; they na alolupanta, did not tempt; tva, you-tva being the same as tvam; did not deflect you from the path of the preferable by arousing a desire for enjoying them. Therefore, I consider you to be craving for enlightenment, to be fit for the preferable-this is the idea.",
     
  },
  {
     id:34,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"5",
     shlok:{
        line1:"अविद्यायामन्तरे वर्तमाना: स्वयं धीरा: पण्डितम्मन्यमाना:। \n  दन्द्रम्यमाणा: परियन्ति मूढा अन्धेनैव नीयमाना यथान्धा:॥ ५ ॥",
        
     },
     translationHindi:"वे अविद्याके भीतर रहनेवाले, अपने-आप बड़े बुद्धिमान् बने हुए और अपनेको पण्डित माननेवाले मूढ पुरुष, अन्धेसे ही ले जाये जाते हुए अन्धेके समान अनेकों कुटिल गतियोंकी इच्छा करते हुए भटकते रहते हैं॥ ५ ॥ ",
     translationEnglish:"Living in the midst of ignorance and considering themselves intelligent and enlightened, the senseless people go round and round, following crooked courses, just like the blind led by the blind.",
     commentaryHindi:"वे घनीभूत अन्धकारके समान अविद्याके भीतर स्थित हो पुत्र-पशु आदि सैकड़ों तृष्णापाशोंसे बँधे हुए [व्यवहारमें लगे रहते हैं]। जिस प्रकार अन्धे यानी दृष्टिहीन पुरुषसे विषम मार्गमें ले जाये जाते हुए बहुत-से अन्धे महान् अनर्थको प्राप्त होते हैं उसी प्रकार ‘हम बड़े धीर यानी बुद्धिमान् हैं और पण्डित अर्थात् शास्त्र-कुशल हैं’ इस प्रकार अपनेको माननेवाले वे मूढ—अविवेकी पुरुष नाना प्रकारकी अत्यन्त कुटिल गतियोंकी इच्छा करते हुए जरा, मरण और रोगादि दु:खोंसे सब ओर भटकते रहते हैं॥ ५ ॥",
     commentaryEnglish:"But those who are fit for worldly existence, they, vartamanah, living; avidyayam antare, in the midst of ignorance-as though in the midst of thick darkness, being entangled in hundreds of fetters, forged by craving for sons, cattle, etc.; manvamanah, considering -- thinking of themselves; 'svayam, we ourselves are; dhTrah, intelligent; and panditah, versed in the scriptures'; those mudhah. senseless, non-discriminating people; parivanti, Jo round and round; dandramyamanah, by following' very much the various crooked courses, being afflicted by old age, death, disease, etc., just as many and/ O h, blind people; nTyamanah, being led; andhena eva, by the blind indeed, on an uneven road, come to great calamity. Because of this alone, because of ignorance, the means for the attainment of' the other world does not become revealed (to them):",
     
  },
  {
     id:35,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"6",
     shlok:{
        line1:"न साम्पराय: प्रतिभाति बालं प्रमाद्यन्तं वित्तमोहेन मूढम्। \n  अयं लोको नास्ति पर इति मानी पुन: पुनर्वशमापद्यते मे॥ ६ ॥ ",
        
     },
     translationHindi:"धनके मोहसे अन्धे हुए और प्रमाद करनेवाले उस मूर्खको परलोकका साधन नहीं सूझता। यह लोक है, परलोक नहीं है—ऐसा माननेवाला पुरुष बारम्बार मेरे वशको प्राप्त होता है॥ ६ ॥ ",
     translationEnglish:"The means for the attainment of the other world does not become revealed to the non-discriminating man who blunders, being befooled by the lure of wealth. One that constantly thinks that there is only this world, and none hereafter, comes under my sway again and again.",
     commentaryHindi:"उसे साम्पराय भासित नहीं होता। देहपातके अनन्तर जिसके प्रति गमन किया जाय उसे सम्पराय—परलोक कहते हैं। उसकी प्राप्ति ही जिसका प्रयोजन है वह साधनविशेष शास्त्रीय साम्पराय है। वह बाल अर्थात् अविवेकी पुरुषके प्रति प्रकाशित नहीं होता, अर्थात् वह उसके चित्तके सम्मुख उपस्थित नहीं होता। तथा जो प्रमाद करनेवाला है—जिसका चित्त पुत्र-पशु आदि प्रयोजनोंमें आसक्त है और जो धनके मोहसे अर्थात् धननिमित्तक अविवेकसे मूढ यानी अज्ञानसे आवृत है [उस मूढको परलोकका साधन नहीं सूझा करता]। ‘यह जो स्त्री और अन्न-पानादिविशिष्ट दृश्यमान लोक है बस यही है, इससे अन्य और कोर्इ [स्वर्गादि] लोक नहीं है’ जो पुरुष इस प्रकार माननेवाला है वह बारम्बार जन्म लेकर मुझ मृत्युकी अधीनताको प्राप्त होता है। अर्थात् वह जन्म-मरणादिरूप दु:खपरम्परापर ही आरूढ रहता है। यह लोक प्राय: इसी प्रकारका है॥ ६ ॥",
     commentaryEnglish:"Samparayah is the other world, attainable after the falling of the body (sampara); Samparayah is any particular scriptural means leading to the attainment of that other world. And this (means) na pratibhati, does not become revealed, i.e. does not become serviceable; balam, to a boy, to a non-discriminating man; (who is) pramadyantam, blundering whose mind clings to such needs as children, cattle, etc.; and so also who is mudham, confounded, being covered by darkness (of ignorance). vittamohena, because of the non-discrimination caused by wealth. 'A t•am lokah, there is only this world-that which is visible and abounds with women, food, drink, etc.; na parah asti, there is no other world, that is invisible' - iti mani, constantly thinking thus; (he) getting born, punah punah, again and again; apadvate, becomes subject to*; the vasam, control: rne, of me, who am Death; that is, he remains involved in a succession of grief in the form of birth, death, etc. Such is the world in general. But among thousands, it is only one like you who hankers after the preferable, and who becomes a knower of the Self. Because:",
     
  },
  {
     id:36,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"7",
     shlok:{
        line1:"श्रवणायापि बहुभिर्यो न लभ्य: शृण्वन्तोऽपि बहवो यं न विद्यु:। \n आश्चर्यो वक्ता कुशलोऽस्य लब्धा- श्चर्यो ज्ञाता कुशलानुशिष्ट:॥ ७ ॥",
        
     },
     translationHindi:"जो बहुतोंको तो सुननेके लिये भी प्राप्त होनेयोग्य नहीं है, जिसे बहुत-से सुनकर भी नहीं समझते उस आत्मतत्त्वका निरूपण करनेवाला भी आश्चर्यरूप है, उसको प्राप्त करनेवाला भी कोर्इ निपुण पुरुष ही होता है तथा कुशल आचार्यद्वारा उपदेश किया हुआ ज्ञाता भी आश्चर्यरूप है॥ ७ ॥ ",
     translationEnglish:"Of that (Self), which is not available for the mere hearing to many, (and) which many do not understand even while hearing, the expounder is wonderful and the receiver is wonderful; wonderful is he who knows under the instruction of an adept.",
     commentaryHindi:"जो आत्मा बहुतोंको तो सुननेके लिये भी नहीं मिलता तथा दूसरे बहुत-से अभागी अशुद्धचित्त पुरुष जिस आत्मतत्त्वको सुनकर भी नहीं जान पाते। यही नहीं, इसका वक्ता भी आश्चर्य अर्थात् अद्भुत-सा ही है—वह भी अनेकोंमें कोर्इ ही होता है। तथा सुनकर भी इस आत्माका लब्धा (ग्रहण करनेवाला) तो अनेकोंमें कोर्इ निपुण पुरुष ही होता है, क्योंकि जिसे [आत्मदर्शनमें] कुशल आचार्यने उपदेश किया हो ऐसा इसका ज्ञाता भी आश्चर्यरूप ही है॥ ७ ॥",
     commentaryEnglish:"Yah, that which-the Self that; na labhyah, is not attainable; bahubhih, by many; sravanava api, even for the sake of hearing; yam, which-which Self: bahavah, many (others); srnvantah api, even while hearing; na vidyuh (vidanti), do not know; the unfortunate whose minds have not been purified may not know. Moreover, even asya vakta, Its expounder; (is) ascaryah, wonderful -comparable to a wonder-a rare one, indeed, among many. Similarly, even after hearing of this Self, kusalah, one who is proficient - a rare one among many; becomes the labdha, attainer. For ascaryah jnata, a wonderful man - a rare soul-becomes a knower; kusa- lanusistah, being instructed by a proficient teacher. \n Why (so)? Because:",
     
  },
  {
     id:37,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"8",
     shlok:{
        line1:"न नरेणावरेण प्रोक्त एष सुविज्ञेयो बहुधा चिन्त्यमान:। \n अनन्यप्रोक्ते गतिरत्र नास्ति अणीयान्ह्यतर्क्यमणुप्रमाणात्॥ ८ ॥",
        
     },
     translationHindi:" कर्इ प्रकारसे कल्पना किया हुआ यह आत्मा नीच पुरुषद्वारा कहे जानेपर अच्छी तरह नहीं जाना जा सकता। अभेददर्शी आचार्यद्वारा उपदेश किये गये इस आत्मामें [अस्ति-नास्तिरूप] कोर्इ गति नहीं है, क्योंकि यह सूक्ष्म परिमाणवालोंसे भी सूक्ष्म और दुर्विज्ञेय है॥ ८ ॥",
     translationEnglish:"The Self is not certainly adequately known when spoken of by an inferior person; for It is thought of variously. When taught by one who has become identified with It, there is no further cogitation with regard to It. For It is beyond argumentation, being subtler even than the atomic quantity.",
     commentaryHindi:"यह आत्मा, जिसके विषयमें तुम मुझसे पूछ रहे हो, किसी अवर—हीन यानी साधारण बुद्धिवाले मनुष्यसे कहा जानेपर अच्छी तरह नहीं जाना जा सकता; क्योंकि यह वादियोंद्वारा अस्तिनास्ति, कर्ता-अकर्ता एवं शुद्ध-अशुद्ध—इस प्रकार अनेक तरहसे चिन्तन किया जाता है। तो फिर यह किस प्रकार अच्छी तरह जाना जाता है? इसपर कहते हैं—अनन्यप्रोक्त—अनन्य अर्थात् अपने प्रतिपाद्य ब्रह्मस्वरूपको प्राप्त हुए अपृथग्दर्शी आचार्यद्वारा कहे हुए इस आत्मामें अस्ति-नास्तिरूप गति यानी चिन्ता नहीं है, क्योंकि आत्मा सम्पूर्ण विकल्पोंकी गतिसे रहित है। अथवा अनन्यप्रोक्त—अपने स्वरूपभूत अनन्य आत्माका गुरुद्वारा उपदेश किये जानेपर अन्य ज्ञेय वस्तुका अभाव हो जानेके कारण उसमें कोर्इ गति यानी अन्य अवगति (ज्ञान) नहीं रहती; क्योंकि आत्माके एकत्वका जो विज्ञान है यही ज्ञानकी परा निष्ठा है। अत: ज्ञेय वस्तुका अभाव हो जानेके कारण फिर यहाँ कोर्इ और गति नहीं रहती। अथवा उस अनन्य अर्थात् स्वात्मभूत आत्मतत्त्वके उपदेश कर दिये जानेपर संसारकी गति नहीं रहती, क्योंकि उसके अनन्तर तुरन्त ही आत्मविज्ञानका फलरूप मोक्ष प्राप्त हो जाता है। अथवा जिसका आगे वर्णन किया जायगा उस ब्रह्मात्मभूत आचार्यद्वारा उपदेश किये हुए इस आत्मतत्त्वमें फिर अगति—अनवबोध अर्थात् अपरिज्ञान नहीं रहता। अर्थात् आचार्यके समान उस श्रोताको भी यह आत्मविषयक ज्ञान हो ही जाता है कि ‘वह (ब्रह्म) मैं हूँ’। इस प्रकार शास्त्रज्ञ आचार्यद्वारा अभिन्नरूपसे कहा हुआ आत्मा सुविज्ञेय होता है। नहीं तो, यह अणुप्रमाण वस्तुओंसे भी अणु हो जाता है;अपनी बुद्धिसे निकाले हुए केवल तर्कद्वारा इसका ज्ञान नहीं हो सकता। यदि कोर्इ पुरुष तर्क करके उस अणुपरिमाण आत्माको स्थापित भी करे तो दूसरा उससे भी अणु तथा तीसरा उससे भी अत्यन्त अणु स्थापित कर देगा, क्योंकि कुतर्ककी स्थिति कहीं भी नहीं है॥ ८ ॥",
     commentaryEnglish:"Esah, this-the Self about whom you ask me; (when) proktah, spoken of; avarena narena, by an inferior man, I. e. by a man of worldly understanding; na hi suvijneyah, is not certainly capable of being adequately understood; for It is bahudhd, variouslysuch as it exists', it does not exist', it is the doer', it is not the doer', it is pure', it is impure', etc.; cintyamdnah, deliberated on-by disputants. How, again, is It well understood? This is being said: The Self ananyaprokte, when spoken of by a non-different man, by the teacher who does not see duality, who has become identified with the Brahman that is to be revealed (by himl); atra, here, with regard to the Self; na asti, there does not remain; gatih, cogitation, of various kinds as to whether It exists or not; for from the Self is ruled out all thoughts involving doubt. \n Or-ananvaprokte, when the (supreme) Self, that is non-different from, and is, one's very Self, is adequately taught 1. na asti gatihthere is. no other comprehension2; atra, of this Self; because there is nothing else; to be known. For the realization of the unity of the Self is the culmination of all knowledge. Therefore, as there is no knowable, there remains nothing to be known here. \n Or-when the non-different Self is spoken of, na asti atra gatih, there remains no transmigration4; for emancipation, which is the result of that realization, follows immediately. \n Or -when the Self is spoken of by a teacher who has become identified with Brahman that he, speaks of, there is na agatih, no non-comprehension, nonrealization. To this hearer the realization about that Self does come as, 'I am that (Self)', just as it did in the case of the teacher. This is the idea. \n Thus is the Self well understood when It is taught to be non-different (from the taught) by a teacher who is well versed in the scriptures.5 Else the Self becomes aniydn, more subtle; even anupramanat, than an atomic thing. (For It is) atarkyam (should be atarkyah), cannot be argued out-cannot be known through mere reasoning called up through one's own (independent) intellects. For if the Self be regarded as an object of argumentation and postulated to be atomic in quantity, someone else may hold It to be subtler than that, while still another may hold It to be the subtlest. Thus there is no finality about sophistry.",
     
  },
  {
     id:38,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"9",
     shlok:{
        line1:"नैषा तर्केण मतिरापनेया प्रोक्तान्येनैव सुज्ञानाय प्रेष्ठ। \n यां त्वमाप: सत्यधृतिर्बतासि त्वादृङ्नो भूयान्नचिकेत: प्रष्टा॥ ९ ॥",
        
     },
     translationHindi:"हे प्रियतम! सम्यक् ज्ञानके लिये शुष्क तार्किकसे भिन्न शास्त्रज्ञ आचार्यद्वारा कही हुर्इ यह बुद्धि, जिसे कि तू प्राप्त हुआ है, तर्कद्वारा प्राप्त होने योग्य नहीं है। अहा! तू बड़ा ही सत्य धारणावाला है। हे नचिकेत:! हमें तेरे समान प्रश्न करनेवाला प्राप्त हो॥ ९ ॥ ",
     translationEnglish:"This wisdom that you have, O dearest one, which leads to sound knowledge when imparted only by someone else (other than the logician), is not to be attained through argumentation. You are, O compassionable one, endowed with true resolution. May our questioner be like you, O Naciketa.",
     commentaryHindi:"अत: अभेददर्शी आचार्यद्वारा उपदेश किये हुए आत्मामें उत्पन्न हुर्इ जो यह शास्त्रप्रतिपाद्य आत्मविषयक मति है वह तर्कसे अर्थात् अपनी बुद्धिके ऊहापोहमात्रसे प्राप्त होने योग्य नहीं है। अथवा [यह समझो कि] यह आत्मबुद्धि तर्कशक्तिसे अपनेतव्य यानी छोड़ी जाने योग्य नहीं है, क्योंकि तार्किक तो अध्यात्मशास्त्रसे अनभिज्ञ होता है, वह अपनी बुद्धिसे कल्पना किया हुआ चाहे जो कहता रहता है। अत: हे प्रेष्ठ—प्रियतम! यह जो शास्त्रजनित आत्मबुद्धि है वह तो तार्किकसे भिन्न किसी शास्त्रज्ञ आचार्यद्वारा उपदेश की जानेपर ही सम्यक् ज्ञानकी कारण होती है। अच्छा तो, तर्कसे प्राप्त न होने योग्य वह मति कौन-सी है? इसपर कहते हैं— जिस मतिको तूने मेरे वरप्रदानसे प्राप्त किया है। जिस तेरी धृति सत्य अर्थात् यथार्थ पदार्थको विषय करनेवाली है वह तू सत्यधृति है। ‘बत’ इस अव्ययसे अनुकम्पा करते हुए यमराज आगे कहे जानेवाले विज्ञानकी स्तुतिके लिये नचिकेतासे कहते हैं—‘हे नचिकेत:! हमें तेरे समान प्रश्न करनेवाला और भी पुत्र अथवा शिष्य मिले। परन्तु वह हो कैसा? जैसा कि तू प्रश्न करनेवाला है’॥ ९ ॥",
     commentaryEnglish:"Therefore esd, this-this wisdom about the Self, as presented by Vedas, that arises when the Self is taught by one who has become identified with It; na apaneyd, i.e. na prapaniya, is not to be attained; tarkena, through argumentation - called up merely by one's own intellect. Or (reading the word as a- apaneya, the expression na apaneya means), should not be eradicated, should not be destroyed. For, a logician who is not versed in the Vedas, talks of all sorts of things that can be called up by his own intellect. Therefore, prestha, O dearest one; this wisdom that originates from the Vedas, sujnana}'a (bhavati), leads to sound knowledge; when prokta, imparted; anyena eva, by a different person indeed-by a teacher who is versed in the Vedas and is different from the logician. What, again, is that belief which is beyond argumentation? This is being said: yam, that which-the wisdom that; team apah, you have attained, through the granting of the boon by me. Asi, you are; satyadhrtih, of true resolution-your resolves refer to real things. Death utters the word hata (a particle expressing compassion) out of compassion for Naciketa, thereby eulogizing the knowledge that is going to be imparted. Any other prasta, questioner-whether a son or a disciple; (that there may be) nah, to us; bhuyat, may he be; tvadrk, like you. Of what sort? The kind of questioner that you are; naciketah, O Naciketa. Being pleased, he said again:",
     
  },
  {
     id:39,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"10",
     shlok:{
        line1:"जानाम्यहं शेवधिरित्यनित्यं न ह्यध्रुवै: प्राप्यते हि ध्रुवं तत्। \n ततो मया नाचिकेतश्चितोऽग्नि- रनित्यैर्द्रव्यै: प्राप्तवानस्मि नित्यम्॥ १० ॥",
        
     },
     translationHindi:"मैं यह जानता हूँ कि कर्मफलरूप निधि अनित्य है, क्योंकि अनित्य साधनोंद्वारा वह नित्य [आत्मा] प्राप्त नहीं किया जा सकता। तब मेरे द्वारा नाचिकेत अग्निका चयन किया गया। उन अनित्य पदार्थोंसे ही मैं [आपेक्षिक] नित्य [याम्यपद]-को प्राप्त हुआ हूँ॥ १० ॥ ",
     translationEnglish:"(Since) I know that this treasure is imper manent-for that permanent entity cannot be attained through impermanent things-therefore, (knowingly) did I pile up the Naciketa fire with impermanent things, and have (thereby) attained (relative) permanence.",
     commentaryHindi:"जिसके लिये निधि (खजाने)-के समान प्रार्थना की जाती है वह कर्मफलरूप निधि ही ‘शेवधि’ है। यह अनित्य—सदा न रहनेवाली है—ऐसा मैं जानता हूँ। क्योंकि इन अनित्य यानी अस्थिर साधनोंसे वह परमात्मा नामक नित्य—स्थिर निधि प्राप्त नहीं की जा सकती। जो निधि अनित्यसुखस्वरूप है वही अनित्य पदार्थोंसे प्राप्त होती है।क्योंकि ऐसा है इसलिये मैंने यह जान-बूझकर भी कि ‘अनित्य साधनोंसे नित्यकी प्राप्ति नहीं होती’ नाचिकेत अग्निका चयन किया था; अर्थात् पशु आदि अनित्य पदार्थोंसे स्वर्ग-सुखके साधनस्वरूप उस अग्निका सम्पादन किया था। उसीसे मैं अधिकार-सम्पन्न होकर आपेक्षिक नित्य स्वर्ग नामक याम्यस्थानको प्राप्त हुआ हूँ॥ १० ॥",
     commentaryEnglish:"Aham janami, I know; iti, (this fact) that; sevadhih, the treasure - comprising the fruits of action, which are prayed for like a treasure; that (treasure) is anityam (rather anityah), impermanent. Hi, for; adhruvaih, through impermanent things; tat, that; dhruvam, permanent entity-which is the treasure called the supreme Self; na prapvate, cannot be attained. But that treasure alone, which consists of impermanent pleasure, is attained through impermanent things. Hi, since, this is so; tatah, therefore; maya, by me -knowing as I did, that the permanent cannot be attained through evanescent means; naci- ketah agnih, the fire called Naciketa; citah, was piled up, i.e. the sacrifice that is meant for the acquisition of heavenly bliss, was accomplished; anityaih dra- vyaih, with impermanent things-by animals etc. Having acquired the requisite merit thereby, prap- tavan asmi, I have achieved; nit yam, the permanent - the relatively permanent abode of Death, which is called heaven.",
     
  },
  {
     id:40,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"11",
     shlok:{
        line1:"कामस्याप्तिं जगत: प्रतिष्ठां क्रतोरनन्त्यमभयस्य पारम्। \n स्तोममहदुरुगायं प्रतिष्ठां दृष्ट्वा धृत्या धीरो नचिकेतोऽत्यस्राक्षी:॥ ११ ॥",
        
     },
     translationHindi:"हे नचिकेत:! तूने बुद्धिमान् होकर भोगोंकी समाप्ति (अवधि), जगत्की प्रतिष्ठा, यज्ञफलके अनन्तत्व, अभयकी मर्यादा, स्तुत्य और महती (अणिमादि ऐश्वर्ययुक्त) विस्तीर्ण गति तथा प्रतिष्ठाको देखकर भी उसे धैर्यपूर्वक त्याग दिया है॥ ११ ॥ ",
     translationEnglish:"O Naciketa, you, on becoming enlightened, have rejected (them all) by examining patiently the highest reach of desire, the support of the universe, the infinite' results of meditation, the other shore of fearlessness, the extensive course (of Hiranyagarbha) that is praiseworthy and great, as also (your own) state.",
     commentaryHindi:"किन्तु हे नचिकेत:! तुमने तो धीर—धृतिमान् होकर कामनाओंकी प्राप्ति—समाप्तिको, क्योंकि इस [हिरण्यगर्भ पद]-में ही सम्पूर्ण कामनाएँ समाप्त होती हैं, तथा सर्वात्मक होनेके कारण अध्यात्म, अधिभूत एवं अधिदैवरूप जगत्की प्रतिष्ठा यानी आश्रयको, यज्ञके अनन्त्य—आनन्त्य अर्थात् अनन्त फल हिरण्यगर्भ पदको, अभयके पार अर्थात् परा निष्ठाको और स्तोम—स्तुत्य तथा महत्—अणिमादि ऐश्वर्य आदिक अनेक गुणोंके संघातसे युक्त, इस प्रकार जो स्तोम है और महत् भी है ऐसे सर्वोत्कृष्ट होनेके कारण स्तोममहत् उरुगाय—विस्तीर्ण गतिको तथा प्रतिष्ठा—अपनी सर्वोत्तम स्थितिको देखकर भी उसे धैर्यपूर्वक त्याग दिया। अर्थात् एकमात्र परवस्तुकी ही इच्छा करते हुए इस सम्पूर्ण सांसारिक भोगसमूहका परित्याग कर दिया। अहो! तुम बड़े ही उत्कृष्ट गुणसम्पन्न हो!॥ ११ ॥",
     commentaryEnglish:"But you, drstva, having seen (examined); (Hiranyagarbha as) kdmasya dptim, the end of desire--that here indeed all desires end2 (vide Mu. III. ii. 2); having seen (Hiranyagarbha as) jagatah pratisthdm, the support-because of His all-pervasiveness - of the world comprising all that is personal, elemental, heavenly, etc.; (having seen) the anantyam, i.e. anantyam, infinitude; kratoh, of meditation; -the (relatively infinite) result (of meditation on Hiranyagarbha), which is the state of Hiranyagarbha; (having seen) pdram, the other shore, the utmost limit; abhavasya, of fearlessness; (having seen) the urug~ vam, course (of Hiranyagarbha) that is extensive-'; (and) which is stoma-mahat: that which is stoma, praiseworthy, and mahat, great-abounding in many attributes such as divine faculties of becoming subtle etc. - is stoma-mahat, because it is possessed of super-excellence; (and having seen) pratistham, existence-your own state, unsurpassable though it is; naciketah, O Naciketa; (having seen all these) dhrtva, with patience; and having become, dhirah, intelligent; atyasraksih. you have renounced-have given up all these worldly enjoyments (up to the state of Hiranyagarbha), being desirous only of the supreme One. O ! what an unsurpassable quality you are endowed with!",
     
  },
  {
     id:41,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"12",
     shlok:{
        line1:"तं दुर्दर्शं गूढमनुप्रविष्टं गुहाहितं गह्वरेष्ठं पुराणम्। \n अध्यात्मयोगाधिगमेन देवं मत्वा धीरो हर्षशोकौ जहाति॥ १२ ॥",
        
     },
     translationHindi:"उस कठिनतासे दीख पड़नेवाले, गूढ स्थानमें अनुप्रविष्ट, बुद्धिमें स्थित, गहन स्थानमें रहनेवाले, पुरातन देवको अध्यात्मयोगकी प्राप्तिद्वारा जानकर धीर (बुद्धिमान्) पुरुष हर्ष-शोकको त्याग देता है॥ १२ ॥",
     translationEnglish:"The intelligent man gives up happiness and sorrow by developing concentration of mind on the Self and thereby meditating on the old Deity who is inscrutable, lodged inaccessibly, located in the intellect, and seated in the midst of misery.",
     commentaryHindi:"अति सूक्ष्म होनेके कारण दुर्दर्श—जिसका कठिनतासे दर्शन हो सके उसे दुर्दर्श कहते हैं, गूढ अर्थात् गहन स्थानमें अनुप्रविष्ट यानी शब्दादि प्राकृत विषयविकाररूप विज्ञानसे छिपे हुए, गुहा—बुद्धिमें उपलब्ध होनेके कारण उसीमें स्थित तथा गह्वरेष्ठ—गह्वर—विषम यानी अनेक अनर्थोंसे संकुलित स्थानमें रहनेवाले [देवको जानकर धीर पुरुष हर्ष-शोकको त्याग देता है]। क्योंकि आत्मा इस प्रकार गूढ स्थानमें अनुप्रविष्ट और बुद्धिमें स्थित है इसलिये वह गह्वरेष्ठ है तथा गह्वरेष्ठ होनेके कारण ही दुर्दर्श है। उस पुराण यानी पुरातन देवको अध्यात्मयोगकी—चित्तको विषयोंसे हटाकर आत्मामें लगा देना अध्यात्मयोग है, उसकी प्राप्तिद्वारा जानकर धीर पुरुष अपने उत्कर्ष-अपकर्षका अभाव हो जानेके कारण हर्ष-शोकका परित्याग कर देता है॥ १२ ॥",
     commentaryEnglish:"Tam, Him - the Self that you want to know; which is durdarsam, hard to see, because of Its extreme subtleness; gudham anupravistam, lodged inaccessibly, i.e. hidden by knowledge that changes in accordance with worldly objects; guhahitam, located in the intellect- because It is perceived there; gahvares- tham, existing in the midst of misery-in the body and senses which are the sources of many miseries. Since It is thus lodged inaccessibly and located in the intellect, therefore, It is seated in the midst of misery. Hence It is hard to see. Matva, meditating on, that puranam, old (everlasting); devam, Deity- the Self; adhhatmavogadhigamena- concentration of the mind on the Self after withdrawing it from the outer objects is adhyatma-yoga--through the attainment of that; dhirah, the intelligent man; jahati, gives up; harsasokau, happiness and sorrow-since there is no excellence or deterioration for the Self.",
     
  },
  {
     id:42,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"13",
     shlok:{
        line1:"एतच्छ्रुत्वा संपरिगृह्य मर्त्य: प्रवृह्य धर्म्यमणुमेतमाप्य। \n स मोदते मोदनीयं हि लब्ध्वा विवृतं सद्म नचिकेतसं मन्ये॥ १३ ॥",
        
     },
     translationHindi:"मनुष्य इस आत्मतत्त्वको सुनकर और उसे भली प्रकार ग्रहणकर धर्मी आत्माको देहादि संघातसे पृथक् करके इस सूक्ष्म आत्माको पाकर तथा इस मोदनीयकी उपलब्धि कर अति आनन्दित हो जाता है। मैं [तुझ] नचिकेताको खुले हुए ब्रह्मभवनवाला समझता हूँ, [अर्थात् हे नचिकेत:! मेरे विचारसे तेरे लिये मोक्षका द्वार खुला हुआ है]॥ १३ ॥ ",
     translationEnglish:"After hearing this, grasping it fully, separating this righteous thing (from the body etc.), and attaining this subtle thing, that mortal rejoices, for he has obtained that which is the cause of delight. I consider that the mansion (of Brahman) is wide open to Naciketa.",
     commentaryHindi:"इस आत्मतत्त्वको, जिसका कि अब मैं वर्णन करूँगा, उसे सुनकर—आचार्यकी कृपासे भली प्रकार आत्मभावसे ग्रहण कर मरणधर्मा मनुष्य इस धर्म्य—धर्मविशिष्ट आत्माको शरीरादिसे उद्यमन करके यानी पृथक् करके तथा इस अणु अर्थात् सूक्ष्म और मोदनीय—हर्षयोग्य आत्माको उपलब्ध कर वह मरणशील विद्वान् आनन्दित हो जाता है। इस प्रकारके तुझ नचिकेताके प्रति मैं ब्रह्मभवनको खुले द्वारवाला अर्थात् अभिमुख हुआ मानता हूँ। अभिप्राय यह कि मैं तुझे मोक्षके योग्य समझता हूँ॥ १३ ॥",
     commentaryEnglish:"Moreover, a mortal who is subject to death, srutva, after hearing-through the favour of the teacher; etat, this reality of the Self that I shall speak of; samparigrhva, after grasping (It) fully- as one's own Self; pravrhya, after separating (from body etc.); this dharmyam, righteous' (thing, the Self); and apya, after attaining; etam anum, this subtle thing - the Self; sah martyah, that mortal-(who has become) the enlightened man; modate, rejoices; labdhva, having obtained; modaniyam, that which causes delight. Therefore, manye, I consider; that this sadma, mansion -the abode of Brahman, which is of this kind; vivrtam, is wide open to-has approached towards'; naciketasam, (you) Naciketa. The idea is: 'I consider you fit for emancipation.' \n (Naciketa said): if I am fit and you, too, sir, are pleased with me, then",
     
  },
  {
     id:43,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"4",
     shlok:{
        line1:"अन्यत्र धर्मादन्यत्राधर्मादन्यत्रास्मात्कृताकृतात्। \n अन्यत्र भूताच्च भव्याच्च यत्तत्पश्यसि तद्वद॥ १४ ॥",
        
     },
     translationHindi:"जो धर्मसे पृथक्, अधर्मसे पृथक् तथा इस कार्यकारणरूप प्रपञ्चसे भी पृथक् है और जो भूत एवं भविष्यत्से भी अन्य है—ऐसा आप जिसे देखते हैं वही मुझसे कहिये॥ १४ ॥ ",
     translationEnglish:"'Tell (me) of that thing which you see as different from virtue, different from vice, different from this cause and effect, and different from the past and the future.'",
     commentaryHindi:"[नचिकेता बोला—] भगवन्! यदि मैं योग्य हूँ और आप मुझपर प्रसन्न हैं तो— जो धर्म यानी शास्त्रीय धर्मानुष्ठान, उसके फल तथा [कर्ताकरण आदि] कारकोंसे अन्यत्र—पृथग्भूत है, तथा जो अधर्मसे भिन्न है और कृत—कार्य तथा अकृत—कारण इस प्रकार इस कार्य-कारण (स्थूल-सूक्ष्म प्रपञ्च)-से भी पृथक् है, यही नहीं भूत अर्थात् बीते हुए भव्य—आगामी तथा वर्तमान कालसे भी अन्यत्र है; तात्पर्य यह है कि जो तीनों कालोंसे परिच्छिन्न नहीं है। ऐसी जिस सम्पूर्ण व्यवहारविषयसे अतीत वस्तुको आप देखते हैं वह मुझसे कहिये॥ १४ ॥",
     commentaryEnglish:"Anvatra dharmat, different from virtue-i.e. from the performance of scriptural duties, their results, and their accessories; so also anl'atra adharmat, different from vice; so also anyatra asmat krtakrtat, different from this krta, the effect, and akrta, the cause; moreover, anyatra bhutat ca bhav}'at ca, dif ferent from the past time, and from the future-as also the present - i. e. what is not limited by the three times (past, present, and future); yat, what-the thing of this kind that is beyond the reach of all empirical experience, which; pasyasi, you see, you know; tat, that thing; vada, you tell-me. \n With a view to speaking of the thing asked for, as also some other attributes, Death said to him who had inquired, thus:",
     
  },
  {
     id:44,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"15",
     shlok:{
        line1:"सर्वे वेदा यत्पदमामनन्ति तपाँसि सर्वाणि च यद्वदन्ति। \n यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं संग्रहेण ब्रवीम्योमित्येतत्॥ १५ ॥",
        
     },
     translationHindi:"सारे वेद जिस पदका वर्णन करते हैं, समस्त तपोंको जिसकी प्राप्तिके साधक कहते हैं, जिसकी इच्छासे [मुमुक्षुजन] ब्रह्मचर्यका पालन करते हैं, उस पदको मैं तुमसे संक्षेपमें कहता हूँ। ‘ॐ’ यही वह पद है॥ १५ ॥ ",
     translationEnglish:"I tell you briefly of that goal which all the Vedas with one voice propound, which all the austerities speak of, and wishing for which people practise Brahmacarya: it is this, viz Om.",
     commentaryHindi:"इस प्रकार पूछते हुए नचिकेतासे, पूछी हुर्इ वस्तु तथा उसके अन्य विशेषणको बतलानेकी इच्छासे यमराजने कहा— समस्त वेद जिस पद अर्थात् गमनीय स्थानका अविभाग यानी एक रूपसे आमनन—प्रतिपादन करते हैं, समस्त तपोंको भी जिसके लिये कहते हैं अर्थात् वे जिस स्थानकी प्राप्तिके लिये हैं, जिसकी इच्छासे गुरुकुलवासरूप ब्रह्मचर्य अथवा ब्रह्मप्राप्तिमें उपयोगी कोर्इ और साधन करते हैं उस पदको, जिसे कि तू जानना चाहता है, मैं संक्षेपमें कहता हूँ। ‘ॐ’ यही वह पद है। यह जो ‘ॐ’ है यानी जो ॐ शब्दका वाच्य और ॐ ही जिसका प्रतीक है वही वह पद है जिसे तू जानना चाहता है॥ १५ ॥",
     commentaryEnglish:"Yatpadam, that attainable thing-the goal, which; sarve vedah, all the Vedas-without divergence; dmananti, propound; ca, and; yat, that which; sarvani taparhsi, all the austerities; vadanti, speak of--i. e. are meant for the attainment of; yat icchantah, wishing for which; caranti, (they) practise; brahmacaryam, Brahmacarya that either consists in residence (for study) in the house of the teacher or is of some other kind (i.e. lifelong celibacy) meant for the attainment of Brahman; bravimi, I tell; te, you; samgrahena, in brief; tat, that; padam, goal, which you want to know: Om ill etas, it is this, viz Om. The goal that you desire to know is this that is indicated by the word Om and that has Om as its symbol. \n  I (Since Om is the name and symbol of Brahman), therefore:",
     
  },
  {
     id:45,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"16",
     shlok:{
        line1:"एतद्ध्येवाक्षरं ब्रह्म एतद्ध्येवाक्षरं परम्। \n एतद्ध्येवाक्षरं ज्ञात्वा यो यदिच्छति तस्य तत्॥ १६ ॥",
        
     },
     translationHindi:"यह अक्षर ही ब्रह्म है, यह अक्षर ही पर है, इस अक्षरको ही जानकर जो जिसकी इच्छा करता है, वही उसका हो जाता है॥ १६ ॥ ",
     translationEnglish:"This letter (Om), indeed, is the (inferior) Brahman (Hiranyagarbha); and this letter is, indeed, the supreme Brahman. Anybody, who, (while) meditating on this letter, wants any of the two, to him comes that.",
     commentaryHindi:"यह अक्षर ही अपर ब्रह्म है और यह अक्षर ही पर ब्रह्म है। यह अक्षर उन दोनोंहीका प्रतीक है। इस अक्षरको ही ‘यही उपास्य ब्रह्म है’ ऐसा जानकर जो पर अथवा अपर जिस ब्रह्मकी इच्छा करता है उसे वही प्राप्त हो जाता है। यदि उसका उपास्य पर ब्रह्म हो तो वह केवल जाना जा सकता है और यदि अपर ब्रह्म हो तो प्राप्त किया जा सकता है॥ १६ ॥",
     commentaryEnglish:"Etat eva aksaram brahma, this letter (Om), indeed, is (the inferior) Brahman (Hiranyagarbha). And etas eva aksaram param, this letter (Om) is the supreme Brahman. For of them both, this letter (Om) is the symbol. Jnatva, (while) worshipping; etat eva aksaram, this very letter Om as Brahman; anything thatwhether the supreme or the inferior Brahman; yah, anybody; icchati, wishes for; tat tasya, that becomes his: if it is the supreme Brahman (that he desires), It becomes knowable; if it is the inferior Brahman, It becomes attainable.    ",
     
  },
  {
     id:46,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"17",
     shlok:{
        line1:"एतदालम्बनं श्रेष्ठमेतदालम्बनं परम्।  \n एतदालम्बनं ज्ञात्वा ब्रह्मलोके महीयते॥ १७ ॥",
        
     },
     translationHindi:" यही श्रेष्ठ आलम्बन है, यही पर आलम्बन है। इस आलम्बनको जानकर पुरुष ब्रह्मलोकमें महिमान्वित होता है॥ १७ ॥",
     translationEnglish:"This medium is the best; this medium is the supreme (and the inferior) Brahman. Meditating on this medium, one becomes adorable in the world of Brahman.",
     commentaryHindi:"यह [ओंकाररूप] आलम्बन ब्रह्मप्राप्तिके [गायत्री आदि] सभी आलम्बनोंमें श्रेष्ठ यानी सबसे अधिक प्रशंसनीय है। पर और अपर ब्रह्मविषयक होनेसे यह आलम्बन पर और अपररूप है। तात्पर्य यह है कि इस आलम्बनको जानकर साधक ब्रह्मलोक अर्थात् परब्रह्ममें स्थित होकर महिमान्वित होता है तथा अपर ब्रह्ममें ब्रह्मत्वको प्राप्त होकर ब्रह्मके समान उपासनीय होता है॥ १७ ॥",
     commentaryEnglish:"Since this is so, therefore, among all the mediums (e.g. Guvatri7, for the attainment of Brahman, etas alambanam, this medium; is srestham, the highest - the most praiseworthy; etat alambanam, this medium; (is) param, the supreme Brahman -- as well as the inferior Brahman, since it relates to both the inferior Brahman and the supreme Brahman. Jnatva, meditating on; etas alambanam, this medium; brahmaloke mahij,ate, one is worshipped in the world of Brahman. The idea is this: Getting identified with the supreme Brahman or the inferior Brahman, (as a result of meditation), he becomes adorable like Brahman. \n For those aspirants of medium and inferior quality, Om has been indicated both as a medium (for medita tion on), and a symbol (for worship) of, the Self which is devoid of all attributes and which was inquired about in 'Tell me of that thing which you see as different from virtue', etc. (1.ii.14); and It has also been presented similarly, for similar aspirants, who wish to know the inferior Brahman. \n Now this is being said with a view to ascertaining directly the nature of that Self which has Om as Its medium:",
     
  },
  {
     id:47,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"18",
     shlok:{
        line1:"न जायते म्रियते वा विपश्चि- न्नायं कुतश्चिन्न बभूव कश्चित्।  \n अजो नित्य: शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥ १८ ॥",
        
     },
     translationHindi:"यह विपश्चित्—मेधावी आत्मा न उत्पन्न होता है, न मरता है; यह न तो किसी अन्य कारणसे ही उत्पन्न हुआ है और न स्वत: ही कुछ [अर्थान्तररूपसे] बना है। यह अजन्मा, नित्य (सदासे वर्तमान) शाश्वत (सर्वदा रहनेवाला) और पुरातन है तथा शरीरके मारे जानेपर भी स्वयं नहीं मरता॥ १८ ॥ ",
     translationEnglish:"The intelligent Self is neither born nor does It die. It did not originate from anything, nor did anything originate from It. It is birthless, eternal, undecaying, and ancient. It is not injured even when the body is killed.",
     commentaryHindi:"उपर्युक्त ‘अन्यत्र धर्मात्’ इत्यादि श्लोकसे नचिकेताद्वारा पूछे गये सर्वविशेषरहित आत्माके तथा मन्द और मध्यम उपासकोंके लिये अपर ब्रह्मके प्रतीक और आलम्बनरूपसे ओंकारका निर्देश किया गया। अब, जिसका आलम्बन ओंकार है उस आत्माके स्वरूपका साक्षात् निर्धारण करनेकी इच्छासे यह कहा जाता है—यह आत्मा उत्पन्न नहीं होता और न मरता ही है। उत्पन्न होनेवाली अनित्य वस्तुके अनेक विकार होते हैं। यहाँ—आत्मामें सब विकारोंका प्रतिषेध करनेके लिये ‘न जायते म्रियते वा’ ऐसा कहकर सबसे पहले उनमेंसे जन्म और विनाशरूप आदि और अन्तके विकारोंका निषेध किया जाता है। कभी लुप्त न होनेवाले चैतन्यरूप स्वभावके कारण आत्मा विपश्चित् यानी मेधावी है। तथा यह आत्मा कहींसे अर्थात् किसी अन्य कारणसे उत्पन्न नहीं हुआ और न अर्थान्तररूपसे स्वयं अपनेसे ही हुआ है। इसलिये यह आत्मा अजन्मा, नित्य और शाश्वत—यानी क्षयरहित है, क्योंकि जो अशाश्वत होता है वही क्षीण हुआ करता है। यह तो शाश्वत है, इसलिये पुराण भी है यानीप्राचीन होकर भी नवीन ही है। क्योंकि जो पदार्थ अवयवोंके उपचय (मेल)-से निष्पन्न किया जाता है वही ‘इस समय नया है’ ऐसा कहा जाता है; जैसे घड़ा। किन्तु आत्मा उससे विपरीत स्वभाववाला है; अर्थात् वह पुराण यानी वृद्धिरहित है। क्योंकि ऐसा है; इसलिये शस्त्रादिद्वारा शरीरके मारे जानेपर भी वह नहीं मरता—उसकी हिंसा नहीं होती। अर्थात् शरीरमें रहकर भी वह आकाशके समान निर्लिप्त ही है॥ १८ ॥",
     commentaryEnglish:"Vipaicit, the intelligent One (Self) -- intelligent, because Its nature of consciousness is never lost; na javate, is not born - It is not produced; na va mrivate, nor does It die. An impermanent thing that has origination, is subject to many modifications. With a view to denying all the modifications in the Self, the first and last of these modifications, in the form of birth and death, are being first denied here in the text: 'He is neither born nor dies.' Moreover, avam, this One-the Self; na kutascit, did not come from anything-did not originate from any other cause; and from the Self Itself na kascit babhuva, nothing originated-as something different from It. Therefore, ayam, this Self; (is) ajah, birthless; nityah, eternal; sa.svatah, undecaying. That which is impermanent is subject to decay, but this one is everlasting; therefore, again, It is puranah, ancient -new indeed even in the past. A thing is said to be new now, which emerges into being through the development of its parts, as for instance, a pot etc. The Self, however, is opposed to them; It is ancient, i.e. devoid of growth. Since this is so, therefore, na hanyate, It is not killednot injured; sarire hanyamane, when the body is killed-with weapons etc. -though It exists there, just like space.",
     
  },
  {
     id:48,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"19",
     shlok:{
        line1:"हन्ता चेन्मन्यते हन्तुंहतश्चेन्मन्यते हतम्। \n उभौ तौ न विजानीतो नायंहन्ति न हन्यते॥ १९ ॥",
        
     },
     translationHindi:"यदि मारनेवाला आत्माको मारनेका विचार करता है और मारा जानेवाला उसे मारा हुआ समझता है तो वे दोनों ही उसे नहीं जानते, क्योंकि यह न तो मारता है और न मारा जाता है॥ १९ ॥ ",
     translationEnglish:"If the killer thinks (of It) in terms of killing and if the killed thinks (of It) as killed, both of them do not know. It does not kill, nor is It killed.",
     commentaryHindi:"ऐसे प्रकारके आत्माको भी जो देहमात्रको ही आत्मा समझनेवाला किसीको मारनेवाला पुरुष यदि किसीको मारनेका विचार करता है—यह सोचता है कि मैं इसे मारूँगा, तथा दूसरा मारा जानेवाला भी यह समझकर कि ‘मैं मारा गया हूँ’ अपने (आत्मा)-को मारा गया मानता है तो वे दोनों ही अपने आत्माको नहीं जानते; क्योंकि आत्मा अविकारी है, इसलिये वह मार नहीं सकता और आकाशके समान अविकारी होनेसे ही मारा भी नहीं जा सकता। अत: धर्माधर्मादिरूप संसार अनात्मज्ञसे ही सम्बन्ध रखता है, ब्रह्मज्ञसे नहीं। क्योंकि श्रुतिप्रमाण और युक्तिसे भी ब्रह्मज्ञानीद्वारा धर्म-अधर्म आदि नहीं बन सकते॥ १९ ॥",
     commentaryEnglish:"Even though the Self is of this kind, still cet, if, someone who looks upon the mere body as the Self, manyate, thinks--of It; hantum, for the sake of killing -(if he) thinks, `I shall kill It'; and the other who is hatah, killed; cet, if; he too, should manyate, think; the Self to be hatam, killed-(if he) thinks, `I am killed'; ubhau tau, both of them, equally: na vija- nrtah, do not know -their own Self; because ayam, this One; na hanti, does not kill-the Self being unchangeable; similarly, na hanyate, It is not killed-because of the very fact of unchangeability, as in the case of space. Therefore, the worldly existence, consisting of virtue and vice, relates merely to the ignorant man; it does not belong to the knower of Brahman, because for him virtue and vice are inappropriate according to both the Vedic authority and logic. \n How, again, does one know the Self? This is being said:",
     
  },
  {
     id:49,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"20",
     shlok:{
        line1:"अणोरणीयान्महतो महीया- नात्मास्य जन्तोर्निहितो गुहायाम्। \n तमक्रतु: पश्यति वीतशोको धातुप्रसादान्महिमानमात्मन:॥ २० ॥",
        
     },
     translationHindi:" यह अणुसे भी अणु और महान्से भी महान् आत्मा जीवकी हृदयरूप गुहामें स्थित है। निष्काम पुरुष अपनी इन्द्रियोंके प्रसादसे आत्माकी उस महिमाको देखता है और शोकरहित हो जाता है॥ २० ॥",
     translationEnglish:"The Self that is subtler than the subtle and greater than the great, is lodged in the heart of (every) creature. A desireless man sees that glory of the Self through the serenity of the organs, and (thereby he becomes) free from sorrow.",
     commentaryHindi:"आत्मा अणुसे भी अणु अर्थात् श्यामाक आदि सूक्ष्म पदार्थोंसे भी सूक्ष्मतर तथा महान्से भी महान् यानी पृथिवी आदि महत्परिमाणवाले पदार्थोंसे भी महत्तर है। संसारमें अणु अथवा महत्परिमाणवाली जो कुछ वस्तु है वह उस नित्यस्वरूप आत्मासे ही आत्मवान् (स्वरूपसत्तायुक्त) हो सकती है। आत्मासे परित्यक्त हो जानेपर वह सत्ताशून्य हो जाती है। अत: यह आत्मा ही अणु-से-अणु और महान्-से-महान् है, क्योंकि नाम-रूपवाली सभी वस्तुएँ इसकी उपाधि हैं। वह आत्मा ही ब्रह्मासे लेकर स्तम्बपर्यन्त इस सम्पूर्ण प्राणि-समुदायकी गुहा— हृदयमें निहित है अर्थात् अन्तरात्मरूपसे स्थित है। देखना, सुनना, मनन करना और जानना—ये जिसके लिङ्ग हैं उस आत्माको अक्रतु—निष्काम पुरुष अर्थात् जिसकी बुद्धि दृष्ट और अदृष्ट बाह्य विषयोंसे उपरत हो गयी है, क्योंकि जिस समय ऐसी स्थिति होती है उसी समय मन आदि इन्द्रियाँ, जो कि शरीरको धारण करनेके कारण धातु कहलाती हैं, प्रसन्न होती हैं—सो, इन धातुओंके प्रसादसे वह अपने आत्माकी कर्मनिमित्तक वृद्धि और क्षयसे रहित महिमाको देखता है; अर्थात् इस बातको साक्षात् जानता है कि ‘मैं यह हूँ’। [ऐसा जानकर] फिर वह शोकरहित हो जाता है॥ २० ॥",
     commentaryEnglish:"(The Self is) aniydn, subtler; anoh, than the subtle - such as a (tiny) syamaka grain; mahiydn, greater; mahatah, than the great -things that have a great dimension, such as the earth. Whatever great or atomic thing there be in the world, can be so by being possessed of its reality through that eternal Self. When deprived of that Self, it is reduced to unreality. Therefore, that very Self is subtler than the subtle and greater than the great, for It is conditioned by all names, forms, and activities which are Its limiting adjuncts. And that atma, Self; nihitah, is lodged, i.e. exists as the Self; guhayam, in the heart; asya jantoh, of this creature-(in the heart) of all beings beginning from Brahma and ending with a clump of grass. Tam, that Self-the means for whose realization are hearing, thinking, and meditation'; (he sees, who is) akratuh, a desireless man, i.e. one whose intellect has been withdrawn from all outer objects, seen or unseen; and when this (detachment) takes place, dhatavah, the organs, such as mind etc. become composed, the dhatus being so called because of their holding (dharana) the body. (So) dhatu- prasadat, through the serenity of these organs; (he) pasyati, sees; tam mahimanam, that glory; atmanah, of the Self-which is not subject to growth and decay in accordance with the result of work: he sees, i.e. he directly realizes the Self as 'I am the Self', and thereby he becomes vitasokah, free from sorrow. \n Otherwise, the Self is difficult to be known by ordinary people who are possessed of desire, because:",
     
  },
  {
     id:41,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"21",
     shlok:{
        line1:"आसीनो दूरं व्रजति शयानो याति सर्वत:। \n कस्तं मदामदं देवं मदन्यो ज्ञातुमर्हति॥ २१ ॥",
        
     },
     translationHindi:"वह स्थित हुआ भी दूरतक जाता है, शयन करता हुआ भी सब ओर पहुँचता है। मद (हर्ष)-से युक्त और मदसे रहित उस देवको भला मेरे सिवा और कौन जान सकता है?॥ २१ ॥ ",
     translationEnglish:"While sitting, It travels far away; while sleep ing, It goes everywhere. Who but I can know that Deity who is both joyful and joyless?",
     commentaryHindi:"आसीन—अवस्थित अर्थात् अचल होकर भी वह दूर चला जाता है तथा शयन करता हुआ भी सब ओर पहुँचता है। इस प्रकार वह आत्मा—देव समद और अमद यानी हर्षसहित और हर्षरहित—विरुद्ध धर्मवाला है। अत: जाननेमें न आ सकनेके कारण उस मदयुक्त और मदरहित देवको मेरे सिवा और कौन जान सकता है? यह आत्मा हम-जैसे सूक्ष्मबुद्धि विद्वानोंके लिये ही सुविज्ञेय है। स्थिति-गति तथा नित्य और अनित्य आदि अनेक विरुद्धधर्मरूप उपाधिवाला तथा विपरीतधर्मयुक्त होनेसे यह चिन्तामणिके समान विश्वरूप-सा भासता है। अत: ‘मेरे सिवा उसे और कौन जानने योग्य है’ ऐसा कहकर उसकी दुर्विज्ञेयता दिखलाते हैं। इन्द्रियोंका शान्त हो जाना शयन है। शयन करनेवाले पुरुषका इन्द्रियजनित एकदेशसम्बन्धी विज्ञान शान्त हो जाता है। जिस समय ऐसी अवस्था होती है उस समय केवल सामान्य विज्ञान होनेसे वह सब ओर जाता हुआ-सा जान पड़ता है; और जब वह विशेष विज्ञानमें स्थित होता है तो स्वरूपसे अविचल रहकर भी मन आदि उपाधियोंवाला होनेसे उन मन आदिकी गतियोंमें जाता हुआ-सा जान पड़ता है। वस्तुत: तो वह यहीं रहता है॥ २१ ॥",
     commentaryEnglish:"(The Self) while asinah, sitting-remaining stationary, motionless; duram vrajati, goes far; saydnah, while sleeping; l'ati, goes; sarvatah, everywhere. Similarly, that Deity, the Self, is maddmadah, possessed of mada, and devoid of mada -joyful and joyless -possessed of contradictory qualities. Hence, it being difficult to know It, kah, who; madanyah, apart from me, jnatum arhati, can know; tam madamadam devam, that joyful and joyless Deity? It is only by a wise man of fine intellect, like us, that this Self can be known well. Since the Self, as conditioned by various contradictory limiting adjuncts, is possessed of opposite qualities like rest and motion, permanence and impermanence, etc., therefore It appears variously like a prism (visvarupa) or a philosopher's stone (cint5mani)l. Hence the difficulty of Its realization is being pointed out in the sentence; kah tam madan- yah jndtum arhati, who apart from me can know It? Sleep is the cessation of the activities of the senses. The delimitation of Consciousness,2 caused by the senses, ceases for a sleeping man. When the Self is in such a state (of sleep), Its consciousness being of a general character, It yati sarvatah, seems to go, (to be present), everywhere. When It is in a state of particularized consciousness, It, though really stationary by Its own nature, Aram vrajati, seems to travel far, in accordance with the movement of the mind etc., because It is conditioned by those mind etc. In reality, It continues here (in this body) only. \n The text further shows how from the knowledge of the Self comes the elimination of grief as well:",
     
  },
  {
     id:42,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"22",
     shlok:{
        line1:"अशरीरं शरीरेष्वनवस्थेष्ववस्थितम्। \n महान्तं विभुमात्मानं मत्वा धीरो न शोचति॥ २२ ॥",
        
     },
     translationHindi:"जो शरीरोंमें शरीररहित तथा अनित्योंमें नित्यस्वरूप है उस महान् और सर्वव्यापक आत्माको जानकर बुद्धिमान् पुरुष शोक नहीं करता॥ २२ ॥ ",
     translationEnglish:"Having meditated on the Self, as bodiless in the midst of bodies, as permanent in the midst of the impermanent, and as great and pervasive, the wise man does not grieve.",
     commentaryHindi:"आत्मा अपने स्वरूपसे आकाशके समान है, अत: देव, पितृ और मनुष्यादि शरीरोंमें अशरीर है, अनवस्थित—अवस्थितिरहित यानी अनित्योंमें अवस्थित—नित्य अर्थात् अविकारी है, तथा महान् है—[किससे महान् है—इस प्रकार] महत्त्वमें इतरकी अपेक्षा होनेकी शङ्का करके कहते हैं उस विभु अर्थात् व्यापक आत्माको जानकर—यहाँ ‘आत्मा’ शब्द अपनेसे ब्रह्मकी अभिन्नता दिखानेके लिये लिया गया है, क्योंकि ‘आत्मा’ शब्द प्रत्यगात्मविषयमें ही मुख्य है—ऐसे उस आत्माको ‘यही मैं हूँ’ ऐसा जानकर धीर—बुद्धिमान् पुरुष शोक नहीं करता, क्योंकि इस प्रकारके आत्मवेत्तामें शोक बन ही नहीं सकता॥ २२ ॥",
     commentaryEnglish:"The Self in Its own nature, is like space; (having meditated on) that Self (as) asariram, unembodiedas that bodiless Self; sarire.su, in the midst of bodies of gods, manes, human beings, etc.; (as) avasthitam, permanent, i. e. unchanging; anavasthesu, in those that have no fixity--amidst the impermanent; and (having meditated) on the mahantam, great--(and) lest the greatness be taken relatively, the text says-- vibhum, pervasive; atmanam, Self. The word atman (Self) is used to show the nondistinction (of Brahman) from one's Self. The word atman (Self) primarily means the indwelling Self. Marva, having meditated - as `I am this' -on this Self that is of this kind; dhirah, the wise man; na socati, does not grieve. For grief cannot reasonably belong to a man of this kind who has known the Self. \n The, text says that though this Self is difficult to know, It can be known well through proper means:",
     
  },
  {
     id:43,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"23",
     shlok:{
        line1:"नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन। \n यमेवैष वृणुते तेन लभ्य- स्तस्यैष आत्मा विवृणुते तनूँस्वाम्॥ २३ ॥",
        
     },
     translationHindi:"यह आत्मा वेदाध्ययनद्वारा प्राप्त होने योग्य नहीं है और न धारणाशक्ति अथवा अधिक श्रवणसे ही प्राप्त हो सकता है। यह [साधक] जिस [आत्मा]-का वरण करता है, उस [आत्मा]-से ही यह प्राप्त किया जा सकता है। उसके प्रति यह आत्मा अपने स्वरूपको अभिव्यक्त कर देता है॥ २३ ॥ ",
     translationEnglish:"This Self cannot be known through much study, nor through the intellect, nor through much hearing. It can be known through the Self alone that the aspirant prays to; this Self of that seeker reveals Its true nature.",
     commentaryHindi:"यह आत्मा प्रवचन अर्थात् अनेकों वेदोंको स्वीकार करनेसे प्राप्त यानी विदित होने योग्य नहीं है, न मेधा यानी ग्रन्थार्थ-धारणकी शक्तिसे ही जाना जा सकता है और न केवल बहुत-सा श्रवण करनेसे ही। तो फिर किस प्रकार प्राप्त किया जा सकता है, इसपर कहते हैं— यह साधक जिस अपने आत्माका वरण—प्रार्थना करता है उस वरण करनेवाले आत्माद्वारा यह आत्मा स्वयं ही प्राप्त किया जाता है—अर्थात् उससे ही ‘यह ऐसा है’ इस प्रकार जाना जाता है। तात्पर्य यह कि केवल आत्मलाभके लिये ही प्रार्थना करनेवाले निष्काम पुरुषको आत्माके द्वारा ही आत्माकी उपलब्धि होती है। किस प्रकार उपलब्ध होता है, इसपर कहते हैं—उस आत्मकामीके प्रति यह आत्मा अपने पारमार्थिक स्वरूप अर्थात् अपने याथात्म्यको विवृत—प्रकाशित कर देता है॥ २३ ॥",
     commentaryEnglish:"Ayam atma, this Self; na labhyah, is not to be attained, is not to be known; pravacanena, through the acquisition of many Vedas; and na medhaya, not through the intellect-through the power of grasping the meaning of texts; na bahund srutena, not through much hearing-alone. How is It then to be known'? This is being said: Yam eva, that (Self) indeed which is his (i.e. aspirant's) own Self; which esah, this one -the aspirant; vrnute, prays to; Lena, by that - by that very Self which is the seeker (himself); the Self Itself is labhyah, can be known, i.e. It becomes known to be such and such. The meaning is that to a desireless man who seeks for the Self alone, the Self becomes known of Its own accord.' How is It known? This is being said: esah, this Self; tasya, of that seeker of the Self2; vivrnute, reveals; svam, Its own-Its real; tanum, body, i.e. Its own nature. \n There is this further fact:",
     
  },
  {
     id:44,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"24",
     shlok:{
        line1:"नाविरतो दुश्चरितान्नाशान्तो नासमाहित:। नाशान्तमानसो वापि प्रज्ञानेनैनमाप्नुयात्॥ २४ ॥",
        
     },
     translationHindi:" जो पापकर्मोंसे निवृत्त नहीं हुआ है, जिसकी इन्द्रियाँ शान्त नहीं हैं और जिसका चित्त असमाहित या अशान्त है वह इसे आत्मज्ञानद्वारा प्राप्त नहीं कर सकता है॥ २४ ॥",
     translationEnglish:"One who has not desisted from bad conduct, whose senses are not under control, whose mind is not concentrated, whose mind is not free from anxiety (about the result of concentration), cannot attain this Self through knowledge.",
     commentaryHindi:"जो दुश्चरित—प्रतिषिद्ध कर्म यानी श्रुति-स्मृतिसे अविहित पापकर्मसे अविरत—अनुपरत है वह नहीं, जो इन्द्रियोंकी चञ्चलताके कारण अशान्त यानी उपरतिशून्य है वह भी नहीं, जो असमाहित अर्थात् जिसका चित्त एकाग्र नहीं है—जो विक्षिप्तचित्त है वह भी नहीं, तथा समाहितचित्त होनेपर भी उस एकाग्रताके फलका इच्छुक होनेके कारण जो अशान्तचित्त है—जिसका चित्त निरन्तर व्यापार करता रहता है वह पुरुष भी इस प्रस्तुत आत्माको केवल आत्मज्ञानद्वारा नहीं प्राप्त कर सकता। अर्थात् जो पापकर्म और इन्द्रियोंकी चञ्चलतासे हटा हुआ तथा समाहितचित्त और उस समाधानके फलसे भी उपशान्तमना है वह आचार्यवान् साधक ही ब्रह्मज्ञानद्वारा उपर्युक्त आत्माको प्राप्त कर सकता है॥ २४ ॥",
     commentaryEnglish:"Na aviratah, not one who has not desisted; duscari- tat, from bad conduct-from sinful works either prohibited, or not sanctioned by the Vedas and the Smrtis; na asantah, nor one whose senses are not controlled - one who has not turned away from the lure of the senses; na asamahitah, nor one whose mind is not concentrated --one whose mind is scattered ; na, nor one whose mind may be concentrated, but still who is asantamanasah, whose mind is not at rest, because of hankering for the result of concentration; apnuyat, can attain; enam, this Self, that is being considered; prajnanena, through knowledge-of Brahman. But the man who has desisted from bad conduct, as also from the lure of the senses, whose mind has become concentrated, and who is also free from anxiety about the results of concentration, and has a teacher, attains the aforesaid Self through knowledge. This is the idea.",
     
  },
  {
     id:45,
     Part:" 1",
     Valli:" 2",
     mantraNumber:"25",
     shlok:{
        line1:"यस्य ब्रह्म च क्षत्रं च उभे भवत ओदन:। \n मृत्युर्यस्योपसेचनं क इत्था वेद यत्र स:॥ २५ ॥",
        
     },
     translationHindi:"जिस आत्माके ब्राह्मण और क्षत्रिय—ये दोनों ओदन—भात हैं तथा मृत्यु जिसका उपसेचन (शाकादि) है वह जहाँ है उसे कौन [अज्ञ पुरुष] इस प्रकार (उपर्युक्त साधनसम्पन्न अधिकारीके समान) जान सकता है?॥ २५ ॥ ",
     translationEnglish:"How can one know thus as to where It (the Self) is, for which both the Brahmana and the Ksatriya become food, and for which death takes the place of a curry?",
     commentaryHindi:"सम्पूर्ण धर्मोंको धारण करनेवाले और सबके रक्षक होनेपर भी ब्राह्मण और क्षत्रिय—ये दोनों वर्ण जिस आत्माके ओदन—भोजन हैं तथा सबका हरण करनेवाला होनेपर भी मृत्यु जिसका भातके लिये उपसेचन (शाकादि)-के समान है, अर्थात् भोजनके लिये भी पर्याप्त नहीं है, उस आत्माको, जहाँ कि वह है, ऐसा कौन पूर्वोक्त साधनोंसे रहित और साधारण बुद्धिवाला पुरुष है जो इस प्रकार—उपर्युक्त साधनसम्पन्न पुरुषके समान जान सके?॥ २५ ॥ ",
     commentaryEnglish:"But how can one, who is not of this kind, know the Self -the Self yasya, for which; ubhe, both; brahma ca ksairam ca, the Brahmana and the Ksatriya-- though they are the upholders of all righteousness and the protectors of all; bhavatah, become; odanah, food ; yaslva, for which Self; mrtyuh, death - though it is the destroyer of all; (becomes) upasecanam, supplement to the food (like curry) -being unfit even to be a food ; kah, who -being a man with a worldly intellect, and devoid of the disciplines described above; veda, knows; ittha, in this waylike the man endowed with the above mentioned disciplines; t•atra, as to wherel; sah, It-the Self (exists)?",
     
  },
  {
     id:46,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"1",
     shlok:{
        line1:"ऋतं पिबन्तौ सुकृतस्य लोके गुहां प्रविष्टौ परमे परार्धे। छायातपौ ब्रह्मविदो वदन्ति पञ्चाग्नयो ये च त्रिणाचिकेता:॥ १ ॥",
        
     },
     translationHindi:"ब्रह्मवेत्तालोग कहते हैं कि शरीरमें बुद्धिरूप गुहाके भीतर प्रकृष्ट ब्रह्मस्थानमें प्रविष्ट हुए अपने कर्मफलको भोगनेवाले छाया और घामके समान परस्पर विलक्षण दो [तत्त्व] हैं। यही बात जिन्होंने तीन बार नाचिकेताग्निका चयन किया है वे पञ्चाग्निकी उपासना करनेवाले भी कहते हैं॥ १ ॥ ",
     translationEnglish:"The knowers of Brahman, the worshippers of the five fires,' and those who perform the Naciketa sacrifice thrice, compare to shade and light, the two enjoyers of the inevitable results of work, who have entered within the body, into the cavity (of the heart) which is the supreme abode of the Most High (Brahman).",
     commentaryHindi:"ऋत अर्थात् अवश्यम्भावी होनेके कारण सत्य कर्मफलका पान करनेवाले दो आत्मा, जिनमेंसे केवल एक कर्मफलका पान—भोग करता है, दूसरा नहीं; तो भी पान करनेवालेसे सम्बन्ध होनेके कारण यहाँ छत्रिन्यायसे* दोनोंहीके लिये ‘पिबन्तौ’ इस द्विवचनका प्रयोग हुआ है, सुकृत अर्थात् अपने किये हुए कर्मके फलको भोगते हुए, यहाँ ‘सुकृतस्य’ शब्दका पूर्ववर्ती ‘ऋतम्’ शब्दके साथ सम्बन्ध है। लोक अर्थात् इस शरीरमें गुहा-बुद्धिके भीतर परम—बाह्य देहाश्रित आकाश स्थानकी अपेक्षा उत्कृष्ट परब्रह्मके अर्ध यानी स्थानमें प्रवेश किये हुए हैं, क्योंकि उसीमें परब्रह्मकी उपलब्धि होती है। अत: तात्पर्य यह है कि उस परम परार्ध यानी हृदयाकाशमें प्रवेश किये हुए हैं। वे दोनों संसारी और असंसारी होनेके कारण छाया और धूपके समान परस्पर विलक्षण हैं—ऐसा ब्रह्मवेत्तालोग वर्णन करते—कहते हैं। [इस प्रकार] केवल अकर्मी ही ऐसा नहीं कहते बल्कि जो त्रिणाचिकेत हैं—जिन्होंने तीन बार नाचिकेत अग्निका चयन किया है वे पञ्चाग्निकी उपासना करनेवाले गृहस्थ भी ऐसा ही कहते हैं॥ १ ॥",
     commentaryEnglish:"Pibantau, two drinkers of; rtam, truth, i.e. the results of work (which is called truth) because of its inevitability. Of these two, one drinks-enjoysthe fruit of work, and not the other. Still both are called enjoyers, because of association with the enjoyer, on the analogy of the expression the possessors of the umbrella'.' Sukrtasya, of what is done by oneself. This (word) is to be construed with rtam, mentioned earlier-(meaning thereby the drinkers of) the results of the work done by oneself. Pravistau, (these) two have entered; loke, within this body; guham (is the same as guhayam), into the cavity, into the intellect. Parame, (means) in the supreme; it (i.e. the space within the heart) is supreme in comparison with the space outside (the cavity) circumscribed by the human body; parardhe, into that which is the abode (ardha) of Brahman (para)-there, indeed, is the supreme Brahman perceived. So the meaning is that they two have entered into the supreme abode of Brahman, which is the space within the heart. And brahmavidah, the knowers of Brahman, vadanti, speak of--these two; as different like chayatapau, shade and light-because of (their) worldliness and freedom from worldliness. Not only those who have given up rites speak (thus), but also pancagnayah, those who worship the five fires- i.e. the householders; ca, and also, those who are trindciketah, the people by whom has been piled up thrice the fire called Naciketa.    ",
     
  },
  {
     id:47,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"2",
     shlok:{
        line1:"य: सेतुरीजानानामक्षरं ब्रह्म यत्परम्। \n अभयं तितीर्षतां पारं नाचिकेत्ँशकेमहि॥ २ ॥",
        
     },
     translationHindi:"जो यजन करनेवालोंके लिये सेतुके समान है उस नाचिकेत अग्निको तथा जो भयशून्य है और संसारको पार करनेकी इच्छावालोंका परम आश्रय है उस अक्षर ब्रह्मको जाननेमें हम समर्थ हों॥ २ ॥ ",
     translationEnglish:"We have known that Naciketa Fire, which is the bridge for the sacrificers, as also that which is the undecaying supreme Brahman beyond fear for those who want to cross over (the world).",
     commentaryHindi:"दु:खको पार करनेका साधन होनेसे जो नाचिकेत अग्नि यजमान अर्थात् कर्मियोंके लिये सेतुके समान होनेके कारण सेतु है उसे हम जानने और चयन करनेमें समर्थ हों। तथा जो भयरहित है और संसारके पार जानेकी इच्छावाले ब्रह्मवेत्ताओंका परम आश्रय अविनाशी आत्मा नामक ब्रह्म है उसे भी हम जाननेमें समर्थ हो सकें। अर्थात् कर्मवेत्ताका आश्रय अपरब्रह्म और ब्रह्मवेत्ताका आश्रय परब्रह्म—ये दोनों ही ज्ञातव्य हैं—यह इस वाक्यका अर्थ है। ‘ऋतं पिबन्तौ’ इत्यादि मन्त्रसे इन्हीं दोनों [ब्रह्मों]- का उल्लेख किया गया है॥ २ ॥",
     commentaryEnglish:"Sakemahi, we were able to know as well as to pile up; ndciketam, the Naciketa Fire (which is Virat); yah, who; is like a setuh, bridge-since it is calculated to lead beyond sorrow; Fjdndnam, for the sacrificers- the performers of rites. Moreover, that which is abhayam, the fearless; aksaram brahma, the undecaying Brahman - which is the supreme resort of the knowers of Brahman and is called the Self; param titirsatam, for those who want to go to the shore - to the shore of the (sea of this) world - that also we succeeded to know. The meaning of the sentence is that both the inferior and the transcendental Brahman, which are the refuge of the knowers of rites and Brahman respectively, are worthy of realization. For these two, in fact, have been introduced in the verse, 'rtam pibantau' etc. \n For the sake of that one among these (two Selves), which has through limiting adjuncts become the transmigrating soul and is fit for knowledge and ignorance, a chariot, to attain either emancipation or the worldly state, is being imagined as a means to its reaching either.",
     
  },
  {
     id:48,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"3",
     shlok:{
        line1:"आत्मानं रथिनं विद्धि शरीरं रथमेव तु। \n बुद्धिं तु सारथिं विद्धि मन: प्रग्रहमेव च॥ ३ ॥",
        
     },
     translationHindi:"तू आत्माको रथी जान, शरीरको रथ समझ, बुद्धिको सारथी जान और मनको लगाम समझ॥ ३ ॥ ",
     translationEnglish:"Know the (individual) self as the master of the chariot, and the body as the chariot. Know the intellect as the charioteer, and the mind as verily the bridle.",
     commentaryHindi:"उनमें उस आत्माको—कर्मफल भोगनेवाले संसारीको रथी—रथका स्वामी जान और शरीरको तो रथ ही समझ, क्योंकि शरीर रथमें बँधे हुए अश्वरूप इन्द्रियगणसे खींचा जाता है। तथा निश्चय करना ही जिसका लक्षण है उस बुद्धिको सारथी जान, क्योंकि सारथिरूप नेता ही जिसमें प्रधान है उस रथके समान शरीर बुद्धिरूप नेताकी प्रधानतावाला है, क्योंकि देहके सभी कार्य प्राय: बुद्धिके ही कर्तव्य हैं। और संकल्प-विकल्पादिरूप मनको प्रग्रह—लगाम समझ, क्योंकि जिस प्रकार घोड़े लगामसे नियन्त्रित होकर चलते हैं उसी प्रकार श्रोत्रादि इन्द्रियाँ मनसे नियन्त्रित होकर ही अपने विषयोंमें प्रवृत्त होती हैं॥ ३ ॥",
     commentaryEnglish:"Of these, viddhi, know; dtmdnam, the self--the enjoyer of the fruits of karma, which is the soul in the worldly state; as rathinam, the rider, the master of the chariot; tu, and, (know) sar►ram, the body; as the ratham, the chariot -since the body is pulled by the organs which occupy the place of the horses tied to the chariot; tu, and, viddhi, know: buddhim, the intellect--characterized by determination; as sdra- thim, charioteer-since the body has the guiding intellect as its chief, just as the chariot has the guiding charioteer as its chief. All physical work, indeed, is generally directed by the intellect. Know manah, the mind --characterized by volition, doubt, etc.; as pragraham, the bridle- for, just as the horses act when held in by the reins, similarly the organs such as ear etc. act when held in by the mind.",
     
  },
  {
     id:49,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"4",
     shlok:{
        line1:"इन्द्रियाणि हयानाहुर्विषयाँस्तेषु गोचरान्। \n आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिण:॥ ४ ॥",
        
     },
     translationHindi:"विवेकी पुरुष इन्द्रियोंको घोड़े बतलाते हैं तथा उनके घोड़ेरूपसे कल्पना किये जानेपर विषयोंको उनके मार्ग बतलाते हैं और शरीर, इन्द्रिय एवं मनसे युक्त आत्माको भोक्ता कहते हैं॥ ४ ॥ ",
     translationEnglish:"They call the organs the horses; the organs having been imagined as horses, (know) the objects as the roads. The discriminating people call that Self the enjoyer when It is associated with body, organs, and mind.",
     commentaryHindi:"रथकी कल्पना करनेमें कुशल पुरुषोंने चक्षु आदि इन्द्रियोंको घोड़े बतलाया है, क्योंकि [इन्द्रिय और घोड़ोंकी क्रमश:] शरीर और रथको खींचनेमें समानता है। इस प्रकार उन इन्द्रियोंको घोड़ेरूपसे परिकल्पित किये जानेपर रूपादि विषयोंको उनके मार्ग जानो तथा शरीर इन्द्रिय और मनके सहित अर्थात् उनसे युक्त आत्माको मनीषी—विवेकी पुरुष ‘यह भोक्ता—संसारी है’ ऐसा बतलाते हैं। केवल (शुद्ध) आत्मा तो भोक्ता है नहीं; उसका भोक्तृत्व तो बुद्धि आदि उपाधिके कारण ही है। इसी प्रकार ‘ध्यान करता हुआ-सा, चेष्टा करता हुआ-सा” इत्यादि एक दूसरी श्रुति भी केवल आत्माका अभोक्तृत्वही दिखलाती है। ऐसा होनेपर ही आगे कही जानेवाली रथकल्पनासे उस वैष्णवपदकी आत्मभावसे प्रतिपत्ति (प्राप्ति) बन सकती है—और किसी प्रकार नहीं, क्योंकि स्वभाव कभी नहीं बदल सकता॥ ४ ॥",
     commentaryEnglish:"Ahuh, they-those versed in calling up the imagery of the chariot - call; indriyani, the organs - eye etc.; hayan, horses -because of the similarity of drawing the chariot and the body. Tesu, those very organs having been imagined as horses; know, visa van, the objects-such as colour etc.; as gocaran, the roads. Manisinah, the discriminating people; Ahuh, call; atmendriyamanoyuktam, the Self as associated with body, organs, and mind; as bhokta, the enjoyer, the transmigrating soul. For the absolute Self can have no enjoyership; Its enjoyership is in fact created by the limiting adjuncts such as the intellect etc. Thus also there is another Vedic text which shows the non-enjoyership of the absolute (Self): It thinks, as it were, and shakes, as it were' etc. (Br. IV. iii. 7). Only if this is so, does it become appropriate to attain the state of Visnu (I. iii. 9) as one's own, through the analogy of the chariot which is going to be elaborated; but not otherwise, because one cannot transcend one's (true) nature.",
     
  },
  {
     id:50,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"5",
     shlok:{
        line1:"यस्त्वविज्ञानवान्भवत्ययुक्तेन मनसा सदा। \n तस्येन्द्रियाण्यवश्यानि दुष्टाश्वा इव सारथे:॥ ५ ॥",
        
     },
     translationHindi:"किन्तु जो [बुद्धिरूप सारथी] सर्वदा अविवेकी एवं असंयतचित्तसे युक्त होता है उसके अधीन इन्द्रियाँ इसी प्रकार नहीं रहतीं जैसे सारथीके अधीन दुष्ट घोड़े॥ ५ ॥ ",
     translationEnglish:"But the organs of that intellect, which, being ever associated with an uncontrolled mind, becomes devoid of discrimination, are unruly like the vicious horses of the charioteer.",
     commentaryHindi:"किन्तु ऐसा होनेपर भी जो बुद्धिरूप सारथी अविज्ञानवान्—अकुशल अर्थात् रथसञ्चालनमें अकुशल अन्य सारथीके समान [इन्द्रियरूप घोड़ोंकी] प्रवृत्तिनिवृत्तिके विवेकसे रहित है, जो सर्वदा प्रग्रह (लगाम) स्थानीय अयुक्त—अगृहीत अर्थात् विक्षिप्त चित्तसे युक्त है उस अनिपुण बुद्धिरूप सारथीके इन्द्रियरूप घोड़े [रथादि हाँकनेवाले ] अन्य सारथीके दुष्ट अर्थात् बेकाबू घोड़ोंके समान अवश्य वशमें न आनेवाले यानी जिनका निवारण नहीं किया जा सकता ऐसे हो जाते हैं॥ ५ ॥",
     commentaryEnglish:"Yah tu, he, however, who-the charioteer called the intellect; bhavati, becomes; avijndnavdn, unskilful - lacking in discrimination as regards engagement and disengagement, just as the other (real charioteer) is in conducting the chariot; being sadd, ever; associated ayuktena manasa, with an uncontrolled mind which is comparable to the bridle; tasya, his-of that incompetent intellect, i.e. of the driver; indriydni, the organs-which are analogous to the horses; are avasydni, unruly, uncontrollable; dus- tasvah iva, like the vicious horses; saratheh, of the charioteer-of the other (real) driver.",
     
  },
  {
     id:51,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"6",
     shlok:{
        line1:"यस्तु विज्ञानवान्भवति युक्तेन मनसा सदा। \n तस्येन्द्रियाणि वश्यानि सदश्वा इव सारथे:॥ ६ ॥",
        
     },
     translationHindi:"परन्तु जो [बुद्धिरूप सारथी] कुशल और सर्वदा समाहितचित्त रहता है उसके अधीन इन्द्रियाँ इस प्रकार रहती हैं जैसे सारथीके अधीन अच्छे घोड़े॥ ६ ॥ ",
     translationEnglish:"But of that (intellect) which, being ever associated with a restrained mind, is endowed with discrimination, the organs are controllable like the good horses of the charioteer.",
     commentaryHindi:"किन्तु जो [बुद्धिरूप सारथी] पूर्वोक्त सारथीसे विपरीत विज्ञानवान् (कुशल)—मनको नियन्त्रित रखने-वाला अर्थात् संयतचित्त होता है उसकी अश्वस्थानीय इन्द्रियाँ प्रवृत्त और निवृत्त किये जानेमें इस प्रकार समर्थ होती हैं जैसे सारथीके लिये अच्छे घोड़े॥ ६ ॥",
     commentaryEnglish:"Yah tu, but that (intellect), again, which is a charioteer opposed to the previous one; which bhavati, becomes; vijnanavan, skilful and possessed of discrimination; yuktena manasa sadd, being ever associated with a controlled mind-being endowed with a concentrated mind; tassya, of that (intellect); indriyani, the organs-that are analogous to the horses; are vasyani, controllable-can be urged on or stopped; sadasvah iva, like the good horses; sara- theh, of the charioteer-of the other (real) driver. \n This is the result that is being foretold for the aforesaid rider who has a non-discriminating intellect as his charioteer:",
     
  },
  {
     id:52,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"7",
     shlok:{
        line1:"यस्त्वविज्ञानवान्भवत्यमनस्क: सदाशुचि:। \n न स तत्पदमाप्नोति संसारं चाधिगच्छति॥ ७ ॥",
        
     },
     translationHindi:" किन्तु जो अविज्ञानवान्, अनिगृहीतचित्त और सदा अपवित्र रहनेवाला होता है वह उस पदको प्राप्त नहीं कर सकता, प्रत्युत संसारको ही प्राप्त होता है॥ ७ ॥",
     translationEnglish:"But he, (that master of the chariot), does not attain that goal (through that intellect), who, being associated with a non-discriminating intellect and an uncontrollable mind, is ever impure; and he attains worldly existence.'",
     commentaryHindi:"किन्तु जो अविज्ञानवान्, अमनस्क—असंयतचित्त और इसीलिये सदा अपवित्र रहनेवाला होता है उस सारथीके द्वारा वह [जीवरूप] रथी उस पूर्वोक्त अक्षर परम पदको प्राप्त नहीं कर सकता। वह कैवल्यको प्राप्त नहीं होता—केवल इतना ही नहीं, बल्कि जन्म-मरणरूप संसारको भी प्राप्त होता है॥ ७ ॥",
     commentaryEnglish:"Yah tu, but he (the soul, the master of the chariot) who; avijnanavan bhavati, is associated with a nondiscriminating intellect; amanaskah, whose mind is not under control; who is, because of that very reason, asucih, unclean; sada, for ever; sah, that rider of the chariot; na apnoti, does not attainwith the help of that charioteer (viz the intellect); tat, that -the aforesaid undecaying One; which is the supreme padam, goal. Not only does he not attain emancipation, but also adhigacchati, he reaches; samsaram, worldly existence- involving birth and death.",
     
  },
  {
     id:53,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"8",
     shlok:{
        line1:"यस्तु विज्ञानवान्भवति समनस्क: सदा शुचि:। \n स तु तत्पदमाप्नोति यस्माद्भूयो न जायते॥ ८ ॥",
        
     },
     translationHindi:"किन्तु जो विज्ञानवान्, संयतचित्त और सदा पवित्र रहनेवाला होता है वह तो उस पदको प्राप्त कर लेता है जहाँसे वह फिर उत्पन्न नहीं होता॥ ८ ॥ ",
     translationEnglish:"That (master of the chariot), however, who is associated with a discriminating intellect, and being endowed with a controlled mind, is ever pure, attains that goal from which he is not born again.",
     commentaryHindi:"किन्तु जो दूसरा रथी अर्थात् विद्वान् विज्ञानवान्—कुशल सारथीसे युक्त, समनस्क—युक्तचित्त और इसीलिये सदा पवित्र रहनेवाला होता है वह तो उसी पदको प्राप्त कर लेता है, जिस प्राप्त हुए पदसे च्युत न होकर वह फिर संसारमें उत्पन्न नहीं होता॥ ८ ॥ ",
     commentaryEnglish:"The other one, yah tu, who, however; is vijnanavan, associated with a discriminating charioteer-i.e. the rider of the chariot who has knowledge; saman- askah, who is possessed of a controlled mind; and who is for that very reason sada sucih, ever pure; sah tu, he however; tat padam apnoti, attains that state; yasmat, from which-becoming non-alienable from which acquired goal; he na jayate, is not bornin the world; bhuyak, again. \n What is that goal? In answer the text says:",
     
  },
  {
     id:54,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"9",
     shlok:{
        line1:"विज्ञानसारथिर्यस्तु मन:प्रग्रहवान्नर:। \n सोऽध्वन: पारमाप्नोति तद्विष्णो: परमं पदम्॥ ९ ॥",
        
     },
     translationHindi:"जो मनुष्य विवेकयुक्त बुद्धि-सारथीसे युक्त और मनको वशमें रखनेवाला होता है वह संसारमार्गसे पार होकर उस विष्णु (व्यापक परमात्मा)-के परमपदको प्राप्त कर लेता है॥ ९ ॥ ",
     translationEnglish:"The man, however, who has as his charioteer a discriminating intellect, and who has under control the reins of the mind, attains the end of the road; and that is the highest place of Visnu.",
     commentaryHindi:"जो पूर्वोक्त विद्वान् पुरुष विवेकयुक्त बुद्धि-सारथीसे युक्त मनोनिग्रहवान् यानी निगृहीतचित्त—एकाग्र मनवाला होता हुआ पवित्र है वह संसारगतिके पारको यानी अवश्य, प्राप्तव्य परमात्माको प्राप्त कर लेता है; अर्थात् सम्पूर्ण संसारबन्धनोंसे मुक्त हो जाता है। उस विष्णु यानी वासुदेव नामक सर्वव्यापक परब्रह्म परमात्माका जो परम—उत्कृष्ट पद—स्थान अर्थात् स्वरूप है उसे वह विद्वान् प्राप्त कर लेता है॥ ९ ॥ ",
     commentaryEnglish:"Yah narah tu, the man however, who, as described earlier; vijnanasarathih, has a discriminating intellect as his charioteer; manah pragrahavan, who has the mind as his reins-whose mind is controlled, who having a concentrated mind has become holy; sah (narah), that man-that man of knowledge; apnoti, reaches; adhvanah param, the end of the road, i. e. the very supreme goal to be reached beyond the course of the world. He becomes free from all the worldly bondages. Tat, that, is paramam padam, the highest place, i.e. the very nature; visnoh, of Visnu --of the all-pervading Brahman, of the supreme Self who is called Vasudevat -which this man of knowledge attains. \n Now this portion begins in order to show how the goal (i.e. Brahman), that is to be reached, is to be realized as the indwelling Self through an ascending gradation, from grossness to subtleness, commencing from the gross senses. ",
     
  },
  {
     id:55,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"10",
     shlok:{
        line1:"इन्द्रियेभ्य: परा ह्यर्था अर्थेभ्यश्च परं मन:। \n मनसस्तु परा बुद्धिर्बुद्धेरात्मा महान्पर:॥ १० ॥",
        
     },
     translationHindi:"इन्द्रियोंकी अपेक्षा उनके विषय श्रेष्ठ हैं, विषयोंसे मन उत्कृष्ट है, मनसे बुद्धि पर है और बुद्धिसे भी महान् आत्मा (महत्तत्त्व) उत्कृष्ट है॥ १० ॥ ",
     translationEnglish:"The sense-objects are higher than the senses, and the mind is higher than the sense-objects; but the intellect is higher than the mind, and the Great Soul is higher than the intellect.",
     commentaryHindi:"अब जो प्राप्तव्य परम पद है उसका स्थूल इन्द्रियोंसे आरम्भ करके सूक्ष्मत्वके तारतम्यक्रमसे प्रत्यगात्म-स्वरूपसे ज्ञान प्राप्त करना चाहिये, इसीलिये आगेका कथन आरम्भ किया जाता है—इन्द्रियाँ तो स्थूल हैं। वे जिन शब्द-स्पर्शादि विषयोंद्वारा अपनेको प्रकाशित करनेके लिये बनायी गयी हैं वे विषय अपने कार्यभूत इन्द्रियवर्गसे पर—सूक्ष्म, महान् एवं प्रत्यगात्मस्वरूप हैं। उन विषयोंसे भी पर—सूक्ष्म, महान् तथा नित्यस्वरूपभूत मन है, जो कि ‘मन’ शब्दका वाच्य और मनका आरम्भक भूतसूक्ष्म है, क्योंकि वही सङ्कल्प-विकल्पादिका आरम्भक है। मनसे भी पर—सूक्ष्मतर, महत्तर एवं प्रत्यगात्मभूत ‘बुद्धि’ शब्दवाच्य अध्यवसायादिका आरम्भक भूतसूक्ष्म है। उस बुद्धिसे भी, सम्पूर्ण प्राणियोंकी बुद्धिका प्रत्यगात्मभूत होनेसे आत्मा महान् है, क्योंकि वह सबसे बड़ा है। अर्थात् अव्यक्तसे जो सबसे पहले उत्पन्न हुआ हिरण्यगर्भ तत्त्व है, जो महान् आत्मा [ज्ञानशक्ति और क्रियाशक्तिसे सम्पन्न होनेके कारण] बोधाबोधात्मक है वह बुद्धिसे भी पर है—ऐसा कहा जाता है॥ १० ॥",
     commentaryEnglish:"Now, then, the senses are gross. The arthah, sense 6objects, by which those senses were created for their (i.e. of the sense-objects) own revelation; are certainly parch, higher - subtler, more pervasive, and are their inner selves ; indriyebhyah, than those senses - which are their own effects (the sense-organs having been created from sense-objects for perceiving them). Arthebhvah ca, as compared with even those sense-objects; manah, the -mind; is param, higher-more subtle, pervasive, and is their inner self. By the word manah is indicated the elements in their rudimentary subtle form (tanmdtras) which are the material cause of' the mind, for they are the originators of volition and conjecture. Manasah (api), as compared with even the mind; huddhih, the intellect; is pard, higher -subtler, more pervasive, and is their inner self. By the word huddhih, is denoted the rudimentary elements (tanmdtras) which are the source of determination etc. Buddheh, as compared with the intellect, mahdn alma, the Great Soul (is higher); it is dtmd, the soul, because it is the innermost principle of the intelligence of all beings, and it is mahdn, great, because it is the most pervasive of all. The principle called Hiranyagarbha, which was born before all, from the Unmanifested (Maya), and which consists of both intelligence and activity. is called the Great Soul that is parah, higher, than the intellect.    ",
     
  },
  {
     id:56,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"11",
     shlok:{
        line1:"महत: परमव्यक्तमव्यक्तात्पुरुष: पर:। \n पुरुषान्न परं किंचित्सा काष्ठा सा परा गति:॥ ११ ॥",
        
     },
     translationHindi:"महत्तत्त्वसे अव्यक्त (मूलप्रकृति) पर है और अव्यक्तसे भी पुरुष पर है। पुरुषसे पर और कुछ नहीं है। वही [सूक्ष्मत्वकी] परा काष्ठा (हद) है, वही परा (उत्कृष्ट) गति है॥ ११ ॥ ",
     translationEnglish:"The Unmanifested is higher than Mahat, the Purusa is higher than the Unmanifested. There is nothing, higher than the Purusa. He is the culmination, He is the highest goal.",
     commentaryHindi:"महत्से भी पर—सूक्ष्मतर, प्रत्यगात्मस्वरूप और सबसे महान् अव्यक्त है, जो सम्पूर्ण जगत्का बीजभूत, अव्यक्त नाम-रूपोंकी सत्तास्वरूप, सम्पूर्ण कार्य-कारण-शक्तिका समाहार, अव्यक्त, अव्याकृत और आकाशादि नामोंसे निर्दिष्ट होनेवाला तथा वटके धानेमें रहनेवाली वटवृक्षकी शक्तिके समान परमात्मामें ओत-प्रोतभावसे आश्रित है। उस अव्यक्तकी अपेक्षा सम्पूर्ण कारणोंका कारण तथा प्रत्यगात्मरूप होनेसे पुरुष पर—सूक्ष्मतर एवं महान् है। इसीलिये वह सबमें पूरित रहनेके कारण ‘पुरुष’ कहा जाता है। उसके सिवा किसी दूसरे उत्कृष्टतरके प्रसङ्गका निवारण करते हुए कहते हैं कि पुरुषसे पर और कुछ नहीं है। क्योंकि चिद्घनमात्र पुरुषसे भिन्न और कोर्इ वस्तु नहीं है इसलिये वही सूक्ष्मत्व, महत्त्व और प्रत्यगात्मत्वकी पराकाष्ठा—स्थिति अर्थात् पर्यवसान है। इन्द्रियोंसे लेकर इस आत्मामें ही सूक्ष्मत्वादिकी परिसमाप्ति होती है। अत: यही गमन करनेवाले अर्थात् सम्पूर्ण गतियोंवाले संसारियोंकी पर—उत्कृष्ट गति है, जैसा कि “जिसको प्राप्त होकर फिर नहीं लौटते” इस स्मृतिसे सिद्ध होता है॥ ११ ॥",
     commentaryEnglish:"Mahatah, as compared (even) with Mahat (the Great Soul); param, higher-subtler, the inner self, and the most pervasive; is avyaktam, the Unmanifested - that which is the seed of the whole universe, the essence of unmanifested name and form, the state of aggregation of all powers of causes and ef- fects,l called by such names as avyakta (Unmanifested), avvdkrta (Unevolved), dkdsa (Space), etc., resting on the supreme Self through and through like the potentiality of a banyan tree in a tiny banyan seed.' Avvaktdt, as compared with that avyakta3; (the Purusa is) parah, higher-subtler and greater, being the cause of all the causes and the inmost self of all--and therefore too, He is called purusah, because He fills up everything. Ruling out the possibility of anything being higher than Him, the text says, purusat na param kith cit, there is nothing higher than the Purusa. Since there is no other substance beyond the Purusa who is a mass of pure consciousness, therefore, su, He, the Purusa, is kdsthd, the acme, the culmination-of subtleness, greatness, and inwardness, as Self. Here, indeed, culminate all subtleness etc., commencing from the senses. And hence this is para gatih, the supreme goal-of all travellers, all individual souls that transmigrate: because the Smrti says, 'Going where they do not return.' (G. VIII. 21; XV. 6) \n Objection: Is it not a fact that if there is going, there shall be coming as well? How is it then said, from which he is not born again'? (I. iii. 8) \n Answer: That is no fault. Since He is the indwelling Self of all, the fact of realizing Him is figuratively spoken of as attaining Him. And that He is the indwelling Self is shown through His being higher than the senses, the mind, and the intellect. He who is a traveller goes, indeed, to something that is unattained, non-immanent, and non-Self; but not contrariwise. Thus there is the Vedic text: 'Those who want to get beyond the ways (of the world), do not walk on roads', etc. (Iti. 18) Thus also is being shown that He is the indwelling Self of all:",
     
  },
  {
     id:57,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"12",
     shlok:{
        line1:"एष सर्वेषु भूतेषु गूढोत्मा न प्रकाशते। \n दृश्यते त्वग्र्यया बुद्ध्या सूक्ष्मया सूक्ष्मदर्शिभि:॥ १२ ॥",
        
     },
     translationHindi:"सम्पूर्ण भूतोंमें छिपा हुआ यह आत्मा प्रकाशमान नहीं होता। यह तो सूक्ष्मदर्शी पुरुषोंद्वारा अपनी तीव्र और सूक्ष्मबुद्धिसे ही देखा जाता है॥ १२ ॥ ",
     translationEnglish:"He is hidden in all beings, and hence He does not appear as the Self (of all). But by the seers of subtle things, He is seen through a pointed and fine intellect.",
     commentaryHindi:"शङ्का—यदि [पुरुषके प्रति] गति है तो [वहाँसे] आगति (लौटना) भी होना चाहिये; फिर ‘जिसके पाससे फिर जन्म नहीं लेता’ ऐसा क्यों कहा जाता है? \n  समाधान—यह दोष नहीं है, क्योंकि सबका प्रत्यगात्मा होनेसे आत्माके ज्ञानको ही उपचारसे गति कहा गया है। तथा इन्द्रिय, मन और बुद्धिसे आत्माका परत्व प्रदर्शित कर उसका प्रत्यगात्मत्व दिखलाया गया है, क्योंकि जो जानेवाला है वह अपनेसे पृथक् अनात्मभूत एवं अप्राप्त स्थानकी ओर ही जाया करता है; इससे विपरीत अपनी ही ओर नहीं आता-जाता। इस विषयमें “संसार-मार्गसे पार होनेकी इच्छावाले पुरुष मार्गरहित होते हैं” इत्यादि श्रुति भी प्रमाण है। तथा आगेकी श्रुति भी पुरुषका सबका ही प्रत्यगात्मा होना प्रदर्शित करती है— यह पुरुष ब्रह्मासे लेकर स्तम्ब-पर्यन्त सम्पूर्ण भूतोंमें गूढ यानी छिपा हुआ, दर्शन, श्रवण आदि कर्म करनेवाला तथा अविद्या यानी मायासे आच्छादित है। अत: सबका अन्तरात्मस्वरूप होनेके कारण आत्मा किसीके प्रति प्रकाशित नहीं होता। अहो! यह माया बड़ी ही गम्भीर, दुर्गम और विचित्र है, जिससे कि ये संसारके सभी जीव वस्तुत: परमार्थस्वरूप होनेपर भी [शास्त्र और आचार्यद्वारा] वैसा बोध कराये जानेपर ‘मैं परमात्मा हूँ’ इस तत्त्वको ग्रहण नहीं करते; बल्कि जो देह और इन्द्रिय आदि संघात घटादिके समान अपने दृश्य हैं, उन्हें किसीके न कहनेपर भी ‘मैं इसका पुत्र हूँ’ इत्यादि प्रकारसे आत्मभावसे ग्रहण करते हैं। निश्चय, उस परमात्माकी ही मायासे यह सारा जगत् अत्यन्त भ्रान्त हो रहा है। “योगमायासे आवृत हुआ मैं सबके प्रति प्रकाशित नहीं होता” ऐसी ही यह स्मृति भी है। शङ्का—किन्तु “उसे जानकर पुरुष शोक नहीं करता” “[वह गूढ आत्मा] प्रकाशित (ज्ञात) नहीं होता” यह तो विपरीत ही कहा गया है। समाधान—ऐसी बात नहीं है। आत्मा अशुद्धबुद्धिपुरुषके लिये अविज्ञेय है; इसीलिये यह कहा गया है कि ‘वह प्रकाशित नहीं होता’। वह तो संस्कारयुक्त और तीक्ष्ण—जो किसी पैनी नोकके समान सूक्ष्म हो ऐसी एकाग्रतासे युक्त और सूक्ष्म वस्तुके निरीक्षणमें लगी हुर्इ तीव्र बुद्धिसे ही दिखलायी देता है। किन्हें दिखलायी देता है? [इसपर कहते हैं—] सूक्ष्मदर्शियोंको। “इन्द्रियोंसे उनके विषय सूक्ष्म हैं” इत्यादि प्रकारसे सूक्ष्मताकी परम्पराका विचार करनेसे जिनका पर—सूक्ष्म वस्तुको देखनेका स्वभाव पड़ गया है, वे सूक्ष्मदर्शी हैं; उन सूक्ष्मदर्शी पण्डितोंको [वह दिखलायी देता है]—यह इसका भावार्थ है॥ १२ ॥",
     commentaryEnglish:"Esah, this one-this Purusa; sarvesu bhutesu, in all creatures-from Brahma to a clump of grass; giudhah, is hidden -though He has such activities as hearing, seeing, etc., yet He is covered by avidl'u, i.e. Maya.' Thus, since He is the alma, the Self (of all); na prakdsate, (He) does not appear as the Self_ of anyone.2 Alas, how unfathomable, inscrutable, and variegated is this Maya, that every creature, though in reality identical with the supreme Entity, and is instructed as such, does not grasp the fact 'I am the supreme Self', while even without being told, he accepts as his Self the non-selves, viz the aggregate of body and senses, under the idea 'I am the son of such a one', though these (latter) are objects of perception to oneself (and are hence not his selves) like pots etc.! Verily, it is because of being deluded by the Maya of the supreme Being that every man moves again and again (through birth and death). There is this Smrti on this point: 'I am not revealed to all, being veiled by my Yoga-Maya (i. e. the illusion born of the congress of the gunas), etc. (G. VII. 25) \n Objection: Is it not contradictory to say, 'Having realized It, the intelligent man does not grieve' (II. i.4) and 'He does not appear'? \n Answer: This is not so. Since He is not known to a man whose intellect has not been purified, it is said, He does not appear'. Tu (but); drsyate, (He) is seen; through the purified (intellect)-agryaya, through the pointed (intellect); that (intellect) which is like a point (agra) is agryd; through that, i. e. through that (intellect) which is associated with concentration; suk.smayd, through the subtle (intellect) that is engaged in ascertaining subtle things.I By whom? Suks- madarsibhih, by the seers of subtle things. The seers are those who have become skilled in penetrating into the subtlest thing through their perception of an ascending order of subtleness by following the process as indicated in the text, 'The sense-objects are higher than the senses', etc. (I. M. 1 O ) By them, i.e. by the wise people. The means for His attainment is being stated :",
     
  },
  {
     id:58,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"13",
     shlok:{
        line1:"यच्छेद्वाङ्मनसी प्राज्ञस्तद्यच्छेज्ज्ञान आत्मनि। \n ज्ञानमात्मनि महति नियच्छेत्तद्यच्छेच्छान्त आत्मनि॥ १३ ॥",
        
     },
     translationHindi:"विवेकी पुरुष वाक्-इन्द्रियका मनमें उपसंहार करे, उसका प्रकाशस्वरूप बुद्धिमें लय करे, बुद्धिको महत्तत्त्वमें लीन करे और महत्तत्त्वको शान्त आत्मामें नियुक्त करे॥ १३ ॥ ",
     translationEnglish:"The discriminating man should merge the (organ of) speech into the mind; he should merge that (mind) into the intelligent self; he should merge the intelligent self into the Great Soul; he should merge the Great Soul into the peaceful Self.",
     commentaryHindi:"विवेकी पुरुष ‘यच्छेत्’ अर्थात् नियुक्त करे—उपसंहार करे; किसका उपसंहार करे? वाक् अर्थात् वाणीका। यहाँ वाक् सम्पूर्ण इन्द्रियोंका उपलक्षण करानेके लिये है। कहाँ उपसंहार करे? मनमें; ‘मनसी’ पदमें ह्रस्व इकारके स्थानमें दीर्घ प्रयोग छान्दस है। फिर उस मनको ज्ञान अर्थात् प्रकाशस्वरूप बुद्धि—आत्मामें लीन करे। बुद्धि ही मन आदि इन्द्रियोंमें व्याप्त है, इसलिये वह उनका आत्मा—प्रत्यक्स्वरूप है। उस ज्ञानस्वरूप बुद्धिको प्रथम विकार महान् आत्मामें लीन करे अर्थात् प्रथम उत्पन्न हुए महत्तत्त्वके समान आत्माका स्वच्छ-भाव विज्ञान प्राप्त करे। और महान् आत्माको जिसका स्वरूप सम्पूर्ण विशेषोंसे रहित है और जो अविक्रिय, सर्वान्तर तथा बुद्धिके सम्पूर्ण प्रत्ययोंका साक्षी है उस मुख्य आत्मामें लीन करे॥ १३ ॥",
     commentaryEnglish:"Prdjnah, the discriminating man; yacchet, should merge. What (should he merge)? Vdk, i.e. vdcam, the organ of speech, (i.e. all the organs), vak being used suggestively for all organs. Where? Manasi, into the mind; the use of the word with a long F is a Vedic licence. Tat, that mind, again; yacchet, he should merge; jnane atmani, into the intellect - bright by nature-which is their self; as the intellect pervades the organs, beginning with the mind, it is their self, their innermost principle. Jnanam, the intellect; niyacchet, he should dissolve; mahati atmani, in the Great Soul-the First Born (Hiranyagarbha). The idea is that he should make the intelligence as clear in its nature as is the First Born. And that Great Soul again, yacchet, he should sink; sante, into the peaceful -whose nature does not admit of any distinction, which is unchangeable; (into that peaceful) atmani, Self-into the real Self which is within all and is the witness of all the modifications of the intellect. \n Just as the water in a mirage, the snake on a rope, and dirt in the sky, are eliminated through the perception of the real nature of the mirage, rope, and the sky, similarly by dissolving in the Purusa - the Selfthrough the knowledge of the true nature of one's own Self, all that is projected by unreal ignorance, which is characterized by action, instrument, and result, and which is but constituted by the threename, form, and action-one becomes established in the Self and peaceful in mind, and he has his goal achieved. Since this is so, therefore, for the sake of realizing this- ",
     
  },
  {
     id:59,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"14",
     shlok:{
        line1:"उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत। \n क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति॥ १४ ॥",
        
     },
     translationHindi:"[अरे अविद्याग्रस्त लोगो!] उठो, [अज्ञान-निद्रासे] जागो, और श्रेष्ठ पुरुषोंके समीप जाकर ज्ञान प्राप्त करो। जिस प्रकार छुरेकी धार तीक्ष्ण और दुस्तर होती है, तत्त्वज्ञानी लोग उस मार्गको वैसा ही दुर्गम बतलाते हैं॥ १४ ॥ ",
     translationEnglish:"Arise, awake, and learn by approaching the excellent ones. The wise ones describe that path to be as impassable as a razor's edge, which, when sharpened, is difficult to tread on.",
     commentaryHindi:"मृगतृष्णा, रज्जु और आकाशके स्वरूपका ज्ञान होनेसे जैसे मृगजल, रज्जु-सर्प और आकाश-मालिन्यका बाध हो जाता है, उसी प्रकार मिथ्याज्ञानसे प्रतीत होनेवाले समस्त प्रपञ्च यानी नाम, रूप और कर्म इन तीनोंको, जो क्रिया, कारक और फलरूप ही हैं, स्वात्मतत्त्वके यथार्थ ज्ञानद्वारा पुरुष अर्थात् आत्मामें लीन करके मनुष्य स्वस्थ, प्रशान्तचित्त एवं कृतकृत्य हो जाता है। क्योंकि ऐसा है, इसलिये उसका साक्षात्कार करनेके लिये—अरे अनादि अविद्यासे सोये हुए जीवो! उठो, आत्मज्ञानके अभिमुख होओ तथा घोररूप अज्ञाननिद्रासे जागो—सम्पूर्ण अनर्थोंकी बीजभूत उस अज्ञाननिद्राका क्षय करो। किस प्रकार [क्षय करें]? श्रेष्ठ—उत्कृष्ट आत्मज्ञानी आचार्योंके पास जाकर—उनके समीप पहुँचकर उनके उपदेश किये हुए सर्वान्तर्यामी आत्माको ‘मैं यही हूँ’ ऐसा जानो। उसकी उपेक्षा नहीं करनी चाहिये—ऐसा मातृवत् श्रुति कृपापूर्वक कह रही है, क्योंकि वह ज्ञेय पदार्थ अत्यन्त सूक्ष्म-बुद्धिका ही विषय है। सूक्ष्म-बुद्धि कैसी होती है? इसपर कहते हैं—निशित अर्थात् पैनायी हुर्इ छुरेकी धार—अग्रभाग जिस प्रकार दुरत्यय होती है—जिसे कठिनतासे पार किया जा सके उसे दुरत्यय कहते हैं। जिस प्रकार उसपर पैरोंसे चलना अत्यन्त कठिन है उसी प्रकार यह आत्मज्ञानका मार्ग बड़ा दुर्गम अर्थात् दुष्प्राप्य है—ऐसा कवि—मेधावी पुरुष कहते हैं। अभिप्राय यह है कि ज्ञेय अत्यन्त सूक्ष्म होनेके कारण मनीषिजन उससे सम्बन्धित ज्ञानमार्गको दुष्प्राप्य बतलाते हैं॥ १४ ॥",
     commentaryEnglish:"You creatures, who are sleeping in ignorance that has no beginning, uttisthata, arise, turn towards the knowledge of the Self; jagrata, awake -put an end to the sleep of ignorance which is terrible by nature, and is the seed of all evil. How (to put an end to it)? Prapya, approaching; vardn, the adorable ones, the excellent teachers-who know that (Self); nibodhata, learn--understand the all-pervading Self, taught by them, as 'I am that'. The Upanisad says out of compassion, like a mother, that this should not be neglected, for the thing to be known is comprehensible by a very fine intellect. With what can that fine intellect be compared? This is being said: Dhdrd, the edge; ksurasva, of a razor; nisita, being sharpened; becomes, duratvava, such as can be passed over with great difficulty, impassable. As that razor is difficult to walk on with the feet, similarly, kavayah, the intelligent people: vadanti, describe; pathah (should rather be panthanam), the path - consisting in the knowledge of Reality; (as) durgam, impassable, i.e. hard to attain. The idea is that since the object to he known is very subtle, they speak of the path of knowledge leading to it as impassable. \n How is the thing to be known very subtle? That is being said: Now, then, this earth is gross, developed as it is by (the principles of) sound, touch, colour, taste, and smell; and it is an object of perception to all the senses. So also is the body. Here a gradation of subtleness, pervasiveness, purity, permanence, etc. is noticed in water etc., through the elimination of the attributes of smell etc., one by one, till one reaches aka.sal (space). Therefore, what need is there to speak of the unsurpassable subtleness etc. of that in which do not exist those attributes -beginning with smell and ending with sound-that are the causes of grossness. This is what the Upanisad shows:",
     
  },
  {
     id:60,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"15",
     shlok:{
        line1:"अशब्दमस्पर्शमरूपमव्ययं तथारसं नित्यमगन्धवच्च यत्। \n अनाद्यनन्तं महत: परं ध्रुवं निचाय्य तन्मृत्युमुखात्प्रमुच्यते॥ १५ ॥",
        
     },
     translationHindi:"जो अशब्द, अस्पर्श, अरूप, अव्यय, तथा रसहीन, नित्य और गन्धरहित है; जो अनादि, अनन्त, महत्तत्त्वसे भी पर और ध्रुव (निश्चल) है उस आत्मतत्त्वको जानकर पुरुष मृत्युके मुखसे छूट जाता है॥ १५ ॥ ",
     translationEnglish:"One becomes freed from the jaws of death by knowing That which is soundless, touchless, colourless, undiminishing, and also tasteless, eternal, odourless, without beginning, and without end, distinct from Mahat, and ever constant.",
     commentaryHindi:"उस ज्ञेयकी अत्यन्त सूक्ष्मता किस प्रकार है? इसपर कहते हैं। शब्द, स्पर्श, रूप, रस और गन्ध—[इन पाँचों विषयों]-से वृद्धिको प्राप्त हुर्इ तथा सम्पूर्ण इन्द्रियोंकी विषयभूत यह पृथिवी स्थूल है; ऐसा ही शरीर भी है। उनमें गन्धादि गुणोंमेंसे एक-एकका अपकर्ष—क्षय होनेसे जलसे लेकर आकाशपर्यन्त चार भूतोंमें सूक्ष्मत्व, महत्त्व, विशुद्धत्व और नित्यत्व आदिका तारतम्य देखा गया है। किन्तु स्थूल होनेके कारण जहाँ गन्धसे लेकर शब्दपर्यन्त ये सारे विकार नहीं हैं उसके सूक्ष्मत्वादिकी निरतिशयताके विषयमें क्या कहा जाय? यही बात आगेकी श्रुति दिखलाती है— जो अशब्द, अस्पर्श, अरूप, अव्यय तथा अरस, नित्य और अगन्धयुक्त है—ऐसी जिसकी व्याख्या की जाती है वह ब्रह्म अविनाशी है, क्योंकि जो पदार्थ शब्दादियुक्त होता है उसीका व्यय होता है; किन्तु यह ब्रह्म तो अशब्दादियुक्त होनेके कारण अव्यय है; इसका व्यय—क्षय नहीं होता, इसीलिये यह नित्य भी है; क्योंकि जिसका व्यय होता है वह अनित्य है। इसका व्यय नहीं होता इसलिये यह नित्य है। यह अनादि अर्थात् जिसका आदि— कारण विद्यमान नहीं है ऐसा होनेसे भी नित्य है, क्योंकि जो पदार्थ आदिमान् होता है वह कार्यरूप होनेसे अनित्य होता है और अपने कारणमें लीन हो जाता है; जैसे कि पृथिवी आदि। किन्तु यह आत्मा तो सबका कारण होनेसे अकार्य है और अकार्य होनेके कारण नित्य है। इसका कोर्इ कारण नहीं है, जिसमें कि यह लीन हो। इसी प्रकार यह आत्मा अनन्त भी है। जिसका अन्त अर्थात् कार्य अविद्यमान हो उसे अनन्त कहते हैं। जिस प्रकार फलादि कार्य उत्पन्न करनेसे भी कदली आदि पौधोंकी अनित्यता देखी गयी है उस प्रकार ब्रह्मका अन्तवत्त्व नहीं देखा गया। इसलिये भी वह नित्य है। नित्यविज्ञप्तिस्वरूप होनेके कारण बुद्धिसंज्ञक महत्तत्त्वसे भी पर अर्थात् विलक्षण है, क्योंकि ब्रह्म सम्पूर्ण भूतोंका अन्तरात्मा होनेके कारण सबका साक्षी है। यह बात उपर्युक्त “एष सर्वेषु भूतेषु गूढोत्मा न प्रकाशते” इत्यादि मन्त्रमें कही ही गयी है। इसी प्रकार वह ध्रुव—कूटस्थ नित्य है। उसकी नित्यता पृथिवी आदिके समान आपेक्षिक नहीं है। उस इस प्रकारके ब्रह्म—आत्माको जानकर पुरुष मृत्युमुखसे—अविद्या, काम और कर्मरूप मृत्युके पंजेसे मुक्त—वियुक्त हो जाता है॥ १५ ॥",
     commentaryEnglish:"Yat, that which -is described as; asabdam, soundless; asparsam, touchless; arupam, colourless; avya- yam, undiminishing; tatha, and also; arasam, tasteless; nityam, eternal-that is the undecaying Brahman. That which is possessed of sound etc., diminishes. But this one, being soundless etc., is avyayam-- It does not diminish, does not decay; and because of this, It is eternal. Whatever decays is non-eternal; but this one does not decay, therefore it is permanent. For this further reason, too, It is eternal: that which has no adi (beginning), cause, is anadi, beginningless. That which has a cause, is impermanent, because it is an effect and it merges into its cause, as for instance earth etc. But this one being the cause of all, is not the effect; and because It is not an effect, It is eternal; It has no cause into which It can merge. Similarly, anantam, infinite-that which has no end, no effect. As the plantain etc. are seen to be impermanent after yielding their products in the form of fruits etc., not even in that way has Brahman any finitude; hence too, It is eternal. Mahatah, from the principle Mahat, called buddhi, intelligence; It is param, distinct, by nature- for It is the witness of all, being eternal Consciousness; and It is Brahman, being the Self of all beings. For it has been already said, `He is hidden in all beings', etc. (I. iii. 12) And It is dhruvam, changelessly constant, whose eternality is not relative like that of the earth etc. Nicayya, realizing;- tat, that Self-the Self that is the Brahman of this kind; pramucyate, one gets freed from-detached from ; mrtyumukhat, from the jaws, the grasp, of Deathwhich consists of ignorance, desire, and action. \n For the sake of eulogizing the knowledge under discussion the Upanisad says:",
     
  },
  {
     id:61,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"16",
     shlok:{
        line1:"नाचिकेतमुपाख्यानं मृत्युप्रोक्तंसनातनम्। \n उक्त्वा श्रुत्वा च मेधावी ब्रह्मलोके महीयते॥ १६ ॥",
        
     },
     translationHindi:"नचिकेताद्वारा प्राप्त तथा मृत्युके कहे हुए इस सनातन विज्ञानको कह और सुनकर बुद्धिमान् पुरुष ब्रह्मलोकमें महिमान्वित होता है॥ १६ ॥ ",
     translationEnglish:"Relating and hearing this eternal anecdoteas received by Naciketa and as told by Death-the intelligent man becomes glorified in the region that is Brahman.",
     commentaryHindi:"नचिकेताद्वारा प्राप्त किये तथा मृत्युके कहे हुए इस तीन वल्लियोंवाले उपाख्यानको, जो वैदिक होनेके कारण सनातन—चिरन्तन है, ब्राह्मणोंसे कहकर तथा आचार्योंसे सुनकर मेधावी पुरुष ब्रह्मलोकमें—ब्रह्म ही लोक है; उसमें महिमान्वित होता है अर्थात् सबका आत्मस्वरूप होकर उपासनीय होता है॥ १६ ॥",
     commentaryEnglish:"Uktvd, relating-to Brahmanas; ca, and; srutvd, hearing-from teachers; this sandtanam upakkva- nam, eternal anecdote- eternal because it is Vedic; (that was) ndciketam, received by Naciketa ; (and) mrtyuproktam, told by Death; medhdvi, the intelligent man; mahiyate, becomes glorified - i.e. he becomes adorable by becoming identified with Brahman; brahmaloke, in the region of Brahman that is identical with Brahman Itself. ",
     
  },
  {
     id:62,
     Part:" 1",
     Valli:" 3",
     mantraNumber:"17",
     shlok:{
        line1:"य इमं परमं गुह्यं श्रावयेद् ब्रह्मसंसदि। \n प्रयत: श्राद्धकाले वा तदानन्त्याय कल्पते॥ तदानन्त्याय कल्पत इति॥ १७ ॥",
        
     },
     translationHindi:"जो पुरुष इस परमगुह्य ग्रन्थको पवित्रतापूर्वक ब्राह्मणोंकी सभामें अथवा श्राद्धकालमें सुनाता है उसका वह श्राद्ध अनन्त फलवाला होता है, अनन्त फलवाला होता है॥ १७ ॥ ",
     translationEnglish:"Should anyone, after purification, get this highest secret recited before an assembly of Brahmanas, or at the time of the ceremonies for the dead, (then) that (ceremony) becomes conducive to eternal result.",
     commentaryHindi:"जो कोर्इ पुरुष इस परम—प्रकृष्ट और गुह्य—गोपनीय ग्रन्थको पवित्र होकर ब्राह्मणोंकी सभामें अथवा श्राद्धकालमें—भोजन करनेके लिये बैठे हुए ब्राह्मणोंके प्रति केवल पाठमात्र या अर्थ करते हुए सुनाता है उसका वह श्राद्ध अनन्त फलवाला होता है। यहाँ अध्यायकी समाप्तिके लिये ‘तदानन्त्याय कल्पते’ यह वाक्य दो बार कहा गया है॥ १७ ॥",
     commentaryEnglish:"Should yah, anyone; prayatah, after becoming purified; idam sravayet, get this text recited-verbatim, as also with explanation; (that is) paramam guhyam, the greatest secret; brahmasamsadi, in an assemblage of Brahmanas; va, or; get it recited sraddhakale, at the time of the ceremonies for the dead, to the Brahmanas seated for the feast; (then) tat, that-funeral ceremony, of that man; kalpate, becomes conducive ; anantyaya, to eternal result. The repetition is for concluding the Part.",
     
  },
  {
     id:63,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"1",
     shlok:{
        line1:"पराञ्चि खानि व्यतृणत्स्वयंभू- स्तस्मात्पराङ्पश्यति नान्तरात्मन्। \n कश्चिद्धीर: प्रत्यगात्मानमैक्ष- दावृत्तचक्षुरमृतत्वमिच्छन्॥ १ ॥",
        
     },
     translationHindi:"स्वयम्भू (परमात्मा)-ने इन्द्रियोंको बहिर्मुख करके हिंसित कर दिया है। इसीसे जीव बाह्य विषयोंको देखता है, अन्तरात्माको नहीं। जिसने अमरत्वकी इच्छा करते हुए अपनी इन्द्रियोंको रोक लिया है ऐसा कोर्इ धीर पुरुष ही प्रत्यगात्माको देख पाता है॥ १ ॥ ",
     translationEnglish:"The self-existent Lord destroyed the outgoing senses. Therefore, one sees the outer things and not the inner Self. A rare discriminating man, desiring immortality, turns his eyes away and then sees the indwelling Self.",
     commentaryHindi:"जो पराक् अर्थात् बाहरकी ओर अञ्चन करती—गमन करती हैं उन्हें ‘पराञ्चि’ (बाहर जानेवाली) कहते हैं। ‘ख’ छिद्रोंको कहते हैं, उनसे उपलक्षित श्रोत्रादि इन्द्रियाँ ‘खानि’* नामसे कही गयी हैं। वे बहिर्मुख होकर ही शब्दादि विषयोंको प्रकाशित करनेके लिये प्रवृत्त हुआ करती हैं। क्योंकि वे स्वभावसे ही ऐसी हैं इसलिये उन्हें हिंसित कर दिया है—उनका हनन कर दिया है। वह [हनन करनेवाला] कौन है? स्वयम्भू— परमेश्वर अर्थात् जो स्वत: ही सर्वदा स्वतन्त्र रहता है—परतन्त्र नहीं रहता। इसलिये वह उपलब्धा सर्वदा पराक् अर्थात् बहि:स्वरूप अनात्मभूत शब्दादि विषयोंको ही देखता—उपलब्ध करता है, ‘नान्तरात्मन्’ अर्थात् अन्तरात्माको नहीं। यद्यपि लोकका ऐसा ही स्वभाव है तो भी कोर्इ धीर—बुद्धिमान्— विवेकी पुरुष ही नदीको उसके प्रवाहके विपरीत दिशामें फेर देनेके समान [इन्द्रियोंको विषयोंकी ओरसे हटाकर] उस अपने प्रत्यगात्माको [देखता है]। जो प्रत्यक् (सम्पूर्ण विषयोंको जाननेवाला) हो और आत्मा भी हो उसे प्रत्यगात्मा कहते हैं। लोकमें आत्मा शब्द ‘प्रत्यक्’ के अर्थमें ही रूढ है, और किसी अर्थमें नहीं। व्युत्पत्तिपक्षमें भी ‘आत्मा’ शब्दकी प्रवृत्ति उसी (प्रत्यक्-अर्थ ही)-में है जैसा कि “क्योंकि यह सबको व्याप्त करता है, ग्रहण करता है और इस लोकमें विषयोंको भोगता है तथा इसका सर्वदा सद्भाव है इसलिये यह ‘आत्मा’ कहलाता है” इस प्रकार आत्मा शब्दकी व्युत्पत्तिके सम्बन्धमें स्मृति है। उस प्रत्यगात्माको अर्थात् अपने स्वरूपको ‘ऐक्षत्’—देखा यानी देखता है। वैदिक प्रयोगमें कालका नियम न होनेके कारण यहाँ वर्तमान कालके अर्थमें भूतकालकी क्रिया [ऐक्षत्]-का प्रयोग हुआ है। वह किस प्रकार देखता है? इसपर कहते हैं—‘आवृत्तच क्षु:’ अर्थात् जिसने अपनी चक्षु और श्रोत्रादि इन्द्रियसमूहको सम्पूर्ण विषयोंसे व्यावृत्त कर लिया है—लौटा लिया है, वह इस प्रकार संस्कारयुक्त हुआ पुरुष ही उस प्रत्यगात्माको देख पाता है। एक ही पुरुषके लिये बाह्य विषयोंकी आलोचनामें तत्पर रहना तथा प्रत्यगात्माका साक्षात्कार करना—ये दोनों बातें सम्भव नहीं हैं। ‘अच्छा तो, इस प्रकार महान् परिश्रमसे [इन्द्रियोंकी] स्वाभाविक प्रवृत्तिको रोककर धीर पुरुष प्रत्यगात्माको क्यों देखता है?’ ऐसी आशंका होनेपर कहते हैं—‘अमृतत्व—अमरणधर्मत्व अर्थात् आत्माकी नित्यस्वभावताकी इच्छा करता हुआ [उसे देखता है]’॥ १ ॥",
     commentaryEnglish:"Pariinci, outgoing; by the word khdni (kha meaning an orifice, cavity) are referred to the senses such as ear etc.', which are suggestively indicated by it. They surely proceed outward for revealing their objects, sound etc. Since they are of such a nature, He vyatrnat, afflicted, i. e. killed these. Who is He (that did so)? Svayambhuh, the Great Lord-who (bhu) exists ever, and (svayam, by Himself) on His own right, and is not subject to anything else. (Since He injured them), tasmat, therefore; the perceiver (the individual) pasyati, sues, perceives; parak, the outer--sounds etc., wh;.;h are the non-Self and exist as external things; na lnr<:;•atman, i.e. na antaratma- nam, but (sees) not tl•; inner Self. Though such is the nature of man, yet like reversing the current of a river kah cit dhirah, some (rare) discriminating man (sees); pratyagatmanam, the indwelling Self. That which is pratyak, in the interior, and at the same time atma, the Self, is the pratyagatma. In common usage the word atma conventionally means only the individual soul, and not anything else. From the point of etymology, too, the word atma has that very sense. For in the Smrti the derivation of the word is given thus: `Since It pervades, absorbs, and enjoys (all) objects in the world, and since from It the world derives its continuous existence, therefore, It is called the atma.' (L. P. I. LXX. 96) That indwelling Self-one's own reality-one aiksat, saw, i.e. sees, for in the Vedas there is no regularity about the tenses. How one sees is being stated: (Becoming) avrttacak- suh, having one's eyes covered-having one's eye, i.e. the group of organs beginning with the ear, turned away from all sense-objects. Such a one, who is purified thus, sees the indwelling Self. For it is not possible for the same person to be engaged in the thought of sense-objects and to have the vision of the Self as well. Why, again, does the discriminating man check his natural propensity thus through great effort and then realize the Self? This is the answer: Icchan, desiring- for oneself; amrtatvam, immortal- ity--one's own unchanging nature.",
     
  },
  {
     id:64,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"2",
     shlok:{
        line1:"पराच: कामाननुयन्ति बाला- स्ते मृत्योर्यन्ति विततस्य पाशम्। \n अथ धीरा अमृतत्वं विदित्वा ध्रुवमध्रुवेष्विह न प्रार्थयन्ते॥ २ ॥",
        
     },
     translationHindi:"अल्पज्ञ पुरुष बाह्य भोगोंके पीछे लगे रहते हैं। वे मृत्युके सर्वत्र फैले हुए पाशमें पड़ते हैं। किन्तु विवेकी पुरुष अमरत्वको ध्रुव (निश्चल) जानकर संसारके अनित्य पदार्थोंमेंसे किसीकी इच्छा नहीं करते॥ २ ॥ ",
     translationEnglish:"The unintelligent people follow the external desires. They get entangled in the snares of the widespread death. Therefore, the discriminating people, having known what true immortality is in the midst of impermanent things, do not pray for anything here.",
     commentaryHindi:"बाल—मन्दमति पुरुष पराक्—बाह्य कामनाओंका—काम्यविषयोंका ही अनुगमन—पीछा किया करते हैं। इसी कारणसे वे अविद्या काम और कर्मके समुदायरूप मृत्युके वितत— विस्तीर्ण—सर्वत्र व्याप्त पाशमें [पड़ते हैं]। जिससे जीव पाशित होता है—बाँधा जाता है उस देहेन्द्रियादिके संयोग-वियोगरूप पाशमें पड़ते हैं। अर्थात् निरन्तर जन्म-मरण, जरा और रोग आदि बहुत-से अनर्थसमूहको प्राप्त होते हैं। क्योंकि ऐसी बात है इसलिये धीर—विवेकी पुरुष प्रत्यगात्मस्वरूपमें स्थितिरूप अमृतत्वको ध्रुव (निश्चल) जानकर; देवता आदिका अमृतत्व तो अध्रुव है, किन्तु यह प्रत्यगात्मस्वरूपमें स्थितिरूप अमृतत्व “यह कर्मसे न बढ़ता है न घटता है” इस उक्तिके अनुसार ध्रुव है। इस प्रकारके अमृतत्वको कूटस्थ और अविचाल्य जानकर वे ब्राह्मण (ब्रह्मवेत्ता) लोग इस अनर्थप्राय संसारके सम्पूर्ण अध्रुव—अनित्य पदार्थोंमेंसे किसीकी इच्छा नहीं करते, क्योंकि वे सब तो प्रत्यगात्माके दर्शनके विरोधी ही हैं। अर्थात् वे पुत्र, वित्त और लोकैषणासे दूर ही रहते हैं॥ २ ॥",
     commentaryEnglish:"Now then, the natural tendency to perceive only outwardly the things that are not the Self, is the cause of obstruction of the vision of the Self and it is ignorance, since it is opposed to that (vision). And there is that thirst for the enjoyment of those very outer things, whether seen or unseen, which are presented by ignorance. Those whose vision of the Self is obstructed by those two - ignorance and thirst -those balah, men of little intelligence; anuyanti, follow; only paracah kaman, the external desirable things. Te, they; because of that reason, yanti, get entangled in ; pdsam, the snares - those by which one is bound, consisting in the association with, or dissociation from, the body, senses, etc. ; vitatasya, of that which is vast, spread everywhere;- mrtyoh, of death-of the group of ignorance, desire, and action. The meaning is that they are constantly subject to birth, death, old age, disease, and a mass of such other multifarious evils. Since this is so, atha, hence; dhirdh, the discriminating people; viditva, having known; amrtatvam, immortality -which consists in continuing in the true state of the indwelling Self; as the dhruvam, sure thing; for the immortality of the gods and others is unstable, whereas this immortality consisting in continuing in the true state of the indwelling Self is stable, as is supported by the text, it neither increases nor decreases through work.' (Br. IV. iv. 23) Having known the constant and unshakable immortality which is of this kind, having ascertained it from adhruvesu, amidst all impermanent things; the knowers of Brahman na prarthayante, do not pray for-anything; iha, in this world, that is full of evil; because all this is opposed to the vision of the innermost Self. The idea is that they inevitably rise above the desires for progeny, wealth, and worlds (of enjoyment).\n  How is that known, by realizing which the men of enlightenment do not pray for anything else? This is being said:",
     
  },
  {
     id:65,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"3",
     shlok:{
        line1:"येन रूपं रसं गन्धं शब्दान्स्पर्शांश्च मैथुनान्। \n एतेनैव विजानाति किमत्र परिशिष्यते। एतद्वै तत्॥ ३ ॥",
        
     },
     translationHindi:"जिस इस आत्माके द्वारा मनुष्य रूप, रस, गन्ध, शब्द, स्पर्श और मैथुनजन्य सुखोंको निश्चयपूर्वक जानता है [उस आत्मासे अविज्ञेय] इस लोकमें और क्या रह जाता है? [तुझ नचिकेताका पूछा हुआ] वह तत्त्व निश्चय यही है॥ ३ ॥ ",
     translationEnglish:"What remains here (unknowable to this Self) through which very Self people perceive colour, taste, smell, sound, touch, and sexual pleasure? This indeed is that (Self asked for by Naciketa).",
     commentaryHindi:"ब्राह्मण लोग जिसका ज्ञान हो जानेसे और किसी वस्तुकी इच्छा नहीं करते उस ब्रह्मका बोध किस प्रकार होता है? इसपर कहते हैं—सम्पूर्ण लोक जिस विज्ञानस्वरूप आत्माके द्वारा रूप, रस, गन्ध, शब्द, स्पर्श और मैथुन—मैथुनजनित सुखोंको स्पष्टतया जानता है [वही ब्रह्म है]। शङ्का—परन्तु लोकमें ऐसी कोर्इ प्रसिद्धि नहीं है कि मैं किसी देहादिसे विलक्षण आत्माद्वारा जानता हूँ। सब लोग यही समझते हैं कि मैं देहादि संघातरूप ही सब कुछ जानता हूँ। समाधान—ऐसी बात तो नहीं है, क्योंकि देहादि संघात भी समानरूपसे शब्दादिरूप तथा विज्ञेयस्वरूप है; अत: उसे ज्ञाता मानना उचित नहीं है। यदि देहादि संघात रूप-रसादिस्वरूप होकर भी रूपादिको जान ले तो बाह्य रूपादि भी परस्पर एक-दूसरेको तथा अपने-अपने रूपको जान लेंगे; किन्तु यह बात है नहीं। अत: लोक देहादिस्वरूप रूपादिको इस देहादिव्यतिरिक्त विज्ञान-स्वभाव आत्माके द्वारा ही जानता है। जिस प्रकार लोहा जिसकेद्वारा जलता है उसे अग्नि कहते हैं उसी प्रकार [जिसके द्वारा लोक देहादि विषयोंको जानता है उसे आत्मा कहते हैं]। उस आत्मासे जिसका ज्ञान न हो सके ऐसा क्या पदार्थ इस लोकमें रह जाता है, अर्थात् कुछ भी नहीं रहता—सभी कुछ आत्मासे ही जाना जा सकता है। [इस प्रकार] जिस आत्मासे अविज्ञेय कोर्इ भी वस्तु नहीं रहती वह आत्मा सर्वज्ञ है और यही वह है। वह कौन है? जिसके विषयमें तुझ नचिकेताने प्रश्न किया है, जो देवादिका भी सन्देहास्पद है तथा जो धर्माधर्मादिसे अन्य विष्णुका परम पद है और जिससे श्रेष्ठ और कुछ भी नहीं है वही यह [ब्रह्मपद] अब ज्ञात हुआ है—ऐसा इसका भावार्थ है॥ ३ ॥",
     commentaryEnglish:"Yena, that by which-by the Self which is consciousness by nature; all people vijdndti, know clearly; rupam, colour; rasam, taste; gandham, smell; sabdam, sound; sparsdn, touch; ca, and; maithundn, pleasurable sensations from sex. \n Objection : May it not be argued that the idea, `I know through the Self which is distinct from the body etc.', is not familiar to anyone? Rather all people experience thus: `I, who am the combination of the body etc., know.' \n Answer: But this is not so. Since even the aggregate of body etc. is substantially indistinguishable from (knowable objects like) sound etc., and hence it, too, is equally a knowable, it cannot reasonably be the knower. If the aggregate of body etc., though constituted by colour etc., can perceive colour etc., then the external colour etc. may as well know each other, as also their own individual feature. But this does not tally with facts. Therefore, just as that through which iron burns (anything) is (inferred to be) fire, similarly people perceive colour and other attributes, in the form of the body etc., etena eva, through this only -through the Self which is consciousness by nature and which is distinct from the body etc. Kim, what; atra, in this world; parisisyate, remains, which is unknowable to the Self? Nothing remains, but everything can certainly be known through the Self. The Self to which nothing can remain 'unknown is omniscient. Etat vai tat, this (Self) indeed is that. What is that? That which was asked for by Naciketa, about which even the gods had doubts, which is different from virtue etc., which is the highest state of Visnu, and beyond which there is nothing. That very thing, which is described thus, is comprehended here. This is the idea. \n Thinking that the Self, being subtle, is difficult to know, the text states the same idea over and over again:",
     
  },
  {
     id:66,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"4",
     shlok:{
        line1:"स्वप्नान्तं जागरितान्तं चोभौ येनानुपश्यति। \n महान्तं विभुमात्मानं मत्वा धीरो न शोचति॥ ४ ॥",
        
     },
     translationHindi:" जिसके द्वारा मनुष्य स्वप्नमें प्रतीत होनेवाले तथा जाग्रत्में दिखायी देनेवाले—दोनों प्रकारके पदार्थोंको देखता है उस महान् और विभु आत्माको जानकर बुद्धिमान् पुरुष शोक नहीं करता॥ ४ ॥",
     translationEnglish:"Having realized the great and all-pervading Self, through which a man perceives the objects in both the sleep and the waking states, a wise man does not grieve.",
     commentaryHindi:"वह ब्रह्म अति सूक्ष्म होनेके कारण दुर्विज्ञेय है—ऐसा मानकर उसी बातको बारम्बार कहते हैं— स्वप्नान्त—स्वप्नका मध्य अर्थात् स्वप्नावस्थामें जाननेयोग्य तथा जाग-रितान्त—जाग्रत्-अवस्थाका मध्य यानी जाग्रत्-अवस्थामें जाननेयोग्य—इन दोनों स्वप्न और जाग्रत्के अन्तर्गत पदार्थोंको लोक जिस आत्माके द्वारा देखता है [वही ब्रह्म है; इस प्रकार] इस वाक्यकी और सब व्याख्या पूर्व मन्त्रके समान करनी चाहिये। उस महान् और विभु आत्माको जानकर अर्थात् ‘वह परमात्मा मैं ही हूँ’ ऐसा आत्मभावसे साक्षात् अनुभव कर धीर—बुद्धिमान् पुरुष शोक नहीं करता॥ ४ ॥",
     commentaryEnglish:"Yena, that--the Self--through which; a man anupasyati, perceives; svapnantam, the content of sleep, i.e. the objects in sleep; similarly jagaritantam, the content of the waking state, the objects in the waking state; ubhau, both -the sleep and waking objects. All this is to be explained as before.1 Matva, realizing; that mahdntam vibhum atmanam, great and all-pervading Self; having directly known It as identified with oneself thus, `I am the supreme Self'; dhirah, the wise man; na socati, does not grieve.    ",
     
  },
  {
     id:67,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"5",
     shlok:{
        line1:"य इमं मध्वदं वेद आत्मानं जीवमन्तिकात्। \n र्इशानं भूतभव्यस्य न ततो विजुगुप्सते। एतद्वै तत्॥ ५ ॥",
        
     },
     translationHindi:"जो पुरुष इस कर्मफलभोक्ता और प्राणादिको धारण करनेवाले आत्माको उसके समीप रहकर भूत, भविष्यत् [और वर्तमान]-के शासकरूपसे जानता है वह वैसा विज्ञान हो जानेके अनन्तर उस (आत्मा)-की रक्षा करनेकी इच्छा नहीं करता। निश्चय यही वह [आत्मतत्त्व] है॥ ५ ॥ ",
     translationEnglish:"Anyone who knows proximately' this Selfthe enjoyer of the fruits of works, the supporter of life etc. - as the lord' of the past and the future, does not want to save (the Self) just because of that (knowledge). This indeed is that.",
     commentaryHindi:"जो कोर्इ इस मध्वद—कर्म-फलभोक्ता और जीव—प्राणादि करण-कलापको धारण करनेवाले आत्माको समीपसे भूत-भविष्यत् आदि तीनों कालोंके शासकरूपसे जानता है, वह ऐसा ज्ञान हो जानेके अनन्तर उस आत्माका गोपन—रक्षण नहीं करना चाहता, क्योंकि वह अभयको प्राप्त हो जाता है। जबतक वह भयके मध्यमें स्थित हुआ अपने आत्माको अनित्य समझता है तभीतक उसकी रक्षा भी करना चाहता है। जिस समय आत्माको नित्य और अद्वैत जान लेता है उस समय कौन किसको कहाँसे सुरक्षित रखनेकी इच्छा करेगा? निश्चय यही वह आत्मतत्त्व है—इस प्रकार पूर्ववत् समझना चाहिये॥ ५ ॥",
     commentaryEnglish:"Moreover, yah, anyone who; veda, knows; antikat, proximately; imam, this; atmanam, Self; jivam, the sustainer of the whole lot of vital force etc.; madhvadam, the enjoyer of the fruits of works; as isdnam, the ruler; bhutabhavyasya, of past and future -of all the three times; tatah, after that -after that knowledge; na vijugupsate, does not want to save (the Self)-because he has attained fearlessness. One wants to save the Self so long as one is in the midst of fear and considers the Self to be impermanent. But when one knows the eternal, non-dual Self, then who would wish to save what or from where? Etat vai tat is to be explained as before.It is being shown that the indwelling Self, which has been identified with God, is the Self of all:",
     
  },
  {
     id:68,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"6",
     shlok:{
        line1:"य: पूर्वं तपसो जातमद्भ्य: पूर्वमजायत। \n गुहां प्रविश्य तिष्ठन्तं यो भूतेभिर्व्यपश्यत। एतद्वै तत्॥ ६ ॥",
        
     },
     translationHindi:"जो मुमुक्षु पहले तपसे उत्पन्न हुए [हिरण्यगर्भ]-को, जो कि जल आदि भूतोंसे पहले उत्पन्न हुआ है, भूतोंके सहित बुद्धिरूप गुहामें स्थित हुआ देखता है वही उस ब्रह्मको देखता है। निश्चय यही वह ब्रह्म है॥ ६ ॥ ",
     translationEnglish:"He sees this very aforesaid Brahman who sees the First Born (Hiranyagarbha) -born before the five elements from Consciousness (Brahman)-as existing in the cavity of the heart in the midst of body and senses, after having entered there.",
     commentaryHindi:"जिस मुमुक्षुने पहले तपसे—ज्ञानादिलक्षण ब्रह्मसे उत्पन्न हुए हिरण्यगर्भको। किसकी अपेक्षा पूर्व उत्पन्न हुए हिरण्यगर्भको? ऐसा प्रश्न होनेपर कहते हैं—जो जलसे पूर्व अर्थात् जलसहित पाँचों तत्त्वोंसे, न कि केवल जलसे ही, पूर्व उत्पन्न हुआ है उस प्रथमज (हिरण्यगर्भ)-को देवादि शरीरोंको उत्पन्न कर सम्पूर्ण प्राणियोंकी गुहा—हृदयाकाशमें प्रविष्ट हो कार्य-कारणरूप भूतोंके सहित शब्दादि विषयोंको अनुभव करते जिसने देखा है यानी जो इस प्रकार देखता है [वही वास्तवमें देखता है]। जो ऐसा अनुभव करता है वही उसे देखता है जो कि यह प्रकृत ब्रह्म है॥ ६ ॥",
     commentaryEnglish:"Yah, anyone-who being desirous of freedom; (vyapasyata, sees) purvam jatam, the First Born - Hiranyagarbha; yah, who; ajayata, was born; purvam, earlier. Earlier than what? That is being said: Adbhyah, than water; the idea is that He was earlier than the five elements inclusive of water, and not merely earlier than water. Tapasah, (born) from Brahman, characterized by consciousness etc. Anyone who (sees) that First Born, who after having created the bodies of gods etc., (and) pravisya guham, having entered into the cavity of the heart, of everybody; tisthantam, remains in existence; bhutebhih, in association with the elements-in the midst of body and senses, perceiving sound etc.; yah vyapas- yata, i.e. paiyati, anyone who sees thus, he sees; etat, this very one, I Brahman, that is under discussion.",
     
  },
  {
     id:69,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"7",
     shlok:{
        line1:"या प्राणेन संभवत्यदितिर्देवतामयी। \n  गुहां प्रविश्य तिष्ठन्तीं या भूतेभिर्व्यजायत॥ एतद्वै तत्॥ ७ ॥",
        
     },
     translationHindi:" जो देवतामयी अदिति प्राणरूपसे प्रकट होती है तथा जो बुद्धिरूप गुहामें प्रविष्ट होकर रहनेवाली और भूतोंके साथ ही उत्पन्न हुर्इ है [उसे देखो] निश्चय यही वह तत्त्व है॥ ७ ॥",
     translationEnglish:"He (sees) that very Brahman (who sees) that Aditi, comprising all the deities, who takes birth as Hiranyagarbha, who is manifested in association with the elements, and who is seated in the cavity of the heart, after entering there.",
     commentaryHindi:"जो सर्वदेवतामयी—सर्वदेवस्वरूपा अदिति प्राण अर्थात् हिरण्यगर्भरूपसे परब्रह्मसे उत्पन्न होती है; शब्दादि विषयोंका अदन (भक्षण) करनेके कारण उसे अदिति कहते हैं—बुद्धिरूप गुहामें पूर्ववत् प्रविष्ट होकर स्थित हुर्इ उस अदितिको [देखो]। उस अदितिकी ही विशेषता बतलाते हैं—जो भूतोंके सहित अर्थात् भूतोंसे समन्वित ही उत्पन्न हुर्इ है। [वही तेरा पूछा हुआ तत्त्व है]॥ ७ ॥",
     commentaryEnglish:"Furthermore, ya aditih, that Aditi -- so called because of enjoying (adana) all such things as sound; who is devatdmay% who comprises all the deities; (and) who sambhavati, takes birth; pranena, as Hiranyagarbha --from the supreme Brahman. The portion He who sees that Aditi as existing in the cavity of the heart after having entered there', is to be explained as before. That very Aditi is being distinguished: yd, which: bhutebhih, as associated with the elements; vyajdyata, took birth, i.e. was created.",
     
  },
  {
     id:70,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"8",
     shlok:{
        line1:"अरण्योर्निहितो जातवेदा गर्भ इव सुभृतो गर्भिणीभि:। \n दिवे दिव ईड्यो जागृवद्भिर्हविष्मद्भिर्मनुष्येभिरग्नि:॥ एतद्वै तत्॥ ८ ॥",
        
     },
     translationHindi:" गर्भिणी स्त्रियोंद्वारा भली प्रकार पोषित हुए गर्भके समान जो जातवेदा (अग्नि) दोनों अरणियोंके बीचमें स्थित है तथा जो प्रमादशून्य एवं होमसामग्रीयुक्त पुरुषोंद्वारा नित्यप्रति स्तुति किये जाने योग्य है, यही वह ब्रह्म है॥ ८ ॥",
     translationEnglish:"The sacrificial Fire lodged in two fire-producing pieces of wood, (as also the Fire lodged in the hearts of Yogis) that is well protected -just as much as the foetus by pregnant women--and the Fire that is adorable every day by vigilant men with oblation (and contemplation)-that Fire too is but this Brahman.",
     commentaryHindi:"जो अधियज्ञरूपसे ऊपर और नीचेकी अरणियोंमें निहित अर्थात् स्थित हुआ और होम किये हुए सम्पूर्ण पदार्थोंका भोक्ता अध्यात्मरूप जातवेदा—अग्नि है; जैसे गर्भिणी—अन्तर्वत्नी स्त्रियाँ शुद्ध अन्न-पानादिद्वारा अपने गर्भकी बहुत अच्छी तरह रक्षा करती हैं उसी प्रकार यज्ञ करनेवाले तथा योगीजन जिसे धारण करते हैं, तथा घृत आदि होमसामग्रीयुक्त, कर्मपरायण एवं जागरणशील—प्रमादशून्य याजकों और ध्यान-भावनायुक्त योगियोंद्वारा जो [क्रमश:] यज्ञ और हृदयदेशमें स्तुति किये जाने योग्य है, ऐसा जो अग्नि है वही निश्चय यह प्रकृत ब्रह्म है॥ ८ ॥",
     commentaryEnglish:"Besides, that jdtaveddh, Fire; which in the context of a sacrifice, is nihitah, lodged; aranyoh, in the upper and lower pieces of wood (by rubbing which fire is produced); which, again, as the eater of all oblations, is (lodged) in the individual person (as Virat, in the heart); and which is subhrtah, well protected-by the men of contemplation; garbhah iva, just as the foetus-is well protected ; garbhi- nibhih, by pregnant women - by partaking of food, drink, etc. that are not improper. The meaning is that, just as in the world the foetus is well protected, similarly it (i.e. the Fire) is protected by the priests and the meditators. Moreover, that agnih, Fire; which is idvah, laudable and adorable-by sacrificers and meditators, in the sacrifices and the hearts; dive, dive, every day; jagrvadbhih, by the sleepless, i.e. the vigilant; manusyebhih, i.e. manusyaih, by men; havismadbhih, who are possessed of oblations, e.g. ghee, as also possessed of meditation and contemplation; tat, that Fire; etat vai, is this only-the Brahman that is being discussed.    ",
     
  },
  {
     id:71,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"9",
     shlok:{
        line1:"यतश्चोदेति सूर्योऽस्तं यत्र च गच्छति। \n तं देवा: सर्वे अर्पितास्तदु नात्येति कश्चन॥एतद्वै तत्॥ ९ ॥",
        
     },
     translationHindi:"जहाँसे सूर्य उदित होता है और जहाँ वह अस्त हो जाता है उस प्राणात्मामें [अन्नादि और वागादिक] सम्पूर्ण देवता अर्पित हैं। उसका कोर्इ भी उल्लङ्घन नहीं कर सकता। यही वह ब्रह्म है॥ ९ ॥ ",
     translationEnglish:"On that, from which the sun rises and in which it sets, are fixed all the deities. None ever transcends that. This indeed is that.",
     commentaryHindi:"जिससे—जिस प्राणसे नित्यप्रति सूर्य उदित होता है और जिस प्राणमें ही वह नित्यप्रति अस्त भावको प्राप्त होता है उस प्राणात्मामें स्थितिके समय अग्नि आदि अधिदैव और वागादि अध्यात्म सभी देवता इस प्रकार अर्पित हैं—प्रविष्ट किये गये हैं जैसे रथकी नाभिमें समस्त अरे; वह [प्राण] भी ब्रह्म ही है। वही यह सर्वात्मक ब्रह्म है। उसका अतिक्रमण कोर्इ भी नहीं करता अर्थात् उस ब्रह्मके तादात्म्य भावको पार करके कोर्इ भी उससे अन्यत्वको प्राप्त नहीं होता। यही वह (ब्रह्म) है॥ ९ ॥",
     commentaryEnglish:"Moreover, yatah ca, that from which--from which Prana (i.e. Hiranyagarbha); udeti, rises; suryah, the sun ; yatra, where, in which Prana itself; it astam gacchati, sets-day after day; tam, on that-on the Prana which is the Self; sarve devah, all the gods -- Fire and others in the divine context, and speech etc. in the personal context; arpitah, are fixed-like spokes on the nave of a chariot wheel-during the period of existence (of the universe). He (that Prana), too, is Brahman. This is that all pervading Brahman. Tat u, that indeed ; na kah cana, nobody-whosoever; atyeti, transcends-ceasing to be identified with It, becomes something other than that. This indeed is that. \n The following verse is there to counteract the doubt that may arise in anybody's mind that the entity which exists in all beings from Brahma down to the immovable, and appears as non-Brahman owing to those particular limiting adjuncts, is (an individual soul) different from the supreme Brahman, and is subject to birth and death:",
     
  },
  {
     id:72,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"10",
     shlok:{
        line1:"यदेवेह तदमुत्र यदमुत्र तदन्विह। \n मृत्यो: स मृत्युमाप्नोति य इह नानेव पश्यति॥ १० ॥",
        
     },
     translationHindi:"जो तत्त्व इस (देहेन्द्रियसंघात)-में भासता है वही अन्यत्र (देहादिसे परे) भी है और जो अन्यत्र है वही इसमें है। जो मनुष्य इस तत्त्वमें नानात्व देखता है वह मृत्युसे मृत्युको [अर्थात् जन्म-मरणको] प्राप्त होता है॥ १० ॥ ",
     translationEnglish:"What indeed is here, is there; what is there, is here likewise. He who sees as though there is difference here, goes from death to death.",
     commentaryHindi:"जो इस लोकमें कार्य-करण (देहेन्द्रिय) रूप उपाधिसे युक्त होकर अविवेकियोंको संसारधर्मयुक्त भास रहा है स्वस्वरूपमें स्थित वही ब्रह्म अन्यत्र (इन देहादिसे परे) नित्य विज्ञानघनस्वरूप और सम्पूर्ण संसार-धर्मोंसे रहित है। तथा जो अमुत्र—उस आत्मामें अर्थात् परमात्मभावमें स्थित है वही इस लोकमें नाम-रूप एवं कार्य-करणरूप उपाधिके अनुरूप भासनेवाला आत्मतत्त्व है; और कोर्इ नहीं। ऐसा होनेपर भी जो पुरुष उपाधिके स्वभाव और भेददृष्टिरूप अविद्यासे मोहित होकर इस अभिन्नभूत—एकरूप ब्रह्ममें ‘मैं परमात्मासे भिन्न हूँ और परमात्मा मुझसे भिन्न है’—इस प्रकार भिन्नवत् देखता है वह मृत्युसे मृत्युको अर्थात् बारम्बार जन्म-मरणभावको प्राप्त होता है। अत: ऐसी दृष्टि नहीं करनी चाहिये। बल्कि ‘मैं निर्बाधरूपसे आकाशके समान परिपूर्ण और विज्ञानैकरसस्वरूप ब्रह्म ही हूँ’ इस प्रकार देखे। यही इस वाक्यका अर्थ है॥ १० ॥",
     commentaryEnglish:"Yat eva iha, what, indeed, is here - that entity which, being associated with limiting adjuncts, viz the body and senses (i.e. as existing here in the individual), appears to the ignorant to be possessed of worldly attributes; tat, that-very entity, established in Its own reality, is; amutra, there-(existing in Its causal condition as) Brahman which is by nature a mass of constant consciousness and is devoid of all worldly attributes. And yat amutra, that which is there (in the causal condition), established in Itself; tat, that very thing; iha anu, (is) here likewise-appearing diversely in conformity with the limiting adjuncts such as name and form, body and senses; It is nothing else. This being so, yah, anyone who-being deluded by ignorance that consists in seeing differences that are natural to the limiting adjuncts; pasyati, sees, perceives; iha, herein Brahman, which is not a plurality; nand iva, as though there is difference - feels such differences as, `I am different from the supreme Self, and the supreme Brahman is different from me'; sah, he; apnoti, gets; mrtyoh mrtyum, death after death, he becomes subject to repeated birth and death. Therefore, one should not perceive like that; one should perceive thus: `I am, indeed, Brahman which is homogeneous consciousness and which pervades everything through and through like space.' This is the meaning of the sentence.",
     
  },
  {
     id:73,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"11",
     shlok:{
        line1:"मनसैवेदमाप्तव्यं नेह नानास्ति किंचन। \n मृत्यो: स मृत्युं गच्छति य इह नानेव पश्यति॥ ११ ॥",
        
     },
     translationHindi:"मनसे ही यह तत्त्व प्राप्त करने योग्य है। इस ब्रह्मतत्त्वमें नाना कुछ भी नहीं है। जो पुरुष इसमें नानात्व-सा देखता है वह मृत्युसे मृत्युको जाता है॥ ११ ॥ ",
     translationEnglish:"This is to be attained through the mind indeed. There is no diversity here whatsoever. He who sees as though there is difference here, goes from death to death.",
     commentaryHindi:"मनके द्वारा ही यह एकरस ब्रह्म ‘सब कुछ आत्मा ही है और कुछ नहीं है’ इस प्रकार प्राप्त करने योग्य है। इस प्रकार उसकी प्राप्ति हो जानेपर नानात्वको स्थापित करनेवाली अविद्याके निवृत्त हो जानेसे इस ब्रह्मतत्त्वमें किञ्चित्—अणुमात्र भी नानात्व नहीं रहता। किन्तु जो पुरुष अविद्यारूप तिमिररोगग्रस्त दृष्टिको नहीं त्यागता बल्कि नानात्व ही देखता है वह इस प्रकार थोड़ा-सा भी भेद आरोपित करनेसे मृत्युसे मृत्युको [अर्थात् जन्म-मरणको] प्राप्त होता ही है॥ ११ ॥",
     commentaryEnglish:"Before attaining the knowledge of unity, idam, this-Brahman which is homogeneous; aptavyam, is to be attained, as identical with the Self, there being nothing else existing; manasa, through the mind -which is purified by the teacher and the scriptures. And since ignorance that presents diversity ceases on this attainment, (therefore) iha, here-in the Brahman; nand, diversity; kimcana, even so little; na asti, does not exist. On the other hand, yah, he who-does not give up his vision of ignorance that is comparable to darkness; (and) ndna iva paiyati, sees as though there is diversity; sah, he; mrtyoh mrtyum gacchati, does (indeed) go from death to death, even by superimposing the slightest difference. This is the idea. The Upanisad again speaks of that very Brahman which is being discussed:",
     
  },
  {
     id:74,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"12",
     shlok:{
        line1:"अङ्गुष्ठमात्र: पुरुषो मध्य आत्मनि तिष्ठति। \n र्इशानो भूतभव्यस्य न ततो विजुगुप्सते। एतद्वै तत्॥ १२ ॥",
        
     },
     translationHindi:"जो अङ्गुष्ठपरिमाण पुरुष शरीरके मध्यमें स्थित है, उसे भूत, भविष्यत् [और वर्तमान]-का शासक जानकर वह उस (आत्माके ज्ञान)-के कारण अपने शरीरकी रक्षा करना नहीं चाहता; निश्चय यही वह (ब्रह्मतत्त्व) है॥ १२ ॥ ",
     translationEnglish:"The Being (Purusa), of the size of a thumb, resides in the body. Knowing Him as the ruler of the past and the future, one does not want, by virtue of that knowledge, to save the Self. This indeed is that.",
     commentaryHindi:"अङ्गुष्ठमात्र यानी अङ्गुष्ठपरिमाण; हृदयकमल अङ्गुष्ठके समान परिमाणवाला है; उसके छिद्रमें रहनेवाला जो अन्त:करणोपाधिक अङ्गुष्ठमात्र—अँगूठेके बराबर परिमाणवाले बाँसके पर्वमें स्थित आकाशके समान अङ्गुष्ठमात्र परिमाणवाला पुरुष शरीरके मध्यमें स्थित है—उससे सारा शरीर पूर्ण है, इसलिये वह पुरुष है—उस भूत-भविष्यत् कालके शासक आत्माको जानकर [ज्ञानी पुरुष अपनेको सुरक्षित रखनेकी इच्छा नहीं करता] इत्यादि शेष पदकी पूर्ववत् व्याख्या करनी चाहिये॥ १२ ॥",
     commentaryEnglish:"Ahgusthamatrah, of the size of a thumb: the lotus of the heart is of*the size of a thumb; (and) as conditioned by the internal organ existing in the space within the lotus of the heart, (the Self) has the size of a thumb, just like space existing in a section of a bamboo that is of the size of a thumb. Purusali means He by whom everything is filled. Knowing Him, who tisthati, stays, madhye dtmani, in the body; as the F.sdnaml bhutabhav_vasya, the ruler of the past and the future--of the three times. (The portion) na tatah etc. is to be explained as before (II. i. 5).    ",
     
  },
  {
     id:75,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"13",
     shlok:{
        line1:"अङ्गुष्ठमात्र: पुरुषो ज्योतिरिवाधूमक:। \n र्इशानो भूतभव्यस्य स एवाद्य स उ श्व:॥एतद्वै तत्॥.१३॥",
        
     },
     translationHindi:" यह अङ्गुष्ठमात्र पुरुष धूमरहित ज्योतिके समान है। यह भूत-भविष्यत्का शासक है। यही आज (वर्तमान कालमें) है और यही कल (भविष्यमें) भी रहेगा। और निश्चय यही वह (ब्रह्मतत्त्व) है॥ १३ ॥",
     translationEnglish:"The Purusa, who is of the size of a thumb, is like a light without smoke. He is the ruler of the past and the future. He exists today, and He will exist tomorrow. This indeed is that.",
     commentaryHindi:"वह अङ्गुष्ठमात्र पुरुष धूमरहित ज्योतिके समान है। मूल मन्त्रमें जो ‘अधूमक:’ पद है वह [नपुंसकलिङ्ग] ‘ज्योति:’ शब्दका विशेषण होनेके कारण ‘अधूमकम्’ ऐसा होना चाहिये। जो योगियोंको इस प्रकार हृदयमें लक्षित होता है वह भूत और भविष्यत्का शास्ता नित्य कूटस्थ आज—इस समय प्राणियोंमें वर्तमान है और वही कल भी रहेगा, अर्थात् उसके समान कोर्इ और पुरुष उत्पन्न नहीं होगा। इससे ‘कोर्इ कहते हैं कि यह नहीं है’ ऐसा [१। १। २० मन्त्रमें कहा हुआ] जो पक्ष है वह यद्यपि न्यायत: प्राप्त नहीं होता तथापि उसका और बौद्धोंके क्षणभङ्गवादका खण्डन भी श्रुतिने स्ववचनसे कर दिया है॥ १३ ॥",
     commentaryEnglish:"Moreover, ahgusthamdtrah purusah, the Purusa (the all-pervasive entity) of the size of a thumb; is jyotih iva adhumakah, like a smokeless light. Adhuma- kah should rather be adhumakam, since it qualifies jyotih which is neuter). He, who is perceived as such by the Yogis in their hearts, is the isdnah bhutabha- vyasya, lord of the past and the future. Sah, He, the eternal and unchanging; exists adj,a, now, in all beings ; u, and; sah, He; will exist svah, even tomorrow. The idea is that none equals Him now, nor will any be born in future (to do so). Though one of the alternatives, viz Some say that He does not exist (after death)' (I. i. 20), cannot logically arise, yet hereby it is refuted by the Upanisad itself in its own words, and so also is dismissed the theory of momentary existence. \n The Upanisad again presents a refutation of the perception of difference with regard to Brahman:",
     
  },
  {
     id:76,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"14",
     shlok:{
        line1:"यथोदकं दुर्गे वृष्टं पर्वतेषु विधावति। \n एवं धर्मान्पृथक्पश्यंस्तानेवानुविधावति॥ १४ ॥",
        
     },
     translationHindi:"जिस प्रकार ऊँचे स्थानमें बरसा हुआ जल पर्वतोंमें (पर्वतीय निम्न देशोंमें) बह जाता है उसी प्रकार आत्माओंको पृथक्-पृथक् देखकर जीव उन्हींको (भिन्नात्मत्वको ही) प्राप्त होता है॥ १४ ॥ ",
     translationEnglish:"As water rained on an inaccessible height gets dispersed on (lower) hilly regions, similarly, one who perceives the selves differently, runs after them only.",
     commentaryHindi:"जिस प्रकार दुर्ग—दुर्गम स्थान अर्थात् ऊँचार्इपर बरसा हुआ जल पर्वतों—पर्वतीय निम्न प्रदेशोंमें फैलकर नष्ट हो जाता है उसी प्रकार धर्मों अर्थात् आत्माओंको पृथक्—प्रत्येक शरीरमें भिन्न-भिन्न देखनेवाला मनुष्य उन्हीं—शरीरभेदका अनुसरण करनेवालोंकी ओर ही जाता है, अर्थात् बारम्बार भिन्न-भिन्न शरीरभेदको ही प्राप्त होता है॥ १४ ॥",
     commentaryEnglish:"Yatha, as; udakam, water; vrstam, poured; durge, on an inaccessible place, on a height; vidhavati, flows -being dispersed becomes dissipated; parvatesu, over hills, over hilly lower regions; evam, similarly; pasyan, seeing; dharman, the selves; prthak, differently- seeing It as different with respect to everybody; anuvidhavati, one runs after; tan eva, them only-those souls that conform to the different bodies. The meaning is that he assumes different bodies again and again. \n Now is being stated as to how the nature of the Self is attained by one who is a man of realization, for whom has been destroyed the perception of difference that is created by limiting adjuncts, who sees the non-dual Self which is a homogeneous mass of pure consciousness, and who is possessed of knowledge and is engaged in meditation: ",
     
  },
  {
     id:77,
     Part:" 2",
     Valli:" 1",
     mantraNumber:"15",
     shlok:{
        line1:"यथोदकं शुद्धे शुद्धमासिक्तं तादृगेव भवति। \n एवं मुनेर्विजानत आत्मा भवति गौतम॥ १५ ॥",
        
     },
     translationHindi:"जिस प्रकार शुद्ध जलमें डाला हुआ शुद्ध जल वैसा ही हो जाता है उसी प्रकार, हे गौतम! विज्ञानी मुनिका आत्मा भी हो जाता है॥ १५ ॥ ",
     translationEnglish:"O Gautama, as pure water poured on pure water becomes verily the same, so also does become the Self of the man of knowledge who is given to deliberation (on the Self).",
     commentaryHindi:"जो विद्यावान् है, जिसकी उपाधिकृत भेददृष्टि नष्ट हो गयी है और जो एकमात्र विशुद्धविज्ञानघनैकरस अद्वितीय आत्माको ही देखनेवाला है उस विज्ञानी मुनि—मननशीलका आत्मा कैसा होता है? यह बतलाया जाता है— एकत्वको जाननेवाले मुनि—मननशील पुरुषका आत्मा भी वैसा ही हो जाता है। अत: तात्पर्य यह है कि सभीको कुतार्किककी भेददृष्टि और नास्तिककी कुदृष्टिका परित्याग कर सहस्रों माता-पिताओंसे भी अधिक हितैषी वेदके उपदेश किये हुए आत्मैकत्व-दर्शनका ही अभिमानरहित होकर आदर करना चाहिये॥ १५ ॥",
     commentaryEnglish:"Yatha, as; suddham udakam, pure water; dsiktam, poured; suddhe, on pure (water); bhavati, becomes; tddrk eva, of that kind only, of the same quality and not anything else; atma, the Self , too; bhavati, becomes; evam, so; vijanatah. of one who knowsrealizes unity; muneh, of one who deliberates, O Gautama. Therefore, giving up the perception of duality that bad logicians have and the erroneous notions that the non-believers entertain, the people whose pride has been quelled should eagerly seek after the realization of the unity of the Self, which is inculcated by the Vedas that are more beneficent than thousands of fathers and mothers. This is the idea.",
     
  },
  {
     id:78,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"1",
     shlok:{
        line1:"पुरमेकादशद्वारमजस्यावक्रचेतस:। \n अनुष्ठाय न शोचति विमुक्तश्च विमुच्यते। एतद्वै तत्॥ १ ॥",
        
     },
     translationHindi:"उस नित्यविज्ञानस्वरूप अजन्मा [आत्मा]-का पुर ग्यारह दरवाजोंवाला है। उस [आत्मा]-का ध्यान करनेपर मनुष्य शोक नहीं करता, और वह [इस शरीरके रहते हुए ही कर्मबन्धनसे] मुक्त हुआ ही मुक्त हो जाता है। निश्चय यही वह [ब्रह्म] है॥ १ ॥ ",
     translationEnglish:"Of the unborn One, whose consciousness is unflickering, there is a city with eleven gates. Meditating (on Him), one does not grieve and, becoming freed, one becomes emancipated. This indeed is that.",
     commentaryHindi:"ब्रह्म अत्यन्त दुर्विज्ञेय है; अत: ब्रह्मतत्त्वका प्रकारान्तरसे फिर भी निश्चय करनेके लिये यह आगेका ग्रन्थ आरम्भ किया जाता है— [यह शरीररूप] पुर पुरके समान होनेसे पुर कहलाता है। द्वारपाल और अधिष्ठाता (हाकिम) आदि अनेकों पुरसम्बन्धी सामग्री दिखायी देनेके कारण शरीर पुर है। और जिस प्रकार सम्पूर्ण सामग्रीके सहित प्रत्येक पुर अपनेसे असंहत (बिना मिले हुए) स्वतन्त्र स्वामीके [उपभोगके] लिये देखा जाता है उसी प्रकार पुरसे सदृशता होनेके कारण यह अनेक सामग्री-सम्पन्न शरीर भी अपनेसे पृथक् राजस्थानीय अपने स्वामी [आत्मा]-के लिये होना चाहिये। यह शरीर नामक पुर ग्यारह दरवाजोंवाला है। [दो आँख, दो कान, दो नासारन्ध्र और एक मुख इस प्रकार] सात मस्तकसम्बन्धी, नाभिके सहित [शिश्न और गुदा मिलाकर] तीन निम्नदेशीय तथा [ब्रह्मरन्ध्ररूप] एक सिरमें रहनेवाला—इस प्रकार इन सभी द्वारोंसे [युक्त होनेके कारण] यह पुर एकादश द्वारवाला है। वह पुर किसका है? [इसपर कहते हैं—] अजका, अर्थात् पुरके धर्मोंसे विलक्षण जन्मादि विकाररहित राजस्थानीय आत्माका। इसके सिवा जो अवक्रचित्त है—जिसका चित्त— विज्ञान अवक्र—अकुटिल अर्थात् सूर्यके समान नित्यस्थित और एकरूप है उस अवक्रचेता राजस्थानीय ब्रह्मका [यह पुर है]। जिसका यह पुर है उस पुरस्वामी परमेश्वरका अनुष्ठान—ध्यान करके, क्योंकि सम्यग्विज्ञानपूर्वक ध्यान ही उसका अनुष्ठान है; अत: सम्पूर्ण एषणाओंसे मुक्त होकर उस सम—सम्पूर्ण भूतोंमें स्थित ब्रह्मका ध्यान कर पुरुष शोक नहीं करता। ब्रह्मके विज्ञानसे अभय-प्राप्ति होती है; अत: शोकका अवसर न रहनेके कारण भयदर्शन भी कहाँ हो सकता है? अत: वह इस लोकमें ही अविद्याकृत काम और कर्मके बन्धनोंसे मुक्त हो जाता है। इस प्रकार वह मुक्त (जीवन्मुक्त) हुआ ही मुक्त (विदेहमुक्त) होता है; अर्थात् पुन: शरीर ग्रहण नहीं करता॥ १ ॥",
     commentaryEnglish:"Puram, a city, i.e. comparable to a city: the body is a city, since in it we find an assemblage of such appendages of a city as gate-keepers, their commanders, etc., and a city, together with its paraphernalia, is seen to be meant for an independent owner (viz the king) who is not a constituent part of it'; similarly, since this body, consisting of an assemblage of various paraphernalia, has resemblance to a city, it must exist for an owner who takes the position of a king, but does not form a part of it. This city then, that is called a body, ekada. advaram, is possessed of eleven doors-seven in the head, three, inclusive of the navel, in the lower parts, and one on the (top of the) head; because of these, it is a city possessed of eleven doors. Of whom? Ajasva, of the birthless One -of the Self which is free from all modifications, such as birth etc., which occupies the place of the king, and which is dissimilar to the properties of the city; avakracetasah, of the One whose knowledge is not crooked - whose cetah, consciousness; is avakra. straight, verily present for ever like the light of the sun -i.e. of Brahman which is comparable to the king. Anusthdva, by meditating-after becoming entirely free from desires -on Him to whom this city belongs, on the supreme Lord who is the owner of the city--for, his anusthdna (lit. performance) consists in contemplation with a view to complete knowledge' ; by contemplating on Him as residing equally in all beings, na socati, one does not grieve. How can there be any vision of fear, since there is no occasion for sorrow after the attainment of fearlessness resulting from His realization? Even here, (while still living), he becomes vimuktah, freefree from the bondage of desire and duty, created by ignorance; vimuktah ca, and having become free (while still living); vimucvate, he becomes emancipated, i.e. he does not take up a body again.But He (the Self) does not reside in the city of one body only. What then? He exists in all the cities. How?",
     
  },
  {
     id:79,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"2",
     shlok:{
        line1:"हँस: शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत्। \n नृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत्॥ २ ॥",
        
     },
     translationHindi:"वह गमन करनेवाला है, आकाशमें चलनेवाला सूर्य है, वसु है, अन्तरिक्षमें विचरनेवाला सर्वव्यापक वायु है, वेदी (पृथिवी)-में स्थित होता (अग्नि) है, कलशमें स्थित सोम है। इसी प्रकार वह मनुष्योंमें गमन करनेवाला, देवताओंमें जानेवाला, सत्य या यज्ञमें गमन करनेवाला, आकाशमें जानेवाला, जल, पृथिवी, यज्ञ और पर्वतोंसे उत्पन्न होनेवाला तथा सत्यस्वरूप और महान् है॥ २ ॥ ",
     translationEnglish:" As the moving (sun) He dwells in heaven; (as air) He pervades all and dwells in the inter-space; as fire He resides on the earth; as Soma He stays in a jar; He lives among men; He lives among gods; He dwells in truth; He dwells in space; He is born in water; He takes birth from the earth; He is born in the sacrifice; He emerges from the mountains; He is unchanging; and He is great.",
     commentaryHindi:"परन्तु वह आत्मा तो केवल एक ही शरीररूप पुरमें रहनेवाला नहीं है, बल्कि सभी पुरोंमें रहता है। किस प्रकार रहता है? [सो कहते हैं—] वह गमन करता है इसलिये ‘हंस’ है, शुचि—आकाशमें सूर्यरूपसे चलता है इसलिये ‘शुचिषत्’ है, सबको व्याप्त करता है इसलिये ‘वसु’ है, वायुरूपसे आकाशमें चलता है इसलिये ‘अन्तरिक्षसत्’ है, “अग्नि ही होता है” इस श्रुतिके अनुसार ‘होता’ अग्निको कहते हैं, वेदी—पृथिवीमें गमन करता है अत: ‘वेदिषद्’ है, जैसा कि “यह वेदी पृथिवी (यज्ञभूमि)-का उत्कृष्ट मध्यभाग है” इत्यादि मन्त्रवर्णसे प्रमाणित होता है। यह अतिथि—सोम होकर दुरोण— कलशमें स्थित होता है इसलिये ‘दुरोणसत्’ है। अथवा ब्राह्मण अतिथि-रूपसे दुरोण—घरोंमें रहता है, इसलिये वही ‘अतिथि: दुरोणसत्’ है। वह मनुष्योंमें जाता है इसलिये ‘नृषत्’ है, वर—देवताओंमें जाता है इसलिये ‘वरसत्’ है, ऋत—सत्य अथवा यज्ञको कहते हैं उसमें गमन करता है इसलिये ‘ऋतसत्’ है, व्योम—आकाशमें चलता है इसलिये ‘व्योमसत्’ है। अप्—जलमें शंख, सीपी और मकर आदि रूपोंसे उत्पन्न होता है इसलिये ‘अब्जा’ है। गो—पृथिवीमें व्रीहि—यवादिरूपसे उत्पन्न होता है इसलिये ‘गोजा’ है। ऋत—यज्ञाङ्गरूपसे उत्पन्न होता है इसलिये ‘ऋतजा’ है। नदी आदिरूपसे अद्रि— पर्वतोंसे उत्पन्न होता है इसलिये ‘अद्रिजा’ है। इस प्रकार सर्वात्मा होकर भी वह ऋत— अवितथस्वभाव (सत्य-स्वरूप) ही है तथा सबका कारण होनेसे बृहत्—महान् है। [‘असौ वा आदित्यो हंस:.....’ इत्यादि ब्राह्मणमन्त्रके अनुसार] यदि इस मन्त्रसे आदित्यका ही वर्णन किया गया हो तो भी ‘आदित्य* [इस चराचरके] आत्मस्वरूप है’, ऐसा अङ्गीकृत होनेके कारण इसका उस ब्राह्मणग्रन्थकी व्याख्यासे भी अविरोध ही है। अत: इस मन्त्रका तात्पर्य यही है कि जगत्का एक ही सर्वव्यापक आत्मा है, आत्माओंमें भेद नहीं है॥ २ ॥",
     commentaryEnglish:" (As) hamsah, a mover - derived from the root ham, meaning to go ; He is iucisat-derived from iuci, pure, and sad, to live-a dweller, as the sun, in heaven which is pure. Vasuh (air), derived from the causative form of the root vas, means one who provides a dwelling for all'. As air, He is antarik- sasat, a dweller in the intermediate space. As hots, (meaning) fire-because of the Vedic text, `Fire, indeed, is hots' (Cit. III. 1. VII. 1); (He is) vedisat- a resider (sat) on the vedi, the earth - because of the mantra which begins with, This vedi (sacrificial altar) is the highest state of the earth' (R. II. iii. 20). Atithih (san), as the Soma juice; (He is) duronasat, a dweller in a jar (durona); or as a Brahmana guest, He dwells in houses (durona). (He is) nrsat, a dweller among men; varasat, a dweller among the adorable onesthe gods; rtasat, a dweller in rta, i.e. truth or sacri fice; vyomasat, a dweller in the vyoma (space); abjah -derived from ap (water) and ja (to be born) - born in water, as conch, mother of pearl, makara (a sea animal), etc.; gojah, born on earth (go), as paddy, barely, etc. ; rtajah, born in the sacrifice (rta), as its appendages; adrijah, born from mountains (adri), as rivers etc.; although He is the Self of all, He is verily rtam, unchanging in nature; (and) brhat, great - being the cause of all. Even if it be a fact that the sun is spoken of in this verse (and not the Self), still, as the sun is regarded in reality as the Self, there is no contradiction with the brahmana which explains that way.I The meaning of this verse is that the world has but one Self which is all-pervasive, and that there is no plurality of selves. \n  A (logical) basis is being provided for comprehending the nature of the Self:",
     
  },
  {
     id:80,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"3",
     shlok:{
        line1:"ऊर्ध्वं प्राणमुन्नयत्यपानं प्रत्यगस्यति। \n मध्ये वामनमासीनं विश्वे देवा उपासते॥ ३ ॥",
        
     },
     translationHindi:"जो प्राणको ऊपरकी ओर ले जाता है और अपानको नीचेकी ओर ढकेलता है, हृदयके मध्यमें रहनेवाले उस वामन—भजनीयकी सब देव उपासना करते हैं॥ ३ ॥ ",
     translationEnglish:"All deities worship that adorable One sitting in the middle, who pushes the prana upward and impels the apana inwara.",
     commentaryHindi:"जो हृदयदेशसे प्राण—प्राणवृत्तिरूप वायुको ऊर्ध्व—ऊपरकी ओर ले जाता है तथा अपानको प्रत्यक्—नीचेकी ओर ढकेलता है। इस वाक्यमें ‘य: (जो)’ यह पद शेष रह गया है, हृदय-कमलाकाशके भीतर रहनेवाले उस वामन अर्थात् भजनीयकी, जिसका विज्ञानरूप प्रकाश बुद्धिमें अभिव्यक्त होता है, चक्षु आदि सभी देव—इन्द्रियाँ और प्राण रूप-रसादि विज्ञानरूप कर देते हुए इस प्रकार उपासना करते हैं जैसे वैश्यलोग राजाकी। अर्थात् वे चक्षु आदि उसके ही लिये अपना व्यापार बन्द नहीं करते। अत: जिसके लिये और जिसकी प्रेरणासे प्राण और इन्द्रियोंके समस्त व्यापार होते हैं वह उनसे अन्य है—ऐसा सिद्ध हुआ। यही इस वाक्यका अर्थ है॥ ३ ॥",
     commentaryEnglish:"The word yah, he who, is to be supplied. He who unnayati, leads higher up; urdhvam, upward - from the heart; pranam, the air functioning as exhalation; similarly, pratyak asyati, thrusts inward, downward; apanam, the air functioning as inhalation; that vamanam, adorable One; madhye asinam, sitting in the middle-sitting in the space inside the lotus of the heart, shining in the intellect as revealed knowledge; visve, all; devah, deities-the organs such as the eye etc.; upasate, worship-by carrying to Him presents in the form of perception of colour etc., just as the subjects do to a king. The idea is that they never cease from activity meant for Him. The purport of the sentence is that He for whom, and under whose direction, exist all the activities of the organs and the vital force, is proved to be different from them.    ",
     
  },
  {
     id:81,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"4",
     shlok:{
        line1:"अस्य विस्रंसमानस्य शरीरस्थस्य देहिन:। \n देहाद्विमुच्यमानस्य किमत्र परिशिष्यते॥एतद्वै तत्॥ ४ ॥",
        
     },
     translationHindi:"इस शरीरस्थ देहीके भ्रष्ट हो जानेपर—इस देहसे मुक्त हो जानेपर भला इस शरीरमें क्या रह जाता है? [अर्थात् कुछ भी नहीं रहता] यही वह [ब्रह्म] है॥ ४ ॥ ",
     translationEnglish:"When this dweller in the body becomes detached, when He is freed from this body, what else remains here (in this body)? This indeed is that.",
     commentaryHindi:"इस शरीरस्थ देही—देहवान् आत्माके विस्रंसमान—अवस्रंसमान अर्थात् भ्रष्ट हो जानेपर इस प्राणादि समुदायमेंसे भला क्या रह जाता है? अर्थात् कुछ भी नहीं रहता। ‘देहाद्विमुच्यमानस्य’ ऐसा कहकर विस्रंसन शब्दका अर्थ बतलाया गया है। नगरके स्वामीके चले जानेपर जैसे पुरवासियोंकी दुर्दशा होती है उसी प्रकार इस शरीरमें, जिस आत्माके चले जानेपर, एक क्षणमें ही यह भूत और इन्द्रियोंका समुदायरूप सब-का-सब बलहीन—विध्वस्त अर्थात् नष्ट हो जाता है वह इससे भिन्न ही सिद्ध होता है॥ ४ ॥",
     commentaryEnglish:"Moreover, asya dehinah sarirasthasya, of this embodied one (the Self) that is in the body; vis- ramsamanasya, as It gets loosened, detached. The meaning of the word visrarhsana (loosening) is being given : dehad vimucyamanasya, as It gets freed from the body; kim atrapariiisyate, what else remains here-in this group of vital force etc.? Nothing remains here in this body. That Self is proved to be different (from the body etc.), on whose departure all this aggregate of body and senses becomes instantaneously powerless, defunct, and destroyed, just as it happens in the case of the citizens when the lord of the city retreats. \n The opinion may be held that this body gets destroyed only on the departure of the prana, apana, etc., but not owing to the exit of the Self that is distinct from them; for a man lives only by prana and the rest. But this is not so : ",
     
  },
  {
     id:82,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"5",
     shlok:{
        line1:"न प्राणेन नापानेन मर्त्यो जीवति कश्चन। \n इतरेण तु जीवन्ति यस्मिन्नेतावुपाश्रितौ॥ ५ ॥",
        
     },
     translationHindi:"कोर्इ भी मनुष्य न तो प्राणसे जीवित रहता है और न अपानसे ही। बल्कि वे तो, जिसमें ये दोनों आश्रित हैं ऐसे किसी अन्यसे ही जीवित रहते हैं॥ ५ ॥ ",
     translationEnglish:"No mortal lives by prana or apana; but all live by something else due to which these two find asylum.",
     commentaryHindi:"यदि कोर्इ ऐसा माने कि यह शरीर, प्राण और अपान आदिके चले जानेसे ही नष्ट हो जाता है, उनसे भिन्न किसी आत्माके जानेसे नहीं, क्योंकि प्राणादिके कारण ही मनुष्य जीवित रहता है—तो ऐसी बात नहीं है, [क्योंकि—] कोर्इ भी मर्त्य—मनुष्य अर्थात् देहधारी न तो प्राणसे जीवित रहता है और न अपान अथवा चक्षु आदि इन्द्रियोंसे ही, क्योंकि परस्पर मिलकर प्रवृत्त होनेवाले तथा किसी दूसरेके शेषभूत ये इन्द्रिय आदि जीवनके हेतु नहीं हो सकते। लोकमें किसी स्वतन्त्र और बिना मिले हुए अन्य [चेतन पदार्थ]-की प्रेरणाके बिना गृह आदि संहत पदार्थोंकी स्थिति नहीं देखी गयी; उसी तरह संघातरूप होनेसे प्राणादिकी स्थिति भी स्वतन्त्र नहीं हो सकती। अत: ये सब परस्पर मिलकर प्राणादि संहत पदार्थोंसे भिन्न किसी अन्यके द्वारा ही जीवित रहते—प्राण धारण करते हैं, जिस संहत पदार्थ भिन्न सत्स्वरूप परमात्माके रहते हुए ही यह प्राण-अपान-चक्षु आदिसे संहत होकर आश्रित हैं; तात्पर्य यह है कि जिस असंहत आत्माके लिये प्राण-अपान आदि संहत होकर अपने व्यापारोंको करते हुए बर्तते हैं वह आत्मा उनसे भिन्न सिद्ध होता है॥ ५ ॥",
     commentaryEnglish:"Na pranena na apanena, neither through the function of exhaling nor through that of inhaling -nor by the eye and the rest; kah cana martyah, any human being; jivati, lives; nobody lives. Inasmuch as these are meant for somebody else and act jointly, they cannot be the source of life. Composite things like houses etc. are not seen to exist in this world, unless this existence is brought about by someone for his own benefit, who is not part of the assemblage. This should be so in the case of prana etc. too, since they also form a combination. Therefore, all these jivanti, live, maintain life, having been combined by someone else who is dissimilar to the prana etc. which con stitute the group. Yasmin, due to which -due to the existence of which supreme Self that is different from the combination ; etau, these two -prana and apana, in combination with eye etc.; upasritau, find asylums; and for the benefit of which uncombined Self, prana, apana, etc. exist as a combination, performing their own functions-that Self is established to be distinct from them. This is the purport.",
     
  },
  {
     id:83,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"6",
     shlok:{
        line1:"हन्त त इदं प्रवक्ष्यामि गुह्यं ब्रह्म सनातनम्। \n यथा च मरणं प्राप्य आत्मा भवति गौतम॥ ६ ॥",
        
     },
     translationHindi:" हे गौतम! अब मैं फिर भी तुम्हारे प्रति उस गुह्य और सनातन ब्रह्मका वर्णन करूँगा, तथा [ब्रह्मको न जाननेसे] मरणको प्राप्त होनेपर आत्मा जैसा हो जाता है [वह भी बतलाऊँगा]॥ ६ ॥",
     translationEnglish:"Well, O Gautama, I shall tell you of this secret, eternal Brahman; and also how the Self fares after death.",
     commentaryHindi:"अहो! अब मैं तुम्हें फिर भी इस गुह्य—गोपनीय सनातन—चिरन्तन ब्रह्मके विषयमें बतलाऊँगा, जिसके ज्ञानसे सम्पूर्ण संसारकी निवृत्ति हो जाती है तथा जिसका ज्ञान न होनेपर मरणको प्राप्त होनेके अनन्तर आत्मा जैसा हो जाता है, अर्थात् वह जिस प्रकार [जन्म-मरणरूप] संसारको प्राप्त होता है, हे गौतम! वह सुन॥ ६ ॥",
     commentaryEnglish:"Hanta, well, now again; te, to you ; pravaksyami, I shall tell; of idam, this; guhyam, secret; sanatanam brahma, everlasting Brahman; through the knowledge of which comes about a cessation of all worldly existence, and through the ignorance of which, yatha, how ; alma, the soul; bhavati, fares, how it transmigrates; maranam prapya, after death. That you hear, O Gautama.",
     
  },
  {
     id:84,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"7",
     shlok:{
        line1:"योनिमन्ये प्रपद्यन्ते शरीरत्वाय देहिन:। \n स्थाणुमन्येऽनुसंयन्ति यथाकर्म यथाश्रुतम्॥ ७ ॥",
        
     },
     translationHindi:"अपने कर्म और ज्ञानके अनुसार कितने ही देहधारी तो शरीर धारण करनेके लिये किसी योनिको प्राप्त होते हैं और कितने ही स्थावर-भावको प्राप्त हो जाते हैं॥ ७ ॥ ",
     translationEnglish:"Some souls enter the womb for acquiring bodies and others follow the motionless, in accordance with their work and in conformity with their knowledge.",
     commentaryHindi:"अन्य—कुछ अविद्यावान् मूढ देहधारी शरीर धारण करनेके लिये वीर्यरूप बीजसे संयुक्त होकर योनि—योनिद्वारको प्राप्त होते हैं अर्थात् किसी योनिमें प्रविष्ट हो जाते हैं। दूसरे कोर्इ अत्यन्त अधम पुरुष मरणको प्राप्त होकर [यथाकर्म और यथाश्रुत] स्थाणु यानी वृक्षादि स्थावर-भावका अनुवर्तन—अनुगमन करते हैं। तात्पर्य यह कि यथाकर्म यानी जिसका जो कर्म है अथवा इस जन्ममें जिसने जैसा कर्म किया है उसके अधीन होकर तथा यथाश्रुत यानी जिसने जैसा विज्ञान उपार्जित किया है उसके अनुरूप शरीरको ही प्राप्त होते हैं। “जन्म अपनी-अपनी बुद्धिके अनुसार हुआ करते हैं” ऐसी एक दूसरी श्रुतिसे भी यही प्रमाणित होता है॥ ७ ॥",
     commentaryEnglish:"Anye dehinah, some souls, some embodied onessome ignorant fools; yonim prapadyante, enter into the womb; sariratvaya, for assuming bodies. Anye, others-the extremely inferior ones; after death, anusathyanti, follow; sthanum, the state of motionless things like trees etc.; yathakarma, in accordance as each one's work is - i.e. under the impulsion of the (fruits of) works they have accomplished in this life; similarly, too, yathasrutam, in conformity with the nature of knowledge acquired. The idea is that they take bodies accordingly; for another Vedic text says: Creatures are born in accordance with their knowledge.\n The Upanisad speaks of the secret Brahman about which it was promised, `I shall tell':",
     
  },
  {
     id:85,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"8",
     shlok:{
        line1:"य एष सुप्तेषु जागर्ति कामं कामं पुरुषो निर्मिमाण:। \n तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते। तस्मिँल्लोका: श्रिता: सर्वे तदु नात्येति कश्चन। एतद्वै तत्॥ ८ ॥",
        
     },
     translationHindi:"प्राणादिके सो जानेपर जो यह पुरुष अपने इच्छित पदार्थोंकी रचना करता हुआ जागता रहता है वही शुक्र (शुद्ध) है, वह ब्रह्म है और वही अमृत कहा जाता है। उसमें सम्पूर्ण लोक आश्रित हैं; कोर्इ भी उसका उल्लङ्घन नहीं कर सकता। निश्चय यही वह [ब्रह्म] है॥ ८ ॥ ",
     translationEnglish:"That Purusa indeed, who keeps awake and goes on creating desirable things even when the senses fall asleep, is pure; and He is Brahman, and He is called the Immortal. All the worlds are fixed on Him; none can transcend Him. This indeed is that.",
     commentaryHindi:"जो यह प्राणादिके सो जानेपर जागता रहता है—[उनके साथ] सोता नहीं है। किस प्रकार जागता रहता है? [इसपर कहते हैं—] अविद्याके योगसे स्त्री आदि अपने-अपने इच्छित—अभीष्ट पदार्थोंकी रचना करता हुआ अर्थात् उन्हें निष्पन्न करता हुआ जागता है वही शुक्र—शुभ्र यानी शुद्ध है। वह ब्रह्म है, उससे भिन्न और कोर्इ गुह्य ब्रह्म नहीं है। वही सब शास्त्रोंमें अमृत—अविनाशी कहा गया है। यही नहीं, उस ब्रह्ममें ही पृथिवी आदि सम्पूर्ण लोक आश्रित हैं, क्योंकि वह सभी लोकोंका कारण है। उसका कोर्इ भी अतिक्रमण नहीं कर सकता [निश्चय यही वह ब्रह्म है] इत्यादि [आगेकी व्याख्या] पूर्ववत् समझनी चाहिये॥ ८ ॥",
     commentaryEnglish:"Yah esah, He who; jagarti, keeps awake and does not sleep; suptesu, when prana etc. are asleep. How? Nirmimanah, creating-through ignorance; kamam kamam, each of those desirable thingssuch desirable things as woman etc. Purusah, the Purusa (all-pervading Brahman)-who keeps awake while accomplishing these; tat eva, that (Purusa) indeed; is sukram, white, pure; tat Brahma, that is Brahman-there is no other secret Brahman. Tat eva, that indeed; amrtam ucyate, is called the indestructible-in all the scriptures. Moreover, sarve lokah, all the worlds --such as the earth etc.; tasmin, on It - on Brahman; sritah, are supported-for It is the source of all the worlds. The text tat u natyeti kaicana etc. is to be explained as before (in II. i. 9). \n Since the knowledge of the unity of the Self, though validated by proof and reiterated more than once, does not find a lodging in the hearts of those Brahmanas of insincere intellect, whose minds are swayed by the perverted intellect of numerous logicians, therefore the Upanisad, being eager to inculcate it, says again and again:",
     
  },
  {
     id:86,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"9",
     shlok:{
        line1:"अग्निर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव। \n एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च॥ ९ ॥",
        
     },
     translationHindi:"जिस प्रकार सम्पूर्ण भुवनमें प्रविष्ट हुआ एक ही अग्नि प्रत्येक रूप (रूपवान् वस्तु)-के अनुरूप हो गया है उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा उनके रूपके अनुरूप हो रहा है तथा उनसे बाहर भी है॥ ९ ॥ ",
     translationEnglish:"Just as fire, though one, having entered the world, assumes separate forms in respect of different shapes, similarly, the Self inside all beings, though one, assumes a form in respect of each shape; and (yet) It is outside.",
     commentaryHindi:"अनेक तार्किकोंकी कुबुद्धिद्वारा जिनका चित्त चञ्चल कर दिया गया है, अत: जिनकी बुद्धि सरल नहीं है उन ब्राह्मणोंके चित्तमें, प्रमाणसे युक्त सिद्ध होनेपर भी, आत्मैकत्व-विज्ञान बारम्बार कहे जानेपर भी स्थिर नहीं होता। अत: उसके प्रतिपादनमें आदर रखनेवाली श्रुति पुन:-पुन: कहती है— जिस प्रकार एक ही अग्नि प्रकाशस्वरूप होकर भी भुवनमें—इसमें सब जीव होते हैं इसीसे इस लोकको ‘भुवन’ कहते हैं, उसी इस लोकमें अनुप्रविष्ट हुआ रूप-रूपके प्रति अर्थात् काष्ठ आदि भिन्न-भिन्न प्रत्येक दाह्य पदार्थके प्रति प्रतिरूप—उस-उस पदार्थके अनुरूप हुआ दाह्य-भेदसे अनेक प्रकारका हो गया है उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा—आन्तरिक आत्मा अत्यन्त सूक्ष्म होनेके कारण काष्ठादिमें प्रविष्ट हुए अग्निके समान सम्पूर्ण शरीरोंमें प्रविष्ट रहनेके कारण उनके अनुरूप हो गया है तथा आकाशके समान अपने अविकारी रूपसे उसके बाहर भी है॥ ९ ॥",
     commentaryEnglish:"Yathd, as; agnih, fire; though bright by nature and only ekah, one; pravistah, having entered; bhuvanam -- derived from the root bhu (to be), in the sense of a place where creatures come into being, the word means - this world; rupam rupam prati, in conformity with each form, i.e. in respect of the difference of combustible substances, such as wood etc.; babhuva, became; pratirupah, multiformed, assuming the respective shapes of those different fuels; tathd, similarly; sarvabhutdntardtmd, the Self that is inside all beings-by virtue of Its subtleness, like fire in fuels etc.; though only ekah, one; has become pratirupah, formed in accordance with the individual shapes-in respect of all bodies, owing to Its entry there; bahih ca, and (yet) It is outside-in Its own unmodified form, just like space.Similarly there is another illustration:",
     
  },
  {
     id:87,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"10",
     shlok:{
        line1:"वायुर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव। \n एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च॥ १० ॥",
        
     },
     translationHindi:"जिस प्रकार इस लोकमें प्रविष्ट हुआ वायु प्रत्येक रूपके अनुरूप हो रहा है उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा प्रत्येक रूपके अनुरूप हो रहा है और उनसे बाहर भी है॥ १० ॥ ",
     translationEnglish:"As air, though one, having entered into this world, assumes separate forms in respect of different shapes, similarly, the Self inside all beings, though one, assumes a form in respect of each shape; and (yet) It is outside.",
     commentaryHindi:"जिस प्रकार एक ही वायु प्राणरूपसे देहोंमें अनुप्रविष्ट होकर प्रत्येक रूपके अनुरूप हो रहा है [उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा प्रत्येक रूपके अनुरूप हो रहा है] इत्यादि पूर्ववत् ही समझना चाहिये॥ १० ॥",
     commentaryEnglish:"Yatha, as; vayuh, air-in the form of vital force; having entered into the bodies; rupam rupam prati- rupah babhuva etc. is to be explained as before. \n Since the contingency arises that if a single entity is the Self of all, then the sorrowfulness of the world will belong to the supreme Brahman Itself, (therefore) this is being said:",
     
  },
  {
     id:88,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"11",
     shlok:{
        line1:"सूर्यो यथा सर्वलोकस्य चक्षु- र्न लिप्यते चाक्षुषैर्बाह्यदोषै:। \n एकस्तथा सर्वभूतान्तरात्मा न लिप्यते लोकदु:खेन बाह्य:॥ ११ ॥",
        
     },
     translationHindi:"जिस प्रकार सम्पूर्ण लोकका नेत्र होकर भी सूर्य नेत्रसम्बन्धी बाह्यदोषोंसे लिप्त नहीं होता उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा संसारके दु:खसे लिप्त नहीं होता, बल्कि उनसे बाहर रहता है॥ ११ ॥ ",
     translationEnglish:" Just as the sun, which is the eye of the whole world, is not tainted by the ocular and external defects, similarly, the Self, that is but one in all beings, is not tainted by the sorrows of the world, It being transcendental.",
     commentaryHindi:"जिस प्रकार सूर्य अपने प्रकाशसे लोकका उपकार करता हुआ अर्थात् मल-मूत्र आदि अपवित्र वस्तुओंको प्रकाशित करनेके कारण उन्हें देखनेवाले समस्त लोकोंका नेत्ररूप होकर भी अपवित्र पदार्थादिके देखनेसे प्राप्त हुए आध्यात्मिक पापदोष तथा अपवित्र पदार्थोंके संसर्गसे होनेवाले बाह्यदोषोंसे लिप्त नहीं होता उसी प्रकार सम्पूर्ण भूतोंका एक ही अन्तरात्मा भी लोकके दु:खसे लिप्त नहीं होता, प्रत्युत उससे बाहर रहता है। लोक अपने आत्मामें आरोपित अविद्याके कारण ही कामना और कर्मजनित दु:खका अनुभव करता है। किन्तु वह [अविद्या] परमार्थत: स्वात्मामें है नहीं, जिस प्रकार कि रज्जु, शुक्ति, मरुस्थल और आकाशमें [प्रतीत होनेवाले] सर्प, रजत, जल और मलिनता—ये उन रज्जु आदिमें स्वाभाविक दोषरूप नहीं हैं बल्कि उनके संसर्गमें आये हुए पुरुषमें विपरीत बुद्धिका अध्यास होनेके कारण ही वे उन-उन दोषोंसे युक्त प्रतीत होते हैं। किन्तु उन दोषोंसे उनका लेप नहीं होता, क्योंकि वे तो उस विपरीत बुद्धिजनित अध्याससे बाहर ही हैं। इसी प्रकार सम्पूर्ण लोक भी [रज्जु आदिमें अध्यस्त] सर्पादिके समान अपने आत्मामें क्रिया, कारक और फलरूप विपरीत ज्ञानका आरोप कर उसके निमित्तसे होनेवाले जन्म-मरण आदि दु:खका अनुभव करता है। आत्मा तो सम्पूर्ण लोकका अन्तरात्मा होकर भी विपरीत अध्यारोपसे होनेवाले लौकिक दु:खसे लिप्त नहीं होता। क्यों नहीं होता? क्योंकि वह उससे बाहर है—अर्थात् रज्जु आदिके समान वह विपरीत बुद्धिजनित अध्याससे बाहर ही है॥ ११ ॥",
     commentaryEnglish:"Yatha, as; suryah, the sun; even though by virtue of helping the eyes through its light, and illuminating such impure things as urine, ordure, etc., becomes sarvalokasya caksuh, the eye of all the people -who see those things; still na lipyate, it is not tainted; caksusaih bahyadosaih, by the ocular and external blemishes-(by ocular faults), physical lapses amounting to sin, which are caused by the sight of impurity etc.; and by (external faults consisting in) the contact with impurity etc; tatha, similarly; (He who) though ekah, one; is sarl'abhutantaratma, the Self inside all; na lipyate lokaduhkhena, is not tainted by sorrows of the world; (since He is) bahyah, transcendental. For, it is through ignorance superimposed on the Self that people suffer the sorrows arising from desire and work. But that ignorance does not really inhere in one's Self just as the snake, the silver, the water, and the dirt, superimposed on a rope, a mother of pearl, a desert, and the sky (respectively), do not in reality exist as the distortions of the rope etc. But they appear as the defects of those things (rope etc.) because of the superimposition of false notions on the substances (rope etc.) that provide the bases for them.' They (the substances) are not tainted by those faults, for they are outside the notions thus falsely superimposed. Similarly, people, after having superimposed on the Self the false notions of actions, agent, and fruit, like that of a snake (on a rope), experience the misery of birth, death, etc., consequent on that superimposition; but the Self, though It is the Self of all, is not tainted by the sorrow of the world arising from false superimposition. Why? (Because It is) outside. For just like the rope etc., It is extraneous to the superimposition of false notion.    ",
     
  },
  {
     id:89,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"12",
     shlok:{
        line1:"एको वशी सर्वभूतान्तरात्मा एकं रूपं बहुधा य: करोति। \n तमात्मस्थं येऽनुपश्यन्ति धीरा- स्तेषां सुखं शाश्वतं नेतरेषाम्॥ १२ ॥",
        
     },
     translationHindi:"जो एक, सबको अपने अधीन रखनेवाला और सम्पूर्ण भूतोंका अन्तरात्मा अपने एक रूपको ही अनेक प्रकारका कर लेता है, अपनी बुद्धिमें स्थित उस आत्मदेवको जो धीर (विवेकी) पुरुष देखते हैं उन्हींको नित्यसुख प्राप्त होता है, औरोंको नहीं॥ १२ ॥ ",
     translationEnglish:"Eternal peace is for those-and not for others-who are discriminating and who realize in their hearts Him who-being one, the controller, and the inner Self of all-makes a single form multifarious.",
     commentaryHindi:"वह स्वतन्त्र और सर्वगत परमेश्वर एक है। उसके समान अथवा उससे बड़ा और कोर्इ नहीं है। वह वशी है, क्योंकि सारा जगत् उसके अधीन है। उसके अधीन क्यों है? [इसपर कहते हैं—] क्योंकि वह सम्पूर्ण भूतोंका अन्तरात्मा है। इस प्रकार जो अचिन्त्यशक्तिसम्पन्न होनेके कारण अपने एक—नित्य एकरस विशुद्ध-विज्ञानस्वरूप आत्माको नामरूप आदि अशुद्ध उपाधिभेदके कारण अपनी सत्तामात्रसे बहुधा—अनेक प्रकारका कर लेता है, उस आत्मस्थ अर्थात् अपने शरीरस्थ हृदयाकाश यानी बुद्धिमें चैतन्यस्वरूपसे अभिव्यक्त हुए [आत्माको जो लोग देखते हैं उन्हींको नित्यसुख प्राप्त होता है]। आकाशके समान अमूर्तिमान् होनेसे आत्माका आधार शरीर नहीं है [अर्थात् आत्मा निराधार है]। जैसे दर्पणमें प्रतिबिम्बित मुखका आधार दर्पण नहीं है। जिनकी बाह्य वृत्तियाँ निवृत्त हो गयी हैं ऐसे जो धीर—विवेकी पुरुष उस ईश्वर—आत्माको देखते हैं— आचार्य और शास्त्रका उपदेश पानेके अनन्तर उसका साक्षात् अनुभव करते हैं उन परमात्मस्वरूपताको प्राप्त हुए पुरुषोंको ही आत्मानन्दरूप शाश्वत—नित्यसुख प्राप्त होता है। किन्तु दूसरे जो बाह्य पदार्थोंमें आसक्तचित्त अविवेकी पुरुष हैं उन्हें यह सुख स्वात्मभूत होनेपर भी अविद्यारूप व्यवधानके कारण प्राप्त नहीं हो सकता॥ १२ ॥",
     commentaryEnglish:"Moreover, He indeed is the supreme Lord, allpervasive, independent, and ekah, one; there is none equal to or greater than Him. (He is) vasi, the controller-for the whole universe is under His control. Why? Because (He is) sarvabhutantaratma, the Self in all beings. Ye dhirdh, those discriminating people who-those who have ceased from external activities; anupasyanti, (who) realize directly-as a result of the pursuance of the instruction of the teacher-realize that God who is the Self; yah, who, because of His inscrutable power; karoti, makes- by His mere existence; (His) ekam rupam, one form - His own Self that is homogeneous and consists of unalloyed consciousness; bahudha, diverse-through the differences in the impure conditions of name and form ; (those who realize) tam atmastham, Him as residing in the space of the heart within the body, i.e. as manifested as knowledge in the intellect, like a face appearing to exist in a mirror, it being impossible for the body to be the receptacle of the Self that is formless like space; tesam, for them, who have become identified with the supreme Lord; is .easvatam sukham, eternal happiness--consisting in the blissfulness of the Self; na itaresam, not for others, for those non-discriminating people whose intellects are attached to external things; because, though Bliss is their very Self, (they do not get it) owing to the obstruction of ignorance.",
     
  },
  {
     id:90,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"13",
     shlok:{
        line1:"नित्योऽनित्यानां चेतनश्चेतनाना- मेको बहूनां यो विदधाति कामान्। \n तमात्मस्थं येऽनुपश्यन्ति धीरा- स्तेषां शान्ति: शाश्वती नेतरेषाम्॥ १३ ॥",
        
     },
     translationHindi:"जो अनित्य पदार्थोंमें नित्यस्वरूप तथा ब्रह्मा आदि चेतनोंमें चेतन है और जो अकेला ही अनेकोंकी कामनाएँ पूर्ण करता है, अपनी बुद्धिमें स्थित उस आत्माको जो विवेकी पुरुष देखते हैं उन्हींको नित्यशान्ति प्राप्त होती है, औरोंको नहीं॥ १३ ॥ ",
     translationEnglish:"Eternal peace is for those-and not for others--who are discriminating and who realize in their hearts Him who-being the eternal among the ephemeral, the consciousness among the conscious - alone dispenses the desired objects to many.",
     commentaryHindi:"जो अनित्यों—नाशवानोंमें नित्य—अविनाशी है, चेतन अर्थात् ब्रह्मा आदि अन्य चेतयिता प्राणियोंका भी चेतन है। जिस प्रकार जल आदि दाहशक्तिशून्य पदार्थोंका दाहकत्व अग्निके निमित्तसे होता है वैसे ही अन्य प्राणियोंका चेतनत्व आत्मचैतन्यके निमित्तसे ही है। इसके सिवा वह सर्वज्ञ तथा सर्वेश्वर भी है, क्योंकि वह अकेला ही बिना किसी प्रयासके अनेक सकाम और संसारी पुरुषोंके कर्मानुरूप भोग यानी कर्मफल तथा अपने अनुग्रहरूप निमित्तसे हुए भोग विधान करता अर्थात् देता है। जो धीर (बुद्धिमान्) पुरुष अपने आत्मामें स्थित उस आत्मदेवको देखते हैं उन्हींको शाश्वती—नित्य यानी स्वात्मभूता शान्ति—उपरति प्राप्त होती है—अन्य जो ऐसे नहीं हैं उन्हें नहीं होती॥ १३ ॥",
     commentaryEnglish:"Furthermore, (He is) nityah, indestructible; anitya- nam, among the destructible; cetanah, consciousness; cetananam, among the conscious-among the mani- festors of consciousness such as the living creatures beginning with Brahma. As it is owing to fire that water etc., that are not fire, come to be possessed of the power to burn, similarly, the power to manifest consciousness that is seen in others is owing to the consciousness of the Self. Besides, He (is) the omniscient Lord of all--yah, who; ekah, alone; vidadhati, ordains diversely, i.e. dispenses without effort; kaman, the desirable things-the fruits of work according to merit, as also enjoyable things out of His own grace; bahunam, of many, of the desirous, worldly people. Those discriminating people who realize Him in their hearts-for them is sasrati, eternal; iantih, withdrawal - for them accrues peace that is their very Self; and na itaresam, not for others who are of a different sort.  ",
     
  },
  {
     id:91,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"14",
     shlok:{
        line1:"तदेतदिति मन्यन्तेऽनिर्देश्यं परमं सुखम्। \n कथं नु तद्विजानीयां किमु भाति विभाति वा॥ १४ ॥",
        
     },
     translationHindi:"उसी इस [आत्मविज्ञान]-को ही विवेकी पुरुष अनिर्वाच्य परम सुख मानते हैं। उसे मैं कैसे जान सकूँगा? क्या वह प्रकाशित (हमारी बुद्धिका विषय) होता है, अथवा नहीं?॥ १४ ॥ ",
     translationEnglish:"How shall I know that supreme, unspeakable Bliss which they realize directly as `This'? Is It selfeffulgent-does It shine distinctly, or does It not?",
     commentaryHindi:"यह जो आत्मविज्ञानरूप सुख है वह अनिर्देश्य—कथन करनेके अयोग्य, परम अर्थात् प्रकृष्ट और साधारण पुरुषोंके वाणी और मनका अविषय भी है; तो भी जो सब प्रकारकी एषणाओंसे रहित ब्राह्मणलोग हैं वे उसे प्रत्यक्ष ही मानते हैं। उस आत्मसुखको मैं कैसे जान सकूँगा? अर्थात् निष्काम यतियोंके समान ‘वह यही है’ इस प्रकार उसे कैसे अपनी बुद्धिका विषय बनाऊँगा? वह प्रकाशस्वरूप है, सो क्या वह भासता है—हमारी बुद्धिका विषय होकर स्पष्ट दिखलायी देता है, या नहीं?॥ १४ ॥",
     commentaryEnglish:"(Yat) tat, that-that knowledge of the Self; that is sukham, bliss; anirdesvam, indescribable; and paramam. superexcellent, (yat tat), that which, though beyond the range of speech and mind of ordinary people, still the Brahmanas, who are free from desires, manyante, consider; etat iti, as `This', as something directly known; katham nu, how indeed; vijaniyam, shall I know; tat, that-happiness; how can I make It an object of my consciousness as `This', as do the sannvasins who are free from desires? Kim u tat bhati, does It shine?-That which is Selfeffulgent, does It vibhati, appear, is It seen, distinctly as an object of our intellect? Va, or, is It not? (Or', since It is effulgent, is It perceived clearly as an object of our intellect, or is It not?) \n The answer to this (aforesaid question) is that It is both self-effulgent and shines distinctly (or multifariously). How'' ",
     
  },
  {
     id:92,
     Part:" 2",
     Valli:" 2",
     mantraNumber:"15",
     shlok:{
        line1:"न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्नि:। \n तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति॥ १५ ॥",
        
     },
     translationHindi:"वहाँ (उस आत्मलोकमें) सूर्य प्रकाशित नहीं होता, चन्द्रमा और तारे भी नहीं चमकते और न यह विद्युत् ही चमचमाती है; फिर इस अग्निकी तो बात ही क्या है? उसके प्रकाशमान होते हुए ही सब कुछ प्रकाशित होता है और उसके प्रकाशसे ही यह सब कुछ भासता है॥ १५ ॥ ",
     translationEnglish:"There the sun does not shine, neither do the moon and the stars; nor do these flashes of lightning shine. How can this fire? He shining, all these shine; through his lustre all these are variously illumined.",
     commentaryHindi:"वहाँ—उस अपने आत्मस्वरूप ब्रह्ममें सबको प्रकाशित करनेवाला होकर भी सूर्य प्रकाशित नहीं होता अर्थात् वह भी उस ब्रह्मको प्रकाशित नहीं करता। इसी प्रकार ये चन्द्रमा, तारे और विद्युत् भी प्रकाशित नहीं होते। फिर हमारी दृष्टिके विषयभूत इस अग्निका तो कहना ही क्या है! अधिक क्या कहा जाय? यह सूर्य आदि जो कुछ प्रकाशित हो रहे हैं वे सब उस परमात्माके प्रकाशित होते हुए ही अनुभासित हो रहे हैं, जिस प्रकार जल और उल्मुक (जलते हुए काष्ठ) आदि अग्निके संयोगसे अग्निके प्रज्वलित होते हुए ही दहन करते हैं स्वयं नहीं, उसी प्रकार उसके प्रकाश—तेजसे ही ये सूर्य आदि सब प्रकाशित हो रहे हैं। क्योंकि ऐसा है इसलिये वही ब्रह्म प्रकाशित होता है और विशेषरूपसे प्रकाशित होता है। कार्यगत नाना प्रकारके प्रकाशसे उस ब्रह्मकी प्रकाशस्वरूपता स्वत: सिद्ध है, क्योंकि जिसमें स्वत: प्रकाश नहीं है वह दूसरेको भी प्रकाशित नहीं कर सकता, जैसा कि घटादिका दूसरोंको प्रकाशित करना नहीं देखा गया और प्रकाशस्वरूप आदित्यादिका दूसरोंको प्रकाशित करना देखा गया है॥ १५ ॥",
     commentaryEnglish:"Tatra, there-in Brahman which is one's Self; survah, the sun; na bhati, does not shine, i.e. it does not illuminate that Brahman, though it illumines all. Similarly, na candratarakam, na imah vidtvutah bhanti, neither the moon and stars nor these flashes of lightning shine; kutah avam agnih, how can this firethat is seen by us -(shine)? To cut short, all, inclusive of these, that shine, anubhati, shine according as; tam eva bhantam. He, the supreme Lord, shines. Just as (hot) water, fire-brand, etc., owing to their contact with fire, burn according as the fire does, but not independently, similarly, it is verily tasva bhasa, by His effulgence; that sarvam idam, all thisthe sun etc.; vibhati, shine variously. This being so, it is that Brahman Itself that is effulgent and shines variously. Through the various kinds of effulgence in the effects, it is known that the characteristic of luminosity is intrinsic to that Brahman. Indeed, that which does not have intrinsic luminosity cannot impart it to others; for a pot etc. are not seen to illuminate others, whereas luminous things like the sun etc. are seen to do so.",
     
  },
  {
     id:93,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"1",
     shlok:{
        line1:"ऊर्ध्वमूलोऽवाक्शाख एषोऽश्वत्थ: सनातन:। \n तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते। तस्मिँल्लोका: श्रिता: सर्वे तदु नात्येति कश्चन। एतद्वै तत्॥ १ ॥",
        
     },
     translationHindi:"जिसका मूल ऊपरकी ओर तथा शाखाएँ नीचेकी ओर हैं ऐसा यह अश्वत्थ वृक्ष सनातन (अनादिकालीन) है। वही विशुद्ध ज्योति:-स्वरूप है, वही ब्रह्म है और वही अमृत कहा जाता है। सम्पूर्ण लोक उसीमें आश्रित हैं; कोर्इ भी उसका अतिक्रमण नहीं कर सकता। यही निश्चय वह [ब्रह्म] है॥ १ ॥ ",
     translationEnglish:"This is the beginningless peepul tree that has its roots above and branches down. That (which is its root) is pure, that is Brahman and that is called immortal. On that are fixed all the worlds; none transcends that. This verily is that.",
     commentaryHindi:"ऊर्ध्व (ऊपरकी ओर) अर्थात् जो वह भगवान् विष्णुका परम पद है वही जिसका मूल है ऐसा यह अव्यक्तसे स्थावरपर्यन्त संसारवृक्ष ‘ऊर्ध्वमूल’ है। इसका व्रश्चन—छेदन होनेके कारण यह वृक्ष कहलाता है। जो जन्म, जरा, मरण और शोक आदि अनेक अनर्थोंसे भरा हुआ, क्षण-क्षणमें अन्यथा भावको प्राप्त होनेवाला, माया मृगतृष्णाके जल और गन्धर्वनगरादिके समान दृष्टनष्टस्वरूप होनेसे अन्तमें वृक्षके समान अभावरूप हो जानेवाला, केलेके खम्भेके समान नि:सार और सैकड़ों पाखण्डियोंकी बुद्धिके विकल्पोंका आश्रय है। तत्त्वजिज्ञासुओंद्वारा जिसका तत्त्व ‘इदम्’ रूपसे निर्धारित नहीं किया गया, वेदान्तनिर्णीत परब्रह्म ही जिसका मूल और सार है, जो अविद्या काम, कर्म और अव्यक्तरूप बीजसे उत्पन्न होनेवाला है, ज्ञान और क्रिया—ये दोनों शक्तियाँ जिसकी स्वरूपभूत हैं वह अपरब्रह्मरूप हिरण्यगर्भ ही जिसका अंकुर है, सम्पूर्ण प्राणियोंके लिङ्गशरीर ही जिसके स्कन्ध हैं, जो तृष्णारूप जलके सिंचनसे बढ़े हुए तेजवाला, बुद्धि, इन्द्रिय और विषयरूप नूतन पल्लवोंके अंकुरोंवाला, श्रुति, स्मृति, न्याय और ज्ञानोपदेशरूप पत्तोंवाला, यज्ञ, दान, तप आदि अनेक क्रियाकलापरूप सुन्दर फूलोंवाला, सुख, दु:ख और वेदनारूप अनेक प्रकारके रसोंसे युक्त, प्राणियोंकी आजीविकारूप अनन्त फलोंवाला तथा फलोंकी तृष्णारूप जलके सिंचनसे बढ़े हुए और [सात्त्विक आदि भावोंसे] मिश्रित एवं दृढ़तापूर्वक स्थिर हुए [कर्म-वासनादिरूप अवान्तर] मूलोंवाला है; ब्रह्मा आदि पक्षियोंने जिसपर सत्यादि नामोंवाले सात लोकोंरूप घोंसले बना रखे हैं, जो प्राणियोंके सुख-दु:खजनित हर्ष-शोकसे उत्पन्न हुए नृत्य, गान, वाद्य, क्रीडा, आस्फोटन, (खम ठोंकना) हँसी, आक्रन्दन, रोदन तथा हाय-हाय, छोड़-छोड़ इत्यादि अनेक प्रकारके शब्दोंकी तुमुलध्वनिसे अत्यन्त गुञ्जायमान हो रहा है तथा वेदान्तविहित ब्रह्मात्मैक्य-दर्शनरूप असङ्गशस्त्रसे जिसका उच्छेद होता है ऐसा यह संसाररूप वृक्ष अश्वत्थ है, अर्थात् अश्वत्थ वृक्षके समान कामना और कर्मरूप वायुसे प्रेरित हुआ नित्य चञ्चल स्वभाववाला है। स्वर्ग, नरक, तिर्यक् और प्रेतादि शाखाओंके कारण यह नीचेकी ओर फैली शाखाओंवाला है तथा सनातन यानी अनादि होनेके कारण चिरकालसे चला आ रहा है। इस संसारका जो मूल है वही शुक्र-शुभ्र-शुद्ध-ज्योतिर्मय अर्थात् चैतन्यात्मज्योति:स्वरूप है। वही सबसे महान् होनेके कारण ब्रह्म है। वही सत्यस्वरूप होनेके कारण अमृत अर्थात् अविनाशी स्वभाववाला कहा जाता है। विकार वाणीका विलास और केवल नाममात्र है; अत: उस ब्रह्मसे अन्य सब मिथ्या और नाशवान् है। उस परमार्थ सत्य ब्रह्ममें उत्पत्ति, स्थिति और लयके समय सम्पूर्ण लोक गन्धर्वनगर, मरीचिका-जल और मायाके समान आश्रित हैं ये परमार्थदर्शन हो जानेपर बाधित हो जानेवाले हैं। जिस प्रकार घट आदि कोर्इ भी कार्य मृत्तिका आदिका अतिक्रमण नहीं कर सकते उस प्रकार कोर्इ भी विकार उस ब्रह्मका अतिक्रमण नहीं कर सकता। निश्चय यही वह [ब्रह्म] है॥ १ ॥",
     commentaryEnglish:"Urdhvamulah, that which has its roots above-the root that is the state of supreme Visnu. This tree of the world, comprising everything from the Unmanifested to the immovables, has its root above. It is called vrksa (tree) because (of the root-meaning) of being felled. It consists of many evils, such as birth, old age, death, sorrow, etc., it changes itself every moment, inasmuch as no sooner is it seen than its nature is destroyed like magic, water in a mirage, a city in the sky, etc., and it ceases to exist ultimately like a tree; it is without any heart-wood like the stem of a plantain tree; it is subject to hundreds of doubts in the minds of sceptics; its reality is determined in its true colour by the seekers of truth' ; its essence lies in its root, the supreme Brahman, ascertained in Vedanta; it grows from out of the seed of ignorance,2 desire, action, and the Unmanifested; it has for its sprout Hiranyagarbha, the inferior Brahman, comprising the two powers of knowledge and action; it has for its trunk the diverse subtle bodies of all creatures; its vigour of growth results from the sprinkling of the water of desire; it has for its tender sprouts the objects of the senses of knowledge; its leaves are the Vedas, the Smrtis, logic, learning, and instruction; its lovely flowers are the many deeds such as sacrifice, charity, austerity, etc.; its various tastes are the experience of happiness and sorrow; its innumerable fruits are the means of subsistence of beings; it has its secondary roots well developed, entwined, and firmly fixed through the sprinkling of the water of desire (for those fruits);; it has for its nests the seven worlds beginning from the one called Satya, built by the birds which are the living beings from Brahma downwards: it has its uproar, rendered tumultuous through the various sounds arising from dancing, singing, instrumental music, disport (play, jest, etc.), clapping on the arms, laughing, pulling, crying, exclaiming' Was, alas!', 'Leave me, leave me!'. induced by mirth and grief arising from the enjoyment and pain of living beings; and it is felled by the weapon of detachment consisting of the realization of the identity of Brahman and the Self as inculcated by Vedanta. This tree of the world is'an asvatthahl -- its nature is ever unsteady, like the peepul tree, shaken as it is by the wind of desire and deeds; it is avdksdkhah - downwards are its branches, consisting of heaven, hell, and states of beasts and ghosts: (it is) sandtanah, existing from time immemorial, having no beginning. Tat eva, that very thing-which is the root of the tree of the world -- is; sukram, white, pure, resplendent -being in reality the light of the Self which is Consciousness; tat brahma, that, indeed, is Brahman, being the greatest of all; tat eva, that indeed; ucyate, is called; amrtam, indestructible by nature, being true. All else is false, being 'mutable, existing as mere name dependent on speech' (Ch. VI. 1. 4), and hence it is mortal. Tasmin, on him, on Brahman that is absolutely true; sane, all; lokdlr. the worlds-which are comparable to a city in the sky, or water in a mirage, or jugglery, and which vanish on the realization of the supreme Truth. sritdh, are fixed-during creation, existence, and dissolution. Kah cana na, nothing whatsoever-no modification; atyeti, transcends; tat u, that-that Brahman; just as the products like pot etc. do not transcend (their material) earth etc. This verily is that. \n It may be said that the very root of the world, Brahman, by realizing which it is stated that people become immortal, does not exist, and that this (universe) has emerged out of nothing. But this is wrong:",
     
  },
  {
     id:94,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"2",
     shlok:{
        line1:"यदिदं किं च जगत्सर्वं प्राण एजति नि:सृतम्। \n महद्भयं वज्रमुद्यतं य एतद्विदुरमृतास्ते भवन्ति॥ २ ॥",
        
     },
     translationHindi:" यह जो कुछ सारा जगत् है प्राण—ब्रह्ममें, उदित होकर उसीसे, चेष्टा कर रहा है। वह ब्रह्म महान् भयरूप और उठे हुए वज्रके समान है। जो इसे जानते हैं वे अमर हो जाते हैं॥ २ ॥",
     translationEnglish:"All this universe that there is, emerges and moves because there is the supreme Brahman which is a great terror like an uplifted thunderbolt. Those who know this become immortal.",
     commentaryHindi:"यह जो कुछ है अर्थात् यह जो कुछ जगत् है वह सब प्राण यानी परब्रह्मके होनेपर ही उसीसे प्रादुर्भूत होकर एजन—कम्पन—गमन अर्थात् नियमसे चेष्टा कर रहा है। इस प्रकार जो ब्रह्म जगत्की उत्पत्ति आदिका कारण है वह महान् भयरूप है। यह महान् भयरूप है अर्थात् इससे सब भय मानते हैं, इसलिये यह ‘महद्भय’ है। तथा उठाये हुए वज्रके समान है। कहना यह है कि जिस प्रकार अपने सामने स्वामीको हाथमें वज्र उठाये देखकर सेवकलोग नियमानुसार उसकी आज्ञामें प्रवृत्त होते रहते हैं उसी प्रकार चन्द्रमा, सूर्य, ग्रह, नक्षत्र और तारा आदि रूप यह सारा जगत् अपने अधिष्ठाताओंके सहित एक क्षणको भी विश्राम न लेकर नियमानुसार उसकी आज्ञामें बर्तता है। अपने अन्त:करणकी प्रवृत्तिके साक्षीभूत इस एक ब्रह्मको जो लोग जानते हैं वे अमर—अमरणधर्मा हो जाते हैं॥ २ ॥",
     commentaryEnglish:"Prone (sati), the supreme Brahman' (being there); yat idam kim ca jagat sarvam, all this universe that there is; nihsrtam (sat), having emerged; ejati, moves -acts regularly. That Brahman which is thus the cause of the origination etc. of the world is mahat bhayam, greatly terrifying -bhayam being derived in the sense of that from which one gets fear; vajram udyatam, like an upraised thunderbolt. The idea imparted is that just as servants, finding their master in front with an uplifted thunderbolt, methodically follow his command, similarly this universe consisting of the sun, the moon, the planets, the constellations, and the stars, continues methodically without even a moment's respite because it has a God. Ye, those who; viduh etat, know this--the Brahman as the witness of all the activities of their minds; te, they; bhavanti, become; amrtah, possessed of deathlessness. The text says how out of fear of Him the world behaves:",
     
  },
  {
     id:95,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"3",
     shlok:{
        line1:"भयादस्याग्निस्तपति भयात्तपति सूर्य:। \n भयादिन्द्रश्च वायुश्च मृत्युर्धावति पञ्चम:॥ ३ ॥",
        
     },
     translationHindi:"इस (परमेश्वर)-के भयसे अग्नि तपता है, इसीके भयसे सूर्य तपता है तथा इसीके भयसे इन्द्र, वायु और पाँचवाँ मृत्यु दौड़ता है॥ ३ ॥ ",
     translationEnglish:"From fear of Him Fire burns, from fear shines the Sun; from fear run Indra and Air, and Death, the fifth.'",
     commentaryHindi:"इस परमेश्वरके भयसे अग्नि तपता है, इसीके भयसे सूर्य तप रहा है तथा इसीके भयसे इन्द्र, वायु और पाँचवाँ मृत्यु दौड़ता है। यदि सामर्थ्यवान् और ईशनशील लोकपालोंका, हाथमें वज्र उठाये रखनेवाले [इन्द्र]-के समान कोर्इ नियन्ता न होता तो स्वामीके भयसे प्रवृत्त होनेवाले सेवकोंके समान उनकी नियमित प्रवृति नहीं हो सकती थी॥ ३ ॥",
     commentaryEnglish:"Bhagat, from fear ; (asga, of Him) - of the supreme Lord; agnih tapati, Fire burns; bhaydt, from fear; tapati, shines; surgah, the Sun; bhaydt indrah, from fear, Indra; ca, and; vayuh, Air; mrtguh ca, and Death; pancamah, the fifth; dhavati, runs. For unless there was a ruler, like one with an uplifted thunderbolt in hand, over these protectors of the world who themselves are lordly and powerful, there would not have been any regulated activity as that of servants trembling out of fear for their master.",
     
  },
  {
     id:96,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"4",
     shlok:{
        line1:"इह चेदशकद्बोद्धुं प्राक्शरीरस्य विस्रस:। \n तत: सर्गेषु लोकेषु शरीरत्वाय कल्पते॥ ४ ॥",
        
     },
     translationHindi:"यदि इस देहमें इसके पतनसे पूर्व ही [ब्रह्मको] जान सका तो बन्धनसे मुक्त होता है यदि नहीं जान पाया तो इन जन्म-मरणशील लोकोंमें वह शरीरभावको प्राप्त होनेमें समर्थ होता है॥ ४ ॥ ",
     translationEnglish:"If one succeeds in realizing here before the falling of the body, (one becomes freed); (else) because of that (failure) one becomes fit for embodiment in the worlds of creatures.",
     commentaryHindi:"यदि इस देहमें अर्थात् जीवित रहते हुए ही शरीरका पतन होनेसे पूर्व साधक पुरुषने इन सूर्यादिके भयके हेतुभूत ब्रह्मको जान लिया तो वह संसारबन्धनसे मुक्त हो जाता है; और यदि उसे न जान सका तो उसका ज्ञान न होनेके कारण वह सर्गोंमें जिनमें स्रष्टव्य प्राणियोंकी रचना की जाती है उन पृथिवी आदि लोकोंमें शरीरत्व—शरीरभावको प्राप्त होनेमें समर्थ होता है अर्थात् शरीर ग्रहण कर लेता है। अत: शरीरपातसे पूर्व ही आत्मज्ञानके लिये यत्न करना चाहिये॥ ४ ॥",
     commentaryEnglish:"Cet, if; (one) being competent; asakat, i.e. saknoti, succeeds; boddhum, in knowing-knows that Brahman which is the cause of this fear; even iha, herewhile still living; prak sarirasya visrasah, before the disintegration, falling off, of the body; then one becomes free from the bondage of the world. If one does not succeed in knowing, then tatah, because of that non-realization ; sargesu lokesu, in the worlds of creatable things-on earth etc., the word sarga being derived from the root sri, in the sense of the places where creatable beings are created; kalpate, one becomes fit; sariratvara, for embodiment; the idea is that one assumes a body (in those worlds).\n Hence effort is to be made for the realization of the Self before the falling off of the body, for here alone it is possible for the vision of the Self to be as clear as that of a face in a mirror, whereas this is not possible in other worlds apart from that of Brahma, which however, is difficult to attain. How? This is being answered: ",
     
  },
  {
     id:97,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"5",
     shlok:{
        line1:"यथादर्शे तथात्मनि यथा स्वप्ने तथा पितृलोके। \n यथाप्सु परीव ददृशे तथा गन्धर्वलोके छायातपयोरिव ब्रह्मलोके॥ ५ ॥",
        
     },
     translationHindi:"जिस प्रकार दर्पणमें उसी प्रकार निर्मल बुद्धिमें आत्माका [स्पष्ट] दर्शन होता है तथा जैसा स्वप्नमें वैसा ही पितृलोकमें और जैसा जलमें वैसा ही गन्धर्वलोकमें उसका [अस्पष्ट] भान होता है; किन्तु ब्रह्मलोकमें तो छाया और प्रकाशके समान वह [सर्वथा स्पष्ट] अनुभव होता है॥ ५ ॥",
     translationEnglish:"As (one sees) in a mirror. so in one's intellect; as in a dream, so in the world of the manes; as it is seen in water, so in the world of the Gandharvas. As it is in the case of shade and light, so in the world of Brahma.",
     commentaryHindi:"क्योंकि जिस प्रकार दर्पणमें मुखका प्रतिबिम्ब स्पष्ट पड़ता है उसी प्रकार इस (मनुष्यदेह)-में ही आत्माका स्पष्ट दर्शन हो सकता है। इसमें वह जैसा स्पष्टतया अनुभव होता है वैसा ब्रह्मलोकको छोड़कर और किसी लोकमें नहीं होता और उसका प्राप्त होना अत्यन्त कठिन है; सो किस प्रकार? इसपर कहते हैं—जिस प्रकार लोक दर्पणमें प्रतिबिम्बित हुए अपने-आपको अत्यन्त स्पष्टतया देखता है उसी प्रकार दर्पणके समान निर्मल हुर्इ अपनी बुद्धिमें आत्माका स्पष्ट दर्शन होता है—ऐसा इसका अभिप्राय है। जिस प्रकार स्वप्नमें जाग्रद्वासनाओंसे प्रकट हुआ दर्शन अस्पष्ट होता है उसी प्रकार पितृलोकमें भी अस्पष्ट आत्मदर्शन होता है, क्योंकि वहाँ जीव कर्मफलके उपभोगमें आसक्त रहता है। तथा जिस प्रकार जलमें अपना स्वरूप ऐसा दिखलायी देता है, मानो उसके अवयव विभक्त न हों उसी प्रकार गन्धर्वलोकमें भी अस्पष्टरूपसे ही आत्माका दर्शन होता है। अन्य लोकोंमें भी शास्त्रप्रमाणसे ऐसा ही [अर्थात् अस्पष्ट आत्मदर्शन ही] माना जाता है। एकमात्र ब्रह्मलोकमें ही छाया और प्रकाशके समान वह आत्मदर्शन अत्यन्त स्पष्टतया होता है। किन्तु अत्यन्त विशिष्ट कर्म और ज्ञानसे साध्य होनेके कारण वह ब्रह्मलोक बड़ा ही दुष्प्राप्य है। अत: अभिप्राय यह है कि इस मनुष्यलोकमें ही आत्मदर्शनके लिये प्रयत्न करना चाहिये॥ ५ ॥",
     commentaryEnglish:"Yathd, as-as one sees oneself very distinctly reflected; ddarse, in a mirror; tatha, similarly; here utmani, in one's own intellect the idea is that, when the intellect has become spotless like a mirror, there springs a distinct vision of the Self. Yatha svapne, as in a dream -the vision arising from the impressions of the waking state is indistinct; tutha, similarly; indistinct is the vision of the Self pitrloke, in the world of the manes-because of being entangled in the enjoyment of the results of work. Yathu apse, as in water: one's form purl iva dadrse is equivalent to paridrsYate iva-appears to be without clear demarcation of the parts (hazy); tatha, similarly; indistinct is the vision of the Self gandharvaloke, in the world of the Gandharvas. It is known from the authority of the scriptures that similar is the case in other worlds as well. Only in one, viz brahmaloke, in the world of Brahma, is the vision very distinct: chara-atupavoh iva, as (it is) in the case of shade and light. But that world is difficult to attain, being the result of many special kinds of work and knowledge (i.e. of rites and meditation). Therefore, efforts should be made for the realization of the Self here itself. This is the idea. \n  How is He to be known and what is the need of His knowledge? This is being answered:",
     
  },
  {
     id:98,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"6",
     shlok:{
        line1:"इन्द्रियाणां पृथग्भावमुदयास्तमयौ च यत्। \n पृथगुत्पद्यमानानां मत्वा धीरो न शोचति॥ ६ ॥",
        
     },
     translationHindi:" [पृथक्-पृथक् भूतोंसे उत्पन्न होनेवाली] इन्द्रियोंके जो विभिन्न भाव तथा उनकी उत्पत्ति और प्रलय हैं उन्हें जानकर बुद्धिमान् पुरुष शोक नहीं करता॥ ६ ॥",
     translationEnglish:"Having known the dissimilarity of the senses that originate separately, as also their rising and setting, the intelligent man does not grieve.",
     commentaryHindi:"अपने-अपने विषयको ग्रहण करनारूप प्रयोजनके कारण अपने कारणरूप आकाशादि भूतोंसे पृथक्-पृथक् उत्पन्न होनेवाली श्रोत्रादि इन्द्रियोंका जो अत्यन्त विशुद्धस्वरूप केवल चिन्मात्र आत्मस्वरूपसे पृथक्त्व अर्थात् स्वाभाविक विलक्षणरूपता है उसे तथा जाग्रत् और स्वप्नकी अपेक्षासे उन इन्द्रियोंके उदयास्तमय—उत्पत्ति और प्रलयको जानकर अर्थात् विवेकपूर्वक यह समझकर कि ये इन्द्रियोंकी ही अवस्थाएँ हैं, आत्माकी नहीं, धीर—बुद्धिमान् पुरुष शोक नहीं करता, क्योंकि सर्वदा एक स्वभावमें रहनेवाले आत्माका कभी व्यभिचार न होनेके कारण शोकका कोर्इ कारण नहीं ठहरता। जैसा कि “आत्मज्ञानी शोकको पार कर जाता है” ऐसी एक श्रुति भी है॥ ६ ॥",
     commentaryEnglish:"Indriyanam, of the senses-such as ear etc.; prthak utpadyamdndnam, that are separately pro- duced--from their sources, akdsa etc., for the purpose of perceiving their own respective objects; matvd, knowing - through discrimination; their prthagbha- vam, difference-their nature of being essentially dissimilar to the nature of the Self that is extremely pure, absolute, and consciousness alone; similarly (knowing their) udayastamayau, (rising and setting) creation and dissolution--in relation to the waking and sleeping states-as belonging to them only and not to the Self; dhirah, the intelligent man; na socati, does not grieve; for the constantly uniform nature of the Self being unchangeable, the Self cannot be the cause of sorrow. Similar is another Vedic text: `The knower of the Self crosses over sorrow.' (Ch. VII. i.3)  The Self, in relation to which the dissimilarity of the senses has been pointed out, is not to be realized outside, for It is the inmost Self of all. How can that be? This is being said: ",
     
  },
  {
     id:99,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"7",
     shlok:{
        line1:"इन्द्रियेभ्य: परं मनो मनस: सत्त्वमुत्तमम्। \n सत्त्वादधि महानात्मा महतोऽव्यक्तमुत्तमम्॥ ७ ॥",
        
     },
     translationHindi:"इन्द्रियोंसे मन पर (उत्कृष्ट) है, मनसे बुद्धि श्रेष्ठ है, बुद्धिसे महत्तत्त्व बढ़कर है तथा महत्तत्त्वसे अव्यक्त उत्तम है॥ ७ ॥ ",
     translationEnglish:"The mind is superior to the organs; the intellect is superior to the mind; Mahat (the Great Soul) is superior to the intellect; the Unmanifested is superior to Mahat.",
     commentaryHindi:" जिस आत्मासे इन्द्रियोंका पृथक्त्व दिखलाया गया है वह कहीं बाहर है—ऐसा नहीं समझना चाहिये, क्योंकि वह सभीका अन्तरात्मा है। सो किस प्रकार? इसपर कहते हैं— इन्द्रियोंसे मन पर है [तथा मनसे बुद्धि श्रेष्ठ है] इत्यादि। इन्द्रियोंके सजातीय होनेसे इन्द्रियोंका ग्रहण करनेसे ही विषयोंका भी ग्रहण हो जाता है। अन्य सब पूर्ववत् (कठ० १। ३। १० के समान) समझना चाहिये। ‘सत्त्व’ शब्दसे यहाँ बुद्धि कही गयी है॥ ७ ॥",
     commentaryEnglish:"The sense-objects, belonging to the same class as the senses, are understood to be enumerated by the mention of the senses. The rest is as before (in I. iii. 10). By the word sattva, the intellect is referred to here.",
     
  },
  {
     id:100,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"8",
     shlok:{
        line1:"अव्यक्तात्तु पर: पुरुषो व्यापकोऽलिङ्ग एव च। \n यं ज्ञात्वा मुच्यते जन्तुरमृतत्वं च गच्छति॥ ८ ॥",
        
     },
     translationHindi:"अव्यक्तसे भी पुरुष श्रेष्ठ है और वह व्यापक तथा अलिङ्ग है; जिसे जानकर मनुष्य मुक्त होता है और अमरत्वको प्राप्त हो जाता है॥ ८ ॥ ",
     translationEnglish:"But superior to the Unmanifested is the Purusa who is pervasive and is, indeed, without worldly attributes, knowing whom a man becomes freed and attains immortality.",
     commentaryHindi:"अव्यक्तसे भी पुरुष श्रेष्ठ है। वह आकाशादि सम्पूर्ण व्यापक पदार्थोंका भी कारण होनेसे व्यापक है। और अलिङ्ग है—जिसके द्वारा कोर्इ वस्तु जानी जाती है वह बुद्धि आदि लिङ्ग कहलाते हैं; परन्तु पुरुषमें इनका अभाव है इसलिये यह अलिङ्ग अर्थात् सम्पूर्ण संसारधर्मोंसे रहित ही है। जिसे आचार्य और शास्त्रद्वारा जानकर पुरुष जीवित रहते हुए ही अविद्या आदि हृदयकी ग्रन्थियोंसे मुक्त हो जाता है तथा शरीरका पतन होनेपर भी अमरत्वको प्राप्त होता है वह पुरुष अलिङ्ग है और अव्यक्तसे भी पर है—इस प्रकार इसका पूर्ववाक्यसे सम्बन्ध है॥ ८ ॥",
     commentaryEnglish:"Avyaktat to parah, the Purusa is superior to the Unmanifested; and He is vtidpakah, pervasive-for He is the source even of all pervasive things such as space etc.; alirigah - linga, derivatively means that sign through which anything is comprehended, i.e. intellect etc. - He who has not that liriga, intellect etc., is indeed alirigah ; that is, He is devoid of all worldly attributes; eva, indeed. Yam jnatva, having known whom - from the teacher and the scriptures; jantuh, a man; muc}ate, becomes freed-even while living - from the bondages of the heart, such as ignorance etc.; and when the body falls, he gacchati amrtatvam ca, attains immortality as well. This part is to be construed with the earlier thus: He, the alii gah (incomprehensible) Purusa, by knowing whom a man becomes free and attains immortality, is superior to the Unmanifested.How can there, then, be any possibility of the vision of the incomprehensible? This is being said: ",
     
  },
  {
     id:101,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"9",
     shlok:{
        line1:"न संदृशे तिष्ठति रूपमस्य न चक्षुषा पश्यति कश्चनैनम्। \n हृदा मनीषा मनसाभिक्लृप्तो य एतद्विदुरमृतास्ते भवन्ति॥ ९ ॥",
        
     },
     translationHindi:"इस आत्माका रूप दृष्टिमें नहीं ठहरता। इसे नेत्रसे कोर्इ भी नहीं देख सकता। यह आत्मा तो मनका नियमन करनेवाली हृदयस्थिता बुद्धिद्वारा मननरूप सम्यग्दर्शनसे प्रकाशित [हुआ ही जाना जा सकता] है। जो इसे [ब्रह्मरूपसे] जानते हैं वे अमर हो जाते हैं॥ ९ ॥ ",
     translationEnglish:"His form does not exist within the range of vision; nobody sees Him with the eye. When this Self is revealed through deliberation, It is realized by the intellect, the ruler of the mind,' that resides in the heart. Those who know this become immortal.",
     commentaryHindi:" तो फिर जिसका कोर्इ लिङ्ग (ज्ञापक चिह्न) नहीं है उस [आत्मा]-का दर्शन होना किस प्रकार सम्भव है? इसपर कहा जाता है— इस प्रत्यगात्माका रूप दृष्टि-विषयमें स्थिर नहीं होता। अत: कोर्इ भी पुरुष इस प्रकृत आत्माको चक्षुसे—सम्पूर्ण इन्द्रियोंसे [अर्थात् समस्त इन्द्रियोंमेंसे किसीसे] भी नहीं देख सकता अर्थात् उपलब्ध नहीं कर सकता। यहाँ चक्षुका ग्रहण सम्पूर्ण इन्द्रियोंका उपलक्षण करानेके लिये है। तो फिर उसे किस प्रकार देखे? इसपर कहते हैं—हृदयस्थिता बुद्धिसे, जो कि सङ्कल्पादिरूप मनकी नियन्त्री होकर ईशन करनेके कारण ‘मनीट्’ है उस विकल्पशून्या बुद्धिसे मन अर्थात् मननरूप यथार्थदर्शनद्वारा सब प्रकार समर्थित अर्थात् प्रकाशित हुआ वह आत्मा जाना जा सकता है। यहाँ ‘आत्मा जाना जा सकता है’ यह वाक्यशेष है। उस आत्माको जो लोग ‘यह ब्रह्म है’ ऐसा जानते हैं वे अमर हो जाते हैं॥ ९ ॥",
     commentaryEnglish:"Asya rupam, His form-the form of this inmost Self; na tisthati, does not exist; samdr.se, as an object of vision. Therefore, na kah cana, nobody; pasyati, sees, perceives; enam, this Self-that is being considered; caksusd, through the eyes-i.e. through any of the senses, for the word caksuh (eye) is used here suggestively for all the senses. How, then, He is to be seen is being said: hrdd, by that which is in the heart; manisd, by the intellect -manit being that which, as the controller, rules (iste) the mind (manas) characterized by thought. Abhiklrptah, when (It is) confirmed, i.e. revealed; by that (intellect), the ruler of the mind, which is in the heart and is free from occupation with objects; manasd, through the adequate vision consisting in deliberation; then the Self can be realized'--this should be supplied to complete the sentence. Ye, those who, viduh, know; etat, this, this fact that the Self is Brahman; te, they; amrtdh bhavanti, become immortal. How can the ruler in the heart be attained? For that purpose yoga is being inculcated:",
     
  },
  {
     id:102,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"10",
     shlok:{
        line1:"यदा पञ्चावतिष्ठन्ते ज्ञानानि मनसा सह। \n बुद्धिश्च न विचेष्टति तामाहु: परमां गतिम्॥.१०॥",
        
     },
     translationHindi:"जिस समय पाँचों ज्ञानेन्द्रियाँ मनके सहित [आत्मामें] स्थित हो जाती हैं और बुद्धि भी चेष्टा नहीं करती उस अवस्थाको परम गति कहते हैं॥ १० ॥ ",
     translationEnglish:"When the five senses of knowledge come to rest together with the mind, and the intellect, too, does not function, that state they call the highest.'",
     commentaryHindi:"वह हृदयस्थित [सङ्कल्पशून्य] बुद्धि किस प्रकार प्राप्त होती है? यह बतलानेके लिये योगसाधनका उपदेश किया जाता है— जिस समय अपने-अपने विषयोंसे निवृत्त हुर्इ पाँचों ज्ञानेन्द्रियाँ— ज्ञानार्थक होनेके कारण श्रोत्रादि इन्द्रियाँ ‘ज्ञान’ कही जाती हैं—मनके साथ अर्थात् वे जिसका अनुवर्तन करनेवाली हैं उस सङ्कल्पादि व्यापारसे निवृत्त हुए अन्त:करणके सहित [आत्मामें] स्थिर हो जाती हैं और निश्चयात्मिका बुद्धि भी अपने व्यापारोंमें चेष्टाशील नहीं होती—चेष्टा नहीं करती—व्यापार नहीं करती उस अवस्थाको ही परम गति कहते हैं॥ १० ॥",
     commentaryEnglish:"Yadd, at the time when; panca jnanani, the five senses of knowledge-such as ear etc., which are called jndna (knowledge), being meant for it; saha manasd, together with the mind, which the senses follow-together with the internal organ (mind) which is (now) weaned away from (its functions of) thinking etc., avatisthante, are at rest - in the Self alone, after desisting from their objects; ca buddhih, and the intellect--characterized by determination; na vicestate,I does not engage in its own activities; tam, that (state); ahuh, they call; paramam gatim, the highest state.",
     
  },
  {
     id:103,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"11",
     shlok:{
        line1:"तां योगमिति मन्यन्ते स्थिरामिन्द्रियधारणाम्। \n अप्रमत्तस्तदा भवति योगो हि प्रभवाप्ययौ॥ ११ ॥",
        
     },
     translationHindi:"उस स्थिर इन्द्रियधारणाको ही योग कहते हैं। उस समय पुरुष प्रमादरहित हो जाता है, क्योंकि योग ही उत्पत्ति और नाशरूप है॥ ११ ॥ ",
     translationEnglish:"They consider that keeping of the senses steady as yoga. One becomes vigilant at that time, for yoga is subject to growth and decay.",
     commentaryHindi:"उस ऐसी अवस्थाको ही—जो वास्तवमें वियोग ही है—योग मानते हैं, क्योंकि योगीकी यह अवस्था सब प्रकारके अनर्थसंयोगकी वियोगरूपा है। इस अवस्थामें ही आत्मा अपने अविद्यादि आरोपसे रहित स्वरूपमें स्थित रहता है। [उस अवस्थाको ही] स्थिर इन्द्रियधारणा कहते हैं—स्थिर अर्थात् अचल इन्द्रियधारणा यानी बाह्य और आन्तरिक करणोंको धारण करना। तब:उस समय साधक पुरुष अप्रमत्त:प्रमादरहित हो जाता है, अर्थात् चित्तसमाधानके प्रति सर्वदा सयत्न रहता है; जिस समय कि वह योगमें प्रवृत्त होता है [उस समय ऐसी स्थिति होती है]:ऐसा इस वाक्यकी सामर्थ्यसे जाना जाता है, क्योंकि बुद्धि आदिकी चेष्टाका अभाव हो जानेपर प्रमाद होना सम्भव नहीं है। अत: बुद्धि आदिकी चेष्टाका अभाव होनेसे पूर्व ही अप्रमादका विधान किया जाता है। अथवा जिस समय भी इन्द्रियोंकी धारणा स्थिर होती है उसी समय निरङ्कुश अप्रमत्तत्व होता है; इसीलिये ‘उस समय अप्रमत्त हो जाता हैब ऐसा कहा है। ऐसी बात क्यों है? क्योंकि योग ही प्रभव और अप्यय यानी उत्पत्ति और लयरूप धर्मवाला है; अत: तात्पर्य यह है कि अपाय (लय)-की निवृत्तिके लिये प्रमादका अभाव करना चाहिये॥ ११ ॥",
     commentaryEnglish:"Manyante, they consider; tam, that state-which is such; viz sthiram indriyadharaniam, the steady control of the senses, i.e. keeping the inner and outer organs steady; yogam iti, as yoga (joining) -though in reality it is disjunction, for this state of the yogi consists in the cessation of the contact with all evils, and in this state, indeed, is the Self established in Its own nature, free from the superimposition of ignorance. Bhavati, one becomes; apramattah, unerringever careful about the concentration of mind; tada, at that time - at the very time that one commences yoga, which meaning follows from the implication of the context; for when the intellect etc. cease to function, there can be no possibility of carelessness; therefore, the carefulness is enjoined even before the cessation of the activities of the intellect etc. Or, since unimpeded vigilance is possible only when the senses are kept steady, therefore it is stated, One becomes unerring at that time.' Why? Yogali hi prabhavd- pvavau, for yoga is subject to growth and decaythis is the meaning. Therefore, vigilance is needed for avoiding decay.] This is the idea. \n If Brahman be an object of the activities of the intellect etc., then It should be specifically apprehended as 'This is such and such'; and since It cannot be perceived on the cessation of the intellect etc., there being then no instrument for cognition, Brahman should surely have no existence (then). It is a wellknown fact in the world that a thing exists so long as it is within the range of an instrument of cognition, and the contrary one is non-existent. Hence yoga is useless; or Brahman is to be perceived as non-existing inasmuch as It cannot be cognized. This contingency having arisen, this is the reply:",
     
  },
  {
     id:104,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"12",
     shlok:{
        line1:"नैव वाचा न मनसा प्राप्तुं शक्यो न चक्षुषा। \n अस्तीति ब्रुवतोऽन्यत्र कथं तदुपलभ्यते॥ १२ ॥",
        
     },
     translationHindi:"वह आत्मा न तो वाणीसे, न मनसे और न नेत्रसे ही प्राप्त किया जा सकता है; वह ‘है’ ऐसा कहनेवालोंसे अन्यत्र (भिन्न पुरुषोंको) किस प्रकार उपलब्ध हो सकता है॥ १२ ॥ ",
     translationEnglish:" It cannot be attained through speech, nor through mind, nor through eye. How can It be known to anyone apart from him who speaks of It as existing?",
     commentaryHindi:"यदि ब्रह्म बुद्धि आदिकी चेष्टाका विषय होता तो ‘यह वह [ब्रह्म] है’ इस प्रकार विशेषरूपसे ग्रहण किया जा सकता था; किन्तु बुद्धि आदिके निवृत्त हो जानेपर तो उसे ग्रहण करनेके कारणका अभाव हो जानेसे उपलब्ध न होनेवाला वह ब्रह्म वस्तुत: है ही नहीं। लोकमें जो वस्तु इन्द्रियगोचर होती है वही ‘है’ इस प्रकार प्रसिद्ध होती है और इसके विपरीत [इन्द्रियगोचर न होनेवाली] वस्तु ‘असत्’ कही जाती है, अत: योग व्यर्थ है। अथवा उपलब्ध होनेवाला न होनेसे ब्रह्म ‘नहीं है’ इस प्रकार जानना चाहिये—ऐसा प्राप्त होनेपर यह कहा जाता है—ठीक है, तात्पर्य यह कि वह ब्रह्म न तो वाणीसे, न मनसे, न नेत्रसे और न अन्य इन्द्रियोंसे ही प्राप्त किया जा सकता है। तथापि सर्वविशेषरहित होनेपर भी ‘वह जगत्का मूल है’ इस प्रकार ज्ञात होनेके कारण वह है ही, क्योंकि कार्यका विलय किसी अस्तित्वके आश्रयसे ही हो सकता है। इसी प्रकार सूक्ष्मताकी तारतम्यपरम्परासे अनुगत होनेवाला यह सम्पूर्ण कार्यवर्ग भी सद्बुद्धिनिष्ठाको ही सूचित करता है। जिस समय विषयका विलय करते हुए बुद्धिका विलय किया जाता है उस समय भी वह सद्वृत्तिगर्भिता हुर्इ ही लीन होती है। तथा सत् और असत्का यथार्थ स्वरूप जाननेमें तो हमारे लिये बुद्धि ही प्रमाण है। यदि जगत्का कोर्इ मूल न होता तो यह सम्पूर्ण कार्यवर्ग असन्मय ही होनेके कारण ‘असत् है’ इस प्रकार ग्रहण किया जाता। किन्तु ऐसी बात नहीं है; यह जगत् तो ‘है—है’ इस प्रकार ही ग्रहण किया जाता है, जिस प्रकार कि मृत्तिका आदिके कार्य घट आदि [अपने कारण] मृत्तिका आदिसे समन्वित ही गृहीत होते हैं। अत: जगत्का मूल आत्मा ‘है’ इस प्रकार ही उपलब्ध किया जाना चाहिये। क्यों? क्योंकि आत्मा ‘है’ इस प्रकार कहनेवाले शास्त्रार्थानुसारी श्रद्धालु आस्तिक पुरुषोंसे भिन्न नास्तिक-वादियोंको, जो ऐसा मानते हैं कि ‘जगत्का मूल आत्मा नहीं है, जिसका अभाव ही अन्तिम परिणाम है ऐसा यह कार्यवर्ग कारणसे अनन्वित हुआ ही लीन हो जाता है’—ऐसे उन विपरीतदर्शियोंको वह ब्रह्म किस प्रकार तत्त्वत: उपलब्ध हो सकता है? अर्थात् किसी प्रकार उपलब्ध नहीं हो सकता॥ १२ ॥",
     commentaryEnglish:"It is true that na eva vdcd, neither through speech; na manasd, nor through mind; na cak.susd, nor through eye; nor even through the other senses; prdptum sakyah, can It be attained. This is the idea. Still though It is devoid of all attributes, It does exist, since It is known as the root of the universe; for the denial of effects presupposes some existence as their ultimate limit. Similarly, this effect (in the form of the universe) when traced back in an ascending order of subtleness, makes one apprised of the idea of existence as its ultimate resort. Even when the intellect is being attenuated through the sublation of objects, the intellect dissolves only as pregnant with a concept of existence. And reason, indeed, is the proof for us in ascertaining the real nature of the existent and the non-existent. If the world had no root, this creation would be filled with non-existence and would be perceived as non-existent. But in fact, this is not so; it is perceived as `existing', just as a pot etc., produced from earth etc., are perceived as permeated with earth. Therefore the Self, the root of the universe, is to be realized as existing. Why? Asti iti bruvatah, apart from the faithful one who, following the scriptures, speaks of existence; katham, how; can tat, that Brahman; upalabhyate, be known; anyatra, anywhere else - in the one who holds the theory of non-existence, in the one who thinks perversely in this way: The root of the world, the Self, does not exist; this effect is causeless, and it gets dissolved into non existence as its end'? The idea is that It is not perceived in any way.  ",
     
  },
  {
     id:105,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"13",
     shlok:{
        line1:"अस्तीत्येवोपलब्धव्यस्तत्त्वभावेन चोभयो:। \n अस्तीत्येवोपलब्धस्य तत्त्वभाव: प्रसीदति॥ १३ ॥",
        
     },
     translationHindi:"वह आत्मा ‘है’ इस प्रकार ही उपलब्ध किया जाना चाहिये तथा उसे तत्त्वभावसे भी जानना चाहिये। इन दोनों प्रकारकी उपलब्धियोंमेंसे जिसे ‘है’ इस प्रकारकी उपलब्धि हो गयी है तत्त्वभाव उसके अभिमुख हो जाता है॥ १३ ॥ ",
     translationEnglish:"The Self is (first) to be realized as existing, and (then) as It really is. Of these two (aspects), the real nature of the Self that has been known as merely existing, becomes favourably disposed (for selfrevelation).",
     commentaryHindi:"बुद्धि आदि जिसकी उपाधि हैं तथा जिसका सत्त्व उसके कार्यवर्गमें अनुगत है उस आत्माको ‘है’ इस प्रकार ही उपलब्ध करना चाहिये। जिस समय आत्मा उस बुद्धि आदि उपाधिसे रहित और निर्विकार जाना जाता है तथा कार्यवर्ग ‘विकार वाणीका विलास और नाममात्र है, केवल मृत्तिका ही सत्य है’ इस श्रुतिके अनुसार अपने कारणसे भिन्न नहीं है—ऐसा निश्चित होता है उस समय जिस निरुपाधिक अलिङ्ग और सत्-असत् आदि प्रतीतिके विषयत्वसे रहित आत्माका तत्त्वभाव होता है उस तत्त्वस्वरूपसे ही आत्माको उपलब्ध करना चाहिये—इस प्रकार यहाँ ‘उपलब्धव्य’ पदकी अनुवृत्ति की जाती है। सोपाधिक अस्तित्व और निरु-पाधिक तत्त्वभाव इन दोनोंमेंसे—यहाँ ‘उभयो:’ इस पदमें षष्ठी निर्धारणके लिये है—पहले तो ‘है’ इस प्रकार उपलब्ध हुए आत्माका अर्थात् सत्कार्यरूप उपाधिके किये हुए अस्तित्व-प्रत्ययसे उपलब्ध हुए आत्माका और फिर जिसकी सम्पूर्ण उपाधि निवृत्त हो गयी है और जो ज्ञात एवं अज्ञातसे भिन्न अद्वितीयस्वरूप है, उस “नेति-नेति१” “अस्थूलमनण्वह्रस्वम्२” “अदृश्येऽनात्म्येऽनिरुक्तेऽनिलयने३” इत्यादि श्रुतियोंसे निर्दिष्ट आत्माका तत्त्वभाव ‘प्रसीदति’—अभिमुख होता है अर्थात् जिसे पहले ‘है’ इस प्रकार आत्माकी उपलब्धि हो गयी है उसे अपना स्वरूप प्रकट करनेके लिये [वह तत्त्वभाव अभिमुख प्रकाशित होता है]॥ १३ ॥",
     commentaryEnglish:"Therefore, eschewing the devilish company of those who advance the theory of non-existence, asti iti eva upa/abdhavjwh, the Self should be realized as existing (i.e. immanent in all)-as productive of effects in which existence inheres, and as having the intellect etc. as Its limiting adjuncts. But when the Self is devoid of all that and is not subject to changes -and effects do not exist apart from their cause, because of the Vedic text, 'All transformation has speech as its basis, and it is name only. Earth as such is the reality' (Ch. VI. 1. 4) then, of that unconditioned, attributeless Self that is free from becoming an object of such concepts as existence and non-existence; tattvabhavah, the true (transcendental) nature-(bhavati) is revealed. (Tattvabhavena), in that (truly revealed) form too--'is the Self to he realized', this much is to be supplied. The sixth (genitive) case in uhhavoh is used to imply selection. Uhhaj•oh, of the two (aspects), again -of the conditioned and the unconditioned, of the aspects of immanence and transcendence; the tattvabadvah, the real (transcendental) aspect; asti iti eva upalahdhasva, of that very Self which was earlier realized as existing' (as immanent), i.e. which was known through the idea of existence called up by the limiting adjuncts that are themselves the effects of an existing entity; (that real aspect of that very Self) prasidati, becomes favourably disposed for revealing Itself later on- i.e. to the man who had realized It earlier as existence; the real aspect being that from which all limiting adjuncts have vanished, which is different from the known and unknown, is non-dual by nature, and is ascertained by such Vedic text as, `not this, not this' (Br. II. iii. 6, III. ix. 26), not gross, not subtle, not short' (Br. III. viii. 8), in the changeless, bodiless, inexpressible, unsupporting' (Tai. II. vii. 1), etc.",
     
  },
  {
     id:106,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"14",
     shlok:{
        line1:"यदा सर्वे प्रमुच्यन्ते कामा येऽस्य हृदि श्रिता:। \n अथ मर्त्योऽमृतो भवत्यत्र ब्रह्म समश्नुते॥ १४ ॥",
        
     },
     translationHindi:"जिस समय सम्पूर्ण कामनाएँ, जो कि इसके हृदयमें आश्रय करके रहती हैं, छूट जाती हैं उस समय वह मर्त्य (मरणधर्मा) अमर हो जाता है और इस शरीरसे ही ब्रह्मभावको प्राप्त हो जाता है॥ १४ ॥ ",
     translationEnglish:"When all desires clinging to one's heart fall off, then a mortal becomes immortal (and he) attains Brahman here.",
     commentaryHindi:"जब—जिस समय सम्पूर्ण कामनाएँ कामनायोग्य अन्य पदार्थका अभाव होनेके कारण छूट जाती हैं—छिन्न-भिन्न हो जाती हैं, जो कि बोध होनेसे पूर्व इस विद्वान्के हृदय—बुद्धिमें आश्रित रहती हैं— क्योंकि बुद्धि ही कामनाओंका आश्रय है, आत्मा नहीं; जैसा कि “कामना, संकल्प [और संशय—ये सब मन ही हैं]” इत्यादि एक दूसरी श्रुतिसे भी सिद्ध होता है। तब फिर जो आत्मसाक्षात्कारसे पूर्व मरणधर्मा था वह जीव आत्मज्ञान होनेके अनन्तर अविद्या, कामना और कर्मरूप मृत्युका नाश हो जानेसे अमर हो जाता है। परलोकमें गमन करानेवाले मृत्युका विनाश हो जानेसे वहाँ जाना सम्भव न होनेके कारण वह इस लोकमें ही दीपनिर्वाणके समान सम्पूर्ण बन्धनोंके नष्ट हो जानेसे ब्रह्मभावको प्राप्त हो जाता है, अर्थात् ब्रह्म ही हो जाता है॥ १४ ॥",
     commentaryEnglish:"Thus, of the man who has realized the supreme Reality, yadd, when; sarve kdmuh, all desires; pramucyante, fall off, are broken to pieces, owing to the absence of anything else to be desired; ye, the desires which; hrdi sritdh, clung to the heart; asya, of that man of knowledge, before his enlightenment - the intellect, and not the Self, being the seat of the desires, which fact is also supported by another Vedic text, 'desire, thought, (doubt, etc., all these are but the mind)' (Br. I. v. 3): atha, then; he who was before enlightenment mart rah, mortal; amrtah bhavati, be- nlightenment -' by virtue of comes immortal, after enlightenment-' the elimination of death constituted by ignorance, desire, and deeds: death, which causes departure, having been destroyed, there remains no possibility of departure, and hence atra, here itself; owing to the cessation of all bondage, like the blowing out of a lamp. samasnute brahma, (he) attains Brahman, i.e. (he) becomes Brahman Itself. When again will the desires be totally uprooted? This is being said:",
     
  },
  {
     id:107,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"15",
     shlok:{
        line1:"यदा सर्वे प्रभिद्यन्ते हृदयस्येह ग्रन्थय:। \n अथ मर्त्योऽमृतो भवत्येतावद्ध्यनुशासनम्॥ १५ ॥",
        
     },
     translationHindi:"जिस समय इस जीवनमें ही इसके हृदयकी सम्पूर्ण ग्रन्थियोंका छेदन हो जाता है उस समय यह मरणधर्मा अमर हो जाता है। बस सम्पूर्ण वेदान्तोंका इतना ही आदेश है॥ १५ ॥ ",
     translationEnglish:" When all the knots of the heart are destroyed, even while a man is alive, then a mortal becomes immortal. This much alone is the instruction (of all the Upanisads).",
     commentaryHindi:"जिस समय यहाँ—जीवित रहते हुए ही इसके हृदयकी—बुद्धिकी सम्पूर्ण ग्रन्थियाँ अर्थात् दृढ बन्धनरूप अविद्याजनित प्रतीतियाँ छिन्न-भिन्न होती—भेदको प्राप्त होती अर्थात् नष्ट हो जाती हैं—‘मैं यह शरीर हूँ, यह मेरा धन है, मैं सुखी हूँ, मैं दु:खी हूँ’ इत्यादि प्रकारके अनुभव अविद्या-प्रत्यय हैं; उसके विपरीत ब्रह्मात्मभावके अनुभवकी उत्पत्तिसे ‘मैं असंसारी ब्रह्म ही हूँ’ ऐसे बोधद्वारा अविद्यारूप ग्रन्थियोंके नष्ट हो जानेपर उसके निमित्तसे हुर्इ कामनाएँ समूल नष्ट हो जाती हैं। तब वह मर्त्य (मरणधर्मा जीव) अमर हो जाता है। बस इतना ही सम्पूर्ण वेदान्तोंका अनुशासन— आदेश है; इससे अधिक कुछ और है ऐसी आशङ्का नहीं करनी चाहिये। यहाँ ‘सर्ववेदान्तानाम्’ यह वाक्यशेष है॥ १५ ॥",
     commentaryEnglish:"Yadd, when; sarve granthavah, all the knots-i.e. all concepts arising from ignorance, that bind one fast like knots; hrdavasva, of the intellect; prabhid- vante, get shattered, are destroyed; iha, here-even while a man is living. The concepts arising from ignorance are, 'I am this body', This wealth is mine', 'I am happy and unhappy', etc. When the bondages of ignorance are destroyed by the rise of the opposite knowledge of the identity of the Self and Brahman, in the form, 'I am Brahman indeed, and am not a transmigrating soul', then the desires originating from the knots become totally eradicated. Atha martvah amrtah hhavati, then a mortal becomes immortal. Eta-vat hi, this much only is-there should not be any anticipation that there is more; anusa- sanam, the instruction; the expression, of all the Upanisads', should be supplied to complete the sentence. \n By asserting He attains Brahman here' (11. iii. 14). it has been declared that there is no going for an enlightened man of whom all the knots of ignorance become destroyed on the realization of the identity of the Self with the all-pervading and absolutely attributeless Brahman, and who becomes Brahman even while living, which fact is also supported by another Vedic text: Of him the organs do not depart. Being but Brahman he is merged in Brahman.' (Br. IV. iv. 6) But for those who are not much advanced in the knowledge of Brahman, who are engaged in other kinds of knowledge (i.e. in worship and meditation), and who are fit for the world of Brahma, as also for those others who are the opposite of these and are fit for worldly existence, this particular kind of path is stated with a view to eulogizing the superior result of the knowledge of Brahman that is being treated here. Moreover, the knowledge of Fire had been questioned about and was imparted. The process of the attainment of the fruit of that knowledge has also to be described. Hence this verse is begun. As to that,",
     
  },
  {
     id:108,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"16",
     shlok:{
        line1:"शतं चैका च हृदयस्य नाड्य- स्तासां मूर्धानमभिनि:सृतैका। \n तयोर्ध्वमायन्नमृतत्वमेति विष्वङ्ङन्या उत्क्रमणे भवन्ति॥ १६ ॥",
        
     },
     translationHindi:"इस हृदयकी एक सौ एक नाडियाँ हैं; उनमेंसे एक मूर्धाका भेदन करके बाहरको निकली हुर्इ है। उसके द्वारा ऊर्ध्व—ऊपरकी ओर गमन करनेवाला पुरुष अमरत्वको प्राप्त होता है। शेष विभिन्न गतियुक्त नाडियाँ उत्क्रमण (प्राणोत्सर्ग)-की हेतु होती हैं॥ १६ ॥",
     translationEnglish:"The nerves of the heart are a hundred and one in number. Of them one passes through (the crown of) the head. Going up through that (nerve) one gets immortality. The others that have different directions, become the causes of death.",
     commentaryHindi:"जिसमें सम्पूर्ण विशेषणोंका अभाव है उस सर्वव्यापक ब्रह्मको ही अपने आत्मस्वरूपसे जान लेनेके कारण जिसकी अविद्या आदि समस्त ग्रन्थियाँ टूट गयी हैं और जो जीवितावस्थामें ही ब्रह्मभावको प्राप्त हो गया है उस विद्वान्का कहीं गमन नहीं होता—ऐसा पहले कहा गया, क्योंकि [चौदहवें मन्त्रमें] ‘इस शरीरमें ही ब्रह्मभावको प्राप्त हो जाता है’—ऐसा कहा है। “उसके प्राण उत्क्रमण नहीं करते वह ब्रह्मरूप हुआ ही ब्रह्ममें लीन हो जाता है” इस एक दूसरी श्रुतिसे भी यही निश्चय होता है। किन्तु जो मन्द ब्रह्मज्ञानी और अन्य विद्या (उपासना)-का परिशीलन करनेवाले ब्रह्मलोकप्राप्तिके अधिकारी हैं अथवा जो उनसे विपरीत [जन्म-मरणरूप] संसारको ही प्राप्त होनेवाले हैं, उन्हींकी किसी गति-विशेषका वर्णन यहाँ प्रकरणप्राप्त ब्रह्मविद्याके उत्कृष्ट फलकी स्तुतिके लिये किया जाता है। इसके सिवा नचिकेताके पूछनेपर यमराजने पहले अग्निविद्याका भी वर्णन किया था; उस अग्निविद्याके फलकी प्राप्तिका प्रकार भी बतलाना है ही। इसी अभिप्रायसे इस मन्त्रका आरम्भ किया जाता है। वहाँ [कहना यह है कि— पुरुषके हृदयसे सौ अन्य और सुषुम्ना नामकी एक—इस प्रकार [एक सौ एक] नाडियाँ—शिराएँ निकली हैं। उनमें सुषुम्ना-नाम्नी नाडी मस्तकका भेदन करके बाहर निकल गयी है। अन्तकालमें उसके द्वारा आत्माको अपने हृदयदेशमें वशीभूत करके समाहित करे। उस नाडीके द्वारा ऊर्ध्व—ऊपरकी ओर जानेवाला जीव सूर्यमार्गसे अमृतत्व—आपेक्षिक अमरण-धर्मत्वको प्राप्त हो जाता है, जैसा कि “सम्पूर्ण भूतोंके क्षयपर्यन्त रहनेवाला स्थान अमृतत्व कहलाता है” इस स्मृतिसे प्रमाणित होता है। अथवा [यह भी तात्पर्य हो सकता है कि] कालान्तरमें ब्रह्माके साथ ब्रह्मलोकके अनुपम भोगोंको भोगकर मुख्य अमृतत्वको प्राप्त करता है। इसके सिवा जिनकी गति विविध भाँतिकी हैं ऐसी अन्य सब नाडियाँ प्राणप्रयाणकी हेतु होती हैं, अर्थात् वे संसारप्राप्तिके लिये ही होती हैं॥ १६ ॥",
     commentaryEnglish:"The nerves that issue out of the heart of a man are satam, a hundred in number; ca eka, and one-called susumna. Tasam, of these; eka. the one-the susumna; abhinilzsrta, goes out, by piercing through murdhanam, (the crown of) the head. At the time of death one should bring one's mind under control through that (susumna) nerve, and get it concentrated in the heart. Tana, through that nerve: firdlivam ~i ' ran. going up -along the Path of Sun (uttara-marga); one eti, attains; amrtatvam. immortality--which is relative because of the Smrti, The place (i. e. Brahma- loka) that lasts till the absorption of all the elements (i. e. cosmic dissolution) is called immortality.' (V. P. 11. viii. 97) Or, after having enjoyed incomparable pleasures abounding in the world of Brahma, he attains immortality, in the primary sense of the word. along with Hiranyagarbha (Brahma), in due course of time. Visvak anydh, the other nerves that branch out (otherwise), in different directions; become the causes utkramane, of death, i.e. for the attainment of the worldly state alone. \n Now, with a view to concluding the purport of all the cantos the Upanisad says:",
     
  },
  {
     id:109,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"17",
     shlok:{
        line1:"अङ्गुष्ठमात्र: पुरुषोऽन्तरात्मा सदा जनानां हृदये संनिविष्ट:। \n तं स्वाच्छरीरात्प्रवृहेन्मुञ्जादिवेषीकां धैर्येण। तं विद्याच्छुक्रममृतं तं विद्याच्छुक्रममृतमिति॥ १७ ॥",
        
     },
     translationHindi:" अङ्गुष्ठमात्र पुरुष, जो अन्तरात्मा है सर्वदा जीवोंके हृदयदेशमें स्थित है। मूँजसे सींकके समान उसे धैर्यपूर्वक अपने शरीरसे बाहर निकाले [अर्थात् शरीरसे पृथक् करके अनुभव करे]। उसे शुक्र (शुद्ध) और अमृतरूप समझे, उसे शुक्र और अमृतरूप समझे॥ १७ ॥",
     translationEnglish:"The Purusa, the indwelling Self, of the size of a thumb, is ever seated in the hearts of men. One should unerringly separate Him from one's body like a stalk from the Mufija grass. Him one should know as pure and immortal. Him one should know as pure and immortal.",
     commentaryHindi:"विद्यास्तुत्यर्थोऽयमाख्यायिकार्थोपसंहारोऽधुनोच्यते— अङ्गुष्ठमात्र पुरुष, जिसकी व्याख्या पहले (क० उ० २। १। १२-१३ में) की जा चुकी है और जो जीवोंके हृदयमें स्थित उनका अन्तरात्मा है उसे अपने शरीरसे बाहर करे—ऊपर नियन्त्रित करे—निकाले अर्थात् शरीरसे पृथक् करे। किस प्रकार पृथक् करे? इसपर कहते हैं—धैर्य अर्थात् अप्रमादपूर्वक इस प्रकार अलग करे जैसे मूँजसे उसके भीतर रहनेवाली सींक की जाती है। शरीरसे पृथक् किये हुए उस (अङ्गुष्ठमात्र पुरुष)-को ही पूर्वोक्त चिन्मात्र विशुद्ध और अमृतमय ब्रह्म जाने। यहाँ ‘तं विद्याच्छुक्रममृतम्’ इस पदकी द्विरुक्ति और ‘इति’ शब्द उपनिषद्की समाप्तिके लिये हैं॥ १७ ॥ ",
     commentaryEnglish:"Ahgusthamdtrah purusah antardtmd sadd jand- ndm hrdaye, in the heart as related to men; samni- vistah -all this is as has been already explained (vide II. i. 12-13). Tam. Him; pravrhet, one should raise, should pull out, i.e. should separate; svdt .sarirdt, from one's own body. Like what? That is being said: Dhairyena, unerringly; isikdm iva munjdt, like a stalk from the Munja grass, that is inside it. Vidydt, one should know; tam, that thing-the absolute Consciousness that has been separated from the body; to be sukram amrtam, pure and immortal -to be the Brahman previously described. The repetition (of `Him one should . . .', etc.), as also the word iti, is to show that the Upanisad is concluded. \n Now this conclusion of the purport of the story is being stated with a view to eulogizing the knowledge:",
     
  },
  {
     id:110,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"18",
     shlok:{
        line1:"मृत्युप्रोक्तां नचिकेतोऽथ लब्ध्वा विद्यामेतां योगविधिं च कृत्स्नम्।  \n ब्रह्मप्राप्तो विरजोऽभूद्विमृत्यु- रन्योऽप्येवं यो विदध्यात्ममेव॥ १८ ॥",
        
     },
     translationHindi:"मृत्युकी कही हुर्इ इस विद्या और सम्पूर्ण योगविधिको पाकर नचिकेता ब्रह्मभावको प्राप्त, विरज (धर्माधर्मशून्य) और मृत्युहीन हो गया। दूसरा भी जो कोर्इ अध्यात्म-तत्त्वको इस प्रकार जानेगा वह भी वैसा ही हो जायगा॥ १८ ॥ ",
     translationEnglish:"Naciketa, having first become free from virtue and vice, as also desire and ignorance, by acquiring this knowledge imparted by Death, as also the process of yoga in its totality, attained Brahman. Anyone else, too, who becomes a knower thus (like Naciketa) of the indwelling Self, (attains Brahman).",
     commentaryHindi:"मृत्युकी कही हुर्इ इस पूर्वोक्त ब्रह्मविद्या और कृत्स्न—सम्पूर्ण योग-विधिको, उसके साधन और फलके सहित, वरप्रदानके कारण मृत्युसे प्राप्त कर नचिकेता, क्या हो गया? [इसपर कहते हैं—] ब्रह्मभावको प्राप्त हो गया, अर्थात् मुक्त हो गया। सो किस प्रकार? [इसपर कहते हैं—] विद्याकी प्राप्तिद्वारा पहले विरज—धर्माधर्मसे रहित और विमृत्यु—काम और अविद्यासे रहित होकर [मुक्त हो गया] ऐसा इसका तात्पर्य है। केवल नचिकेता ही नहीं, बल्कि नचिकेताके समान जो दूसरा भी आत्मज्ञानी है अर्थात् जो अपने देहादिके अधिष्ठाता उपचारशून्य प्रत्यक्स्वरूप-को—यही तत्त्व है, अन्य अप्रत्यक्रूप नहीं—ऐसा जानता है, जो उक्त प्रकारसे अपने उसी अध्यात्मरूपको जानता है अर्थात् जो उसी प्रकार जाननेवाला है वह भी विरज (धर्माधर्मसे रहित) होकर ब्रह्मप्राप्तिद्वारा मृत्युहीन हो जाता है—वह वाक्य शेष है॥ १८ ॥",
     commentaryEnglish:"Naciketa, labdhva, having attained-from Death, through the granting of boons; mrtyuproktam etam vidydm, this knowledge of Brahman imparted by Death-as stated above; yogavidhim ca krtsnam, and the process of yoga in its entirety, i.e. together with all its accessories and results. What happened to him after that? Brahmapraptah abhut, (he) attained Brahman, i.e. became free. How? By having already become virajah, free from virtue and vice; (and) vimrtyuh, free from desire and ignorance, through the acquisition of knowledge. Not only Naciketa, but anvah api, anyone else, too--becomes like Naciketa (a knower of Brahman) by attaining the Self, existing in the context of the body, as one's own innermost reality in Its absoluteness, and not in any form other than as the indwelling Self. He who knows adhy0t- mam eva, the Self that exists in the context of the body--in the manner as described, who is an cwarn- vit, a knower of this kind; he, too, having become t'irajah, (free from virtue and vice); becomes vimrt- vull (free from desire and ignorance)' - by knowing Brahman' --this (sentence) is to be added to complete the idea.  This valedictory prayer is uttered with a view to removing all faults incurred by the disciple and the teacher through lapses resulting from inadvertence during the course of acquiring or imparting the knowledge:",
     
  },
  {
     id:111,
     Part:" 2",
     Valli:" 3",
     mantraNumber:"19",
     shlok:{
        line1:"ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। \n तेजस्वि नावधीतमस्तु मा विद्विषावहै॥ १९ ॥",
        
     },
     translationHindi:"परमात्मा हम [आचार्य और शिष्य] दोनोंकी साथ-साथ रक्षा करे। हमारा साथ-साथ पालन करे। हम साथ-साथ विद्यासम्बन्धी सामर्थ्य प्राप्त करें। हमारा अध्ययन किया हुआ तेजस्वी हो। हम द्वेष न करें॥ १९ ॥ ",
     translationEnglish:"May He protect us both (by revealing knowledge). May He protect us both (by vouchsafing the results of knowledge). May we attain vigour together. Let what we study he invigorating. May we not cavil at each other. Om! Peace! Peace! Peace!",
     commentaryHindi:"विद्याके स्वरूपका प्रकाशन कर हम दोनोंकी साथ-साथ रक्षा करे। कौन [रक्षा करे? इसपर कहते हैं—] वह उपनिषत्प्रकाशित परमेश्वर ही [हमारी रक्षा करे]। तथा उसके फलको प्रकाशित कर वह हम दोनोंका साथ-साथ पालन करे। हम अपने विद्याकृत वीर्य—सामर्थ्यको साथ-साथ ही सम्पादित करें—प्राप्त करें। और हम तेजस्वियोंका जो अध्ययन किया हुआ है वह सुपठित हो। अथवा तेजस्वी हो अर्थात् हमलोगोंका जो अध्ययन किया हुआ है वह अत्यन्त तेजस्वी यानी वीर्यवान् हो। हम शिष्य और आचार्य परस्पर विद्वेष न करें अर्थात् हम प्रमादकृत अन्यायसे अध्ययन और अध्यापनमें हुए दोषोंके कारण परस्पर एक-दूसरेसे द्वेष न करें। ‘शान्ति: शान्ति: शान्ति:’ इस प्रकार ‘शान्ति:’ शब्दका तीन बार उच्चारण [आध्यात्मिकादि] सम्पूर्ण दोषोंकी शान्तिके लिये किया गया है। इत्योम्॥ १९ ॥",
     commentaryEnglish:"Avatu, may He protect; saha nau, both of us together-by revealing the real nature of knowledge. Who That supreme God Himself who is revealed in the Upanisads. Besides, bhunaktu, may He protect; saha nau, both of us together-by revealing the result of that knowledge. Karavavahai, may we both accomplish; saha, together -jointly indeed; viryam, the power-originating from knowledge. Moreover, let adhitam, the lesson; tejasvinau (is to be construed as tejasvinoh), of us two who are of sharp intellect (be befitting for us)-let what has been studied by us be well studied. Or the meaning is: Let nau adhitam, what has been studied by us two; be very tejasvi, potent, invigorating Ma vidvisavahai, may we two not cavil at each other--i. e. may we not entertain that antagonism subsisting between a disciple and his teacher owing to defects in study and teaching that originate from unwitting lapses. Sanitih, santih, santih, peace, peace, peace -this repetition for three times is to avert all evils. t Om.",
     
  },
  
];

function KathaUpanishad() {
  const [isOpen, setIsOpen] = useState(false);
  const [commentryopen, setcommentryopen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLanguageCommentry, setselectedLanguageCommentry] =
    useState(null);
  const [currentMantraIndex, setCurrentMantraIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlecommentry = () => {
    setcommentryopen(!commentryopen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleLanguageCommentry = (language) => {
    setselectedLanguageCommentry(language);
  };

  const handleNext = () => {
    if (currentMantraIndex < Vedas.length - 1) {
      setCurrentMantraIndex(currentMantraIndex + 1);
      setIsOpen(false);
      setcommentryopen(false);
      setSelectedLanguage(null);
      setselectedLanguageCommentry(null);
    }
  };

  const handlePrevious = () => {
    if (currentMantraIndex > 0) {
      setCurrentMantraIndex(currentMantraIndex - 1);
      setIsOpen(false);
      setcommentryopen(false);
      setSelectedLanguage(null);
      setselectedLanguageCommentry(null);
    }
  };

  // Ensure Vedas is defined and has the expected structure
  if (!Vedas || !Array.isArray(Vedas) || Vedas.length === 0) {
    return <div>No data available</div>;
  }

  const currentMantra = Vedas[currentMantraIndex];

  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="p-6 bg-gray-800 sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[80vh] w-full sm:w-[250px]">
            <div className="space-y-4">
              <div>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r2b:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 mb-2 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                >
                  <span style={{ pointerEvents: "none" }}>
                    Part {currentMantra?.Part ?? ""}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r2b:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 mb-2 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                >
                  <span style={{ pointerEvents: "none" }}>
                    Valli {currentMantra?.Valli ?? ""}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r2b:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                >
                  <span style={{ pointerEvents: "none" }}>
                    Mantra {currentMantra?.mantraNumber ?? ""}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 lg:h-[80vh] overflow-y-auto">
            <div className="mb-6 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Katha Upanishad</h2>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs"
                  placeholder="Search mantras..."
                  type="text"
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  Search
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border-2 bg-white p-6 shadow-lg border-gray-300">
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex text-sm font-medium">
                      <span>Chapter{currentMantra?.Part ?? ""}</span>
                      <span> &nbsp; &gt; &nbsp; </span>
                      <span style={{ pointerEvents: "none" }}>
                       Valli {currentMantra?.Valli ?? ""}
                      </span>
                      <span> &nbsp; &gt; &nbsp; </span>
                      <span>Mantra {currentMantra?.mantraNumber ?? ""}</span>
                    </div>
                    <div>
                      {(currentMantra?.shlok?.line1 ?? "")
                        .split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <button
                  type="button"
                  aria-controls="translation-card"
                  aria-expanded={isOpen}
                  data-state={isOpen ? "open" : "closed"}
                  onClick={handleToggle}
                  className="flex text-white w-full items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
                >
                  Translations
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {isOpen && (
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageSelect("hindi")}
                      >
                        Hindi
                      </button>
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageSelect("english")}
                      >
                        English
                      </button>
                    </div>
                    {selectedLanguage && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {selectedLanguage === "hindi"
                            ? "Hindi Translation"
                            : "English Translation"}
                        </h3>
                        <p>
                          {selectedLanguage === "hindi"
                            ? currentMantra?.translationHindi
                                ?.split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                            : currentMantra?.translationEnglish}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div data-state="closed" className="space-y-4">
                <button
                  type="button"
                  aria-controls="translation-card"
                  aria-expanded={commentryopen}
                  data-state={commentryopen ? "open" : "closed"}
                  onClick={handlecommentry}
                  className="flex w-full text-white items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
                >
                  Commentary
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 transition-transform ${
                      commentryopen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {commentryopen && (
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageCommentry("hindi")}
                      >
                        Hindi
                      </button>
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageCommentry("english")}
                      >
                        English
                      </button>
                    </div>
                    {selectedLanguageCommentry && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {selectedLanguageCommentry === "hindi"
                            ? "Hindi Commentary"
                            : "English Commentary"}
                        </h3>
                        <p>
                          {selectedLanguageCommentry === "hindi"
                            ? currentMantra?.commentaryHindi
                                .split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                            : currentMantra?.commentaryEnglish}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  disabled={currentMantraIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center justify-center bg-black text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  disabled={currentMantraIndex === Vedas.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KathaUpanishad;
