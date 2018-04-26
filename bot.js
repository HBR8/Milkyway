const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!Milkyway') {
            "embed": {
        "image": {
            "url": "https://media.discordapp.net/attachments/438022387519193098/438049757915643934/image.jpg?width=473&height=473"
        }
    }
}
          
});


client.login(process.env.BOT_TOKEN);

          
          





