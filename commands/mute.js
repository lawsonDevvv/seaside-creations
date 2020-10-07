const Discord = require('discord.js')

module.exports = {
    name: 'mute',
    description: 'Mutes a person. [STAFF ONLY]',
    execute(message, args) {
        const person = message.mentions.members.first() || message.guild.member(args[0]);

        const reasonForMute = args.slice(1).join(' ');

        if (!person) return message.channel.send('**No.**');

        if (message.member.roles.cache.has('749808045516652556')) {
            message.channel.send('Are you sure you want to initiate protocol "𝙎𝙄𝙇𝙀𝙉𝘾𝙀𝙍" on this' +
                '[can\'t assume genders, it\'s 2020]?\n\n' +
                '`yes` for yes, `no` for no.');

            const collector = message.channel.createMessageCollector(
                c => c.author.id === message.author.id,
                {time: 20000, max: 1}
            )

            collector.on('end', (collected, reason) => {
                if (reason === 'time') {
                    const embed = new Discord.MessageEmbed()
                        .setAuthor('You were too slow. Command timed out. BE FASTER.')
                    message.channel.send(embed);
                } else {
                    if (collected.first().content === 'yes') {
                        person.roles.add('749808002231435325', 'This idiot got muted.');
                        message.channel.send(new Discord.MessageEmbed()
                            .setAuthor('Muted ' + person.user.tag + ' for ' + reasonForMute)
                        );
                    }

                    if (collected.first().content === 'no') {
                        message.channel.send(new Discord.MessageEmbed()
                            .setAuthor('Mercy has been given.')
                        );
                    }
                }
            })
        } else {
            return message.channel.send('**No.**');
        }
    }
}
