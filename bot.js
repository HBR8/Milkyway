const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";


client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "milkyway": 
		var clans = new Discord.RichEmbed()
		.addField("E A R T H","TagHere")
		.addField("M A R S","TagHere")

		message.channel.sendMessage(clans);	

		break;

		default:
			message.channel.sendMessage("invalid command");	

	}
});		

client.login(process.env.BOT_TOKEN);
