const commando = require('discord.js-commando');


class SoundCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sound',
            group: 'soundboard',
            memberName: 'sound',
            description: 'Collection of soundboards, format: pls sound (soundname) \n For a list of soundnames, simply type "plz sound" '
        });
    }

    async run(message, args) {
        var sray = ['boo','clap','allah','supahot','cunt','type','ugly','sworn']
        var selection = 'placeholder' 
        
        if (sray.indexOf(args) >= 0 || args == 'gymshoes') {
            selection = './assets/sounds/' + args + '.mp3'
            
            if (args == 'gymshoes') {
                message.delete(0);
            }

            const channel = message.member.voiceChannel;
            
            if (!channel){
                message.reply('join a voice channel fam')
            }
            else if (!channel.connection) {
            channel.join()
            .then(connection => {
                connection.playFile(selection).on('end', () =>{
                connection.disconnect();
                        })
                    })
                .catch(console.error);
                }
            else (message.reply('bot already in playing!'))
        }
        else {message.reply('please specify a proper soundname  \n Example: "plz sound clap" \n list of sound names: ' + sray.join())}
    }
}

module.exports = SoundCommand;
