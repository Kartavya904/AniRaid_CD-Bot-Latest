const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const util = require('util');

module.exports = {
    commands : ['eval','e'],
    callback : async (client, message, arguments, text) => {
        let code = text
        const embed = new Discord.MessageEmbed()
        if (message.author.id !== '439541365580365835')
            return message.channel.send('This is owner only command');

        if (!code) {
            return message.reply( {
                embeds : [new MessageEmbed()
                    .setTitle('Error Usage')
                    .setDescription(`Usage: .eval <code>`)
            ]});
        }

        try {
            let evaled = await eval(code),
                output;
            if (evaled.constructor.name === `Promise`) {
                output = `📤 Output (Promise)`;
            } else {
                output = `📤 Output`;
            }
            if (evaled.length > 800) {
                evaled = evaled.substring(0, 800) + `...`;
            }
            return message.channel.send({embeds : [evaled]});
        } catch (e) {
            console.log(e.stack);
            embed
                .addField(`📥 Input`, `\`\`\`\n${code}\n\`\`\``)
                .addField(`📤 Output`, `\`\`\`js\n${e}\n\`\`\``)
                .addField(`Status`, `Failed`)
            return message.channel.send({embeds : [embed]});
        }
    }
};


















// module.exports = {
//     commands : ['eval'],
//     callback : async (client, message, arguments, text) => {
//         if (message.author.id === '439541365580365835') {
//             console.log(text)
//             const results = eval(text).catch(console.error)
//             message.channel.send(results)
//         } else {
//             message.channel.send(`Only For The Owner Of Bot`)
//         }
//     }
// }