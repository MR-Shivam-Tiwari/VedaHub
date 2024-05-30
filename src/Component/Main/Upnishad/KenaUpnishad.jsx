import React, { useState } from "react";

const Vedas = [
  {
    id: 1,
    Part: "Khand 1",
    mantraNumber: "1",
    shlok: {
      line1:
        "केनेषितं पतति प्रेषितं मनः। केन प्राणः प्रथमः प्रैति युक्तः।केनेषितां वाचमिमां वदन्ति। चक्षुः श्रोत्रं क उ देवो युनक्ति ॥ ||१||",
    },
    translationHindi:
      "यह मन किसके द्वारा इच्छित और प्रेरित होकर अपने विषयोंमें गिरता है? किससे प्रयुक्त होकर प्रथम (प्रधान) प्राण चलता है? प्राणी किसके द्वारा इच्छा की हुर्इ यह वाणी बोलते हैं? और कौन देव चक्षु तथा श्रोत्रको प्रेरित करता है?॥ १ ॥",
    translationEnglish:
      "Willed by whom does the directed mind go towards its object? Beingdirected by whom does the vital force that precedes all, proceed (towards itsduty) ? By whom is this speech willed that people utter? Who is theeffulgent being who directs the eyes and the ears?",
    commentaryHindi: {
      vakya:
        "[मन आदि अचेतन पदार्थोंकी] प्रवृत्तिरूप लिंगसे [उनकी प्रेरणा करनेवाले] किसी विशेष तत्त्वके विषयमें प्रश्न करना ठीक ही है, क्योंकि रथ आदि [अचेतन पदार्थों]-की प्रवृत्ति भी चेतन प्राणियोंसे अधिष्ठित होकर ही देखी है, उनसे अधिष्ठित हुए बिना नहीं देखी। मन आदि अचेतन पदार्थोंकी भी प्रवृत्ति देखी ही जाती है। यही उनके चेतन अधिष्ठाताके अस्तित्वका अनुमापक लिंग है। मन आदि इन्द्रियाँ नियमसे प्रवृत्त हो रही हैं। उनकी प्रवृत्ति बिना किसी चेतन अधिष्ठाताके बन नहीं सकती। इस प्रकार सामान्य चेतनका ज्ञान होनेपर भी उसके विशेष रूपका ज्ञान न होनेके कारण यह विशेष-विषयक प्रश्न उचित ही है। केन इषितम्—किससे इच्छा किया हुआ अर्थात् किसकी इच्छामात्रसे मन अपने विषयोंकी ओर गिरता अर्थात् जाता है? यानी वह किसकी इच्छासे अपने विषयमें नियमानुसार व्यापार करता है? जिससे मनन करते हैं वह विज्ञान-निमित्तक अन्तःकरण मन है। यहाँ ‘किसके द्वारा प्रेषित हुआ-सा’—ऐसा उपमापरक अर्थ लेना चाहिये। ‘इषित’ और ‘प्रेषित’ शब्दोंके मुख्य अर्थ यहाँके लिये सम्भव नहीं हैं, क्योंकि आत्मा मन आदिको विषयोंकी ओर इस प्रकार नहीं भेजता जैसे गुरु शिष्योंको। वह तो सबसे विलक्षण और नित्य-चित्स्वरूप होनेके कारण नित्य-चिकित्साके अधिष्ठाता* [चकोर पक्षी]-के समान उनकी प्रवृत्तिमें केवल निमित्तमात्र है। \n यहाँ प्रकरणवश ‘प्राण’ शब्दसे नासिकामें रहनेवाला वायु समझना चाहिये। चलन-क्रिया प्राण-निमित्तक होनेसे प्राणको प्रधान माना गया है। \n इन्द्रियोंकी स्वतः प्रवृत्ति तो केवल विषयोंका प्रकाशनमात्र ही है। मन आदिमें चलन-क्रिया तो प्राणहीकी है; इसीलिये प्राणकी प्रधानता है। वह प्राण किससे युक्त अर्थात् प्रेरित होकर गमन करता यानी चलता है। वाणीका भाषण भी किस निमित्तसे होता है? प्राणियोंके नेत्र और श्रोत्रोंको प्रेरित करनेवाला कौन देव है? अर्थात् जो चेतन-तत्त्व इन्द्रियोंका अधिष्ठाता है वह किन विशेषणोंसे युक्त है?॥ १ ॥ ",
      pad: "केन इषितम्—किस कर्ताके द्वारा इच्छित अर्थात् अभिप्रेत हुआ मन अपने विषयकी ओर जाता है—यहाँ ‘पतति’ क्रियाके साथ ‘स्वविषयं प्रति’ का सम्बन्ध (अन्वय) है। यहाँ आभीक्ष्ण्य और गत्यर्थक१ ‘इष्’ धातु सम्भव न होनेके कारण यह इच्छार्थक ‘इष्’ धातुका ही [इषितम्] रूप है—ऐसा जाना जाता है। [‘इष्टम्’ के स्थानमें ‘इषितम्’] यह इट्प्रयोग छान्दस (वैदिक)२ है। उस प्रपूर्वक ‘इष्’ धातुका ही प्रेरणा-अर्थमें ‘प्रेषितम्’ रूप हुआ है। यदि यहाँ केवल ‘प्रेषितम्’ इतना ही कहा होता तो प्रेषण करनेवाले और उसके प्रेषण-प्रकारके सम्बन्धमें ऐसी शंका हो सकती थी कि किस प्रेषकविशेषके द्वारा और किस प्रकार प्रेषण किया हुआ? अतः यहाँ ‘इषितम्’ इस विशेषणके रहनेसे ये दोनों शंकाएँ निवृत्त हो जाती हैं, क्योंकि ‘इससे किसीकी इच्छामात्रसे प्रेषित हुआ’ यह विशेष अर्थ हो जाता है। शंका—यदि यही अर्थ अभिमत था तो ‘केनेषितम्’ इतनेहीसे सिद्ध हो सकनेके कारण ‘प्रेषितम्’ ऐसा और नहीं कहना चाहिये था। इसके अतिरिक्त शब्दोंकी अधिकतासे अर्थकी अधिकता होनी उचित है, इसलिये ‘इच्छा’ कर्म अथवा वाणी इनमेंसे किसके द्वारा प्रेषित, इस प्रकार प्रेषकविशेषका ज्ञान प्राप्त करना आवश्यक होगा। \n समाधान—नहीं, प्रश्नकी सामर्थ्यसे यह बात प्रतीत नहीं होती; क्योंकि इससे यह निश्चय होता है कि जो पुरुष देहादि-संघातरूप अनित्य कर्म और कार्यसे विरक्त हो गया है और इनसे पृथक् कूटस्थ नित्य वस्तुको जाननेकी इच्छा करनेवाला है वही यह बात पूछ रहा है। अन्यथा इच्छा, वाक् और कर्मके द्वारा तो इस देहादि-संघातका प्रेरकत्व प्रसिद्ध ही है [अर्थात् इच्छा, वाणी और कर्मके द्वारा यह देहादि-संघात मनको प्रेरित किया करता है—इस बातको तो सभी जानते हैं]। अतः यह प्रश्न निरर्थक ही हो जाता। शंका—किंतु इस प्रकार भी ‘प्रेषित’ शब्दका अर्थ तो प्रदर्शित हुआ ही नहीं। \n समाधान—नहीं, यह प्रश्न किसी संशयालुका है इसीसे ‘प्रेषित’ शब्दका अर्थविशेष उपपन्न हो सकता है [अर्थात् जिसे ऐसा संदेह है कि] यह प्रेरक-भाव सर्वप्रसिद्ध भूत और इन्द्रियोंके संघातरूप देहमें है, अथवा उस संघातसे भिन्न किसी स्वतन्त्र वस्तुमें ही केवल इच्छामात्रसे मन आदिकी प्रेरकता है? इस प्रकार इस अभिप्रायको प्रदर्शित करनेके लिये ही ‘किसके द्वारा इच्छित और प्रेषित किया हुआ मन [अपने विषयकी ओर] जाता है’ ऐसे दो विशेषण ठीक हो सकते हैं। यदि कहो कि यह बात तो प्रसिद्ध ही है कि मन स्वतन्त्र है और वह स्वयं ही अपने विषयोंकी ओर जाता है; फिर उसके विषयमें यह प्रश्न कैसे बन सकता है? तो इसके उत्तरमें हमारा कहना है कि यदि मन प्रवृत्ति-निवृत्तिमें स्वतन्त्र होता तो सभीको अनिष्ट-चिन्तन होना ही नहीं चाहिये था। किंतु मन जान-बूझकर भी अनर्थ-चिन्तन करता है और रोके जानेपर भी अत्यन्त दुःखमय कार्यमें भी प्रवृत्त हो ही जाता है। अतः ‘केनेषितम्’ इत्यादि प्रश्न उचित ही है। किसके द्वारा नियुक्त यानी प्रेरित हुआ प्राण अपने व्यापारमें प्रवृत्त होता है? ‘प्रथम’ यह प्राणका विशेषण हो सकता है, क्योंकि समस्त इन्द्रियोंकी प्रवृत्तियाँ प्राणपूर्वक ही होती हैं। लौकिक पुरुष किसके द्वारा इच्छित यह शब्दरूपा वाणी बोलते हैं? तथा कौन देव—द्योतनवान् (प्रकाशमान) व्यक्ति चक्षु एवं श्रोत्रेन्द्रियको अपने-अपने व्यापारमें नियुक्त—प्रेरित करता है॥ १ ॥ ",
    },
    commentaryEnglish:
      "Kena, by what agent; being isitam, willed, directed; manah, the mind;patati, goes, goes towards its own object -- this is the construction. Sincethe root is cannot be taken here to imply either repetition or going; I it mustbe understood that the present form of the root is in its sense of desiring.The form in which the suffix it is used in the word isitam is a Vedic licence.Presitam is a form of the same root, with pra prefixed to it, in the sense ofdirecting. If the word presitam alone were used (without isitam) therewould arise such an inquiry about the particular kind of director and thedirection as: `By what particular director? And how is the direction?' Butthe attribute isitam being there, both the questions are set at rest, becausethereby is ascertained a special meaning, viz `directed (presitam) throughwhose mere will? \n Objection : If this be the meaning intended, the purpose is served by theexpression willed by alone, and the expression directed need not be used.Moreover, since it is reasonable that an additional word should imply anadditional meaning, it is proper to under stand some special sense as: `Bywhat is it directedby will, act, or speech?' \n Answer: This cannot be so because of the trend of the question. For thereasonable conclusion derived from the trend (of the question) is that theinquiry is made by a man who has become disgusted with the ephemeralworks and their results, such as the assemblage of the body, senses, etc., andseeks to know something other than these, which is unchangeable andeternal. If it were not so, the question would be surely meaningless, sincethe directorship of the group of body etc. (over the mind) through will,word, and act is a familiar fact. \n Objection : Even so, the sense of the word directed is not certainlybrought out. \n Answer: No, since the word directed can reasonably convey a specialsense, viz that it is the question of a man in doubt. Both the adjectivesisitam (willed) and presitam (directed), in the sentence willed by whom thedirected mind goes, are justifiable as implying: `Does the directorshipbelong to the aggregate of body and senses, which is a well-known fact; ordoes the directorship through mere will, over the mind etc., belong to someindependent entity which is different from the aggregate?' \n Objection: Is it not a well-known fact that the mind is free and goesindependently to its own object? How can the question arise with regard tothat matter? \n The answer is this: If the mind were independent in engaging anddisengaging itself, then nobody would have contemplated any evil. And yetthe mind, though conscious of consequences, wills evil; and thoughdissuaded, it does engage in deeds of intensely sorrow ful result. Hence thequestion, kenesitam patati etc., is appropriate. \n Kena, by whom; pranah, the vital force; being yuktah, engaged,directed; praiti, goes, towards its own activity? Prathamah, first, should bean adjective of the vital force, for the activities of all the organs arepreceded by it. Imam vacam, this speech, consisting of words; whichordinary people vadanti, utter; kena isitam, by whom is it willed (duringthat, utterance)? Similarly, kah u devah, which effulgent being; yunakti,engages, directs towards their respective objects; caksuh frotram, the eyesand the ears? \n To the worthy disciple who had asked thus, the teacher said, `Hear whatyou have asked for in the question, `Who is that effulgent being who is thedirector of the mind and other organs towards their own objects, and howdoes he direct?` ",
  },
  {
    id: 2,
    Part: "Khand 1",
    mantraNumber: "2",
    shlok: {
      line1:
        "श्रोत्रस्य श्रोत्रं मनसो मनो यत्। \n  वाचो ह वाचं स उ प्राणस्य प्राणः। \n चक्षुषश्चक्षुरतिमुच्य धीराः। \n प्रेत्यास्माल्लोकादमृता भवन्ति ॥ ||२||",
    },
    translationHindi:
      "जो श्रोत्रका श्रोत्र, मनका मन और वाणीका भी वाणी है वही प्राणका प्राण और चक्षुका चक्षु है [ऐसा जानकर] धीर पुरुष संसारसे मुक्त होकर इस लोकसे जाकर अमर हो जाते हैं॥ २ ॥",
    translationEnglish:
      " Since He is the Ear of the ear, the Mind of the mind, the Speech ofspeech, the Life of life, and the Eye of the eye, therefore the intelligent menafter giving up (self-identification with the senses) and renouncing thisworld, become immortal.",
    commentaryHindi: {
      vakya:
        "‘श्रोत्रस्य श्रोत्रम्’ इत्यादि उत्तर देना निर्विशेष आत्माका निमित्तत्व बतलानेके लिये है। इस ‘श्रोत्रस्य श्रोत्रम्’ इत्यादिरूपसे उत्तर देनेका यही तात्पर्य है कि विक्रिया आदि समस्त विशेषोंसे रहित आत्माका मन आदिकी प्रवृत्तिमें कारणत्व है* यही इससे जाना जाता है, क्योंकि इस श्रुतिके अक्षर भी इसी अर्थमें अनुगत हैं।कैसे? [सो इस प्रकार कि] जिससे प्राणी सुनते हैं उसे ‘श्रोत्र’ कहते हैं। उसका जो शब्दको प्रकाशित करना है वह ‘श्रोत्रत्व’ है। श्रोत्रका जो शब्दके उपलब्धारूपसे प्रकाशकत्व है वह स्वतः नहीं है; क्योंकि वह अचेतन है और आत्मा चेतनरूप है। श्रोत्रका जो उपलब्धारूपसे अवभासकत्व है वह आत्मनिमित्तक होनेसे आत्माको ‘श्रोत्रका श्रोत्र’ ऐसा कहा जाता है, जैसे क्षत्रियजातिका [नियामक कर्म] क्षत्र कहलाता है; अथवा जैसे [उष्ण] जलकी उष्णता अग्निके कारण होती है; इसलिये उस जलानेवाले जलका भी जलानेवाला अग्नि कहा जाता है; और अग्निके संयोगसे जल भी अग्नि कहा जाता है, उसी प्रकार [प्रमाता आत्मामें] जिनके संयोगसे अनित्य उपलब्धृत्व है वे श्रोत्रादि करण कहलाते हैं।जलके दाहकत्वके समान आत्मामें उपलब्धृत्व अनित्य ही है। जैसे अग्निमें नित्य उष्णता रहनेके कारण वह दग्धा कहलाता है उसी प्रकार जिसमें नित्य उपलब्धृत्व रहता है वह नित्य उपलब्धि-स्वरूप होनेके कारण उपलब्धा कहा जाता है। श्रोत्रादि निमित्तोंके होनेपर जो आत्मामें श्रोतृत्वादिकी उपलब्धि होती है वह अनित्य है और केवल आत्मामें वह नित्य है, अतः ‘श्रोत्रस्य श्रोत्रम्’ इत्यादि अक्षरोंके अर्थके अनुगमसे नित्योपलब्धिस्वरूप निर्विशेष आत्माका मन आदिकी प्रवृत्तिमें कारण होना ठीक ही है। इसी प्रकार [जैसा कि ‘श्रोत्रस्य श्रोत्रम्’ के विषयमें कहा गया है] मन, वाक् और प्राणादिके सम्बन्धमें भी समझ लेना चाहिये।यहाँ ‘वाचो ह वाचम्’ तथा ‘प्राणस्य प्राणः’ इस प्रकार [पिछले पदमें] सर्वत्र ही [प्रथमा और द्वितीया] दो विभक्ति समझनी चाहिये, क्यों? क्योंकि आत्माविषयक प्रश्न होनेके कारण उसके स्वरूपका निर्देश किया गया है और निर्देश प्रथमा विभक्तिसे ही किया जाता है; तथा आत्मा ही ज्ञेय है, इसलिये उसमें कर्मत्व रहनेके कारण द्वितीया भी ठीक है। अतः ‘वाचो ह वाचम्’ तथा ‘प्राणस्य प्राणः’ इस कथनके अनुसार सभी जगह दो विभक्ति समझनी चाहिये। [अर्थात् सभी पदोंमें ये दोनों विभक्तियाँ रह सकती हैं।] यह जो श्रोत्रादिकी उपलब्धिका निमित्तभूत तथा ‘श्रोत्रका श्रोत्र’ इत्यादि लक्षणोंवाला नित्योपलब्धिस्वरूप निर्विशेष आत्मतत्त्व है उसे जानकर, अज्ञानके कारण आरोपित बुद्धि आदि लक्षणोंवाले संसारसे छूटकर—उससे मुक्त होकर, धीर—बुद्धिमान् लोग इस लोकसे जाकर अर्थात् इस शरीरसे पृथक् होकर दूसरे शरीरका अनुसन्धान न करनेके कारण अन्य कोर्इ प्रयोजन न रहनेसे अमृत हो जाते हैं। अज्ञानके रहनेतक ही कर्म दूसरे शरीरकी खोज किया करते हैं। आत्मज्ञान हो जानेपर तो सम्पूर्ण कर्मोंके आरम्भक अज्ञानसे विपरीत ज्ञानरूप अग्निद्वारा कर्मोंके दग्ध हो जानेपर फिर प्रारब्ध निःशेष हो जानेके कारण वे अमृत ही हो जाते हैं। [अनादि संसारपरम्परासे ‘मैं शरीर हूँ’ ऐसे अध्यासके कारण] ‘पुनः-पुनः शरीरप्राप्तिरूप परम्पराका विच्छेद न हो’ ऐसा अनुसन्धान करते रहनेके कारण अपने ऊपर आरोपित की हुर्इ अज्ञानरूप मृत्युका वियोग होनेसे पूर्व भी नित्य आत्मस्वरूप होनेके कारण यद्यपि अमृत ही रहते हैं तथापि अमर होते हैं—ऐसा उपचारसे कहा जाता है॥ २ ॥",
      pad: "श्रोत्रस्य श्रोत्रम्—जिससे श्रवण करते हैं वह ‘श्रोत्र’ है अर्थात् शब्दके श्रवणमें साधन यानी शब्दका अभिव्यंजक श्रोत्रेन्द्रिय है। \n उसका भी श्रोत्र वह है जिसके विषयमें तूने पूछा है कि ‘चक्षु और श्रोत्रको कौन देव नियुक्त करता है?’ शंका—प्रश्नके उत्तरमें तो यह बतलाना चाहिये था कि इस प्रकारके गुणोंवाला व्यक्ति श्रोत्रादिको प्रेरित करता है; उसमें यह कहना कि वह श्रोत्रका श्रोत्र है—ठीक उत्तर नहीं है। समाधान—यह कोर्इ दोष नहीं है, क्योंकि उस प्रेरकका और किसी प्रकार कोर्इ विशेष रूप नहीं जाना जा सकता। यदि दराँती आदिका प्रयोग करनेवालेके समान श्रोत्रादि व्यापारसे अतिरिक्त किसी अपने व्यापारसे विशिष्ट कोर्इ श्रोत्रादिका नियोक्ता ज्ञात होता तो यह उत्तर अनुचित होता। किंतु यहाँ खेत काटनेवालेके समान कोर्इ श्रोत्रादिका स्वव्यापारविशिष्ट प्रयोक्ता ज्ञात नहीं है। अवयव-सहयोगसे उत्पन्न हुए श्रोत्रादिका जो चिदाभासकी फलव्याप्तिका लिंगरूप आलोचना, संकल्प एवं निश्चय आदिरूप व्यापार है उसीसे यह जाना जाता है कि गृह आदिके समान जिसके प्रयोजनसे श्रोत्रादि कारण-कलाप प्रवृत्त हो रहा है वह श्रोत्रादिसे असंहत (पृथक्) कोर्इ तत्त्व अवश्य है। संहत पदार्थ परार्थ (दूसरेके साधनरूप) हुआ करते हैं; इसीसे कोर्इ श्रोत्रादिका प्रयोक्ता अवश्य है—यह जाना जाता है। अतः यह ‘श्रोत्रस्य श्रोत्रम्’ इत्यादि उत्तर ठीक ही है। शंका—किन्तु इस ‘श्रोत्रस्य श्रोत्रम्’ इत्यादि पदका यहाँ क्या अर्थ अभिप्रेत है? क्योंकि जिस तरह एक प्रकाशको दूसरे प्रकाशका प्रयोजन नहीं होता उसी तरह एक श्रोत्रको दूसरे श्रोत्रसे तो कोर्इ प्रयोजन है ही नहीं। समाधान—यह भी कोर्इ दोष नहीं है। यहाँ इस पदका अर्थ इस प्रकार है—श्रोत्र अपने विषयको अभिव्यक्त करनेमें समर्थ है—यह देखा ही जाता है। किन्तु श्रोत्रका वह अपने विषयको अभिव्यक्त करनेका सामर्थ्य नित्य असंहत, सर्वान्तर चेतन आत्मज्योतिके रहनेपर ही रह सकता है, न रहनेपर नहीं रह सकता। अतः उसे ‘श्रोत्रस्य श्रोत्रम्’ इत्यादि कहना उचित ही है। ‘यह अपने ही प्रकाशसे प्रकाशित है’ ‘उसके प्रकाशसे ही यह सब प्रकाशित होता है’ ‘जिस तेजसे प्रदीप्त हुआ सूर्य तपता है’ इत्यादि श्रुतियाँ भी इसी अर्थकी द्योतक हैं। तथा गीतामें भी कहा है—‘जो तेज सूर्यमें स्थित होकर सम्पूर्ण जगत्को प्रकाशित करता है।’ ‘हे भारत! इसी प्रकार सम्पूर्ण क्षेत्रको क्षेत्री प्रकाशित करता है।’ कठोपनिषद्में भी कहा है—‘वह नित्योंका नित्य और चेतनोंका चेतन है ’ इत्यादि। श्रोत्रादि इन्द्रियवर्ग ही सबका आत्मभूत चेतन है—यह बात [लोकमें] प्रसिद्ध है। उस भ्रान्तिका इस पदसे निराकरण किया जाता है। अतः श्रोत्रादिका भी श्रोत्रादि अर्थात् उनकी सामर्थ्यका निमित्तभूत ऐसा कोर्इ पदार्थ है जो आत्मवेत्ताओंकी बुद्धिका विषय सबसे अन्तरतम, कूटस्थ, अजन्मा, अजर, अमर और अभयरूप है—इस प्रकार यह उत्तर और शब्दार्थ ठीक ही है। इसी प्रकार वह मनका—अन्तः-करणका मन है, क्योंकि चिज्ज्योतिके प्रकाशके बिना अन्तःकरण अपने विषय संकल्प और अध्यवसाय (निश्चय) आदिमें समर्थ नहीं हो सकता। अतः वह मनका भी मन है; यहाँ बुद्धि और मनको एक मानकर मनका निर्देश किया गया है। यद्वाचो ह वाचम्—इस वाक्यके ‘यत्’ शब्दका ‘यस्मात्’ अर्थ (हेत्वर्थ)-में ‘क्योंकि वह श्रोत्रका श्रोत्र है, क्योंकि वह मनका मन है’ इस प्रकार श्रोत्रादि सभी पदोंसे सम्बन्ध है। ‘वाचो ह वाचम्’ इस पदसमूहमें ‘वाचम्’ पदकी द्वितीया विभक्ति प्रथमा विभक्तिके रूपमें परिणत कर ली जाती है, जैसा कि ‘प्राणस्य प्राणः’ में देखा जाता है। यदि कहो कि ‘वाचो ह वाचम्’ इस प्रयोगके अनुरोधसे ‘प्राणस्य प्राणम्’ इस प्रकार द्वितीया ही क्यों नहीं कर ली जाती? तो ऐसा कहना उचित नहीं क्योंकि बहुतोंका अनुरोध मानना ही युक्तिसंगत है। अतः ‘स उ प्राणस्य प्राणः’ इस पदसमूहके [स और प्राणः] दो शब्दोंके अनुरोधसे ‘वाचम्’ इस शब्दको ही ‘वाक्’ इतना कहना चाहिये। ऐसा करनेसे ही बहुतोंका अनुरोध युक्त (स्वीकार) किया समझा जायगा। \n इसके सिवा, पूछी हुर्इ वस्तुका निर्देश प्रथमा विभक्तिसे ही करना उचित है। [अभिप्राय यह कि] जिसके विषयमें तूने पूछा है वह प्राणका यानी प्राण नामक वृत्ति-विशेषका प्राण है। उसके कारण ही प्राणका प्राणनसामर्थ्य है, क्योंकि आत्मासे अनधिष्ठित प्राणका प्राणन सम्भव नहीं है, जैसा कि ‘यदि यह आनन्दस्वरूप आकाश न होता तो कौन जीवित रहता और कौन श्वासोच्छ्वास करता’ ‘यह प्राणको ऊपर ले जाता है तथा अपानको नीचेकी ओर छोड़ता है’ इत्यादि श्रुतियोंसे सिद्ध होता है। यहाँ (इस उपनिषद्में) भी यह कहेंगे ही कि जिसके द्वारा प्राण प्राणन करता है उसीको तू ब्रह्म जान। शंका—परन्तु यहाँ श्रोत्रादि इन्द्रियोंके प्रसंगमें घ्राणको ही ग्रहण करना युक्तियुक्त है, प्राणको नहीं। समाधान—यह ठीक है। किन्तु श्रुति, प्राणको ग्रहण करनेसे ही घ्राणका भी ग्रहण किया मानती है। इस प्रकरणको यही अर्थ बतलाना अभीष्ट है कि जिसके लिये सम्पूर्ण इन्द्रियसमूहकी प्रवृत्ति है वही ब्रह्म है। तथा [वह ब्रह्म] चक्षुका चक्षु है। रूपको प्रकाशित करनेवाले चक्षु-इन्द्रियमें जो रूपको ग्रहण करनेकी सामर्थ्य है वह आत्मचैतन्यसे अधिष्ठित होनेके कारण ही है। इसलिये वह चक्षुका चक्षु है। प्रश्न—कर्ताको अपने पूछे हुए पदार्थको जाननेकी इच्छा हुआ ही करती है, इसलिये, तथा ‘अमृता भवन्ति’ (अमर हो जाते हैं) ऐसी फलश्रुति होनेके कारण भी उपर्युक्त श्रोत्रादिके श्रोत्रादिरूप ब्रह्मको जानकर—इस प्रकार यहाँ ‘ज्ञात्वा’ क्रियाका अध्याहार किया जाता है, क्योंकि अमरत्वकी प्राप्ति ज्ञानसे ही होती है, जैसा कि ‘[ब्रह्मको] जानकर मुक्त हो जाता है’ इस उक्तिकी सामर्थ्यसे सिद्ध होता है। जीव श्रोत्रादि करण-कलापको त्यागकर—श्रोत्रादिमें ही आत्मभाव करके उनकी उपाधिसे युक्त होकर जन्मता, मरता और संसारको प्राप्त होता है। अतः श्रोत्रादिका श्रोत्रादि रूप ब्रह्म ही आत्मा है ऐसा जानकर और अतिमोचन करके अर्थात् श्रोत्रादिमें आत्मभावको त्यागकर धीर पुरुष ‘प्रेत्य’ अर्थात् पुत्र, मित्र, कलत्र और बन्धुओंमें अहंता-ममताके व्यवहाररूप इस लोकसे विलग होकर यानी सम्पूर्ण एषणाओंसे मुक्त होकर अमृत—अमरणधर्मा हो जाते हैं। जो लोग श्रोत्रादिमें आत्मभावका त्याग करते हैं वेधीर यानी बुद्धिमान् होते हैं। क्योंकि विशिष्ट बुद्धिमत्त्वके बिना श्रोत्रादिमें आत्म-भावका त्याग नहीं किया जा सकता। ‘कर्मसे, प्रजासे अथवा धनसे नहीं, किन्हीं-किन्हींने केवल त्यागसे ही अमरत्व लाभ किया है’ ‘स्वयम्भूने इन्द्रियोंको बहिर्मुख करके हिंसित कर दिया है, इसलिये जीव बाह्य वस्तुओंको ही देखता है, अपने अन्तरात्माको नहीं देखता। कोर्इ बुद्धिमान् पुरुष अमरत्वकी इच्छासे इन्द्रियोंको रोककर अपने प्रत्यगात्माको देखता है’ ‘जिस समय इसके हृदयकी कामनाएँ छूट जाती हैं......इस अवस्थामें वह ब्रह्मको प्राप्त कर लेता है’ इत्यादि श्रुतियोंसे भी यही सिद्ध होता है।अथवा एषणात्याग तो ‘अतिमुच्य’ इस पदसे ही सिद्ध हो जाता है, अतः ‘अस्माल्लोकात्प्रेत्य’ का यह भाव समझना चाहिये कि इस शरीरसे अलग होकर यानी मरकर [अमर हो जाते हैं]॥ २ ॥",
    },
    commentaryEnglish:
      "Srotrasya srotram, the Ear of the ear. The frotram is that by which onehears, the instrument for the hearing of sound, the organ of hearing whichreveals words. He about whom you put the question, `Who is the effulgentbeing who directs the eyes and the ears?' -is the Ear of the ear. \n Objection: Is it not incongruous to answer, `He is the Ear of the ear',when the reply should have been, `So-and-so, with such and such attributes,directs the ears etc.'? \n Answer: This is no fault, because His distinction cannot be ascertainedotherwise. If the director of the ears etc. could be known as possessed ofHis own activity, independently of the activities of the ears etc. just as it isin the case of the wielder of sickle etc., then this answer would beincongruous. But as a matter of fact, no director of ears etc., possessed ofhis own activity, is apprehended here like a mower possessed of a sickle etc.But He can be known. (as existing unmixed with the ear etc.) from thelogical necessity that such activities as deliberation, volition, determination,of those very composite things, viz the ear etc., must be meant for someone's benefit. Just as in the case of a house, so also (in this case) there doesexist some one, standing outside the conglq- meration of ears etc., by whosenecessity is impelled the group of ears etc. Thus from the fact thatcomposite things exist for the need of some one else, a director of the earsetc. can be known (i.e., inferred).' Hence the reply, `He is the Ear of the ear',etc. is quite appropriate. \n Objection: What, again, can there be in the significance here of theexpression, `The Far of the ear' etc.? For just as a light has no need foranother light, so in this context the ear can have no need for another ear. \n Answer: There is no such fault. The significance here of the expression isthis: The ear, to wit, is seen to be able to reveal its own object. This abilityof the ear to reveal its own object is possible only when the eternal noncomposite, all-pervading light of the Self is there, but not otherwise. Hencethe expression, `Ear of the ear' etc. is justifiable. To the same effect there areother Vedic texts: `It is through the light of the Self that he sits' (Br. IV. iii.6), `Through His light all this shines' (Ka. II. ii. 15; Sv. VI. 14; Mu. II. ii.10), `Kindled by which light the sun shines' (Tai. B. III. xii. 9.7), etc. And inthe Gita, `(Know that light to be mine), which is in the sun and whichillumines the whole universe' (XV. 12), and `(As the one sun illumines thewhole universe), so does He who reside in the body, 0 descendant ofBharata, illumine the whole body' (XIII. 33). So also in the Katha Upanisad,`the eternal among the ephemeral, the the consciousness among all that isconscious' (II. ii. 13). It is a commonly accepted belief that the ears etc.constitute the Self of all, and that these are conscious. This is being refutedhere. There does exist something which is known to the intellect of the men of realization, which dwells in the inmost recesses of all, which ischangeless, undecaying, immortal, fearless, and unborn, and which is theEar etc., of even the ear etc., i.e. the source of their capacity to act. Thus theanswer and significance of the words can certainly be justified. \n Similarly, manasah, of the mind, of the internal organ; (He is) themanah, Mind; because the internal organ is not able to perform its ownfunctionsthinking, determination, etc.-unless it is illumined by the light ofconsciousness. Therefore He is the Mind of the mind, too. Here the mindand the intellect are jointly mentioned by the word manah (mind). Yad rataha scam : the wordyat, used in the sense of because, is connected with allsuch words as srotra (ear) in this way: because He is the Ear of the ear,because He is the Mind of the mind, and so on. The objective case in Tacoha scam is to be changed into the nominative in consonance with theexpression prdnasya pranah (the Life of life) \n Objection: In conformity with vdco ha z,acam, why should not theconversion be into the objective case thus: pranasya pranam? \n Answer: No, for it is reasonable to conform to the majority. So inconsonance with the two words, (sah and pranah), in sah u pranasya pranah(where they are in the nominative case), the implication of the word scam iszak, for thus is the reasonable conformity with the majority maintained.Moreover, a thing asked about should properly be denoted in the first(nominative) case. He, of whom you ask, and who is the Life of prana - ofthat particular function called life, by Him, indeed, is ensured the capacityof the vital force to discharge its functions of sustaining life, and this isbecause there can be no sustaining of life by anything that is not presidedover by the Self, in accordance with the Vedic texts: `Who, indeed, willinhale, and who will exhale, if this Bliss (Brahman) be not there in thesupreme Space (within the heart) ?' (Tai. II. vii. 1), `Who pushes the pramupward and impels the apana inward' (Ka. II. ii. 3), etc. Here, too, it will besaid, `That which man does not smell with prana (the organ of smell), butthat by which pram is impelled, know that to be Brahman' (1.9). \n Objection: Is it not proper to understand prana as the sense of smelling(and not life) I in a context which deals with the senses-ears etc.? \n Answer: This is true. But the text considers that by the mention of pram(meaning the vital force) the sense of smell is referred to ipso facto. Themeaning intended in the context is this: That for whose purpose occurs theactivity of all the (motor and sensory) organs is Brahman. \n So also He is the caksusah caksuh, the Eye of the eye; the capacity toperceive colour that the eye, the organ of sight, possesses is merely byvirtue of its being presided over by the consciousness of the Self. Hence Heis the Eye of the eye. Since a questioner's desire is to know the thing he asksfor, the expression, `having known' has to be supplied thus: `Having knownBrahman, as the Ear etc. of the ear etc., as indicated before.' This (addition)is also necessary, because the result is stated thus, `They become immortal'(II. 5), and because immortality is attained through realization. From thefact that a man becomes free after getting realization, it follows (that hebecomes immortal) by giving up, (through the strength of knowledge), thegroup of organs beginning with the ear; that is to say, since by identifyingthe Self with the ear etc. a man becomes conditioned by these and takesbirth, dies, and transmigrates, therefore having realized, as one's Self, theBrahman that is defined as the `Ear of the ear' etc., and atimucya, giving upselfidentification with the ear etc. - (he becomes immortal). Those who giveup self-identification with the ear etc. are the dhi `rah, intelligent, becausethe selfidentification with the ear etc. cannot be given up unless one isendowed with uncommon intellect. Pretya, desisting; asmat lukat, from thisworld of empirical dealings involving ideas of `I and mine' with regard tosons, friends, wives, and relatives; i.e. having renounced all desires; (they)bhavanti, become; amrtah, immortal, immune from death. This is inaccordance with the Vedic texts: `Not by work, not by progeny, not bywealth, but by renunciation some (rare ones) attained immortality' (Kai.1.2), `The self-existent Lord destroyed the outgoing senses; hence oneperceives the external things and not the Self within. A rare, discriminatingman, longing for immortality, turns his eyes away and then sees theindwelling Self' (Ka. II. i. 1), `When all desires that cling to one's heart falloff, . . . then one attains Brahman here' (Ka. II. iii. 14), etc. Or, renunciation of desires being implied in the expression atimucya (giving up) itself, asmatlukat pretya means separating from this body, dying.",
  },
  {
    id: 3,
    Part: "Khand 1",
    mantraNumber: "3",
    shlok: {
      line1:
        "न तत्र चक्षुर्गच्छति न वाग्गच्छति नो मनो \n  न विद्मो न विजानीमो यथैतदनुशिष्यात्। \n  अन्यदेव तद्विदितादथो अविदितादधि। \n  इति शुश्रुम पूर्वेषां ये नस्तद्व्याचचक्षिरे ॥ ||३|| ",
    },
    translationHindi:
      "वहाँ (उस ब्रह्मतक) नेत्रेन्द्रिय नहीं जाती, वाणी नहीं जाती, मन नहीं जाता। अतः जिस प्रकार शिष्यको इस ब्रह्मका उपदेश करना चाहिये, वह हम नहीं जानते—वह हमारी समझमें नहीं आता। वह विदितसे अन्य ही है तथा अविदितसे भी परे है—ऐसा हमने पूर्व-पुरुषोंसे सुना है, जिन्होंने हमारे प्रति उसका व्याख्यान किया था॥ ३ ॥",
    translationEnglish:
      " The eye does not go there, nor speech, nor mind. We do not know       (Brahman to be such and such) ; hence we are not aware of any process of    instructing about It. \n That (Brahman) is surely different from the known; and again, It is   above the unknown'-such was (the utterance) we heard of the ancient  (teachers) who explained It to us",
    commentaryHindi: {
      vakya:
        "यद्यपि आचार्यने तत्त्वका निरूपण कर दिया तो भी न समझनेके कारण शिष्यके पुनः प्रश्न करनेमें ‘वहाँ नेत्रेन्द्रिय नहीं जाती’ इत्यादि कारण है। अर्थात् ‘श्रोत्रस्य श्रोत्रम्’ इत्यादि श्रुतिसे आत्मतत्त्वका निरूपण कर दिये जानेपर भी आत्मतत्त्व अत्यन्त सूक्ष्म होनेके कारण समझमें न आनेसे शिष्यको जो पुनः पूछनेकी इच्छा हुर्इ उसका कारण ‘न तत्र चक्षुर्गच्छति’ इत्यादि श्रुतिसे बतलाया गया है।श्रोत्रादिके आत्मस्वरूप उस आत्मतत्त्वके विषयमें चक्षु आदि इन्द्रियाँ ज्ञान उत्पन्न नहीं कर सकतीं, क्योंकि यहाँ वाक् और चक्षु सभी इन्द्रियोंका उपलक्षण करनेके लिये हैं।[इसपर सन्देह होता है—] तो फिर सुखादिके समान उसका अन्तःकरणसे ग्रहण हो सकता होगा? [इसपर कहते हैं—] मन भी उसतक नहीं पहुँचता। वह सुखादिके समान मनका भी विषय नहीं है, क्योंकि वह इन्द्रियोंका अविषय है।यह ब्रह्म मन आदि इन्द्रियसमूहका जिस प्रकार अनुशासन करता है अर्थात् जिस प्रकार उनकी प्रवृत्तिका कारण होता है—इन्द्रियोंका अविषय होनेके कारण—इस सम्बन्धमें अपने अन्तः-करणद्वारा हम कुछ नहीं जानते अर्थात् कुछ नहीं समझते। अथवा शिष्यके यह कहनेपर कि ‘श्रोत्रादिके श्रोत्रादिरूप ब्रह्मको विशेषरूपसे दिखलाओ’ आचार्य कहते हैं कि ‘उसे दिखाया नहीं जा सकता।’ क्यों? ‘क्योंकि उसतक नेत्र नहीं पहुँच सकते’ इत्यादि प्रकारसे सबका आशय पूर्ववत् समझना चाहिये। यहाँ ‘यथैतदनुशिष्यात्’ इस वाक्यका विशेष तात्पर्य है; अर्थात् जिस किसी अन्य विधिसे कोर्इ अन्य गुरु अपने शिष्योंको इसका अनुशासन—प्रतिपादन कर सकता है [वह हम नहीं जानते]। परन्तु मुझे तो किसी भी तरह ब्रह्मका बोध करा ही दीजिये—शिष्यके ऐसा कहनेपर आचार्य कहते हैं—‘वह ब्रह्म जाने हुएसे अन्य है तथा बिना जानेसे भी परे है’—जाने और न जाने हुएसे भिन्न होना यही उपदेशकी परम्परा है। इसके सिवा जो कोर्इ भी उसको जाननेवाला है वह स्वयं वही है, क्योंकि ब्रह्म सर्वात्मक है। अतः सबके आत्मारूप उस ज्ञाताके सिवा अन्य ज्ञाताका अभाव होनेके कारण वह, जितना कुछ जाना जाता है उससे भिन्नहै; जैसा कि मन्त्रवर्ण भी कहता है—‘वह सम्पूर्ण ज्ञेयको जानता है तथा उसका ज्ञाता और कोर्इ नहीं है’ तथा वाजसनेय श्रुतिमें भी कहा है— ‘अरे! उस विज्ञाताको किससे जाने?’ इसके सिवा व्यक्तको ही विदित कहा गया है, उससे भिन्न [यानी अव्यक्त] है यही इस [अन्यदेव विदितात्]- का तात्पर्य है जो विदित अर्थात् व्यक्त होता है वह दूसरेका विषय होनेके कारण अल्प और सविरोध होता है ऐसा होनेसे अनित्य होता है, अतः अनेक होनेके कारण अशुद्ध भी होता है; इसलिये सिद्ध हुआ कि ब्रह्म उससे भिन्न प्रकारका ही है। पूर्व०—तो फिर ब्रह्म अज्ञात हुआ? सिद्धान्ती—नहीं, क्योंकि उसे विज्ञान (ज्ञात होने)-की अपेक्षा नहीं है। जो वस्तु अज्ञात होती है उसके विज्ञानकी अपेक्षा हुआ करती है। अज्ञात वस्तुको जाननेके लिये ही सम्पूर्ण लोकोंकी प्रवृत्ति है; किन्तु ब्रह्मको अपने विज्ञानकी अपेक्षा नहीं है; क्यों? क्योंकि वह विज्ञानस्वरूप ही है। जिसका जो स्वरूप होता है वह उसीकी दूसरेसे अपेक्षा नहीं रखता और अपनेसे तो अपेक्षा हुआ ही नहीं करती, क्योंकि अपना आप तो सिद्ध (प्राप्त) होनेके कारण अपेक्षासे रहित ही है। दीपक अपने स्वरूपकी अभिव्यक्तिके लिये अपनेसे अथवा किसी अन्यसे प्रकाशान्तरकी अपेक्षा नहीं रखता। इस प्रकार जो अपेक्षा नहीं रखता वह स्वतःसिद्ध ही है। दीपक प्रकाशस्वरूप ही है; अतः अपने स्वरूपकी अभिव्यक्तिके लिये यदि वह प्रकाशान्तरकी अपेक्षा करे तो व्यर्थ ही होगा, क्योंकि प्रकाशमें कोर्इ विशेषता नहीं हुआ करती। एक दीपकके स्वरूपकी अभिव्यक्तिमें किसी अन्य दीपकका प्रकाश सार्थक नहीं होता। इसी प्रकार आत्मासे भिन्न ऐसा कोर्इ विज्ञान नहीं है जो उसके स्वरूपका ज्ञान करानेके लिये अपेक्षित हो। यदि कहो कि इससे विरोध प्रतीत होता है तो ऐसा कहना ठीक नहीं, क्योंकि [आत्मा] इससे भिन्न है। पूर्व०—तुमने जो कहा कि आत्मा विज्ञानस्वरूप है, इसलिये उसके स्वरूपको जाननेमें किसी अन्य विज्ञानकी अपेक्षा नहीं है—सो ठीक नहीं, क्योंकि आत्मामें भी विपरीत ज्ञान और सम्यक् ज्ञान होता देखा ही जाता है; जैसा कि ‘मैं आत्माको नहीं जानता’ इत्यादि कथनसे तथा ‘तू वह (ब्रह्म) है’ ‘आत्माको ही जाना’ ‘उस इस आत्माको निश्चयपूर्वक जानकर’ आदि श्रुतियोंसे सिद्ध होता है। श्रुतियोंमें आत्माके ज्ञानके लिये सर्वत्र ही विज्ञानान्तरकी अपेक्षा देखी जाती है। इसलिये [उपर्युक्त कथनका] प्रत्यक्ष ही श्रुतिसे विरोध है। सिद्धान्ती—ऐसा कहना ठीक नहीं। क्यों? क्योंकि बुद्धि आदि कार्य और करणके संघातमें जो अभिमान है उसकी परम्पराका विच्छेद न होना ही जिसका लक्षण है, नित्य चित्स्वरूप आत्मा ही जिसका आन्तरिक सार है और जिसमें अनित्य विज्ञानका अवभास हुआ करता है वह अविवेकात्मक, चिदाभास-प्रधान तथा चक्षु आदि करणोंवाला आत्मा (जीवात्मा) [शुद्ध चेतनसे] भिन्न ही है। बौद्ध प्रतीतियोंका आविर्भाव-तिरोभाव उसका धर्म है; अतः अपने उस धर्मके कारण वह उससे पृथक् दिखलायी भी देता है। [किन्तु वह शुद्ध चेतन तो] ‘आत्मा सर्वान्तर है’ ऐसा बतलानेवाली श्रुतिके अनुसार अन्तःकरण यानी मनका भी मन है। उस अन्तर्गत, नित्यविज्ञानस्वरूप, आकाशके समान अविचल और अन्तर्गर्भभूत चिदात्मासे बाह्य और विलक्षण अनित्य विज्ञानवान् विज्ञानात्मा ही, आविर्भाव-तिरोभाव धर्मवाले विज्ञानाभासरूप अनित्य प्रत्ययोंके कारण लौकिक पुरुषोंद्वारा आत्मा सुखी-दुःखी है—ऐसा माना जाता है, जैसे ज्वालाओंके कारण अग्नि। अतः वह नित्यविज्ञानस्वरूप आत्मासे भिन्न है। उसीमें विज्ञानकी अपेक्षा तथा विपरीत ज्ञानत्वकी सम्भावना है—नित्यविज्ञानस्वरूप चिदात्मामें नहीं। पूर्व०—[ऐसा माननेसे तो] ‘तत्त्वमसि’ (वह ब्रह्म तू है) यह उपदेश भी नहीं बन सकता और न ‘अपने आत्माको ही जाना [कि मैं ब्रह्म हूँ]’ इत्यादि वाक्य ही सार्थक हो सकते हैं—क्योंकि ब्रह्म तो नित्यबोधस्वरूप है। सूर्य दूसरेसे प्रकाशित कभी नहीं हो सकता। इसलिये आत्माके विषयमें ज्ञानका उपदेश करना व्यर्थ ही होगा। सिद्धान्ती—ऐसी बात नहीं है, क्योंकि वह उपदेश लोगोंद्वारा किये हुए अध्यारोपकी निवृत्तिके लिये है। लोगोंने आत्मतत्त्वके अज्ञानवश उस नित्यविज्ञानस्वरूप सर्वात्मापर बुद्धि आदि अनित्य धर्मोंका आरोप किया हुआ है। उसकी निवृत्तिके लिये ही उस ज्ञानस्वरूपके ज्ञानका उपदेश किया जाता है। तथा उस बोधस्वरूपमें बोध और अबोध समीचीन भी हैं, क्योंकि जैसे अग्निके कारण जलमें उष्णता रहती है तथा सूर्यके कारण दिन और रात हुआ करते हैं, वैसे ही उनका कारण भी अन्य (आरोपित धर्म) ही है।उष्णता और प्रकाश—ये अग्नि और सूर्यके तो नित्यधर्म हैं, किन्तु लोकमें अन्यत्र अपने भाव और अभावके कारण वे अनित्यवत् उपचरित होते हैं; जैसे— ‘अग्नि जला देगा’ ‘सूर्य प्रकाशित करेगा’ इत्यादि वाक्योंमें; वैसे ही [आत्माके विषयमें समझना चाहिये] इस प्रकार लोकका जो सुख-दुःख एवं बन्ध-मोक्षरूप अध्यारोप है उसकी अपेक्षासे ही ‘तत्त्वमसि’ ‘आत्मानमेवावेत्’ इत्यादि श्रुतियाँ आत्मज्ञानके उपदेशसे केवल अध्यारोपकी निवृत्तिके लिये ही हैं। जिस प्रकार ‘यह सूर्य अपने-आपको प्रकाशित करता है’ [इस वाक्यसे प्रकाशस्वरूप सूर्यमें प्रकाश-कर्तृत्वका उल्लेख किया जाता है] उसी प्रकार नित्यबोधस्वरूप आत्मामें भी ज्ञान और अज्ञानका कर्तृत्व माना गया है।इसलिये वह अविदित (अज्ञात)-से भी अन्य है। यहाँ ‘अधि’ शब्द ‘अन्य’ अर्थमें है अथवा जो जिससे अधि (ऊपर) होता है वह उससे अन्य ही हुआ करता है, क्योंकि उस शब्दकी शक्तिसे यही बोध होता है; जिस प्रकार सेवक आदिसे ऊपर राजा।’* अव्यक्त ही अविदित है, उससे यह आत्मा पृथक् है—यही इसका तात्पर्य है। विदित और अविदित यानी व्यक्त और अव्यक्त ही क्रमशः कार्य तथा कारणभावसे माने गये हैं उनसे भिन्न वह ब्रह्म है जो सम्पूर्ण विशेषणोंसे रहित विज्ञानस्वरूप है—यह इस समस्त वाक्यसमुदायका तात्पर्य है। अतः आत्मस्वरूप होनेके कारण वह त्याज्य या ग्राह्य भी नहीं है। अन्य वस्तु ही किसी अन्यकी त्याज्य या ग्राह्य हुआ करती है; स्वयं आप ही अपनी कोर्इ भी वस्तु हेय या उपादेय नहीं होती। आत्मा ही ब्रह्म है और सबका अन्तर्यामी होनेसे वह किसी इन्द्रियका विषय भी नहीं है। इसलिये वह किसी अन्यका भी हेय या उपादेय नहीं है। इसके सिवा आत्मासे भिन्न कोर्इ और वस्तु न होनेके कारण भी [वह हेयोपादेयरहित है]। ‘इति शुश्रुम पूर्वेषाम्’ (यह हमने पूर्व आचार्योंके मुँहसे सुना है) ऐसा कहकर यह दिखलाते हैं कि यह [परम्परागत] शास्त्रका उपदेश है। हमसे [शास्त्रीय मतका] व्याख्यान किया था [यह उनकी स्वतन्त्र कल्पना नहीं है] ऐसा कहकर जो उन आचार्योंकी अस्वतन्त्रता दिखलायी है वह तर्कका प्रतिषेध करनेके लिये है; जिन्होंने हमसे उस ब्रह्मका वर्णन किया था। अर्थात् उन्होंने ब्रह्मका प्रतिपादन करनेवाले नित्य आगमका ही व्याख्यान करके बतलाया था अपनी बुद्धिसे ही प्रकट हुए तर्कद्वारा नहीं कहा। इस प्रकार ज्ञानकी स्तुतिके लिये शास्त्रपरम्पराका अविच्छेद दिखलाया है, क्योंकि तर्क तो अनवस्थित और भ्रमपूर्ण भी होता है॥ ३ ॥",
      pad: "वहाँ—उस ब्रह्ममें नेत्रेन्द्रिय नहीं जाती, क्योंकि अपनेहीमें अपनी गति होनी असम्भव है। और न वाणीही पहुँचती है। जिस समय वाणीसे उच्चारण किया हुआ शब्द अपने वाच्यको प्रकाशित करता है उस समय ही, अपने वाच्यतक वाणी पहुँचती है—ऐसा कहा जाता है। किन्तु ब्रह्म तो शब्द और उसका व्यवहार करनेवाले इन्द्रियका आत्मा है। अतः वाणी वहाँ उसी प्रकार नहीं पहुँच सकती, जैसे कि अग्नि दाहक और प्रकाशक होनेपर भी अपनेको न जलाता है और न प्रकाशित ही करता है। और न मन ही [वहाँतक जाता है]। मन भी अन्य पदार्थोंका संकल्प और निश्चय करनेवाला होता हुआ भी अपना संकल्प या निश्चय नहीं करता है, क्योंकि ब्रह्म उसका भी आत्मा है। इन्द्रिय और मनसे ही वस्तुका ज्ञान हुआ करता है; उनका अविषय होनेके कारण हम यह नहीं जानते कि वह ब्रह्म ऐसा है। अतः जिस प्रकारसे इस ब्रह्मका अनुशासन—शिष्यके प्रति उपदेश किया जाय—यह हम नहीं जानते ऐसा इसका अभिप्राय है। जो वस्तु इन्द्रियोंका विषय होती है उसीका जाति, गुण और क्रियारूप विशेषणोंद्वारा दूसरेको उपदेश किया जा सकता है। किन्तु ब्रह्म उन जाति आदि विशेषणोंवाला नहीं है। अतः शिष्योंको उपदेशद्वारा उसकी प्रतीति कराना बहुत कठिन है—इस प्रकार श्रुति उपदेश और उसके अर्थका ग्रहण करनेमें अधिक प्रयत्न करनेकी आवश्यकता दिखलाती है। [पूर्वोक्त श्रुतिके] ‘न विद्मो न विजानीमो यथैतदनुशिष्यात्’ इस वाक्यसे उपदेशके प्रकारका अत्यन्त निषेध प्राप्त होनेपर उसका यह अपवाद कहा जाता है। यह ठीक है कि प्रत्यक्षादि प्रमाणोंसे परमात्माकी प्रतीति नहीं करायी जा सकती, किन्तु शास्त्रसे तो उसकी प्रतीति करायी ही जा सकती है—अतः उसके उपदेशके लिये शास्त्र प्रमाण देते हैं—‘वह विदितसे अन्य ही है और अविदितसे भी परे है।’ यहाँ जिस प्रकरणप्राप्त श्रोत्रादिके श्रोत्रादि और उनके अविषय ब्रह्मका उल्लेख किया गया है। वह विदितसे अन्य—पृथक् ही है। वेदन-क्रियासे अत्यन्त व्याप्त अर्थात् वेदन-क्रियाकी कर्मभूत जो कुछ [नामरूपात्मक] वस्तु कहीं-न-कहीं किसी-न-किसीको ज्ञात है उसीको ‘विदित’ कहते हैं। अतः सम्पूर्ण व्याकृत वस्तु ‘विदित’ ही है। उस [विदित वस्तु]-से ब्रह्म पृथक् ही है—यह इसका तात्पर्य है। तो फिर ब्रह्म अज्ञात है—ऐसा प्राप्त होनेपर कहते हैं—वह अविदित—विदितसे विपरीत व्याकृत पदार्थोंकी बीजभूत अविद्यारूप अव्याकृतसे भी ‘अधि’ है। ‘अधि’ का अर्थ ऊपर होता है; परन्तु लक्षणासे इसका अर्थ ‘अन्य’ करना चाहिये,क्योंकि जो वस्तु जिससे अधि—ऊपर होती है वह उससे अन्य हुआ करती है—यह प्रसिद्ध ही है। जो वस्तु विदित होती है वह अल्प, मरणशील एवं दुःखमयी होती है, इसलिये वह हेय (त्याज्य) है। ब्रह्म उस विदित वस्तुसे भिन्न है— ऐसा कहनेसे उसका अहेयत्व बतलाया गया तथा ‘वह अविदितसे भी ऊपर है’ ऐसा कहनेपर उसका अनुपादेयत्व प्रतिपादन किया गया। किसी कार्यके लिये ही किसी अन्य पुरुषद्वारा एक अन्य कारण यानी साधनको ग्रहण किया जाता है; अतः वेत्ता (आत्मा)-को किसी अन्य प्रयोजनके लिये कोर्इ अन्य साधन उपादेय नहीं है। इस प्रकार वह विदित और अविदित दोनोंसे भिन्न है—इस कथनद्वारा हेय और उपादेयका प्रतिषेध कर दिया जानेसे [ज्ञेय वस्तु] अपने आत्मासे अभिन्न सिद्ध होनेके कारण शिष्यकी ब्रह्मविषयक जिज्ञासा पूर्ण हो जाती है, क्योंकि अपने आत्मासे भिन्न किसी और वस्तुका विदित और अविदित दोनोंसे भिन्न होना सम्भव नहीं है। अतः आत्मा ही ब्रह्म है—यह इस वाक्यका अर्थ है। यही बात ‘यह आत्मा ब्रह्म है’ ‘जो आत्मा पापसे रहित है’‘जो साक्षात् अपरोक्षरूपसे ब्रह्म ही है’ ‘जो आत्मा सर्वान्तर है’ इत्यादि अन्य श्रुतियोंसे भी प्रमाणित होती है। इस प्रकार सर्वात्मा सर्वविशेष-रहित चिन्मात्रज्योतिःस्वरूप वस्तुका ब्रह्मत्व प्रतिपादन करनेवाले वाक्यार्थ- का ‘इति शुश्रुम पूर्वेषाम्’ इत्यादि वाक्यद्वारा आचार्योंके उपदेशकी परम्परासे प्राप्त होना दिखलाया गया है। इस प्रकार वह ब्रह्म आचार्योंकी उपदेश-परम्परासे ही ज्ञातव्य है, तर्कसे अथवा प्रवचन, मेधा, बहुश्रुत, तप एवं यज्ञादिसे नहीं—ऐसा हमने पूर्ववर्ती आचार्योंका वचन सुना है। जिन आचार्योंने हमारे प्रति उस ब्रह्मका व्याख्यान— स्पष्ट कथन किया था, उन्हींके [वचनसे हमें उसे जानना चाहिये] यह इसका तात्पर्य है॥ ३ ॥",
    },
    commentaryEnglish:
      "Since Brahman, as the Ear etc. of the ear etc., is the Self of those organs,    therefore, tatra, there, to that Brahman; caksuh, the eye; na gacchati, does    not go; for it is not possible to go to oneself. Similarly na vak gacchati,    speech does not go. When a word, as expressed by the organ of speech,    reveals its own idea, speech is said to go to its object. But Brahman is the   Self of that word, as also of the organ that utters it; therefore speech does   not go. Just as fire, which burns and illumines, does not burn or illumine  itself, similarly is this so. No manah, nor the mind. Though the mind thinks    and determines other things, it does not think or determine itself; for of it,    too, Brahman is the Self. A thing is cognized only by the mind and the    senses. As Brahman is not an object of perception to these, therefore, na        vidmah, we do not know, `That Brahman is of this kind'. Hence na        vijdnimah, we are not aware of; yatha, the process by which; etat, this        Brahman; anusisyat, should be taught, instructed to a disciplethis is the        significance. For, a thing that is perceived by the senses can be taught to        another through categories denoting class, quality, and action. Brahman is        not possessed of these categories, viz class etc.; hence it is very difficult to        convince the disciples about It through instruction. In this way the Upanisad      shows the necessity of putting forth great effort in the matter of imparting       instruction and comprehending its meaning. \n The contingency of the total denial of any process of instruction having       arisen from the text, `We do not know Brahman, and hence we are not       aware of any process of instructing about It', an exception to this is being       stated in the next verse. True it is that one cannot impart knowledge about      the Highest with the help of such means of valid knowledge as the evidence      of the senses; but the knowledge can be produced with the help of      traditional authority. Therefore traditional authority) is being quoted for the      sake of imparting instruction about It: \n         Anyat eva, different indeed; is tat, that which is the topic underdiscussion and which has been spoken of as the Ear etc., of the ear etc., and as beyond their reach. It is, indeed, different from the known. The known is very much within the grasp of the act of knowing, that which is the object of the verb, `to know'. Inasmuch as everything is known somewhere by somebody, all that is manifested is certainly known. The idea is that, It (Brahman) is different from that. Lest, in that case, It should be unknown, the text says, (It is,) atho, again; different aviditat, from the unknown, from what is opposed to the known, from that which consists of the unmanifested ignorance, which is the seed of the manifested. The word adhi, used in the sense of `above', means `different' by a figure of speech; for it is wellknown that anything that exists above another is different from that other. Whatever is known is limited, mortal, and full of misery; and hence it is to be rejected. So when it is said that Brahman is different from the known it amounts to asserting that It is not to be rejected. Similarly, when it is affirmed that It is different from the unknown, it amounts to saying that It is not a thing to be obtained. It is for the sake of getting an effect, indeed, that somebody different from it acquires some other thing to serve as a cause. For this reason, too, nothing different (from the Self) need be acquired to serve .any purpose distinct from the knower (Self). Thus the statement, that Brahman is different from the known and the unknown, having amounted to Brahman being denied as an object to be acquired or rejected, the desire of the disciple to know Brahman (objectively) comes to an end, for Brahman is nondifferent from the Self. (Or, according to a different reading - the desire of the disciple to know a Brahman different from the Self, comes to an end).' For nothing other than one's own Self can possibly be different from the known and the unknown. Thus it follows that the meaning of the sentence is that the Self is Brahman. And this also follows from such Vedic texts as: `This Self is Brahman' (Ma. 2; Br. II. v. 19, IV. iv. 5), `that Self which is untouched by sin' (Ch. VIII. vii. 1), `the Brahman that is immediate and directthe Self that is within all' (Br. III. iv. 1), etc. In this way, the text, `Thus we heard' etc., states how through a succession of preceptors and disciples, was derived the purport of the sentence which establishes as Brahman that Self of all which is devoid of all.distinguishing features, and is the light of pure consciousness. Moreover, Brahman is to be known only through such a traditional instruction of preceptors and not through argumentation, nor by study (or exposition),intelligence, great learning, austerity, sacrifices, etc. -iti, such (was what);.susruma, we heard; purvesam, of the ancient teachers; the teachers ye, who; vyaca- caksire, explained, taught clearly; nah, to us; tat, that Brahman. The idea that the Self is Brahman having been established through the sentence, `That is surely different from the known, and again, that is above the unknown', the hearer has this doubt: `How can the Self be Brahman? For the Self is familiarly known to be that which is entitled to undertake rites and meditation and which, being subject to birth and death, seeks to attain either the gods headed by Brahma (Creator) or heaven by undertaking the practice of rites or meditation. Therefore some adorable being other than that (Self), e.g. Visnu, I'svara (Siva), Indra, or Prana(vital force or Hiranyagarbha) may well be Brahman, but not s° the Self; for this is opposed to common sense. Just as other logicians say that the Self is different from the Lord, so also the ritualists worship other gods saying,    \n     Sacrifice to that one,    \n        Sacrifice to that one. \n  Therefore it is reasonablethat, that should be Brahman which is known and adorable; and the worshipper should be one who is different from this.' Having noticed thisdoubt either from the looks or the words of the disciple, the teacher said,`Don't be in doubt thus;'-",
  },
  {
    id: 4,
    Part: "Khand 1",
    mantraNumber: "4",
    shlok: {
      line1:
        "यद्वाचानभ्युदितं येन वागभ्युद्यते । \n तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ४ ॥ ",
    },
    translationHindi:
      "जो वाणीसे प्रकाशित नहीं है, किन्तु जिससे वाणी प्रकाशित होती है उसीको तू ब्रह्म जान, जिस इस [देशकालावच्छिन्न वस्तु]-की लोक उपासना करता है वह ब्रह्म नहीं है॥ ४ ॥ ",
    translationEnglish:
      " That which is not uttered by speech, that by, which speech is revealed,    know that alone to be Brahman, and not what people worship as an object.",
    commentaryHindi: {
      vakya:
        "‘यद्वाचा’ इत्यादि मन्त्रोंका उल्लेख आत्मतत्त्वकी दृढ़ प्रतीतिके लिये किया गया है। ‘वह विदितसे भिन्न है’ ऐसा जो शास्त्रका तात्पर्य इस ब्राह्मण-ग्रन्थने ऊपर कहा है उसकी पुष्टिके लिये ही ये ‘यद्वाचा’ इत्यादि मन्त्र पढ़े जाते हैं। जो ब्रह्म वाणीसे अर्थात् शब्दसे अनभ्युदित—अनुक्त अर्थात् अप्रकाशित है। और जिससे वाणी अभ्युदित होती है—ऐसा कहकर उसे वाणीके प्रकाशका हेतु बतलाया है। ‘जिससे वाणी प्रकाशित होती है’ ऐसा कहकर वाणीके अभिधान (उच्चारण)-के अभिधेय (वाच्य)-को प्रकाशित करनेमें ब्रह्मको हेतु बतलाया है [अर्थात् यह दिखलाया है कि वाणीमें जो अर्थको अभिव्यंजित करनेका सामर्थ्य है वह ब्रह्मका ही है]। ऊपर ‘लोग किसकी प्रेरणासे इस वाणीको बोलते हैं’ इस प्रश्नके उत्तरमें ‘जो वाणीकी वाणी है’ इत्यादि कहा भी जा चुका है। ‘तू उसीको ब्रह्मजान’ यह आगम ब्रह्मको अविषयरूपसे बुद्धिमें बिठानेके लिये है। ‘जो वाणीसे प्रकट नहीं होता, बल्कि वाणीके प्रकाशित होनेका हेतु है’ इस कथनसे ब्रह्मका अविषयत्व सिद्ध करता हुआ शास्त्र पुरुषको अन्य वस्तुके ग्रहण करनेकी इच्छासेनिवृत्त करके अपने आत्मस्वरूपमें ही जोड़ता है और ‘उसीको तू ब्रह्म जान’ इस वाक्यद्वारा वह उसे अन्य प्रयत्नसे उपरत करता है तथा ‘नेदं यदिदमुपासते’ इस कथनसे भी ब्रह्मका उपास्यत्व निषेध करनेके कारण [वह अन्य सब ओरसे उसे निवृत्त करता है]॥ ४ ॥",
      pad: "जो चैतन्य सत्तास्वरूप ब्रह्म वाणीसे [अप्रकाशित है]—जिह्वामूल आदि आठ स्थानोंमें१आश्रित तथा अग्निदेवतासे अधिष्ठित वर्णोंको अभिव्यक्त करनेवाली इन्द्रिय एवं अर्थ-संकेतसे परिच्छिन्न और इतने तथा इस क्रमसे२ प्रयुक्त होनेवाले हैं, ऐसे नियमवाले वर्ण ‘वाक्’ कहे जाते हैं। तथा उनसे अभिव्यक्त होनेवाला शब्द भी ‘पद’ या ‘वाक्’ कहाजाता है। श्रुति कहती है—‘अकार१ ही सम्पूर्ण वाक् है और यह वाक् ही अपने स्पर्श२, अन्त:स्थ३ और ऊष्म४ आदि भेदोंसे अभिव्यक्त होकर अनेक रूपवाली हो जाती है।’ इस प्रकार मित५ अमित६ स्वर७ एवं सत्य और मिथ्या—ये जिसके विकार हैं उस पदरूपसे परिच्छिन्न एवं वागिन्द्रियरूप गुणवाली वाणीसे जो अनभ्युदित—अप्रकाशित अर्थात् नहीं कहा गया है—बल्कि जिस ब्रह्मके द्वारा वागिन्द्रियसहित वाणी विवक्षित अर्थमें बोली जाती अर्थात् अपने चैतन्यज्योति: स्वरूपसे प्रकाशित यानी प्रयुक्त की जाती है, जो ‘वाणीकी वाणी है’ इस प्रकार बतलाया गया है [जिसके विषयमें] बृहदारण्यकोपनिषद्में ‘बोलनेके कारण वाणी है’ ‘जो भीतरसे वाणीका नियमन करता है’ इत्यादि कहा है, तथा ‘चेतन प्राणियोंमें जो वाणी (वाक्-शक्ति) है वह घोषों (वर्णों)-में स्थित है, उसे कोर्इ ब्रह्मवेत्ता ही जानता है’ इस प्रकार प्रश्न उठाकर यह उत्तर दिया है कि ‘जिसके द्वारा जीव स्वप्नमें बोलता है वह वाक् है’ वक्ताकी वह नित्य वाचन-शक्ति ही चैतन्य-ज्योति:स्वरूपा वाक् है जैसा कि ‘वक्ताकी वाचन-शक्तिका लोप कभी नहीं होता’ इस श्रुतिसे सिद्ध होता है। उस आत्मस्वरूपको ही तू बृहत् होनेके कारण ‘ब्रह्म’ यानी भूमासंज्ञक सर्वोत्कृष्ट ब्रह्म जान। जिन वाक् आदि उपाधियोंके कारण, वाणीकी वाणी, चक्षुका चक्षु, श्रोत्रका श्रोत्र, मनका मन, कर्ता, भोक्ता, विज्ञाता, नियन्ता, शासनकर्ता तथा ब्रह्म विज्ञान और आनन्दस्वरूप है—इत्यादि प्रकारके व्यवहार उस अव्यवहार्य निर्विशेष सर्वोत्कृष्ट समस्वरूप ब्रह्ममें प्रवृत्त होते हैं, उन सब उपाधियोंका बाध कर अपने निर्विशेष आत्माको ही ब्रह्म जान—यही ‘एव’ शब्दका अर्थ है। जिस इस उपाधिविशिष्ट अनात्मा ईश्वरादिकी उपासना—ध्यान करते हैं यह ब्रह्म नहीं है। ‘उसीको तू ब्रह्म जान’ इतना कह देनेपर भी [अनात्मवस्तुमें ब्रह्मभावनाकानिषेध हो ही जाता] पुन: ‘यह ब्रह्म नहीं है’ इस वाक्यके द्वारा जो अनात्माका अब्रह्मत्व प्रतिपादन किया है वह आत्मामें ही ब्रह्म-बुद्धिका नियमन करनेके लिये अथवा अन्य उपास्य देवताओंमें ब्रह्मबुद्धिकी निवृत्ति करनेके लिये है॥ ४ ॥",
    },
    commentaryEnglish:
      "rat, that ---whose essence consists of Consciousness alone , which; (is       not uttered) micd, by speech -. Vak (speech) is the organ which, clinging to         the eight localities, viz the root of the tongue etc.), and being presided over        by (the god of) Fire, expresses the letters. The letters, too, as limited in their        number and as subject to a certain sequence, in conformity with the        meaning intended to be conveyed, are also called yak. I Thus also the sound        expressible by them, which is the pada (sphota),2 is called yak. This is in        accordance with the Vedic text: `The letter a, indeed, is all speech.3 And        that speech, being manifested as the sparga letters, the antahstha letters        (semi-vowels), and usma letters (aspirates),4 becomes many and        multifarious' (Ai. A. II. iii. 7. 13). (Yat, that which) is anabhyuditam, not        expressed, not uttered; yara, by yak, by speech, which has these        modifications, viz regulated (material, Rk), non-regulated (prose Yajuh),       musical (Soma), true, and false - by that yak which becomes defined as        words and to which the organ of speech is subordinate; 5 yena, that by        which - that Brahman, the light of Consciousness, by which -; aak, speech,        together with its organs; abhyudyate, is uttered, is expressed, that is to say,        is used in relation to the desired meaning-. That which has been spoken of        here as `the Speech of speech' (1.2), and as `When It speaks, It is called the        organ of speech' (Br. I. iv. 7), and `He who controls the organ of speech        from within' (Br. III. vii. 17), etc., in the Brhadaranyaka Upanisad, and       about whom the question has been raised thus, `The (power of) speech that       is found in men, is established in sounds. Does any Brahmana know it?',        and the answer has been given by saying, `That by which one speaks in       dream is speech'-that eternal power of speech which a speaker has is aak      which is in essence, the light of Consciousness. And this follows from the        Vedic text, `For the speaker's power of speech can never be lost' (Br. IV. iii.        26). Tat eva, that indeed, that Self in its true nature; tvam, you; viddhi,        know; as brahma, Brahman-(so called) because of its extensity (or unsurpassability) -that which is allsurpassing and is called Bhurna, great        (Ch. VII. xxiii. 1). The significance of the word eva is this: Know the Self        alone to be the unconditioned Brahman after eradicating all such adjuncts as        speech because of which there occur such empirical expressions, with        regard to the transcendental, unconditioned, unsurpassable, and equipoised        Brahman, as `It is the Speech of speech', `the Eye of the eye', `the Ear of the        ear', `the Mind of the mind', the agent, the enjoyer, the knower, the        controller, governor. `Consciousness, Bliss, Brahman' (Br. III. ix. 28.7), etc.        Na idam, this is not; brahma, Brahman; yat, which; people upasate,         meditate on; as idam, this, (as a limited object) pos sessed of distinctions        created by limiting adjunctsas a non-Self, e.g. God, etc. Although in the       sentence, `know that alone to be Brahman', it has already been stated that        the non-Self is not Brahman, still with a view to enunciating an explicit rule         (that leaves no scope for option) the idea is repeated in the sentence, `This      is not Brahman'; or this may be with a view toexcluding the identification of  Brahman with what is not Brahman.",
  },
  {
    id: 5,
    Part: "Khand 1",
    mantraNumber: "5",
    shlok: {
      line1:
        "यन्मनसा न मनुते येनाहुर्मनो मतम् । \n तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ५ ॥ ",
    },
    translationHindi:
      "जो मनसे मनन नहीं किया जाता, बल्कि जिससे मन मनन किया हुआ कहा जाता है उसीको तू ब्रह्म जान। जिस इस [देशकालावच्छिन्न वस्तु]-की लोक उपासना करता है वह ब्रह्म नहीं है॥ ५ ॥",
    translationEnglish:
      " . That which man does not comprehend with the mind, that by which,    they say, the mind is encompassed, know that to be Brahman and not what   people worship as an object.   ",
    commentaryHindi: {
      vakya:
        "‘यन्मनसा’ इत्यादि श्रुतियोंका तात्पर्य समान ही है।‘मन मनन’ किया जाता है’ अर्थात् जिस नित्य विज्ञानस्वरूप ब्रह्मद्वारा मन भी विषय किया जाता है। जो सब इन्द्रियोंका अविषय है और नित्य विज्ञानस्वरूपसे अवभासित होनेके कारण जिससे वेसभी इन्द्रियाँ अपने व्यापार और विषयोंके सहित अवभासित होती हैं—यह इन मन्त्रोंका तात्पर्य है। ‘तथा क्षेत्रज्ञ सम्पूर्ण क्षेत्रको प्रकाशित करता है’ इस स्मृतिसे और ‘उसीके तेजसे’ [यह सब प्रकाशित है] इस आथर्वणी श्रुतिसे भी यही प्रमाणित होता है। ‘येन प्राण:’ इस श्रुतिका यह तात्पर्य है कि क्रियाशक्ति भी आत्मविज्ञानके कारण ही प्रवृत्त होती है॥५—८॥",
      pad: "जिसका मनके द्वारा मनन नहीं किया जाता; मन और बुद्धिके एकत्वरूपसे यहाँ मन शब्दसे अन्त:करणका ग्रहण किया जाता है। जिसके द्वारा मनन करते हैं उसे मन कहते हैं; वह समस्त इन्द्रियोंके विषयोंमें व्यापक होनेके कारण, सम्पूर्ण इन्द्रियोंके लिये समान है। ‘काम, संकल्प, संशय, श्रद्धा, अश्रद्धा, धैर्य, अधैर्य, लज्जा, बुद्धि और भय—ये सब मन ही हैं।’इस श्रुतिके अनुसार मन कामादि वृत्तियोंवाला है। उस मनके द्वारा यह लोक जिस मनके प्रकाशक चैतन्यज्योतिका मनन—संकल्प अथवा निश्चय नहीं कर सकता, क्योंकि मनका प्रकाशक होनेके कारण वह तो उसका नियामकहै। आत्मा सब विषयोंके प्रति प्रत्यक्रूप (आन्तरिक) ही है; अत: उसमें मन प्रवृत्त नहीं हो सकता। अपने भीतर स्थित चैतन्यज्योतिसे प्रकाशित हुए मनमें ही मनन करनेका सामर्थ्य है। उसके द्वारा वृत्तियुक्त हुए मनको ब्रह्मवेत्ता लोग जिस ब्रह्मके द्वारा मत—विषयीकृत अर्थात् व्याप्त बतलाते हैं; उस मनके प्रत्यक्चेतयिता आत्माको ही तू ब्रह्म जान। ‘नेदं.....’ इत्यादि वाक्यकी व्याख्या पूर्ववत् समझनी चाहिये॥ ५ ॥ ",
    },
    commentaryEnglish:
      "Manas means the internal organs, mind and intellect being taken as one   entity. The word manas, derived from the root man in the sense of that by    which one thinks, is common to all organs, since it embraces all objects. In     accordance with the Vedic text, `Desire, deliberation, doubt, faith, want of    faith, steadiness, unsteadiness, shame, intelligence, and fear-all these are but    the mind' (Br. I. v. 3), mind is that which has desire etc. as its functions. Yat,   that-the light of Consciousness illumining the mind-, which; one na manute,    does not think nor determine, with that mind, because It rules the mind by    virtue of being the enlightener of the mind ---. Since the Self, indeed,   constitutes the essence of everything, therefore the mind cannot act with     regard to its own Self. The mind can think only when it is illumined by the   light of Consciousness within. That Brahman,yena, by which; -they, the knowers of Brahman; ahuh, say-; manas, the mind, together with its modes;   matam, is thought of, encompassed--. Therefore viddhi, know, tat era, that    very one, the Self of the mind, the internal illuminator, as Brahman..Na    idam, etc. is to be understood as before.",
  },
  {
    id: 6,
    Part: "Khand 1",
    mantraNumber: "6",
    shlok: {
      line1:
        "यच्चक्षुषा न पश्यति येन चक्षूंषि पश्यति। \n तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ||६|| ",
    },
    translationHindi:
      "वे असुरसम्बन्धी लोक आत्माके अदर्शनरूप अज्ञानसे आच्छादित हैं। जो कोई भी आत्माका हनन करनेवाले लोग हैं, वे मरनेके अनन्तर उन्हें प्राप्त होते हैं॥ ३ ॥",
    translationEnglish:
      " That which man does not see with the eye, that by which man    perceives the activities of the eye, know that alone to be Brahman and not   what people worship as an object.",
    commentaryHindi: {
      vakya:
        "‘यन्मनसा’ इत्यादि श्रुतियोंका तात्पर्य समान ही है।‘मन मनन’ किया जाता है’ अर्थात् जिस नित्य विज्ञानस्वरूप ब्रह्मद्वारा मन भी विषय किया जाता है। जो सब इन्द्रियोंका अविषय है और नित्य विज्ञानस्वरूपसे अवभासित होनेके कारण जिससे वेसभी इन्द्रियाँ अपने व्यापार और विषयोंके सहित अवभासित होती हैं—यह इन मन्त्रोंका तात्पर्य है। ‘तथा क्षेत्रज्ञ सम्पूर्ण क्षेत्रको प्रकाशित करता है’ इस स्मृतिसे और ‘उसीके तेजसे’ [यह सब प्रकाशित है] इस आथर्वणी श्रुतिसे भी यही प्रमाणित होता है। ‘येन प्राण:’ इस श्रुतिका यह तात्पर्य है कि क्रियाशक्ति भी आत्मविज्ञानके कारण ही प्रवृत्त होती है॥५—८॥",
      pad: "लोक जिसे अन्त:करणकी वृत्तिसे युक्त नेत्रद्वारा नहीं देखता अर्थात् विषय नहीं करता, किन्तु जिस चैतन्यात्मज्योतिके द्वारा चक्षुओं अर्थात् अन्त:करणकी वृत्तियोंके भेदसे विभिन्न हुर्इं—नेत्रेन्द्रियकी वृत्तियोंको देखता—विषय करता यानी व्याप्त करता है उसीको तु ब्रह्म जान इत्यादि पूर्ववत् समझना चाहिये॥ ६ ॥ ",
    },
    commentaryEnglish:
      "Yat, that which; caksusa, with the eye, associated with the functions of    the internal organ; na pasyati, (a man) does not see, does not make an object    of perception; yena, that by which; man pasyati, sees, perceives,   encompasses, through the light of Consciousness; caksuthsi, the activities of   the eye-diversified in accordance with the modes of the internal organ Tat   eva, etc., as before.",
  },
  {
    id: 7,
    Part: "Khand 1",
    mantraNumber: "7",
    shlok: {
      line1:
        "यच्छ्रोत्रेण न शृणोति येन श्रोत्रमिँश्रुतम् । \n तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ७ ॥",
    },
    translationHindi:
      "वे असुरसम्बन्धी लोक आत्माके अदर्शनरूप अज्ञानसे आच्छादित हैं। जो कोई भी आत्माका हनन करनेवाले लोग हैं, वे मरनेके अनन्तर उन्हें प्राप्त होते हैं॥ ३ ॥",
    translationEnglish:
      " That which man does not hear with the ear, that by which man knowsthis ear, know that to be Brahman and not this that people worship as anobject.",
    commentaryHindi: {
      vakya:
        "‘यन्मनसा’ इत्यादि श्रुतियोंका तात्पर्य समान ही है।‘मन मनन’ किया जाता है’ अर्थात् जिस नित्य विज्ञानस्वरूप ब्रह्मद्वारा मन भी विषय किया जाता है। जो सब इन्द्रियोंका अविषय है और नित्य विज्ञानस्वरूपसे अवभासित होनेके कारण जिससे वेसभी इन्द्रियाँ अपने व्यापार और विषयोंके सहित अवभासित होती हैं—यह इन मन्त्रोंका तात्पर्य है। ‘तथा क्षेत्रज्ञ सम्पूर्ण क्षेत्रको प्रकाशित करता है’ इस स्मृतिसे और ‘उसीके तेजसे’ [यह सब प्रकाशित है] इस आथर्वणी श्रुतिसे भी यही प्रमाणित होता है। ‘येन प्राण:’ इस श्रुतिका यह तात्पर्य है कि क्रियाशक्ति भी आत्मविज्ञानके कारण ही प्रवृत्त होती है॥५—८॥",
      pad: "लोक जिसे मनोवृत्तिसे युक्त आकाशके कार्यभूत तथा दिशा-रूप देवतासे अधिष्ठित श्रोत्रेन्द्रियद्वारा नहीं सुन सकता अर्थात् जिसे श्रोत्रसे विषय नहीं कर सकता, बल्कि जिस चैतन्यात्मज्योतिद्वारा यह प्रसिद्ध श्रोत्र सुना यानी विषय किया जाता है वही [ब्रह्म है] इत्यादि पूर्ववत् समझना चाहिये॥ ७ ॥ ",
    },
    commentaryEnglish:
      "Yat Srotrena na srnoti, that which man does not hear with the ear, that ispresided over by the deity of the quarters, that is produced from aka.sa, andthat is connected with the activity of the mind; yena, that by which, bywhich light of Consciousness; idam .srotram srutarn, this well-known ear isencompassed-. Tat eva, etc., as before.",
  },
  {
    id: 8,
    Part: "Khand 1",
    mantraNumber: "8",
    shlok: {
      line1:
        "यत्प्राणेन न प्राणिति येन प्राणः प्रणीयते। \n तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥ ||८||",
    },
    translationHindi:
      "वे असुरसम्बन्धी लोक आत्माके अदर्शनरूप अज्ञानसे आच्छादित हैं। जो कोई भी आत्माका हनन करनेवाले लोग हैं, वे मरनेके अनन्तर उन्हें प्राप्त होते हैं॥ ३ ॥",
    translationEnglish:
      " That which man does not smell with the organ of smell, that by which the organ of smell is impelled, know that to be Brahman and not what people worship as an object.",
    commentaryHindi: {
      vakya:
        " ‘यन्मनसा’ इत्यादि श्रुतियोंका तात्पर्य समान ही है।‘मन मनन’ किया जाता है’ अर्थात् जिस नित्य विज्ञानस्वरूप ब्रह्मद्वारा मन भी विषय किया जाता है। जो सब इन्द्रियोंका अविषय है और नित्य विज्ञानस्वरूपसे अवभासित होनेके कारण जिससे वेसभी इन्द्रियाँ अपने व्यापार और विषयोंके सहित अवभासित होती हैं—यह इन मन्त्रोंका तात्पर्य है। ‘तथा क्षेत्रज्ञ सम्पूर्ण क्षेत्रको प्रकाशित करता है’ इस स्मृतिसे और ‘उसीके तेजसे’ [यह सब प्रकाशित है] इस आथर्वणी श्रुतिसे भी यही प्रमाणित होता है। ‘येन प्राण:’ इस श्रुतिका यह तात्पर्य है कि क्रियाशक्ति भी आत्मविज्ञानके कारण ही प्रवृत्त होती है॥५—८॥",
      pad: "अन्त:करणकी और प्राणकी वृत्तियोंके सहित नासिकारन्ध्रमें स्थित एवं पृथिवीके कार्यभूत प्राण यानी घ्राणके द्वारा जो प्राणन अर्थात् गन्धयुक्त वस्तुओंको विषय नहीं करता, बल्कि जिस चैतन्यात्मज्योतिसे प्रकाश्यरूपसे प्राण अपने विषयकी ओर प्रवृत्त किया जाता है वही ब्रह्म है इत्यादि शेष सब अर्थ पहलेहीके समान है॥ ८ ॥ ",
    },
    commentaryEnglish:
      "Pranena, by the organ of smell, produced from earth, existing in the nostrils, and associated with the activities of the internal organ and the vital force; yat, that which; man na prdniti, does not smell, does not comprehend like smell; yena, that light of the Self by which; pranah, the organ of smellbeing illumined as an object; praniyate, is impelled-towards its own object-. All the rest, tat era etc., is just like what has gone before. ",
  },
  {
    id: 9,
    Part: "Khand 2",
    mantraNumber: "1",
    shlok: {
      line1:
        " यदि मन्यसे सुवेदेति दभ्रमेवापि नूनं त्वं वेत्थ ब्रह्मणो रूपम्‌। \n यदस्य त्वं यदस्य देवेष्वथ नु मीमांस्यमेव ते मन्ये विदितम्‌ ॥ ||१||",
    },
    translationHindi:
      "यदि तू ऐसा मानता है कि ‘मैं अच्छी तरह जानता हूँ’ तो निश्चय ही तू ब्रह्मका थोड़ा-सा ही रूप जानता है। इसका जो रूप तू जानता है और इसका जो रूप देवताओंमें विदित है [वह भी अल्प ही है] अत: तेरे लिये ब्रह्म विचारणीय ही है। [तब शिष्यने एकान्त देशमें विचार करनेके अनन्तर कहा—] ‘मैं ब्रह्मको जान गया—ऐसा समझता हूँ’॥ १ ॥ ",
    translationEnglish:
      " (Teacher) : `If you think, `I have known Brahman well enough`, then you have known only the very little expression that It has in the human body and the little expression that It has among the gods. Therefore Brahman is still to be deliberated on by you.' (Disciple) : `I think (Brahman) is known.' ",
    commentaryHindi: {
      vakya:
        "यदि तू यह मानता है कि मैं ब्रह्मको अच्छी तरह जानता हूँ तो तू निश्चय ही ब्रह्मके रूपको बहुत कम जानता है—ऐसा आचार्य समझते हैं। परन्तु आचार्य जो शिष्यकी बुद्धिको विचलित करते हैं वह किसलिये है—इसपर कहते हैं कि [उनका यह कार्य] शिष्यद्वारा पहले ग्रहण किये हुए अर्थमें बुद्धिकी स्थिरताके लिये है।[इसी उद्देश्यको लेकर आचार्य कहते हैं—] देवताओंमें भी जो कोर्इ यह मानता है कि मैं ब्रह्मको अच्छी तरह जानता हूँ वह भी निश्चय ही उस ब्रह्मके रूपको बहुत कम जानता है। क्यों? क्योंकि ब्रह्म किसीका भी विषय नहीं है। अथवा इसका इस प्रकार सम्बन्ध लगाना चाहिये कि इस ब्रह्मका जो मनुष्योंमें आध्यात्मिक और देवताओंमें आधिदैविक रूप है वह बहुत तुच्छ ही है। ‘अथ नु’ ऐसा कहकर ब्रह्मके विचारमें हेतु प्रदर्शित करते हैं। क्योंकि ‘ब्रह्म विदितसे पृथक् ही है’—ऐसा कहे जानेके कारण ब्रह्मका अच्छी प्रकार जाना हुआ रूप तो अल्प ही है। और तू यह मानता ही है कि मैं उसे अच्छी तरह जानता हूँ। इसलिये तू ब्रह्मके अल्प स्वरूपको ही जानता है। क्योंकि ऐसी बात है, इसलिये जबतक तुझे विदित और अविदितका प्रतिषेध करनेवाले शास्त्रवचनका अनुभव न हो तबतक तो अब भी मैं तेरे लिये ब्रह्मको मीमांसा यानी विचारके योग्य ही समझता हूँ; यह इसका तात्पर्य है। ‘मन्ये विदितम्’ यह शिष्यकी मीमांसा (विचार) करनेके अनन्तरकी उक्ति है—क्योंकि ऐसा माननेपर ही तीन प्रकारकी प्रतीतियोंकी संगति होती है। सम्यक् वस्तुके निश्चयके लिये विचलित किये हुए शिष्यसे जब आचार्यने कहा कि ‘तुम्हारे लिये अभी ब्रह्म विचारणीय ही है’ तब शिष्यने एकान्त देशमें समाहित चित्तसे पूर्वोक्त प्रकारसे ब्रह्मको विचारनेके अनन्तर भलीभाँति निश्चय करके शास्त्र, आचार्य और अपना अनुभव—इन तीनों प्रतीतियोंकी एक ही विषयमें संगति करनेके लिये कहा [मैं ब्रह्मको ज्ञात हुआ ही मानता हूँ]। इससे यह न्याय दिखलाया गया है कि इस प्रकार खूब निश्चित किया हुआ ज्ञान ही सफल होता है—अनिश्चित नहीं, क्योंकि ‘मन्ये  विदितम्’ इस उक्तिसे परिनिष्ठित—निश्चित विज्ञानकी प्रतिज्ञाके हेतुका ही प्रतिपादन किया गया है॥ १ ॥",
      pad: "यदि कदाचित् तू ऐसा मानता हो कि मैं ब्रह्मको अच्छी तरह जानता हूँ जिसके दोष क्षीण हो गये हैं ऐसा कोर्इ बुद्धिमान् पुरुष कभी सुने हुएके अनुसार दुर्विज्ञेय विषयको भी समझ लेता है और कोर्इ नहीं भी समझता—इस आशयसे ही [गुरुने] ‘यदि मन्यसे’ इत्यादि शंकायुक्त वाक्य कहा है। ऐसा देखा भी गया है कि ‘यह जो नेत्रोंके भीतर पुरुष दिखायी देता है यही आत्मा है, यही अमृत है, यही अभयपद है और यही ब्रह्म है—ऐसा [ब्रह्माने] कहा’ इस प्रकार ब्रह्माजीके कहनेपर प्रजापतिकी सन्तान और पण्डित होनेपर भी असुरराज विरोचनने अपने स्वभावके दोषसे, किसी प्रकार सिद्ध न होनेपर भी शरीर ही आत्मा है, ऐसा विपरीत अर्थ समझ लिया। तथा देवराज इन्द्रने भी एक, दो तथा तीन बार कहनेपर भी इसका भाव न समझकर अपने स्वभावका दोष क्षीण हो जानेके अनन्तर चıथी बार कहनेपर पहली ही बार कहे हुए ब्रह्मका ज्ञान प्राप्त किया। लोकमें भी एक ही गुरुसे श्रवण करनेवालोंमें कोर्इ तो ठीक-ठीक समझ लेता है, कोर्इ ठीक नहीं समझता है, कोर्इ उलटा समझ बैठता है और कोर्इ समझता ही नहीं। फिर यदि अतीन्द्रिय आत्मतत्त्वको न समझ सकें तो इसमें कहना ही क्या है? इसके सम्बन्धमें तो समस्त सद्वादी और असद्वादी तार्किक भी उलटा ही समझे हुए हैं। अत: ‘ब्रह्मको जान लिया’ यह कथन सुनिश्चित होनेपर भी विषम प्रतिपत्ति (ज्ञान) होनेके कारण आचार्यका ‘यदि मन्यसे सुवेद’ इत्यादि शंकायुक्त कथन उचित ही है। [अत: आचार्य कहते हैं यदि तू ‘ब्रह्मको मैंने जान लिया है’ ऐसा मानता है तो] निश्चय ही तू ब्रह्मके अल्प रूपको ही जानता है। पूर्व०—क्या ब्रह्मके बड़े और छोटे अनेकों रूप हैं, जिससे कि गुरु ‘तू ब्रह्मके अल्प रूपको ही जानता है’ ऐसा कह रहे हैं। सिद्धान्ती—हाँ, नाम-रूपात्मक उपाधिके किये हुए तो ब्रह्मके अनेक रूप हैं, किन्तु स्वत: नहीं हैं। स्वत: तो ‘जो अशब्द, अस्पर्श, रूपरहित, अव्यय, रसहीन, नित्य और गन्धहीन है’ इस श्रुतिके अनुसार शब्दादिके सहित उसके सभी रूपोंका प्रतिषेध किया जाता है। पूर्व०—जिस धर्मके द्वारा जिसका निरूपण किया जाता है वही उसका रूप हुआ करता है; अत: ब्रह्मका भी जिस विशेषणसे निरूपण होता है वही उसका स्वरूप होना चाहिये। अत: कहते हैं—चैतन्य पृथिवी आदिका अथवा परिणामको प्राप्त हुए अन्य समस्त पदार्थोंमेंसे किसीका धर्म नहीं है और न वह श्रोत्रादि इन्द्रिय अथवा अन्त:करणका ही धर्म है, अतएव वह ब्रह्मका रूप है, इसीलिये ब्रह्मका चैतन्यरूपसे निरूपण किया जाता है। ऐसा ही कहा भी है—‘ब्रह्म विज्ञान और आनन्दस्वरूप है’ ‘वह विज्ञानघन ही है’ ‘ब्रह्म सत्य, ज्ञान और अनन्तस्वरूप है’ ‘प्रज्ञान ब्रह्म है’ इस प्रकार श्रुतियोंमें भी ब्रह्मके रूपका निरूपण किया गया है। सिद्धान्ती—यह ठीक है, तथापि वह अन्त:करण, शरीर और इन्द्रियरूप उपाधिके द्वारा ही विज्ञानादि शब्दोंसे निरूपण किया जाता है, क्योंकि देहादिके वृद्धि, संकोच, उच्छेद और नाश आदिमें वह उनका अनुकरणकरनेवाला है; परन्तु स्वत: वैसा नहीं है। स्वत: तो वह ‘जाननेवालोंके लिये अज्ञात है और न जाननेवालोंके लिये ज्ञात है’ इस प्रकार निश्चय किया जायगा। ‘यदस्य’ इस पदसमूहका पूर्ववर्ती ‘ब्रह्मणो रूपम्’ के साथ सम्बन्ध है। तू केवल आध्यात्मिक उपाधिसे परिच्छिन्न हुए इस ब्रह्मके ही अल्प रूपको नहीं जानता बल्कि अधिदैवत उपाधिसे परिच्छिन्न हुए इस ब्रह्मके भी जिस रूपको तू देवताओंमें जानता है वह भी निश्चय तू इसके अल्प रूपको ही जानता है—ऐसा मैं मानता हूँ। इसका जो अध्यात्मरूप है और जो देवताओंमें है वह भी उपाधिपरिच्छिन्न होनेके कारण दहरत्व (अल्पत्व)-से दूर नहीं है। किन्तु जो सम्पूर्ण उपाधि और विशेषणोंसे रहित शान्त अनन्त एक अद्वितीय भूमासंज्ञक नित्य ब्रह्म है वह सुगमतासे जाननेयोग्य नहीं है—यह इसका अभिप्राय है।क्योंकि ऐसी बात है इसलिये अभी तो मैं तेरे लिये ब्रह्मको विचारणीय ही समझता हूँ। आचार्यके ऐसा कहनेपर शिष्यने एकान्तमें बैठकर समाहित हो आचार्यके बतलाये हुए आगमको अर्थसहित विचारकर और तर्कद्वारा निश्चयकर आत्मानुभव करनेके अनन्तर आचार्यके समीप आकर कहा—मैं ऐसा मानता हूँ कि अब मुझे ब्रह्म विदित हो गया है॥ १ ॥",
    },
    commentaryEnglish:
      "Fearing that the disciple, to whom has been brought home the conviction, `You are the Self, which is opposed to the acceptable and, the unacceptable, and which is Brahman', may jump to the conclusion, `I know myself well enough that I, indeed, am Brahman', the teacher, with a view to dispelling that notion of the disciple, says, `If you think,' etc.  \n Objection: Is not such a firm conviction as, `I know well enough',   desirable?  \n Answer: True, a firm conviction is desirable but not such a one as, `I know It well enough.' That knowable thing alone that falls within the range of cognition can be known thoroughly, just as an inflammable substance becomes consumable to a fire that burns it, but not so the essence itself of the fire. The well-ascertained purport of all the Upanisads is that the personal Self of each knower is Brahman. Here, too, the same fact has been established in the form of an answer to questions, in the text beginning with, `That which is the Ear of the ear' etc. (1.2) ; and the same has been specifically affirmed in the text, `That which is not uttered by speech' (I. 5). Besides, the positive conclusion of the (traditional) line of knowers of Brahman has been adduced in the text: `That is surely different from the known; and again, It is above the unknown' (I. 4). And the topic will be concluded thus: `It is unknown to those who know well, and known to those who do not know' (II. 3). Hence it is proper to dispel the disciple's notion: `I know well enough.' For the knower cannot be known by the knower, just as fire cannot be consumed by the consuming fire; and there is no other knower different from Brahman to whom Brahman can become a separate knowable. A separate knower is denied by the Vedic text: `There is no other knower but this' (Br. III. viii. 11). Therefore the conviction, `I know Brahman well enough', is certainly false. Hence the teacher has justifiably said, `If you think,' etc. \n Yadi, if perchance; manyase, you think; su veda iii, `I know Brahman well enough.' Although the entity may be inscrutable, yet some one who is possessed of real wisdom and who is free from defects, may at some time comprehend It as it was heard of, whereas some one else may not; hence the teacher says with hesitation, `If you think,' etc. And it has been noticed that when it was declared, ' `The person that is perceived in the eye - is this Self`, so said he (Prajapati). `This is immortal, fearless-this is Brahman`' (Ch. VIII. vii. 4), Virocana, though he was a son of Prajapati, and a scholar, and a king of the demons, still, owing to his natural defects, understood, contrary to what was taught, an opposite object, viz the body, to be the Self. Similarly, Indra, the king of the gods, who could not comprehend when instructed once, twice, and thrice, did, at the fourth stage, when his natural defects had been removed, realize the same Brahman that was spoken of at the very initial stage (Ch. VIII. vii-xii). In ordinary life also it is seen that, of the disciples hearing from the same teacher, some one understands accurately, some one inaccurately, some one contrarily, and some one nothing at all. What more need one speak with regard to (the knowledge of) the real nature of the Self which is beyond the senses? In this matter, indeed, all dialecticians, whether they believe in (the) existence or nonexistence (of the Self), have got their misconceptions. Therefore though the statement, `Brahman has been realized', has been made with firm conviction, still the teacher's apprehensive remark, `If you think,' etc., is quite appropriate in view of the comprehension being difficult. Tvam, you; vettha, know; nunam, certainly; daharaml rupam eva api, the very little from (i.e. expression) ; brahmanah, of Brahman. \n Objection : Are there many forms of Brahman, great and small, because of which it is said, `very little form' etc.?  \n Answer: Quite so. Many, indeed, are the aspects of Brahman created by the adjuncts of name and form, but not naturally. From Its own standpoint, forms, together with words are denied thus: `That which is without sound, touch, form, and destruction; likewise tasteless, eternal and odourless' (Ka.I. iii. 15; Nr. 9; Muk.II. 72).  \n Objection: Is it not a fact that the very attribute by which a thing is determined is its own nature? Therefore that very distinctive feature by which Brahman is defined must be Its nature. Hence it is argued that since consciousness cannot be an attribute of any one of (the elements), earth etc., nor can it be of all of them in their transformation (as body), and as it is not an attribute of either of (the senses such as) the ear etc., or of the internal organ (mind), therefore it is a feature of Brahman; and thus is Brahman defined by consciousness. Thus it has been said, `Knowledge, Bliss, Brahman' (Br. III. ix. 28. 7), `Pure intelligence only' (Br. II. iv. 12), `Brahman is Truth, Knowledge, Infinite' (Tai. II. i. 1), `Brahman is consciousness' (Ai. V. 3) -thus, too, is the feature of Brahman determined in the Vedic texts.  \n Answer: Truly this is so. But even so, that aspect is indicated by such words as consciousness, not from the intrinsic point of view, but merely with reference to the limiting adjuncts-mind, body, and senses--, because of Its correspondence with those things, in accordance as the body etc. undergo expansion, contraction, disruption, destruction, etc. But in reality, the conclusion will be: `unknown to those who know well, and known to those who do not know' (11.3). \n The expression, yat asva, should be construed with the preceding expression, brahmanah rupam (the aspect of Brahman), (meaning thereby: that form of Brahman which ...). Not only do you know very little of the expression of that Brahman that is conditioned by the human personality, but the expression of Brahman as conditioned by divine adjuncts, which you devesu vettha, know among the gods, that too, as known to you, is very little indeed. This is how I think. Whether the expression be in the human personality or whether it be among the gods, it does not become freed from insignificance, since it is conditioned by adjuncts. The purport is that the Brahman, that is free from all distinctions, that is one without a second, and that is known as Bhuma (great) and eternal, cannot be known as a fully comprehended object. Since this is so, atha nu, therefore; mange, I think; te, for you; even now, Brahman is mimarhsyam eva, certainly to be deliberated on. The disciple having been told so by the teacher, sat in solitude with his mind concentrated, deliberated on the traditional teaching as imparted by the teacher together with its purport, ascertained it by a process of reasoning, made it a matter of personal experience, approached the teacher, and said `Now mange, I think; (Brahman) is viditam, known.' (Teacher) : `How (is Brahman known to you) ?' (Disciple) : 'Listen!' - ",
  },
  {
    id: 10,
    Part: "Khand 2",
    mantraNumber: "2",
    shlok: {
      line1:
        " नाहं मन्ये सुवेदेति नो न वेदेति वेद च। \n यो नस्तद्वेद तद्वेद नो न वेदेति वेद च ॥ ||२||",
    },
    translationHindi:
      "मैं न तो यह मानता हूँ कि ब्रह्मको अच्छी तरह जान गया और न यही समझता हूँ कि उसे नहीं जानता। इसलिये मैं उसे जानता हूँ [और नहीं भी जानता]। हम शिष्योंमेंसे जो उसे ‘न तो नहीं जानता हूँ और न जानता ही हूँ’ इस प्रकार जानता है वही जानता है॥ २ ॥",
    translationEnglish:
      " `I do not think, `I know (Brahman) well enough`: (i.e. I consider) `Not that I do not know; I know and I do not know as well.` He among us who understands that utterance, `Not that I do not know; I know and I do not know as well``, knows that (Brahman). ",
    commentaryHindi: {
      vakya: "मैं अच्छी तरह जानता हूँ—ऐसा नहीं मानता अर्थात् ब्रह्मको अच्छी तरह जानता हूँ—ऐसा भी मैं निश्चयपूर्वक नहीं मानता। ‘तब तो तुझे ब्रह्म विदित ही नहीं हुआ’—ऐसा कहनेपर शिष्य कहता है—‘मैं नहीं जानता, सो भी बात नहीं है, जानता भी हूँ।’ मूलके ‘वेद च’ इस पदसमूहके ‘च’ शब्दसे ‘नहीं भी जानता’ ऐसा अर्थ लेना चाहिये। गुरु—‘मैं ब्रह्मको अच्छी तरह जानता हूँ—ऐसा नहीं मानता’ तथा ‘मैं नहीं जानता—सो भी बात नहीं है बल्कि जानता ही हूँ’ ऐसा कहना तो परस्पर विरुद्ध है। यदि तू यह नहीं मानता कि ‘उसे अच्छी तरह जानता हूँ’ तो ऐसा कैसे समझता है कि ‘उसे जानता भी हूँ’ और यदि तू मानता है कि ‘मैं जानता ही हूँ’ तो ऐसा क्यों नहीं मानता कि ‘उसे अच्छी तरह जानता हूँ’। संशययुक्त और विपरीत ज्ञानको छोड़कर एक वस्तु जिसके द्वारा जानी जाती है उसीसे वही वस्तु अच्छी तरह नहीं जानी जाती—ऐसा कहना तो ठीक नहीं है। और ऐसा भी कोर्इ नियम नहीं बनाया जा सकता कि ब्रह्म संशययुक्त अथवा विपरीतरूपसे ही जाननेयोग्य है, क्योंकि संशयजानता हूँ—ऐसा नहीं मानता’ तथा ‘मैं नहीं जानता—सो भी बात नहीं है बल्कि जानता ही हूँ’ ऐसा कहना तो परस्पर विरुद्ध है। यदि तू यह नहीं मानता कि ‘उसे अच्छी तरह जानता हूँ’ तो ऐसा कैसे समझता है कि ‘उसे जानता भी हूँ’ और यदि तू मानता है कि ‘मैं जानता ही हूँ’ तो ऐसा क्यों नहीं मानता कि ‘उसे अच्छी तरह जानता हूँ’। संशययुक्त और विपरीत ज्ञानको छोड़कर एक वस्तु जिसके द्वारा जानी जाती है उसीसे वही वस्तु अच्छी तरह नहीं जानी जाती—ऐसा कहना तो ठीक नहीं है। और ऐसा भी कोर्इ नियम नहीं बनाया जा सकता कि ब्रह्म संशययुक्त अथवा विपरीतरूपसे ही जाननेयोग्य है, क्योंकि संशयऔर विपर्यय तो सर्वत्र अनर्थकारी-रूपसे ही प्रसिद्ध हैं। आचार्यद्वारा इस प्रकार विचलित किये जानेपर भी ‘वह विदितसे अन्य ही है और अविदितसे भी ऊपर है’ इस आचार्यके कहे हुए शास्त्रसम्प्रदायके बलसे तथा उपपत्ति और अपने अनुभवके बलसे शिष्य विचलित न हुआ; बल्कि वह ब्रह्मविद्यामें अपनी दृढ़निश्चयता दिखलाते हुए गर्जने लगा। किस प्रकार गर्जने लगा, सो बतलाते हैं—ब्रह्मचारियोंके सहित ‘हम शिष्योंमें जो-जो मेरे कहे हुए उस वचनको तत्त्वत: जानता है—वही उस ब्रह्मको जानता है। अच्छा तो वह वचन है क्या? ऐसा प्रश्न करनेपर [शिष्य] कहता है—‘मैं नहीं जानता—ऐसा भी नहीं है, जानता भी हूँ।’ जो बात [आचार्यने] ‘वह विदितसे अन्य ही है और अविदितसे भी ऊपर है’ इस वाक्यद्वारा कही थी उसी वस्तुको अपने अनुमान और अनुभवसे मिलाकर निश्चित करके आचार्यकी बुद्धिको सम्यक् प्रकारसे बतलाने और मन्दबुद्धियोंकी बुद्धिकी पहुँचसे बचानेके लिये एक दूसरे वाक्यस ‘मैं नहीं जानता—ऐसा भी नहीं है जानता भी हूँ’ ऐसा कहा है। ऐसा होनेपर ही ‘हममेंसे जो इस [वाक्यके मर्म]-को जानता है वही जानता है’ यह गर्जना उचित हो सकती है॥ २ ॥",
      pad: "आचार्यका और अपना निश्चय समान ही है—यह दिखलानेके लिये शिष्य अपने अच्छी प्रकार निश्चित किये हुए सफल विज्ञानकी प्रतिज्ञा करता है, क्योंकि ‘नाह मन्ये सुवेद’—ऐसा कहकर वह उसका हेतु बतलाता है।‘अह’ यह निश्चयार्थक निपात है। इसका यह तात्पर्य है कि मैं [ब्रह्मको अच्छी तरह जानता हूँ] ऐसा मानता ही नहीं। जबतक मुझे ज्ञान प्राप्त नहीं हुआ था तबतक ही मुझे ‘मैं ब्रह्मको अच्छी तरह जानता हूँ’— ऐसा विपरीत निश्चय था। आपके द्वारा [उस निश्चयसे] विचलित किये जानेपर अब मेरा वह निश्चय दूर हो गया, क्योंकि वह पूर्वोक्त अर्थकी मीमांसा (विचार)-के फलस्वरूप अपने आत्माके ब्रह्मत्वनिश्चयरूप सम्यक् प्रत्ययके विरुद्ध है। अत: ‘मैं अच्छी तरह जानता हूँ’ ऐसा तो मानता ही नहीं। तथा उस ब्रह्मको मैं नहीं जानता—ऐसा भी नहीं मानता क्योंकि अविदित ब्रह्मका प्रतिषेध किया गया है। यहाँ ‘नो न वेदेति’ इस वाक्यके आगे ‘मन्ये’ इस क्रियापदकी अनुवृत्ति होती है। फिर यह पूछनेपर कि ‘तुम किस प्रकार मानते हो?’ शिष्य बोला—‘वेद च’। यहाँ ‘च’ शब्दसे ‘वेद च न वेद च’ अर्थात् जानता भी हूँ और नहीं भी जानता—क्योंकि वह पूर्वोक्त अर्थकी मीमांसा (विचार)-के फलस्वरूप अपने आत्माके ब्रह्मत्वनिश्चयरूप सम्यक् प्रत्ययके विरुद्ध है। अत: ‘मैं अच्छी तरह जानता हूँ’ ऐसा तो मानता ही नहीं। तथा उस ब्रह्मको मैं नहीं जानता—ऐसा भी नहीं मानता क्योंकि अविदित ब्रह्मका प्रतिषेध किया गया है। यहाँ ‘नो न वेदेति’ इस वाक्यके आगे ‘मन्ये’ इस क्रियापदकी अनुवृत्ति होती है। फिर यह पूछनेपर कि ‘तुम किस प्रकार मानते हो?’ शिष्य बोला—‘वेद च’। यहाँ ‘च’ शब्दसे ‘वेद च न वेद च’ अर्थात् जानता भी हूँ और नहीं भी जानता—‘यो नस्तद्वेद तद्वेद’ यह आगम उपर्युक्त अर्थका अनुवाद होनेके कारण इससे अन्य पक्षोंका निषेध करनेके लिये है। हममेंसे जो उस ब्रह्मको इस प्रकार विदित-अविदितसे भिन्न जानता है वही जानता है, और कोर्इ नहीं; क्योंकि जैसा मैं जानता हूँ उससे अन्य प्रकार जाननेवाला तो उपास्य अर्थात् कार्य ब्रह्मको ही जाननेवाला है। ‘वेद च’ इस पदसे अन्य पक्षवालेमें ब्रह्मवित्त्वका निरास किया जाता है। किस कारण यह निष्कर्ष निकाला जाता है? सो बतलाते हैं। ऊपर कहे हुए अर्थका अनुवाद करनेके कारण; क्योंकि यहाँ ‘नो न वेदेति वेद च’ इस वाक्यसे पूर्वोक्तका ही अनुवाद करते हैं॥ २ ॥",
    },
    commentaryEnglish:
      "Na aham mange suveda iti, I do not think, `I know Brahman well enough.' Being told (by the teacher), `Then Brahman is not certainly known by you', (the disciple) replies, `Nv na veda iti, veda ca, not that I do not know Brahman: and I know, too.' From the use of the word ca, (and) in the expression veda ca, we are to understand, `Na veda ca, and I do not know, as well.' \n (Teacher) : Is it not contradictory (to say), `I do not think, `I know (Brahman) well enough,`,' and `Not that I do not know; I know and I do not know as well'? If you do not consider, `I know well enough', then how can you consider, `I know too'? Again if you consider, `I do not know', then why do you not consider, `I know well enough'? Leaving out of consideration doubt and false knowledge, it is a contradiction to say that the very same thing which is known by a man is not known well enough by him. Nor can a restrictive rule be laid down to the effect that Brahman is to be known as an object of doubt or false knowledge. For doubt and false knowledge are, indeed, everywhere known to be the causes of harm.  \n Though the disciple was thus given a shaking by the teacher, he remained unmoved. Moreover, revealing his own firm conviction in the knowledge of Brahman, he boldly declared with the strength derived from the traditional knowledge as imparted by the teacher in the sentence, `It is different from the known and is also above the unknown', as also from the strength derived from reasoning and (personal) realization. How (did he declare)? That is being said: `Yah, anyone who; nah, among us, among my co-disciples; veda, knows in reality; tat, that, that sentence uttered (by me); he veda, knows; tat, that Brahman.' (Teacher) : `What again is your assertion?' To this he answers: `Nu na veda iti veda ca, not that I do not know; I know and I do not know as well.' With a view to showing his concurrence with the idea of the teacher and counteracting the comprehension of people of dull intellect, the disciple repeated with conviction in another language, vii `Not that I do not know; I know and I do not know as well', the very same thing which was presented in the sentence, `It is different from the known and it is above the unknown'; and in doing so, he associated with this his own inference and realization. Thus the exclamation, `He among us who understands that utterance knows that (Brahman)', becomes justifiable. \n Stepping aside from the dialogue between the teacher and the taught, the Upanisad, speaking for itself, presents in these words, yasyamatam etc., the whole of the conclusion arrived at through the dialogue:",
  },
  {
    id: 11,
    Part: "Khand 2",
    mantraNumber: "3",
    shlok: {
      line1:
        " यस्यामतं तस्य मतं मतं यस्य न वेद सः। \n अविज्ञातं विजानतां विज्ञातमविजानताम्‌ ॥ ||३||",
    },
    translationHindi:
      "ब्रह्म जिसको ज्ञात नहीं है उसीको ज्ञात है और जिसको ज्ञात है वह उसे नहीं जानता; क्योंकि वह जाननेवालोंका बिना जाना हुआ है और न जाननेवालोंका जाना हुआ है [क्योंकि अन्य वस्तुओंके समान दृश्य न होनेसे वह विषयरूपसे नहीं जाना जा सकता]॥ ३ ॥",
    translationEnglish:
      " It is known to him to whom It is unknown; he does not know to whom It is known. It is unknown to those who know well, and known to those who do not know.  ",
    commentaryHindi: {
      vakya: "जिस ब्रह्मवेत्ताका ऐसा मत—अभिप्राय अर्थात् निश्चय है कि ब्रह्म अमत—अविज्ञात यानी अविदित है उसे ब्रह्म ठीक-ठीक मत अर्थात् ज्ञात हो गया है—ऐसा इसका तात्पर्य है। और जिसे ‘मुझे ब्रह्म मत—ज्ञात अर्थात् विदित हो गया है’—ऐसा निश्चय है वह जानता ही नहीं—उसे ब्रह्मका ज्ञान नहीं है।अब ‘अविज्ञातं विजानताम्’ ऐसा कहकर विद्वान् और अविद्वान्के उपर्युक्त पक्षोंका अवधारण (निश्चय) करते हैं—जाननेवालों अर्थात् भलीप्रकार समझनेवालोंको वह ब्रह्म अविज्ञात—अमत यानी अविदित (अज्ञेय) ही है; तात्पर्य यह है कि इन्द्रिय, मन और बुद्धि आदिमें आत्मभाव करनेवाले असम्यग्दर्शी अज्ञानियोंके लिये ब्रह्म विज्ञात यानी विदित (ज्ञेय) ही है।* हाँ, जिनकी बुद्धि अत्यन्त अव्युत्पन्न (अकुशल) है उनके लिये ऐसी बात नहीं है, क्योंकि उन्हें तो ‘हमने ब्रह्मको जान लिया है’ ऐसी बुद्धि ही नहीं होती। किन्तु जो लोग इन्द्रिय, मन और बुद्धि आदि उपाधियोंमें आत्मभाव करनेवाले हैं उन्हें तो, ब्रह्म और उपाधिके पार्थक्यका ज्ञान न होने तथा बुद्धि आदि उपाधिके ज्ञातरूप होनेसे ‘ब्रह्म विदित है’ ऐसी भ्रान्ति होनी उचित ही है। अत: यहाँ ‘विज्ञातमविजानताम्’ इस वाक्यद्वारा असम्यग्दर्शनका पूर्वपक्षरूपसे उल्लेख किया गया है। अथवा ‘अविज्ञातं विजानताम्’ इत्यादि जो मन्त्रका उत्तरार्ध है वह* हेतु-अर्थमें है॥ ३ ॥",
      pad: "‘यस्यामतम्’ इत्यादि श्रुति-वचन इस आख्यायिकाका उपसंहार करनेके लिये है। शिष्य और आचार्यकी उक्ति-प्रत्युक्ति ही जिसका लक्षण है ऐसी इस अनुभव और युक्तिप्रधान आख्यायिकासे जो अर्थ सिद्ध हुआ है वह सबका उपसंहार करनेवाले इस शास्त्रप्रधान श्रौतवचनसे संक्षेपमें कहा जाता है! जिसे वागादि इन्द्रियोंका अविषय होनेके कारण जाने हुए पदार्थोंसे भिन्न बतलाया था तथा अनुभव और उपपत्तिसे भी जिसकी मीमांसा की थी उस ब्रह्मको वैसा ही जानना चाहिये। किस कारणसे? [सो बतलाते हैं—] जिज्ञासासे प्रेरित होकर प्रवृत्त हुए जिस साधकको ब्रह्म अविज्ञात—अविदित है अर्थात् आत्मतत्त्व-निश्चयरूप फलमें पर्यवसित होनेवाले ज्ञानरूपसे जिसकी जिज्ञासा निवृत्त हो गयी है उसीको वह विदित—ज्ञात है। तात्पर्य यह कि जिसने ब्रह्मको अविषयरूपसे आत्मभावसे जाना है उसीने उसे जाना है। जिसे विज्ञानकी प्राप्तिके अनन्तर ही सब ओर ब्रह्मात्म-भावकी प्राप्ति हो जानेके कारण कर्तव्यका अभाव हो जाता है वही सम्यग्दर्शी है। इससे विपरीत समझने-वाला मिथ्या ज्ञानी होता है। कैसे? [सो कहते हैं—] जिसका ऐसा विज्ञान है कि ब्रह्म मुझे विदित—ज्ञात अर्थात् मालूम है वह विपरीत विज्ञानवान् मिथ्यादर्शी है, क्योंकि ब्रह्म विदितसे भिन्न है; इसलिये वह ब्रह्मको नहीं जानता—नहीं समझता। इन कारणोंसे अवैदिक विज्ञानका मिथ्यात्व सिद्ध हुआ, क्योंकि वह ब्रह्मविषयक न होनेसे निन्दित है। यही नहीं, कपिल और कणाद आदिके सिद्धान्त भी ज्ञातब्रह्मविषयक, अनवस्थिततर्कजनित और जिज्ञासाकी निवृत्ति न करनेवाले होनेसे मिथ्या ही हैं। ‘जो वेदबाह्य स्मृतियाँ हैं तथा और भी जो कोर्इ कुविचार हैं वे सभी निष्फल कहे गये हैं और सब-के-सब अज्ञाननिष्ठ ही माने गये हैं’ इस स्मृतिवाक्यसे भी विपरीत ज्ञान और मिथ्याज्ञानको नष्ट बतलाया गया है। ‘अविज्ञातं विजानतां विज्ञात-मविजानताम्’ यह मन्त्रके पूर्वार्धमें कहे हुए अर्थका हेतु-कथन है, क्योंकि उसीका अनुवाद करना तो व्यर्थ होगा। अनुवादमात्रके लिये कोर्इ बात कहना कुछ अर्थ नहीं रखता, इसलिये ‘यस्यामतम्’ इत्यादि पूर्व पदसे कहे हुए ज्ञान और अज्ञानके हेतुरूपसे ही यह कहा गया है। क्योंकि विज्ञानियोंको ब्रह्म आत्मस्वरूप होनेके कारण इन्द्रियोंका विषय न होनेसे अविज्ञात—अविदित है, इसलिये वही ज्ञान है। और जो अज्ञानी हैं, जो ऐसा नहीं जानते कि ज्ञात और अज्ञात पदार्थोंसे रहित अपना आत्मा, नित्यविज्ञानस्वरूप, आत्मस्थ, अविक्रिय, अमृत, अजर, अभय और अनन्यरूप होनेके कारण ब्रह्म किसी इन्द्रियका विषय नहीं है—उन्हींको ब्रह्म विज्ञात—विदित—व्यक्त अर्थात् बुद्धि आदिके विषयरूपसे ही प्रतीत होता है, उन्हें सर्वदा बुद्धि आदिके विषयरूपसे ही ब्रह्मका ज्ञानहै। अत: विदित-अविदित अथवा व्यक्त-अव्यक्त आदि धर्मोंके आरोपसे [उनका जाना हुआ ब्रह्म] कार्य-कारणभाव रहनेसे सविकल्प ही है; क्योंकि वह अयथार्थविषयक है। उनका वह ज्ञान शुक्ति आदिमें आरोपित रजत आदि ज्ञानोंके समान मिथ्या ही है॥ ३ ॥ ",
    },
    commentaryEnglish:
      "To that knower of Brahman, yasya, to whom; (It is) amatam, unknownwhose view, conviction, is that Brahman is not known; tasya, to him; matam, is known, Brahman is fully known - that is the meaning. Again, yasya, he to whom; (It is) matam, knownhe who has the conviction, `Brahman is known to me'; sah, he; na veda, does not know, to be sure; he does not know Brahman. The two views of the man of knowledge and the man of ignorance, which are thus presented, are being distinctly affirmed (in the second line), avijnatam vijanatam etc. Avijnatam, not known; Brahman is in fact unknown to vijanatam, to the people who know - that is to say, to those who have fully realized. Brahman is vijnatam, known; aviy5natam, to those who do not know, to those who have not got full realization - that is to say, to those who identify the Self merely with the senses, the mind, and the intellect, but not to those whose intelligence is extremely primitive, (these latter being left out of consideration), for the latter do not have the consciousness, `Brahman is known by us'. The error involved in the idea, `Brahman is known to us', is possible for those, however, who, by reason of nondiscrimination between Brahman and the limiting adjuncts, and because of their familiarity with the limiting adjuncts such as the intellect, consider the senses, the mind and the intellect as the Self. Hence the incomplete knowledge is presented as a view to be refuted in the text, `known to those who do not know'. Or the latter half (of the verse viz) avijnatam etc., is adduced as a reason (for the first half) \n It has been ascertained that Brahman is unknown to those who know. If Brahman be wholly unknown, then there remains no distinction between the ordinary people and the knowers of Brahman. Besides, the statement, `unknown to those who know', is selfcontradictory. How then can Brahman be known adequately? To explain this the Upanisad says: ",
  },
  {
    id: 12,
    Part: "Khand 2",
    mantraNumber: "4",
    shlok: {
      line1:
        " प्रतिबोधविदितं मतममृतत्वं हि विन्दते। \n आत्मना विन्दते वीर्यं विद्यया विन्दतेऽमृतम्‌ ॥ ||४||",
    },
    translationHindi:
      "जो प्रत्येक बोध (बौद्ध प्रतीति)-में प्रत्यगात्मरूपसे जाना गया है वही ब्रह्म है—यही उसका ज्ञान है, क्योंकि उस ब्रह्मज्ञानसे अमृतत्वकी प्राप्ति होती है। अमृतत्व अपनेहीसे प्राप्त होता है, विद्यासे तो अज्ञानान्धकारको निवृत्त करनेका सामर्थ्य मिलता है॥ ४ ॥ ",
    translationEnglish:
      "It (i.e. Brahman) is really known when It is known with (i.e. as the Self of) each state of consciousness, because thereby one gets immortality. (Since) through one's own Self is acquired strength, (therefore) through knowledge is attained immortality. ",
    commentaryHindi: {
     vakya: "‘प्रतिबोधविदितम्’ यह द्विरुक्ति है, क्योंकि प्रतीतियाँ ही आत्मज्ञानकी द्वार हैं। ‘बोधं प्रतिबोधं प्रति’ (बोध-बोधके प्रति) यह द्विरुक्ति सम्पूर्ण प्रतीतियोंमें [ब्रह्मकी] व्याप्ति सूचित करनेके लिये है। बुद्धिजनित सम्पूर्ण प्रतीतियाँ तपे हुए लोहेके समान नित्य विज्ञानस्वरूप आत्मासे व्याप्त रहनेके कारण उस विज्ञानस्वरूपसे ही अवभासित हैं तथा उनसे पृथक् उनका अवभासक आत्मा [लोहपिण्डमें व्याप्त हुए] अग्निके समान उनसे सर्वथा विलक्षण उपलब्ध होता है। अत: वे बौद्ध प्रत्यय आत्माकी उपलब्धिमें द्वारस्वरूप हैं। इसलिये प्रत्येक बौद्ध प्रत्ययके अवभासमें जो प्रत्यगात्म-स्वरूपसे जाना जाता है वही ब्रह्म है, वही माना हुआ अर्थात् ज्ञात है तथा वही सम्यग्ज्ञानके सहित प्रत्यगात्माका ज्ञान है; विषयज्ञान सम्यग्ज्ञान नहीं है। ‘प्रत्यगात्माको आत्मस्वरूपसे देखा’ ऐसा कठोपनिषद्में कहा है। ‘अमृतत्वं हि विन्दते’ (आत्म-ज्ञानसे अमरत्व ही प्राप्त होता है) यह हेतुसूचकवाक्य है, क्योंकि इससे विपरीत ज्ञानसे मृत्युकी प्राप्ति होती है। बुद्धि आदि विषयोंमें आत्मत्व बोध होनेसे ही मृत्युका आरम्भ होता है, अत: आत्मविज्ञान अमरत्वका हेतु है; इसलिये ‘अमृतत्वं हि विन्दते’ यह हेतुवचन ठीक ही है। पूर्व०—क्या आत्मज्ञानसे अमरत्व उत्पन्न किया जाता है? सिद्धान्ती—नहीं। पूर्व०—तब कैसे? सिद्धान्ती—अमरत्व तो आत्मासे—अपने नित्यात्मस्वभावसे ही प्राप्त करते हैं, किसीके आश्रयसे नहीं। ‘विन्दते’ इससे यह समझना चाहिये कि उसकी प्राप्ति आत्मविज्ञानकी अपेक्षा रखनेवाली है। यदि अमृतत्व विद्यासे उत्पन्न किया जानेयोग्य होता तो कर्मफलके समान अनित्य हो जाता। इसलिये वह विद्यासे उत्पाद्य नहीं है। यदि कहो कि जब अमृतत्व स्वत: ही मिल जाता है तो विद्या उसमें क्या करती है, तो इसमें हमें यह कहना है कि वह अनात्मविज्ञानको निवृत्त करती हुर्इ उसकी निवृत्तिके द्वारा स्वाभाविक अमृतत्वकी हेतु बनती है, क्योंकि [अगले वाक्यसे] ‘विद्यासे [अज्ञानान्धकारको निवृत्त करनेका] सामर्थ्य प्राप्त होता है’ ऐसा कहा भी है। विद्यासे वीर्य—सामर्थ्य यानी अनात्माके अध्यारोप तथा माया और अन्त:करणके कारण प्राप्त हुए अज्ञानसे जिसका पराभव नहीं हो सकता ऐसा बल प्राप्त होता है। वह किस विशेषणसे युक्त है? वह अमृत यानी अविनाशी है। अविद्यासे होनेवाला बल नाशवान् होता है, क्योंकि अविद्या विद्यासे बाधित हो जाती है। किन्तु विद्याका बाधक और कोर्इ नहीं है, अत: विद्याजनित वीर्य अमृत होता है। इसलिये विद्या तो अमृतत्वमें केवल निमित्तमात्र होती है। आथर्वण श्रुतिमें भी कहा है—‘यह आत्मा बलहीनसे प्राप्त होनेयोग्य नहीं है?’ लोकमें भी विद्याजनित बल ही दूसरे बलोंका पराभव करता है, शरीर आदिका बल नहीं; जैसे हाथी-घोड़े आदिके शारीरिक बल [मनुष्यके] विद्याजनित बलको नहीं दबा सकते। अथवा ‘प्रतिबोधविदितं मतम्’ इस वाक्यका ऐसा अर्थ समझना चाहिये कि स्वप्नसे जागे हुएके समान जिसके सम्पूर्ण विपरीत संस्कारोंका एक बार ही बोध हो गया, उसीसे जो जाना जाता है वही मत अर्थात् ज्ञात होता है। अथवा गुरुका उपदेश ही प्रतिबोध है, उससे जाना हुआ ही मत (जाना हुआ) है। सोनेसे जागा हुआ तथा गुरुद्वारा प्रतिबोधित—दोनों ही जगह ‘प्रतिबोध’ शब्दका प्रयोग होता है। परन्तु इन तीनोंमें सबसे पहला अर्थ ही ठीक है॥ ४ ॥",
      pad: "‘ब्रह्म जाननेवालोंको अविज्ञात है’ ऐसा निश्चय हुआ। इस प्रकार यदि ब्रह्म अत्यन्त अविज्ञात ही है तो लौकिक पुरुष और ब्रह्मवेत्ताओंमें कोर्इ भेद नहीं रह जाता;इसके सिवा ‘जाननेवालोंको अविज्ञात है’ यह कथन परस्पर विरुद्ध भी है। फिर वह ब्रह्म सम्यक् प्रकारसे कैसे जाना जाता है—यही बात बतलानेके लिये कहते हैं— ‘प्रतिबोधविदितम्’ यानी जो बोध-बोधके प्रति विदित होता है। यहाँ ‘बोध’ शब्दसे बुद्धिसे होनेवाली प्रतीतियों (ज्ञानों)-का कथन हुआ है। अत: समस्त प्रतीतियाँ जिसकी विषय होती हैं वह आत्मा समस्त बोधोंके समय जाना जाता है। सम्पूर्ण प्रतीतियों- का साक्षी और चिच्छक्तिस्वरूपमात्र होनेके कारण वह प्रतीतियोंद्वारा सामान्यरूपसे प्रतीतियोंमें ही लक्षित होता है। उस अन्तरात्माका ज्ञान प्राप्त करनेके लिये कोर्इ और मार्ग नहीं है। अत: जिस समय ब्रह्मको प्रतीतियोंके अन्त:साक्षीस्वरूपसे जाना जाता है उसी समय वह ज्ञात होता है; अर्थात् यही उसका सम्यक् ज्ञान है। सम्पूर्ण प्रतीतियोंका साक्षी होनेपर ही उसका वृद्धिक्षयशून्य साक्षित्व, नित्यत्व, विशुद्धस्वरूपत्व, आत्मत्व, निर्विशेषत्व और सम्पूर्ण भूतोंमें [अनुस्यूत] एकत्व सिद्ध हो सकता है, जिस प्रकार कि लक्षणोंमें भेद न होनेके कारण घट, पर्वत और गुहादिमें आकाशका अभेद है। इस प्रकार ‘ब्रह्म विदित और अविदित— दोनोंहीसे भिन्न है’ इस शास्त्रवचनके अर्थका ही भली प्रकार शोधन करके यहाँ उपसंहार किया गया है। इसके सिवा ‘वह दृष्टिका द्रष्टा है, श्रवणका श्रोता है, मतिका मनन करनेवाला है और विज्ञातिका विज्ञाता है’ ऐसी एक दूसरी श्रुति भी है। [उससे भी यही सिद्ध होता है।] जिस प्रकार, जो वृक्षकी शाखाओंको चलायमान करता है उसे वायु कहते हैं उसी प्रकार—जिस समय ‘प्रतिबोधविदितम्’ इसका ऐसा अर्थ किया जाता है कि आत्मा बोधक्रियाका कर्ता है; अत: बोधक्रियारूप लिंगसे उसके कर्ताको जानता है, इसलिये बोधरूपसे विदित होनेके कारण वह ‘प्रतिबोधविदितम्’ कहलाता है। उस समय—आत्मा बोधक्रियारूप शक्तिसे युक्त एक द्रव्य सिद्ध होता है, साक्षात् बोधस्वरूप ही सिद्ध नहीं होता। बोध (बुद्धिगत प्रतीति) तो उत्पन्न होता है और नष्ट भी हो जाता है। अत: जिस समय बोध उत्पन्न होता है उस समय तो वह बोधक्रियारूप विशेषणसे युक्त होता है और जब उसका नाश होजाता है तो वह निर्विशेष द्रव्यमात्र रह जाता है। ऐसा माननेसे तो वह विकारी, सावयव, अनित्य और अशुद्ध निश्चित होता है, और उसके इन दोषोंका किसी प्रकार परिहार नहीं किया जा सकता। तथा वैशेषिक मतावलम्बियोंका जो मत है कि आत्मा और मनके संयोगसे उत्पन्न होनेवाला बोध आत्मामें समवाय-सम्बन्धसे रहता है, इसीसे आत्मामें बोद्धृत्व है, वस्तुत: आत्मा विकारी नहीं है, वह तो नील-पीतादि वर्णोंके समवायी घटके समान केवल द्रव्यमात्र है—सो इस पक्षमें भी ब्रह्म अचेतन द्रव्यमात्र सिद्ध होता है और ‘ब्रह्म विज्ञान एवं आनन्दस्वरूप है’ ‘प्रज्ञान ब्रह्म है’ इत्यादि श्रुतियाँ बाधित हो जाती हैं। निरवयव होनेके कारण आत्मामें कोर्इ देशविशेष नहीं है; और उससे मनका नित्यसंयोग है; इस कारण उसमें स्मृतिकी उत्पत्तिके नियमकी अनुपपत्ति अनिवार्य हो जाती है तथा श्रुति, स्मृति और युक्तिसे विरुद्ध आत्माके संसर्गधर्मी होनेकी कल्पना भी होती है। ‘असंग [आत्मा]-का किसीसे संग नहीं होता’ ‘संगरहित और सबका पालन करनेवाला है’ ऐसी श्रुति और स्मृति प्रसिद्ध हैं। युक्तिसे भी जो वस्तु सगुण होती है उसीका गुणवान्से संसर्ग होता है; विजातीय वस्तुओंका संयोग कभी नहीं होता। अत: निर्गुण-निर्विशेष और सबसे विलक्षण आत्माका किसी भी विजातीय वस्तुसे संयोग होता है—ऐसा मानना न्यायविरुद्ध होगा। अत: नित्य अविनाशी ज्ञानस्वरूप प्रकाश- मय आत्मा ही ब्रह्म है—यह अर्थ आत्माके सम्पूर्ण बोधोंके बोद्धा होनेपर ही सिद्ध हो सकता है, और किसी प्रकार नहीं। इसलिये ‘प्रतिबोधविदितम्’ इसका—हमने जैसी व्याख्या की है—वही अर्थ है। इसके सिवा ‘प्रतिबोधविदितम्’ इस वाक्यका जो स्वप्रकाशता अर्थ बतलाया जाता है वहाँ आत्माको सोपाधिक मानकर उसमें बुद्धि आदि उपाधिके रूपसे भेदकी कल्पनाकर आत्मासे आत्माको जानता है’ ऐसा व्यवहार हुआ करता है, जैसा कि ‘आत्मामें ही आत्माको देखता है’ ‘हे पुरुषोत्तम! तुम स्वयं अपनेसे ही अपनेको जानते हो’ इत्यादि वाक्योंद्वारा कहा गया है। किन्तु निरुपाधिक आत्माके तो एक रूप होनेके कारण उसमें स्वसंवेद्यता अथवा परसंवेद्यता सम्भव ही नहीं है। जिस प्रकार प्रकाशको किसी अन्य प्रकाशकी अपेक्षा होना सम्भव नहीं है उसी प्रकार ज्ञानस्वरूप होनेके कारण उसे [अपने ज्ञानके लिये] किसी अन्य ज्ञानकी अपेक्षा नहीं है। तथा बौद्धमतानुसार तो विज्ञानकी स्वसंवेद्यता स्वीकार करनेपर भी उसकी क्षणभंगुरता और निरात्मकता सिद्ध होने लगेगी। [ऐसा होनेपर] ‘अविनाशी होनेके कारण विज्ञाताकी विज्ञातिका लोप नहीं होता’ ‘नित्य, विभु और सर्वगत है’ ‘वह यह महान् अज आत्मा अजर, अमर, अमृत और अभयरूप है’ इत्यादि श्रुतियाँ बाधित हो जायँगी। इसके सिवा जो लोग प्रति-बोधशब्दसे, जैसा कि सुषुप्त पुरुषको होता है वह निर्निमित्त बोध ही प्रतिबोध है—ऐसे अर्थकी कल्पना करते हैं अथवा जो दूसरे लोग [मुक्तिके कारणभूत] एक बार होनेवाले विज्ञानको ही प्रतिबोध समझते हैं—[वे कुछ भी माना करें] बिना निमित्तसे हो अथवा निमित्तसे तथा एक बार हो अथवा अनेक बार वह सब-का-सब प्रतिबोध ही है [इसका विशेष विवेचन करनेसे हमें कोर्इ प्रयोजन नहीं है]। क्योंकि मुमुक्षुगण उपर्युक्त प्रतिबोधसे अर्थात् प्रत्येक बौद्ध प्रत्ययमें होनेवाले आत्मज्ञानसे ही अमृतत्व अमरणभाव अर्थात् अपने आत्मामें स्थित होनारूप मोक्ष प्राप्त करते हैं। अत: वह (ब्रह्म) प्रत्येक बोधमें अनुभव होनेवाला ही माना गया है—ऐसा इसका अभिप्राय है। क्योंकि बोधका प्रत्यगात्मविषयक होना ही अमरत्वमें कारण माना गया है। आत्माकी अनात्मरूपता उसके अमरत्वका कारण नहीं हो सकती। आत्माका अमरत्व उसका स्वरूपभूत होनेके कारण अहैतुक ही है। इसी प्रकार आत्माकी मृत्यु भी अविद्यावश उसमें अनात्मत्वकी उपलब्धि ही है। तो फिर उपर्युक्त आत्मज्ञानसे किस प्रकार अमरत्व लाभ कर लेता है? इसपर कहते हैं—[मुमुक्षु पुरुष] आत्मा अर्थात् अपने स्वरूपके ज्ञानसे वीर्य—बल यानी [अमरत्व-प्राप्तिका] सामर्थ्य प्राप्त करता है। धन, सहाय, मन्त्र, ओषधि, तप और योगसे प्राप्त होनेवाला वीर्य अनित्य वस्तुका किया हुआ होनेसे मृत्युका पराभव करनेमें समर्थ नहीं है; किन्तु आत्मविद्यासे होनेवाला वीर्य तो आत्माद्वारा ही प्राप्त किया जाता है—अन्य किसीसे नहीं। इसलिये आत्मविद्याजनित वीर्य किसी अन्य साधनसे प्राप्त होनेवाला नहीं है; अत: वही वीर्य मृत्युका पराभव कर सकता है। क्योंकि [मुमुक्षु पुरुष] इस प्रकार आत्मविद्याजनित वीर्यको आत्माद्वारा ही प्राप्त करता है, इसलिये आत्म-सम्बन्धिनी विद्यासे ही अमरत्व प्राप्त करता है। अथर्ववेदीय (मुण्डक) उपनिषद्में कहा है—‘यह आत्मा बलहीन पुरुषको प्राप्त होनेयोग्य नहीं है’। अत: यह आत्मविद्यारूप हेतु [मृत्युका निवारण करनेमें] समर्थ है क्योंकि इससे अमरत्व प्राप्त करता है॥ ४ ॥ \n  जिनमें सांसारिक दु:खोंकी बहुलता है उन देवता, मनुष्य, तिर्यक् और प्रेतादि प्राणियोंमें अज्ञानवश जन्म, जरा, मरण और रोगादिकी प्राप्ति होना निश्चय ही बड़े दु:खकी बात है। अत:—",
    },
    commentaryEnglish:
      "Pratibodha-viditam, known with reference to each state of intelligence. By the word bodha are meant the cognitions acquired through the intellect. The Self, that encompasses all ideas as Its objects, is known in relation to all these ideas. Being the witness of all cognitions, and by nature nothing but the power of Consciousness, the Self is indicated by the cognitions themselves, in the midst of cognitions, as pervading (all on them. There is no other door to Its awareness. Therefore when Brahman is known as the innermost Self (i.e. witness) of cognitions, then is It matam, known, that is to say, then there is Its complete realization. Only by accepting Brahman as the witness of all cognitions can it be established that It is by nature a witness that is not subject to growth and decay, and is eternal, pure in essence, the Self, unconditioned, and one in all beings,l just as it is in the case of akasa (space), because of the nondifference of its characteristics despite its existence in pots, caves, etc. The purport of that very traditional text, `It is different from the known, and again It is above the unknown' (I. 4), which is thus clarified, is concluded here. For (in support of this) there is the other Vedic text: `The Witness of vision, the Hearer of hearing, the Thinker of thought, the Knower of knowledge' (Br. III. iv. 2).  \n Again, if the explanation of pratibodhaviditam be, `The Self being the agent of the act of knowing, one infers It to be the agent of the action from the fact of the cognitive act itself, just as one knows that to be the wind which moves a tree', then the Self is a substance possessed of the power of knowing, but It is not knowledge itself; and as for knowledge, it originates and dies; when knowledge originates, the Self becomes modified by it; and when knowledge dies, the Self becomes nothing but an unmodified substance with its intelligence destroyed. In such a case, one cannot avoid the objection that the Self (thereby) becomes changeable, composed of parts, non-eternal, impure, etc. \n As for the (following) view of the school of Kanada, `Knowledge, arising from the contact of the soul and the mind, inheres in the soul; hence is the soul endowed with knowership. But it is not changeable; it is merely a substance just like a pot in which colour inheres'since according to this view, too, Brahman is a mere substance without consciousness, it contradicts such Vedic text as, `Knowledge, Bliss, Brahman' (Br. III. ix. 28.7), `Brahman is Consciousness' (Ai. V. 3). And as the soul is partless and hence has no locality in it, and as the mind is ever in contact with it, the consequent illogicality of admitting any law regarding the origination of memory becomes insurmountable. Besides, one has to imagine that the Self can have the attribute of coming in contact with others, which idea is repugnant to the Vedas and the Smrtis; for such are the two Vedic and Smrti texts: `Unattached, for It is never attached' (Br. III. ix. 26), `It is unconnected, and is the supporter of all' (G. XIII. 14). Moreover, since logic demands that a thing that has attributes, and is not of a different category, can come into contact with another having attributes, therefore it is illogical to hold that the Self which is attributeless, undifferentiated, and distinct from everything else, can come into contact with anything whatsoever that does not belong to the same category. Hence if the Self is the witness of all cognitions, then and not otherwise is established the idea that the Self, which is an effulgence that is in reality eternal and undecaying knowledge, is Brahman. Therefore the expression pratibodha-viditam has the meaning as explained by us. \n As for the explanation, `The expression, pratibodhaviditam means that the Self is known to oneself', it is possible where difference is imagined in a context in which the Self appears as a conditioned thing through identification with the limiting adjunct, intellect, so as to have such apparent activities as knowing the Self by the self (referred to in the texts) : `Sees the Self in his own self.' (Br. IV. iv. 23), `0 Purusottama (lit. Supreme Purusa, i.e. Being), you yourself know your Self through the self' (G. X. 15). But in a context where the unconditioned Self is one, there can neither be knowing by oneself nor by another. Besides, It being by nature Consciousness Itself, there can be no dependence on another consciousness, just as a light does not depend on another light. \n If the fact of being known to oneself is held in accordance with the Buddhist theory, then knowledge becomes momentary and is left without a Self (Reality); and this will contradict such Vedic texts as: For the knower's function of knowing can never be lost, because it is immortal'. (Br. IV. iii. 30), `Eternal, multiformed, all-pervading' (Mu. I. i. 6), `That great birthless Self is undecaying, immortal, undying, fearless' (Br. IV. iv. 25). \n Others, again, imagine that by the word pratibodha is meant the uncaused knowledge as in the case of a sleeping man; according to still others, pratibodha is the knowledge that flashes but once.' (To this we say) : Whether it be caused or uncaused, and whether it flashes once or twice, it is pratibodha to be sure. \n Hi, because; vindate, (one) attains; amrtatvam, immortality, existence in one's own Self, emancipation -- by virtue of the aforesaid pratibodha, i.e. from the knowledge of the Self as appearing with reference to (i.e. as the witness of) each state of consciousness, therefore, the idea is that the Self is truly known when It is known along with each state of consciousness. Besides, consciousness, as having the indwelling Self as its content, is alone held to be the cause of immortality. Immortality does not surely consist in the Self becoming a non-Self. Immortality being the very nature of the Self, it is certainly without any cause. And thus mortality consists in the Self being perceived as the non-Self through ignorance. \n How, again, is immortality attained through the aforesaid knowledge of the Self? This is being answered. Atmand, through one's own Self; vindate, (one) attains; viryam, strength, capacity. The strength got from wealth, friend, incantation, medicine, asuterity, or Yoga cannot conquer death, for it is produced by impermanent things. But the strength, consequent on the knowledge of the Self, is acquired through the Self alone and not through anything else. Thus, since the strength resulting from the knowledge of the Self is independent of any means of acquisition, that strength alone is able to conquer death. Since the strength produced by the knowledge of the Self is thus attained through the Self, therefore, vidyaya, through knowledge about the Self; (one) vindate, attains; amrtam, immortality. In the Upanisad of the AtharvaVeda it is said, `This Self is not attained by one who has no strength (resulting from steadfastness in the Self)' (Mu. III. ii. 4). Therefore the statement of the reason, `because thereby one attains immortality', is quite appropriate. \n Pitiable, indeed, it is to suffer through ignorance, birth, old age, death, disease, etc., among multitudes of beings such as gods, men, animals, ghosts, etc., in whom there is an abundance of misery natural to transmigratory existence. Therefore,",
  },
  {
    id: 13,
    Part: "Khand 2",
    mantraNumber: "5",
    shlok: {
      line1:
        " इह चेदवेदीदथ सत्यमस्ति। न चेदिहावेदीन्महती विनष्टिः। \n भूतेषु भूतेषु विचित्य धीराः। प्रेत्यास्माल्लोकादमृता भवन्ति ॥ ||५||",
    },
    translationHindi:
      "यदि इस जन्ममें ब्रह्मको जान लिया तब तो ठीक है और यदि उसे इस जन्ममें न जाना तब तो बड़ी भारी हानि है। बुद्धिमान् लोग उसे समस्त प्राणियोंमें उपलब्ध करके इस लोकसे जाकर (मरकर) अमर हो जाते हैं॥ ५ ॥",
    translationEnglish:
      " If one has realized here, then there is truth; if he has not realized here, then there is great destruction. The wise ones, having realized (Brahman) in all beings, and having turned away from this world, become immortal.",
    commentaryHindi: {
      vakya: "‘इह चेदवेदीदथ सत्यमस्ति’ यह श्रुति आत्मसाक्षात्कारकी अवश्य-कर्तव्यता बतलानेवाली है, क्योंकि इसकी विपरीत अवस्थामें श्रुतिने विनाश बतलाया है। इह अर्थात् इस मनुष्य-जन्मके रहते हुए आत्माको अवश्य जान लेना चाहिये—ऐसा विधान किया जाता है। किस प्रकार कि यदि इस जन्ममें आत्माको जान लिया तो ठीक है, उसे परमार्थतत्त्व प्राप्त हो गया; अभिप्राय यह कि उसका जन्म सफल हो गया। और यदि उसे इस जन्ममें न जाना—नसमझा तो उसका जन्म वृथा ही गया। यही नहीं, जन्म-मरण-परम्पराकी अविच्छिन्नतारूप बड़ी भारी हानि भी है। अत: उस परम्पराके विच्छेदके लिये आत्माको अवश्य जान लेना चाहिये। आत्मज्ञानसे होगा क्या सो [भूतेषु भूतेषु आदि वाक्यसे] बतलाते हैं। भूतभूत में अर्थात् सम्पूर्ण चराचर प्राणियोंमें आत्माका शोधनकर—उसे उनसे अलग निकालकर यानी संसार-धर्मोंसे अस्पृष्ट एकमात्र आत्मतत्त्वको आत्मभावसे उपलब्ध कर धीर—बुद्धिमान् अर्थात् विवेकी पुरुष—जिनकीबाह्य विषयोंकी अभिलाषा निवृत्त हो गयी है—मरकर अर्थात् इस शरीरादि अनात्मस्वरूप लोकसे जिनका ममत्व और अहंकार निवृत्त हो गया है, ऐसे होकर अमृत—अमरण धर्मा यानी नित्यविज्ञानामृतस्वभाववाले ही हो जाते हैं। धातुओंके अनेक अर्थ होते हैं [इसीलिये यहाँ ‘विचित्य’ क्रियाका उपर्युक्त अर्थ ठीक है] यहाँ इसका ‘चयन करके’ ऐसा अर्थ नहीं हो सकता, क्योंकि आत्माके सम्बन्धमें ऐसा अर्थ करनेसे विरोध आता है॥ ५ ॥ ",
      pad: "यदि किसी अधिकारी पुरुषने सामर्थ्य लाभ कर इस लोकमें ही उपर्युक्त लक्षणोंसे युक्त आत्माको पूर्वोक्त प्रकारसे जान लिया, तब तो उसके इस मनुष्यजन्ममें सत्य—अविनाशिता—सार्थकता—सद्भाव अथवा परमार्थता विद्यमान है। और यदि न जाना अर्थात् इस लोकमें जीवित रहते हुए ही उस अधिकारीने आत्मज्ञान प्राप्त न किया तो उसे महान्—दीर्घ यानी अनन्त विनाश अर्थात् जन्म, जरा और मरण आदिकी परम्पराका विच्छेद न होनारूप संसारगतिकी ही प्राप्ति होती है। अत: इस प्रकार गुण और दोषको जाननेवाले धीर—बुद्धिमान् ब्राह्मणलोग प्राणी-प्राणीमें अर्थात् सम्पूर्ण चराचर जीवोंमें एक ब्रह्मस्वरूप आत्मतत्त्वको ‘विचित्य’—जानकर अर्थात् साक्षात् कर यहाँसे लौटनेपर अर्थात् ममता-अहंतारूप इस अविद्यात्मक लोकसे उपरत होकर सबमें आत्मैकत्वरूप अद्वैतभावको प्राप्त होकर अमर अर्थात् ब्रह्म ही हो जाते हैं, जैसा कि ‘जो पुरुष निश्चयपूर्वक उस परमब्रह्मको जानता है वह ब्रह्म ही हो जाता है’ इस श्रुतिसे सिद्ध होता है॥ ५ ॥",
    },
    commentaryEnglish:
      "Cet, if-a man having scriptural sanction and ability; avedit, has known-- the Self as defined and in the manner already explained; iha, here, indeed; atha, then; ash satyam, there is truth, there subsist in this human birth the values consisting in long life, wealth, and holiness,1 or supreme reality. Iha, here, even while living, cet, if; a competent man na avedit, has not realized; then there is mahaft, great interminable; vinastih, destruction, transmigratory existence consisting in non-cessation of a continuous succession of birth, old age, death, etc. Therefore the dhirah, wise, Brahmanas (the knowers of Brahman), who are thus familiar with merits and demerits; vicitya, having known, realized, the one reality on the Self; bhutesu bhutesu, in all beings, moving and unmoving; pretya, turning away, desisting; asmit lokat, from this world of ignorance -the world consisting of `I and mine' i.e. having attained the non-dual state consisting in becoming identified with the Self of all; amrtah bha- vanti, become immortal, become Brahman indeedthis is the idea; as it has been said in the Vedic text: `He who knows that supreme Brahman becomes Brahman indeed' (Mu. III. ii. 9).",
  },
  {
    id: 14,
    Part: "Khand 3",
    mantraNumber: "1",
    shlok: {
      line1:
        "ब्रह्म ह देवेभ्यो विजिग्ये तस्य ह ब्रह्मणो विजये देवा अमहीयन्त।  ||१||",
    },
    translationHindi:
      "यह प्रसिद्ध है कि ब्रह्मने देवताओंके लिये विजय प्राप्त की। कहते हैं, उस ब्रह्मकी विजयमें देवताओंने गौरव प्राप्त किया॥ १ ॥ ",
    translationEnglish:
      " It was Brahman, indeed, that achieved victory for the sake of the gods. In that victory which was in fact Brahman's, the gods became elated.",
    commentaryHindi: {
      vakya: "इससे प्रत्येक जीवके ज्ञानादि भेदका प्रत्याख्यान हो गया, क्योंकि उन सभीमें सूक्ष्मता, चैतन्य और सर्वगतत्वादि धर्म समानरूपसे रहनेके कारण भेदके हेतुका अभाव है। यदि उन्हें विकारी माना जाय तो वे अनित्य हो जायँगे। इसके सिवा मुक्तावस्थामें किसीने भी आत्माका कोर्इ विशेष भाव नहीं माना, यदि कोर्इ मानेगा तो अनित्यत्वका प्रसंग उपस्थित हो जायगा। तथा भेद तो केवल अविद्यावान्को ही उपलब्ध होता है, अविद्याका क्षय होनेपर उसकी सिद्धि नहीं होती। अत: [जीव और ईश्वरका] एकत्व ही सिद्ध होता है।अत: अहंकारके सम्बन्धसे अज्ञानके बीजभूत शरीर, इन्द्रिय, मन, बुद्धि, विषय और इन्द्रियज्ञानके प्रवाहकी, जो नित्यविज्ञानस्वरूप आत्मासे भिन्न किसी अन्य निमित्तसे स्थित है, आत्मतत्त्वके यथार्थ ज्ञानसे निवृत्ति हो जानेपर जो अज्ञानके बीजका उच्छेद हो जाना है वही आत्माका मोक्ष कहलाता है और उससे विपरीतका नाम बन्ध है, क्योंकि वे [बन्ध और मोक्ष] दोनों ही [बुद्ध्यादि उपाधि-विशिष्ट] स्वरूपकी अपेक्षासे हैं।‘ब्रह्म ह’ इसमें ‘ह’ ऐतिह्य (इतिहास)-का द्योतक है। कहते हैं, पूर्वकालमें देवासुरसंग्राममें ब्रह्मने जगत्-स्थिति (लोक-मर्यादा)-की रक्षाके लिये अपनी आज्ञामें चलनेवाले विजयार्थी देवताओंके लिये असुरोंको जीत लिया। अर्थात् ब्रह्मकी इच्छारूप निमित्तसे देवताओंकी विजय हो गयी। ब्रह्मकी उस विजयमें देवताओेंको महत्ता प्राप्त हुर्इ। लोककी स्थितिके हेतुभूत यज्ञादिको नष्ट करनेवाले असुरोंके पराजित हो जानेपर देवताओंने वृद्धि अथवा खूब सत्कार प्राप्त किया॥ १ ॥",
      pad: "यह प्रसिद्ध है कि उपर्युक्त लक्षणोंवाले परब्रह्मने देवताओंके लिये जय प्राप्त की। अर्थात् देवता और असुरोंके संग्राममें संसारके शत्रु तथा ईश्वरकी मर्यादा भंग करनेवाले असुरोंको जीतकर जगत्की स्थितिके लिये वह जय और उसका फल देवताओंको दे दिया। कहते हैं, ब्रह्मकी उस विजयमें अग्नि आदि देवगण महिमाको प्राप्त हुए॥ १ ॥",
    },
    commentaryEnglish:
      "After hearing the text, `unknown to those who know well, and known to those who do not know' etc. (II. 3), some people of dull intellect may have this kind of delusion: `It is seen that whatever exists is known through the valid means of cognition; and whatever does not exist remains unknown, is like the horns of a hare, and absolutely non-existent. Similarly this Brahman, being unknown, is certainly nonexistent.' Lest there be this delusion, this story is begun. For the subsequent passages are seen to be leading to this conclusion: `Since that very Brahman is the ruler in every way, the supreme Deity of even the deities, the supreme Lord over the lordly beings, inscrutable, the cause of the victory of gods, and the cause of the defeat of the devils, therefore, how can It be nonexistent?' Or the story is meant to eulogize the knowledge of Brahman. How? By saying that it was surely by virtue of the knowledge of Brahman, that Fire and other gods attained supremacy over the gods, and Indra got still greater pre-eminence. Or (through the story) it is shown that Brahman is inscrutable, inas much as Fire and others, powerful though they are, knew Brahman with sheer difficulty, and so also did Indra, even though he is the ruler of the gods. Or the whole thing is meant to enjoin an injunction regarding the secret teachings (about meditations) that will follows (IV. 4-7). Or the story is meant to show, that apart from the knowledge of Brahman, all notions of agentship etc. that creatures possess, as for instance the conceit of the gods with regard to victory etc., are false.  \n Brahma, the supreme Brahman already spoken of; ha, verily; devebhyah, for the sake of the gods; vijigye, achieved victory. in a fight between the gods and the devils, Brahman, after conquering the devils, the enemies of the world and transgressors of divine rules, gave to the gods the victory and its results for ensuring the stability of the world. Tasya ha Brahmanah vijaye, in that victory which was, indeed, Brahman's; devah, the gods, Fire etc.; amah yanta, became elated.  ",
  },
  {
    id: 15,
    Part: "Khand 3",
    mantraNumber: "2",
    shlok: {
      line1:
        "त ऐक्शन्तास्माकमेवायं विजयोऽस्माकमेवायं महिमेति ॥ \n तद्धैषां विजज्ञौ तेभ्यो ह प्रादुर्बभूव तन्न व्यजानत किमिदं यक्षमिति ॥ ||२||",
    },
    translationHindi:
      "उन्होंने सोचा हमारी ही यह विजय है और हमारी ही यह महिमा है। कहते हैं, वह ब्रह्म देवताओंके अभिप्रायको जान गया और उनके सामने प्रादुर्भूत हुआ। तब देवतालोग [यक्षरूपमें प्रकट हुए] उस ब्रह्मको ‘यह यक्ष कौन है?’ ऐसा न जान सके॥ २ ॥",
    translationEnglish:
      "They thought, `Ours, indeed, is this victory, ours, indeed, is this glory,'Brahman knew this pre tension of theirs. To them It did appear. They couldnot make out about that thing,' as to what this Yaksa (venerable Being)might be.",
    commentaryHindi: {
      vakya: "जो विजय ईश्वरके निमित्तसे प्राप्त हुर्इ थी उसमें ‘यह हमारी सामर्थ्यसे प्राप्त हुर्इ हमारी ही विजय है, हमारी ही महिमा है’ इस प्रकार [अभिमान करके] अपनी विजय आदि कल्याणके हेतुभूत सर्वात्मा सर्वकल्याणास्पद आत्मस्थ ईश्वरको ही आत्मभावसे न जानकर पिण्डमात्रके अभिमानी होकर उन्होंने जो मिथ्या प्रत्यय कर लिया था वह केवल पिण्डमात्रसे सम्बन्ध रखनेवाला होनेसे मिथ्या ज्ञानस्वरूप था। अत: सर्वात्मा ईश्वरके यथार्थ स्वरूपके बोधसे उसका हेयत्व प्रकट करनेके लिये ही यह ‘तद्धैषाम्’ (वह ब्रह्म उन देवताओंके अभिप्रायको जान गया) आदि आख्यायिकारूप आम्नाय (शास्त्र) है। कहते हैं, वह ब्रह्म इन देवताओंके मिथ्या अहंकाररूप अभिप्रायको समझ गया—उसे इसका ज्ञान हो गया। उसे जानकर उस मिथ्याभिमानके छेदनद्वारा देवताओंपर अनुग्रह करनेकी इच्छासे वह देवताओंके ही लिये उनकी इन्द्रियोंका विषय होकर उनसे थोड़ी ही दूरपर प्रकट हुआ। वह महेश्वरकी मायाशक्तिसे ग्रहण किये हुए किसी बड़े ही विचित्र रूपविशेषसे प्रकट हुआ, जिसे देखकर भी देवता लोग यह न जान सके—न पहचान सके कि यह यक्ष अर्थात् पूज्य कौन है?॥ २ ॥",
      pad: "तब अन्त:करणमें स्थित, प्रत्यगात्मा, सर्वज्ञ, प्राणियोंके सम्पूर्ण कर्मफलोंका संयोग करानेवाले, सर्वशक्तिमान् एवं जगत्की रक्षा करनेके इच्छुक ईश्वरकी ही यह सम्पूर्ण जय और महिमा है यह न जानते हुए आत्माको अग्नि आदि रूपोंसे परिच्छिन्न माननेवालेदेवता सोचने लगे कि—हमलोगोंकी ही यह विजय हुर्इ है, और इस विजयकी फलभूत अग्नित्व, वायुत्व एवं इन्द्रत्वरूप यह महिमा भी हमारी ही है; अत: हमारे द्वारा ही इसका अनुभव किया जाता है; यह विजय अथवा महिमा हमारे अन्तरात्मभूत ईश्वरकी की हुर्इ नहीं है। इस प्रकार मिथ्या अभिमानसे विचार करनेवाले उन देवताओंके इस मिथ्या विचारको ब्रह्मने जान लिया, क्योंकि समस्त जीवोंके अन्त:करणोंका प्रेरक होनेके कारण वह सबका साक्षी है। देवताओंके इस मिथ्या ज्ञानको जानकर ‘इस मिथ्या ज्ञानसे असुरोंकी ही भाँति देवताओंका भी पराभव न हो जाय’ इस प्रकार उनपर अनुकम्पा करते हुए यह सोचकर कि ‘देवताओंके मिथ्याज्ञानको निवृत्त करके मैं उन्हें अनुगृहीत करूँ’ वह उन देवताओंके लिये प्रादुर्भूत हुआ अर्थात् अपनी योगमायाके प्रभावसे सबको विस्मित करनेवाले अति अद्भुत रूपसे देवताओंकी इन्द्रियोंका विषय होकर प्रादुर्भूत अर्थात् प्रकट हुआ। उस प्रकट हुए ब्रह्मको देवतालोग यह न जान सके कि यह यक्ष अर्थात् पूजनीय महान् प्राणी कौन है?॥ २ ॥",
    },
    commentaryEnglish:
      "Then, not knowing that this victory and this glory belonged to God whosits in the hearts as the indwelling Self ---omniscient, dispenser of the fruitsof all works of all creatures, omnipotent, and desirous of encompassing thestability of the world - te, they, those gods; aiksanta, thought; 'Ayamvijayah, this victory; is eva asmakam, indeed ours, is of ourselves, who arelimited by our personalities as Fire and others. Asmakam eza, ours indeed,and not of God as our indwelling Self; is ayam mahima, this gloryevidenced by such states as of Fire, Air, Indra, etc. which is experienced byus as the result of victory. This has not been achieved by God who is ourindwelling Self.' Brahman ha, surely; vijajnau. knew; tat, that, thaterroneous deliberation of those whose thoughts were being directed by afalse self-conceit; for Brahman is omniscient by virtue of being the directorof the senses of all creatures. Noticing this false idea of the gods, andthinking, `In order that the gods may not be thus defeated like the devils, as a consequence of their vainglory, I shall, out of grace for them, favour thegods by removing their presumptuousness'with this idea, It, ha, indeed; fortheir sake, pradur- babhuva, appeared as an object of perception; tebhvah, tothe gods: through an unprecedentedly wonderful and astonishing formcreated by Brahman's own power of Maya,' It appeared as an object ofperception to the senses of the gods. The gods na vyajanata, did notcomprehend; tat, that, the Brahman which had become manifest; kim iti, asto what; idam yaksam, this venerable, great Being, might be. ",
  },
  {
    id: 16,
    Part: "Khand 3",
    mantraNumber: "3",
    shlok: {
      line1:
        "तेऽग्निमब्रुवन् जातवेद एतद्विजानीहि किमेतद्यक्षमिति तथेति ॥ ||३||",
    },
    translationHindi:
      "उन्होंने अग्निसे कहा—‘हे अग्ने! इस बातको मालूम करो कि यह यक्ष कौन है? उसने कहा—‘बहुत अच्छा’॥ ३ ॥ ",
    translationEnglish:
      "They said to Fire, `0 Jataveda, find out thoroughly about this thing asto what this Yaksa is.' He said, `So be it.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥ ",
      pad: "उसे न जाननेवाले देवताओंने भीतरसे डरते-डरते उसे जाननेकी इच्छासे सबसे आगे चलनेवाले सर्वज्ञकल्प जातवेदा अग्निसे कहा—‘हे जातवेद! हमारे नेत्रोंके सम्मुख स्थित इस यक्षको जानो—विशेष रूपसे मालूम करो कि यह यक्ष कौन है; क्योंकि तुम हम सबमें तेजस्वी हो’॥ ३ ॥ ",
    },
    commentaryEnglish:
      "Te, they-those gods who failed to know It, and were desirous of knowingIt, but had fear in their hearts; abruvan, said; agnim, to Fire, (lit.) who goesahead (of all) ; and who is Jataveda, almost omni- scient:20 Jataveda, youbeing powerful among us; vijan:hi, thoroughly find out about; etat, thisYaksa that is in our view; kim etat yaksam iti, as to what this Yaksa(venerable Being) is.",
  },
  {
    id: 17,
    Part: "Khand 3",
    mantraNumber: "4",
    shlok: {
      line1:
        "तदभ्यद्रवत्तमभ्यवदत्कोऽसीत्यग्निर्वा अहमस्मीत्यब्रवीज्जातवेदा वा अहमस्मीति ॥ ||४||",
    },
    translationHindi:
      "अग्नि उस यक्षके पास गया। उसने अग्निसे पूछा—‘तू कौन है? उसने कहा—‘मैं अग्नि हूँ, मैं निश्चय जातवेदा ही हूँ’॥ ४ ॥",
    translationEnglish:
      "To It he went. To him It said, `Who are you?' He said, `I am known asFire, or I am Jataveda,'",
    commentaryHindi: {
      vakya: " देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "तब ‘बहुत अच्छा’ ऐसा कहकर अग्नि उस यक्षकी ओर अभिद्रुत हुआ अर्थात् उसके पास गया। इस प्रकार गये हुए और धृष्ट न होनेके कारण अपने समीप चुपचाप खड़े हुए प्रश्न करनेकी इच्छावाले उस अग्निसे यक्षने कहा—‘तू कौन है?’ ब्रह्मके इस प्रकार पूछनेपर—‘मैं अग्नि हूँ—मैं अग्नि नामसे प्रसिद्ध जातवेदा हूँ’—इस प्रकार अग्निने दो नामसे प्रसिद्ध होनेके कारण अपनी प्रशंसा करते हुए कहा॥ ४ ॥",
    },
    commentaryEnglish:
      "Saying, `Tatha, so be it', iti, this much; Fire abhi- adravat, approached,moved, towards It, tat, towards that Yaksa. Tam, to him, to Fire, who hadapproached and was desirous of asking, but had become silent because ofabsence of arrogance in Its presence; the Yaksa, abhyavadat, said; `Kah asiiti, who are you?' Thus being asked by Brahman, Fire said, `Agnih vai, I amFire (agni) by name, and am also familiarly known as Jataveda', showingthereby his self-importance consisting in his being well known through thetwo names.",
  },
  {
    id: 18,
    Part: "Khand 3",
    mantraNumber: "5",
    shlok: {
      line1:
        "तस्मिंस्त्वयि किं वीर्यमित्यपीदं सर्वं दहेयं यदिदं पृथिव्यामिति ॥ ||५||",
    },
    translationHindi:
      "[फिर यक्षने पूछा—] ‘उस [जातवेदारूप] तुझमें सामर्थ्य क्या है?’ [अग्निने कहा—] ‘पृथिवीमें यह जो कुछ है उस सभीको जला सकता हूँ’॥ ५ ॥ ",
    translationEnglish:
      "(It said), `What power is there in you, such as you are?' (Fire said), `Ican burn up all this that is on the earth.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "इस प्रकार बोलते हुए उस अग्निसे ब्रह्मने कहा—‘ऐसे प्रसिद्ध गुण और नामवाले तुझमें क्या वीर्य—सामर्थ्य है?’ वह बोला— ‘पृथिवीपर जो यह चराचररूप जगत् है इस सबको जला सकता हूँ—भस्म कर सकता हूँ।’ ‘पृथिवीमें’ यह केवल उपलक्षणके लिये है, क्योंकि जो वस्तु आकाशमें रहती है वह भी अग्निसे जल ही जाती है॥ ५ ॥",
    },
    commentaryEnglish:
      "To him who had spoken thus, Brahman said, `Tasmin tvayi, in you whoare such. who possess such famous names and attributes; kim viryam, whatpower, what ability, is there?' He replied, `Daheyam, I can burn up, reduceto ashes; idam sarvam, all this creation that moves and does not move;prthivyam, on this earth.' The word prthivydm is used illustratively (toindicate everything), for even things that are in the region above the earthare surely consumed by fiire",
  },
  {
    id: 19,
    Part: "Khand 3",
    mantraNumber: "6",
    shlok: {
      line1:
        "तस्मै तृणं निदधावेतद्दहेति तदुपप्रेयाय सर्वजवेन तन्न शशाक दग्धुं स तत एव निववृते नैतदशकं विज्ञातुं यदेतद्यक्शमिति ॥ ||६||",
    },
    translationHindi:
      "तब यक्षने उस अग्निके लिये एक तिनका रख दिया और कहा—‘इसे जला’। अग्नि उस तृणके समीप गया, परन्तु अपने सारे वेगसे भी उसे जलानेमें समर्थ नहीं हुआ। वह उसके पाससे ही लौट आया और बोला— ‘यह यक्ष कौन है—इस बातको मैं नहीं जान सका’॥ ६ ॥ ",
    translationEnglish:
      " (Yaksa) placed a straw for him saying, `Burn this.' (Fire) approachedthe straw with the power born of full enthusiasm. He could not consume it.He returned from the Yaksa (to tell the gods), 'I could not ascertain It fullyas to what this Yaksa is.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "इस प्रकार अभिमान करनेवाले उस अग्निके लिये ब्रह्मने एक तृण रखा अर्थात् उसके आगे तृण डाल दिया। ब्रह्मके ऐसा कहनेपर कि ‘तू मेरे सामने इस तिनकेको जला; यदि तू इसे जलानेमें समर्थ नहीं है तो सर्वत्र जलानेवाला होनेका अभिमान छोड़ दे’ वह अपने सारे बल अर्थात् उत्साहकृत सम्पूर्ण वेगसे उस तृणके पास गया। किन्तु वह वहाँ जाकर भी उसे जलानेमें समर्थ न हुआ। इस प्रकार उस तिनकेको जलानेमें असमर्थ वह अग्नि हतप्रतिज्ञ होनेके कारण लज्जित होकर उस यक्षके पास-से चुपचाप देवताओंके प्रति निवृत्त हुआ—अर्थात् उनके पास लौट आया [और बोला—] ‘इस यक्षको मैं विशेषरूपसे ऐसा नहीं जान सका कि यह यक्ष कौन है?’॥ ६ ॥ ",
    },
    commentaryEnglish:
      "Tasmai, for him who had such presumption; Brahman trnam nidadhau,placed a straw, in front of Fire. Being told by Brahman, 'Etat, this merestraw; daha, burn, in my front. If you are not able to burn it, give up yourvanity as a consumer everywhere.' (Fire) tat upapreyaya, went near thatstraw; sarvajavena, with the speed born of the fullest enthusiasm. Goingthere, tat, that thing; na sasaka dagdhum, he could not burn. That Fire,being unable to burn the straw and becoming ashamed and foiled in hispromise, silently nivavrte, withdrew; tatah eva, from that Yaksa; and wentback towards the gods (to tell them), '.Na asakam, I did not succeed;vijnatum, in knowing fully; etat, this Yaksa: yat etat yaksam, as. to what thisYaksa is.",
  },
  {
    id: 20,
    Part: "Khand 3",
    mantraNumber: "7",
    shlok: {
      line1: "अथ वायुमब्रुवन् वायवेतद्विजानीहि किमेतद्यक्शमिति तथेति ॥ ||७||",
    },
    translationHindi:
      "तदनन्तर उन देवताओंने वायुसे कहा—‘हे वायो! इस बातको मालूम करो कि यह यक्ष कौन है?’ उसने कहा—‘बहुत अच्छा’॥ ७ ॥ ",
    translationEnglish:
      " Then (the gods) said to Air, '0 Air, find out thoroughly about this thingas to what this Yaksa is.' (Air said), 'So be it.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "तदनन्तर उन्होंने वायुसे कहा—‘हे वायो! इसे जानो’ इत्यादि सब अर्थ पहलेहीके समान है। [वायुको] वान अर्थात् गमन या गन्ध ग्रहण करनेके कारण ‘वायु’ कहा जाता है। ‘मातरि’ अर्थात् अन्तरिक्षमें श्वयन (विचरण) करनेके कारण वह ‘मातरिश्वा’ है। पृथिवीमें जो कुछ है मैं इस सभीको ग्रहण कर सकता हूँ—इत्यादि शेष अर्थ पहलेहीके समान है॥७—१०॥",
    },
    commentaryEnglish:
      "Then (the gods) said to Air, '0 Air, find out thoroughly about this thingas to what this Yaksa is.' (Air said), 'So be it.'",
  },{
    id: 21,
    Part: "Khand 3",
    mantraNumber: "8",
    shlok: {
      line1:
        "तदभ्यद्रवत्तमभ्यवदत् कोऽसीति वायुर्वा अहमस्मीत्यब्रवीन्मातरिश्वा वा अहमस्मीति ॥ ||८||",
    },
    translationHindi:
      "वायु उस यक्षके पास गया, उसने वायुसे पूछा—‘तू कौन है?’ उसने कहा—‘मैं वायु हूँ—मैं निश्चय मातरिश्वा ही हूँ’॥ ८ ॥ ",
    translationEnglish:
      " To It he went. To him It said, 'Who are you?' He said, 'I am known asAir, or I am Matari'sva.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "तदनन्तर उन्होंने वायुसे कहा—‘हे वायो! इसे जानो’ इत्यादि सब अर्थ पहलेहीके समान है। [वायुको] वान अर्थात् गमन या गन्ध ग्रहण करनेके कारण ‘वायु’ कहा जाता है। ‘मातरि’ अर्थात् अन्तरिक्षमें श्वयन (विचरण) करनेके कारण वह ‘मातरिश्वा’ है। पृथिवीमें जो कुछ है मैं इस सभीको ग्रहण कर सकता हूँ—इत्यादि शेष अर्थ पहलेहीके समान है॥७—१०॥",
    },
    commentaryEnglish:
      "To It he went. To him It said, 'Who are you?' He said, 'I am known asAir, or I am Matari'sva.'",
  },
  {
    id: 22,
    Part: "Khand 3",
    mantraNumber: "9",
    shlok: {
      line1:
        "तस्मिंस्त्वयि किं वीर्यमित्यपीदं सर्वमाददीय यदिदं पृथिव्यामिति ॥ ||९||",
    },
    translationHindi:
      "[तब यक्षने पूछा—] ‘उस [मातरिश्वारूप] तुझमें क्या सामर्थ्य है?’ [वायुने कहा—] ‘पृथिवीमें यह जो कुछ है उस सभीको ग्रहण कर सकता हूँ’॥ ९ ॥ ",
    translationEnglish:
      " (It said), `What power is there in you, such as you are?' (Air said), `Ican blow away all this that is on the earth.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "तदनन्तर उन्होंने वायुसे कहा—‘हे वायो! इसे जानो’ इत्यादि सब अर्थ पहलेहीके समान है। [वायुको] वान अर्थात् गमन या गन्ध ग्रहण करनेके कारण ‘वायु’ कहा जाता है। ‘मातरि’ अर्थात् अन्तरिक्षमें श्वयन (विचरण) करनेके कारण वह ‘मातरिश्वा’ है। पृथिवीमें जो कुछ है मैं इस सभीको ग्रहण कर सकता हूँ—इत्यादि शेष अर्थ पहलेहीके समान है॥७—१०॥",
    },
    commentaryEnglish:
      " (It said), `What power is there in you, such as you are?' (Air said), `Ican blow away all this that is on the earth.'",
  },
  {
    id: 23,
    Part: "Khand 3",
    mantraNumber: "10",
    shlok: {
      line1:
        "तस्मै तृणं निदधावेतदादत्स्वेति तदुपप्रेयाय सर्वजवेन तन्न शशाकादातुं स तत एव निववृते नैतदशकं विज्ञातुं यदेतद्यक्शमिति ॥ ||१०||",
    },
    translationHindi:
      "तब यक्षने उस वायुके लिये एक तिनका रखा और कहा—‘इसे ग्रहण कर।’ वायु उस तृणके समीप गया। परन्तु अपने सारे वेगसे भी वह उसे ग्रहण करनेमें समर्थ न हुआ। तब वह उसके पाससे लौट आया और बोला—‘यह यक्ष कौन है—इस बातको मैं नहीं जान सका’॥ १० ॥ ",
    translationEnglish:
      "(Yaksa) placed a straw for him saying, `Take it up.' Air approached thestraw with all the strength born of enthusiasm. He could not take it up. Hereturned from that Yaksa (to tell the gods), `I could not ascertain It fully asto what this Yaksa is.'",
    commentaryHindi: {
      vakya: "देवताओंने उसे जाननेके लिये अग्निसे कहा। अग्नि और वायुके सामने तृण रखनेमें ब्रह्मका यह अभिप्राय था कि एक तिनकेको जलाने और ग्रहण करनेमें असमर्थ होनेसे इन अत्यन्त प्रतिष्ठित अग्नि और वायुका आत्माभिमान क्षीण हो जाय॥३—१०॥",
      pad: "तदनन्तर उन्होंने वायुसे कहा—‘हे वायो! इसे जानो’ इत्यादि सब अर्थ पहलेहीके समान है। [वायुको] वान अर्थात् गमन या गन्ध ग्रहण करनेके कारण ‘वायु’ कहा जाता है। ‘मातरि’ अर्थात् अन्तरिक्षमें श्वयन (विचरण) करनेके कारण वह ‘मातरिश्वा’ है। पृथिवीमें जो कुछ है मैं इस सभीको ग्रहण कर सकता हूँ—इत्यादि शेष अर्थ पहलेहीके समान है॥७—१०॥",
    },
    commentaryEnglish:
      " Atha, after that; they said to Air; `0 Air, find out' etc. bears the samemeaning as before. Vayu (air) is so called because it blows, goes, or carriessmell. Matarisva means that which travels (sravali) in space (mdtari). Idamsarvam api, all this; ddadya, I can take up, blow away. Yad idam prthivydmetc. is just as explained earlier.",
  },
  {
    id: 24,
    Part: "Khand 3",
    mantraNumber: "11",
    shlok: {
      line1:
        "अथेन्द्रमब्रुवन् मघवन्नेतद्विजानीहि किमेतद्यक्शमिति तथेति तदभ्यद्रवत् तस्मात्तिरोदधे ॥ ||११||",
    },
    translationHindi:
      "तदनन्तर देवताओंने इन्द्रसे कहा—‘मघवन्! यह यक्ष कौन है—इस बातको मालूम करो।’ तब इन्द्र ‘बहुत अच्छा’ कह उस यक्षके पास गया, किन्तु वह इन्द्रके सामनेसे अन्तर्धान हो गया॥ ११ ॥",
    translationEnglish:
      "Then (the gods) said to Indra, `0 Maghava, find out thoroughly aboutthis thing, as to what this Yaksa is.' (He said), `So be it.' He (Indra)approached It (Yaksa). From him (Yaksa) vanished away.",
    commentaryHindi: {
      vakya: "इन्द्र आदित्य अथवा वज्रधारी देवराजका नाम है, क्योंकि दोनों ही अर्थोंमें कोर्इ विरोध नहीं है। ब्रह्म जो इन्द्रके समीप आते ही अन्तर्धान हो गया इसमें यह अभिप्राय था कि [ब्रह्मने देखा—] इसे ‘मैं इन्द्र (देवराज) हूँ’ ऐसा सोचकर सबसे अधिक अभिमान है, अत: मेरे साथ अग्नि आदिको जो वाणीका सम्भाषण- मात्र भी प्राप्त हो गया था उसके लिये भी मैं इसे प्राप्त न हो सका—ऐसा सोचकर यह किसी तरह अपना अभिमान छोड़ दे। अत: उसपर कृपा करनेके लिये ही ब्रह्म अन्तर्धान हो गया॥ ११ ॥",
      pad: "फिर देवताओंने इन्द्रसे ‘हे मघवन्! इसे जानो’ इत्यादि पूर्ववत् कहा। इन्द्र अर्थात् परमेश्वर, जो बलवान् होनेके कारण ‘मघवा’ कहा गया है, बहुत अच्छा—ऐसा कहकर उसकी ओर चला। अपने समीप आये हुए उस इन्द्रके सामनेसे वह ब्रह्म अन्तर्धान हो गया। इन्द्रका सबसे बढ़ा हुआ इन्द्रत्वका अभिमान तोड़ना चाहिये—इसलिये इन्द्रको ब्रह्मने संवादमात्रका भी अवसर नहीं दिया॥ ११ ॥ ",
    },
    commentaryEnglish:
      " Atha indram abruvan maghavan etat vijamhi etc. is to be explained asbefore. Indra, who is a great Lord and is called Maghava because ofstrength, tat abhya- dravat, approached that Yaksa. Tasmat, from him, fromIndra who had approached Itself (Yaksa) ; that Brahman, tirodadhe,vanished from sight. Brahman did not so much as grant him an interview, sothat Indra's pride at being Indra might be totally eradicated.",
  },{
    id: 25,
    Part: "Khand 3",
    mantraNumber: "12",
    shlok: {
      line1:
        "स तस्मिन्नेवाकाशे स्त्रियमाजगाम बहुशोभमानामुमां हैमवतीं तां होवाच किमेतद्यक्शमिति ॥ ||१२||",
    },
    translationHindi:
      "वह इन्द्र उसी आकाशमें [जिसमें कि यक्ष अन्तर्धान हुआ था] एक अत्यन्त शोभामयी स्त्रीके पास आया और उस सुवर्णाभूषणभूषिता [अथवा हिमालयकी पुत्री] उमा (पार्वतीरूपिणी ब्रह्मविद्या)-से बोला—‘यह यक्ष कौन है?’॥ १२ ॥ ",
    translationEnglish:
      " In that very space he approached her, the superbly charming woman,viz Uma Haimavati1. To Her (he said), `What is this Yaksa?'",
    commentaryHindi: {
      vakya: "इस प्रकार अभिमान शान्त हो जानेपर इन्द्र ब्रह्मका अत्यन्त जिज्ञासु होकर उसी आकाशमें, जिसमें कि ब्रह्मका आविर्भाव एवं तिरोभाव हुआ था, एक अत्यन्त रूपवती स्त्री—विद्या-देवीके पास आया। ब्रह्मके गुप्त हो जानेके अभिप्रायको प्रकट करनेकी कारण होनेसे वह रुद्रपत्नी हिमालयपुत्री पार्वतीके समान शोभामयी ब्रह्मविद्या ही थी, क्योंकि विद्यावान् पुरुष रूपहीन होनेपर भी बहुत शोभा पाता है॥ १२ ॥",
      pad: "वह यक्ष जिस आकाशमें—आकाशके जिस भागमें अपना दर्शन देकर तिरोहित हुआ था और उसके तिरोहित होनेके समय इन्द्र जिस आकाशमें था, वह इन्द्र यह सोचता हुआ कि ‘यह यक्ष कौन है?’ उसी आकाशमें खड़ा रहा। अग्नि आदिके समान पीछे नहीं लौटा। उस इन्द्रकी यक्षमें भक्ति जानकर स्त्रीवेषधारिणी उमारूपा विद्यादेवी प्रकट हुर्इ। वह इन्द्र उस अत्यन्त शोभामयी हैमवती उमाके पास गया। समस्त शोभायमानोंमें विद्या ही सबसे अधिक शोभामयी है; इसलिये उसके लिये ‘बहुशोभमाना’ यह विशेषण उचित ही है। हैमवती अर्थात् हेम (सुवर्ण)-निर्मित आभूषणोंवालीके समान अत्यन्त शोभामयी। अथवा हिमवान्की कन्या होनेसे उमा (पार्वती) ही हैमवती है। वह सर्वदा उस सर्वज्ञ ईश्वरके साथ वर्तमान रहती है; अत: उसे जाननेमें समर्थ होगी—यह सोचकर इन्द्र उसके पास गया, और उससे पूछा— ‘बतलाइये, इस प्रकार दर्शन देकर छिप जानेवाला यह यक्ष कौन है?’॥ १२ ॥",
    },
    commentaryEnglish:
      "The space, or the part of the space where that Yaksa vanished afterrevealing Itself, and the space where Indra also was at the time of thedisappearance of Brahman, tasmin eva akase, in that very space; sah, he,Indra, stayed on, deliberating in his mind, `What is this Yaksa?' He did notreturn like Fire etc. Understanding his devotion to Yaksa, Knowledge (ofBrahman) made Her appearance as a woman, in the form of Uma. Sah, he,Indra; ajagama, approached; tam, Her, Uma; who was bahusobhamanam,superbly charming - Knowledge being the most fascinating of allfascinating things, the attribute `superbly charming' is appropriate for it. Heapproached her, haimavafim, who was as though attired in dress of gold, i.e.exquisitely beautiful. Or, Uma Herself is Haimavati, the daughter ofHimavat (Himalayas). Thinking that, since She is ever in association withthe omniscient God, She must be able to know, Indra approached Her; (and)tam, to Her, to Uma; uvaca, said, `Tell me, kim etat yaksam iti, what is thisYaksa-that showed Itself and vanished?",
  },
  {
    id: 26,
    Part: "Khand 4",
    mantraNumber: "1",
    shlok: {
      line1:
        "सा ब्रह्मेति होवाच ब्रह्मणो वा एतद्विजये महीयध्वमिति ततो हैव विदाञ्चकार ब्रह्मेति ॥ ||१||",
    },
    translationHindi:
      "उस विद्यादेवीने स्पष्टतया कहा—‘यह ब्रह्म है’ तुम ब्रह्मके ही विजयमें इस प्रकार महिमान्वित हुए हो’। कहते हैं, तभीसे इन्द्रने यह जाना कि यह ब्रह्म है॥ १ ॥",
    translationEnglish:
      " `It was Brahman', said She. `In Brahman's victory, indeed, you becameelated thus.' From that (utterance) alone, to be sure, did Indra learn that Itwas Brahman.",
    commentaryHindi: {
      vakya: "इन्द्रने उस उमासे पूछकर उसीके वचनसे [ब्रह्मको] जाना था; अत: इन्द्रके बोधकी हेतुभूता होनेसे उमा विद्या ही है। ‘र्इश्वर विद्यासहायवान् है’ ऐसी स्मृति भी है। क्योंकि इन्द्रके विज्ञानपूर्वक अग्नि, वायु और इन्द्र—इन देवताओंने ही ब्रह्मका, उसके नेदिष्ठ अर्थात् अत्यन्त समीप पहुँचकर ब्रह्मविद्याद्वारा स्पर्श किया था—उन्हींने प्रथम यानी पहले-पहल उसे जाना था, इसलिये वे अन्य देवताओंसे बढ़े हुए हैं—उनसे अधिक देदीप्यमान होते हैं;उनमें भी इन्द्र सबसे अधिक दीप्तिमान् है, क्योंकि सबसे पहले उसे ही ब्रह्मका ज्ञान हुआ था॥१—३॥",
      pad: "उसने ‘यह ब्रह्म है’ ऐसा कहा। ‘निस्सन्देह ब्रह्म—र्इश्वरके विजयमें ही [तुम महिमाको प्राप्त हुए हो]। असुरोंको ईश्वरने ही जीता था; तुम तो उसमें निमित्तमात्र थे। अत: उसके ही विजयमें तुम्हें यह महिमा मिली है।’ मूलमें ‘एतत्’ यह क्रियाविशेषणके लिये है। ‘यह हमारी ही विजय है, यह हमारी ही महिमा है’ यह तो तुम्हारा मिथ्या अभिमान ही है। तब उमादेवीके उस वाक्यसे ही इन्द्रने जाना कि ‘यह ब्रह्म है’। ‘तत:’ पदके साथ ‘ह’ और ‘एव’ ये अव्यय निश्चय करानेके लिये ही प्रयुक्त हुए हैं। [अर्थात् उमा-देवीके वाक्यसे ही इन्द्रने ब्रह्मको जाना] स्वतन्त्रतासे नहीं॥ १ ॥ \n  क्योंकि अग्नि, वायु और इन्द्र—ये देवता ही ब्रह्मके साथ संवाद और दर्शनादि करनेके कारण उसकी समीपताको प्राप्त हुए थे—",
    },
    commentaryEnglish:
      "Sa, She; uvaca ha, said, `Brahma iti, It was Brahman. Brahmanah vaivijaye, in the victory of God, indeed: The devils were conquered only byGod, and you were mere instruments there. In the victory that was reallyHis, you mahiyadhvam, became elated, you attained glory.' The word etat,in this way, is used adverbially (to modify the verb). `But yours is thisvaingloriousness: `(Asmakam eva ayam vijayah, asmakam eva ayammahima) -ours is this victory, ours is thisglory`' (III. 2). Tatah ha eva, fromthat, from that utterance of Uma, to be sure; Indra, vidamcakara, learned;brahma iti, that It was Brahman. The emphatic limitation implied in tatah haeva, from that alone, to be sure, implies (that he came to learn) notindependently.",
  },
  {
    id: 27,
    Part: "Khand 4",
    mantraNumber: "2",
    shlok: {
      line1:
        "तस्माद्वा एते देवा अतितरामिवान्यान्देवान्यदग्निर्वायुरिन्द्रस्ते ह्येनन्नेदिष्ठं पस्पर्शुस्ते ह्येनत्प्रथमो विदाञ्चकार ब्रह्मेति ॥ ||२||",
    },
    translationHindi:
      "क्योंकि अग्नि, वायु और इन्द्र—इन देवताओंने ही इस समीपस्थ ब्रह्मका स्पर्श किया था और उन्होंने ही उसे पहले-पहल ‘यह ब्रह्म है’ ऐसा जाना था, अत: वे अन्य देवताओंसे बढ़कर हुए॥ २ ॥ ",
    translationEnglish:
      "Therefore, indeed, these gods, viz Fire, Air, and Indra, did excel othergods, for they indeed touched It most proximately, and they knew It first asBrahman",
    commentaryHindi: {
      vakya: "इन्द्रने उस उमासे पूछकर उसीके वचनसे [ब्रह्मको] जाना था; अत: इन्द्रके बोधकी हेतुभूता होनेसे उमा विद्या ही है। ‘र्इश्वर विद्यासहायवान् है’ ऐसी स्मृति भी है। क्योंकि इन्द्रके विज्ञानपूर्वक अग्नि, वायु और इन्द्र—इन देवताओंने ही ब्रह्मका, उसके नेदिष्ठ अर्थात् अत्यन्त समीप पहुँचकर ब्रह्मविद्याद्वारा स्पर्श किया था—उन्हींने प्रथम यानी पहले-पहल उसे जाना था, इसलिये वे अन्य देवताओंसे बढ़े हुए हैं—उनसे अधिक देदीप्यमान होते हैं;उनमें भी इन्द्र सबसे अधिक दीप्तिमान् है, क्योंकि सबसे पहले उसे ही ब्रह्मका ज्ञान हुआ था॥१—३॥",
      pad: "इसलिये निश्चय ही ये देवगण अपने शक्ति एवं गुण आदि महान् सौभाग्योंके कारण अन्य देवताओंसे बढ़कर हुए। ‘इव’ शब्द निरर्थक अथवा निश्चयार्थक है। क्योंकि अग्नि, वायु और इन्द्र—इन देवताओंने इस ब्रह्मका पूर्वोक्त संवाद आदि प्रकारोंसे नेदिष्ठ अर्थात् अत्यन्त निकटवर्ती एवं प्रियतम भावसे स्पर्श किया था। और उन्होंने ही इस ब्रह्मको प्रथम अर्थात् प्रधानरूपसे ‘यह ब्रह्म है’ ऐसा जाना था॥ २ ॥",
    },
    commentaryEnglish:
      "Since these gods-Fire, Air, and Indra - approached Brahman throughconversation, visualization, etc., tasmat, therefore; ete devah, these gods;alitaram iva, surpassed greatly, through their own excellence, i.e. good luckcomprising power, quality, etc.; anydn devdn, the other gods. The word ivais meaningless or is used for the sake of emphasis. Tat agnih vayuh indrah,for, (the gods) viz Fire, Air and Indra; te, they, those gods; hi, indeed,nedistham paspar- suh,t most proximately, intimately, touched; enat, thisBrahman, through the process of conversation etc. with Brahman, asdescribed earlier. Hi, because, because of the further reason that, to they;being prathamah (should be prathamah) first, i.e. being prominent;vidathcakara, (should be ridaricakruh), knew; enat, It, Brahman,--that `thisis Brahman.'",
  },
  {
    id: 28,
    Part: "Khand 4",
    mantraNumber: "3",
    shlok: {
      line1:
        "तस्माद् वा इन्द्रोऽतितरामिवान्यान्देवान्स ह्येनन्नेदिष्ठं पस्पर्श स ह्येनत्प्रथमो विदाञ्चकार ब्रह्मेति ॥ ||३||",
    },
    translationHindi:
      "इसलिये इन्द्र अन्य सब देवताओंसे बढ़कर हुआ; क्योंकि उसने ही इस समीपस्थ ब्रह्मका स्पर्श किया था—उसने ही पहले-पहल ‘यह ब्रह्म है’ इस प्रकार इसे जाना था॥ ३ ॥",
    translationEnglish:
      "Therefore did Indra excel the other deities. For he touched It mostproximately, inasmuch as he knew It first as Brahman",
    commentaryHindi: {
      vakya: "इन्द्रने उस उमासे पूछकर उसीके वचनसे [ब्रह्मको] जाना था; अत: इन्द्रके बोधकी हेतुभूता होनेसे उमा विद्या ही है। ‘र्इश्वर विद्यासहायवान् है’ ऐसी स्मृति भी है। क्योंकि इन्द्रके विज्ञानपूर्वक अग्नि, वायु और इन्द्र—इन देवताओंने ही ब्रह्मका, उसके नेदिष्ठ अर्थात् अत्यन्त समीप पहुँचकर ब्रह्मविद्याद्वारा स्पर्श किया था—उन्हींने प्रथम यानी पहले-पहल उसे जाना था, इसलिये वे अन्य देवताओंसे बढ़े हुए हैं—उनसे अधिक देदीप्यमान होते हैं;उनमें भी इन्द्र सबसे अधिक दीप्तिमान् है, क्योंकि सबसे पहले उसे ही ब्रह्मका ज्ञान हुआ था॥१—३॥",
      pad: "अत: इन्द्र इन अन्य देवताओंकी अपेक्षा भी बढ़कर हुआ, क्योंकि उसीने इसका सबसे समीपसे स्पर्श किया था—उसीने इसे सबसे पहले जाना था कि ‘यह ब्रह्म है’ इस प्रकार इस वाक्यका अर्थ पहले ही कहा जा चुका है॥ ३ ॥ ",
    },
    commentaryEnglish:
      "Since even Fire and Air knew from the words of Indra alone, and sinceIndra heard first from Uma's words that It was Brahman, tasmat vai indrahatitaram iva, therefore, Indra did excel (the other deities). Hi sah enatnedistham pasparla, for he touched It most proximately; sah hi enatprathamah vid&hcakara brahma iti - this sentence has been alreadyexplained.",
  },
  {
    id: 29,
    Part: "Khand 4",
    mantraNumber: "4",
    shlok: {
      line1:
        "तस्यैष आदेशो यदेतद्विद्युतो व्यद्युतदा इतीन्न्यमीमिषदा इत्यधिदैवतम्‌ ॥ ||४||",
    },
    translationHindi:
      "उस ब्रह्मका यह [उपासनासम्बन्धी] आदेश है। जो बिजलीके चमकनेके समान तथा पलक मारनेके समान प्रादुर्भूत हुआ वह उस ब्रह्मका अधिदैवत रूप है॥ ४ ॥ ",
    translationEnglish:
      "This is Its instruction (about meditation) through analogy. It is like thatwhich is (known as) the flash of lightning, and It is also as though the eyewinked. These are (illustrations) in a divine context.",
    commentaryHindi: {
      vakya: "उसका यह आदेश है। अर्थात् उस ब्रह्मका यह आगे कहा जानेवाला आदेश—उपासनासम्बन्धी उपदेश है। क्योंकि ब्रह्म देवताओंके सामने विद्युत्के समान सहसा (अकस्मात्) ही प्रकट हो गया था, इसलिये जो यह ब्रह्म प्रकाशमय है वह विद्युत्के प्रकाशके समान प्रकाशित हुआ। ‘आ’ का अर्थ ‘इव’ है; यह ‘आ’ शब्द उपमाके लिये है। जिस प्रकार बिजली सघन अन्धकारको विदीर्ण करके सब ओर प्रकाशित होती है उसी प्रकार वह ब्रह्म देवताओंके सामने सब ओर प्रकाशयुक्त होकर व्यक्त हुआ; इसलिये ‘वह बिजलीकी चमकके समान है’ इस प्रकार उपासना करनेयोग्य है। जैसा कि वाजसनेयक श्रुतिमें भी ‘यथा सकृद्विद्युतम्’ ऐसा कहा है। क्योंकि इन्द्रके समीप जानेके समय ब्रह्म इस प्रकार संकुचित हो गया था, मानो किसीने नेत्र मूँद लिये हों; अत: वह नेत्र मूँदनेके समान तिरोहित हुआ। इस प्रकार वह अधिदैवत ब्रह्मदर्शन है। जो दर्शन देवतासम्बन्धी होता है वह अधिदैवत कहलाता है। ‘इति’ और ‘इत्’ इन दोनों निपातोंका यहाँ कुछ अर्थ नहीं है॥ ४ ॥",
      pad: "उस प्रस्तावित ब्रह्मके विषयमें यह आदेश यानी उपमोपदेश है। जिस उपमासे उस निरुपम ब्रह्मका उपदेश किया जाता है वह ‘आदेश’ कहा जाता है। वह आदेश क्या है? यह जो लोकमें प्रसिद्ध बिजलीका चमकना है। यहाँ ‘व्यद्युतत्’ शब्दका ‘प्रकाश किया’ ऐसा अर्थ अनुपपन्न होनेके कारण ‘विद्युतो विद्योतनम्—विद्युत्- का चमकना’ ऐसा अर्थ माना जाता है। ‘आ’ यह अव्यय उपमाके लिये है। अर्थात् बिजली चमकनेके समान [ऐसा तात्पर्य है]। जैसा कि ‘यथा सकृद्विद्युतम्’ इस अन्य श्रुतिसे भी देखा जाता है, क्योंकि ब्रह्म विद्युत्के समान ही अपनेको एक बार प्रकाशित करके देवताओंके सामनेसे तिरोभूत हो गया था। अथवा ‘विद्युत:’ इस पदके आगे ‘तेज:’ पदका अध्याहार करना चाहिये। ‘व्यद्युतत्’ का अर्थ है ‘प्रकाशित हुआ’ तथा ‘आ’ का अर्थ ‘समान’ है। अत: इसका अभिप्राय यह हुआ कि ‘जो बिजलीके तेजके समान एक बार प्रकाशित हुआ।’ ‘इति’ शब्द आदेशका संकेत करनेके लिये है अर्थात् ‘यह आदेश है’ ऐसा बतलानेके लिये है, और ‘इत्’ शब्द समुच्चयार्थक है। इसके सिवा एक दूसरा आदेश यह भी है। वह क्या है? [सुनो—] जिस प्रकार नेत्र निमेष करता है, उसी प्रकार उसने भी निमेष किया। यहाँ स्वार्थमें ‘णिच्’ प्रत्यय हुआ है। ‘आ’ उपमाके ही लिये है। इस प्रकार ‘नेत्रके विषयसे प्रकाशके छिप जानेके समान’ ऐसा अर्थ हुआ। इस तरह यह ब्रह्मकी अधिदैवत—देवताविषयक उपमा दिखलायी गयी॥ ४ ॥",
    },
    commentaryEnglish:
      "Tasya, of the Brahman under discussion; esah adesah, this is theinstruction through analogy. That analogy through which the instructionabout the incomparable Brahman is imparted is called ideiah. What is that?Yat etat, that fact, which is well known among people as the flash oflightning. Since vidyutah vyadyutat, cannot mean that Brahman flashed(vyadyutat) (by borrowing Its light) from lightning, (vidyutah)2 thereforethe meaning has to be assumed to be `the flash of lightning.' A, like, is usedin the sense of com parison. The meaning is: `It is like the flash oflightning'; and (this meaning is acceptable) since it is seen in a differentVedic text, `comparable to a single flash of lightning' (Br. II. iii. 6) ; forBrahman disappeared after revealing itself but once to the gods like lightning. Or the word tejah (brilliance) has to be supplied after the wordvidyutah (of lightning). Vyadyutat (in this case) means, flashed; (and) ameans as it were. The purport is: It was as though, the brilliance oflightning flashed but once. The word iti is meant to call back to memory theword ddefa; (so the meaning is) : This is the adesa, the analogy. The word itis used for joining together. (So the sense is) : Here is another analogy forIt. What is that one? .Nyami:misat, winked, as the eye did the act ofwinking. The causative form (in nyamimisat) is used in the same sense asthe root itself. The a is used here, too, in the sense of comparison. Themeaning is : And it was like the opening and shutting of the eye with regardto its object. Iti adhi- daivatam, this is by way of showing analogies ofBrahman in a divine context.",
  },
  {
    id: 30,
    Part: "Khand 4",
    mantraNumber: "5",
    shlok: {
      line1:
        "अथाध्यात्मं यद्देतद् गच्छतीव च मनोऽनेन चैतदुपस्मरत्यभीक्श्णं सङ्कल्पः ॥ ||५||",
    },
    translationHindi:
      "इसके अनन्तर अध्यात्म-उपासनाका उपदेश कहते हैं—यह मन जो जाता हुआ-सा कहा जाता है वह ब्रह्म है—इस प्रकार उपासना करनी चाहिये, क्योंकि इससे ही यह ब्रह्मका स्मरण करता है और निरन्तर संकल्प किया जाता है॥ ५ ॥",
    translationEnglish:
      "Then is the instruction through analogy in the context of the(individual) self: This known fact, that the mind seems to go to It(Brahman), and the fact that It (Brahman) is repeatedly rememberedthrough the mind; as also the thought, (that the mind has with regard toBrahman).",
    commentaryHindi: {
      vakya: "अब आगे अध्यात्म—आत्मविषयक उपासना कही जाती है—इस प्रकार इस वाक्यमें ‘उच्यते’ यह क्रियापद शेष है। जो यह मन उपर्युक्त लक्षणोंवाले ब्रह्मके प्रति मानो जाता—प्राप्त होता अर्थात् विषय करता है [वह ब्रह्म है—इस प्रकार उपासना करनी चाहिये]। मन वस्तुत: ब्रह्मको विषय नहीं करता, क्योंकि ब्रह्म तो मनका अविषय है; इसलिये वह उसतक नहीं पहुँच सकता, जैसा कि पहले कह चुके हैं कि ‘जिससे मन मनन किया कहा जाता है।’ अत: मनका भी मन होनेके कारण ‘गच्छतीव’ (मानो जाता है) ऐसा कहा गया है। अर्थात् ब्रह्मका स्वरूपभूत होनेके कारण मन उसके समीप रहता है। क्योंकि विद्वान् इस मनसे ही उस ब्रह्मका स्मरण करता है इसलिये [मन] ब्रह्मके समीप मानो जाता है, ऐसा कहा जाता है। ब्रह्मद्वारा प्रेरित मनका ही बारम्बार संकल्प होता है। अत: तात्पर्य यह है कि स्मरण और संकल्प आदि लिंगोंसे मनकी अध्यात्म ब्रह्मस्वरूपसे उपासना करनी चाहिये॥ ५ ॥",
      pad: "इसके पश्चात् अब अध्यात्म अर्थात् प्रत्यगात्मासम्बन्धी आदेश कहा जाता है। यह जो मन जाता हुआ-सा मालूम होता है, सो वह मानो ब्रह्मको ही विषय करता है। और साधक पुरुष इस मनसे जो ब्रह्मका बारम्बार उपस्मरण—समीपसे स्मरण करता है [वह उसका अध्यात्म आदेश है]। मनका संकल्प भी ब्रह्मको ही विषय करनेवाला है। ब्रह्म मनरूप उपाधिवाला है; इसलिये मनकी संकल्प एवं स्मृति आदि प्रतीतियोंसे मानो विषय किया जाता हुआ ब्रह्म ही अभिव्यक्त होता है। अत: यह उस ब्रह्मका अध्यात्म आदेश है। विद्युत् और निमेषोन्मेषके समान ब्रह्म शीघ्र प्रकाशित होनेवाला है—यह अधिदैवत आदेश कहा गया और वह मनकी प्रतीतिके समकालमें अभिव्यक्त होनेवाला है—यह उसका अध्यात्म आदेश है। इस प्रकार उपदेश किया हुआ ब्रह्म मन्दबुद्धियोंकी समझमें आ जाता है—इसलिये यह [सोपाधिक] ब्रह्मका उपदेश है, क्योंकि मन्दबुद्धि पुरुषोंद्वारा निरुपाधिक ब्रह्मका ही ज्ञान प्राप्त नहीं किया जा सकता॥ ५ ॥",
    },
    commentaryEnglish:
      "Atha, after this; is being told the analogical instruction adhyatmam, inthe context of the soul, with regard to the indwelling Self. rat etat, thatwhich is a known fact; viz that etat, to this Brahman; gacchati iva ca manah,though the mind goes, as it were, the mind enters into Brahman, as it were,encompasses It as an object. And the fact that anena, by that mind; thespiritual aspirant; abhiksnam, repeatedly; upasmarati, remembersintimately; etat, this Brahman; and the sankalpah, thought of the mind withregard to Brahman. Since Brahman has got the mind as Its limiting adjunct,It seems to be revealed by such states of the mind as thought, memory, etc.,by which It seems to be objectified. Therefore this is an instruction aboutBrahman, through analogy, in the context of the soul. In the divine context,Brahman has the attribute of revealing Itself quickly like lightning andwinking'; and in the context of the soul, It has the attribute of manifestingItself simultaneously with the states of the mind.2 This is the instructionabout Brahman through analogy. The need for this teaching about Brahmanthrough analogy is that It becomes easily comprehensible to people of dullintellect when instruction is thus imparted. For the unconditioned Brahman,as such, cannot be comprehended by people of dull intellect.",
  }, {
    id: 31,
    Part: "Khand 4",
    mantraNumber: "6",
    shlok: {
      line1:
        "तद्ध तद्वनं नाम तद्वनमित्युपासितव्यं स य एतदेवं वेदाभि हैनम् सर्वाणि भूतानि संवाञ्छन्ति॥ ||६||",
    },
    translationHindi:
      "वह यह ब्रह्म ही वन (सम्भजनीय) है। उसकी ‘वन’—इस नामसे उपासना करनी चाहिये। जो उसे इस प्रकार जानता है उसे सभी भूत अच्छी तरह चाहने लगते हैं॥ ६ ॥",
    translationEnglish:
      " The Brahman is well known as the one adorable to all creatures:(hence) It is to be meditated on with the help of the name tadvana. Allcreatures surely pray to anyone who meditates on It in this way.",
    commentaryHindi: {
      vakya: "उस ब्रह्मकी अध्यात्म-उपासनामें गुणका विधान किया जाता है— ‘वह ब्रह्म तद्वन’ है, यानी ह ब्रह्म तत् अर्थात् परोक्ष और वन—अच्छी तरह भजन करनेयोग्य है। [वन धातुका अर्थ अच्छी प्रकार भजन करना है] तत् शब्द जिसका कर्मभूत है ऐसे वन धातुसे तद्वन शब्द सिद्ध होता है; अत: उसका ‘तद्वन’ नाम है। ब्रह्मका यह नाम गुणविशेषके कारण है। अत: इस गुणके कारण वह ‘वन है’ इस प्रकार उपासना करनेयोग्य है। वह जो कोर्इ उपर्युक्त गुणके कारण पहले कहे हुए ‘वन’ इस नामसे इसके अभिधेय ब्रह्मको जानता अर्थात् उपासना करता है उसके लिये यह फल बतलाया जाता है। इस उपासककी सभी भूत इच्छा करते हैंअर्थात् सभी उसका भजन यानी सेवा करते हैं। यह प्रसिद्ध ही है कि जैसे गुणवालेकी उपासना की जाती है वैसा ही फल होता है॥ ६ ॥",
      pad: "वह ब्रह्म निश्चय ही ‘तद्वन’ नामवाला है। ‘तस्य वनं तद्वनम्’ [इस प्रकार यहाँ षष्ठीतत्पुरुष समास है]। अर्थात् यह उस प्राणिसमूहका प्रत्यगात्मस्वरूप होनेके कारण वन—वननीय अर्थात् भजनीय है। इसलिये इसका नाम ‘तद्वन’ है। क्योंकि ब्रह्म ‘तद्वन’इस नामसे प्रसिद्ध है, इसलिये उसकी ‘तद्वन’ इस गुणव्यंजक नामसे ही उपासना—चिन्तन करना चाहिये। इस नामसे की हुर्इ उपासनाका फल बतलाते हैं—‘जो कोर्इ इस पूर्वोक्त ब्रह्मको उपर्युक्त गुणोंसे युक्त जानता अर्थात् उपासना करता है, उस उपासकसे समस्त प्राणी इसी प्रकार अपने सम्पूर्ण अभीष्ट फलोंकी इच्छा यानी प्रार्थना करने लगते हैं, जैसे कि ब्रह्मसे॥ ६ ॥ \n  एवमनुशिष्ट: शिष्य आचार्यमुवाच— इस प्रकार उपदेश पाकर शिष्यने आचार्यसे कहा—",
    },
    commentaryEnglish:
      "Further, tat, that Brahman; is ha, certainly; tadvanam nama : tadvanam isderived from the words tasya, his, and vanam, adorable; It is adorable to allcreatures, since It is their indwelling Self. Therefore Brahman is tadvanamnama, well known as the one to be adored by all beings. Since it is tadvana,therefore tadvanam iti, through this very name, tadvana, which is indicativeof Its quality; It is upasitavyam, to be meditated on. The text states theresults of meditations through this name; sah yah, anyone who; aeda,meditates on; etas, the aforesaid Brahman; exam, thus, as possessed of thequalities mentioned above; sarvani bhiitani, all beings; ha, certainly; enam,to him, this meditator; abhisam- vanchanti, pray, as (they do) to Brahman.",
  },
  {
    id: 32,
    Part: "Khand 4",
    mantraNumber: "7",
    shlok: {
      line1:
        "उपनिषदं भो ब्रूहीत्युक्ता त उपनिषद् ब्राह्मीं वाव त उपनिषदमब्रूमेति ॥ ||७||",
    },
    translationHindi:
      "[शिष्यके यह कहनेपर कि] हे गुरो! उपनिषद् कहिये [गुरुने कहा] ‘हमने तुझसे उपनिषद् कह दी। अब हम तेरे प्रति ब्राह्मणजातिसम्बन्धिनी उपनिषद् कहेंगे’॥ ७ ॥ ",
    translationEnglish:
      "(Disciple: `Sir, speak of the secret knowledge.' (Teacher) : `I have toldyou of the secret knowledge; I have imparted to you that very secretknowledge of Brahman.'",
    commentaryHindi: {
      vakya: "इस प्रकार उपनिषद् कह चुकनेपर भी जब शिष्यने कहा कि ‘उपनिषद् कहिये’ तबआचार्य बोले—‘मैंने तुझसे उपनिषद् और आत्माकी उपासना कह दी’। अब हम तुझे ब्राह्मी—ब्रह्मकी—ब्राह्मण-जातिकी उपनिषद् सुनाते हैं। यह उपनिषद् आगे कही जायगी। अबतक ब्राह्मी उपनिषद् नहीं कही गयी, आत्मासम्बन्धिनी उपनिषद् ही कही गयी है। अत: ‘अब्रूम’ इस शब्दसे भूतकालका अभिप्राय नहीं है॥ ७ ॥",
      pad: "हे भगवन्! जो चिन्तनीय उपनिषद् यानी रहस्य है वह मुझसे कहिये। शिष्यके ऐसा कहनेपर आचार्यने कहा—‘तुझसे उपनिषद् तो कह दी गयी।’ वह उपनिषद् क्या है? सो बतलाते हैं—हमने तेरे प्रति ब्राह्मी— ब्रह्म यानी परमात्मसम्बन्धिनी उपनिषद् ही कही है, क्योंकि पूर्वकथित विज्ञान परमात्मसम्बन्धी ही था। ‘वाव’— निश्चय ही ‘ते उपनिषदमब्रूम’ इस वाक्यके द्वारा पहले कही हुर्इ उपनिषद्को ही लक्ष्य करके ‘मैंने तुमसे परमात्मसम्बन्धिनी उपनिषद् ही कही है’ इस प्रकार* अगले ग्रन्थका विषय स्पष्ट करनेके लिये निश्चय करते हैं। यहाँ परमात्मविषयिणि उपनिषद्को सुन चुकनेवाले शिष्यका ‘उपनिषद् कहिये’ इस प्रकार प्रश्न करनेमें क्या अभिप्राय है? यदि उसने सुनी हुर्इ बातके विषयमें ही पुन: प्रश्न किया है तो उसका पुन: कहना पिष्टपेषण (पिसे हुएको पीसने)-के समान निरर्थक ही है। और यदि पहले कही हुर्इ उपनिषद् असम्पूर्ण होती तो ‘इस लोकसे प्रयाण करनेके अनन्तर वे अमर हो जाते हैं’ इस प्रकार फल बतलाते हुए उसका उपसंहार करना उचित न होता। अत: पूर्वोक्त उपनिषद्के अवशिष्ट (कहनेसे बचे हुए) अंशके सम्बन्धमें प्रश्न करना भी अयुक्त ही है, क्योंकि उसमें कोर्इ बात कहनेसे छोड़ी नहीं गयी। तो फिर प्रश्नकर्ताका क्या अभिप्राय हो सकता है? इसपर कहा जाता है— पहले जो उपनिषद् कही गयी है उसके अवशेषरूपसे किन्हीं अन्य सहकारी साधनोंकी अपेक्षा है अथवा वह सर्वथा निरपेक्षा ही कही गयी है? यदि वह सापेक्षा है तो अपेक्षित विषय-सम्बन्धिनी उपनिषद् कहिये और यदि उसे किसीकी अपेक्षा नहीं है तो पिप्पलादके समान* इससे पर और कुछ नहीं है—इस प्रकार निर्धारण कीजिये—यह शिष्यके प्रश्नका अभिप्राय है। अत: आचार्यका ‘तुझसे उपनिषद् कह दी गयी’ यह अवधारणवाक्य ठीक ही है। शंका—यह अवधारणवाक्य नहीं हो सकता, क्योंकि ‘तस्यै तपो दम:’ इत्यादि आगामी वाक्यद्वारा कुछ और कहनेयोग्य बात कही गयी है। समाधान—ठीक है, आचार्यने एक दूसरे कथनीय विषयको तो कहा है; तथापि उसे पूर्वोक्त उपनिषद्के अवशेषरूप अथवा अन्य सहकारी साधनरूपसे नहीं कहा। बल्कि ब्रह्मविद्याकी प्राप्तिके उपाय बतलानेके ही अभिप्रायसे कहा है, क्योंकि मन्त्रमें वेद और उनके अंगोंके साथ तप आदिका पाठ करके उनसे इनकी समानता प्रकट की गयी है; क्योंकि वेद और शिक्षादि वेदांग ब्रह्मविद्याके साक्षात् शेषभूत अथवा उसके सहकारी साधन नहीं हो सकते। [अत: इनके साथ पाठ होनेसे तप आदि भी विद्याके अंग या साधन सिद्ध नहीं होते]। शंका—किन्तु [वेद-वेदांगोंके] साथ-साथ पढ़े हुए होनेपर भी तप आदिका भी सम्बन्धके अनुसार विभाग करके प्रयोग किया जा सकता है। अर्थात् जिस प्रकार सूक्तवाकरूप अनुमन्त्रण मन्त्रोंका उनके देवताओं- के अनुसार विभाग किया जाता है* उसी प्रकार तप, दम, कर्म और सत्यादिको भी ब्रह्मविद्याका शेषभूत अथवा सहकारी साधन माना जा सकता है। वेद और उनके अंग अर्थके प्रकाशक होनेसे कर्म और आत्मज्ञानके साधन हैं—इस प्रकार अर्थके सम्बन्धकी उपपत्तिके सामर्थ्यसे उनका ऐसा विभाग उचित ही है। ऐसा मानें तो? समाधान—युक्तिसंगत न होनेके कारण ऐसा मानना ठीक नहीं, क्योंकि ऐसा विभाग प्रस्तुत प्रसंगके अनुकूल नहीं है। सब प्रकारकी क्रिया कारक फल और भेदबुद्धिका तिरस्कार करनेवाली ब्रह्मविद्यामें किसी प्रकारके शेषकी अपेक्षा अथवा उचित सहकारी साधनका सम्बन्ध मानना ठीक नहीं है, क्योंकि ब्रह्मविद्या और उसका फल नि:श्रेयस—ये सब प्रकारके विषयोंसे निवृत्त होकर प्रत्यगात्मारूप विषयमें स्थित होनेवाले हैं। [कहा भी है—] ‘मोक्षकी इच्छा करनेवाला पुरुष सर्वदा साधनसहित कर्मोंको त्याग दे। त्याग करनेसे ही त्यागीको अपने प्रत्यगात्मरूप परमपदका ज्ञान हो सकता है’ अत: कर्मको ज्ञानकी सहकारिता अथवा ज्ञानको कर्मका शेष होनेकी अपेक्षा सम्भव नहीं है। अत: सूक्तवाकरूप अनुमन्त्रणके समान इन तप आदिका भी सम्बन्धके अनुसार विभाग हो सकता है—ऐसा विचार मिथ्या ही है। अत: [शिष्यके उपर्युक्त] प्रश्नका जो उत्तर है वह [उपदेशकी समाप्तिका] अवधारण करनेके लिये है—ऐसा मानना ही ठीक है। अर्थात् अमरत्व-प्राप्तिके लिये किसी अन्य साधनकी अपेक्षासे रहित इतनी ही उपनिषद् कही गयी है॥ ७ ॥",
    },
    commentaryEnglish:
      "After being instructed thus, the disciple said to the teacher, `Bhoh, sir;bruhi, speak of upanisadam, the secret thing that is to be thought about'; iti.To the student who had sp(ukcn thus, the teacher said, `Te, to you;upanisad, the secret knowledge; ukta, has been spoken of.' `What is thatagain?'-to such a question he answers, `Te, to you; upanisadam vava abrumaiti, I have spoken this very secret; brahmim, relating to Brahman, to thesupreme Self-since the knowledge already imparted relates to the supremeSelf.' For the sake of (distinguishing) what follows, the teacher delimits (histeaching) thus: `The Upanisad that I have told you consists of nothing butwhat has already been presented as the Upanisad of the supreme Self.' \n Objection: What motive could have prompted the disciple, who hadheard the Upanisad about the supreme Self, to put this question: `Sir, speakof the Upanisad'? If, now, the question related to what had been alreadyheard, then it is useless, inasmuch as it involved a repetition like thegrinding over again of what had already been ground. If, again, the earlierUpanisad was incomplete, then it was not proper to conclude it bymentioning its result thus: `Having turned away from this world, theintelligent ones become immortal' (II. 5). Hence the question is surelyimproper even if it relates to some unexplained portion of the Upanisadalready presented, inasmuch as no remainder was left over. What then is theintention of the questioner? \n Answer: We say that this is the intention (of the disciple) : `Does thesecret teaching already imparted need anything as an accessory, or does itnot need any? If it does, tell me of the secret teaching with regard to thatneeded accessory. Or if it does not, then like Pippalada make the clinchingassertion: `There is nothing beyond this` (Pr. VI. 7).' Thus this clincher ofthe teacher; `I have told you the Upanisad' is justified. \n  Objection: May it not be urged that this is not a concluding remark,inasmuch as the teacher has something more to add in the statement:`Concentration, cessation from sense-objects, rites, etc. are its legs' etc. (IV.8). \n Answer: It is true that a fresh matter is introduced by the teacher; but thisis not done either by way of bringing in something as an attributiveconstituent (sera of the Upanisad or as an accessory (sahakari) to it,1 butrather as a means for the acquisition of the knowledge of Brahman, becausetapas (concentration) etc., occurring as they do in the same passage alongwith the Vedas and their supplementaries, are given an equal status with thelatter, and because neither the Vedas nor the science of pronunciation andeuphony (siksa) etc., which are their supplementaries, can directly be eitherattributive constituents of the knowledge of Brahman or its helpfulaccessories. \n Objection : Should not even things that occur in the same passage be putto separate uses according to their appropriateness? Just as the mantras,occurring at the end of a sacrifice, in the form of a hymn meant for theinvocation of (many) deities, are applied with respect to the individualdeities concerned, similarly it can be imagined that concentration, selfcontrol, rites, truth, etc., will either be attributive constituents of theknowledge of Brahman or be helpful accessories (in accordance with theirrespective appropriateness).! As for the Vedas and their subsidiaries, theyare means for either knowledge of the Self or rites by virtue of theirrespective meanings (ideas). In this way this division becomes appropriatewhen significance of words, relation (of things denoted), and reason aretaken into consideration. Suppose we advance such an argument? \n Answer: No, because this is illogical. This division does not certainlyaccord with facts, because it is not reasonable that the knowledge ofBrahman, which repels all ideas of distinction of deeds, doers, and results,should have dependence on any attributive constituent, or any relation withany helpful accessory, and because the knowledge of-Brahman and itsresult, freedom, are concerned only with the Self which is unassociated withany object. `He who wants emancipation should for ever give up all workstogether with their instruments, because it is known only by the man ofrenunciation. The state of the supreme Reality that is the same as theindwelling Self is attained by the man of renunciation.' Thereforeknowledge cannot reasonably have work either as an accessory or as acomplement. Therefore the division of (concentration etc.) on the analogyof the invocation through hymn, occurring at the end of a sacrifice, is quiteinappropriate. Hence it is proper to say that the question and the answer aremeant for fixing a limit thus: `The secret teaching that has been impartedextends thus far only; it is adequate for the attainment of knowledgewithout depending on anything else. ",
  },
  {
    id: 33,
    Part: "Khand 4",
    mantraNumber: "8",
    shlok: {
      line1:
        "तस्यै तपो दमः कर्मेति प्रतिष्ठा वेदाः सर्वाङ्गानि सत्यमायतनम्‌ ॥ ||८||",
    },
    translationHindi:
      "उस (ब्राह्मी उपनिषद्)-की तप, दम, कर्म तथा वेद और सम्पूर्ण वेदांग—ये प्रतिष्ठा हैं एवं सत्य आयतन है॥ ८ ॥ ",
    translationEnglish:
      "Concentration, cessation from sense-objects, rites, etc., are its legs; theVedas are all its limbs; truth is its abode.",
    commentaryHindi: {
      vakya: "उस आगे कही जानेवाली उपनिषद्की तप—ब्रह्मचर्यादि, दम—इन्द्रियनिग्रह तथा अग्निहोत्रादि कर्म—ये सब प्रतिष्ठा—आश्रय हैं। इनके होनेपर ही ब्राह्मी उपनिषद् प्रतिष्ठित हुआ करती है। चारों वेद तथा सम्पूर्ण वेदांग भी प्रतिष्ठा ही हैं। इस प्रकार [‘वेदा: सर्वाङ्गानि’ के आगे] ‘प्रतिष्ठा’ पदकीअनुवृत्ति की जाती है। क्योंकि विद्या ब्रह्म (वेद)-के ही आश्रय रहनेवाली है। सत्य अर्थात् दूसरेको पीड़ा न पहुँचानेवाला यथार्थ वचन आयतन—निवासस्थान है, क्योंकि सत्यवान् पुरुषोंमें ही उपर्युक्त साधन आयतनके समान स्थित हैं॥ ८ ॥",
      pad: "तुम्हारे सामने जिस ब्राह्मी उपनिषद्का वर्णन किया है उस पूर्वकथित उपनिषद्की प्राप्तिके उपायभूत तप आदि हैं। शरीर, इन्द्रिय और मनके समाधानका नाम तप है। दम उपशम (विषयोंसे निवृत्त होने)-को कहते हैं। और कर्म अग्निहोत्रादि हैं। इनके द्वारा संस्कारयुक्त हुए पुरुषोंको ही चित्तशुद्धिद्वारा तत्त्वज्ञानकी उत्पत्ति होती देखी गयी है। जिनका मनोमल निवृत्त नहीं हुआ है उन पुरुषोंको तो उपदेश दिया जानेपर भी ब्रह्मके विषयमें अज्ञान अथवा विपरीत ज्ञान होता देखा गया है, जैसे इन्द्र और विरोचन आदिको। अत: इस जन्ममें अथवा बीते हुए अनेकों जन्मोंमें जिनका चित्त तप आदिसे शुद्ध हो गया है उन्हें ही श्रुत्युक्त ज्ञान उत्पन्न होता है। ‘जिसकी भगवान्में अत्यन्त भक्ति हैऔर जैसी भगवान्में है वैसी ही गुरुमें भी है उस महात्माको ही ये पूर्वोक्त विषय प्रकाशित होते हैं’ इस मन्त्रवर्णसे तथा ‘पापकर्मोंके क्षीण होनेपर पुरुषोंको ज्ञान उत्पन्न होता है’ इस स्मृतिसे भी यही प्रमाणित होता है।[मूल मन्त्रमें] ‘इति’ शब्द [अन्य साधनोंका] उपलक्षणत्व प्रदर्शित करनेके लिये है। अर्थात् इसी प्रकार ज्ञानकी उत्पत्ति करनेवाले ‘अमानित्व अदम्भित्व’ आदि अन्य साधन भी प्रदर्शित हो जाते हैं। ‘प्रतिष्ठा’ चरणोंको कहते हैं अर्थात् ये चरणोंके समान इसके आधारभूत हैं। जिस प्रकार पुरुष अपने चरणोंपर स्थित होकर व्यापार करता है उसी प्रकार इन साधनोंके रहते हुए ही ब्रह्मविद्या स्थित और प्रवृत्त होती है। ऋक् आदि चार वेद और शिक्षा आदि छ: अंग [भी प्रतिष्ठा] हैं। कर्म और ज्ञानके प्रकाशक होनेके कारण वेदोंको और उनकी रक्षाके कारणभूत होनेसे वेदांगोंको ब्रह्मविद्याकी प्रतिष्ठा कहा गया है। अथवा ‘प्रतिष्ठा’ शब्दकी चरण-रूपसे कल्पना की गयी है; इसलिये वेद उस ब्रह्मविद्याके सिर आदि अन्य सम्पूर्ण अंग हैं। इस पक्षमें शिक्षा आदिका वेदका ग्रहण करनेसे ही ग्रहण किया समझ लेना चाहिये। क्योंकि अंगीके अधीन ही अंग होते हैं इसलिये अंगीके गृहीत होनेपर उसके अंग भी गृहीत हो ही जाते हैं।सत्य आयतन है। जहाँ वह उपनिषद् स्थित होती है वही उसका आयतन है। वाणी, मन और शरीरकी अमायिकता यानी अकुटिलताका नाम ‘सत्य’ है। जो लोग अमायावी और साधु (शुद्धस्वभाव) होते हैं उन्हींमें ब्रह्मविद्या आश्रय लेती है, आसुरी प्रकृतिवाले मायावियोंमें नहीं, जैसा कि ‘जिनमें कुटिलता, मिथ्या और माया नहीं है’ इत्यादि श्रुतिसे सिद्ध होता है। अत: सत्य उसका आयतन है—ऐसी कल्पना की जाती है। तप आदिमें ही प्रतिष्ठारूपसे प्राप्त हुए सत्यको फिर आयतनरूपसे ग्रहण करना उसका अतिशय साधनत्व प्रदर्शित करनेके लिये है। ‘सहस्र अश्वमेध और सत्य तराजूमें रखे जानेपर सहस्र अश्वमेधोंकी अपेक्षा अकेला सत्य ही विशेष ठहरता है’ इस स्मृतिसे भी यही प्रमाणित होता है॥ ८ ॥",
    },
    commentaryEnglish:
      "Concentration etc. are the means for the acqui sition, tasyai, (should betasynh), of that secret teaching (Upanisad), regarding Brahman which I thusspoke before you. Tapah, the concentration of the body, the senses, and themind; damah, cessation (from senseobjects) ; karma, rites, Agnihotra etc.(are the means) ; for it is found that the knowledge of Brahman arises in aman who has attained the requisite holiness by means of purification of theheart through these. For it is a matter of experience that, even thoughBrahman is spoken of, there is either non-comprehension ormiscomprehension in the case of one who has not been purged of his sin, asfor instance, in the cases of Indra and Virocana (Ch. VIII. vii-xii). Thereforeknowledge, as imparted by the Vedas, dawns on one whose mind has beenpurified by concentration etc., either in this life or in many past ones, as ismentioned by the Vedic verse: `These things get revealed when spoken tothat high-souled man who has supreme devotion towards the Effulgent One,and the same devotion to his teacher as to the Effulgent One' (Sv. VI. 23).And this is borne out by the Smrti, 'Knowledge dawns on a man on theeradication of sinful acts.' (Mbh.Sa. 204.8). The word iti is used to drawattention to a synecdoche; that is to say, by the word iti are suggested otherfactors, beginning with these, which are helpful to the rise of knowledge,such as `Humility, unpretentiousness,' etc. (G. xiii. 7). (Concentration etc.are the) pratistha, two legs, stands as it were, of this (Upanisad) ; for whenthese exist, knowledge of Brahman stands firm and becomes active, just asa man does with his legs. Vedah, the four Vedas; and sarvd gani, all the sixsubsidiaries beginning with the science of pronunciation and euphony(.siksa) (are also the legs). The Vedas are the legs because they reveal therites and knowledge; and all the angdni, subsidiaries, are so because theyare meant for the protection of the Vedas. Or since the word pratistha hasbeen imagined to imply the two legs (of the knowledge), the Vedas are itssarvangani, all the other limbs beginning with the head. In this case, the subsidiaries, such as the science of pronunciation and euphony, are to beunderstood to have been mentioned by the word Vedas; because when theprincipal factor is mentioned, the subsidiaries are mentioned ipso facto,they being dependent on the principal. Satyam ayatan- am, satya is theayatana, the dwelling place where the secret teaching resides. Satya meansfreedom from deceit and crookedness in speech, mind, and body; forknowledge abides in those who are free from deceit and who are holy, andnot in those who are devilish by nature and are deceitful, as the Vedic textsays, `those in whom there are no crookedness falsehood and deceit' (Pr. I.16). Therefore satya (truth) is imagined as the abode. Although byimplication, truth has already been mentioned as legs, along withconcentration etc., still its allusion again as the abode is for indicating that,as a means (for the acquisition of knowledge) it excels others, as the Smrtisays, `A thousand horse-sacrifices and truth are weighed in a balance: andone truth outweighs a thousand horsesacrifices' (V. Sm. 8).",
  },
  {
    id: 34,
    Part: "Khand 4",
    mantraNumber: "9",
    shlok: {
      line1:
        "यो वा एतामेवं वेदापहत्य पाप्मानमनन्ते स्वर्गे लोके ज्येये प्रतितिष्ठति प्रतितिष्ठति ॥ ||९||",
    },
    translationHindi:
      "जो निश्चयपूर्वक इस उपनिषद्को इस प्रकार जानता है वह पापको क्षीण करके अनन्त और महान् स्वर्गलोकमें प्रतिष्ठित होता है, प्रतिष्ठित होता है॥ ९ ॥ ",
    translationEnglish:
      "Anyone who knows this thus, he, having dispelled sin, remains firmlyseated in the boundless, blissful, and highest Brahman. He remains firmlyseated (there).",
    commentaryHindi: {
      vakya: "तप आदि अंगोंवाली और उन्हींपर प्रतिष्ठित इस ब्राह्मी उपनिषद्को, जो कि आत्मज्ञानकी हेतुभूत है, जो उसके आयतनके सहित इस प्रकार यथावत् जानता है—जो उसका अनुवर्तन यानी अनुष्ठान करता है उसके लिये यह फल बतलाया गया है। वह पापको क्षीण करके अर्थात् धर्म और अधर्मका क्षय करके जिसका अन्त न हो उस स्वर्गलोकमें अर्थात् दु:खरहित आनन्दप्राय और अनन्त—अपार अर्थात्ज्येष्ठ—महान् यानी सबसे बड़े परब्रह्ममें प्रतिष्ठित हो जाता है। अर्थात् सम्पूर्ण वेदान्तवाक्योंसे वेद्य ब्रह्मको आत्मभावसे जानकर उसी ब्रह्मको प्राप्त हो जाता है॥ ९ ॥",
      pad: "‘केनेषितम्’ इत्यादि वाक्यद्वारा कही हुर्इ तथा ‘ब्रह्म ह देवेभ्य:’ आदि आख्यायिकाद्वारा स्तुत इस महाभागा और सम्पूर्ण विद्याओंकी आश्रयभूता ब्रह्मविद्याको जो पुरुष जानता है वह पापको छोड़कर अर्थात् अविद्या, कामना और कर्मरूप संसारके बीजको त्यागकर अनन्त—जिसका कोर्इ पार नहीं है उस स्वर्गलोकमें अर्थात् सुखस्वरूप ब्रह्ममें, जो ज्येय—बड़ा अर्थात् सबसे महान् है उस अपने मुख्य आत्मामें स्थित हो जाता है। तात्पर्य यह है कि वह फिर संसारको प्राप्त नहीं होता। ‘अमृतत्वं हि विन्दते’ इस वाक्यद्वारा पहले ब्रह्मविद्याका फल कह भी दिया है, तो भी इस वाक्यद्वारा उसका अन्तमें फिर उपसंहार करते हैं। ‘अनन्त’ ऐसा विशेषण होनेके कारण ‘स्वर्गे लोके’ से देवलोक नहींसमझना चाहिये; क्योंकि उसमें भी उपचारसे ‘अनन्त’ शब्दकी प्रवृत्ति हो सकती है, इसलिये ‘ज्येये’ यह विशेषण दिया गया है॥ ९ ॥ ",
    },
    commentaryEnglish:
      "Yah vai, anyone who; veda exam, realizes thusas spoken; etam, thisthing, this blessed knowledge of Brahman which has been already spokenof in the text beginning with `Willed by whom' (I. 1), which has beeneulogized in the text beginning with, `It was Brahman indeed' (III. 1), andwhich is `the basis of all knowledge' (Mu. I. i. 1) -. Notwithstanding thepresentation of the fruit of the knowledge of Brahman in `because therebyone gets immortality' (II. 4), it is mentioned at the end by way of a formalcon- clusion:-(Such a knower) apahatya papmanam, dispelling sin, shakingoff the seed of mundane existence constituted by ignorance, desire, andwork; /ratitisthati, remains firmly seated; anante, in the boundless; svarge lake: Svarge lake means in Brahman who is all Bliss. Being qualified by theword ananta, boundless, the word svarga does not mean heaven. Lest theword boundless (ananta), be taken in any secondary sense, the text saysjyeye, in the higher, that which is greater than all, in one's own Self which isboundless in the primary sense. The purport is. that he does not again returnto this world.",
  }
];

function KenaUpnishad() {
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
                    {currentMantra?.Part ?? ""}
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
                <h2 className="text-2xl font-bold">Kena Upanishad</h2>
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
                      <span>{currentMantra?.Part ?? ""}</span>
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
                        {selectedLanguageCommentry === "hindi" ? (
                          <div>
                            <p className="mb-3">
                              <strong>पद भाष्य:</strong>
                              {(currentMantra?.commentaryHindi?.pad ?? "")
                                .split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))}
                            </p>
                            <p>
                              <strong>वाक्य भाष्य:</strong>
                              {(currentMantra?.commentaryHindi?.vakya ?? "")
                                .split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))}
                            </p>
                          </div>
                        ) : (
                          <p>
                            {(currentMantra?.commentaryEnglish ?? "")
                              .split("\n")
                              .map((line, index) => (
                                <React.Fragment key={index}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                          </p>
                        )}
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

export default KenaUpnishad;
