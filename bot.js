const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*Milkyway";

client.on("ready", funciton(){
	console.log("Milkyway bot is online!");
});



client.login(process.env.BOT_TOKEN);
