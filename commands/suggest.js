const Discord = require('discord.js');

module.exports = {
    name: "suggest",
    description: "Suggests something.",
    execute(message, args) {
        if (message.channel.id !== '752672103375044798') {
            return message.channel.send("**No.**")
        }

        message.channel.send("What do you want to suggest?\n\n**Command times out in 200 seconds, say `cancel` to cancel command.**")

        const collector = message.channel.createMessageCollector(c => message.author.id === c.author.id, {time: 200000, max: 1});

        collector.on('end', ((collected, reason) => {
            if (reason === 'time') return message.channel.send("Command timed out.");

            const suggestionChannel = message.guild.channels.cache.get('750038816064274532')

            const suggestionEmbed = new Discord.MessageEmbed()
                .setAuthor(`New suggestion from ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
                .setDescription(collected.first().content)

            if (collected.first().content.toLowerCase() === 'cancel') return message.channel.send("Cancelled command.")

            message.channel.send("Thank's for your feedback!")

            suggestionChannel.send(suggestionEmbed).then((e) => {
                e.react("✅")
                e.react("🟧")
                e.react("🚫")
            })
        }))
    }
}