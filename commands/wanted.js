const canvacord = require("canvacord");

const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "wanted",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let wanted = await canvacord.Canvas.wanted(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(wanted, "wanted.png");
        return message.channel.send(attachment);
    }
     }
