const { MessageEmbed } = require('discord.js')
module.exports = {
    commands : ['av', 'avatar', 'mypfp', 'pfp', 'myav'],
    callback : (client, message, arguments, text) => {
        const { channel, mentions, author } = message
        let targetMember = mentions.users.first()
        if (!targetMember && !arguments[0]) {
            const myEmbed = new MessageEmbed()
            .setColor(0x6199FC)
            .setTitle(`__**AVATAR**__`)
            .setDescription(` Down Below Is ${author.username}'s Avatar `)
            .setAuthor(author.username)
            .setImage(author.displayAvatarURL({ dynamic:true }))
            .setTimestamp()
        channel.send({ embeds : [myEmbed] })
        } else if (targetMember) {
            //message.channel.send(targetMember)
            const targetEmbed = new MessageEmbed()
                .setColor(0x6199FC)
                .setTitle(`__**AVATAR**__`)
                .setDescription(` Down Below Is ${targetMember.username}'s Avatar `)
                .setAuthor(targetMember.username)
                .setImage(targetMember.displayAvatarURL({ dynamic:true }))
                .setTimestamp()
            channel.send({ embeds : [targetEmbed] })
        } else if (!targetMember && arguments[0]) {
            targetMember = client.users.cache.get(arguments[0])
            // if (!targetMember) {
            //     targetMember = message.author
            // }
            const targetEmbed = new MessageEmbed()
                .setColor(0x6199FC)
                .setTitle(`__**AVATAR**__`)
                .setDescription(` Down Below Is ${targetMember.username}'s Avatar `)
                .setAuthor(targetMember.username)
                .setImage(targetMember.displayAvatarURL({ dynamic:true }))
                .setTimestamp()
            channel.send({ embeds : [targetEmbed] })
        }
    }
}

