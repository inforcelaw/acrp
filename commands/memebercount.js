const Discord = require("discord.js");

module.exports = {
    name: 'membercount',
    description: 'Shows the membercount for the server.',
    execute(message, args) {
        const MembersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.RichEmbed()
        .setColor(`00FF00`)
        .setDescription(`${message.guild.name} has ${MembersInServer} members in the server!!`)
        .setTitle(`Membercount command`)
        
        

        message.channel.send(memberEmbed);
    }
}