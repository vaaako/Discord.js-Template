const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: 'say',
	description: 'Echo echo',
	options: [
		{
			name: 'message',
			description: 'Send Message',
			type: ApplicationCommandOptionType.String,
			require: true
		}
	],
	run: async(client, interaction, guild, args) => {
		const msg = interaction.options.getString('message');
		interaction.reply({
			content: msg
		})
	}
}