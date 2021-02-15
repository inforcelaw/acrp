const Discord = require("discord.js");
module.exports = {
    name: 'ban',
    description: 'Used to ban people you hate!',
    execute(message, args) {
        const userBan = message.mentions.users.first();
        const name = message.guild.name

        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (userBan) {
                var member = message.guild.member(userBan);

                if (member) {
                    member.ban('Your were Banned for not following the rules.').then(() => {
                        message.reply(`Banned user ${userBan.tag} !`)
                    }).catch(error => {
                        message.reply('I was not able to find that user to ban.')
                        console.log(err);
                    })
                } else {
                    message.reply('That user is not in the server.')
                }
            } else {
                message.reply('Please mention that you want to ban.')
            }
        } else {
            message.reply('Whoops, Seem like you are not able to use this command!')
        }
    }
}