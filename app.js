var token = '';

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var firstChar = msg.content.toLowerCase().charAt(0);
	var channelChar = msg.channel.name.toLowerCase().charAt(0);
  if (firstChar != channelChar) {
    msg.delete();
  }
});

client.login(token);
