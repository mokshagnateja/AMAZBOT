const canvacord = require("canvacord");

const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "hitler",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let hitler = await canvacord.Canvas.hitler(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(hitler, "hitler.png");
        return message.channel.send(attachment);
    }
     }
