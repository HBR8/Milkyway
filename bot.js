const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "/";

client.on("message", function(message){
  if(message.author.equals(client.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0].toLowerCase()){
    case "milkyway": 
  
    break;

    default:
      message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL,
      url: ""
    },
    description: "invalid command!",
    fields: [
      {
        name: "How to use the bot?",
        value: "type : /help ",
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
}); 

  }
});   

client.login(process.env.BOT_TOKEN);
