const { getUser } = require('../../files/scripts/functions.js');
const { banUser } = require("../../files/scripts/memberlist-check.js");

module.exports = {
	name: "botban",
	category: "",
	aliases: [],
	usage: "botban <user> <reason>",
	description: "You know",
	whitelistOnly: true,
	run: async (client, message, args) => {
		const user = await getUser(client, args[0], true);
		const reason = args.slice(1).join(' ');

		if(!user) return message.reply("Invalid User!");
		if(!reason) return message.reply("No Reason!");

		banUser(user, reason);
		return message.reply("User banned!");
	}
};
