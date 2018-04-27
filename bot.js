const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";


client.on("message", function(message){
	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "milkyway":

		var embed = new Discord.RichEmbed(data);
		
		.addField("test title","Test desc")

		message.channel.sendEmbed(embed);
		break;
		default: 
			message.channel.sendMessage("Invalid command");
	}
});

client.login(process.env.BOT_TOKEN);
