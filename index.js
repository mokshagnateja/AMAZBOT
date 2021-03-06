const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json')
const fetch  = require('node-fetch')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

const { readdirSync } = require('fs');

const { join } = require('path')

client.commands= new Discord.Collection();

const prefix = "-";


const { profile } = require('console');
const { config } = require('process');

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () =>{
    console.log('i am ready');
});



client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;


   

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   })

   







client.login(token);