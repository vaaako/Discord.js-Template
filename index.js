const express = require('express');
const app = express();
app.get("/", (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Keeps bot online

const { Client, Intents, Collection } = require('discord.js');
const fs = require("fs");

const client = new Client({
	partials: ["CHANNEL"],
	intents: [ // Some intents
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGES
	],
});

// Client variables to use everywhere
client.commands = new Collection(); // Collection (like a digital map(database)) for every your commands
client.slashCommands = new Collection(); // Collection for every slash command
client.aliases = new Collection(); // Collection for every your command-aliases
client.events = new Collection(); // Collection for every events
client.categories = fs.readdirSync("./commands/"); // Collection for every commands categories

// Loading files, with the client variable like Command Handler, Event Handler, ...
["commands", "events", "slash"].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

// Login into the bot
const { TOKEN } = require('./config/config.js');
client.login(TOKEN)

