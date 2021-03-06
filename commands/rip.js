const canvacord = require("canvacord");

const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "rip",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let rip = await canvacord.Canvas.rip(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(rip, "rip.png");
        return message.channel.send(attachment);
    }
     }
