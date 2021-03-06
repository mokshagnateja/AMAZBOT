const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "blur",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let blur = await canvacord.Canvas.blur(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(blur, "blur.png");
        return message.channel.send(attachment);
    }
     }
