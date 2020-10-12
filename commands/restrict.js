const Discord = require('discord.js');

module.exports = {
    name: "restrict",
    description: "Restricts someone from a certain permission. [STAFF ONLY]",
    execute(message, args) {
        const type = args[0];

        const target = message.mentions.members.first() || message.guild.member(args[1])

        if (message.member.hasPermission("ADMINISTRATOR")) {
            if (!type) {
                return message.channel.send('Missing args: `type`.')
            }

            if (!target) {
                return message.channel.send("ERROR [IDIOT_FOUND]: **`can you actually ping someone next time`**")
            }

            if (type.toLowerCase() === 'embed') {
                message.channel.send("Please Wait...").then((e) => {
                    target.roles.add('761138914105753600').then(() => {
                        e.edit(`Woosh! ${target} has been embed restricted.`)
                    }, e => {
                        message.channel.send("Oh no! An error!\n\n" + e)
                    })
                })
            } else if (type.toLowerCase() === 'reaction') {
                message.channel.send("Please Wait...").then((e) => {
                    target.roles.add('761242895234891807').then(() => {
                        e.edit(`Woosh! ${target} has been reaction restricted.`)
                    }, e => {
                        message.channel.send("Oh no! An error!\n\n" + e)
                    })

                })
            } else if (type === 'emojis') {
                message.channel.send("Please Wait...").then((e) => {
                    target.roles.add('761243196947693598').then(() => {
                        e.edit(`Woosh! ${target} has been emoji restricted.`)
                    }, e => {
                        message.channel.send("Oh no! An error!\n\n" + e)
                    })

                })
            }  else if (type === 'nickname') {
                message.channel.send("Please Wait...").then((e) => {
                    target.roles.add('765042486405234689').then(() => {
                        e.edit(`Woosh! ${target} has been nickname restricted.`)
                    }, e => {
                        message.channel.send("Oh no! An error!\n\n" + e)
                    })

                })
            } else {
                return message.channel.send("Invalid argument **type**.")
            }
        } else {
            message.channel.send("No.")
        }
    }
}