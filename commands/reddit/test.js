const commando = require('discord.js-commando');

class TestCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'reddit',
            memberName: 'test',
            description: 'testing 123'
        });
    }

    async run(message, args) {
        message.channel.send({embed: {
            color: 3447003,
            title: 'test title',
            description: "A very simple Embed!"
          }});
    }

}

module.exports = TestCommand;