const { MessageEmbed } = require("discord.js")

module.exports = {
    commands : ['shop'],
    callback : async(client, message, arguments, text) => {
        if(!arguments[0]) {
            let desc = `Welcome! Please take a look around and see what you like!\n**Series of the day: ~~Soon To Be Launched~~**\n\n**Next Refresh :hourglass:: -h -m**\n\n**#1 | Common Pack | 2000 Fake Gold**\nContains | 5x Fake Cards\n**[70% C / 20% U / 8% R / 2% SR]**\n\n**#2 | Rare Pack | 10000 Fake Gold**\nContains | 5x Fake Cards\n**[50% U / 42% R / 8% SR / 0.1% UR]**\n\n**#3 | Epic Pack | 50000 Fake Gold**\nContains | 5x Fake Cards\n**[50% R / 50% SR / 0.4% UR]**\n\n**#4 | Legendary Pack | 100000 Fake Gold**\nContains | 5x Fake Cards\n**[57% R / 40% SR / 3% UR]**\n\n\nFake Cards obtainable in daily pack: **~~[Soon To Come]!!~~**\n\nSeries obtainable in new pack: **~~[Soon To Come!!]~~**\n*Note: To buy daily\/new packs, add daily\/new in front of a pack's name at 1.5\/2.5x the cost of the actual pack, to only get a card within the series\/new series!*`
            let shopEmbed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
                .setColor(`0x00FFFF`)
                .setTitle(`**~~NOT~~ Summoning Sanctuary**`)
                .setDescription(desc)
                .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
                .setImage(`https://media.discordapp.net/attachments/803222060553076796/869330413343109170/Shop.png`)
                .setTimestamp()
                // .addField(`**#1 | Common Pack | 2000 Fake Gold**`,`Contains | 5x Fake Cards\n**[70% C / 20% U / 8% R / 2% SR]**`,false)
                // .addField(`**#2 | Rare Pack | 10000 Fake Gold**`,`Contains | 5x Fake Cards\n**[50% U / 42% R / 8% SR / 0.1% UR]**`,false)
                // .addField(`**#3 | Epic Pack | 50000 Fake Gold**`,`Contains | 5x Fake Cards\n**[50% R / 50% SR / 0.4% UR]**`,false)
                // .addField(`**#4 | Legendary Pack | 100000 Fake Gold**`,`Contains | 5x Fake Cards\n**[57% R / 40% SR / 3% UR]**`,false)
        
            message.channel.send( { embeds :[shopEmbed] } )
        }
    }
}