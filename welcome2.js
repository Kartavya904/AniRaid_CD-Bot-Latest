const Discord = require('discord.js')
module.exports = (client) => {
    const targetChannel1 = '729876610919956511' //discipline rules
    const targetChannel2 = '747819830345990264' //roles
    const targetChannel3 = '754667367820296223' //public lounge
    const targetChannel4 = '841033006390181928' //spamming
    const targetChannel5 = '738252628605141043' //lecture halls
    const targetChannel6 = '727181780251312198' //announcement
    const targetChannel7 = '740486025616425001' //clan memories
    const targetChannel8 = '754668724371587135' //ophelius farmers 
    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)
    const emojis ={
        araara_blobs_darkver : 'Testing',
        pure_smile_blobs : 'Testing 2'
    }
    let diffEmojis=[]  
    for (let keys in emojis) {
        let emoji = getEmoji(keys)
        diffEmojis.push(emoji)
    }

    client.on('guildMemberAdd', (member) => {
        if (member.guild.id === '727093852296446002') {
            //console.log(member)
            const message = `Welcome to Ophelius Famiglia, <@${member.id}> \n We have only one thing to say: "RUN AWAY WHILE YOU CAN!" \n First things first, head to ${member.guild.channels.cache.get(targetChannel1)} and read them once so you don't accidentally offend anyone! Head to ${member.guild.channels.cache.get(targetChannel2)} to assign yourself some fun roles. Remember, don't trip over yourself while running away from us. We might catch you ${diffEmojis[0]} \nCasual conversations go to ${member.guild.channels.cache.get(targetChannel3)} and spam images or rants go to ${member.guild.channels.cache.get(targetChannel4)} and ${member.guild.channels.cache.get(targetChannel5)} respectively. If you're here for the weekly and milestone giveaways, make sure to get the 'Giveaway Ping' role. Any and all announcements related to the clan and server go to ${member.guild.channels.cache.get(targetChannel6)} so amke sure you check that out. Don't be shy, say a hi in ${member.guild.channels.cache.get(targetChannel3)} , we're all friendly here! Also, never check the pins in ${member.guild.channels.cache.get(targetChannel3)} . You'll be scarred forever. Go check out ${member.guild.channels.cache.get(targetChannel7)} for some weird snippets of conversations and clan members flexing their raid rewards. If you wanna order fodders from us, got to ${member.guild.channels.cache.get(targetChannel8)}  . We have pretty good discounts. Go on now, explore~ ${diffEmojis[1]} `
            const channel = member.guild.channels.cache.get('727181732675190975')// welcome Channel
            channel.send({ content : `${message}` })
        }
    })

    client.on('guildMemberRemove', (member) => {
        if (member.guild.id === '727093852296446002') {
            //console.log(member)
            const message2 = `Goodbye <@${member.id}>, you decided to heed our advice and escape from our grasp.`
            const channel2 = member.guild.channels.cache.get('730090320628547694') //goodbye channel
            channel2.send(message2)
        }
    })
}
//${member.guild.channels.cache.get(targetChannel1)}