const Discord = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Shows you ping with the bot!',
    execute(message, args) {
        message.reply('Finding the ping!').then(msg =>{
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.edit(`Ping Pong ${ping} ms`);
        })
    }
}