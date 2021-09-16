module.exports = {
    commands : 'dmme',
    callback : (client, message, arguments, text) => {
        const { mentions, content, channel } = message 
        if (text) {
            message.author.send(`Hi, I Have Been Directed To DM You, By ${message.author.username}.`)
            message.author.send(text)
            channel.send(`I Have Succesfully DM'd ${message.author.username}`)
            return
        } else {
            channel.send(`Please Provide Me With A Text To DM.\nYet I Have DM'd ${message.author.username}`)
            message.author.send(`Hi, I Have Been Directed To DM You, By ${message.author.username}, But You Left The Message To Send Blank.`)
            return
        }
    }
}