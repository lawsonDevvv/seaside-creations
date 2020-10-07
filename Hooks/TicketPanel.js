const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setDescription("How to use tickets.\n" +
    "\n" +
    "-new (Reason)\n" +
    "\n" +
    "Failure to put a reason will result in a warn!\n" +
    "\n" +
    "Status:\n" +
    ":under_maintenance: Being Developed.\n" +
    ":online: Ready to open!\n" +
    ":Offline: Wont work.\n" +
    "\n" +
    "--Current Status--\n" +
    ":online:")
    .setTimestamp(new Date)

const hook = new Discord.WebhookClient("761597727208374273", "8OP7e7QI41DXzx10zyiiddJMXRM0r-woGb4Nl0Cv_hPKua7VGa5h48uEMB0MiLoZ0ioi")

hook.send(embed)

// https://discordapp.com/api/webhooks/761597727208374273/8OP7e7QI41DXzx10zyiiddJMXRM0r-woGb4Nl0Cv_hPKua7VGa5h48uEMB0MiLoZ0ioi