const path = require('path')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter()
EventEmitter.defaultMaxListeners = 100
const Discord = require('discord.js')
const { Client, Intents, Message, DiscordAPIError, MessageEmbed, Presence, BaseClient } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const { token } = require('./config.json')

const commandBase = require('./commands/commands-base')
const welcome = require('./welcome2')

client.on('ready', async () => {
    client.on('debug',debug => console.log(debug))
    console.log(client.users.fetch(`439541365580365835`,{cache:true}))
    var kartId = '439541365580365835'
    var kartDms = client.users.cache.get(kartId)
    var resbotlogcha = client.channels.cache.get('855080924403335168')
    console.log(`Logged In As ${client.user.tag}!!`);
    console.log(`MongoDB Conection Not Established!!`)
    // More Addition

    console.log(`Changed ${client.user.tag}'s Status As Playing A.help`)
    client.user.setPresence({
        activities: [{
            name : 'A.help' ,
            type: 0,
        }]
    })

    client.on('messageCreate', async (message) => {
        mentions = message.mentions.users.first()
        if (mentions) {
            mentionsEmbed = new MessageEmbed()
                .setColor(`blurple`)
                .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
                .setDescription(`Hey! ${message.author.username}! My Prefix Is \`a.\`\nUse \`a.help\` for more information.`)
            if (mentions.id === '840646484935835698') {
                message.channel.send({embeds : [mentionsEmbed] })
            }
        }
    })

    // client.on('guildMemberAdd', (member) => {
    //     console.log(`${member.username}, Just Joined ${member.guild.name}`)
    //     if (member.guild.id === '769281523597181028') {
    //         const msg = `Test Welcome`
    //         const channel = member.guild.channels.cache.get('848271927281582080')// welcome Channel
    //         channel.send(msg)
    //     }
    // })

    client.on('messageCreate', message => {
        if (message.content === '.process.exit()') {
            if (message.author.id === '439541365580365835') {
                message.channel.send(`kek, Imma Die :sob:`).then((msg1) => {
                    setTimeout(() => {
                        msg1.delete()
                    },5000)
                })
                resbotlogcha.send(`<@${kartId}>, ${client.user.tag} Has Just Been Shut Downed.`).then(() => {
                    process.exit(-1)
                })
            } else {
                message.channel.send(`Only ${kartDms.tag} Can Switch Me Off.`)
            }
        }
    })


    client.on(`messageCreate`, async message => {
        if (message.author.id === '571027211407196161' && message.guild.id === '867432813557317662') {
            message.embeds.forEach(async (AniGameEmbed) => {
                if (AniGameEmbed.title && AniGameEmbed.title.includes(`Raid Challenge Party`)) {
                    let cardInfo = AniGameEmbed.description.split(`\n\n`)[0]
                    cardInfo = cardInfo.split('\n')[0]
                    let cardName = cardInfo
                    let raidCode = parseInt(AniGameEmbed.footer.text.split(' ')[6]) 
                    let Author = AniGameEmbed.author.name
                    var rdAnnouncementEmbed = new MessageEmbed()
                            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                            .setDescription(`**<@${message.author.id}>'s Raid Summary**\n ‍ `)
                            .setThumbnail(eachCard[3])
                            .setColor(`000000`)
                            .addField(`**Rarity of Raid:**`,`${givenRarity}\n ‍ `,false)
                            .addField(`**Power Level:**`,`${rdPl}\n ‍ `,false)
                            .addField(`**Boss Name:**`,`${eachCard[0]}\n ‍ `,false)
                            .addField(`**Code:**`,`${givenCode}\n ‍ `,false)
                            .addField(`**Preferred Raiders:**`,`${rolestoPing.join('\n')}\n ‍ `,false)
                            .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
                            .setTimestamp()

                }
            })
        }
    })

    client.on("messageCreate", async message => {
        if (message.author.id == '571027211407196161') {
            message.embeds.forEach(async (e) => {
                if (e.title && e.title == `**Raid Lobbies**`) {
                    data = e.description
                    c=0
                    data.split('\n\n').forEach(eachData => {
                        let card = eachData.toLowerCase()
                        card.replace('*','')
                        let RaidId = parseInt(card.split(' ')[9])
                        if (!RaidId || !RaidId.length === 6) {
                            RaidId = parseInt(card.split(' ')[10])
                            if (!RaidId || !RaidId.length === 6) {
                                RaidId = parseInt(card.split(' ')[11])
                                if (!RaidId || !RaidId.length === 6) {
                                    RaidId = parseInt(card.split(' ')[12])
                                    if (!RaidId || !RaidId.length === 6) {
                                        RaidId = parseInt(card.split(' ')[13])
                                        if (!RaidId || !RaidId.length === 6) {
                                            RaidId = parseInt(card.split(' ')[14])
                                            if (!RaidId || !RaidId.length === 6) {
                                                RaidId = ' ‍ '
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //console.log(RaidId)
                        //console.log(eachData)
                        if (card.includes('ririka momobami') || card.includes(`alice zuberg`) || card.includes(`artoria pendragon`) || card.includes(`byakuya togami`) || card.includes(`dio brando`) || card.includes(`doppo kunikida`) || card.includes(`echidna`) || card.includes(`edward elric`) || card.includes(`erza scarlet`) || card.includes(`escanor`) || card.includes(`fuutarou uesugi`) || card.includes(`fuyumi yanagi`) || card.includes(`garou`) || card.includes(`gowther`) || card.includes(`ikumi mito`) || card.includes(`izumi kyoka`) || card.includes(`izumo kamiki`) || card.includes(`jellal fernandes`) || card.includes(`kakine teitoku`) || card.includes(`kenma kozume`) || card.includes(`kurumi tokisaki`) || card.includes(`liala`) || card.includes(`loke`) || card.includes(`mayuri`) || card.includes(`motoyasu kitamura`) || card.includes(`nico robin`) || card.includes(`no face`) || card.includes(`ranpo edogawa`) || card.includes(`riko saikawa`) || card.includes(`ritsu`) || card.includes(`ritsu kageyama`) || card.includes(`ritsu tainaka`) || card.includes(`satoru gojo`) || card.includes(`shalltear bloodfallen`) || card.includes(`shion`) || card.includes(`shoto todoroki`) || card.includes(`sora`) || card.includes(`takehisa hinawa`) || card.includes(`tanjiro kamado`) || card.includes(`violet evergarden`) || card.includes(`wiz`) || card.includes(`wolf`) || card.includes(`yukina`) || card.includes(`yuno gasai`) || card.includes(`zombieman`)) {
                            if (card.includes(`[impossible]`) || card.includes(`[hard]`) || card.includes(`[medium]`) || card.includes(`[easy]`)) {
                                if (card.includes('uncommon') ||card.includes('rare') || card.includes('super') || card.includes('ultra')) {
                                    if (card.includes('[0/6]') || card.includes('[1/6]') || card.includes('[2/6]') || card.includes('[3/6]') || card.includes('[4/6]') || card.includes('[5/6]')) {
                                        client.users.cache.get(`439541365580365835`).send(card)
                                        client.users.cache.get(`439541365580365835`).send(`${RaidId}\n ‍ `)
                                    }
                                }
                            }
                        }
                    })
                    //message.channel.send(eachRaidArray.join('\n'))
                }
            });
        }
      });
    
    client.on("messageCreate", async message => {
        if (message.author.id == '571027211407196161') {
            message.embeds.forEach(async (e) => {
                if (e.title && e.title == `**Raid Lobbies**`) {
                    data = e.description
                    c=0
                    data.split('\n\n').forEach(eachData => {
                        let card = eachData.toLowerCase()
                        card.replace('*','')
                        let RaidId = parseInt(card.split(' ')[9])
                        if (!RaidId || !RaidId.length === 6) {
                            RaidId = parseInt(card.split(' ')[10])
                            if (!RaidId || !RaidId.length === 6) {
                                RaidId = parseInt(card.split(' ')[11])
                                if (!RaidId || !RaidId.length === 6) {
                                    RaidId = parseInt(card.split(' ')[12])
                                    if (!RaidId || !RaidId.length === 6) {
                                        RaidId = parseInt(card.split(' ')[13])
                                        if (!RaidId || !RaidId.length === 6) {
                                            RaidId = parseInt(card.split(' ')[14])
                                            if (!RaidId || !RaidId.length === 6) {
                                                RaidId = ' ‍ '
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //console.log(RaidId)
                        //console.log(eachData)
                        if ((card.includes('ririka momobami') || card.includes(`alice zuberg`) || card.includes(`artoria pendragon`) || card.includes(`byakuya togami`) || card.includes(`dio brando`) || card.includes(`doppo kunikida`) || card.includes(`echidna`) || card.includes(`edward elric`) || card.includes(`erza scarlet`) || card.includes(`escanor`) || card.includes(`fuutarou uesugi`) || card.includes(`fuyumi yanagi`) || card.includes(`garou`) || card.includes(`gowther`) || card.includes(`ikumi mito`) || card.includes(`izumi kyoka`) || card.includes(`izumo kamiki`) || card.includes(`kakine teitoku`) || card.includes(`kenma kozume`) || card.includes(`kurumi tokisaki`) || card.includes(`liala`) || card.includes(`loke`) || card.includes(`mayuri`) || card.includes(`motoyasu kitamura`) || card.includes(`nico robin`) || card.includes(`no face`) || card.includes(`ranpo edogawa`) || card.includes(`riko saikawa`) || card.includes(`ritsu`) || card.includes(`ritsu kageyama`) || card.includes(`ritsu tainaka`) || card.includes(`satoru gojo`) || card.includes(`shalltear bloodfallen`) || card.includes(`shion`) || card.includes(`shoto todoroki`) || card.includes(`sora`) || card.includes(`takehisa hinawa`) || card.includes(`tanjiro kamado`) || card.includes(`violet evergarden`) || card.includes(`wiz`) || card.includes(`wolf`) || card.includes(`yukina`) || card.includes(`yuno gasai`) || card.includes(`zombieman`)) && !card.includes(`tainaka`) && !card.includes(`ritsu kageyama`)) {
                            if (card.includes(`[impossible]`)) {
                                if (card.includes('rare') || card.includes('super') || card.includes('ultra')) {
                                    if (card.includes('[0/6]') || card.includes('[1/6]') || card.includes('[2/6]') || card.includes('[3/6]') || card.includes('[4/6]') || card.includes('[5/6]')) {
                                        client.channels.cache.get('755431495778435082').send(`<@618164180129808406> & <@463960332931694603>`)
                                        client.channels.cache.get('755431495778435082').send(card)
                                        client.channels.cache.get('755431495778435082').send(`.rd join ${RaidId}\n ‍ `)
                                    }
                                }
                            }
                        }
                    })
                    //message.channel.send(eachRaidArray.join('\n'))
                }
            });
        }
      });

    const baseFile = 'commands-base.js'
    const CommandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        files.shift(1)
        files.shift(1)
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                CommandBase(client, option)
            }
        }
    }

    readCommands('commands')

    welcome(client)

})

client.login(token);
