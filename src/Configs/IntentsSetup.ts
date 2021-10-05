const { Intents } = require("discord.js");
const IntentsSetup = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
];

export default IntentsSetup;
