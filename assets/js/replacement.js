// You just worry about this bit :)

// Put your bot's name in the string below! (for ' use \')
var botName = 'Your bot\'s name';


// Aight this is the complicated bit... Don't worry about this!
const loremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new loremIpsum({
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});

var cards = document.getElementsByClassName('card-description');

for (i = 0; i < cards.length; i++) {
    cards.item(i).innerHTML = lorem.generateSentences(2);
}

var replaceBotName = '[Your Bot Name]';

var replacements = document.getElementsByTagName('h3');

function replace(list, replace, replacement) {
    for (i = 0; i < list.length; i++) {
        list.item(i).innerHTML = list.item(i).innerHTML.replace(replace, replacement)
    }
}

replace(replacements, replaceBotName, botName);

replacements = document.getElementsByTagName('p');

replace(replacements, replaceBotName, botName);

replacements = document.getElementsByTagName('h1');

replace(replacements, replaceBotName, botName);

replacements = document.getElementsByClassName('doc-title');

replace(replacements, replaceBotName, botName);