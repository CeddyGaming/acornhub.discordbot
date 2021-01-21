const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.commands = new Discord.Collection()
const {prefix, token} = require('./config.json')

client.on('ready', () => {
    console.log(`Client logged in as ${client.user}`)
})


client.login(token)