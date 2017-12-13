const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: 'plz'
});

bot.registry.registerGroup('random','Random');
bot.registry.registerGroup('reddit','Reddit');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
//bot.login('Mzg5OTk0MzI0OTI0MDM5MTY5.DRDqCw.gLRONSxUZDmI5f6eaOrQSdEO9N0');