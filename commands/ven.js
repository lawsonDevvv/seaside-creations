const Discord = require('discord.js')


module.exports = {
    name: 'ven',
    description: 'Shows link to pay via Venmo.',
    async execute(message, args) {
        const link = 'https://venmo.com/code?user_id=3092356614062080749';

        await message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Pay us using Venmo here!\n\n**${link}**`)
        )
    }
}