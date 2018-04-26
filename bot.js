const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('test');
  	}
});

exports.run = (bot, message, args, func) => {

    // Return Statements
    if (!message.member.roles.find('name', 'Owner')) return func.embed(message.channel, '**This command requires the Owner role**', 120000) // This returns if it CANT find the owner role on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
    if (!args.join(" ") && args.join(" ").toUpperCase() !== 'NONE') return func.embed(message.channel, '**Please mention a channel**\n > *~setdm message*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
    // ^^^ This returns if they didnt type any dedscription

    // Fetch the new channel they mentioned
    let newMessage;
    if (args.join(" ").toUpperCase() === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
    else newMessage = args.join(" ").trim(); // If they didn't write none, set what they wrote as the message

    // This will update the .text of the joinMessageDM_guildID object.
    db.updateText(`joinMessageDM_${message.guild.id}`, newMessage).then(i => {
        func.embed(message.channel, `**Successfully updated DN welcome text to:**\n > *${args.join(" ").trim()}*`) // Finally, send in chat that they updated the channel.
    })

} // Again, we can copy and paste this. 
// Now, lets test to see if it updated.








client.login(process.env.BOT_TOKEN);

          
          





