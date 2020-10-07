const Discord = require('discord.js');

module.exports = {
    name: "servermessage",
    description: "[REDACTED]",
    execute(message, args) {
        message.delete()

        if (message.member.roles.cache.has('749808039653277796')) {
            const announcement = args.join(' ');

            const embed = new Discord.MessageEmbed()
                .setAuthor("Server Message from [REDACTED]")
                .setDescription(announcement)

            message.channel.send(embed)
        } else if (message.member.roles.cache.has('749773765428248666')) {
            const announcement = args.join(' ');

            const embed = new Discord.MessageEmbed()
                .setAuthor("Server Message from [REDACTED]")
                .setDescription(announcement)

            message.channel.send(embed)
        } else {
            message.channel.send("No...")
        }
    }
}