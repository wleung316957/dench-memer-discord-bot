const commando = require('discord.js-commando');
const api = 'https://www.reddit.com/u/kerdaloo/m/dankmemer/top/.json?sort=top&t=day&limit=500';
const request = require('snekfetch');
let parray = 0;

class MemeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'reddit',
            memberName: 'meme',
            description: 'Acquires an exquisite meme',
        });
    }

    async run(message, args) {

        request.get(api).then(r => {
            let posts = r.body.data.children.filter(post => post.data.preview);

            if (parray >= posts.length){
                parray = 0;
            }

            const post = posts[parray]
            parray++

            console.log('parray: ' + parray)
            //console.log(message.channel.id)

            message.channel.send({embed: {
                title: post.data.title,
                url: post.data.url,
                image: { url: post.data.preview.images[0].source.url },
                description: post.data.url,
                footer: { text: `posted by ${post.data.author}` }
              }});
    
        });
    }
}



module.exports = MemeCommand;