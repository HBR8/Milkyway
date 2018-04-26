const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "milkyway":
		var embed = new Discord.RichEmbed()
		.setDescription("Hello!");
		message.channel.sendEmbed(embed);
		break;
			
		default: 
			message.channel.sendMessage("Invalid command");
	}
});

client.login(process.env.BOT_TOKEN);
