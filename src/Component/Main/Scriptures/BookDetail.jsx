import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookDetail() {
  // Accessing parameters from the URL
  const { category, id } = useParams();
  const navigate = useNavigate();
  const formatDescription = (description) => {
    let formattedDescription = description?.replace(/\n/g, "<br /> <br />");
    formattedDescription = formattedDescription?.replace(
      /'([^']*)'/g,
      "<b>$1</b>"
    );
    return formattedDescription;
  };
  // Assuming you have the book data available in the same file or fetched from an API
  // Replace this with your actual book data or fetching logic
  const books = {
    Vedas: [
      {
        id: 1,
        name: "Rigveda",
        src: "https://m.media-amazon.com/images/I/51mDE-WDILL.jpg",
        description:
          "'The Rigveda' is one of the most ancient and revered scriptures of Hinduism, written in Vedic Sanskrit. It is a collection of 1,028 hymns (suktas) organized into 10 books (mandalas). The Rigvedas hymns are primarily composed of prayers and praises dedicated to various deities, reflecting different aspects of nature and life. These hymns are not just religious texts but also offer profound insights into the spiritual, philosophical, and cultural life of the Vedic people. \n 'Main Deities Celebrated in the Rigveda:' \n  'Indra:' The god of war and rain, Indra is the most frequently mentioned deity in the Rigveda. He is celebrated for his strength, courage, and victories over demons. Indra is often depicted as a heroic figure who protects humanity and brings rains for agriculture. \n 'Agni:' The god of fire, Agni is central to Vedic rituals and sacrifices. He acts as a mediator between humans and gods, carrying offerings to the divine. Agni is also seen as a purifier and is invoked in domestic and public ceremonies. \n   'Varuna:' The god of water and cosmic order, Varuna upholds the laws of the universe and ensures moral order. He is associated with the night sky and the celestial ocean, symbolizing the moral and natural laws that govern the world.  \n 'Surya:' The sun god, Surya symbolizes light, knowledge, and the dispeller of darkness. Surya is revered as the source of life and energy, and his daily journey across the sky is a recurring theme in the hymns. \n 'Soma:' Both a sacred ritual drink and the deity associated with it, Soma is linked to immortality, inspiration, and divine ecstasy. The Soma rituals are among the most elaborate and significant in the Vedic tradition. \n      ",
      },
      {
        id: 2,
        name: "Samaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/samaveda.jpg",
        description:
          " The Samaveda, one of the four Vedas of Hinduism, holds a significant place in ancient Indian scriptures.  Unlike the Rigveda, which primarily consists of hymns meant for recitation, the Samaveda is characterized by its musical form, with many of its verses set to melodies for chanting during rituals. \n  'Deities Celebrated in the Samaveda:' \n 'Agni:' As in other Vedas, Agni, the god of fire, plays a central role in Samavedic rituals. He symbolizes purity and serves as a mediator between humans and the divine. \n 'Indra:' Revered as the god of war and rain, Indras valor and strength are celebrated in the Samaveda, where hymns praise his victories and protective qualities.\n 'Soma:' Central to Samavedic rituals is the worship of Soma, a sacred plant and deity associated with immortality, inspiration, and divine ecstasy. Soma rituals involve the pressing and consumption of the Soma plants juice as a sacred offering. \n  'Ushas:' The goddess of dawn, Ushas is celebrated in Samavedic hymns for her beauty, radiance, and role in bringing light and vitality to the world. \n 'Agni, Indra, and Soma' are particularly prominent in the Samaveda, reflecting the importance of fire sacrifices, warfare, and the ritualistic consumption of Soma in Vedic society. \n  ",
      },
      {
        id: 3,
        name: "Yajurveda",
        src: "https://m.media-amazon.com/images/I/51fkgWsI+qL.jpg",
        description:
          "The Yajurveda, one of the four Vedas of Hinduism, occupies a central position in ancient Indian scriptures.  the Yajurveda is renowned for its emphasis on rituals and sacrificial ceremonies, providing detailed instructions for performing various rites. \n 'Deities Celebrated in the Yajurveda:' \n  'Agni:' Revered as the god of fire, Agni holds a prominent place in Yajurvedic rituals, symbolizing purity and serving as a conduit between humans and the divine. Offerings to Agni play a crucial role in sacrificial ceremonies. \n 'Indra:' As the god of war and rain, Indra is celebrated in the Yajurveda for his valor, strength, and role in protecting the cosmos from malevolent forces. Hymns dedicated to Indra invoke his blessings and assistance in battles and conflicts. \n 'Varuna:' Upholding cosmic order and moral righteousness, Varuna is invoked in Yajurvedic rituals to ensure the fulfillment of vows and the maintenance of ethical conduct. Varunas role as a guardian of natural laws and cosmic justice is highlighted in hymns and prayers. \n 'Soma:' While Soma is primarily associated with the Samaveda, the Yajurveda also contains references to Soma rituals and the sacred drinks significance in Vedic ceremonies. Soma is revered for its ability to confer immortality and divine inspiration upon those who partake in its rituals. \n 'Agni and Indra' are particularly prominent in the Yajurveda, reflecting the importance of fire sacrifices and warfare in Vedic society. ",
      },
      {
        id: 4,
        name: "Atharvaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/Atharvaveda.jpg",
        description:
          "The Atharvaveda, named after the Vedic sage Atharvan, stands as one of the four ancient sacred texts of Hinduism, collectively known as the Vedas.  Unlike the other Vedas, which primarily consist of hymns and rituals dedicated to deities, the Atharvaveda presents a diverse compilation of hymns, incantations, spells, and charms. This Veda encompasses a broad spectrum of subjects, ranging from spiritual and philosophical inquiries to practical concerns of everyday life. \n 'Deities Celebrated in the Atharvaveda:' \n 'Agni:' Revered as the god of fire, Agni plays a pivotal role in Vedic rituals, serving as a conduit between mortals and the divine, symbolizing purity and facilitating domestic and public ceremonies. \n 'Indra:' As the god of war and rain, Indras valor and victories over demons make him a central figure, often depicted as a protector and bringer of agricultural prosperity. \n  'Rudra:' Celebrated as a fierce aspect of Shiva, Rudra embodies both destruction and regeneration, symbolizing the cyclical nature of existence. \n 'Asuras and Devas:' The Atharvaveda addresses the conflict between the Asuras (demons) and Devas (gods), reflecting the eternal struggle between good and evil. \n 'Rita and Dharma:' Concepts of cosmic order (Rita) and moral righteousness (Dharma) find prominence, emphasizing the importance of living in harmony with divine laws and ethical principles. \n  ",
      },
    ],
    Upanishad: [
      {
        id: 1,
        name: "Isha Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/uak245.jpg",
        description:
          "The Isha Upanishad, a concise yet profound text within Hindu scriptures, explores fundamental questions about existence and spirituality in just 18 verses. It delves into the nature of the self (atman) and the universe (brahman), emphasizing their interconnectedness. \n The Upanishad stresses the importance of detachment from material desires and urges individuals to seek spiritual enlightenment. It advocates for a life of ethical conduct and inner fulfillment rather than pursuit of transient pleasures. \n Through its teachings, the Isha Upanishad encourages seekers to realize the divine essence within themselves and to transcend the cycle of birth and death (samsara) by attaining liberation (moksha). It serves as a guide for spiritual seekers, offering timeless wisdom for navigating life's deeper truths.",
      },
      {
        id: 2,
        name: "Kena Upanishad",
        src: "https://sanatan.in/cdn/shop/products/68_1.jpg?v=1656756815",
        description:
          "The Kena Upanishad is an ancient philosophical text associated with the Samaveda. Its name comes from the Sanskrit word `Kena`, meaning `by whom` or `by what`. This Upanishad delves deeply into the concepts of nature, Brahman (the universal consciousness), and Atman (the individual self). \n In this scripture, there is profound contemplation on the nature of reality, the significance of Brahman, and the essence of the self. It employs various analogies and examples to elucidate the deeper truths it explores. \n The Kena Upanishad describes Brahman as formless, infinite, and imperishable, the ultimate source of all existence. It emphasizes the importance of knowledge and the realization of the self, enabling individuals to comprehend their true nature and unity with the divine.",
      },
      {
        id: 3,
        name: "Katha Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa057.jpg",
        description:
          "The Katha Upanishad is a significant philosophical text embedded within the Krishna Yajurveda. It derives its name from the sage Katha, to whom its teachings are traditionally attributed. This Upanishad comprises a series of philosophical dialogues between the young seeker Nachiketa and the god of death, Yama. \n The Katha Upanishad delves into profound inquiries regarding the nature of existence, the purpose of life, and the path to spiritual liberation. It explores themes such as the transient nature of the physical world, the eternal nature of the soul (Atman), and the journey from ignorance to enlightenment. \n Through allegorical narratives and metaphysical discourse, the Upanishad elucidates the concept of the eternal Self (Atman) that transcends the cycles of birth and death. It emphasizes the importance of spiritual knowledge (vidya) over worldly pursuits (avidya) and the significance of understanding the true essence of existence. \n Ultimately, the Katha Upanishad serves as a guide for seekers on the path of self-realization, offering profound insights into the nature of reality and the eternal quest for liberation (moksha) from the cycle of rebirth (samsara).",
      },
      {
        id: 4,
        name: "Prashna Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa044.jpg",
        description:
          "The Prasna Upanishad, associated with the Atharvaveda, is a significant philosophical text that elaborates on spiritual knowledge and philosophy. Its name, `Prasna, translates to question or inquiring, as it is renowned for its question-and-answer format. \n In this Upanishad, a dialogue unfolds between a seeker (shishya) and a teacher (guru), wherein the seeker poses a series of profound questions regarding the nature of reality, existence, and the self. The guru responds with insightful explanations and teachings, elucidating the deeper truths of spiritual wisdom. \n Through this dialogue, the Prasna Upanishad explores various philosophical themes such as the nature of Brahman (the universal consciousness), the concept of Atman (the individual self), and the path to self-realization and liberation (moksha). \n Overall, the Prasna Upanishad serves as a guide for seekers on the quest for spiritual enlightenment, offering profound insights into the fundamental aspects of existence and the journey towards realizing one's true nature.",
      },
      {
        id: 5,
        name: "Mundaka Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa051.jpg",
        description:
          "The Mundaka Upanishad, found within the general Brahmana texts of the Atharvaveda, articulates various spiritual and Vedantic principles. It attempts to illuminate the path of spiritual realization, which is directed towards the attainment of liberation (moksha). \n One of the primary subjects addressed in the Mundaka Upanishad is the distinction between Vidya (knowledge) and Avidya (ignorance). Here, Vidya refers to spiritual knowledge, the truth of the self, and the experience of the ultimate reality (paramaatma), while Avidya represents ignorance or the lack of spiritual understanding. \n The Upanishad elucidates the importance of acquiring Vidya, which leads to the realization of the true self and liberation from the cycle of birth and death. It emphasizes the significance of seeking guidance from a qualified spiritual teacher (guru) and engaging in practices such as meditation, self-inquiry, and contemplation to attain spiritual wisdom.",
      },
      {
        id: 6,
        name: "Mandukya Upanishad",
        src: "https://m.media-amazon.com/images/I/A1o5c0y+tlL._AC_UF894,1000_QL80_.jpg",
        description:
          "The Mandukya Upanishad is an ancient philosophical text found in the general Brahmana texts of the Atharvaveda. Though short, it delves deeply into the profound spiritual knowledge concerning the Atman (the individual self) and Brahman (the ultimate reality). \n This Upanishad primarily focuses on the nature of reality and the relationship between the individual self and the universal consciousness. It expounds upon the concept of the four states of consciousness: waking (jagrat), dreaming (swapna), deep sleep (shushupti), and the fourth state beyond them, known as Turiya, which represents the state of pure consciousness or transcendence. \n The Mandukya Upanishad is revered for its concise yet comprehensive exploration of the nature of existence and the essence of consciousness, making it a foundational text in the study of Vedanta and Advaita philosophy.",
      },
      {
        id: 7,
        name: "Taittiriya Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa049.jpg",
        description:
          "The Taittiriya Upanishad is a significant ancient philosophical text belonging to the Krishna Yajurveda. It comprises three chapters, known as 'Vallis', each focusing on distinct aspects of spiritual knowledge and practice. \n The first Valli, known as Shiksha Valli, emphasizes the importance of proper conduct, ethical principles, and the pursuit of knowledge. It delineates the stages of student life (Brahmacharya) and underscores the significance of acquiring wisdom under the guidance of a competent teacher (Guru). \n The second Valli, known as Brahmananda Valli, expounds upon the nature of Brahman, the ultimate reality, and the interconnectedness of all beings. It discusses various spiritual practices, including meditation and contemplation, aimed at realizing the unity of the individual soul (Atman) with Brahman. \n The third Valli, known as Bhrigu Valli or Ananda Valli, explores the nature of bliss (Ananda) and the journey of the soul through different states of consciousness. It concludes with the profound revelation that the essence of the universe and the individual self is the same Brahman, transcending all duality. \n The Taittiriya Upanishad is revered for its comprehensive exposition of spiritual teachings, ethical values, and the path to self-realization, making it a fundamental scripture in the Vedantic tradition.",
      },
      {
        id: 8,
        name: "Aitareya Upanishad",
        src: "https://sanatan.in/cdn/shop/products/72-copy-2_1.jpg?v=1656336366",
        description:
          "The Aitareya Upanishad is one of the principal Upanishads belonging to the Rigveda. It is divided into three chapters, each known as 'Khanda,' and is renowned for its profound philosophical insights and spiritual teachings.\n In the first chapter, the Aitareya Upanishad expounds upon the creation of the universe and the nature of the ultimate reality, Brahman. It describes the process of creation as emanating from Brahman, with the universe manifesting in various forms. \n The second chapter delves into the nature of the individual self (Atman) and its relationship with Brahman. It elucidates the concept of the self as identical with the ultimate reality, emphasizing the unity of all existence. \n The third chapter discusses the nature of consciousness and the journey of the soul through different states of existence, including waking, dreaming, and deep sleep. It highlights the eternal nature of the self and its transcendence beyond the cycle of birth and death. \n Overall, the Aitareya Upanishad provides profound insights into the nature of reality, the self, and the ultimate truth, serving as a foundational text in the study of Vedanta and Hindu philosophy.",
      },
      {
        id: 9,
        name: "Chandogya Upanishad",
        src: "https://m.media-amazon.com/images/I/51cz7ToCbZL._AC_UF1000,1000_QL80_.jpg",
        description:
          "The Chandogya Upanishad, belonging to the Samaveda, is among the oldest and most extensive Upanishads. Comprising eight chapters, or 'Prapathakas,' it encompasses a broad spectrum of philosophical and spiritual themes. \n This Upanishad is renowned for its profound teachings on the fundamental unity of the individual self (Atman) and the universal consciousness (Brahman). It employs various metaphors and analogies to elucidate the nature of reality and the intricate relationship between the individual soul and the supreme reality. \n Moreover, the Chandogya Upanishad delves into discussions regarding meditation techniques, ritual practices, and ethical principles. It underscores the significance of self-realization attained through disciplined spiritual practices under the guidance of an enlightened teacher (Guru). \n Overall, the Chandogya Upanishad stands as a cornerstone text in the Vedantic tradition, revered for its deep philosophical insights, spiritual wisdom, and practical guidance on the path to self-discovery and liberation (moksha).",
      },
      {
        id: 10,
        name: "Brihadaranyaka Upanishad",
        src: "https://m.media-amazon.com/images/I/41M3QpHxkCS._SY445_SX342_.jpg",
        description:
          "The Brihadaranyaka Upanishad, one of the oldest and most extensive Upanishads, is a profound philosophical text belonging to the Shukla Yajurveda. It consists of six chapters, each containing a series of discourses and dialogues that delve into the deepest questions of existence. \n This Upanishad is renowned for its comprehensive exploration of metaphysical concepts, ethical principles, and spiritual practices. It covers a wide range of topics, including the nature of reality, the self (Atman), and the ultimate reality (Brahman). \n The Brihadaranyaka Upanishad contains profound philosophical dialogues between sages and spiritual seekers, including famous conversations such as the one between Yajnavalkya and Maitreyi. These dialogues illuminate the nature of consciousness, the significance of self-inquiry, and the path to spiritual liberation. \n Moreover, this Upanishad also discusses various rituals, sacrifices, and meditative practices aimed at realizing the unity of the individual soul with the supreme reality. It emphasizes the importance of ethical conduct, renunciation, and devotion on the path to self-realization. \n Overall, the Brihadaranyaka Upanishad stands as a seminal text in the Vedantic tradition, offering profound insights into the nature of existence and the means to transcendental realization. It continues to inspire seekers of truth and spiritual aspirants across generations with its timeless wisdom and profound teachings.",
      },
      {
        id: 11,
        name: "Shvetashvatara Upanishad",
        src: "https://sanatan.in/cdn/shop/products/73-copy-3.jpg?v=1651300907",
        description:
          "The Shvetashvatara Upanishad is a significant philosophical text within the corpus of ancient Indian scriptures, belonging to the Krishna Yajurveda. Comprising of six chapters, it explores profound metaphysical concepts and spiritual insights. \n This Upanishad is named after the sage Shvetashvatara, to whom it is traditionally attributed. It presents a synthesis of various philosophical traditions prevalent during its time, including Vedanta, Shaivism, and Yoga. \n The Shvetashvatara Upanishad expounds upon the nature of ultimate reality (Brahman), describing it as the eternal, all-pervading consciousness that underlies the entire universe. It elucidates the relationship between the individual soul (Atman) and Brahman, asserting the identity of the two as the core principle of spiritual realization. \n Moreover, this Upanishad discusses the nature of creation, the cycles of existence, and the path to liberation (moksha). It outlines various spiritual practices, including meditation, devotion, and the study of scriptures, as means to attain self-realization and transcendental wisdom. \n The Shvetashvatara Upanishad is revered for its poetic language, profound philosophical insights, and timeless spiritual wisdom. It continues to inspire seekers on the path of self-discovery and serves as a guiding light in the journey towards the realization of ultimate truth and liberation.",
      },
    ],
    Epics: [
      {
        id: 1,
        name: "Ramayana Hindi",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855656449.webp",
        description:
          "'रामायण', प्राचीन भारत की दो महान कथाओं में से एक, एक अज्ञात समय की कहानी है जो दुनिया भर में पाठकों को प्रेरित करती है और आकर्षित करती है। महर्षि वाल्मीकि को लिखित माना जाता है, यह भगवान विष्णु के अवतार श्रीराम के जीवन और उनके यात्रा की कहानी है, जो धर्म (धर्म) को स्थापित करने और अन्याय का नाश करने के लिए होती है। \n 'पृष्ठभूमि:' 'रामायण' का लेखन लगभग 7 हजार ईसा पूर्व से 10 हजार ईसा पूर्व के बीच किया गया था, हालांकि इसकी उत्पत्ति और भी पहले की हो सकती है। हिन्दू कोसमोलॉजी में द्वितीय युग (त्रेता युग) में स्थित आधिकारिक किंगडम कोसला में सेट किया गया, जो वर्तमान उत्तर प्रदेश, भारत में स्थित है। यह श्रीराम, उनकी भक्ति भावनाओं की पत्नी सीता, और उनके वफादार भाई लक्ष्मण के मध्यम से परिपट्ति करता है, साथ ही दिव्य और मानवीय प्राणियों के एक समूह के चारों ओर घूमता है। \n 'संक्षिप्त विवरण:' 'रामायण' को सात कांडों (पुस्तकों) में विभाजित किया गया है, जो प्रत्येक के जीवन की एक महत्वपूर्ण घटना का चित्रण करता है: \n 'बालकाण्ड (बचपन की पुस्तक):' राम की जन्म, उनका राजकुमार के रूप में पालन-पोषण, और सीता से विवाह का परिचय देता है। \n 'अयोध्याकाण्ड (अयोध्या की पुस्तक):' राम के निवास की वनवास के बारे में, उनकी सौतेली माता कैकेयी की षड़यंत्र के पश्चात और राजा दशरथ के उत्तेजन के बाद की शोक की धारा। \n 'अरण्यकाण्ड (वन की पुस्तक):' राम के वनवास में जीवन, उनके विभिन्न ऋषियों और राक्षसों के साथ सामना, और राक्षस राजा रावण द्वारा सीता के हरण की कहानी को चित्रण करता है। \n 'किष्किंधाकाण्ड (किष्किंधा की पुस्तक):' हनुमान, राम के निष्ठावान सेवक के कार्यों पर ध्यान केंद्रित है, जो लंका में सीता के कहाँ होने का पता लगाता है। \n 'सुंदरकांड (सुंदरता की पुस्तक):' हनुमान के कार्यों पर ध्यान केंद्रित होता है, जो राम के निष्ठावान सेवक के कार्यों को लंका में सीता के कहाँ होने का पता लगाता है। \n 'युद्धकाण्ड (युद्ध की पुस्तक):' राम और रावण के बीच की अपवाद युद्ध की महाकाव्यिक युद्ध की कथा है, जिसका समापन आखिरी में रावण की हार और सीता के बचाव के साथ होता है। \n 'उत्तरकाण्ड (समाप्तिक एपिसोड की पुस्तक):' राम का अयोध्या की वापसी, उनका राज्याभिषेक, और सीता के साथ मिलन, उसके बाद उनकी पत्नी सीता के द्वारा अग्नि की परीक्षा और अंत में पृथ्वी में वापसी की कथा देती है।",
      },
      {
        id: 2,
        name: "Ramayana English",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e4cbfce.webp",
        description:
          "'The Ramayana', one of the two 'great epics' of ancient India, is a timeless saga that continues to inspire and captivate readers across the world. Attributed to the sage Valmiki, it narrates the life and adventures of Lord Rama, an incarnation of the god Vishnu, and his journey to uphold dharma (righteousness) and defeat evil. \n 'Background:' The Ramayana is believed to have been composed around 7 O O O BCE to 1 O O O O BCE, although its origins may date back even further. Set in the Treta Yuga (the second age in Hindu cosmology), the epic unfolds in the ancient kingdom of Kosala, located in present-day Uttar Pradesh, India. It revolves around the central characters of Rama, his devoted wife Sita, and his loyal brother Lakshmana, along with a host of divine and mortal beings. \n 'Synopsis:' The Ramayana is divided into seven kandas (books), each depicting a significant phase of Rama`s life: \n 'Balakanda (The Book of Childhood):' Introduces Rama`s birth, his princely upbringing, and his marriage to Sita. \n 'Ayodhyakanda (The Book of Ayodhya):' Focuses on the exile of Rama to the forest, following the plotting of his stepmother Kaikeyi, and the subsequent grief of King Dasharatha. \n 'Aranyakanda (The Book of the Forest):' Chronicles Rama`s life in exile, his encounter with various sages and demons, and the kidnapping of Sita by the demon king Ravana. \n 'Kishkindhakanda (The Book of Kishkindha):' Describes Rama`s alliance with the monkey king Sugriva, the search for Sita, and the slaying of the demon king Vali. \n 'Sundarakanda (The Book of Beauty):' Focuses on the exploits of Hanuman, the faithful servant of Rama, who discovers Sita`s whereabouts in Lanka. \n 'Yuddhakanda (The Book of War):' Narrates the epic battle between Rama and Ravana, culminating in the latter`s defeat and the rescue of Sita. \n 'Uttarakanda (The Book of the Concluding Episode):' Chronicles Rama`s return to Ayodhya, his coronation as king, and the reunion with Sita, followed by her trial by fire and eventual return to the earth. \n",
      },
      {
        id: 3,
        name: "Mahabharata Hindi",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855e7085d.webp",
        description:
          "महाभारत, जिसे अक्सर 'भारत का महाकाव्य' कहा जाता है, विश्व की सबसे लंबी और सम्मानित किताबों में से एक है। प्राचीन भारत में रची गई यह कहानी, मानव अस्तित्व, नैतिकता, कर्तव्य, और अच्छे और बुरे के बीच की चिंताओं पर विचार करती है। 1 O O , O O O श्लोकों से अधिक की रचना के साथ, महाभारत सिर्फ राजा और योद्धाओं की कहानी नहीं है, बल्कि यह ज्ञान और दार्शनिक दृष्टिकोणों का एक स्रोत है जो पीढ़ियों को प्रेरित करता है और सम्मोहित करता है। \n 'पृष्ठभूमि:' महाभारत को महर्षि व्यास का श्रुति रूप माना जाता है, जिन्हें कहा जाता है कि उन्होंने गणेश भगवान को इस महाकाव्य को बताया। माना जाता है कि यह 3 O O O ईसा पूर्व और 35 O O ईसा पूर्व के बीच रचा गया था। प्राचीन भारत के कुरुक्षेत्र नामक राज्य में स्थित, यह कथा कुरु वंश के जीवन का अनुसरण करती है, जिसमें मुख्य रूप से पांडवों और कौरवों के बीच का संघर्ष है। \n 'संक्षिप्त विवरण:' महाभारत कुरु वंश के नक्षत्र में जन्मित पांडवों की उत्पत्ति के साथ शुरू होती है। कथा उन पांडवों और कौरवों के बीच विवाद के साथ विकसित होती है, जिनमें राजा पांडु के पांच पुत्र और राजा धृतराष्ट्र के सैकड़ों पुत्र शामिल हैं। \n पांडवों के नेतृत्व में न्यायसंगत युधिष्ठिर, उन्हें अपने राज्य को पुनः प्राप्त करने के लिए निरंतर संघर्ष, जैसे कि निर्वासन, धोखाधड़ी, और युद्ध का सामना करना पड़ता है। उनके साथ भगवान कृष्ण, दिव्य रथसंयानी और मेंटर, हैं, जो पांडवों को आध्यात्मिक ज्ञान और मार्गदर्शन देते हैं, खासकर भगवद गीता के शिक्षणों के माध्यम से। \n अभिमानी दुर्योधन के नेतृत्व में कौरवों का लोभ, ईर्ष्या, और धोखाधड़ी का प्रतिनिधित्व करता है, जो एक बेहद प्रसिद्ध पासा खेल के अंत में समाप्त होता है जिसमें पांडव अपने राज्य को हारते हैं और निर्वासन में मजबूर होते हैं। \n सुलझाव के प्रयासों के बावजूद, राजनीति विफल होती है, और महान कुरुक्षेत्र युद्ध के लिए मंच बिछाया जाता है। यह युद्ध, जो कथा के उच्चारण है, एक प्रलयात्मक संघर्ष है जो पूरे भारतवर्ष को अपनी भव्यता में ले लेता है। यह गहन बहसों, तीव्र युद्धों, और वीरता और त्याग के कार्यों के लिए पृष्ठभूमि के रूप में काम करता है। अंततः, पांडव विजयी होते हैं, लेकिन भारी हानि और नैतिक संदेहों के बिना नहीं।",
      },
      {
        id: 4,
        name: "Mahabharata English",
        src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
        description:
          "The Mahabharata, often referred to as the 'Great Epic of India,' stands as one of the world`s longest and most revered pieces of literature. Composed in ancient India, it is a sweeping narrative that delves into the complexities of human existence, morality, duty, and the eternal struggle between good and evil. Spanning over 100,000 verses, the Mahabharata is not just a tale of kings and warriors but a reservoir of wisdom and philosophical insights that continue to inspire and captivate readers across generations. \n 'Background:'  The Mahabharata is traditionally attributed to the sage Vyasa, who is said to have dictated the epic to the god Ganesha. It is believed to have been composed between 3000 BCE and 3500 BCE. Set in the ancient kingdom of Kurukshetra, located in present-day Haryana, India, the epic follows the lives of the Kuru dynasty, focusing primarily on the conflict between two groups of cousins—the Pandavas and the Kauravas. \n  'Synopsis:' The Mahabharata begins with the birth of the Kuru princes, who are descendants of the lunar dynasty. The story unfolds with the rivalry between the Pandavas, the five sons of King Pandu, and the Kauravas, the hundred sons of King Dhritarashtra. The central conflict arises over the rightful succession to the throne of Hastinapura, leading to a bitter power struggle between the two factions. \n The Pandavas, led by the righteous Yudhishthira, face numerous trials and tribulations, including exile, deceit, and war, as they strive to reclaim their kingdom. Alongside them is Krishna, the divine charioteer and mentor, who imparts spiritual wisdom and guidance to the Pandavas, particularly through the teachings of the Bhagavad Gita. \n The Kauravas, led by the ambitious Duryodhana, embody greed, jealousy, and treachery, culminating in the infamous game of dice where the Pandavas lose their kingdom and are forced into exile. Despite repeated attempts at reconciliation, diplomacy fails, and the stage is set for the great Kurukshetra War. \n The war, which forms the climax of the epic, is a cataclysmic conflict that engulfs the entire Bharata (India) in its wake. It serves as the backdrop for profound dialogues, fierce battles, and acts of heroism and sacrifice. Ultimately, the Pandavas emerge victorious, but not without heavy losses and moral dilemmas.",
      },
      {
        id: 5,
        name: "Mahabharata Bori-CE",
        src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
        description:
          "The Mahabharata, often referred to as the 'Great Epic of India,' stands as one of the world`s longest and most revered pieces of literature. Composed in ancient India, it is a sweeping narrative that delves into the complexities of human existence, morality, duty, and the eternal struggle between good and evil. Spanning over 100,000 verses, the Mahabharata is not just a tale of kings and warriors but a reservoir of wisdom and philosophical insights that continue to inspire and captivate readers across generations. \n 'Background:'  The Mahabharata is traditionally attributed to the sage Vyasa, who is said to have dictated the epic to the god Ganesha. It is believed to have been composed between 3000 BCE and 3500 BCE. Set in the ancient kingdom of Kurukshetra, located in present-day Haryana, India, the epic follows the lives of the Kuru dynasty, focusing primarily on the conflict between two groups of cousins—the Pandavas and the Kauravas. \n  'Synopsis:' The Mahabharata begins with the birth of the Kuru princes, who are descendants of the lunar dynasty. The story unfolds with the rivalry between the Pandavas, the five sons of King Pandu, and the Kauravas, the hundred sons of King Dhritarashtra. The central conflict arises over the rightful succession to the throne of Hastinapura, leading to a bitter power struggle between the two factions. \n The Pandavas, led by the righteous Yudhishthira, face numerous trials and tribulations, including exile, deceit, and war, as they strive to reclaim their kingdom. Alongside them is Krishna, the divine charioteer and mentor, who imparts spiritual wisdom and guidance to the Pandavas, particularly through the teachings of the Bhagavad Gita. \n The Kauravas, led by the ambitious Duryodhana, embody greed, jealousy, and treachery, culminating in the infamous game of dice where the Pandavas lose their kingdom and are forced into exile. Despite repeated attempts at reconciliation, diplomacy fails, and the stage is set for the great Kurukshetra War. \n The war, which forms the climax of the epic, is a cataclysmic conflict that engulfs the entire Bharata (India) in its wake. It serves as the backdrop for profound dialogues, fierce battles, and acts of heroism and sacrifice. Ultimately, the Pandavas emerge victorious, but not without heavy losses and moral dilemmas.",
      },
      {
        id: 6,
        name: "Ramcharitmanas",
        src: "/cover.jpeg",
        description:
          "'रामचरितमानस', गोस्वामी तुलसीदास द्वारा रचित एक महाकाव्य, भारतीय साहित्य का एक अनमोल रत्न है। यह महाकाव्य भगवान श्रीराम के जीवन और उनके आदर्शों की गाथा है, जो हमें धर्म, मर्यादा, और नैतिकता के महत्व को सिखाती है। तुलसीदास ने इस महाकाव्य को अवधी भाषा में लिखा, जिससे यह जन-जन तक पहुंचा और हिंदू धर्म की सांस्कृतिक धरोहर का अभिन्न अंग बन गया। \n 'पृष्ठभूमि:' रामचरितमानस की रचना 16वीं शताब्दी में हुई थी। यह महाकाव्य रामायण पर आधारित है, जिसे महर्षि वाल्मीकि ने संस्कृत में लिखा था। तुलसीदास ने इसे लोकभाषा में लिखकर भगवान राम की कथा को सामान्य जन के लिए सुलभ बनाया। यह कथा अयोध्या के राजा दशरथ के पुत्र राम के जीवन की महागाथा है, जिसमें उनके वनवास, सीता का हरण, और रावण के साथ युद्ध शामिल है। \n 'संरचना:' रामचरितमानस को सात कांडों में विभाजित किया गया है, जो भगवान राम के जीवन के विभिन्न चरणों का वर्णन करते हैं: \n 'बालकाण्ड:' राम के जन्म, उनका बाल्यकाल, और जनकपुर में माता सीता के साथ विवाह की कथा। इस कांड में राम, लक्ष्मण, भरत, और शत्रुघ्न के बचपन के आदर्श प्रस्तुत किए गए हैं। \n 'अयोध्याकाण्ड:' राम के राज्याभिषेक की तैयारी, कैकेयी द्वारा वनवास की माँग, और राम, सीता, और लक्ष्मण का वन गमन। यह कांड राजा दशरथ की मृत्यु और भरत की अयोध्या वापसी की घटनाओं का भी वर्णन करता है। \n 'अरण्यकाण्ड:' राम, सीता, और लक्ष्मण के वनवास का वर्णन। इस कांड में शूर्पणखा की घटना, सीता का हरण, और जटायु के साथ राम का मिलन शामिल है। \n 'किष्किंधाकाण्ड:' हनुमान और सुग्रीव से राम का मिलन, बालि वध, और सीता की खोज के लिए वानरों की सेना का संगठन। यह कांड हनुमान की लंका यात्रा का प्रारंभ है। \n 'सुंदरकांड:' हनुमान की लंका यात्रा, सीता का पता लगाना, और लंका में हनुमान के अद्भुत पराक्रम का वर्णन। यह कांड हनुमान की वीरता और भक्ति का उदाहरण प्रस्तुत करता है। \n 'लंकाकाण्ड:' राम और रावण के बीच महान युद्ध, रावण वध, और सीता की मुक्ति। इस कांड में विभीषण की सहायता और लंका विजय का वर्णन है। \n 'उत्तरकाण्ड:' राम की अयोध्या वापसी, राज्याभिषेक, और रामराज्य की स्थापना। इस कांड में सीता की अग्नि परीक्षा, लव-कुश की कथा, और तुलसीदास की भक्ति का वर्णन है। \n",
      },
    ],
    Geeta: [
      {
        id: 1,
        name: "Bhagavad Gita",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/tatavavavacana-vashashhata-sasakaranae1644392839.webp",
        description:
          "भगवद गीता, जिसे अक्सर गीता के रूप में जाना जाता है, हिंदू धर्म का एक पवित्र शास्त्र है और यह दुनिया के सबसे प्रभावशाली दार्शनिक और आध्यात्मिक पाठों में से एक है। यह महाभारत का हिस्सा है, \n 'भगवद गीता के मुख्य विषय और शिक्षाएं:' \n 'धर्म:' भगवद गीता धर्म की अवधारणा को अध्यात्मिक एवं राजनीतिक संदर्भ में समझाता है। यह जीवन के कर्तव्य और नैतिकता के महत्व को समझाता है, जिसमें कर्मयोग (निःस्वार्थ कर्म की योग), भक्तियोग (भक्ति की योग) और ज्ञानयोग (ज्ञान की योग) के माध्यम से आत्मा का उद्धार बताया गया है। \n 'आत्मा:' भगवद गीता में आत्मा के स्वरूप और उसके ब्रह्म से संबंध को अच्छी तरह से समझाया गया है। यह आत्मा की अनन्तता को प्रमुख धारणा के रूप में उद्घाटित करता है, जो जन्म और मृत्यु से परे है, और मोक्ष के प्राप्ति के लिए आत्मज्ञान की महत्वपूर्णता को उपलब्ध कराता है। \n 'कृष्ण की शिक्षाएं:' भगवद गीता में भगवान कृष्ण और योद्धा अर्जुन के बीच हुई बातचीत को कथात्मक ढंग से प्रस्तुत किया गया है। कृष्ण ने अर्जुन के संदेह और उसकी चिंताओं को धर्म और कर्तव्य के संदर्भ में समझाया है। \n 'विश्वव्यापी संदेश:' भगवद गीता के संदेश का धार्मिक और मानवीय संदेश है जो सभी धर्मों, सम्प्रदायों और विचारधाराओं को प्रेरित करता है। इसकी शिक्षाएं धर्म, भक्ति और आत्म-रियासत के संदेशों के माध्यम से विश्वव्यापी साधना और आध्यात्मिक विकास के लिए प्रेरित करती हैं। ",
      },
      // {
      //   id: 2,
      //   name: "Bhagavad Gita English",
      //   src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e26cea0.webp",
      //   description:"The Bhagavad Gita, often referred to as the Gita, is a revered scripture of Hinduism and stands as one of the most influential philosophical and spiritual texts in the world. \n 'Central Themes and Teachings of the Bhagavad Gita:' \n 'Dharma:' The Bhagavad Gita explores the concept of dharma, often translated as duty or righteousness. It emphasizes the importance of fulfilling one`s duty according to one`s role and station in life, without attachment to the fruits of action. \n 'Yoga:' The Gita elucidates various paths of yoga, including Karma Yoga (the yoga of selfless action), Bhakti Yoga (the yoga of devotion), and Jnana Yoga (the yoga of knowledge). Each path is presented as a means to attain spiritual realization and liberation. \n 'The Self:' At its core, the Bhagavad Gita teaches the nature of the self (Atman) and its relationship to the ultimate reality (Brahman). It emphasizes the eternal nature of the soul, which transcends birth and death, and the importance of self-realization for attaining liberation (moksha). \n 'Krishnas Teachings:' The dialogue between Lord Krishna and the warrior prince Arjuna forms the narrative framework of the Bhagavad Gita. Krishna imparts timeless wisdom and guidance to Arjuna on the battlefield of Kurukshetra, addressing his doubts and dilemmas about righteousness and duty. \n 'Universal Message:' While rooted in the context of a historical battle, the Bhagavad Gita`s teachings transcend time and place, offering profound insights into the human condition and the path to spiritual fulfillment. Its teachings on duty, devotion, and self-realization resonate with people of all backgrounds and beliefs. \n 'Impact and Significance:' The Bhagavad Gita has had a profound influence on philosophy, literature, and spirituality worldwide. Its teachings have inspired countless individuals seeking guidance on life's purpose, moral dilemmas, and spiritual growth. It continues to be studied, revered, and celebrated for its timeless wisdom and universal appeal. "
      // },
      {
        id: 3,
        name: "Anu Gita Hindi",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        description:
          "अनुगीता, जो महाभारत का एक महत्वपूर्ण हिस्सा है, भगवद गीता के बाद आता है और इसमें अर्जुन और भगवान श्रीकृष्ण के बीच संवाद होता है। यह ग्रंथ भी दार्शनिक और आध्यात्मिक शिक्षाओं का संग्रह है, जो भगवद गीता की शिक्षाओं को विस्तार और गहराई प्रदान करता है। \n 'अनुगीता के मुख्य विषय और शिक्षाएं:' \n 'धर्म:' अनुगीता धर्म की गहरी और विस्तृत व्याख्या करती है। इसमें जीवन के कर्तव्यों और नैतिकता पर बल दिया गया है, जिसमें निःस्वार्थ कर्म (कर्मयोग), भक्ति (भक्तियोग), और ज्ञान (ज्ञानयोग) के माध्यम से आत्मा के उद्धार का महत्व बताया गया है।\n 'आत्मा:'अनुगीता आत्मा के स्वरूप और उसकी अनंतता को प्रमुखता से उजागर करती है। इसमें आत्मा के जन्म और मृत्यु से परे होने और आत्मज्ञान के माध्यम से मोक्ष प्राप्ति की बात कही गई है। आत्मा और परमात्मा के संबंध को भी विस्तार से समझाया गया है।\n 'कृष्ण की शिक्षाएं:' अनुगीता में भगवान कृष्ण ने अर्जुन के साथ हुई संवाद में धर्म, कर्तव्य, और जीवन के विभिन्न पहलुओं पर गहन विचार प्रस्तुत किए हैं। इसमें भगवद गीता की शिक्षाओं को आगे बढ़ाते हुए और भी गहरी और विशद शिक्षाएं दी गई हैं।\n 'अध्यात्मिक मार्गदर्शन:' अनुगीता का संदेश धार्मिक, आध्यात्मिक और मानवतावादी है। यह सभी धर्मों, सम्प्रदायों और विचारधाराओं के लोगों को प्रेरित करता है। इसकी शिक्षाएं आत्म-जागरूकता, धर्म, और भक्ति के माध्यम से जीवन में संतुलन और शांति प्राप्त करने के लिए मार्गदर्शन प्रदान करती हैं।\n 'विश्वव्यापी संदेश:' अनुगीता का संदेश सभी मानवता के लिए है। यह न केवल धार्मिक और आध्यात्मिक विकास की बात करता है, बल्कि व्यक्ति के भीतर आत्मिक शक्ति और संतुलन को बढ़ावा देने के लिए भी प्रेरित करता है। इसकी शिक्षाएं हर व्यक्ति के जीवन में सकारात्मक परिवर्तन लाने की क्षमता रखती हैं।\n इस प्रकार, अनुगीता भी भगवद गीता की तरह ही एक महत्वपूर्ण दार्शनिक और आध्यात्मिक ग्रंथ है, जो जीवन के विभिन्न पहलुओं पर गहन मार्गदर्शन प्रदान करता है।",
      },
      {
        id: 4,
        name: "Anu Gita English",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        description:
          "The Anugita, an important part of the Mahabharata, follows the Bhagavad Gita and features a dialogue between Arjuna and Lord Krishna. This text is also a collection of philosophical and spiritual teachings that expand and deepen the teachings of the Bhagavad Gita. \n 'Main Themes and Teachings of the Anugita:'\n Dharma: The Anugita provides a deep and detailed explanation of dharma. It emphasizes the importance of duties and ethics in life, highlighting the significance of selfless action (karma yoga), devotion (bhakti yoga), and knowledge (jnana yoga) for the salvation of the soul.\n 'Soul:' The Anugita prominently reveals the nature and eternity of the soul. It discusses the souls transcendence beyond birth and death and the importance of self-realization for attaining moksha (liberation). The relationship between the soul and the Supreme Soul is also elaborately explained. \n 'Teachings of Krishna:' In the Anugita, Lord Krishna engages in a dialogue with Arjuna, presenting deep reflections on dharma, duty, and various aspects of life. These teachings build upon and further elaborate on the lessons of the Bhagavad Gita.\n 'Spiritual Guidance:' The message of the Anugita is religious, spiritual, and humanistic. It inspires people of all religions, sects, and ideologies. Its teachings provide guidance on achieving balance and peace in life through self-awareness, dharma, and devotion.\n 'Universal Message:' The Anugitas message is for all humanity. It speaks not only of religious and spiritual development but also of promoting inner strength and balance within individuals. Its teachings have the potential to bring positive changes to everyone's life.\n Thus, like the Bhagavad Gita, the Anugita is also a significant philosophical and spiritual text that offers profound guidance on various aspects of life.",
      },
      {
        id: 8,
        name: "Astavakra Geeta English",
        src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        description:
          "The Ashtavakra Gita, also known as the Ashtavakra Samhita, is a classical Hindu scripture that is renowned for its profound spiritual and philosophical teachings. It stands as one of the most significant texts in Advaita Vedanta, offering deep insights into the nature of the self and ultimate reality. \n 'Central Themes and Teachings of the Ashtavakra Gita:' \n 'Non-Dualism:' The Ashtavakra Gita is fundamentally rooted in the philosophy of Advaita (non-dualism). It teaches that the individual self (Atman) and the ultimate reality (Brahman) are one and the same. The text emphasizes the unity of all existence and the illusory nature of the phenomenal world (Maya). \n 'Self-Realization:' At the heart of the Ashtavakra Gita is the pursuit of self-realization, the recognition of one`s true nature as pure consciousness. It encourages the seeker to transcend the ego and the identification with the body and mind to experience the eternal, unchanging self. \n 'Detachment:' The scripture advocates for complete detachment from worldly desires, attachments, and actions. It teaches that liberation (moksha) is attained through dispassion and renunciation of the transient, material world. \n 'Wisdom and Enlightenment:' The dialogue between the sage Ashtavakra and King Janaka forms the core narrative of the text. Through this dialogue, Ashtavakra imparts profound wisdom and insights into the nature of reality, self, and liberation. The teachings are direct and uncompromising, aimed at awakening the listener to the truth of non-dual consciousness. \n 'Simplicity and Clarity:' Unlike many other spiritual texts, the Ashtavakra Gita is noted for its simplicity and clarity. It presents its teachings in a straightforward manner, devoid of complex rituals and elaborate metaphors, making it accessible to those seeking pure, unadulterated wisdom.\n 'The Ashtavakra Gita,' with its timeless wisdom and universal appeal, remains a beacon of light for those on the spiritual path, guiding them toward the realization of their true nature and the attainment of eternal peace and freedom. ",
      },
      {
        id: 7,
        name: "Astavakra Geeta Hindi",
        src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        description:
          "The Ashtavakra Gita, also known as the Ashtavakra Samhita, is a classical Hindu scripture that is renowned for its profound spiritual and philosophical teachings. It stands as one of the most significant texts in Advaita Vedanta, offering deep insights into the nature of the self and ultimate reality. \n 'Central Themes and Teachings of the Ashtavakra Gita:' \n 'Non-Dualism:' The Ashtavakra Gita is fundamentally rooted in the philosophy of Advaita (non-dualism). It teaches that the individual self (Atman) and the ultimate reality (Brahman) are one and the same. The text emphasizes the unity of all existence and the illusory nature of the phenomenal world (Maya). \n 'Self-Realization:' At the heart of the Ashtavakra Gita is the pursuit of self-realization, the recognition of one`s true nature as pure consciousness. It encourages the seeker to transcend the ego and the identification with the body and mind to experience the eternal, unchanging self. \n 'Detachment:' The scripture advocates for complete detachment from worldly desires, attachments, and actions. It teaches that liberation (moksha) is attained through dispassion and renunciation of the transient, material world. \n 'Wisdom and Enlightenment:' The dialogue between the sage Ashtavakra and King Janaka forms the core narrative of the text. Through this dialogue, Ashtavakra imparts profound wisdom and insights into the nature of reality, self, and liberation. The teachings are direct and uncompromising, aimed at awakening the listener to the truth of non-dual consciousness. \n 'Simplicity and Clarity:' Unlike many other spiritual texts, the Ashtavakra Gita is noted for its simplicity and clarity. It presents its teachings in a straightforward manner, devoid of complex rituals and elaborate metaphors, making it accessible to those seeking pure, unadulterated wisdom.\n 'The Ashtavakra Gita,' with its timeless wisdom and universal appeal, remains a beacon of light for those on the spiritual path, guiding them toward the realization of their true nature and the attainment of eternal peace and freedom. ",
      },
    ],
  };
  const findBookById = (category, id) => {
    return books[category].find((book) => book.id.toString() === id);
  };

  const book = findBookById(category, id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleReadNowClick = () => {
    const path = `/scriptures/${category}/${id}/${encodeURIComponent(
      book.name
    )}`;
    navigate(path);
  };

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
        <div className="flex-1 flex justify-center max-w-md">
          <img
            src={book.src}
            alt="Book Cover"
            width="400"
            height="600"
            className=" h-full w-full rounded-lg shadow-lg"
            style={{ aspectRatio: "400/600", objectFit: "cover" }}
          />
        </div>
        <div class="flex-1 space-y-4 text-start md:text-left">
          <div className="flex items-center mb-10 justify-between ">
            <h1 class="text-3xl md:text-4xl font-bold">{book.name}</h1>

            <div className="hidden lg:block">
              <div class="bg-gray-200 w-full p-2 px-5 lg:px-20 flex justify-between   ">
                {/* <a class="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                <button
                  onClick={handleReadNowClick}
                  className="inline-flex gap-3  items-center w-[300px] bg-orange-500 hover:bg-orange-400 border-orange-300 shadow justify-center whitespace-nowrap text-xl  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-book mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                  Read Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <p
              class="text-gray-700 martel-sans-semibold text-lg mb-20"
              dangerouslySetInnerHTML={{
                __html: formatDescription(book?.description),
              }}
            ></p>
          </div>

          <div className="lg:hidden">
            <div class="bg-gray-200 w-full border   p-2 px-5 lg:px-20 flex justify-between fixed bottom-0 left-0">
              {/* <a class="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
              <button
                onClick={handleReadNowClick}
                className="inline-flex gap-3  items-center w-full bg-orange-500 hover:bg-orange-400 border-orange-500 shadow justify-center whitespace-nowrap text-xl  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-book mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
