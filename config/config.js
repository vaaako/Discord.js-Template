require('dotenv').config({ path:'config/.env' })
module.exports = {
	TOKEN: process.env.TOKEN,
	prefix: "-",

	// Add here yout bot's necessary permissions
	// This is just a template
	necessary_permissions: [
		// GENERAL PERMISSIONS
		'MANAGE_CHANNELS',
		'KICK_MEMBERS',
		'BAN_MEMBERS',
		'CREATE_INSTANT_INVITE',
		'CHANGE_NICKNAME',
		'MANAGE_NICKNAMES',
		'MANAGE_WEBHOOKS',
		'VIEW_CHANNEL',
		'MANAGE_EVENTS',
		'MODERATE_MEMBERS',

		// TEXT PERMISSIONS
		'SEND_MESSAGES',
		'SEND_MESSAGES_IN_THREADS',
		'SEND_TTS_MESSAGES',
		'MANAGE_MESSAGES',
		'EMBED_LINKS',
		'ATTACH_FILES',
		'READ_MESSAGE_HISTORY',
		'USE_EXTERNAL_EMOJIS',
		'USE_EXTERNAL_STICKERS',
		'ADD_REACTIONS',
		'USE_APPLICATION_COMMANDS',

		// VOICE PERMISSIONS
		'CONNECT',
		'SPEAK'
	]
}
