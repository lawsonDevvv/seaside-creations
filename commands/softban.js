const Discord = require('discord.js')

module.exports = {
    name: 'softban',
    description: 'Bans a user, then quickly unbans them to get rid of their messages. [STAFF ONLY]',
    execute(message, args) {
        const person = message.mentions.members.first() || message.guild.member(args[0]);

        if (!person) return message.channel.send('No.');

        if (message.member.roles.cache.has('749808045516652556')) {
            const reasonForBan = args.slice(1).join(' ');

            message.channel.send('Are you sure you want to initiate protocol "𝙃𝙄𝙍𝙊𝙎𝙃𝙄𝙈𝘼" on this [no gender specified]?')

            const collector = message.channel.createMessageCollector(
                c => c.author.id === message.author.id,
                {max: 1, time: 20000},
            )

            collector.on('end', (collected, reason) => {
                if (reason === 'time') {
                    message.channel.send(new Discord.MessageEmbed()
                        .setAuthor(`Congrats.`, message.author.displayAvatarURL())
                        .setDescription('Try typing faster next time.')
                    )
                } else {
                    if (collected.first().content === 'yes') {
                        person.ban({reason: reasonForBan + " | Banned by " + message.author.tag, days: 7})
                        message.guild.members.unban(person)
                        message.channel.send(new Discord.MessageEmbed()
                            .setAuthor('В СЛЕДУЮЩИЙ РАЗ, НЕ БЫТЬ ИДИОТОМ.', 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F75ad7980-ecf7-11e8-8888-d940336e3709.jpg?crop=3000%2C1687%2C0%2C156&resize=1180')
                        )
                    }

                    if (collected.first().content === 'no') {
                        message.channel.send(new Discord.MessageEmbed()
                            .setDescription('You got lucky.')
                        )
                    }
                }

            });
        } else {
            return message.channel.send('**no.**')
        }
    }
}