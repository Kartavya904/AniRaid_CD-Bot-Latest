const { MessageEmbed } = require("discord.js")

module.exports = {
    commands : [`anilink`,`aniraidlink`,`link`,`invite`, `inv`],
    callback : (client, message, arguments, text) => {
        const linkEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .setColor(`#abdbe3`)
            .setThumbnail(`https://images-ext-2.discordapp.net/external/A6K5SM6SxhBYIECYsGj25RovWLvkeLHhQswENMrNbr8/https/media.discordapp.net/attachments/767286551126081536/854078957300875304/PFP358.png`)
            .addField(`AniRaid Official Server`,`The Link To AniRaid's Official Server Is :-\nhttps://discord.gg/AniRaid`,false)
            .addField(`AniRaid Bot`,`The Link To Inviting AniRaid Bot To Your Server Is : -\nAdd After Launch`,false)
            .setTimestamp()
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
        message.channel.send({ embeds : [linkEmbed] })
    }
}