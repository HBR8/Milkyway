const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

var data = loadJSON("https://api.royaleapi.com/clan/9VQ8V8YC", 'jsonp');


client.on("message", function(message){

  if(message.author.equals(client.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0].toLowerCase()){

    case "data":

    message.channel.send(data);

    break;

    case "milkyway": 
    
    message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
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
