module.exports = {
    commands : ['purge', 'purgeit'],
    expectedArgs : '<No. Of Messages To Purge.>',
    minArgs : 1,
    maxArgs : 1,
    callback : async (client, message, arguments, text) => {

        const number = arguments.join(' ')

        if(!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.channel.send('You Do Not Have The Required Perms.')

        } else {
            if(!number) {
                    message.channel.send('Please Enter A Valid Number.')
            } else {
                if(isNaN(number)) {
                        message.channel.send('Entered Number Is Not A Valid Number.')
                } else {
                    if(number > 100) {
                        message.channel.send('Cannot Purge Over 100 Messages.')
                    } else {
                        if(number < 1) {
                            message.channel.send('Cannot Purge Less Than 1 Message.').then((msg) => {
                                setTimeout(() => {
                                    msg.delete()
                                }, 3000)
                            })
                        } else {
                            const num = parseInt(number) + 1
                            const awaits = await message.channel.bulkDelete(num)
                            message.channel.send(`Last ${number} Messages Have Been Purged`).then(sent => sent.delete({ timeout: 3000 }))
                        }
                    }
                }
            }         
        }
    }
}   