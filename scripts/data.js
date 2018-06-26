var languages = [
  {
    name: "Afrikaans",
    bcp47: "af",
    sentences: [
      "Ek hou van druiwe, maar kan nie te veel daarvan eet nie.",
      "Ek moet my kamer opruim.",
      "Hulle gee 'n paar tree vorentoe."
    ],
    translations: [
      "I like grapes, but I can't eat too many of them.",
      "I should clean my room.",
      "They stepped a few paces forward."
    ]
  },
  {
    name: "Czech",
    bcp47: "cs",
    sentences: [
      "Pojďme tady žít.",
      "Můžete si tuhle knihu přečíst.",
      "Nemohu najít mé zavazadlo."
    ],
    translations: [
      "Let's live here.",
      "You can read this book.",
      "I can't find my luggage."
    ]
  },
  {
    name: "Spanish",
    bcp47: "es",
    sentences: [
      "Creo que la decisión es justa.",
      "Bajaron del árbol.",
      "Hemos dividido el dinero entre los dos."
    ],
    translations: [
      "I believe that the decision is just.",
      "They climbed down the tree.",
      "We divided the money between us."
    ]
  },
  {
    name: "German",
    bcp47: "de",
    sentences: [
      "Es gibt keinen Grund zu der Annahme, dass Tom der Dieb ist.",
      "Rutsch mir doch den Buckel runter!",
      "Nimm es nicht so ernst."
    ],
    translations: [
      "There's no evidence to suggest that Tom was the thief.",
      "I want you to get off my back.",
      "Don't take things so seriously."
    ]
  },
  {
    name: "Italian",
    bcp47: "it",
    sentences: [
      "Preferirebbe andare allo zoo o andare al cinema?",
      "Mi stavo chiedendo se vi sareste fatte vive oggi.",
      "Lui produce giocattoli in Cina."
    ],
    translations: [
      "Would you prefer to go to the zoo or go to a movie?",
      "I was wondering if you were going to show up today.",
      "He manufactures toys in China."
    ]
  },
  {
    name: "Danish",
    bcp47: "da",
    sentences: [
      "Hun får altid sin vilje.",
      "Når man taler om solen, så skinner den.",
      "Taler du fransk hver dag?"
    ],
    translations: [
      "She always gets her own way.",
      "Speak of the devil and he is sure to appear.",
      "Do you speak French every day?"
    ]
  }
];

function getRandomSentences(num) {
  var chosenSentences = [];
  var array = [];
  function getSentence() {
    var randomLanguageNumber = [Math.floor(Math.random() * languages.length)];
    var randomLanguage = languages[randomLanguageNumber];
    var randomSentenceNumber = Math.floor(
      Math.random() * randomLanguage.sentences.length
    );
    var randomSentence = randomLanguage.sentences[randomSentenceNumber];
    var translation = randomLanguage.translations[randomSentenceNumber];
    if (chosenSentences.indexOf(randomSentence) === -1) {
      chosenSentences.push(randomSentence);
      return {
        language: randomLanguage.name,
        bcp47: randomLanguage.bcp47,
        sentence: randomSentence,
        translation: translation
      };
    } else {
      return getSentence();
    }
  }
  for (var i = 0; i < num; i++) {
    // Add the randomly selected sentence to the game's array
    array.push(getSentence());
  }
  return array;
}
