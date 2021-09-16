module.exports = {
    commands : ['sbt', 'sendbt', 'sendblanktext'],
    callback : (client, message, arguments, text) => {
        const { channel,author } = message
        if (author.id === '439541365580365835') { channel.send(' ‍ ').then(msg => {
            message.delete()
        }) }
    }
}