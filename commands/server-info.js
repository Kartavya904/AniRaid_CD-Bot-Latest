const { MessageEmbed } = require ('discord.js')
module.exports = {
    commands : ['serverinfo','Serverinfo','myserverinfo','thisserverinfo','myserver', 'thisserver'],
    callback : (client, message, arguments, text ) => {
        const { guild } = message
        const { name, region, id, approximateMemberCount, iconURL, owner, afkTimeout, createdAt, joinedAt, verificationlevel, bannerURL, description } = guild
        const icon = iconURL({dynamic:true})
        if (!description) {
            description = '-'
        }
        const embed = new MessageEmbed()
            .setColor(0x6199FC)
            .setTitle(`Server Info For '${name}'`)
            .setThumbnail(icon)
            .addFields(
            {
                name : `__**Region**__`,
                value : region.toUpperCase()
            },
            {
                name : `__**Members**__`,
                value : approximateMemberCount
            },
            {
                name: `__**Server Description**__`,
                value: description
            },
            {
                name: `__**Channels**__`,
                value: channels
            },
            {
                name: `__**Time Created**__`,
                value: createdAt
            },
            {
                name : `__**Owner Mention**__`,
                value : owner
            },
            {
                name: `__**${client.user.tag}'s Time Of Join**__`,
                value: joinedAt
            },
            {
                name: `__**Verification Level**__`,
                value: verificationlevel
            },
            {
                name: `__** Server Banner**__`,
                value: bannerURL
            },
            {
                name : `__**AFKTimeout**__`,
                value : `${afkTimeout/60} Mins`
            })

            .setFooter(`Guild ID : ${id}`)
            .setTimestamp()
        message.channel.send(embed)
    }
}


