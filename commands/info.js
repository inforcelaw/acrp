
const Discord = require("discord.js");
module.exports = {
    name: 'info',
    Description: 'info command',
    execute(message, args) {
        
            const infocommand = new Discord.RichEmbed()
                .setTitle('info Command')
                .setColor(0x800000)
                .setDescription('Bot info:')
                
                .setAuthor(message.author.username)
                .setFooter('Thankyou for chosing asrp')
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.reply(infocommand)
        }
    }
