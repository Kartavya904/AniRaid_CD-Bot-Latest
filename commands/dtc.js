module.exports = {
    commands : ['deletetextchannel', 'dtc', 'deletetc','dtextc','dtchannel'],
    maxArgs: 0,
    permissionError : `You Do Not Have Enough Permissions To Run The Command.\n User Must Have The 'ADMINISTRATOR' Or The 'MANAGE_CHANNEL' Role To Use This Command.`,
    permissions : ['ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD'],
    callback: (client, message, arguments, text) => {
        
        message.channel.delete()
    }
}
