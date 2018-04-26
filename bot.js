const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Milkyway bot is on');
});

client.on('message', message => {
    if (message.content === '!milkyway') {
    	message.reply("I am on!");
  	}
});

client.login(process.env.BOT_TOKEN);
