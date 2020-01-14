module.exports = (client, msg) => {

  const Discord = require('discord.js');

  if (!msg.guild) {
    return;
  }
  else {
    if (msg.member.voice.channel) {
      ConnectAndPlay();
    }

    else {
      msg.reply('You need to join a voice channel to play music! 🎶');
    }
  }

  function ConnectAndPlay() {
    
    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('audio/song.mp3');

    dispatcher.on('end', connection.play('audio/song.mp3'));
  }
}