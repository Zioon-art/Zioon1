const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async(Client, message, args) => {
    message.channel.bulkDelete();
    message.channel.send({
        embed: {
            color: 0xff00ea,
            title: `__**COMMANDES ZIOON**__`,
            fields: [
                {
                    name: "**Prefix**",
                    value: "`Z!`"
                },
                {
                    name: "**Modération**",
                    value: "`kick, ban, clear, delrole`"
                },
                {
                    name: "**Musique**",
                    value: "`Les commandes de musique sont bientot disponibles...`"
                },
                {
                    name: "**Commandes utiles**",
                    value: "`ping, stats, serverinfo, neko`"
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `support : discord.io/Zioon`
            }
        }

    })
};
module.exports.help = {
    name: "help"
};