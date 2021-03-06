const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "affect",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let affect = await canvacord.Canvas.affect(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(affect, "affect.gif");
        return message.channel.send(attachment);
    }
     }



