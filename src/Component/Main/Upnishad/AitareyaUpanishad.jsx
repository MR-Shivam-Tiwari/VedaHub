import React, { useState } from "react";
const Vedas = [
  {
    id: 1,
    Chapter: "1",
    Khand: "1",
    Shloka:
      "ॐ आत्मा वा इदमेक एवाग्र आसीत्। नान्यत्किंचन मिषत्। स ईक्षत लोकान्नु सृजा इति॥ १ ॥",
    HindiTranslation:
      "ॐ आत्मा वा इदमेक एवाग्र आसीत्। नान्यत्किंचन मिषत्। स ईक्षत लोकान्नु सृजा इति॥ १ ॥ पहले यह [जगत्] एकमात्र आत्मा ही था; उसके सिवा और कोर्इ सक्रिय वस्तु नहीं थी। उसने यह सोचा कि ‘लोकोंकी रचना करूँ’॥ १ ॥",
    EnglishTranslation:
      "Om! In the beginning this was but the absolute Self alone. There was nothing else whatsoever that winked. It thought, `Let Me create the worlds.'",
    HindiCommentry:
      "[व्याप्तिबोधक] ‘आप्’, [भक्षणार्थक] ‘अद्’ अथवा [सतत गमनबोधक] ‘अत्’ धातुसे ‘आत्मा’ शब्द निष्पन्न हुआ है। यह जो नाम, रूप और कर्मके भेदसे विविधरूप प्रतीत होनेवाला जगत् कहा गया है वह पहले यानी संसारकी सृष्टिसे पूर्व सर्वश्रेष्ठ, सर्वज्ञ, सर्वशक्तिमान् क्षधुा-पिपासा आदि सम्पूर्ण सांसारिक धर्मोंसे रहित, नित्य-शुद्ध-बुद्ध-मुक्त स्वभाव, अजन्मा, अजर, अमर, अमृत, अभय और अद्वयरूप आत्मा ही था। पूर्व०—क्या इस समय भी एक-मात्र वही नहीं है? सिद्धान्ती—ऐसी बात नहीं है। पूर्व०—तो फिर ‘आसीत् (था)’ ऐसा क्यों कहा है? सिद्धान्ती—यद्यपि इस समय भी अकेला वही है तो भी कुछ विशेषता अवश्य है। [वह विशेषता यही है कि] उत्पत्तिसे पूर्व यह जगत् नाम-रूपादि भेदके व्यक्त न होनेके कारण आत्मभूत और एक ‘आत्मा’ शब्दकी प्रतीतिका ही विषय था और इस समय नाम-रूपादि भेदके व्यक्त हो जानेसे वह अनेक शब्दोंकी प्रतीतिका विषय तथा एकमात्र ‘आत्मा’ शब्दकी प्रतीतिका विषय भी हो रहा है;। जिस प्रकार जलसे पृथक् फेनके नाम और रूपकी अभिव्यक्ति होनेसे पूर्व फेन एकमात्र ‘जल’ शब्दकी प्रतीतिका ही विषय था; किन्तु जिस समय वह जलसे अलग नाम और रूपके भेदसे व्यक्त हो जाता है उस समय वह फेन ‘जल’ और ‘फेन’ इस प्रकार अनेक शब्दोंकी प्रतीतिका विषय तथा केवल ‘जल’ इस एक शब्दकी प्रतीतिका विषय भी हो जाता है; उसी प्रकार [उपर्युक्त भेद भी समझना चाहिये]। उसके सिवा अन्य कोर्इ व्यापारयुक्त अथवा निष्क्रिय वस्तु नहीं थी। जिस प्रकार सांख्यवादियोंके मतमें आत्मासे अतिरिक्त स्वतन्त्र प्रधान था, तथा कणादमतावलम्बियोंके विचारमें परमाणु थे उस प्रकार इस (औपनिषद सिद्धान्त)-में आत्मासे अतिरिक्त और कोर्इ वस्तु नहीं थी। तो फिर क्या था? एकमात्र आत्मा ही था—यह इसका अभिप्राय है। सर्वज्ञस्वभाव होनेके कारण उस आत्माने अकेले होते हुए ही ईक्षण (चिन्तन) किया। यदि कहो कि जगत्की उत्पत्तिसे पूर्व कार्य और करणका अभाव रहते हुए भी उसने किस प्रकार ईक्षण किया? तो यह कोर्इ दोषकी बात नहीं है; क्योंकि वह आत्मा स्वभावसे ही सर्वज्ञ है। इस विषयमें “हाथ-पाँववाला न होकर भी वेगवान् और ग्रहण करनेवाला है’ इत्यादि मन्त्रवर्ण भी है। उसने किस अभिप्रायसे ईक्षण किया? इसपर श्रुति कहती है—‘मैं प्राणियोंके कर्मफलोपभोगके आश्रयभूत अम्भ आदि लोकोंकी रचना करूँ’ इस प्रकार ईक्षण किया॥ १ ॥",
    EnglishCommentry:
      "Atmd vai, the absolute' Self. The word alma, Self, is derived in the sense of comprehending, engulfing, or pervading, and by it is signified one that is the highest, omniscient, omnipotent, and devoid of all such worldly attributes as hunger; by nature eternal, pure, conscious, and free; birthless, undecaying, immortal, deathless, fearless, and without a second. Idam, this - all that has been referred to as this world, diversified through the differences of name, form, and action; asht, was; agre, in the beginning, before the creation of this world; alma ekah eva, but the one Self. \n Objection: Has It ceased to be the same one entity? \n Answer: No. \n Objection: Why is it then said, `It was'? \n Answer : Though even now that very same single entity endures, still there is some distinction. The distinction is this: The universe in which the differences of name and form were not manifest before creation, which was then one with the Self, and which was denotable by the single word and idea `Self', has now become denotable by many words and concepts as well as by the single word and concept `Self', because of its diversification through the multiplicity of names and forms. Foam is denoted by the single word and concept `water', before the manifestation of names and forms distinct from water; but when that foam becomes manifested as (an entity) distinct from water, owing to the difference of name and form, then the very same foam becomes denotable by many words and concepts, viz foam and water, as well as by only one word and one concept, viz water. The same is the case here. Na anyat kimcana, there was nothing else whatsoever; misat, winking, that was active or tractive. Unlike the?ra- dhana of the Samkhyas, which is an independent entity and not of the same class as the selves, and unlike the atoms of the followers of Kanada, there remained here nothing whatsoever apart from the Self. What (existed) then? The Self alone existed. This is the idea. Sah, that Self; being naturally omniscient, Tksata, thought; even though It was but one. \n Objection: Since the Self was devoid of body and senses, how could It think before creation? \n Answer: This is no fault, because of Its nature of omniscience, in support of which fact is the mantra text, 'Without hands and feet He goes and grasps' etc. (9v. III. 19). With what motive (did He think)? The answer is: srjai, let Me create; lokdn, the worlds-(viz) ambhas etc., which are the places for the enjoyment of the fruits of work done by creatures. Having visualized, i.e. deliberated, thus,",
    Mantra: "1",
  },
  {
    id: 2,
    Chapter: "1",
    Khand: "1",
    Shloka:
      "स इमाँल्लोकानसृजत। अम्भो मरीचीर्मरमापोदोऽम्भ: परेण दिवं द्यौ: प्रतिष्ठान्तरिक्षं मरीचय: पृथिवी मरो या अधस्तात्ता आप:॥ २ ॥",
    HindiTranslation:
      "उसने अम्भ, मरीचि, मर और आप—इन लोकोंकी रचना की। जो द्युलोकसे परे है और स्वर्ग जिसकी प्रतिष्ठा है वह ‘अम्भ’ है, अन्तरिक्ष (भुवर्लोक) ‘मरीचि’ है, पृथिवी ‘मरलोक’ है और जो [पृथिवी] नीचे है वह ‘आप’ है॥ २ ॥",
    EnglishTranslation:
      "He created these worlds, viz ambhas, marici, mara, dpah. That which is beyond heaven is ambhas. Heaven is its support. The sky is marici. The earth is mara. The worlds that are below are the dpah.",
    HindiCommentry:
      "उस आत्माने इन लोकोंकी रचना की। जिस प्रकार इस लोकमें बुद्धिमान् शिल्पकार आदि ‘मैं इस प्रकारके महल आदि बनाऊँ’ ऐसा विचार करके उस विचारके अनन्तर ही महल आदिकी रचना करते हैं उसी प्रकार [उसने ईक्षण करके इन लोकादिकी रचना की]। शंका—शिल्पकारादि तो उन महल आदिकी उपादान सामग्रीसे युक्त होते हैं इसलिये वे महल आदिकी रचना करते हैं—ऐसा कहना ठीक ही है; किन्तु उपादान (सामग्री)-से रहित आत्मा किस प्रकार लोकोंकी रचना करता है? समाधान—यह कोर्इ दोष नहीं है; क्योंकि जलमें [व्यक्त न हुए] फेनस्थानीय अव्याकृत नाम और रूप, जो आत्मस्वरूप और एकमात्र ‘आत्मा’ शब्दके ही वाच्य हैं, व्याकृत फेनस्वरूप जगत्के उपादान हो सकते हैं। अत: वह सर्वज्ञ आत्मा अपने आत्मभूत नाम और रूपका उपादानस्वरूप होकर जगत्की रचना करता है—इसमें कोर्इ विरोध नहीं है। अथवा जिस प्रकार बुद्धियुक्त मायावी कोर्इ उपादान न होनेपर भी स्वयं अपनेहीको अपने अन्यरूपसे आकाशमें चलता हुआ-सा बना लेता है, उसी प्रकार वह सर्वशक्तिमान्, महामायावी, सर्वज्ञ देव अपनेहीको जगत्-रूप अपने अन्य स्वरूपसे रच लेता है—यह बहुत युक्तियुक्त ही है। ऐसा होनेपर कार्य और कारण—इन दोनोंको असत् बतलानेवालोंके [असद्वाद आदि] पक्षोंकी प्राप्ति नहीं होती और उनका पूर्णतया निराकरण हो जाता है। उसने किन लोकोंकी रचना की? इसपर कहते हैं—अम्भ, मरीचि, मर और आप आदिकी। उसने आकाशादि-क्रमसे अण्डको उत्पन्न कर अम्भ आदि लोकोंकी रचना की। उन अम्भ आदि लोकोंकी श्रुति स्वयं ही व्याख्या करती है। अद:—वह ‘अम्भ’ शब्दसे कहा जानेवाला लोक है, जो द्युलोकसे परे है; वह जल (मेघों)-को धारण करनेवाला होनेसे ‘अम्भ’ शब्दसे कहा जाता है। उस अम्भलोकका द्युलोक प्रतिष्ठा यानी आश्रय है। द्युलोकसे नीचे जो अन्तरिक्ष है वह मरीचिलोक है। वह एक होनेपर भी अनेकों स्थानभेदोंके कारण ‘मरीचय:’ इस प्रकार बहुवचनरूपसे प्रयुक्त हुआ है। अथवा किरणोंसे सम्बन्धित होनेके कारण वह ‘मरीचि’ कहलाता है। पृथ्वी ‘मर’ है; क्योंकि उसमें प्राणी मरते हैं। जो लोक पृथ्वीसे नीचेकी ओर हैं वे ‘आप’ कहलाते हैं; क्योंकि ‘अप्’ शब्द [नीचेके लोकोंमें रहनेवाले प्राणियोंद्वारा प्राप्य होनेके कारण प्राप्तिरूप अर्थवाले] ‘आप्’ धातुसे बना हुआ है। यद्यपि सभी लोक पंचभूतमय हैं तथापि अम्भ, मरीचि, मर और आप—ये लोक आप (जल)-की अधिकता होनेके कारण ‘आप’ ही कहे जाते हैं॥ २ ॥",
    EnglishCommentry:
      "Sah, that Self; asrjata, created; iman lokdn, these worlds; just as in the world an intelligent architect or others think, `I shall construct a palace etc. according to this plan', and build up the palace etc. after that deliberation. \n Objection : It is logical that architects and others, possessed of materials, should raise up palaces etc. But how can the Self, devoid of materials, create the worlds ? \n Answer: This is nothing wrong. Name and formwhich remain identified with the Self in their unmanifested state just like the (undiversified) foam with water, and are hence denotable by the word 'Self'-can become the material cause of the universe, as water becomes that of the manifested foam. Therefore there is nothing incongruous in saying that the omniscient Being creates the universe by virtue of Its oneness with the materials-viz name and form-which are identified with Itself. Or the more reasonable position is this: Just as an intelligent juggler, who has no material, transforms himself, as it were, into a second self ascending into space, similarly the omniscient and omnipotent Deity, who is a supreme magician, creates Himself as another in the form of the universe. On this view, the schools that hold such beliefs as the unreality of both cause and effect have no legs to stand on and are totally demolished. \n Which are the worlds that He created? They are being enumerated: Ambhas, maricih, maram, apah. Starting with space, he created in due order the cosmic egg, and then created the worlds - ambhas etc. As for these, the Upanisad itself explains the words ambhas etc. Adah, that one-the world that is there; parena divam, beyond heaven; is ambhas, is denoted by the word ambhas. It is called ambhas because it holds ambhas, water (cloud). Of that world, viz ambhas, dyauh pratistha, heaven is the support. Anta- riksam, the sky, which is there below heaven, is the (world called) marici (lit. sunrays). Though this (last) world is one, it is used in the plural number as maricih (or rather maricayah) because of the diversity of the space covered by it. Or it is so used because of its association with the mari- cayah, rays (of the sun). Prthivi, the earth, is marah since beings die (mriyante) on it. Yah adhastat, the worlds that are below-below the earth; tah, they (are); apah, called apah, (lit. water) the word being derived (from the root ap) in the sense of being attained'. Though the worlds are constituted by the five elements, still, because of the predominance of water (etc. in them), they are referred to, by the synonyms of water (etc.) as ambhas, maricih, maram, apah.",
    Mantra: "2",
  },
  {
    id: 3,
    Chapter: "1",
    Khand: "1",
    Shloka:
      "स ईक्षतेमे नु लोका लोकपालान्नु सृजा इति सोऽद्भ्य एव पुरुष समुद्धृत्यामूर्छयत्॥ ३ ॥",
    HindiTranslation:
      "उसने ईक्षण (विचार) किया कि—‘ये लोक तो तैयार हो गये, अब लोकपालोंकी रचना करूँ’—ऐसा सोचकर उसने जलमेंसे ही एक पुरुष निकालकर अवयवयुक्त किया॥ ३ ॥",
    EnglishTranslation:
      "He thought, 'These then are the worlds. Let Me create the protectors of the worlds.' Having gathered up a (lump of the) human form from the water itself, He gave shape to it.",
    HindiCommentry:
      "उस ईश्वरने फिर भी ईक्षण (विचार) किया। मेरे रचे हुए ये अम्भ आदि लोक बिना किसी रक्षकके नष्ट हो जायँगे। अत: इनकी रक्षाके लिये मैं लोकपालोंकी—लोकोंकी रक्षा करनेवालोंकी रचना करूँ। ऐसा सोचकर उसने जलसे—जलप्रधान पंचभूतोंसे अर्थात् जिनसे उसने अम्भ आदि लोकोंकी रचना की थी उन्हींसे पुरुष यानी सिर और हाथ आदिवाले पुरुषाकारको, जिस प्रकार कुम्हार पृथिवीसे मिट्टीका पिण्ड निकालता है, उसी प्रकार निकालकर मूर्छित किया अर्थात् अवयवोंकी योजनाकर उसको बढ़ाया॥ ३ ॥",
    EnglishCommentry:
      "Having created the four worlds that provide support for the fruits of action as well as the materials for those fruits' of all creatures, sah, He, God; iksata, deliberated; again iti, thus: 'Ime nu lokah, these then are the worlds, viz ambhas etc., created by Me, which will perish if they are devoid of protectors. Accordingly, for their preservation, nu srjai, let Me create; lokapalan, the protectors of the worlds.' After deliberating thus, sah, He; samuddhrtya, having gathered up; purusam, a human form, possessed of head, hands, etc.; adbhyah, from the water, itself-from the five elements in which water predominated, and from which He had created (the worlds, viz) ambhas etc. -just as a potter gathers .up a lump of clay from the earth; amurchayat, (He) gave shape to it - that is to say, fashioned it by endowing it with limbs.'",
    Mantra: "3",
  },
  {
    id: 4,
    Chapter: "1",
    Khand: "1",
    Shloka:
      "तमभ्यतपत्तस्याभितप्तस्य मुखं निरभिद्यत यथाण्डं मुखाद्वाग्वाचोऽग्निर्नासिके निरभिद्येतां नासिकाभ्यां प्राण: प्राणाद्वायुरक्षिणी निरभिद्येतामक्षिभ्यां चक्षुश्चक्षुष आदित्य: कर्णौ निरभिद्येतां कर्णाभ्यां श्रोत्रं श्रोत्राद्दिशस्त्वङ्निरभिद्यत त्वचो लोमानि लोमभ्य ओषधिवनस्पतयो हृदयं निरभिद्यत हृदयान्मनो मनसश्चन्द्रमा नाभिर्निरभिद्यत नाभ्या अपानोऽपानान्मृत्यु: शिश्नं निरभिद्यत शिश्नाद्रेतो रेतस आप:॥ ४ ॥",
    HindiTranslation:
      "उस विराट् पुरुषके उद्देश्यसे ईश्वरने संकल्प किया। उस संकल्प किये पिण्डसे अण्डेके समान मुख उत्पन्न हुआ। मुखसे वाक् और वागिन्द्रियसे अग्नि उत्पन्न हुआ। [फिर] नासिकारन्ध्र प्रकट हुए, नासिकारन्ध्रोंसे प्राण हुआ और प्राणसे वायु। [इसी प्रकार] नेत्र प्रकट हुए तथा नेत्रोंसे चक्षु-इन्द्रिय और चक्षुसे आदित्य उत्पन्न हुआ। [फिर] कान उत्पन्न हुए तथा कानोंसे श्रोत्रेन्द्रिय और श्रोत्रसे दिशाएँ प्रकट हुर्इं। [तदनन्तर] त्वचा प्रकट हुर्इ तथा त्वचासे लोम और लोमोंसे ओषधि एवं वनस्पतियाँ उत्पन्न हुर्इं। [इसी प्रकार] हृदय उत्पन्न हुआ तथा हृदयसे मन और मनसे चन्द्रमा प्रकट हुआ। [फिर] नाभि उत्पन्न हुर्इ तथा नाभिसे अपान और अपानसे मृत्युकी अभिव्यक्ति हुर्इ। [तदनन्तर] शिश्न प्रकट हुआ तथा शिश्नसे रेतस् और रेतस्से आप उत्पन्न हुआ॥ ४ ॥",
    EnglishTranslation:
      "He deliberated with regard to Him (i.e. Virat of the human form). As He (i.e. Virat) was being deliberated on, His (i.e. Varat's) mouth parted, just as an egg does. From the mouth emerged speech; from speech came Fire. The nostrils parted; from the nostrils came out the sense of smell; from the sense of smell came Vayu (Air). The two eyes parted; from the eyes emerged the sense of sight; from the sense of sight came the Sun. The two ears parted; from the ears came the sense of hearing; from the sense of hearing came the Directions. The skin emerged; from the skin came out hair (i.e. the sense of touch associated with hair); from the sense of touch came the Herbs and Trees. The heart took shape; from the heart issued the internal organ (mind); from the internal organ came the Moon. The navel parted; from the navel came out the organ of ejection; from the organ of ejection issued Death. The seat of the procreative organ parted; from that came the pro creative organ; from the procreative organ came out Water.'",
    HindiCommentry:
      "उस पुरुषाकारपिण्डके उद्देश्यसे ईश्वरने तप किया। अर्थात् उसका अभिध्यान यानी संकल्प किया, जैसा कि “जिसका तप ज्ञानमय है” इस श्रुतिसे सिद्ध होता है। उस अभितप्त—र्इश्वरके संकल्परूप तपसे तपे हुए पिण्डका मुख प्रकट हुआ अर्थात् उसमें मुखाकार छिद्र इस प्रकार उत्पन्न हो गया जैसे कि पक्षीका अण्डा फट जाता है। उस छिद्ररूप मुखसे वाक्-इन्द्रिय उत्पन्न हुर्इ और उस वाक्से वाणीका अधिष्ठाता लोकपाल अग्नि हुआ। इसी प्रकार नासिकारन्ध्र उत्पन्न हुए, उन नासिकारन्ध्रोंसे प्राण और प्राणसे वायु हुआ। इस प्रकार सभी जगह इन्द्रियगोलक, इन्द्रिय और उसके अधिष्ठाता देव—ये तीनों ही क्रमश: उत्पन्न हुए। दो नेत्र, दो कान और त्वचा [—ये इन्द्रियस्थान हैं], हृदय अन्त:करणका अधिष्ठान है और मन अन्त:करण है। नाभि सम्पूृर्ण प्राणोंके बन्धनका स्थान है। अपान वायुयुक्त होनेके कारण पायु इन्द्रिय अपान कहलाती है; उससे उसकी अधिष्ठात्री देवता मृत्यु उत्पन्न हुर्इ। जैसे कि अन्यत्र [इन्द्रिय, इन्द्रियस्थान और देवता] बतलाये गये हैं, उसी प्रकार प्रजननेन्द्रियका आश्रयस्थान शिश्न उत्पन्न हुआ। उसमें रेत: इन्द्रिय है, जो रेतोविसर्ग (वीर्यत्याग)-की हेतुभूत होनेसे रेत: (वीर्य)-के सम्बन्धसे ‘रेतस्’ कही जाती है और रेत:से आप (वीर्यके अधिष्ठाता जल)-का प्रादुर्भाव हुआ॥ ४ ॥",
    EnglishCommentry:
      "Tam, with regard to Him, (Virat of) that human form; He abhyatapat, undertook tapas (lit. austerity), i.e. He deliberated over, or resolved about, Him; for a Vedic text says, `Whose tapas is constituted by knowledge' (Mu. I. i. 9). Tasya abhitaptasya, of that (Virat), of the lump (that was Virat's body), when subjected to the tapas or resolution of God; mukham nirabhidyata, the mouth parted -a hole in the shape of the mouth emerged, just as the bird's egg bursts. Mukhat, from that mouth which had parted; was brought into existence vak, the organ of speech; vdcah, from that Mk; was produced agnih, Fire, (the deity) that presides over vak and is a regional protector. Similarly nasike nirabhidyetam, the nostrils parted; nasikabhyam pranah, from the nostrils emerged the sense of smell'; pranat vayuh, from the sense of smell was formed Vayu, Air. Thus, in all cases, the seat of the organs, the organs, and the deity-these three emerged in succession. Aksini, the two eyes; karnau, the two orifices of the ears; tvak, skin-(all these which are the seats of the organs), (and) hrdayam, heart (which is the) seat of the internal organ; manah, mind, the internal organ; nabhih, the navel (i.e. the root of the anus)', which is the focal point of the vital forces. The organ of ejection (seated at the anus) is called apanah, because of its association with Apana (the vital force that moves down). From that originated its presiding deity mrtyuh, Death. As in the other cases, so sisnam, the seat of the organ of generation was formed. Its organ is retas, semen - the organ meant for discharging semen being called semen from the fact of its association with semen. From semen (i.e. the procreative organ) emerged (its deity) apah, Water.",
    Mantra: "4",
  },
  {
    id: 5,
    Chapter: "1",
    Khand: "2",
    Shloka:
      "ता एता देवता: सृष्टा अस्मिन् महत्यर्णवे प्रापतंस्त-मशनायापिपासाभ्यामन्ववार्जत् ता एनमब्रुवन्नायतनं न: प्रजानीहि यस्मिन् प्रतिष्ठिता अन्नमदामेति॥ १ ॥",
    HindiTranslation:
      "वे ये [इस प्रकार] रचे हुए [इन्द्रियाभिमानी] देवगण इस महासमुद्रमें पतित हो गये। उस (पिण्ड)-को [परमात्माने] क्षुधा-पिपासासे संयुक्त कर दिया। तब उन इन्द्रियाभिमानी देवताओंने उससे कहा—हमारे लिये कोर्इ आश्रयस्थान बतलाइये, जिसमें स्थित होकर हम अन्न भक्षण कर सकें॥ १ ॥",
    EnglishTranslation:
      "These deities, that had been created, fell into this vast ocean. He subjected Him (i.e. Virat) to hunger and thirst. They said to Him (i.e. to the Creator), `Provide an abode for us, staying where we can eat food.'",
    HindiCommentry:
      "र्इश्वरद्वारा लोकपालरूपसे संकल्प करके रचे हुए वे ये अग्नि आदि देवगण इस अति महान् संसारार्णव—संसारसमुद्रमें [गिरे], जो (संसारसमुद्र) अविद्या, कामना और कर्मसे उत्पन्न हुए दु:खरूप जल तथा तीव्र रोग, जरा और मृत्युरूप महाग्राहोंसे पूर्ण है, अनादि, अनन्त, अपार एवं निरालम्ब है, विषय और इन्द्रियोंके संयोगसे होनेवाला अणुमात्र सुख ही जिसकी क्षणिक विश्रान्तिका स्वरूप है, जिसमें पाँचों इन्द्रियोंकी विषयतृष्णारूप पवनके विक्षोभसे उठी हुर्इ अनर्थरूप सैकड़ों उत्ताल तरंगें हैं;जहाँ महारौरव आदि अनेकों नरकोंके ‘हा हा’ आदि क्रन्दन और चिल्लाहटसे बड़ा कोलाहल मचा हुआ है, जिसमें सत्य, सरलता, दान, दया, अहिंसा, शम, दम और धैर्य आदि आत्माके गुणरूप पाथेयसे भरी हुर्इ ज्ञानरूप नौका है, सत्संग और सर्वत्याग ही जिसमें [नौकाओंके आने-जानेका] मार्ग है तथा मोक्ष ही जिसका तीर है—ऐसे [संसाररूप] महासागरमें पतित हुए—गिरे। अत: यहाँ यही अर्थ कहना इष्ट है कि ज्ञान और कर्मके समुच्चयानुष्ठानकी फलस्वरूपा जिस अग्नि आदि देवतामें लीन होनारूप गतिकी [पूर्व अध्यायोंमें] व्याख्या की गयी है वह भी सांसारिक दु:खकी शान्तिके लिये पर्याप्त नहीं है। क्योंकि ऐसी बात है इसलिये [देवतालयरूप गति संसारदु:खकी शान्तिका उपाय नहीं है] ऐसा जानकर जो परब्रह्म अपना और सब प्राणियोंका आत्मा है, जिसके विशेषण आगे बतलाये जानेवाले हैं और संसारकी उत्पत्ति, स्थिति और संसारके कारण-रूपसे जिसका यहाँ प्रकरण है उसे संसारके सम्पूर्ण दु:खोंकी शान्तिके लिये जानना चाहिये। अत: “मोक्षप्राप्तिका और कोर्इ मार्ग नहीं है” इस श्रुतिके अनुसार यह जो परब्रह्मका आत्मस्वरूपसे ज्ञान है “यही मार्ग है, यही कर्म है, यही ब्रह्म है और यही सत्य है।” स्थान (इन्द्रियगोलक), इन्द्रिय और इन्द्रियाभिमानी देवताओंकी उत्पत्तिके बीजभूत पुरुषरूपसे प्रथम उत्पन्न किये हुए उस पिण्ड अर्थात् आत्माको उसने क्षुधा और पिपासासे अन्ववार्जित—अनुगमित अर्थात् संयुक्त किया। उस कारणभूत पिण्डके क्षुधा आदि दोषोंसे युक्त होनेके कारण उसके कार्यभूत देवता आदि भी क्षुधा आदिसे युक्त हुए। तब क्षुधा-पिपासासे पीड़ित होकर उन्होंने उस जगद्रचयिता पितामहसे कहा—‘हमारे लिये आयतन—आश्रयस्थानकी व्यवस्था करो, जिस आयतनमें प्रतिष्ठित होकर हम सामर्थ्यवान् हो अन्न भक्षण कर सकें’॥ १ ॥",
    EnglishCommentry:
      "Tah etch devatah, these deities-Fire and others; srstah, that had been created as the rulers of the regions, by God after deliberation; (fell) asmin, into this; mahati arnave, vast ocean - the world which is like a vast ocean, that is filled with the water of sorrow arising from ignorance, desire, and action; that is infested with huge seaanimals in the form of acute disease, and age, and death; that has no beginning, end, and limit, and provides no resting place; that affords only momentary respite through the little joys arising from the contact of senses and objects; that is full of the high waves in the shape of hundreds of evils, stirred up by the gale of hankering for the objects of the five senses; that resounds with the noise of cries and shrieks of 'alas! alas!' etc., issuing from the beings condemned to various hells like Maharaurava; that has the raft of knowledge-which is furnished with such provisions for the way as truth, simplicity, charity, compassion, non-injury, control of inner and outer organs, fortitude, etc. that are the embellishments of the heart, and which has good company and renunciation of everything as its course-and that has emancipation as its shore. Into this vast ocean, prapatan, (they) fell. Hence, the idea sought to be imparted here is that even the attainment of the state of merger in the deities, viz Fire and others, which was explained (earlier), and which is the result of the combined practice of meditation and karma-(even this) is not adequate for the removal of the sorrows of the world. Since this is so, therefore, after having grasped this fact, one should, for the eradication of all the worldly miseries, realize the supreme Brahman as the Self of one's own as also of all beings-the Self which is possessed of the characteristics to be mentioned hereafter, and which has been introduced as the source of the origination, continuance, and dissolution of the universe. Therefore in accordance with the Vedic text, 'There is no other path for reaching there' (9v. III. 8, VI. 15), it follows that, 'This that is the knowledge of the oneness of Brahman and the Self, is the path, this is the karma, this is Brahman, this is truth' (Ai. A. ii. i. 1). \n (He, the Creator) anvavarjat, suffused, i.e. endowed; tam, Him-who was the source of the organs, their seats, and their deities, the Being (i.e. Virat) who was the first begotten and the Self in the form of a lump; asanaya- pipasabhyam, with hunger and thirst. Since He (the first begotten), the source of all, was afflicted with the defects of hunger etc. His products, the deities are also subject to hunger etc. Thereafter, tah, those (deities); being afflicted with hunger and thirst; abruvan, said; iti, this; enam, to Him, to the grandsire, to the Creator (of the body of Virat); 'Prajanihi, provide; nah, for us; ayatanam, an abode; pratisthitah yasmin, staying where -and becoming able; annam adama, we can eat food.'",
    Mantra: "1",
  },
  {
    id: 6,
    Chapter: "1",
    Khand: "2",
    Shloka:
      "ताभ्यो गामानयत्ता अब्रुवन्न वै नोऽयमलमिति। \n ताभ्योऽश्वमानयत्ता अब्रुवन्न वै नोऽयमलमिति॥ २ ॥",
    HindiTranslation:
      "उन देवताओंके लिये गौ ले आया। वे बोले—‘यह हमारे लिये पर्याप्त नहीं है।’ [फिर वह] उनके लिये घोड़ा ले आया। वे बोले—‘यह भी हमारे लिये पर्याप्त नहीं है’॥ २ ॥",
    EnglishTranslation:
      "For them He (i.e. God) brought a cow. They said, 'This one is certainly not adequate for us.' For them He brought a horse. They said, 'This one is certainly not adequate for us.'",
    HindiCommentry:
      "उन देवताओंके लिये गौ—गौके आकारवाला पिण्ड पूर्ववत् उस जलसे निकालकर—अवयवोंकी योजनाद्वारा रचकर लाया अर्थात् उसे उन देवताओंको दिखलाया। उस गौके समान आकारवाले प्राणीको देखकर वे पुन: बोले—‘यह पिण्ड हमारे लिये अन्न भक्षण करनेके निमित्त आश्रय बनानेके लिये पर्याप्त नहीं है। ‘अलम्’ का अर्थ पर्याप्त है। अर्थात् [यह आश्रय] भोजन करनेके योग्य नहीं है।’ गौका परित्याग कर देनेपर वह उनके लिये घोड़ा लाया। तब वे ‘हमारे लिये यह भी पर्याप्त नहीं है’ इस प्रकार पूर्ववत् कहने लगे॥ २ ॥",
    EnglishCommentry:
      "God, having been told so, tabhyah, for them, for the deities; anayat gam, brought a cow; having gathered up a lump of the size of a cow from that very water, just as before, and having fashioned it, He showed it (to them). Tah, they, on their part, having seen the bovine form; abruvan, said; 'Ayam, this one-this lump; na vai, is certainly not; alam, adequate; nah, for us -not fit to serve as a seat while eating food; that is to say, it is not sufficient so far as eating is concerned.' The cow having been rejected, He anayat, brought; asvam, a horse; tabhyah, for them. Tah, they; abruvan, said; iii, this-just as before; 'Ayam na vai a/am nah, this is certainly not enough for us.'",
    Mantra: "2",
  },
  {
    id: 7,
    Chapter: "1",
    Khand: "2",
    Shloka:
      "ताभ्य: पुरुषमानयत्ता अब्रुवन् सुकृतं बतेति। \n पुरुषो वाव सुकृतम्। ता अब्रवीद्यथायतनं प्रविशतेति॥ ३ ॥",
    HindiTranslation:
      "वह उनके लिये पुरुष ले आया। वे बोले—‘यह सुन्दर बना है, निश्चय पुरुष ही सुन्दर रचना है।’ उन (देवताओंसे) ईश्वरने कहा— ‘अपने-अपने आयतन (आश्रयस्थानों)-में प्रवेश कर जाओ’॥ ३ ॥",
    EnglishTranslation:
      " For them He brought a man. They said, This one is well formed; man indeed is a creation of God Himself.' To them He said, `Enter into your respective abodes.'",
    HindiCommentry:
      "[वह] उनके लिये उनका योनिस्वरूप पुरुष ले आया। अपने योनिभूत उस पुरुषको देखकर वे खेदरहित हो इस प्रकार बोले—‘यह अधिष्ठान सुन्दर बना है। अत: सम्पूर्ण पुण्यकर्मोंका कारण होनेसे निश्चय पुरुष ही सुकृत है। अथवा स्वयं अपने-आप अपनी ही मायासे रचा होनेके कारण ‘सुकृत’ ऐसा कहा जाता है।’ र्इश्वरमें यह समझकर कि इन्हें यह आश्रयस्थान प्रिय है, क्योंकि सभी अपनी योनिमें सन्तुष्ट रहा करते हैं, उन देवताओंसे कहा— ‘जिसका जो आयतन है उस अपनी सम्भाषणादि क्रियाके योग्य आयतनमें तुम सब प्रविष्ट हो जाओ’॥ ३ ॥",
    EnglishCommentry:
      "When all else had been rejected, tdbhyah, for them; anayat, (He) brought; purusam, a man, their progenitor'. Having seen that man, who was their source,- they became free from misery, and tah, they; abruvan, said; iti, this; This abode is sukrtam bata, well created, to be sure.' As a result purusah viva, man is indeed; sukrtam, virtue itself-he having become the source of all virtuous deeds.2 Or, he is called sukrta, (lit.) created by oneself, because God created man by Himself, through His own Maya.3 God thought that this abode was liked by them, since all beings love the source (from which they spring); and so He abravit, said; tah, to them, to the deities; iti, this; `Pravisata, enter; yathayatanam, into the respective abodeinto the dwelling that suits each for such activities as speaking etc.'",
    Mantra: "3",
  },
  {
    id: 8,
    Chapter: "1",
    Khand: "2",
    Shloka:
      "अग्निर्वाग्भूत्वा मुखं प्राविशद्वायु: प्राणो भूत्वा नासिके प्राविशदादित्यश्चक्षुर्भूत्वाक्षिणी प्राविशद्दिश: श्रोत्रं भूत्वा कर्णौ प्राविशन्नोषधिवनस्पतयो लोमानि भूत्वा त्वचं प्राविशंश्चन्द्रमा मनो भूत्वा हृदयं प्राविशन्मृत्युरपानो भूत्वा नाभिं प्राविशदापो रेतो भूत्वा शिश्नं प्राविशन्॥ ४ ॥",
    HindiTranslation:
      "अग्निने वागिन्द्रिय होकर मुखमें प्रवेश किया, वायुने प्राण होकर नासिका-रन्ध्रोंमें प्रवेश किया, सूर्यने चक्षु-इन्द्रिय होकर नेत्रोंमें प्रवेश किया, दिशाओंने श्रवणेन्द्रिय होकर कानोंमें प्रवेश किया, ओषधि और वनस्पतियोंने लोम होकर त्वचामें प्रवेश किया, चन्द्रमाने मन होकर हृदयमें प्रवेश किया, मृत्युने अपान होकर नाभिमें प्रवेश किया तथा जलने वीर्य होकर लिंगमें प्रवेश किया॥ ४ ॥",
    EnglishTranslation:
      "Fire entered into the mouth taking the form of the organ of speech; Air entered into the nostrils assuming the form of the sense of smell; the Sun entered into the eyes as the sense of sight; the Directions entered into the ears by becoming the sense of hearing; the Herbs and Trees entered into the skin in the form of hair (i.e. the sense of touch); the Moon entered into the heart in the shape of the mind; Death entered into the navel in the form of Apana (i.e. the vital force that presses down); Water entered into the limb of generation in the form of semen (i.e. the organ of procreation).",
    HindiCommentry:
      "वागिन्द्रियके अभिमानी अग्निने वाक् होकर अपने कारणस्वरूप मुखमें प्रवेश किया। इसी प्रकार औरोंका भी अर्थ समझना चाहिये। [इस प्रकार] वायुने नासिकामें, सूर्यने नेत्रोंमें, दिशाओंने कानोंमें, ओषधि और वनस्पतियोंने त्वचामें, चन्द्रमाने हृदयमें, मृत्युने नाभिमें और जलने शिश्न (लिंग)-में प्रवेश किया॥ ४ ॥",
    EnglishCommentry:
      "Just as the commander and others of armies etc. (enter) into a city (at the bidding of the king), so having got the permission of God with the words, 'Let this be so', agnih, Fire, the deity that identifies himself with the organ of speech; bhutva, becoming; vak, speech itself; pravisat, entered; mukham, into the mouth, which was his source. Similarly are the rest to be explained. Vayuh, Air, entered nasike, into the nostrils. Adityah, the Sun; aksini, into the eyes; diiah, the Directions; karnau, into the ears; osadhi- vanaspatayah, the Herbs and Trees; tvacam, into the skin; candramah, the Moon; hrdayam, into the heart; mrtyuh, Death; nabhim, into the navel (i.e. the root of the anus); apah, Water; sisnam, into the generative organ.",
    Mantra: "4",
  },
  {
    id: 9,
    Chapter: "1",
    Khand: "2",
    Shloka:
      "तमशनायापिपासे अब्रूतामावाभ्यामभिप्रजानीहीति। \n ते अब्रवीदेतास्वेव वां देवतास्वाभजाम्येतासु भागिन्यौ करोमीति। \n तस्माद्यस्यै कस्यै च देवतायै हविर्गृह्यते भागिन्यावेवास्यामशनायापिपासे भवत:॥ ५ ॥",
    HindiTranslation:
      "उस (र्इश्वर)-से क्षुधा-पिपासाने कहा—‘हमारे लिये आश्रयकी योजना कीजिये।’ तब [उसने] उनसे कहा—‘तुम दोनोंको मैं इन देवताओंमें ही भाग दूँगा अर्थात् मैं तुम्हें इन्हींमें भागीदार करूँगा।’ अत: जिस किसी देवताके लिये हवि दी जाती है उस देवताकी हविमें ये भूख-प्यास भी भागीदार होती ही हैं॥ ५ ॥",
    EnglishTranslation:
      "To Him Hunger and Thirst said, `Provide for us (some abode).' To them He said, `I provide your livelihood among these very gods; I make you share in their portions.' Therefore when oblation is taken up (for being offered) for any deity whichsoever, Hunger and Thirst become verity sharers with that deity.",
    HindiCommentry:
      "क्षुधा और पिपासाने आश्रयहीन होनेके कारण उस ईश्वरसे कहा—‘हमारे लिये अधिष्ठानका अभिप्रज्ञान—चिन्तन अर्थात् विधान करो।’ ऐसा कहे जानेपर उस ईश्वरने उन क्षुधा-पिपासाओंसे कहा—‘भावरूप होनेके कारण तुम दोनोंका किसी चेतन वस्तुको आश्रय किये बिना अन्न भक्षण करना सम्भव नहीं है। अत: मैं इन अध्यात्म और अधिदैव अग्नि आदि देवताओंमें ही तुम दोनोंको आभाजित करता हूँ अर्थात् तुम्हारी वृत्तिका विभाग करके अनुगृहीत करता हूँ। मैं तुम्हें इन देवताओंमें ही भागी करता हूँ—अर्थात् जिस देवताका जो हवि आदि भाग है उसके उसी भागसे मैं तुम्हें उनकी भागिनी—भाग ग्रहण करनेवाली बनाता हूँ; क्योंकि सृष्टिके आदिमें ईश्वरने ऐसी व्यवस्था कर दी थी, इसलिये इस समय भी जिस किसी देवताके लिये चरु-पुरोडाशादि हवि ग्रहण की जाती है, ये क्षुधा-पिपासा भी उस देवतामें भागिनी होती ही हैं॥ ५ ॥",
    EnglishCommentry:
      "When the gods had thus found their abodes, asanaya- pipase, Hunger and Thirst, being without abodes; abrutam, said, to that God; 'Avabhyam, for us; abhiprajanihi, think of, i.e. provide; some abode.' He, God, having been told thus, abravit, said; te, to those two-to Hunger and Thirst: `Since you are but feelings, you cannot possibly eat food without being supported by some conscious being. Therefore etasu eva, among these beings themselves ; devatasu, among the deities, viz Fire etc. - in the corporeal context, as also in the divine context; abhajami vam, I favour you by apportioning your livelihood. Karomi, I make you; bhaginyau, sharers; etasu, among these gods. Whatever allotment, consisting of oblation etc., is assigned to any deity, I make you share in that very portion.' Since God ordained thus in the beginning of creation, tasmat, therefore; even today; yasyai kasyai ca devatayai, for whichsoever deity; havih, an oblation-such as porridge, cake, etc.; grhyate, is taken up; asanaya pipase, Hunger and Thirst; bhaginyau eva bhavatah, become sharers indeed; asyam, with that deity.",
    Mantra: "5",
  },
  {
    id: 10,
    Chapter: "1",
    Khand: "3",
    Shloka: "स ईक्षतेमे नु लोकाश्च लोकपालाश्चान्नमेभ्य: सृजा इति॥ १ ॥",
    HindiTranslation:
      "उस (र्इश्वर)-ने विचारा, ये लोक और लोकपाल तो हो गये, अब इनके लिये अन्न रचूँ॥ १ ॥",
    EnglishTranslation:
      "He thought, `This, then, are the senses and the deities of the senses. Let Me create food for them.'",
    HindiCommentry:
      "उस ईश्वरने इस प्रकार ईक्षण किया—किस प्रकार? [सो बतलाते हैं—] मैंने इन लोक और लोकपालोंकी रचना तो कर दी और इन्हें क्षुधा-पिपासासे संयुक्त भी कर दिया। अत: अन्नके बिना इनकी स्थिति नहीं हो सकती; इसलिये इन लोकपालोंके लिये मैं अन्न रचूँ। इस प्रकार लोकमें ईश्वरों (समर्थों)-की अपने लोगोंके ऊपर अनुग्रह एवं निग्रह करनेकी स्वतन्त्रता देखी जाती है। इसी प्रकार सर्वेश्वर होनेके कारण महेश्वर (परमेश्वर)-की भी सबके प्रति निग्रह एवं अनुग्रहमें स्वतन्त्रता ही है॥ १ ॥",
    EnglishCommentry:
      "Sah, He, God; iksata, thought thus. How? `Ime nu, these then are; lokah ca lokapalah ca, the senses and their deities-which have been created by Me and dowered with hunger and thirst; therefore these cannot subsist without food. Accordingly, srjai (which is the same as srje), let Me create; annam, food; ebhyah, for these-the deities of the senses.' Thus is seen in the world the independence of lordly persons with regard to extending favour or disfavour to their own people. Therefore the supreme Lord, too, has independence in the matter of favouring or disfavouring all, since He is the Lord of all.",
    Mantra: "1",
  },
  {
    id: 11,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "सोऽपोऽभ्यतपत्ताभ्योऽभितप्ताभ्यो मूर्तिरजायत। \n या वै सा मूर्तिरजायतान्नं वै तत्॥ २ ॥",
    HindiTranslation:
      "उसने आपों (जलों)-को लक्ष्य करके तप किया। उन अभितप्त आपोंसे एक मूर्ति उत्पन्न हुर्इ, यह जो मूर्ति उत्पन्न हुर्इ वही अन्न है॥ २ ॥",
    EnglishTranslation:
      "He deliberated with regard to the water. Frdm the water, thus brooded over, evolved a form. The form that emerged was verily food.",
    HindiCommentry:
      "अन्न रचनेकी इच्छावाले उस ईश्वरने उन पूर्वोक्त जलोंको ही उद्देश्य करके तप किया। उन उपादानभूत अभितप्त जलोंसे ही धारण करनेमें समर्थ चराचरभूत घनरूप मूर्ति उत्पन्न हुर्इ। यह जो मूर्ति उत्पन्न हुर्इ वह मूर्तिरूप अन्न ही है॥ २ ॥",
    EnglishCommentry:
      "Sah, He, God; being desirous of creating food; abhyata- pat, deliberated with regard to; apah, the water, already mentioned. Tabhyah abhitaptabhyah, from the water that was brooded over, and that formed the material; ajayata, evolved; murtih, a solid form-which could provide support (for others) and which comprised the moving and the unmoving. Yd vai sa nwrtih ajayata, the form that evolved; !at annam vai, that formed thing is verily food.",
    Mantra: "2",
  },
  {
    id: 12,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तदेनत्सृष्टं पराङत्यजिघांसत्तद्वाचाजिघृक्षत्तन्नाशक्नोद्वाचा ग्रहीतुम्। \n यद्धैनद्वाचाग्रहैष्यदभिव्याहृत्य हैवान्नमत्रप्स्यत्॥ ३ ॥",
    HindiTranslation:
      "[लोकपालोंके आहारार्थ] रचे गये उस इस अन्नने उनकी ओरसे मुँह फेरकर भागना चाहा। तब उस (आदिपुरुष)-ने उसे वागिन्द्रियद्वारा ग्रहण करना चाहा, किन्तु वह उसे वाणीसे ग्रहण न कर सका। यदि वह इसे वाणीसे ग्रहण कर लेता तो [उससे परवर्ती पुरुष भी] अन्नको बोलकर ही तृप्त हो जाया करते॥ ३ ॥",
    EnglishTranslation:
      "This food; that was created, turned back and attempted to run away. He tried to take it up with speech. He did not succeed in taking it up through speech. If He had succeeded in taking it up with the speech, then one would have become contented merely by talking of food.",
    HindiCommentry:
      "लोक और लोकपालोंके निमित्त उनके सम्मुख निर्मित हुआ अन्न यह मानकर कि अन्न भक्षण करनेवाला तो मेरी मृत्यु है, उसकी ओरसे मुख मोड़कर, जिस प्रकार बिलाव आदिके सामनेसे [उसे अपनी मृत्यु समझकर] चूहे आदि भागना चाहते हैं उसी प्रकार उन अन्न भक्षण करनेवालोंका अतिक्रमण करके जानेकी इच्छा करने लगा; अर्थात् उसने उनके सामनेसे दौड़ना आरम्भ कर दिया। अन्नके उस अभिप्रायको जानकर लोक और लोकपालोंके देह-इन्द्रियरूप संघात उस पिण्डने प्रथमोत्पन्न होनेके कारण अन्य अन्नभोक्ताओंको न देखकर उस अन्नको वाणी अर्थात् बोलनेकी क्रियासे ग्रहण करना चाहा। किन्तु वह वदनक्रियासे उस अन्नको ग्रहण करनेमें शक्त—समर्थ न हुआ। वह सबसे पहले उत्पन्न हुआ देहधारी यदि इस अन्नको वाणीसे ग्रहण कर लेता तो उसका कार्यभूत होनेके कारण सम्पूर्ण लोक अन्नको बोलकर ही तृप्त हो जाया करता। परन्तु बात यह है नहीं, अत: हमें जान पड़ता है कि वह पूर्वोत्पन्न विराट् पुरुष भी उसे वाणीसे ग्रहण करनेमें समर्थ नहीं हुआ था॥ ३ ॥",
    EnglishCommentry:
      "Tat enat annam, this aforesaid food; that was srstam, created -in the presence of the senses and their deities. As a mouse, for instance, when in the presence of a cat, thinks, This is an eater of food and is Death to me', and moves back, similarly this food turned parak, back; and atyajighamsat, wanted to go beyond the reach of the devourers; it began to run away. When that aggregate of the organs and their deities, that mass (Virat) in the form of the body and senses (of Virat), realized that intention of the food, but did not notice other eaters of food, He Himself being the first begotten, He ajighrksat, tried to take up; tat, that food; vacs, through speech, through the act of speaking. Na asaknot, He did not succeed; grahitum tat, to take up that; ►'aca, through speech, through speaking. Yat, if; sah, He, the First Born, the first embodied Being; agrahaisyat, had taken up; enat, this food; vacs, through speech; then everyone, being a product of the First Born; airapsyat, would have become satisfied; abhivyahrtya ha eva annum, merely by talking of food. But, as a matter of fact, this is not he case. Hence we understand that the First Born, too, did not succeed in grasping (food) through speech. The remaining portions are to be similarly explained.",
    Mantra: "3",
  },
  {
    id: 13,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तत्प्राणेनाजिघृक्षत्तन्नाशक्नोत्प्राणेन ग्रहीतुं स यद्धैनत्प्राणेनाग्रहैष्यदभिप्राप्य हैवान्नमत्रप्स्यत्॥ ४ ॥",
    HindiTranslation:
      "फिर उसने इसे प्राणसे ग्रहण करना चाहा; किन्तु इसे प्राणसे ग्रहण करनेमें समर्थ न हुआ। यदि वह इसे प्राणसे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नके उद्देश्यसे प्राणक्रिया करके तृप्त हो जाता॥ ४ ॥",
    EnglishTranslation:
      "He tried to grasp that food with the sense of smell. He did not succeed in grasping it by smelling. If He had succeeded in grasping it by smelling, then everyone would have become contented merely by smelling food.",
    HindiCommentry:
      "[इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10 ",
    Mantra: "4",
  },
  {
    id: 14,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तच्चक्षुषाजिघृक्षत्तन्नाशक्नोच्चक्षुषा ग्रहीतुं स यद्धैनच्चक्षुषाग्रहैष्यद् दृष्ट्वा हैवान्नमत्रप्स्यत्॥ ५ ॥",
    HindiTranslation:
      "उसने इसे नेत्रसे ग्रहण करना चाहा; परन्तु नेत्रसे ग्रहण करनेमें समर्थ न हुआ। यदि वह इसे नेत्रसे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नको देखकर ही तृप्त हो जाया करता॥ ५ ॥",
    EnglishTranslation:
      "He wanted to take up the food with the eye. He did not succeed in taking it up with the eye. If He had taken it up with the eye, then everyone would have become satisfied by merely seeing food.",
    HindiCommentry:
      "[इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "    Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10",
    Mantra: "5",
  },
  {
    id: 15,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तच्छ्रोत्रेणाजिघृक्षत्तन्नाशक्नोच्छ्रोत्रेण ग्रहीतुं स यद्धैनच्छ्रोत्रेणाग्रहैष्यच्छ्रुत्वा हैवान्नमत्रप्स्यत्॥ ६ ॥",
    HindiTranslation:
      "उसने इसे श्रोत्रसे ग्रहण करना चाहा; किन्तु वह श्रोत्रसे ग्रहण न कर सका। यदि वह इसे श्रोत्रसे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नको सुनकर ही तृप्त हो जाता॥ ६ ॥",
    EnglishTranslation:
      " He wanted to take up the food with the ear. He did not succeed in taking it up with the ear. If He had taken it up with the ear, then everyone would have become satisfied merely by hearing of food.",
    HindiCommentry:
      "[इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "    Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10 ",
    Mantra: "6",
  },
  {
    id: 16,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तत्त्वचाजिघृक्षत्तन्नाशक्नोत्त्वचा ग्रहीतुं स यद्धैनत्त्वचाग्रहैष्यत्स्पृष्ट्वा हैवान्नमत्रप्स्यत्॥ ७ ॥",
    HindiTranslation:
      "उसने इसे त्वचासे ग्रहण करना चाहा; किन्तु वह त्वचासे ग्रहण न कर सका। यदि वह इसे त्वचासे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नको स्पर्श करके तृप्त हो जाया करता॥ ७ ॥",
    EnglishTranslation:
      "He wanted to take it up with the sense of touch. He did not succeed in taking it up with the sense of touch. If He had taken it up with touch, then everyone would have been satisfied merely by touching food.",
    HindiCommentry:
      "    [इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "    Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10 ",
    Mantra: "7",
  },
  {
    id: 17,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तन्मनसाजिघृक्षत्तन्नाशक्नोन्मनसा ग्रहीतुं स यद्धैनन्मनसाग्रहैष्यद्ध्यात्वा हैवान्नमत्रप्स्यत्॥ ८ ॥",
    HindiTranslation:
      "उसने इसे मनसे ग्रहण करना चाहा; किन्तु वह मनसे ग्रहण न कर सका। यदि वह इसे मनसे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नका ध्यान करके ही तृप्त हो जाया करता॥ ८ ॥",
    EnglishTranslation:
      "He wanted to take it up with the mind. He did not succeed in taking it up with the mind. If He had taken it up with the mind, then everyone would have become satisfied by merely thinking of food.",
    HindiCommentry:
      "    [इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "    Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10 ",
    Mantra: "8",
  },
  {
    id: 18,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तच्छिश्नेनाजिघृक्षत्तन्नाशक्नोच्छिश्नेन ग्रहीतुं स यद्धैनच्छिश्नेनाग्रहैष्यद्विसृज्य हैवान्नमत्रप्स्यत्॥ ९ ॥",
    HindiTranslation:
      "उसने इसे शिश्न (लिंग)-से ग्रहण करना चाहा; परन्तु वह शिश्नसे ग्रहण करनेमें समर्थ न हुआ। यदि वह इसे शिश्नसे ग्रहण कर लेता तो [इस समय भी पुरुष] अन्नका विसर्जन करके ही तृप्त हो जाता॥ ९ ॥",
    EnglishTranslation:
      " He wanted to take it up with the procreative organ. He did not succeed in taking it up with the procreative organ. If He had taken it up with the procreative organ, then everyone would have become satisfied by merely ejecting food.",
    HindiCommentry:
      "    [इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "    Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.' 4-10 ",
    Mantra: "9",
  },
  {
    id: 19,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तदपानेनाजिघृक्षत्तदावयत् सैषोऽन्नस्य ग्रहो यद्वायुरन्नायुर्वा एष यद्वायु:॥ १० ॥",
    HindiTranslation:
      "फिर उसने इसे अपानसे ग्रहण करना चाहा और इसे ग्रहण कर लिया। वह यह [अपान] ही अन्नका ग्रह (ग्रहण करनेवाला) है। जो वायु अन्नायु (अन्नद्वारा जीवन धारण करनेवाला) प्रसिद्ध है वह यह [अपान] वायु ही है॥ १० ॥",
    EnglishTranslation:
      "He wanted to take it up with Apana. He took it up. This is the devourer of food. That vital energy which is well known as dependent on food for its subsistence is this vital energy (called Apana).",
    HindiCommentry:
      "[इसी प्रकार उसने] उस अन्नको प्राणसे, नेत्रसे, श्रोत्रसे, त्वचासे, मनसे, शिश्नसे एवं भिन्न-भिन्न इन्द्रियोंके व्यापारसे ग्रहण करनेमें असमर्थ होकर अन्तमें उसे मुखके छिद्रद्वारा अपानवायुसे ग्रहण करनेकी इच्छा की। तब उसे ग्रहण कर लिया; अर्थात् इस प्रकार इस अन्नको भक्षण कर लिया। उसी कारणसे वह यह अपानवायु अन्नका ग्रह अर्थात् अन्न ग्रहण करनेवाला है। जो वायु अन्नायु—अन्नरूप बन्धनवाला अर्थात् अन्नरूप जीवनवाला प्रसिद्ध है वह यह [अपान] वायु ही है॥४—१०॥",
    EnglishCommentry:
      "Being unable to take up the food through the nose, the eye, the ear, the skin, the mind and the generative apparatus, that is to say, through the activity of the respective organs, at last He ajighrksat, wanted to take up the food; apanena, by Apana (the indrawing energy of) airthrough the cavity of the mouth. Tat avayat, (He) took up that food thus; He ate it. Therefore sah esah, this Apana air; annasya grahah, (is) the seizer of food, i.e. the devourer of food. Yat vayuh (should be rather yah vayuh), the vital energy that is; annayuh vai, well known as dependent on food, for its subsistence; is esah, this one; yat vayuh, which is the vital energy, called Apana.'",
    Mantra: "10",
  },
  {
    id: 20,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "स ईक्षत कथं न्विदं मदृते स्यादिति स ईक्षत कतरेण प्रपद्या इति। स ईक्षत यदि वाचाभिव्याहृतं यदि प्राणेनाभिप्राणितं यदि चक्षुषा दृष्टं यदि श्रोत्रेण श्रुतं यदि त्वचा स्पृष्टं यदि मनसा ध्यातं यद्यपानेनाभ्यपानितं यदि शिश्नेन विसृष्टमथ कोऽहमिति॥ ११ ॥",
    HindiTranslation:
      "उस परमेश्वरने विचार किया ‘यह (पिण्ड) मेरे बिना कैसे रहेगा?’ वह सोचने लगा ‘मैं किस मार्गसे [इसमें] प्रवेश करूँ?’ उसने विचारा, ‘यदि [मेरे बिना] वाणीसे बोल लिया जाय, यदि प्राणसे प्राणन क्रिया कर ली जाय, यदि नेत्रेन्द्रियसे देख लिया जाय, यदि कानसे सुना जा सके, यदि त्वचासे स्पर्श कर लिया जाय, यदि मनसे चिन्तन कर लिया जाय, यदि अपानसे भक्षण कर लिया जाय और यदि शिश्नसे विसर्जन किया जा सके तो मैं कौन रहा? [अर्थात् यदि मेरे बिना ये सब इन्द्रियोंके व्यापार हो जाते तो मेरा तो कोर्इ प्रयोजन ही न था; तात्पर्य यह कि राजाकी प्रेरणाके बिना नगरके कार्योंके समान मेरी प्रेरणाके बिना इनका होना असम्भव है]’॥ ११ ॥",
    EnglishTranslation:
      "He thought, `How indeed can it be there without Me?' He thought, `Through which of the two ways should I enter?' He thought, `If utterance is done by the organ of speech, smelling by the sense of smell, seeing by the eye, hearing by the ear, feeling by the sense of touch, thinking by the mind, the act of drawing in (or pressing down) by Apana, ejecting by the procreative organ, then who (or what) am I ?'",
    HindiCommentry:
      "उस परमात्माने नगर, नगरनिवासी और उनके रक्षक [राजकर्मचारी आदि]-की नियुक्तिके समान अन्नरू प निमित्तवाली लोक और लोकपालोंके संघातकी स्थिति कर नगरके स्वामीके समान विचार किया—‘कथं नु’ यानी किस प्रकारसे—इस प्रकार वितर्क करते हुए [उसने सोचा] यह जो आगे बतलाया जानेवाला कार्य (भूत) और करणों (इन्द्रियों)-के संघातका कार्य (व्यापार) है वह परार्थ (दूसरेके लिये) होनेके कारण मेरे सिवा अर्थात् पुरके स्वामीरूप मेरे बिना कैसे होगा? जिस प्रकार अपने स्वामीके लिये प्रयुक्त पुरवासी और बन्दीजन आदिकी बलि (कर) एवं स्तुति आदि स्वामीके बिना अर्थात् स्वामीके अभावमें निरर्थक ही है उसी प्रकार [मेरे बिना भी] यह जो वाणीसे बोलना आदि है अर्थात् केवल वाग्व्यापारादि है वह निरर्थक ही होगा यानी किसी प्रकार न हो सकेगा। अत: नगरके [अधिष्ठाता] राजाके समान इस देहरूप संघातके परम प्रभु और अधिष्ठाता मुझे भी इसके पाप-पुण्यके फलके साक्षी और भोक्तारूपसे स्थित होना चाहिये। यदि इस देहेन्द्रियसंघातका कार्य परार्थ (दूसरेके लिये) है और वह पुरस्वामीके बिना पुर और पुरवासियोंके कार्यके समान मुझ परार्थी अपने चेतन रक्षकके बिना हो सकता है तो मैं क्या रहा? अर्थात् किस स्वरूपवाला अथवा किसका स्वामी रहा? जिस प्रकार राजा नगरमें प्रवेशकर वहाँके अधिकारी पुरुषोंके कार्य-अकार्यादिका निरीक्षण करता है उसी प्रकार यदि मैं भी इस भूत और इन्द्रियोंके संघातमें प्रवेश करके वाणी आदिके उच्चारणादि फलको ग्रहण न करूँगा तो कोर्इ भी मुझे ‘यह सत् है और ऐसे स्वरूपवाला है’ ऐसा अधिगम—विचार नहीं कर सकेगा। इसके विपरीत अवस्थामें ही मैं इस प्रकार जाना जा सकता हूँ कि जिस प्रकार स्तम्भ और भित्ति आदिसे मिलकर बने हुए मन्दिर आदि संघात अपने अवयवोंके सहित किसी अन्य असंहत वस्तुके लिये होते हैं उसी प्रकार जिसके लिये इन संघातरूप वाणी आदिके उच्चारणादि व्यापार हैं और जो इन वाणी आदिके उच्चारणादि-को ‘इदम्’ इस प्रकार जानता है वह मैं सत् और चेतनस्वरूप हूँ। इस प्रकार विचारकर [उसने सोचा] अत: मैं किस द्वारसे प्रवेश करूँ? इस संघातमें प्रवेश करनेके दो मार्ग हैं—पदाग्र और मूर्धा। इनमेंसे मैं किस मार्गसे इस कार्य-करणके संघातरूप पुरमें प्रवेश करूँ?॥ ११ ॥",
    EnglishCommentry:
      "Having thus made the existence of the congress of the senses and their deities dependent on food, like the existence of a city, its citizens, and its rulers, sah, He; iksata, thought-like the ruler of the city, while cogitating thus: 'Katham nu, how indeed; mat-rte, without Me, the master of the city; syat, can there be; idam, this thing-this activity belonging to the body and the senses that will be spoken of-since it is meant for somebody else? Yadi vacd abhnyahrtam, if speaking is encompassed by the organ of speech, and so on, then use of speech etc. will become useless, will not take place in any way, just as offerings and praises that are made and sung by citizens and bards in honour of their lord become useless when the lord is not there. Therefore, just as a king is with regard to a city, so I should be there as the supreme lord, the ruler, the witness of whatever has been done or not done as also their results, and the enjoyer. It is a logical necessity that the combination of the products (i.e. the body and the organs) should be meant for somebody else. If this necessity can be fulfilled even without Myself-who am a conscious being and by whom enjoyment through them is sought for-just as much as the activities of a city and its citizens can be without their lord, atha, then; kah aham, who or what, and whose lord am I? If, after entering into the combination of the body and the organs, I do not witness the fruits of utterances etc. made by speech etc., just as a king, after entering a city, observes the omissions and commissions of the off -ers, then nobody will understand or think of Me as, \"This one is a reality and is of this kind.\" Contrariwise, I shall become cognizable as the conscious reality who knows as His objects such activities as utterance etc. of the organs of speech etc., and for whose sake exist these utterances etc. of such composite things as speech and so on, just as the pillars, walls, etc., that enter into the construction of a palace etc. exist for the sake of somebody else who (is sentient and) does not form a part of that structure.' Having reasoned thus, sah, He; iksata, thought; iti, thus; `Katarena prapadyai, through which shall I enter? There are two ways of entrance into this composite thing-the forepart of the foot and the head. Katarena, by which of these two paths; prapadyai (or rather, prapadyeyam), should I enter; into this city of the aggregate of body and organs T  Having considered thus, `That being so, I should not enter through the lower way-viz the two tips of the feetthat is the path of entry for My servant Prdna (the Vital Force), that is commissioned to act in every way on My behalf. What then (should I do)? As a last resort, let me enter by splitting up (the crown of) its head', (He entered) just like a human being who performs what he thinks.",
    Mantra: "11",
  },
  {
    id: 21,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "स एतमेव सीमानं विदार्यैतया द्वारा प्रापद्यत। \n सैषा विदृतिर्नाम द्वास्तदेतन्नान्दनम्। \n तस्य त्रय आवसथास्त्रय: स्वप्ना:, अयमावसथोऽयमावसथोऽयमावसथ इति॥ १२ ॥",
    HindiTranslation:
      "वह इस सीमा (मूर्द्धा)-को ही विदीर्णकर इसीके द्वारा प्रवेश कर गया। वह यह द्वार ‘विदृति’ नामवाला है; यह नान्दन (आनन्दप्रद) है। यह आवसथ [नेत्र], यह आवसथ [कण्ठ], यह आवसथ [हृदय] इस प्रकार इसके तीन आवसथ (वासस्थान) और तीन स्वप्न हैं॥ १२ ॥",
    EnglishTranslation:
      "Having split up this very end, He entered through this door. This entrance is known as vidrti (the cleft entrance). Hence it is delightful. Of Him there are three abodes-three (states of) dream. This one is an abode, this one is an abode, this one is an abode.",
    HindiCommentry:
      "इस प्रकार विचारकर परमेश्वरने निश्चय किया—‘मैं सम्पूर्ण कार्योंके अधिकारी अपने सेवक प्राणके प्रवेशमार्ग निम्नदेशीय चरणाग्रोंसे तो प्रवेश करूँगा नहीं। तो फिर किससे करूँगा? अत: पदाग्रको त्यागकर बचे हुए मूर्धाको ही विदीर्ण करके प्रवेश करूँगा।’ इस प्रकार सोच-समझकर काम करनेवाले लोगोंके समान— वह सृष्टिकर्ता ईश्वर इस मूर्ध-सीमाको ही, जिसका केशोंका विभाग ही अवसान है, विदीर्ण कर अर्थात् उसमें छिद्र कर उसीके द्वारा—उस मार्गसे ही इस लोक अर्थात् भूत और इन्द्रियोंके संघातमें प्रवेश कर गया। वही प्रसिद्ध द्वार है; क्योंकि सिरमें तैल आदि धारण करते समय भीतर उसके रसादिका अनुभव होता है। विदीर्ण किया जानेके कारण वह द्वार ‘विदृति’ अर्थात् विदृति नामसे प्रसिद्ध है। इससे भिन्न जो श्रोत्रादि द्वार हैं वे भृत्यादिरूप साधारण मार्ग होनेके कारण समृद्ध अर्थात् आनन्दके हेतु नहीं हैं। किन्तु यह मार्ग तो केवल परमेश्वरका ही है। अत: यह नान्दन (आनन्दप्रद) है। नन्दनको ही यहाँ नान्दन कहा है। ‘नान्दनम्’ इस पद [-के नकार-] में दीर्घ वैदिक प्रक्रियाके अनुसार है। तात्पर्य यह है कि इस मार्गसे जाकर पुरुष परब्रह्ममें आनन्द प्राप्त करने लगता है। पुरमें प्रविष्ट हुए राजाके समान इस प्रकार रचना करके उसमें जीवरूपसे प्रवेश करनेवाले उस ईश्वरके तीन आवसथ हैं—(१) जाग्रत्कालमें इन्द्रियोंका स्थान दक्षिण नेत्र; (२) स्वप्नकालमें मनके भीतर और (३) सुषुप्तिमें हृदयाकाशके अन्दर अथवा आगे बतलाये जानेवाले पितृदेह, मातृगर्भाशय और अपना ही शरीर—ये ही तीन आवसथ हैं। तथा जाग्रत्, स्वप्न और सुषुप्ति नामक तीन स्वप्न हैं। यदि कहो कि प्रबोधरूप होनेके कारण जाग्रत् स्वप्न नहीं है, तो ऐसी बात नहीं है; वह भी स्वप्न ही है। किस प्रकार? क्योंकि उस समय परमार्थ आत्मस्वरूपके बोधका अभाव होता है और स्वप्नके समान असत् वस्तुएँ दिखलायी दिया करती हैं। [उन आवसथोंमें] यह दक्षिण नेत्र ही प्रथम है, मनका अन्तर्भाग द्वितीय है और हृदयाकाश तृतीय है। अयमावसथ: [ऐसा जो तीन बार कहा गया है] यह पूर्वकथितका ही अनुकीर्तन है। उन आवसथोंमें क्रमश: आत्मभावसे रहनेवाला यह जीव दीर्घकालतक स्वाभाविक अविद्यासे गाढ निद्रामें सोता रहता है और अनेकों शतसहस्र अनर्थोंकी प्राप्तिसे होनेवाले दु:खरूप मुद्गरोंके आघातके अनुभवसे भी नहीं जगता॥ १२ ॥",
    EnglishCommentry:
      "Sah, He, the Creator God; etam eva simdnam viddrya, having cleft this very end, having made a hole at the farthest point where the hair is parted; etaya dvard, through this gate, this entrance; prdpadyata, entered - into this world, i.e. into this conglomeration of body and organs. This one is that entrance that becomes well known from the fact of the perception inside (the mouth) of the taste etc. of oil and other things when these are applied on the crown of the head (for a long time). Sa esd dvdh, this door; vidrtih nama, is well known as vidrti (the cleft one), because of its having been cleft. As for the other entrances-viz the ear etc. - they are not rich, i.e. not sources of joy, since they are common passages meant for those occupying the places of servants etc. But this passage is only for the supreme Lord; tat, hence; etat nandanam, this one is productive of joy. Nandana is the same as nandana, the lengthening being a Vedic licence. It is so called because one revels (nandatl) by going to the supreme Brahman through this door. Tasya, of Him, who, after having created thus, entered (the body) as an individual soul, like a king entering a city; there are trayah avasathah, three abodes - viz the right eye, the seat of the sense (of vision), during the waking state; the mind inside, during the dream state; and the space within the heart, during the state of deep sleep. Or the three abodes may be the ones that will be enumerated, viz the body of the father, the womb of the mother, and one's own body. (He has) trayah svapnah, three (states of) dream, known as waking, dream, and deep sleep. \n Objection: The waking state is not a dream, it being a state of consciousness. \n Answer: Not so, it is verily a dream. \n Objection: How? \n Answer: Since there is no consciousness of one's own supreme Self, and in it are perceived unreal things as in a dream. Ayam, this one-the right eye; is the first avasathah, abode; the second is the mind inside; and the space within the heart is the third. 'Ayam diasathah, this is an abode' is only a recounting of what has been already enumerated. Residing alternately as identified with those abodes, this individual soul sleeps deeply for long through natural ignorance, and does not wake up, though experiencing the blows of sorrow which arise from the concurrence of many hundreds of thousands of calamities and which fall like the thumps of a heavy club.",
    Mantra: "12",
  },
  {
    id: 22,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "स जातो भूतान्यभिव्यैख्यत् किमिहान्यं वावदिषदिति। \n स एतमेव पुरुषं ब्रह्म ततममपश्यत्। इदमदर्शमिती ३॥ १३ ॥",
    HindiTranslation:
      "[इस प्रकार शरीरमें प्रवेश करके जीवरूपसे] उत्पन्न हुए उस परमेश्वरने भूतोंको [तादात्म्यभावसे] ग्रहण किया। और [गुरुकृपासे बोध होनेपर] ‘यहाँ [मेरे सिवा] अन्य कौन है’ ऐसा कहा। और मैंने इसे (अपने आत्मस्वरूपको) देख लिया है इस प्रकार उसने इस पुरुषको ही पूर्णतम ब्रह्मरूपसे देखा॥ १३ ॥",
    EnglishTranslation:
      "Being born, He manifested all the beings;' for did He speak of (or know) anything else?2 He realized this very Purusa as Brahman, the most pervasive, thus: '0! I have realized this.'",
    HindiCommentry:
      "उसने उत्पन्न होकर—जीवभावसे शरीरमें प्रविष्ट होकर भूतोंको व्याकृत किया [अर्थात् उन्हें तादात्म्यरूपसे ग्रहण किया]। फिर किसी समय परम कारुणिक आचार्यके द्वारा अपने कर्णमूलमें—जिसका शब्द आत्मज्ञानका दृढ़ बोध करानेवाला है ऐसी—वेदान्तवाक्यरूप महाभेरीके बजाये जानेपर उसने, जिसका सृष्टि आदिके कर्तृत्वरूपसे प्रकरण चला हुआ है उस पुरुष—[शरीररूप] पुरमें शयन करनेवाले आत्माको ततम—इसमें एक तकारका लोप हुआ है। अत: तततम—व्याप्ततम अर्थात् आकाशके समान परिपूर्ण महान् ब्रह्मरूपसे जाना—साक्षात्कार किया। किस प्रकार साक्षात्कार किया [सो बतलाते हैं—] ‘अहो! मैंने अपने आत्माके स्वरूपको ही इस ब्रह्मरूपसे देखा है’ इस प्रकार। यहाँ ‘इती’ पदमें जो प्लुत उच्चारण है वह विचार प्रदर्शित करनेके लिये है॥ १३ ॥",
    EnglishCommentry:
      "Sah jiitah, He being born, having entered into the body as the individual soul; abhivyaikhyat, manifested; bhutdni, the beings. When, by good luck, a teacher of supreme compassion beat near his ears the drum of the great sayings of the Upanisads whose notes were calculated to wake up the knowledge of the Self, then the individual apasyat, realized; etam eva, this very; purusam, Purusa (as Brahman) -the Purusa that is being discussed as the Lord of creation etc., who is called Purusa because of residence (sayana, i.e. existence) in the city (purl) (of the heart). (He realized Him) as brahma, Brahman, the Great; which is tatamam (by adding the missing ta, and taking the form tatatamam, the word means) the most pervasive, the fullest, like space. How (did he realize)? 'Iti, 0!; I adarsam, have seen; idam, this one-this Brahman, that is the real nature of my Self.' The elongation (of i in iii) is in accordance with the rule that in the case of a word suggesting deliberation, the vowel gets lengthened.'",
    Mantra: "13",
  },
  {
    id: 23,
    Chapter: "1",
    Khand: "3",
    Shloka:
      "तस्मादिदन्द्रो नामेदन्द्रो ह वै नाम। तमिदन्द्रं सन्तमिन्द्र इत्याचक्षते परोक्षेण। परोक्षप्रिया इव हि देवा: परोक्षप्रिया इव हि देवा:॥ १४ ॥",
    HindiTranslation:
      "इसलिये उसका नाम ‘इदन्द्र’ हुआ, वह ‘इदन्द्र’ नामसे प्रसिद्ध है। ‘इदन्द्र’ होनेपर ही [ब्रह्मवेत्ता लोग] उसे परोक्षरूपसे ‘इन्द्र’ कहकर पुकारते हैं; क्योंकि देवगण परोक्षप्रिय ही होते हैं, देवता परोक्षप्रिय ही होते हैं॥ १४ ॥",
    EnglishTranslation:
      "Therefore His name is Idandra. He is verily known as Idandra. Although He is Idandra, they call Him indirectly Indra; for the gods are verily fond of indirect names, the gods are verily fond of indirect names.",
    HindiCommentry:
      "इसलिये जो इसे देखता है वह परमात्मा ‘इदन्द्र’ नामवाला है। लोकमें ईश्वर ‘इदन्द्र’ नामसे प्रसिद्ध है। इस प्रकार ‘इदन्द्र’ होनेपर भी ब्रह्मवेत्ता व्यवहारके लिये उसे ‘इन्द्र’ इस परोक्ष नामसे पुकारते हैं; क्योंकि पूज्यतम होनेके कारण उसका प्रत्यक्ष नाम लेनेमें उन्हें भय है। जब कि देवतालोग भी परोक्षप्रिय अर्थात् अपना परोक्ष नाम ग्रहण किया जाना ही प्रिय माननेवाले हैं तब सम्पूर्ण देवताओंके भी देव महेश्वरका तो कहना ही क्या है? प्रकृत अध्यायकी समाप्ति सूचित करनेके लिये यहाँ दो बार कहा गया है॥ १४ ॥",
    EnglishCommentry:
      "Since He realized Brahman as 'this', i.e. directly-'the Brahman that is immediate and direct, the Self that is within all' (Br. 111. iv. 1)-therefore, from the fact of seeing as 'idam, this', the supreme Self is idandrah nama, called Idandra. God is idandrah ha vai Hama, verily known as Idandra, in the world. Tam idandram saniam, Him who is Idandra; they, the knowers of Brahman, acaksate, call; paroksena, indirectly, by an indirect name; indrah iii, as Indra. (They call Him thus) for the sake of conventional dealings, they being afraid of referring by a direct name, since He is the most adorable. So it follows that, hi, inasmuch as; devah, the gods; are paroksapriyah iva, verily fond of the use of indirect names; it needs no mention that the great Lord, the God of all the gods, must be much more so. The repetition (in paroksapriyah etc.) is to indicate the end of the present Part (I).",
    Mantra: "14",
  },
  {
    id: 24,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "पुरुषे ह वा अयमादितो गर्भो भवति। \n यदेतद्रेत: तदेतत्सर्वेभ्योऽङ्गेभ्यस्तेज: संभूतमात्मन्येवात्मानं बिभर्ति। \n तद्यदा स्त्रियां सिञ्चत्यथैनज्जनयति तदस्य प्रथमं जन्म॥ १ ॥",
    HindiTranslation:
      "सबसे पहले यह पुरुषशरीरमें ही गर्भरूपसे रहता है। यह जो प्रसिद्ध रेतस् (वीर्य) है वह पुरुषके सम्पूर्ण अंगोंसे उत्पन्न हुआ तेज (सार) है। पुरुष इस आत्मभूत तेजको अपने [शरीर]-में ही पोषण करता है। फिर जिस समय वह इसे स्त्रीमें सींचता है तब इसे [गर्भरूपसे] उत्पन्न करता है। यह इसका पहला जन्म है॥ १ ॥",
    EnglishTranslation:
      "In man indeed is the soul first conceived. That which is this semen is extracted from all the limbs as their vigour. He holds that self of his in his own self. When he sheds it into his wife, then he procreates it. That is its first birth.",
    HindiCommentry:
      "अविद्या, काम और कर्मजनित अभिमानवाला यह जीव ही यज्ञादि कर्म करके इस लोकसे धूमादि क्रमसे चन्द्रलोकको प्राप्त हो कर्मोंके क्षीण होनेपर वृष्टि आदि-क्रमसे इस लोकको प्राप्त होनेपर अन्नरूपसे पुरुषरूप अग्निमें हवन किया जाता है। उस पुरुषमें यह संसारी जीव रसादिक्रमसे सबसे पहले शुक्ररूपसे गर्भ होता है। इसी बातको ‘यह जो पुरुषमें रेतस् है तद्रूपसे [गर्भ होता है]’ इस वाक्यसे कहा है। वह यह रेतस् (शुक्र) अन्नमय पिण्डके रसादिरूप सम्पूर्ण अंग यानी अवयवोंसे तेज—शरीरका सारभूत निष्पन्न हुआ है। वह पुरुषका आत्मभूत होनेके कारण ‘आत्मा’ है। शुक्ररूपसे गर्भीभूत हुए उस आत्माको पुरुष अपने शरीरमें ही धारण (पोषण) करता है। जिस समय भार्या ऋ तुमती होती है उस समय पिता उस शुक्रको स्त्रीरूप अग्नि—अर्थात् स्त्री [-की योनि]-में उससे संयोग करके सींचता है उस समय वह इस शुक्रको अपने गर्भरूपसे उत्पन्न करता है। इस प्रकार रेत:सिंचनकालमें रेतोरूपसे अपने स्थानसे निकलना ही इस संसारी पुरुषका प्रथम जन्म अर्थात् प्रथमावस्थाकी अभिव्यक्ति है। यही बात “असावात्मा अमुमात्मानम्” इत्यादि वाक्यसे पहले कही गयी है॥ १ ॥",
    EnglishCommentry:
      "This very man performs such karmas as sacrifice etc. owing to his self-identification with ignorance, desire, and action; then he reaches the lunar region after passing from this world through smoke and the rest in succession; and then, when the fruits of his action become exhausted, he reaches this world to become food after passing in succession through rain etc.; then he is poured as a libation in the fire that is man. Puruse ha vai, in that man indeed; ayam, that, transmigrating soul; aditah garbhah bhavati, is first conceived, in the form of semen after passing through the (state of being the) essence of food etc. This is being stated by saying that he takes birth in that form, in the text, ' Yat etat retah.' Tat etat retah, that which is this semen; sam- bhutam, is accomplished, (extracted); as tejah, vigour, essence, of the body; sarvebhyah angebhyah, from all the limbs, from all the component parts, such as the juice of the body which is the product of food. Being identified with the man himself, this (semen) is called his self. He bihharti, bears; that atmanam, self that has been conceived in the form of semen; atmani eva, in his own self; (in other words) he holds his own self (the semen) in his own body. Yada, when -when his wife is in the proper state; he sincati, sheds, while in union; tat, that semen; striyam, in the wife-in the fire of the woman; atha, then; the father janayati, procreates; enat, this one-the semen that was conceived by him as identified with himself. Asya, of that transmigrating soul; tat, that, that issuing out of its own place, in the form of semen, when it is being poured out; is the prathamam janma, the first birth-the first manifested state. This fact was stated earlier by the text, 'This self (that is the man), (offers) this self of his (that is the semen), to that self of his (that is the wife).'",
    Mantra: "1",
  },
  {
    id: 25,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "तत्स्त्रिया आत्मभूतं गच्छति। \n यथा स्वमङ्गं तथा। \n तस्मादेनां न हिनस्ति। \n सास्यैतमात्मानमत्रगतं भावयति॥ २ ॥",
    HindiTranslation:
      "जिस प्रकार [स्तनादि] अपने अंग होते हैं उसी प्रकार वह वीर्य स्त्रीके आत्मभाव (तादात्म्य)-को प्राप्त हो जाता है। अत: वह उसे पीड़ा नहीं पहुँचाता। अपने उदरमें गये हुए उस (पति)-के इस आत्माका वह पोषण करती है॥ २ ॥",
    EnglishTranslation:
      " That becomes non-different from the wife, just as much as her own limb is. Therefore (the foetus) does not hurt her. She nourishes this self of his that has entered here (in her womb).",
    HindiCommentry:
      "वह वीर्य जिस स्त्रीमें सींचा जाता है उस स्त्रीके आत्मभाव अर्थात् पिताके शरीरके समान उसके शरीरसे अभिन्नताको प्राप्त हो जाता है। जिस प्रकार अपने अंग स्तनादि (देहसे पृथक् नहीं) होते हैं उसी प्रकार यह भी हो जाता है। इसीलिये यह गर्भ पिटक (आन्तरिक व्रणरूप ग्रन्थि) आदिके समान उस माताको कष्ट नहीं देता। क्योंकि वह स्तनादि अपने अंगके समान शरीरसे अभेदको प्राप्त हो जाता है इसलिये वह [किसी प्रकारका] कष्ट यानी बाधा नहीं पहुँचाता—यह इसका तात्पर्य है। वह गर्भिणी इस अपने पतिके आत्माको यहाँ—अपने उदरमें प्रविष्ट हुआ जानकर गर्भके विरोधी भोजनादिको त्यागकर अनुकूल भोजनादिका उपयोग करती हुर्इ उसका पालन करती है॥ २ ॥",
    EnglishCommentry:
      "Tat, that, the semen; gacchati, becomes; dtmabhuyam, non-different -from the wife into whom it is shed; yatha svam ahgam tathd, just like her own limb-her breast etc.-as it was in the case of the father. Tasmdt, because of this fact; the foetus na hinasti, does not hurt-like a boil; endm, this one-the mother. Since it has become a part of herself just like her breast etc., therefore it does not hurt her; this is the idea. Sii, she, that pregnant woman; understanding etam dtmanam, this self, of her husband; atra gatam, as having entered here-into her womb; bhavayati, nourishes, protects it - by avoiding food etc. that are injurious to the foetus and by accepting such food etc. as are favourable to it.",
    Mantra: "2",
  },
  {
    id: 26,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "सा भावयित्री भावयितव्या भवति। \n तं स्त्री गर्भं बिभर्ति। सोऽग्र एव कुमारं जन्मनोऽग्रेऽधिभावयति। \n स यत्कुमारं जन्मनोऽग्रेऽधिभावयत्यात्मानमेव तद्भावयत्येषां लोकानां सन्तत्या। \n एवं सन्तता हीमे लोकास्तदस्य द्वितीयं जन्म॥ ३ ॥",
    HindiTranslation:
      "वह [गर्भभूत पतिके आत्माका] पालन करनेवाली [गर्भिणी स्त्री अपने पतिद्वारा] पालनीया होती है। गर्भिणी स्त्री उस गर्भका पोषण करती है तथा वह (पिता) गर्भरूपसे उत्पन्न हुए उस कुमारको प्रसवके अनन्तर पहले [जातकर्मादि संस्कारोंसे] ही संस्कृत करता है। वह जो जन्मके अनन्तर कुमारका संस्कार करता है सो इस प्रकार इन लोकों (पुत्र-पौत्रादि)-की वृद्धिसे वह अपना ही संस्कार करता है; क्योंकि इसी प्रकार इन लोकोंकी वृद्धि होती है—यही इसका दूसरा जन्म है॥ ३ ॥",
    EnglishTranslation:
      "She, the nourisher, becomes fit to be nourished. The wife bears that embryo (before the birth). He (the father) protects the son at the very start, soon after his birth. That he protects the son at the very beginning, just after birth, thereby he protects his own self for the sake of the continuance of these worlds. For thus is the continuance of these worlds ensured. That is his second birth.",
    HindiCommentry:
      "गर्भभूत पतिके आत्माकी वृद्धि करनेवाली वह स्त्री अपने स्वामीद्वारा वर्धयितव्या—पालनीया होती है; क्योंकि लोकमें उपकार-प्रत्युपकारके बिना किसीके साथ किसीका सम्बन्ध होना सम्भव नहीं है। जन्म होनेसे पूर्व उस गर्भको वह स्त्री गर्भधारणकी यथोक्त विधिसे धारण-पोषण करती है। तथा वह पिता [जन्म होनेके बाद] पहले ही जन्म लेते ही उस कुमारका जन्मके अनन्तर जातकर्मादिद्वारा संस्कार करता है। वह पिता जो जन्मके अनन्तर उस सद्योजात कुमारका जातकर्म आदिसे संस्कार करता है सो मानो अपना ही संस्कार करता है; क्योंकि पिताका आत्मा ही पुत्ररूपसे उत्पन्न होता है। यही बात “पतिर्जायां प्रविशति” इत्यादि वाक्योंमें कही है। पिता अपनेको पुत्ररूपसे उत्पन्न करके क्यों संस्कार करता है? इसपर कहते हैं—इन लोकोंके विस्तार अर्थात् अविच्छेदके लिये। यदि कोर्इ पुत्रोत्पादनादि न करें तो ये लोक विच्छिन्न हो जायँ। इस प्रकार, क्योंकि पुत्रोत्पादनादि कर्मोंका विच्छेद न होनेके कारण ही ये लोक वृद्धिको प्राप्त होकर प्रवाहरूपसे वर्तमान रहते हैं, इसलिये उनके अविच्छेदके लिये उस [पुत्रोत्पादनादि]-को करना चाहिये; मोक्षके लिये नहीं—यह इसका अभिप्राय है। इस प्रकार कुमाररूपसे जो माताके उदरसे बाहर निकलना है वही इस संसारी जीवका रेतोरूप जन्मकी अपेक्षा दूसरा जन्म यानी इसकी द्वितीय अवस्थाकी अभिव्यक्ति है॥ ३ ॥",
    EnglishCommentry:
      "Sd, she; the bhavayitri, nourisher, of the self of her husband, conceived in her womb; bhavayitavyd bhavati, becomes fit to be nourished, to be protected, by the husband for, in this world, no one can have any relation with another unless it be through reciprocity of benefit. Stri, the wife; bibharti, bears; tam garbham, that foetus; agre, before its birth, by following the method of protecting the foetus mentioned earlier. Sah, he, the father; bhavayati, protects, through natal rites etc.; kumaram, the son; agre eva, at the very start, as soon as he is born; janmanah adhi, after the birth. Yat, that; sah, he, the father; bhavayati, protects; kumaram, the son, through natal rites etc.; agrejanmanah adhi, at the very start, just after the birth; tat, thereby; he bhavayati atmanam eva, protects his own self. For it is the father's self that takes birth as the son. And so has it been said, `The husband enters into the wife' (Hari. III. lxxiii. 31). Now is being stated why the father protects after having begotten himself as the son: esam lokanam san- tatyai, for the continuance of these worlds. This is the idea. For these worlds will cease to continue if everyone should stop procreating sons etc. The idea is this: Since these worlds thus continue to flow like a current through the continuity of such acts as the begetting of sons, therefore these acts should be undertaken for the non-stoppage of the worlds, but not for the sake of emancipation. Tat, that fact, the issuing out; asya, of him, of the transmigrating soul, as a son from the mother's womb; is the dvitiyam janma, second birth, the manifestation of the second state, relatively to his form as semen.",
    Mantra: "3",
  },
  {
    id: 27,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "सोऽस्यायमात्मा पुण्येभ्य: प्रतिधीयते। \n अथास्यायमितर आत्मा कृतकृत्यो वयोगत: प्रैति। \n स इत: प्रयन्नेव पुनर्जायते तदस्य तृतीयं जन्म॥ ४ ॥",
    HindiTranslation:
      "इस (पिता)-का यह [पुत्ररूप] आत्मा पुण्यकर्मोंके अनुष्ठानके लिये [घरमें पिताके स्थानपर] प्रतिनिधिरूपसे स्थापित किया जाता है। तदनन्तर इसका यह अन्य (पितृरूप) आत्मा वृद्धावस्थामें पहुँचकर कृतकृत्य होकर यहाँसे कूच कर जाता है। यहाँसे कूच करनेके अनन्तर ही वह [कर्मफलभोगके लिये] पुन: जन्म लेता है। यही इसका तीसरा जन्म है॥ ४ ॥",
    EnglishTranslation:
      "This self of his (viz the son) is deputed (by the father) for the performance of virtuous deeds. Then this other self of his (that is the father of the son), having got his duties fulfilled and having advanced in age, departs. As soon as he departs, he takes birth again. That is his third birth.",
    HindiCommentry:
      "इस पिताका वह यह पुत्ररूप आत्मा पुण्य यानी शास्त्रोक्त कर्मोंके निमित्त अर्थात् कार्यसम्पादनके लिये पिताके स्थानपर प्रतिनिधि स्थापित किया जाता है। अर्थात् पिताको जो कुछ करना चाहिये उसे करनेके लिये यह प्रतिनिधि होता है। यही बात बृहदारण्यकोपनिषद्में संप्रत्तिविद्याके* प्रकरणमें पितासे शिक्षा पाकर पुत्र कहता है—“मैं ब्रह्म हूँ, मैं यज्ञ हूँ” इत्यादि। तदनन्तर पुत्रपर अपना भार छोड़कर इस पुत्रका यह पितारूप दूसरा आत्मा कृतकृत्य यानी कर्तव्यरूप ऋणत्रयसे मुक्त होकर अर्थात् अपना कर्तव्य सम्पादन करके वयोगत होकर—अवस्था समाप्त हो जानेपर अर्थात् वृद्ध होनेपर प्रेत—मृत्युको प्राप्त हो जाता है। वह यहाँसे जाते समय अर्थात् शरीरको त्यागता हुआ ही तिनकेकी जोंक आदिके समान कर्मोपलब्ध अन्य देहको प्राप्त करके पुन: उत्पन्न होता है। वह जो इसे मरनेपर प्राप्त हुआ करता है, इसका तीसरा जन्म है। शंका—संसारी जीवका पितासे वीर्यरूपसे पहला जन्म बतलाया; उसीका कुमाररूपसे मातासे दूसरा जन्म कहा। अब उसीका तीसरा जन्म बतलाते समय उसके मृत पिताका जो जन्म होता है वही इसका तीसरा जन्म है—ऐसा क्यों कहा गया? समाधान—पिता और पुत्रकी एकात्मता बतलानी इष्ट होनेके कारण ऐसा कहनेमें कोर्इ दोष नहीं है। वह पुत्र भी अपने पिताके समान अपने पुत्रपर भार छोड़कर यहाँसे कूच करनेपर फिर उत्पन्न होता ही है। यह बात एकके प्रति कही जानेपर दूसरेके लिये भी कह ही दी गयी है—ऐसा श्रुति मानती है; क्योंकि पिता और पुत्र एकरूप ही हैं॥ ४ ॥",
    EnglishCommentry:
      "Sah ayam alma, that self which is the son; asya, of his, of the father; pratidhiyate, is deputed, by the father, in his own place; punyebhyah karmabhyah, for the performance of virtuous deeds, as prescribed by the scriptures, i.e. for the accomplishment of all that was the father's duty. Similarly it is seen in the Vajasaneyaka, in the portion dealing with the substitution (of the son), that on being instructed by the father, the son admits thus: `I am Brahman (i.e. the Vedas), I am the sacrifice\" (Br. I. v. 17). Atha, after that, after the father's responsibility has been entrusted to the son; ayam itarah alma, this other self that is the father; asya, of this one, of the son; krtakrtyah, becoming freed from duties, from the three debts (to the gods, to the seers, and to the manes), i.e. having got all his duties fulfilled; vayogatah, having advanced in age, being afflicted with decrepitude; praiti, dies. Sah itch prayan eva, as soon as he departs from here, no sooner does he leave the body than; he punah jayate, takes birth again, by adopting another body according to the results of his actions (by moving from one body to the other) just like a leech. Tat, that, the birth that he gets after death; is asya trtiyam janma, the third birth of this one. \n Objection: Is it not a fact that for the transmigrating soul the first birth is in the form of semen from the father? And his second birth has been stated to be as a son from the mother. The turn now being for stating the third birth of that very soul (which became the son), why is the birth of the dead father enumerated as the third ? \n Answer: That is not wrong, for the intention is to speak of the identity of the father and the son. That son, too, just like his father, entrusts his responsibility to his son (in his own turn) and then departing from here takes birth immediately after. The Upanisad thinks that this fact which is stated with regard to another (viz the father) is implied here (with regard to the son) also; for the father and the son are identical.",
    Mantra: "4",
  },
  {
    id: 28,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "तदुक्तमृषिणा—गर्भे नु सन्नन्वेषामवेदमहं देवानां जनिमानि विश्वा। \n शतं मा पुर आयसीरपक्षन्नध: श्येनो जवसा निरदीयमिति। \n गर्भ एवैतच्छयानो वामदेव एवमुवाच॥ ५ ॥",
    HindiTranslation:
      "यही बात ऋषि (मन्त्र)-ने भी कही है—‘मैंने गर्भमें रहते हुए ही इन देवताओंके सम्पूर्ण जन्मोंको जान लिया है। [तत्त्वज्ञान होनेसे पूर्व] मुझे सैकड़ों लोहमय (लोहेके समान सुदृढ़) शरीरोंने अवरुद्ध किया हुआ था। अब [तत्त्वज्ञानके प्रभावसे] मैं श्येन पक्षीके समान [उनका छेदन करके] बाहर निकल आया हूँ’—वामदेवने गर्भमें शयन करते समय ही ऐसा कहा था॥ ५ ॥",
    EnglishTranslation:
      "This fact was stated by the seer: `Even while lying in the womb, I came to know of the birth of all the gods. A hundred iron citadels held me down. Then, like a hawk, I forced my way through by dint of the knowledge of the Self.' Vamadeva said this while still lying in the mother's womb.",
    HindiCommentry:
      "यही बात ऋषि यानी मन्त्रने भी कही है, सो बतलाते हैं— ‘गर्भे नु’—माताके गर्भमें रहते हुए ही—यहाँ ‘नु’ शब्द वितर्कका बोध कराता है—अनेक जन्मान्तरोंकी भावनाके परिपाकवश मैंने इन वाक् एवं अग्नि आदि देवताओंके सम्पूर्ण जन्मोंका अनुभव—बोध प्राप्त किया है। मुझे संसारबन्धनसे मुक्त होनेसे पूर्व आयसी अर्थात् लोहमयीके समान सैकड़ों—अनेकों अभेद्य पुरियों—शरीरोंने सुरक्षित (अवरुद्ध) किया हुआ था। अब जालको काटकर वेगसे उड़ जानेवाले श्येन (बाज पक्षी)-के समान मैं आत्मज्ञानजनित सामर्थ्यके द्वारा उससे बाहर निकल आया हूँ—अहो! वामदेव ऋषिने गर्भमें शयन करते हुए ही ऐसा कहा था॥ ५ ॥",
    EnglishCommentry:
      "Transmigrating in this way, involved in the chain of birth and death through the manifestation of the three states, everyone remains merged in the ocean of this world. If he ever succeeds somehow, in any of the states, to realize the Self as revealed in the Vedas, he becomes freed then and there from all worldly bondages and accomplishes his object. The Upanisad says that tat, this fact; uktam, was declared; rsina, by the seer, by the (following) mantra, also; 'Gurbhe nu sun, while still in the womb, of my mother -- the indeclinable word nu implies deliberation; by virtue of the fruition of my meditations in many previous births, aham, I; anvavedam, knew, i.e. had the knowledge of; visvd janimani, all the births; esam devanam, of these gods - of Speech, Fire, etc. What a good luck ! Satam, a hundred, many; ayastit (or rather ayasyah) purah, citadels made of iron, that is to say, impenetrable bodies as though made of iron; araksan ma, kept me guarded; adhah, in the lower worlds; guarded me from getting freed from the meshes of the world. (Or adhah, later on);' syenah, like a hawk; javasa, forcefully, through the power generated by the knowledge of the Self; niradlyam, I came out, by tearing through the net. O ! the wonder!' Vamadevah, Vamadeva, the seer; garbhe eva saydnah, while still lying in the womb; uvaca, said; etat, this; evam, in this way. Ananda Giri gives these two alternative explanations of the word adhah occuring in the commentary. There are two readings, adho'dhah and adho'tha.",
    Mantra: "5",
  },
  {
    id: 29,
    Chapter: "2",
    Khand: "1",
    Shloka:
      "स एवं विद्वानस्माच्छरीरभेदादूर्ध्व उत्क्रम्यामुष्मिन्त्स्वर्गे लोके सर्वान्कामानाप्त्वामृत: समभवत्समभवत्॥ ६ ॥",
    HindiTranslation:
      "वह [वामदेव ऋषि] ऐसा ज्ञान प्राप्तकर इस शरीरका नाश होनेके अनन्तर उत्क्रमणकर इन्द्रियोंके अविषयभूत स्वर्ग (स्वप्रकाश) लोकमें सम्पूर्ण भोगोंको प्राप्तकर अमर हो गया, [अमर] हो गया॥ ६ ॥",
    EnglishTranslation:
      "He who had known thus (had) become identified with the Supreme, and attained all desirable things (even here); and having (then) ascended higher up after the destruction of the body, he became immortal, in the world of the Self. He became immortal.",
    HindiCommentry:
      "वह वामदेव ऋषि पूर्वोक्त आत्माको इस प्रकार जानकर इस शरीरका नाश होनेके अनन्तर अर्थात् लोहमयके समान दुर्भेद्य और जन्म-मरणादि अनेक प्रकारके सैकड़ों अनर्थोंसे समन्वित इस अविद्यापरिकल्पित शरीरपरम्पराका परमात्मज्ञानरूप अमृतके उपयोग (आस्वाद)-से प्राप्त हुर्इ शक्तिद्वारा भेद होनेपर यानी शरीरोत्पत्तिके बीजभूत अविद्या आदि निमित्तकी निवृत्तिसे होनेवाले देहपातके अनन्तर ऊर्ध्व अर्थात् परमात्मभावको प्राप्त हो अधोभाव यानी संसारसे ऊपर उठ तत्त्वज्ञानसे उद्भासित निर्मल सर्वात्मभावको प्राप्त हो उस (इन्द्रियोंसे अगोचर) पूर्वोक्त अजर, अमर, अमृत, अभय, सर्वज्ञ, अपूर्व, अनन्य, अनन्तर, अबाह्य और एकमात्र प्रज्ञानामृतस्वरूप स्वर्गलोकमें दीपककी भाँति शान्त हो गया; अर्थात् अपने आत्मा—स्व-स्वरूपमें स्थित होकर अमृत हो गया। भाव यह है कि आत्मज्ञानद्वारा पहलेहीसे पूर्णकाम होनेके कारण अर्थात् जीवित अवस्थामें ही सम्पूर्ण कामनाएँ प्राप्तकर [वह अमरत्वको प्राप्त हो गया]। फल और उदाहरणके सहित आत्मज्ञानकी सम्यक् समाप्ति सूचित करनेके लिये यहाँ [समभवत्-समभवत्—ऐसी] द्विरुक्ति की गयी है॥ ६ ॥",
    EnglishCommentry:
      "Sah, he, the seer Vamadeva; evam vidvan, having known thus, known the Self' as spoken of earlier; asmat sarira- bhedat, after the destruction of this body--of this body that is conjured up by ignorance, that is impenetrable like iron; on the dissolution of the bondage of the bodiessubject to hundreds of multifarious evils consisting in birth, death, etc.-through the power generated by the tasting of the nectar of knowledge of the supreme Self; that is to say, on the destruction of the body following the destruction of such causes as ignorance that are the seeds of the creation of the body; he urdhvah (san), having already become identified with the supreme Self; (then) utkratnva, having ascended higher up as compared with the lowly worldly state, becoming established in the state of the pure, all-pervasive Self, shining with knowledge; amusmin, in that Reality, which was described as ageless, deathless, immortal, fearless, and omniscient, which has no cause or effect; inside or outside, which is of the nature of the unalloyed nectar of consciousness; he became merged like the blowing out of a lamp. He samubhurut, became; amrtah, immortal; svarge joke, in his own Self, in his own reality; sarvan kaman aptva, after the attainment of all desires; that is to say, after having got all the desirable things, even earlier (when still living), by virtue of his becoming desireless through the knowledge of the Self. The repetition in 'he became', is to show the end of the knowledge of the Sell' together with its fruit and its illustration.",
    Mantra: "6",
  },
  {
    id: 30,
    Chapter: "3",
    Khand: "1",
    Shloka:
      "कोऽयमात्मेति वयमुपास्महे। \n कतर: स आत्मा, येन वा पश्यति येन वा शृणोति येन वा गन्धानाजिघ्रति येन वा वाचं व्याकरोति येन वा स्वादु चास्वादु च विजानाति॥ १ ॥",
    HindiTranslation:
      "हम जिसकी उपासना करते हैं वह यह आत्मा कौन है? जिससे [प्राणी] देखता है, जिससे सुनता है, जिससे गन्धोंको सूँघता है, जिससे वाणीका विश्लेषण करता है और जिससे स्वादु-अस्वादुका ज्ञान प्राप्त करता है वह [श्रुतिकथित दो आत्माओंमेंसे] कौन-सा आत्मा है?॥ १ ॥",
    EnglishTranslation:
      "Om! Which is It that we worship as this Self? Which of the two is the Self? Is It that by which one sees, and by which one hears; also, by which one smells odour, and by which one utters speech, and by which one tastes the sweet or the sour?",
    HindiCommentry:
      "हम जिस आत्माकी ‘यह आत्मा है’ इस प्रकार साक्षात् उपासना करते हैं वह आत्मा कौन है? तथा जिस आत्माकी ‘यह आत्मा है’ इस प्रकार साक्षात् उपासना करनेवाला वामदेव अमर हो गया था उसी आत्माकी हम उपासना करते हैं। किन्तु वस्तुत: वह आत्मा है कौन-सा? इस प्रकार जिज्ञासापूर्वक एक-दूसरेसे प्रश्न करते हुए उन्हें आत्म-सम्बन्धी विशेष विवरणसे युक्त पूर्वोक्त श्रुतिके संस्कारसे यह स्मृति पैदा हुर्इ—‘इस पुरुषमें ब्रह्म पादाग्रभागद्वारा प्रविष्ट हुआ’ तथा इसी पुरुषमें ‘वह इस सीमाको ही विदीर्णकर इसके द्वारा प्राप्त हुआ।’ इस प्रकार यहाँ एक-दूसरेसे प्रतिकूल दो ब्रह्म ज्ञात होते हैं और वे इस पिण्डके आत्मस्वरूप हैं। इनमेंसे कोर्इ एक ही आत्मा उपासनीय हो सकता है। इनमें जो उपासनीय है वह आत्मा कौन-सा है? इस विशेष बातको निश्चय करनेके लिये उन्होंने आपसमें विचार करते हुए एक-दूसरेसे फिर पूछा। फिर आपसमें विचार करनेवाले उन मुमुक्षुओंको अपने विचारणीय विशेष विषयके सम्बन्धमें यह बुद्धि पैदा हुर्इ। किस प्रकार पैदा हुर्इ? [सो बतलाते हैं—] इस पिण्डमें दो वस्तुएँ उपलब्ध होती हैं—एक तो जिस चक्षु आदि अनेक प्रकारके भेदोंसे विभिन्न साधन (इन्द्रियग्राम)-द्वारा [पुरुष विषयोंको] उपलब्ध करता है और दूसरा जो उपलब्ध किया करता है; क्योंकि वह भिन्न-भिन्न इन्द्रियोंद्वारा उपलब्ध हुए विषयोंकी स्मृतिका अनुसन्धान करता है। उनमेंसे जिसके द्वारा पुरुष उपलब्ध करता है वह तो आत्मा हो नहीं सकता। तो फिर वह किसके द्वारा उपलब्ध करता है, सो बतलाया जाता है—नेत्रके साथ एकीभूत हुए जिस श्रोत्रभावापन्नके द्वारा वह शब्द श्रवण करता है, जिस घ्राणेन्द्रियभूतसे वह गन्धोंको सूँघता है, जिस वागिन्द्रियभूतसे वह गौ-अश्व इत्यादि नामात्मिका तथा साधु-असाधु वाणीका विश्लेषण करता है और जिस रसनेन्द्रियभूतसे वह स्वादु-अस्वादु पदार्थोंको जानता है॥ १ ॥",
    EnglishCommentry:
      "The Self which vavam upasmahe, we worship; directly ayam amid iti, as this Self; kah, which is It? And we worship that very Self, by meditating on which directly as This is the Self', Vamadeva became immortal. Which indeed is that Self'? When they were thus questioning one another with such eagerness to know, then from the impressions formed by having heard about the (two) specific entities dealt with earlier, there flashed in their minds the memory that here in the text, 'Brahman' entered into this person through the two ends of the feet', and `Having split up this end, He entered through this door' (I.iii.12), have been mentioned two Brahmans which have entered into this very person from the opposite sides. And these two are the souls in this body. One of these selves is fit to be worshipped. While still engaged in discussion, they again asked one another with a view to determining clearly the Self that was to be worshipped out of the two. As they were discussing, there arose in them another thought regarding the one that should be the object of close enquiry. How? Two entities are perceived in this body: One is the instrument (Prana), diversified into many forms, through which one perceives; and the other is the perceiver, inferable from the fact of the occurrence of recognition through memory of what was perceived with different senses.' Of these two, that through which one perceives cannot be the Self. Through what, again, does one perceive? That is being stated: Yena va pasyati, is it that by which, transformed as eye, one sees colour; yena va, that by vhich, transformed as the ear; srnoti, one hears sound; yena va, also, that by which, transformed as the sense of smell; ajighrati gandhan, one smells the odours; yena vu, and that by which, transformed as the organ of speech; one vyakaroti vacam, utters speech, consisting of names, such as `cow', `horse', etc., and `good', `bad', etc. ; yena va, and that by which, transformed as the sense of taste; vijdnati, one perceives; svadu ca asvadu ca, the sweet and the sour (tastes).  Which, again, is that one organ that has become diversely differentiated? That is being answered :",
    Mantra: "1",
  },
  {
    id: 31,
    Chapter: "3",
    Khand: "1",
    Shloka:
      "यदेतद्धृदयं मनश्चैतत्। संज्ञानमाज्ञानं विज्ञानं प्रज्ञानं मेधा दृष्टिर्धृतिर्मतिर्मनीषा जूति: स्मृति: सङ्कल्प: क्रतुरसु: कामो वश इति सर्वाण्येवैतानि प्रज्ञानस्य नामधेयानि भवन्ति॥ २ ॥",
    HindiTranslation:
      "यह जो हृदय है वही मन भी है। संज्ञान (चेतनता), आज्ञान (प्रभुता), विज्ञान, प्रज्ञान, मेधा, दृष्टि, धृति, मति, मनीषा, जूति (रोगादिजनित दु:ख), स्मृति, संकल्प, क्रतु, असु (प्राण), काम और वश (मनोज्ञ वस्तुओंके स्पर्शादिकी कामना)—ये सभी प्रज्ञानके नाम हैं॥ २ ॥",
    EnglishTranslation:
      "It is this heart (intellect) and this mind that were stated earlier. It is sentience, rulership, secular knowledge, presence of mind, retentiveness, sense-perception, fortitude, thinking, genius, mental suffering, memory, ascertainment, resolution, life-activities, hankering, passion, and such others. All these verily are the names of Consciousness.",
    HindiCommentry:
      "पहले जो कहा है कि प्रजाओंका रेतस् (सारभूत) हृदय है, हृदयका सारभूत मन है, मनसे जल और वरुणकी सृष्टि हुर्इ; हृदयसे मन हुआ और मनसे चन्द्रमा। वह यह हृदय ही मन भी है। वह एक ही अनेक रूप हो रहा है। इस एक अन्त:करणसे ही नेत्ररूपसे रूपको देखता है, श्रोत्ररूपसे श्रवण करता है, घ्राणरूपसे सूँघता है, वागिन्द्रियरूपसे बोलता है, जिह्वारूपसे चखता है, स्वयं संकल्प-विकल्परूप मनसे संकल्प करता है और हृदयरूपसे निश्चय करता है। अत: उपलब्धाकी समस्त उपलब्धियोंके लिये इन्द्रियसम्बन्धी सारे व्यापारोंको करनेवाला यही एक साधन है। इसी प्रकार कौषीतकी उपनिषद्में भी कहा है—“प्रज्ञाद्वारा वाणीपर आरूढ होकर वाणीसे सम्पूर्ण नामोंको प्राप्त (ग्रहण) करता है, प्रज्ञाद्वारा चक्षु इन्द्रियपर आरूढ होकर चक्षुसे सारे रूपोंको प्राप्त करता है” इत्यादि। तथा बृहदारण्यकमें कहा है—“मनसे ही देखता है, मनसे ही सुनता है, हृदयसे ही रूपोंका ज्ञान प्राप्त करता है” इत्यादि। अत: हृदय और मन:शब्दवाच्य अन्त:करणका ही सब प्रकारकी उपलब्धिमें साधनत्व प्रसिद्ध है। प्राण भी तद्रूप ही है। “जो प्राण है वही प्रज्ञा है और जो प्रज्ञा है वही प्राण है” ऐसा ब्राह्मणवाक्य है। ‘प्राण इन्द्रियोंका संघातरूप है’ यह बात हम प्राणसंवाद आदि प्रकरणोंमें कह चुके हैं। अत: जिसने चरणोंकी ओरसे प्रवेश किया था वह ब्रह्म उपलब्धाकी उपलब्धिका साधन होनेके कारण गौण होनेसे मुख्य ब्रह्म अर्थात् उपास्य आत्मा नहीं हो सकता। अत: पारिशेष्यनियमानुसार* जिस उपलब्धाकी उपलब्धिके लिये इस हृदय एवं मनोरूप अन्त:करणकी आगे बतलायी जानेवाली वृत्तियाँ होती हैं वह उपलब्धा ही हमारा उपासनीय आत्मा है—ऐसा उन्होंने निश्चय किया। उस अन्त:करणरूप उपाधिमें स्थित प्रज्ञानरूप उपलब्धा ब्रह्मकी उपलब्धिके लि ये जो बाह्य और आन्तरिक विषयोंसे सम्बन्ध रखनेवाली अन्त:करणकी वृत्तियाँ हैं वे ये बतलायी जाती हैं—‘संज्ञान-संज्ञप्ति अर्थात् चेतनभाव, आज्ञान—आज्ञा करना अर्थात् ईश्वरभाव (प्रभुता), विज्ञान—कलादिका ज्ञान, प्रज्ञान—प्रज्ञप्ति यानी प्रज्ञता (समयोचित बुद्धि स्फुरित हो जाना—प्रतिभा), मेधा—ग्रन्थधारणकी शक्ति, दृष्टि—इन्द्रियोंद्वारा सब विषयोंको उपलब्ध करना, धृति—धारण करना, जिससे शिथिल हुए शरीर और इन्द्रियोंमें जागृति होती है, ‘धृतिसे ही शरीरको उठाकर वहन करते हैं’ ऐसा [पण्डितजन] कहते भी हैं, मति—मनन करना, मनीषा—मनन करनेकी स्वतन्त्रता, जूति—चित्तका रोगादिसे दु:खी होना, स्मृति—स्मरण, संकल्प—शुक्ल-कृष्णादि-भावसे रूपादिका संकल्प करना, क्रतु—अध्यवसाय, असु—जीवनकी निमित्तभूत श्वासोच्छ्वासादि क्रिया, काम—अप्राप्त विषयकी आकांक्षा यानी तृष्णा और वश—स्त्रीसंसर्गादिकी अभिलाषा—इत्यादि प्रकारकी अन्त:-करणकी वृत्तियाँ प्रज्ञप्तिरूप उपलब्धाकी उपलब्धिके लिये होनेके कारण विशुद्ध-बोधस्वरूप ब्रह्मकी उपाधिभूत हैं। अत: उसकी उपाधिजनित गुणवृत्तिसे ये संज्ञान आदि उस ब्रह्मके ही नाम हैं। ये सभी प्रज्ञप्तिमात्र प्रधानके नाम ही हैं; स्वत: साक्षात् कुछ नहीं हैं ऐसा ही कहा भी है—“प्राणन करनेके कारण ही [ब्रह्म] प्राण नामवाला है” इत्यादि॥ २ ॥",
    EnglishCommentry:
      "Etat, it is; hrdayam manah ca, the heart and the mind;' yat, that were spoken of earlier in `The essence (i.e. the product) of all beings is the heart; the essence of the heart is the mind; by the mind was created water and Varuna; from the heart came the mind; and from the mind, Moon.' That very thing, which is but one, has become multiformed. Through this single internal organ, as transformed into the eye, one sees colour; through this, transformed into the ear, one hears; through this, transformed into the sense of smell, one smells; through this, transformed into the sense of taste, one tastes; through this very one, in its aspect as the organ of deliberation, one deliberates; and in its aspect as the heart (i.e. the intellect), one decides. Therefore this is the one single organ which acts with regard to all objects of the senses, so that the perceiver may perceive everything. Similar is the text of the Kaus-itaki Upanisad: `Becoming identified with the organ of speech through the intellect (as reflecting the consciousness of the Self), the Self reaches (i.e. becomes identified with) the names' etc.' (III. 6). And in the Vajasaneyaka occur these: `It is through the mind that one hears' (Br. I. v. 3), `for one knows colours through the heart' (Br. III. ix. 19), etc. Accordingly, the entity that is called the heart and the mind is well known as the agent producing all perceptions. And the Prana consists of these two, for there occurs the brdhmana text: `That which is the Prana is the intellect; that which is the intellect is the Prana' (Kau. III. 3). And we said in the texts dealing with the conversations with the Prana and so on (Br. I. iii, VI. i. 7-14; Pr. II) that the Prana is of the form of a combination of the organs. Therefore the entity, (in the form of which) Brahman entered through the feet, cannot be the Self to be worshipped, since it is a subsidiary thing, being an instrument of perception for the perceiver. As a last resort, they arrived at this certitude: `That witnessing Self is worthy of worship by us, fpr whose percep tion the functions of this instrument, in its aspects as the heart and the mind, are being stated.'  The functions of that inner organ-with regard to internal and external objects-which take place for bearing witness to the witnessing Brahman' that is consciousness by nature and that exists in the midst of Its limiting adjunct, viz the internal organ, are (these that are) being enumerated: Samjnanam, sentience, the state of consciousness; ajnanam, rulership, the state of lordliness; vijnanam, (secular) knowledge of arts etc. ; prajiianam, presence of mind; medha, ability to understand and retain the purport of books; dhrtih, perception, of all objects through the senses; dhrtih, fortitude, by which the drooping body and senses are buoyed up- for they say, By fortitude they buoyed up the body'; matih, thinking; manisa, independent thinking (genius); jutih, mental suffering, owing to disease etc.; smrtih, memory; samkalpah, ascertainment, of colours etc. as white, black, etc.; kratuh, resolution; asuh, any function calculated to sustain life's activity, such as breathing etc.; kamah, desire for a remote object, hankering; vasah, passion for the company of women; iti, etc., and other functions of the inner organ. Since these are the means for the perception of the witness who is mere Consciousness, they are the limiting adjuncts of Brahman that is pure Consciousness, and therefore samjnana etc. become the indirect names of Brahman, created by limiting adjuncts. Sarvani eva etani, all these verily; bhavanti, become; namadheyani, the names; prajnanasya, of Consciousness; but not so naturally and directly. And so has it been said, When It does the function of living, It is called the vital force' (Br. I. iv. 7) etc.",
    Mantra: "2",
  },
  {
    id: 32,
    Chapter: "3",
    Khand: "1",
    Shloka:
      "एष ब्रह्मैष इन्द्र एष प्रजापतिरेते सर्वे देवा इमानि च पञ्च महाभूतानि पृथिवी वायुराकाश आपो ज्योतींषीत्येतानीमानि च क्षुद्रमिश्राणीव बीजानीतराणि चेतराणि चाण्डजानि च जारुजानि च स्वेदजानि चोद्भिज्जानि चाश्वा गाव: पुरुषा हस्तिनो यत्किंचेदं प्राणि जङ्गमं च पतत्रि च यच्च स्थावरं सर्वं तत्प्रज्ञानेत्रम्। प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोक: प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म॥ ३ ॥",
    HindiTranslation:
      "यह (प्रज्ञानरूप आत्मा) ही ब्रह्म है, यही इन्द्र है, यही प्रजापति है, यही ये [अग्नि आदि] सारे देव तथा पृथिवी, वायु, आकाश, जल और तेज—ये पाँच भूत हैं, यही क्षुद्र जीवोंके सहित उनके बीज (कारण) और अन्य अण्डज, जरायुज, स्वेदज, उद्भिज्ज, अश्व, गौ, मनुष्य एवं हाथी हैं तथा [इनके अतिरिक्त] जो कुछ भी यह जंगम (पैरसे चलनेवाले), पतत्रि (आकाशमें उड़नेवाले) और स्थावर (वृक्ष-पर्वत आदि) रूप प्राणिवर्ग है वह सब प्रज्ञानेत्र और प्रज्ञान (निरुपाधिक चैतन्य)-में ही स्थित है। लोक प्रज्ञानेत्र (प्रज्ञा—चैतन्य ही जिसका नेत्र—व्यवहारका कारण है ऐसा) है, प्रज्ञा ही उसका लयस्थान है, अत: प्रज्ञान ही ब्रह्म है॥ ३ ॥",
    EnglishTranslation:
      "This One is (the inferior) Brahman; this is Indra, this is Prajapati; this is all these gods; and this is these five elements, viz earth, air, space, water, fire; and this is all these (big creatures), together with the tiny ones, that are the procreators of others and referable in pairs-to wit, those that are born of eggs, of wombs, of moisture, and of the earth, viz horses, cattle, men, elephants, and all the creatures that there are which move or fly and those which do not move. All these are impelled by Consciousness; all these have Consciousness as the giver of their reality; the universe has Consciousness as its eye, and Consciousness is its end. Consciousness is Brahman.",
    HindiCommentry:
      "वह यह प्रज्ञानरूप आत्मा ही अपरब्रह्म है, अर्थात् सम्पूर्ण शरीरोंमें स्थित प्राण—प्रज्ञात्मा है। विभिन्न जलपात्रोंमें पड़े हुए प्रतिबिम्बके समान यही अन्त:करणरूप उपाधियोंमें अनुप्रविष्ट हिरण्यगर्भ—प्राण यानी प्रज्ञात्मा है। यही [‘इदमदर्शम्’ इस श्रुतिमें बतलाये हुए] गुणके कारण इन्द्र अथवा देवराज है। यही प्रजापति है, जो सबसे पहले उत्पन्न हुआ देहधारी है। जिससे मुखादिनिर्भेदके द्वारा अग्नि आदि लोकपाल उत्पन्न हुए हैं वह प्रजापति भी यही है। और भी ये जो अग्नि आदि सम्पूर्ण देवता हैं वे भी यही हैं। ये जो समस्त शरीरोंके उपादानभूत एवं अन्न और अन्नादत्वभावको प्राप्त हुए पृथिवी आदि पंचभूत हैं, क्षुद्र यानी अल्प जीवोंके सहित जो सर्पादि हैं तथा बीज—कारण और इतर—कार्यवर्ग इस प्रकार अलग-अलग दो विभागोंसे निर्दिष्ट [समस्त प्राणी हैं वे भी यही हैं]। [‘क्षुद्रमिश्राणीव’ इस पदसमूहमें] ‘इव’ शब्दका प्रयोग अनर्थक है। वे कौन-कौन हैं, सो बतलाते हैं। अण्डज—पक्षी आदि, जारुज—जरायुज—मनुष्यादि, स्वेदज—जूँ आदि, उद्भिज्ज—वृक्षादि तथा अश्व, गौ, पुरुष, हाथी एवं अन्य भी ये जो कुछ प्राणी हैं—वे कौन-कौन-से? जंगम—जो पैरोंसे चलते हैं, पक्षी—जो आकाशमें उड़नेवाले हैं और स्थावर—जो अचल हैं, वे सब यही हैं अर्थात् वे सब-के-सब प्रज्ञानेत्र हैं। प्रज्ञा प्रज्ञप्तिको कहते हैं और वह ब्रह्म ही है तथा जिससे नयन किया जाय [अर्थात् ले जाया जाय] उसे ‘नेत्र’ कहते हैं। इस प्रकार प्रज्ञा ही जिसका नेत्र है वह प्रज्ञानेत्र कहलाता है। तथा उत्पत्ति, स्थिति और प्रलयके समय प्रज्ञान यानी ब्रह्ममें स्थित रहनेवाले अर्थात् प्रज्ञाके आश्रित हैं। इस प्रकार पूर्ववत् यह लोक प्रज्ञानेत्र है अर्थात् सभी लोक प्रज्ञारूप नेत्रवाला है, सम्पूर्ण जगत्का आश्रय प्रज्ञा ही है; अत: प्रज्ञान ही ब्रह्म है। जो सम्पूर्ण औपाधिक विशेषतासे रहित, नित्य, निरंजन, निर्मल, निष्क्रिय, शान्त, एक और अद्वितीय है जो “नेति नेति” इत्यादि [श्रुतियोंद्वारा] क्रमसे समस्त विषयोंका बाध करके जानने-योग्य है तथा सब प्रकारके शाब्दिक ज्ञानका अविषय है, अत्यन्त विशुद्ध प्रज्ञारूप उपाधिके सम्बन्धसे सर्वज्ञ तथा जगत्के सर्वसाधारण और अव्यक्त बीजका प्रवर्तक वह ईश्वर ही सबका नियन्ता होनेके कारण ‘अन्तर्यामी’ नामवाला है; वही व्याकृत जगत्का बीजभूत विज्ञानात्माका अभिमानी ‘हिरण्यगर्भ’ नामवाला है तथा वही ब्रह्माण्डके भीतर सबसे पहले उत्पन्न हुए शरीररूप उपाधिवाला ‘विराट् प्रजापति’ संज्ञावाला है। वही उससे उत्पन्न हुए अग्नि आदिकी उपाधिसे ‘देवता’ संज्ञावाला है तथा उस ब्रह्मको ही ब्रह्मासे लेकर स्तम्बपर्यन्त विशेष-विशेष शरीरोंकी उपाधियोंमें भी उन-उनके नाम और रूप प्राप्त हुए हैं। सम्पूर्ण उपाधिभेदसे विभिन्न वही एक समस्त प्राणियों और तार्किकोंद्वारा सब प्रकारसे जाना जाता और अनेक प्रकारसे कल्पना किया जाता है। [इस विषयमें] “इसे कोर्इ तो अग्नि बतलाते हैं तथा कोर्इ मनु, कोर्इ प्रजापति, कोर्इ इन्द्र, कोर्इ प्राण और कोर्इ सनातन ब्रह्म कहते हैं” इत्यादि स्मृति भी है॥ ३ ॥",
    EnglishCommentry:
      "Esah, this One, the Self, which is essentially Consciousness; is brahma, Brahman, the inferior one (who is Hiranyagarbha and) who as Prana (possessed of the power of action) and the conscious soul (possessed of the power of knowledge) exists in (the sum total of) all the bodies (i.e. in the cosmic gross body) after having entered into all the limiting adjuncts of the internal organs (i.e. into the cosmic subtle body) like the. reflection of the sun on diverse waters. He is the power of action and knowledge (in the individual). Esah, this One; is verily indrah, Indra, who is called so because He possesses the qualities (mentioned earlier in 1. iii. 13-14); or 'Indra' means the lord of the gods. Esah, this One; is prajapatih, Prajapati (Virat) who is the first embodied Being'. That Prajapati, from whom the presiding deities of the organs, viz Fire and others, were born after the formation of the cavity of the mouth etc., is verily this One. And ete sarve devah, all these gods, viz Fire and others, that there are, are but this One; ca, and; imani panca mahdbhutani, these five great elements; viz etani, these-starting with earth-which are the materials of all the bodies and which constitute the foods and the eaters; besides, ca imani, these also, e.g. snakes etc.; ksudramisrani iva, together with the tiny creatures - the word iva being meaningless; and which are byani, the seeds, causes (of others); ca itarani itarani, as well as those others and others, that are mentionable in pairs (e.g. the moving and the stationary). Which are they? They are being enumerated: andajani, born of eggs-birds and others; jarujani, bom of wombs -men and others; sveda- jani, born of moisture -lice etc.; and udbhijjani, born of earth -e.g. trees etc.; asvdh, horses; gavah, cattle; purusah, human beings; hastinah, elephants; yat kim ca idam, and whatever living creature there may be. Which are they? Whichever is jai gamam, moving on feet ; and whichever is patatri, flying in the sky; and whatever is sthavaram, motionless-all that is but this One. Tat sarvam, all that, without exception; is prajnanetram, made to exist by Con- sciousness-(the phrase being derived thus): Prajna is Consciousness that is the same as Brahman; netra is that by which one is dowered with substance, or that by which one is impelled (to one's natural activity); therefore that which has Consciousness as the giver of its substance or as its impeller is prajnanetram. Prajr3ane pratisthitam, on Consciousness it is established, that is to say, it is supported by Brahman during creation, existence, and dissolution. The sentence, 'prajiianetrah lokah, the universe has Consciousness as its impeller', is to be understood as before; or the meaning is that all the universe has got consciousness as its netra, eye (i.e. the source of revelation). Prajna, Consciousness; is pratistha, the support, of the whole universe.' Therefore prajnanam brahma, Consciousness is Brahman.  That Entity, thus dealt with, when freed from all distinctions created by the limiting adjuncts, is without stain, without taint, without action, quiescent, one without a second, to be known as 'Not this, not this' (Br. 111. ix. 26), by the elimination of all attributes, and (It is) beyond all words and thoughts. That very Entity, which is the omniscient God-because of the association with the limiting adjunct of very pure intelligence - and is the ordainer of the common seed of all the unmanifested universe, assumes the name of antarydmi (the Inner Controller) by virtue of being the Guide. That Entity Itself assumes the name of Hiranyagarbha, who identifies Himself with (cosmic) intelligence which is the seed of the manifested world. That Entity Itself gets the name of Virat, Prajapati, who has as His limiting adjunct the (gross, cosmic) body born first within the cosmic egg; and It comes to be known as the deities, Fire, etc., by assuming their (respective) limiting adjuncts (viz speech etc.) born from that egg. Similarly, Brahman gets the respective names and forms as conditioned by the divergent bodies, ranging from that of Brahma to that of a clump of grass. It is the same Entity that has become diversified according to the variety of the limiting adjuncts and is known in every way and is thought of multifariously by all creatures as well as the logicians. And there are the Smrti texts, Some call this very Entity Fire, some call It Manu, and some Prajapati. Some call It Indra, while others call It Prana and still others, the eternal Brahman', etc. (M. XII. 123).",
    Mantra: "3",
  },
  {
    id: 33,
    Chapter: "3",
    Khand: "1",
    Shloka:
      "स एतेन प्रज्ञेनात्मनास्माल्लोकादुत्क्रम्यामुष्मिन्स्वर्गे लोके सर्वान् कामानाप्त्वामृत: समभवत्समभवत्॥ ४ ॥",
    HindiTranslation:
      "वह (वामदेव) इस चैतन्यस्वरूपसे ही इस लोकसे उत्क्रमण कर इन्द्रियातीत स्वर्गलोकमें सम्पूर्ण कामनाओंको प्राप्तकर अमर हो गया, [अमर] हो गया॥ ४ ॥",
    EnglishTranslation:
      "Through this Self that is Consciousness, he ascended higher up from this world, and getting all desires fulfilled in that heavenly world, he became immortal, he became immortal.",
    HindiCommentry:
      "इस प्रकार पूर्वोक्त ब्रह्मको जाननेवाला वह वामदेव अथवा कोर्इ अन्य पुरुष चेतनात्मस्वरूपसे, जिस चेतनात्मस्वरूपसे पूर्ववर्ती विद्वान् अमरभावको प्राप्त हुए थे उसी प्रकार यह विद्वान् भी इस चेतनात्मस्वरूपसे ही इस लोकसे उत्क्रमण कर—इत्यादि वाक्यकी पहले (१। २। ६में) ही व्याख्या की जा चुकी है। अर्थात् इस लोकसे उत्क्रमण कर इन्द्रियातीत स्वर्गलोकमें सम्पूर्ण कामनाएँ पाकर अमर हो गया, [अमर] हो गया—इत्यलम्॥ ४ ॥",
    EnglishCommentry:
      "Sah, he, Vamadeva, or somebody else, knew thus the Brahman as described, through the Self that is Conscious ness-through that very conscious Self by which the seers of old became immortal. Similarly, this enlightened one, too, etena prajnena atmana, through (i.e. in identification with) this (very) Self that is Consciousness; asmat lokat utkramya, ascending higher up from this world-the portion starting from here was explained before (II. i. 6). Ascending higher up from this world and sarvdn kaman aptva, attaining all the desires; amusmin svarge loke, in that heavenly world; (he) samabhavat, became; amrtah, immortal; samabhavat, (he) became (immortal). Om.",
    Mantra: "4",
  },
];
function AitareyaUpanishad() {
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
                      Part {currentMantra?.Chapter ?? ""}
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
                      Khand {currentMantra?.Khand ?? ""}
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
                      Mantra {currentMantra?.Mantra ?? ""}
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
                  <h2 className="text-2xl font-bold">Aitareya Upanishad</h2>
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
                        <span>Part {currentMantra?.Chapter ?? ""}</span>
                        <span> &nbsp; &gt; &nbsp; </span>
                        <span style={{ pointerEvents: "none" }}>
                          Valli {currentMantra?.Khand ?? ""}
                        </span>
                        <span> &nbsp; &gt; &nbsp; </span>
                        <span>Mantra {currentMantra?.Mantra ?? ""}</span>
                      </div>
                      <div>
                        {(currentMantra?.Shloka ?? "")
                          .split("\n") // Split the text at the literal '\n'
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
                              ? currentMantra?.HindiTranslation?.split(
                                  "\n"
                                ).map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                              : currentMantra?.EnglishTranslation}
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
                              ? currentMantra?.HindiCommentry.split("\n").map(
                                  (line, index) => (
                                    <React.Fragment key={index}>
                                      {line}
                                      <br />
                                    </React.Fragment>
                                  )
                                )
                              : currentMantra?.EnglishCommentry}
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
    </div>
  );
}

export default AitareyaUpanishad;
