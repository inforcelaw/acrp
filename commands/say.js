const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: 'say',
    execute(message, args) {
        if (!args[0]) {
            return message.channel.send('Please include what you want me to say.')
        }
        message.channel.send(args.slice(0).join(" "))
        
    }
};