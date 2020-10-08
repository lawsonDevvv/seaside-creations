const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Unmutes a person. [STAFF ONLY]',
    execute(message, args) {
        const target = message.mentions.members.first() || message.guild.member(args[0]);

        const reason = args.slice();

        if (message.member.roles.cache.has('749808039653277796')) {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else if (message.member.roles.cache.has('749808038017237065')) {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else if (message.member.roles.cache.has('749773769333145600')) {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else if (message.member.roles.cache.has('749777757696950303')) {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else if (message.author.id === "415278805683404821") {
            target.roles.remove('749808002231435325').then(member => member.send("You were un-muted."));
            message.channel.send(`Unmuted ${target}.`);
        } else {
            message.channel.send(new Discord.MessageEmbed().setAuthor("No."));
        }
    },
};