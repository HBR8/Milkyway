const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "/";
const fs = require("fs");


client.on("message", function(message){
  if(message.author.equals(client.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");

  });

client.login(process.env.BOT_TOKEN);
