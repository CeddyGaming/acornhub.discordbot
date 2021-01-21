const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.commands = new Discord.Collection()
const {prefix, token} = require('./config.json')

client.on('ready', () => {
    console.log(`Client logged in as ${client.user}`)
})

client.on('message', (message) => {
    //!ban @cedric will continue; ban @cedric will return
    if(message.author.bot || !message.content.startsWith(prefix)) return
    
    //!ban 
    //@cedricjake2006
    const messageArray = message.content.split(' ')
})

client.login(token)