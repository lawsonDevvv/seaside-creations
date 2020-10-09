const Discord = require('discord.js');

module.exports = {
    name: 'end',
    description: 'Ends a ticket with a polite conclusion. [STAFF ONLY]',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Thanks for choosing Seaside Creations™ Please leave ${message.user} a review in <#751651872724484137>`)
        ;

        message.delete();

        message.channel.send(embed);
    }
}
