const Discord = require('discord.js')

module.exports = {
    name: 'tos',
    description: 'Shows the terms of service.',
    execute(message, args) {
        message.channel.send(new Discord.MessageEmbed().setDescription('Terms of Service for Seaside Creations®\n' +
            '\n' +
            'Seaside Creations® agrees to furnish services to the Subscriber, subject to the following (“Terms of Service”). Seaside Creations®, the company hereafter referred to as,\n' +
            '(“Seaside Creations®“), (“Us”), (“We”) and The Client, (“Customer”), (“Client”) and (“You”). Use of Seaside Creations® Service constitutes acceptance and agreement to the\n' +
            'TOS (“Terms of Service”). All provisions of this contract are subject to change from time to time at the discretion of Seaside Creations Subscriber understands that change to the TOS by Seaside Creations®\n' +
            '\n' +
            'Refunds and Disputes\n' +
            '\n' +
            'Seaside Creations® provides NO money back guarantee.\n' +
            'By submitting payment, you agree to our Terms of Service. If a billing dispute / chargeback such as but not limited to PayPal or Cashapp or Venmo dispute / chargeback is raised, the billing account will be suspended until the dispute / chargeback has been resolved. This includes all services associated with the billing account.\n' +
            '\n' +
            'Liability\n' +
            '\n' +
            'Seaside Creations®, under no circumstances, shall be held liable for any data loss, disruption of information, or distribution of information including that of unauthorized access to our server systems or any other loss of data. Your responsible for actions done to your product, But we try our best to get you best products and service.\n' +
            '\n' +
            '***We guarantee customer satisfaction!***\n' +
            '\n' +
            'Our Company always abides by discord Terms!\n' +
            'https://discord.com/terms'
            )
        )
    }
}