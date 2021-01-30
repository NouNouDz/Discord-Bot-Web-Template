const loremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new loremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

var cards = document.getElementsByClassName('card-description');

for (var i = 0; i < cards.length; i++) {
    cards.item(i).innerHTML = lorem.generateSentences(3);
}

document.getElementById('card-tiger-description').innerHTML = lorem.generateSentences(3);