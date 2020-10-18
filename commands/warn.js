const {sqlite} = require("../seaside")

module.exports = {
    name: "warn",
    description: "Take a guess. [STAFF ONLY]",
    execute(message, args) {
        let db = new sqlite.Database("../databse.db", sqlite.OPEN_READWRITE);

        let select = db.prepare("INSERT INTO warns (?, ?, ?, ?, ?, ?, ?)")

        const target = message.mentions.members.first()

        const reason = args.slice(1);

        // SERVER_ID, USER_ID, REASON, CASE_NUMBER, ACTIONED_BY, TYPE

        select.run(message.guild.id, target.user.id, reason, 1, message.author.id, "Warn");

        message.channel.send("Hopefully this worked.");
    }
}