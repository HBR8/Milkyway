const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

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
    description: "* our alliance is made up of 6 clans with nearly 300 members. ",
    fields: [
      {
        name: "----> E A R T H **(#9VQ8V8YC)**",
        value: ":medal: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/9VQ8V8YC"
      },
      {
        name: "----> S A T U R N **(#P2P9VR02)**",
        value: ":medal: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P2P9VR02"
      },
      {
        name: "----> J U P I T E R **(#P829Q822)**",
        value: ":medal: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P829Q822"
      },
      {
        name: "----> P L A N E T - X **(#99RP2Y2V)**",
        value: ":medal: 37K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/99RP2Y2V"
      },
      {
        name: "----> M A R S **(#9RURCVRR)**",
        value: ":medal: 35K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/9RURCVRR"
      },
      {
        name: "----> N E P T U N E **(#P0JJ9RVJ)**",
        value: ":medal: 32K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P0JJ9RVJ"
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: client.user.avatarURL,
      text: "Bot By HBR"
    },
  }
});

    break;

    default:
      message.channel.sendMessage("invalid command"); 

  }
});   

client.login(process.env.BOT_TOKEN);
