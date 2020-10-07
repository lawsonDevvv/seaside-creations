const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'Can you read? [STAFF ONLY]',
    execute(message, args) {
        const person = message.mentions.members.first();



        const kickEmbedWithoutPermissions = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true, format: "png"}))
            .setDescription(`Congrats. If you actually thought we would let you kick someone without required perms, you must be delusional. Nice try.`)
            .setFooter('You just earned yourself the muted role.')

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send(kickEmbedWithoutPermissions);

        }

        if (!person) {
            message.channel.send('Oi. Can you like, actually ping someone?')
        } else {
            const kickEmbedWithPermissions = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true, format: "png"}))
                .setDescription(`Kicked ${person}`)

            message.channel.send(
                new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription('Are you sure you would like to initiate protocol "JÆGER BOMBER" on this [no gender specified]?\n**`yes` for yes, `no` for no.\n\n*Timeout in 20 seconds.*')
            )

            const collector = message.channel.createMessageCollector(
                c => c.author.id === message.author.id,
                {time: 20000, max: 1}
            )

            collector.on('end', (async (collected, reason) => {
                const reasonForKick = args.slice(1).join(' ')

                if (reason === 'time') {
                    await message.channel.send(new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setDescription('You were too slow. Maybe try being faster?\n\n*its not hard. just be fast.*')
                    )
                } else {
                    if (collected.first().content.toLowerCase() === 'yes') {
                        await person.send(new Discord.MessageEmbed()
                            .setAuthor(message.author.tag, message.author.displayAvatarURL())
                            .setDescription('Congrats. You got kicked for: ' + reasonForKick + '\n\nKicked by ' + message.author.tag)
                        )

                        await person.kick(`${reasonForKick} || Kicked by ${message.author.tag}`).then(r => message.channel.send(new Discord.MessageEmbed()))

                        await message.channel.send(kickEmbedWithPermissions)
                    } else if (collected.first().content.toLowerCase() === 'no') {

                    }
                }
            }))
        }
    }
}
