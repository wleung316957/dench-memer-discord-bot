const commando = require('discord.js-commando');
const api = 'https://www.reddit.com/r/Jokes/top/.json?sort=top&t=day&limit=400';
const request = require('snekfetch');
let parray = 0;

class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'reddit',
            memberName: 'joke',
            description: 'Acquires an exquisite joke',
        });
    }

    async run(message, args) {

        request.get(api).then(r => {
            let posts = r.body.data.children.filter(post => !post.data.preview && post.data.selftext.length <= 550 && post.data.title.length <= 256);

            if (parray >= posts.length){
                parray = 0;
            }

            const post = posts[parray]
            parray++

            //console.log('parray: ' + parray)
            //console.log(message.channel.id)

            message.channel.send({embed: {
                title: post.data.title,
                url: post.data.url,
                description: post.data.selftext,
                footer: { text: `posted by ${post.data.author}` }
              }});
    
        });
    }
}



module.exports = JokeCommand;