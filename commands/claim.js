const Discord = require('discord.js')

module.exports = {
    name: 'claim',
    description: 'Claim a ticket [STAFF ONLY].',
    async execute(message, args, client) {
        const channel = await client.channels.cache.get('752690768770236447');

        if (message.member.roles.cache.has('749808045516652556')) {
            if (message.channel.parent.name.toLowerCase() === 'Support Tickets') {
                const claimEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .addField('Claimer', message.author, true)
                    .addField('Ticket', message.channel.toString(), true)

                channel.send(claimEmbed);
            } else {
                await message.channel.send(new Discord.MessageEmbed()
                    .setAuthor('No.', message.author.displayAvatarURL())
                    .setDescription('No.')
                )
            }
        } else {
            await message.channel.send(new Discord.MessageEmbed()
                .setAuthor('AAAAAAAAAAAA', message.author.displayAvatarURL())
                .setDescription('u no have permission. u bad. stap using comans or els u get baned. >:[')
            )
        }
    }
}