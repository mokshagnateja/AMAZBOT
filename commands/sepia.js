const canvacord = require("canvacord");

const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "sepia",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let sepia = await canvacord.Canvas.sepia(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(sepia, "sepia.png");
        return message.channel.send(attachment);
    }
     }
