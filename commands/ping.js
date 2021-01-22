module.exports = {
    name: 'ping'
    description 'Pong!'
    execute(message, args){
        message.reply('Pong! Took `' + Date.now() - message.createTime)
    }
}