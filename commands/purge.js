const Discord = require('discord.js')

module.exports = {
    name: 'purge',
    description: 'Deletes messages. [STAFF ONLY]',
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (message.member.roles.cache.has('749808045516652556')) {
            message.channel.bulkDelete(amount)
        } else {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription('No.')
            )
        }
    }
}