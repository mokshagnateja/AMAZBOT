const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "shit",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let shit = await canvacord.Canvas.shit(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(shit, "shit.png");
        return message.channel.send(attachment);
    }
     }
