const Discord = require("discord.js")

module.exports = {
    name: "roleid",
    description: "Returns the role ID of a role [MENTIONING THE ROLE DOES NOT WORK].",
    execute(message, args) {
        const roleToFind = args.join(" ");

        const role = message.guild.roles.cache.find(r => r.name === roleToFind);

        if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription("Couldn't find the role."));

        if (role) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`Role ID: ${role.id}`));
        }
    }
}