module.exports = {
    commands : ['deletevoicechannel', 'dvc', 'deletevc','dvoicec','dvchannel'],
    maxArgs: 0,
    permissionError : `You Do Not Have Enough Permissions To Run The Command.\n User Must Have The 'ADMINISTRATOR' Or The 'MANAGE_CHANNEL' Role To Use This Command.`,
    permissions : ['ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD'],
    callback: async (client, message, arguments, text) => {
        if (!message.guild) return
        if (message.member.voice.channel) {
            const vChannel = message.member.voice.channel
            const connection = await
            vChannel.delete()
            message.reply(`Succesfully Deleted The Voice Chat Channel, That You're In.`)
        } else {
            message.reply("Can't Find The Voice Channel You're In.")
        }
    }
}
