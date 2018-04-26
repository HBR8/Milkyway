const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*Milkyway";

client.on("ready", funciton(){
	console.log("Milkyway bot is online!");
});

client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "embed":
		var embed = new Discord.RichEmbed()
		.setDescription("Hello!");
		message.channel.sendEmbed(embed);


		default: 
			message.channel.sendMessage("Invalid command");
	}
});

client.login(process.env.BOT_TOKEN);
