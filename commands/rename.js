const Discord = require('discord.js')

module.exports = {
    name: 'rename',
    description: 'Renames a ticket channel. [STAFF ONLY]',
    execute(message, args) {
        const channelName = args.join('-');

        const oldName = message.channel.name

        if (message.member.roles.cache.has('749808045516652556')) {
            if (message.channel.parent.name === 'Ticket Panel') {
                message.channel.setName(channelName).catch(e => {
                    console.log(e);
                    message.channel.send(new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setDescription('We ran into an issue renaming the channel.')
                    )
                }).then(e => {

                })
            }
        }
    }
}
