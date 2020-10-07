const Discord = require('discord.js');

module.exports = {
    name: 'cash',
    description: 'Sends cash app link.',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`**Cashapp me below for your purchase.**\n\`Please send proof you paid.\`\n\nhttps://cash.app/$Carsonm4819`)
        message.channel.send(embed);
    }
}