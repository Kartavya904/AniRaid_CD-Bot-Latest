module.exports = {
    commands : ['cvc','createvc','createvoicechannel'],
    expectedArgs: 'YEET -> Creates A New Voice Channel In The Same Category Of The Name YEET',
    minArgs: 1,
    permissionError : `You Do Not Have Enough Permissions To Run The Command.\n Must Have The CREATE_CHANNEL Or ADMIN Permissions To Use This Command`,
    permissions : ['ADMINISTRATOR','MANAGE_CHANNELS','MANAGE_GUILD'],
    callback : (client, message, arguments, text ) => {
        const newChannel = message.guild.channels.create(text , {
            type: 'voice',
            parent: message.channel.parent
        })
        message.channel.send(`I Have Created The Voice Channel '${text}' `)
    }
}