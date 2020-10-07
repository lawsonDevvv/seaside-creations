const Discord = require('discord.js');

module.exports = {
    name: 'start',
    description: 'Starts off a ticket with a police introduction. [STAFF ONLY]',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Hello, my name is ${message.author}, how many I assist you today?`)
        ;

        message.delete();

        message.channel.send(embed);
    }
}