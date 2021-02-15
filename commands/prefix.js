const Discord = require('discord.js');
const prefix = ('.')
const bot = new Discord.Client();
module.exports = {
    name: 'prefix',
    execute(message, args) {
        message.reply(`My prefix is: ${prefix}`)
        
    }
};