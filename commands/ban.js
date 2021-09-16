module.exports = {
    commands : ['ban'],
    permissionError : `You Do Not Have Enough Permissions To Run The Command. \n You Must Have The 'ADMINISTRATOR' Or 'BAN_MEMBERS' Role To Use This Command.`,
    minArgs : 1,
    permissions : ['ADMINISTRATOR','BAN_MEMBERS'],
    callback : (client, message, arguments, text) => {
        const { member, mentions } = message
        if (member.permissions.has('ADMINISTRATOR') || member.permissions.has('BAN_MEMBER')) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                const tag = `<@${targetMember}>`
                if (targetMember.permissions.has('ADMINISTRATOR')) {
                    message.channel.send(`${tag} Has The ADMIN Role, Thus Cannot Be Banned.`)
                } else {
                    targetMember.ban()
                    message.channel.send(`${tag} Has Been Banned From The Server.`)
                }
            } else{
                message.channel.send(`${member.id} Please Mention A User To Ban.`)
            }
        } else {
            return
        }
    }
}