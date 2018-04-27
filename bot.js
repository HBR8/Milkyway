const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

client.on("message", function(message){

	if(message.author.equals(client.user)) return;
	if(!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){

		case "milkyway": 
		
		message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Milkyway Family",
    url: "http://google.com",
    description: "this is our clans, choose the best one for you and join it now!",
    fields: [{
        name: "EARTH",
        value: "TAG"
      },
      {
        name: "MARS",
        value: "TAG"
      },
      {
        name: "SATURN",
        value: "TAG"
      }
    ],
              timestamp: new Date(),
    footer: {
      icon_url: client.author.avatarURL,
      text: "Bot By HBR"
    }
  }
});


		break;

		default:
			message.channel.sendMessage("invalid command");	

	}
});		

client.login(process.env.BOT_TOKEN);
