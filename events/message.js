const radio = require('../commands/infiniteRadio');

module.exports = (client, msg) => {
  const Discord = require('discord.js');

  if (msg.content.startsWith('#radio')) {
    return radio(msg);
  }
}