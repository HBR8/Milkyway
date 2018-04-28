const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "*";

client.on("message", function(message){
  if(message.author.equals(client.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0].toLowerCase()){
    case "milkyway": 
    case "m":
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
        value: ":trophy: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/9VQ8V8YC"
      },
      {
        name: "----> S A T U R N **(#P2P9VR02)**",
        value: ":trophy: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P2P9VR02"
      },
      {
        name: "----> J U P I T E R **(#P829Q822)**",
        value: ":trophy: 40K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P829Q822"
      },
      {
        name: "----> P L A N E T - X **(#99RP2Y2V)**",
        value: ":trophy: 37K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/99RP2Y2V"
      },
      {
        name: "----> M A R S **(#9RURCVRR)**",
        value: ":trophy: 35K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/9RURCVRR"
      },
      {
        name: "----> N E P T U N E **(#P0JJ9RVJ)**",
        value: ":trophy: 32K+     :crossed_swords:Clan Wars[**Active**]",
        url: "https://royaleapi.com/clan/family/milkyway/clan/P0JJ9RVJ"
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});
    break;


    case "earth":
    case "ea":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "E A R T H (#9VQ8V8YC)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/9VQ8V8YC"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 40K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 4000",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "13K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});
    break;


  case "neptune":
  case "ne":
     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "N E P T U N E (#P0JJ9RVJ)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/P0JJ9RVJ"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 32K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 2400",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "10K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});
    break;

    case "saturn":
    case "sa":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "S A T U R N (#P2P9VR02)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/P2P9VR02"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 40K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 3800",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "16K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});




    break;

  case "mars":
    case "ma":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "M A R S (#9RURCVRR)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/9RURCVRR"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 35K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 2400",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "13K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});




    break;

  case "planet-x":
    case "px":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "P L A N E T - X (#99RP2Y2V)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/99RP2Y2V"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 37K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 3400",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "18K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});




    break;

  case "jupiter":
    case "ju":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "J U P I T E R (#P829Q822)",
      icon_url: "https://royaleapi.com/static/img/badge/Twin_Peaks_02.png",
      url: "https://royaleapi.com/clan/family/milkyway/clan/P829Q822"
    },
    description: "welcome to Milkyway #  Alliance of 6 competetive clans # Discord: milkyway.tk",
    fields: [
      {
        name: "**Clan Score**",
        value: ":trophy: 40K+",
        inline: true
      },
      {
        name: "**Required trophies**",
        value: ":trophy: 3800",
        inline: true
      },
      {
        name: "**Donations Per Week**",
        value: "16K+",
        inline: true
      },
      {
        name: "**Clan Wars**",
        value: ":fire:[Active]",
        inline: true
      },
      {
        name: "**Region**",
        value: "International",
        inline: true
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
      text: "Bot By HBR"
    },
  }
});




    break;

      
      case "help":
      case "commands":
      case: "info":

     message.channel.send({embed: {
    color: 0xFFD700,
    author: {
      name: "commands",
      icon_url: "https://cdn1.iconfinder.com/data/icons/network-security-computer/32/command-line-256.png",
    },
    description: "this bot can help you to share the details of the clan. ",
    fields: [
      {
        name: "***Milkyway / *M **",
        value: "shows the alliance details",
      },
      {
        name: "** *name_of_the_clan / *two_letters **",
        value: "shows a specific clan details ",
      }
    ],


    timestamp:null ,
    footer: {
      icon_url: "https://cdn.discordapp.com/avatars/325523620032151553/d1dbfbd129157917cb2ef2bb878376ea.png?size=128",
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
