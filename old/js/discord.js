const {
    token
} = require('../../config.json');

const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Discord Bot is ready!');
});

document.getElementById('users-number').innerHTML = client.users.cache.size;

client.login(token);