const Discord = require("discord.js");
module.exports = {
    name: 'av',
    description: 'av commands',
    execute(message, args) {
        if (args[0]){
            const user = message.mentions.users.first();
            if(!user) return message.channel.send('Please @ a user!');


            const othericonembed = new Discord.RichEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setImage(user.displayAvatarURL)

            message.channel.send(othericonembed).catch(err => console.log(err))
        
            
        }
    
        
        
    }
}