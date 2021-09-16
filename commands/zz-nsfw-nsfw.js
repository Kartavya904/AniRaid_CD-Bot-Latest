const fetch = require('node-fetch');

module.exports = {
    commands : ['nsfw'],
    callback : async(client, message, arguments, text) => {
      //if (message.author.id === '439541365580365835') {
        message.channel.send('You Can Also Use `Ass`, `Boob`, `Hentai`, `NSFW`, `Pussy`, `Teens`, `Thigh`')
        try {
            var subreddits = [
                'asstastic',
                'pawg',
                'facedownassup',
                'ass',
                'brunetteass',
                'CheekyBottoms',
                'datgap',
                'underbun',
                'pawgtastic',
                'BestBooties',
                'CuteLittleButts',
                'bikinis',
                'bikinibodies',
                'boobs',
                'Boobies',
                'Stacked',
                'BustyPetite',
                'Cleavage',
                'bustyasians',
                'boltedontits',
                'burstingout',
                'CelebrityFeet',
                'FFSocks',
                'Feet_NSFW',
                'FootFetish',
                'FFNBPS',
                'feetish',
                'scent_of_women_feet',
                'AsianFeet',
                'gayfootfetish',
                'HighHeels',
                'Soles',
                'CosplayFeet',
                'dirtyfeet',
                'DesiFeet',
                'ebonyfeet',
                'rule34feet',
                'girlsinanklesocks',
                'Porn_Star_Feet',
                'FeetVideos',
                'Soles_And_Holes',
                'Footjobs',
                'pussy',
                'vagina',
                'PerfectPussies',
                'rearpussy',
                'nnlegalteens',
                'Barelylegal',
                'barelylegalteens',
                'LegalTeens',
                'thighs',
                'PerfectThighs',
                'thickthighs',
                'girlsinyogapants',
                'YogaPants',
      
              ]
    
            var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
          
            const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())
    
            if (!data) return message.channel.send(`Sorry, seems like i can't connect to API.`);
          
            const { title, postLink, url, subreddit } = data
            const filter = (reaction, user) => reaction.emoji.name === '🗑️' && user.id !== '840646484935835698' && user.id === message.author.id
            message.channel.send({
              embeds: [{
                color: "BLURPLE",
                title: `${title}`,
                url: `${postLink}`,
                image: {
                  url: url
                },
                footer: { text: `/reddit/${subreddit}` }
              }]
            }).then(msg => {
              msg.react('🗑️')
              //msg.react('⚠️')
              msg.awaitReactions(filter, {
                  max: 1,
                  time: 110000,
                  errors: ['time']
              })
                  .then(async (collected) => {
                      if (collected) {
                          const reaction = collected.last();
                          if (reaction.emoji.name === '🗑️') {
                              reaction.message.delete()
                          }
                          if (reaction.emoji.name === '⚠️') {
                              reaction.message.delete()
                              message.channel.send(`None Of The Teams worked??`)
                          }
                      }
                  })
                  .catch(console.error())
            })
        } 
        catch(error) {
            this.client.emit("apiError", error, message);
        } 
      //}      
    }
}
