const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

var Sentense = new Array();
Sentense[0] = 'We have unlocked a new card! Welcome to the Arena.';
Sentense[1] = ' just saw come out of the goblin hut. Please find them some pants.';
Sentense[2] = 'Hey, We would use mirror spell to have a second you, even if it costs one more elixir! Welcome to our alliance!';
Sentense[3] = 'It is a goblin barrel with just one troop! And that troop is you! Welcome!';
Sentense[4] = 'Please welcome with who can counter a minion horde with a log.';
Sentense[5] = 'A new legendary card arrives! Its you! Welcome!';
var i = 0;


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
    description: ""+Sentense[i],
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
    i= i+1;
    if(i=Sentense.length){
      i=0;
    }
    break;

    default:
      message.channel.sendMessage("invalid command"); 

  }
});   

client.login(process.env.BOT_TOKEN);
