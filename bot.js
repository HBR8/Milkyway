const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*milkyway";


client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		default:

		message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}
});

client.login(process.env.BOT_TOKEN);
