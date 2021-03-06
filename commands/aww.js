const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "aww",
    description: "Gives you a meme",
    async run (client, message, args){
        const subReddits = ["aww"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(` From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter(`Made By Afthab With Code`)
        

        message.channel.send(embed);
    }}