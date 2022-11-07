const { langHandler } = require('../../files/translations/langHandler.js');
const { allowedCheck, bannedCheck } = require("../../files/scripts/memberlist-check.js");
const { prefix } = require("../../config/config.js"); // loading config file with token and prefix, and settings

module.exports = async (client, interaction) => {
	if(interaction.isButton()) return interaction.deferUpdate(); // To receive button

	if(!interaction.isChatInputCommand()) // Receive chat input command
		return
	const cmd = client.slashCommands.get(interaction.commandName);
	if(!cmd)
		return interaction.followUp({
			content: "An Error Has Occered In Slash Command"
		});

	// Check if user is banned
	if(bannedCheck(message.author.id))
		return message.reply(LANGUAGE.banned.replace('$REASON', bannedCheck(message.author.id)).replace('$PREFIX', prefix));

	// Check if command is admin only use
	if(cmd.adminOnly &&
		!interaction.member.permissions.has('ADMINISTRATOR') && !allowedCheck(interaction.user.id)) { // Checking perms
			return interaction.reply(LANGUAGE.adminOnly);
	}

	// Check if command is NSFW
	if(command.nsfw && !message.channel.nsfw)
		return message.reply(LANGUAGE.nsfw);


	const args = [];

	for(let option of interaction.options.data) {
		if(option.type === "SUB_COMMAND") {
			if(option.name) args.push(option.name);
				option.options ?.forEach((x) => {
					if(x.value)
					args.push(x.value);
				})
		} else if(option.value)
		args.push(option.value);
	}
	interaction.member = interaction.guild.members.cache.get(interaction.user.id);
	cmd.run(client, interaction, interaction.options)
	.catch((e) => console.log(e));
}