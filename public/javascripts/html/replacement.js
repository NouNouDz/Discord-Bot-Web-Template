// You just worry about this bit :)
// Put your bot's name in the string below! (for ' use \')
var botName = 'A cool bot name';


// Aight this is the complicated bit... Don't worry about this!
const loremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new loremIpsum({
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('name')) {
    botName = urlParams.get('name');
}

var cards = document.getElementsByClassName('card-description');

for (i = 0; i < cards.length; i++) {
    cards.item(i).innerHTML = lorem.generateSentences(2);
}

var replaceBotName = '[Your Bot Name]';

var replacements = document.getElementsByTagName('*');

for (i = 0; i < list.length; i++) {
    replacements.item(i).innerHTML = replacements.item(i).innerHTML.replace(replaceBotName, botName)
}