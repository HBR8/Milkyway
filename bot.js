const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

try{

client.on("message", function(message){

	if(message.author.equals(client.user)) return;

	if(!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "milkyway": 
		
		message.channel.send({embed: {
    color: 0xff0000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
      url: "www.google.com"
    },
    title: "Milkyway clans",
    description: "This is our clans, choose the best one for you and join!",
    fields: [{
        name: "EARTH",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});


		break;

		default:
			message.channel.sendMessage("invalid command");	

	}
});		

}

catch(err){

}


client.login(process.env.BOT_TOKEN);
