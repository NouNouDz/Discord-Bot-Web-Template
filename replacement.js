const loremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new loremIpsum({
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

var cards = document.getElementsByClassName('card-description');

for (var i = 0; i < cards.length; i++) {
    cards.item(i).innerHTML = lorem.generateSentences(3);
}