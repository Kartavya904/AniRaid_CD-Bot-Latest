const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")


module.exports = {
    commands : 'botinfo',
    callback : async (client, message, arguments, text) => {
        let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username, message.client.user.displayAvatarURL({dynamic:true}))
                .setTitle(`__**Bot Stats For ${client.user.username} Bot:**__`)
                .setColor("RANDOM")
                .addField("`⏳` Memory Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n`, true)
                .addField("`⌚️` Time Before Last Restart:", `${duration}\n`, true)
                .addField("`📁` Number Of Servers The Bot Is In:", `${message.client.guilds.cache.size}\n`, true)
                .addField("`📁` Server Name:", `${message.guild.name}\n`, true)
                .addField("`📁` Members In The Server:", `${message.guild.memberCount}\n`, true)
                .addField(`\`📁\` Number Of Channels In The Server ${message.guild.name}:`, `${message.guild.channels.cache.size}\n`, true)
                .addField("`👾` Discord.js Version:", `v${version}\n`, true)
                .addField("`🤖` Node Version:", `${process.version}\n`, true)
                .addField("`🤖` CPU:", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("`🤖` CPU's Usage:", `\`${percent.toFixed(2)}%\`\n`, true)
                .addField("`🤖` Bot's Arch:", `\`${os.arch()}\`\n`, true)
                .addField("`💻` Bot's Current Platform:", `\`\`${os.platform()}\`\`\n`, true)
                .addField("Bot's Latency/Ping:", `${(message.client.ws.ping)}ms\n`)
                .setFooter(`Requested By ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
         message.channel.send(botinfo)
        });
    }
}