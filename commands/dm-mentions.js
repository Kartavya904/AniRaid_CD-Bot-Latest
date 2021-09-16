module.exports = {
    commands : ['dm'],
    callback : (client, message, arguments, text) => {
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please Mention A User To DM.");
        if (!arguments[1]) return message.channel.send('Please Provide Me With A Text To DM.');
        user.send("Message sent by " + message.author.tag + "\n" + arguments.slice(1).join(" "));
        return;
    }
}




//const { mentions, content, channel } = message 
//        const target = mentions.users.first()
//        if (target) {
//            const targetMember = message.guild.members.cache.get(target.id)
//            const tag = `<@${targetMember}>`
//            if (text) {
//                message.targetMember.send(`Hi, I Have Been Directed To DM You, By ${message.author.username}.`)
//                message.targetMember.send(text)
//                channel.send(`I Have Succesfully DM'd ${tag}`)
//                return
//            } else {
//                channel.send('Please Provide Me With A Text To DM.')
//                message.targetMember.send(`Hi, I Have Been Directed To DM You, By ${message.author.username}, But They Left The Message To Send Blank.`)
//               return
//            }
//        } else {
//            message.channel.send('Please Mention A User To DM.')
//            return
//        }