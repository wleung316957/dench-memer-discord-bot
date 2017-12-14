const commando = require('discord.js-commando');

class SoundCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sound',
            group: 'soundboard',
            memberName: 'sound',
            description: 'Collection of soundboards, format: plz sound (name) \n List of names: boo,clap,babyrage,allah,illuminati,supahot'
        });
    }

    async run(message, args) {
        const boo = './assets/sounds/scare.mp3'
        const clap = './assets/sounds/clap.mp3'
        const babyrage = './assets/sounds/babyrage.mp3'
        const allah = './assets/sounds/allah.mp3'
        const illuminati = './assets/sounds/illuminati.mp3'
        const supahot = './assets/sounds/supahot.mp3'
        var selection = 'placeholder'

        if (args == 'boo') {selection = boo}
        if (args == 'clap') {selection = clap}
        if (args == 'babyrage') {selection = babyrage}
        if (args == 'allah') {selection = allah}
        if (args == 'illuminati') {selection = illuminati}
        if (args == 'supahot') {selection = supahot}


        if (selection == 'placeholder') {message.reply('please specify the sound  \n Example: "plz sound clap"')}
        else{
        const channel = message.member.voiceChannel;
        if (!channel){
            message.reply('join a voice channel fam')
        }
        else {
        channel.join()
        .then(connection => {
            connection.playFile(selection).on('end', () =>{
            connection.disconnect();
                    })
                })
            }
        }
    }
}

module.exports = SoundCommand;