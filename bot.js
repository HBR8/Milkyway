const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

var request = new XMLHttpRequest();

request.open('GET', 'https://api.royaleapi.com/clan/9VQ8V8YC');

request.setRequestHeader('TRN-Api-Key', '271845143019437687bd362749414e0db5d24accb17442f1aafe0aeb34d446a4');

};
request.send();

client.on("message", function(message){
  if(message.author.equals(client.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0].toLowerCase()){

    case "data":

    break;

    case "milkyway": 
    
    message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL,
      url: "https://royaleapi.com/clan/family/milkyway/clans"
    },
    description: "Our alliance is made up of 6 clans, you can join us!",
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
