const { getUser } = require('../../files/scripts/functions.js');

module.exports = {
	name: "direct",
	category: "",
	aliases: ["dm"],
	usage: "direct <user>",
	whitelistOnly: true,
	run: async (client, message, args) => {
		const user = getUser(client, args[0]) || message.author;
		const msg = args.slice(1).join(" ");

		user.send(msg).then(() => { 
			message.reply("Message sent");
		}).catch(() => {
			message.channel.send("Mention a valid user");
		});
	}
};
