const Discord = require("discord.js");
module.exports = {
    name: 'help',
    Description: 'Shows help',
    execute(message, args) {
        const helpcommand = new Discord.RichEmbed()
                .setTitle('Help Command')
                .setColor(0x800000)
                .setDescription('Welcome to asrp bot! The bots list of commands are:')
                .addField('.help','Shows this')
                .addField('.av','@ a user to see there avatar or do it to your self!')
                .addField('.ping','Shows the bots ping e.g .ping the bot responds with ping pong 100ms to show the bots ping')
                .addField('.prefix','Shows the bots prefix')
                .addField('.membercount','Gets the number of members in the discord server!')
                .addBlankField()
                .addField('Staff commands','Btw members you can try to use them but it will not work.')
                .addField('.kick','@ a user and reason to kick them out of the server if they where breaking the rules')
                .addField('.ban','@ a user to ban them if they where breaking any of the discord rules!')
                .setAuthor(message.author.username)
                .setFooter('Thankyou for play on ASRP')
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.reply(helpcommand)


        
    }
}