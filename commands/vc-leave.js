module.exports = {
    commands : ['leavevc','leavevoicechat','leavevoicec','leavevchat'],
    callback : async(client, message, arguments, text) => {
        if (!message.guild) return;
        if (message.content.toLowerCase() === '.leavevc') {
            if (message.member.voice.channel) {
                const connection = await
                message.member.voice.channel.leave()
                message.reply('Succesfully Left The Voice Chat Channel.')
        } else {
            message.reply("Can't Find The Voice Channel You're In.")
            }
        }
    }    
}
