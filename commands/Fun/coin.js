module.exports = {
	name: "coin",
	category: "Fun",
	aliases: [],
	usage: "coin",
	run: async (client, message) => {
		let num = Math.floor(Math.random() * 2) + 1;

		return message.react('😀') ? num==1 : message.react('👑');
	}
};
