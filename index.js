//https://discordapp.com/oauth2/authorize?&client_id=666315424605929472&scope=bot&permissions=70703184

const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]

    client.on(eventName, arg => eventHandler(client, arg));
  })
})

client.login('NjY2MzE1NDI0NjA1OTI5NDcy.XhygTQ.nIqZQfRmWL-mJeWTCdMt7eWXXKg');
