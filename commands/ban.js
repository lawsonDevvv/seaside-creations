const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Bans a user. What did you expect? [ADMINISTRATOR ONLY]',
    async execute(message, args) {
        const person = message.mentions.members.first() || message.guild.member(args[0]) || args[0];

        const reasonForBan = args.slice(1).join(' ')

        if (message.member.hasPermission("ADMINISTRATOR")) {
            await message.channel.send('Do you want to initiate protocol "𝘼𝙏𝙊𝙈𝙄𝘾 𝘽𝙊𝙈𝘽" on this infidel?');

            const collector = message.channel.createMessageCollector(
                c => c.author.id === message.author.id,
                {time: 30000, max: 1}
            )

            collector.on('end', async (collected, reason) => {
                if (reason === 'time') {
                    await message.channel.send(new Discord.MessageEmbed()
                        .setDescription('Command timed out.')
                    )
                } else {
                    if (collected.first().content === 'yes') {
                        await message.guild.members.ban(person).catch(async (e) => {
                            message.channel.send(`\`\`\`xl\nERROR\n\n${e}\n\`\`\``)
                        });
                        await message.channel.send(new Discord.MessageEmbed()
                            .setDescription(`Successfully yeeted ${person || "[PERSON NOT IN SERVER]"} into oblivion.`)
                        );
                    }

                    if (collected.first().content === 'no') {
                        const e = new Discord.MessageEmbed()
                            .setAuthor('Mercy has been given.')

                        await message.channel.send(e)
                    }
                }
            })
        } else {
            await message.channel.send('No.')
        }
    }
}