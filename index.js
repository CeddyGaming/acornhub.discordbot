//Constants
const Discord = require('discord.js')
const fs = require('fs')
const {prefix, token} = require('./config.json')

//Initalize
const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
    console.log(`Client logged in as ${client.user}`)
})

client.on('message', (message) => {
    //!ban @cedric will continue; ban @cedric will return
    if(message.author.bot || !message.content.startsWith(prefix)) return
    
    //!ban 
    //@cedricjake2006
<<<<<<< HEAD
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

=======
    const messageArray = message.content.split(' ')
>>>>>>> 7ccfbf5afbe82a58e83c7e10ec46b464633ea07f
})

client.login(token)