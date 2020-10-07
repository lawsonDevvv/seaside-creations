const Discord = require("discord.js");

const ms = require('pretty-ms')

module.exports = {
    name: "uptime",
    description: "Displays how long the bot has been online.",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Current uptime: ${ms(message.guild.me.user.client.uptime)}`)
        message.channel.send(embed)
    }
}