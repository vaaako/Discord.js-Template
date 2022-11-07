const fs = require('fs');
var timeoutArray = [];


module.exports = {
	getUser: async function(client, user, id=false) {
		if(!client)
			throw new Error("You don't provided the bot client");
		if(!user) return false;
	
		var user = user.replace(/[<>@&!']/g, "").replace(/ /g, '');
		user = await client.users.fetch(user).catch(() => { return false });
		
		if(user.bot) return false; //  Is bot
		return (id) ? user.id : user;
	},

	findKey: function(obj, check) {
		return (Object.keys(obj).includes(check)) ? true : false;
	},

	timeout: function(delay, id, command, message, text){
		function msToTime(s) {
			var ms = s % 1000;
			s = (s - ms) / 1000;
			var secs = s % 60;
			s = (s - secs) / 60;
			var mins = s % 60;
			var hrs = (s - mins) / 60;

			return hrs + ':' + mins + ':' + secs + '.' + ms;
		}

		const user = id;
		const keys = Object.keys(timeoutArray); // Get user in array

		if(keys.includes(user)) { // If is in array
			if(timeoutArray[user].includes(command)) { // Check if user is in timeout of that command
				return true;
			}
		} else {
			timeoutArray[user] = []; // In case of user isn't in the array
		}

		timeoutArray[user].push(command) // Add command timeout to user
		setTimeout(() => {
			message.channel.send(text); 
			timeoutArray[user].splice(timeoutArray[user].indexOf(command)); // Remove timeout
		}, delay);
		console.log(timeoutArray);

		return false;
	},
};
