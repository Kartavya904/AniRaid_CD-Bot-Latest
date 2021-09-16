const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['server','botserver','servers'],
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        var table = {}
        client.guilds.cache.forEach(guild => {
            var eachServer = `Server '${guild.name}', In Which I Am, Has A Total Of '${guild.memberCount}' Members\n\n`
            table += eachServer
            //console.log(guild)
        })
        const serverEmbed = new MessageEmbed()
            .setAuthor(message.client.user.username, message.client.user.displayAvatarURL({dynamic:true}))
            .setTitle(`All Servers The Bot Is In`)
            .setDescription(table.replace('[object Object]',''))
            .setTimestamp()
            .setFooter(`Requested By ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(serverEmbed)
    }
}
// message.channel.send(`Server '${guild.name}', In Which I Am, Has A Total Of '${guild.memberCount}' Members`)
