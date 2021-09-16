const Discord = require('discord.js')
const superagent = require('superagent');
module.exports = {
    commands : ['joke', 'jokepls', 'meme', 'dadjoke','dadjokes'],
    expectedArgs : '',
    minArgs : 0,
    maxArgs : 0,
    callback : async(client, message, arguments, text) => {
        const { author, channel } = message
        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let embed = new Discord.MessageEmbed()
            .setFooter(`Requested by ${author.username}`)
            .setDescription(response.body.joke)
            .setColor("RANDOM");
        channel.send(embed);
        })
    }
}