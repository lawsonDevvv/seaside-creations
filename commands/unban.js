const Discord = require('discord.js')

module.exports = {
    name: 'unban',
    description: 'Unbans a user by user ID.',
    async execute(message, args) {
        const person = args[0];

        if (!person) return message.channel.send('No.')

        await message.guild.members.unban(args[0]);

        await message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Unbanned \'em!')
            .setDescription(`Unbanned <@${person}>`)
        )
    }
}