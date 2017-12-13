const commando = require('discord.js-commando');
const api = 'https://www.reddit.com/r/copypasta/top/.json?sort=top&t=week&limit=500';
const request = require('snekfetch');
let parray = 0;

class ShitPostCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shitpost',
            group: 'reddit',
            memberName: 'shitpost',
            description: 'Acquires an exquisite shitpost',
        });
    }

    async run(message, args) {

        request.get(api).then(r => {
            let posts = r.body.data.children.filter(post => !post.data.preview && post.data.selftext.length <= 1900 && post.data.title.length <= 250);

            if (parray >= posts.length){
                parray = 0;
            }

            const post = posts[parray]
            parray++

            //console.log('parray: ' + parray)
            //console.log(message.channel.id)

            message.channel.send({embed: {
                url: post.data.url,
                description: post.data.selftext,
                footer: { text: `posted by ${post.data.author}` }
              }});
    
        });
    }
}



module.exports = ShitPostCommand;