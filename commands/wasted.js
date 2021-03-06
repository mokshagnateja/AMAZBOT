const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "wasted",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let wasted = await canvacord.Canvas.wasted(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(wasted, "wasted.png");
        return message.channel.send(attachment);
    }
     }
