const Discord = require("discord.js");
module.exports = {
    name: 'kick',
    description: 'Used to kick people you hate!',
    execute(message, args) {
        const userKick = message.mentions.users.first();

        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick('Your were kicked for not following the rules.').then(() => {
                        message.reply(`Kicked user ${userKick.tag} !`)
                    }).catch(error => {
                        message.reply('I was not able to find that user to kick.')
                        console.log(err);
                    })
                } else {
                    message.reply('That user is not in the server.')
                }
            } else {
                message.reply('Please mention that you want to kick.')
            }
        } else {
            message.reply('Whoops, Seem like you are not able to use this command!')
        }
    }
}