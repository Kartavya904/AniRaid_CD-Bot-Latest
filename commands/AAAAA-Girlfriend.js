const { MessageEmbed } = require("discord.js")

module.exports = {
    commands : ['gf', 'girlfriend'],
    callback : (client, message, text, argument) => {
        message.channel.send("Nandini Agarwal Is My Girlfriend!!")
        const embed = new MessageEmbed() 
            .setColor("0x00FFFF")
            .setImage('https://i.ibb.co/QQWMbmz/GF-Pic.jpg')
            .setTitle("My GirlFreiend")
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic : true}))
            .setFooter("We have been together since 11th September 2021.")
        
        message.channel.send({embeds : [embed]})
    }
}