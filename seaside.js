/*
module.exports = {
    name: 'XXX',
    description: 'XXXXXXXXX',
    execute(message, args) {

    }
}
*/

const sqlite = require("sqlite3").verbose();

const chalk = require('chalk');

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const fs = require('fs');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    console.log(chalk.blueBright(`Loaded ${file}`))

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    bot.commands.set(command.name, command);
}

bot.on('ready', async () => {
    const { generate } = require('build-number-generator')

    const buildNumber = generate()

    console.log(chalk.blueBright(
    `[---------------------------------------------------------------]\n
    Bot Ready at ${new Date().toLocaleString()} EST.
    \n    Build Number ${buildNumber}
[---------------------------------------------------------------]`
    ));

    let db = new sqlite.Database("./databse.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

    db.run("CREATE TABLE IF NOT EXISTS warns (SERVER_ID, USER_ID, REASON, CASE_NUMBER, ACTIONED_BY, TYPE)")

    await bot.user.setActivity('Version: ' + generate({version: '1.0.3'}))
});

bot.on('guildMemberAdd', member => {
    const welcomeEmbed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/738114456571346954/752742548979581028/giphy.gif')
        .setTitle('Welcome!')
        .setColor('RANDOM')
        .addField('User', member, true)
        .addField('Date Created', member.user.createdAt.toLocaleString() + " EST", true)
        .addField('Date Joined (Current Date)', member.joinedAt.toLocaleString() + " EST", true)
        .setTimestamp(new Date())
    const channel = bot.
                        channels.
                                cache.
                                        get('750038741330165760')
                                                                .send(member, welcomeEmbed)
});

bot.on('messageDelete', (message) => {

})

// bot.on('guildMemberRemove', (member) => {
//     const welcomeEmbed = new Discord.MessageEmbed()
//         .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
//         .setTitle('Sorry to see you go!')
//         .setColor('RANDOM')
//         .addField('User', member, true)
//         .addField('Date Created', member.user.createdAt.toLocaleString() + " EST", true)
//         .addField('Date Joined', member.joinedAt.toLocaleString() + " EST", true)
//         .addField("Left at", new Date().toLocaleString() + " EST")
//         .setTimestamp(new Date())
//
//     const channel = bot.channels.cache.get('750038743691296930')
//
//     channel.send(welcomeEmbed)
// })

bot.on('message', async message => {
    // if (message.channel.type === 'dm') {
    //     const channel = bot.guilds.cache.get('749772439365615668').channels.cache.find(e => e.name.includes(message.author.id))
    //
    //     if (!channel) {
    //         const newChannel = (await bot.guilds.cache.get('749772439365615668').channels.create(message.author.id));
    //
    //         await newChannel.send(`From ${message.author.tag} (${message.author.id}): ${message.content}`);
    //
    //         await newChannel.updateOverwrite('749808045516652556', {
    //             SEND_MESSAGES: true,
    //             VIEW_CHANNEL: true,
    //             READ_MESSAGE_HISTORY: true,
    //             MANAGE_MESSAGES: true
    //         })
    //
    //         await newChannel.setParent('761478037614755850');
    //
    //         if (newChannel.name === bot.user.id) await newChannel.delete();
    //     } else {
    //         channel.send(`From ${message.author.tag} (${message.author.id}): ${message.content}`);
    //     }
    // }
    //
    // if (message.guild !== false) {
    //     if (message.channel.parent.name === 'ModMail') {
    //         if (message.author.bot) return;
    //
    //         const user = message.channel.name;
    //
    //         await bot.users.cache.get(user).send(`From ${message.author.tag} (${message.author.id}): ${message.content}`);
    //     }
    // }

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(message.member.hasPermission('ADMINISTRATOR') ? chalk.blue(message.content) : chalk.red(message.content));

    if (command === 'help') {
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    // I stole code from PossiblySebo#0001
    
    // I stole code from PossiblySebo#0001
        const commandsForHelpCMD = bot.commands.map(m => `-${m.name} | ${m.description}`);

        if (!args[0]) {
            await message.channel.send(new Discord.MessageEmbed()
                .setTitle('Command list:')
                .setDescription(commandsForHelpCMD)
                .setColor('RANDOM')
            );
        } else if (args[0]) {
            const commandToLookUp = bot.commands.get(args[0])

            const embed = new Discord.MessageEmbed()
                .setTitle("-" + commandToLookUp.name)
                .setDescription(`-${commandToLookUp.name} || ${commandToLookUp.description}`)

            message.channel.send(embed)

            if (!commandToLookUp) {
                return await message.channel.send(new Discord.MessageEmbed()
                    .setTitle('Command list:')
                    .setDescription(commandsForHelpCMD)
                    .setColor('RANDOM')
                );
            }
        }
    }

    if (message.content.toLowerCase() === `<@${bot.user.id}> prefix`) {
        message.channel.send(`My prefix is ${PREFIX}`)
    }

    if (command === 'ping') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'pm') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'kick') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'claim') {
        bot.commands.get(command).execute(message, args, bot);
    }

    if (command === 'rename') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'tos') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'ven') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'softban') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'ban') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'unban') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'start') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'claim') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'whois') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'cash') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'paypal') {
        bot.commands.get(command).execute(message, args);
    }

    if (command === 'mute') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'eval') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'roleid') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'unmute') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'purge') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'uptime') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'restrict') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'suggest') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'servermessage') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'docs') {
        bot.commands.get(command).execute(message, args)
    }

    if (command === 'end') {
        bot.commands.get(command).execute(message, args)
    }
});

bot.login(TOKEN);

module.exports = {
    sqlite
}
