const Discord = require('discord.js')

module.exports = {
    name: "docs",
    description: "This command is public, but you probably don't know how to use it.",
    execute(message, args) {
        const request = require('request')

        const query = args[0].replace("#", ".")

        const src = args[1] || "stable";

        request(`https://djsdocs.sorta.moe/v2/embed?src=${src}&q=${query}`, { json: true }, (err, res, body) => {
            message.channel.send(new Discord.MessageEmbed(body))
            console.log(body.toString() + "\n\n\n\n" + res.toString())
        })
    }
}