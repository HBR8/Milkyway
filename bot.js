const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*milkyway";


client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		default:
			
		var embed = new Discord.RichEmbed()
		
		.addField("test title","Test desc")

		message.channel.sendEmbed(embed);
		
	}
});

client.login(process.env.BOT_TOKEN);
