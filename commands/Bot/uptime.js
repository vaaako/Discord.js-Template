const { langHandler } = require('../../files/translations/langHandler.js');

const { MessageEmbed } = require("discord.js");
const ee = require("../../config/embed.json");

function duration(ms) {
	const sec = Math.floor((ms / 1000) % 60).toString();
	const min = Math.floor((ms / (60 * 1000)) % 60).toString();
	const hrs = Math.floor((ms / (60 * 60 * 1000)) % 60).toString();
	const days = Math.floor((ms / (24 * 60 * 60 * 1000)) % 60).toString();
	return `\`${days} Days\`,\`${hrs} Hours\`,\`${min} Minutes\`,\`${sec} Seconds\``;
}

module.exports = {
	name: "uptime",
	category: "Bot",
	aliases: [],
	usage: "uptime",
	run: async (client, message) => {
		const LANGUAGE = langHandler(message).bot.uptime;
		let embed = new MessageEmbed()
			.setTitle(`:white_check_mark: **${client.user.username}** is since:\n ${duration(client.uptime)} online`)
			.setFooter({ text: LANGUAGE.EMBED.footer, iconURL: ee.footericon })
			.setTimestamp()
			.setColor(ee.color);
		message.channel.send({ embeds: [embed] });
	}
};
