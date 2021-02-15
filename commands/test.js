const Discord = require("discord.js");
module.exports = {
    name: 'test',
    description: 'Shows you ping with the bot!',
    execute(message, args) {
        message.reply('hey i am awake')
    }
}