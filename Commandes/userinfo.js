const moment = require('moment');

module.exports.run = (client, message, args) => {
    
    const membre = message.mentions.members.first() || message.member;
    if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur`);

    message.channel.send({
        embed: {
            color: 0xE9252C,
            title: `Statistiques de l'utilisateur **${membre.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL(),
            },
            fields: [
                {
                name: '> ID :',
                value: membre.id
                },
                {
                    name: 'Compte créé le',
                    value: moment.utc(membre.user.createdAt).format('LL')
                },
                {
                    name: 'Application lancée actuellement :',
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : 'Aucune'}`
                },
                {
                    name: 'A rejoins le serveur le :',
                    value: moment.utc(membre.joinAt).format('LL')
                },

            ],
            footer: {
                text: `Commande effectuée par ${message.member}`
            }
        }
    });
};
    module.exports.help = {
        name: 'stats'
};