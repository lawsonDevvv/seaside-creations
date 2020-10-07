const Discord = require('discord.js');

module.exports = {
    name: 'whois',
    description: 'Displays user info.',
    execute(message, args) {
        const person = message.mentions.members.first() || message.guild.member(args[0]);

        if (!person) {
            const embed1 = new Discord.MessageEmbed()
                .addField('Tag', message.author.tag, true)
                .addField('ID', `\`${message.author.tag} (${message.author.id})\``, true)
                .addField('Avatar URL', `[Click here](${message.author.displayAvatarURL()})`, true)
                .addField('Account Created', message.author.createdAt.toLocaleString() + " EST", true)
                .addField('\u200b', '\u200b', true)
                .addField('Joined', message.member.joinedAt.toLocaleString() + " EST",true)
                .addField(`Roles (${message.member.roles.cache.size})`, `${message.member.roles.cache.map(e => e.toString())}`, true)
                .setTimestamp(new Date())
                .setThumbnail(message.author.displayAvatarURL({format: "jpg", dynamic: true}))
                .setColor('RANDOM')
            message.channel.send(embed1)
        } else {
            const embed2 = new Discord.MessageEmbed()
                .addField('Tag', person.user.tag, true)
                .addField('ID', `\`${person.user.tag} (${person.user.id})\``, true)
                .addField('Avatar URL', `[Click here](${person.user.displayAvatarURL()})`, true)
                .addField('Account Created', person.user.createdAt.toLocaleString() + " EST", true)
                .addField('\u200b', '\u200b', true)
                .addField('Joined', person.joinedAt.toLocaleString() + " EST",true)
                .addField(`Roles (${person.roles.cache.size})`, `${person.roles.cache.map(e => e.toString() + ',')}`, true)
                .setTimestamp(new Date())
                .setThumbnail(person.user.displayAvatarURL({format: "jpg", dynamic: true}))
                .setColor('RANDOM')
            message.channel.send(embed2)
        }
    },
}