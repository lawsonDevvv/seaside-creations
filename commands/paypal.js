const Discord = require('discord.js');

module.exports = {
    name: 'paypal',
    description: 'Shows payment method.',
    execute(message, args) {
        const pmEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('**PayPal me below for your purchase!** \n' +
                '`(Please send proof you paid.)`\n' +
                '\n' +
                'http://paypal.me/carsonm860'
            )

        message.delete()

        message.channel.send(pmEmbed)
    }
}