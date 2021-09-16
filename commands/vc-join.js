module.exports = {
    commands : ['joinvc','joinvoicechat','joinvoicec','joinvchat'],
    callback : async(client, message, arguments, text) => {
        if (!message.guild) return;
        if (message.content.toLowerCase() === '.joinvc') {
            if (message.member.voice.channel) {
                const connection = await
                message.member.voice.channel.join()
                message.reply('Succesfully Joined The Voice Chat Channel.')
            } else {
                message.reply("Can't Find The Voice Channel You're In")
            }
        }
    }
}