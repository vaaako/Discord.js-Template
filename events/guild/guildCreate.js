const { langHandler } = require('../../files/translations/langHandler.js');

const { MessageEmbed } = require('discord.js');
const { prefix } = require("../../config/config.js");

// When join a server
module.exports = async (client, guild) => {
	guild.systemChannel.send(`Thanks for adding me on your server \nI'm a Discord.js template made by Vako#8782 \nMy prefix is \`${prefix}\``)
		.catch(() => console.log("Welcome Message => [ Ignore ]"));
};


