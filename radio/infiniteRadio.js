module.exports = (client, msg) => {
  const Discord = require('discord.js');

  if (!msg.guild) {
    return;
  }
  else {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
    }
    
    else {
      msg.reply('You need to join a voice channel to play music! 🎶');
    }
  }
}