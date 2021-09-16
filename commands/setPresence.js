module.exports = {
    commands: ['status', 'stat', 'setpresence'],
    expectedArgs: `\`YEET\` -> Changes The Status To \`Playing YEET\``,
    minArgs: 1,
    callback: (client, message, argument, text ) => {
        if (message.author.id === '439541365580365835') {
            client.user.setPresence({
                activities: [{
                    name: text,
                    type: 0,
                }]
            })
        } else {
            message.channel.send(' You Must Be The Owner Of The Bot To Change The Status')
        }
    }

}