const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const prefix = ('.')

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on("ready", () => {
    console.log('Bot is active.');
    setInterval(() => {
        const status = [
            'Welcome to asrp do .help for a list of commands',
            `Watching asrp`,
            `.help for a list of commands`,
            `asrp is the best server to be part of!`,
        ]
        const statuslist = status[Math.floor(Math.random() * status.length)]
        bot.user.setActivity(statuslist)    
    },5000)
})
bot.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.alies && cmd.aliases.includes(commandName));

    try {
        command.execute(message, args);
    } catch (error) {
        console.log(error)
        message.reply('There is an issue with that command or it is a invail command do .help for a list of commands!.')
    }
})
bot.login(process.env.TOKEN);