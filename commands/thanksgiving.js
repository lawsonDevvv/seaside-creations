const { Collection } = require("discord.js")

const fs = require("fs")

// const prohibitedUsers = fs.readFileSync("C:\\Users\RayRay\\Desktop\\DJS Projects\\Seaside Creations\\prohibitedUsers.txt");

// const prohibitedUsersWriteStream = fs.writeFileSync("C:\\Users\\RayRay\Desktop\DJS Projects\Seaside Creations\prohibitedUsers.txt", prohibitedUsers + `\n${message.author.id}`)

module.exports = {
    name: "thanksgiving",
    description: "Chooses a random product for thanksgving as a thanks for your continued support. // DONT TRY ANY FUNKY SHIT AND TRY AND USE THIS TWICE.",
    async execute(message, args) {
        const productList = [
            "One Free Logo (i)",
            "One Free Banner",
            "One Free Animated Logo",
            "One Free Badge (i)",
            "50% off any Graphic Product (i)",
            "One Free System (LOA, FTO, Twotter)",
            "One Free Roleplay Accesory",
            "@ here Partnership (i)",
            "@ everyone Partnership (i)",
            "@ here Partnership Channel (i)",
            "@ everyone Partnership Channel (i)",
            "25% Off any Product (i)",
            "50% Off any Product",
            "75% Off any Product",
            "One Free Product",
            "Free Basic Moderation Bot",
            "One Free Web App",
            "Custom Role (i)",
        ]

        const disallowedUsers = new Collection();

        if (!disallowedUsers.has(`${message.author.id}`)){
            // const prohibitedUsersWriteStream = fs.writeFileSync("../prohibitedUsers.txt", prohibitedUsers + `\n${message.author.id}`)

            const msg = await message.channel.send("Rolling prize...\n\nDid you know that I have over 20 commands? Do -cmds to see all of them!");

            setTimeout(() => msg.edit(`${message.author}'s prize: ` + productList[Math.floor(Math.random() * productList.length)]), 3000)
        } else {
            message.channel.send("> Nope. Nice try. Maybe next time- actually, no. Never next time. Why are you still reading this, because you know you got caught? Eh, it is what it is. Anyways, go do something other than try to find free products and break my bots.\n\n- PossiblySebo#0001 [Lawson G. | COO]")
        }
    }
}