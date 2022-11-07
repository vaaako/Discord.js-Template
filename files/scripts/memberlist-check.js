const { ALLOWED } = require('../../config/config.js');

const fs = require('fs');
const banned = JSON.parse(fs.readFileSync('config/banned.json', 'utf-8'));

module.exports = {
	bannedCheck: function(user) {
		return (Object.keys(banned).includes(user))
			? banned[user] : false // Reason
	},
	allowedCheck: function(user) {
		return (ALLOWED.includes(user)) ? true : false;
	},
	banUser: function(user, reason) {
		banned[user] = reason; // Add key
		fs.writeFileSync('config/banned.json', JSON.stringify(banned, null, 1)); // Saving
	}
}