const commando = require('discord.js-commando');
const api = 'https://www.reddit.com/r/wholesomememes/top/.json?sort=top&t=week&limit=500';
const request = require('snekfetch');
let parray = 0;

class WholesomeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'wholesome',
            group: 'reddit',
            memberName: 'wholesome',
            description: 'Acquires an exquisite wholesome meme',
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



module.exports = WholesomeCommand;