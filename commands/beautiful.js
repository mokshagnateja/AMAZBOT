const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "beautiful",
     description: "NOICE",
     run : async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let beautiful = await canvacord.Canvas.beautiful(user.displayAvatarURL({ format: "png", dynamic: false }));
        let attachment = new MessageAttachment(beautiful, "beautiful.png");
        return message.channel.send(attachment);
    }
     }
