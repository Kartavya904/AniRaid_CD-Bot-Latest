module.exports = {
    commands: ['nuke', 'deletechannel'],
    expectedArgs : '',
    permissionError : 'You Do Not Have Enough Permissions To Run The Command.',
    minArgs : 0,
    maxArgs : 0,
    permissions: ['ADMINISTRATOR'],
    callback: async ( client, message, arguments, text ) => {
        let channel = client.channels.cache.get(message.channel.id)
        let posisi = channel.position
		let filter = (m) => m.author.id === message.author.id
		message.channel.send(
			'Are you sure you want to nuke this channel? (Yes | No)'
		)
		message.channel
			.awaitMessages({
				filter : filter,
				max: 1,
				time: 20000,
				errors: ['time'],
			})
			.then((message) => {
				message1 = message.first()
				if (
					message1.content.toLowerCase() == 'yes' ||
					message1.content.toLowerCase() == 'y'
				) {
					channel.clone().then((channel2) => {
						channel2.setPosition(posisi)
						channel.delete()
						channel2.send(
							' **This Channel has Been Nuked!** | https://i.pinimg.com/originals/06/c3/92/06c392b847166a9a671bfcd590d8fff7.gif'
						)
					})
				} else if (
					message1.content.toLowerCase() == 'no' ||
					message1.content.toLowerCase() == 'n'
				) {
					return message1.channel.send("Ok, I won't nuke ")
				} else {
					return message1.channel.send(`Invalid Response`)
				}
			})
	}

}