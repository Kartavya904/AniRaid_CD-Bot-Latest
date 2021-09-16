module.exports = {
    commands: ['myping'],
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        message.channel.send('Finding Bots Latecy...').then(messages => {
            const restPing = messages.createdTimestamp - message.createdTimestamp
            const wsPing = client.ws.ping
            messages.edit(`Finding Bots Latecy...\nThe Bots Current WS Ping Is ${wsPing}\nThe Bots Current Rest Ping Is ${restPing}`)
        })    
    }
}
