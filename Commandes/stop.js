module.exports.run = (client, message, args) => {
    if (message.author.id !== '545703044197908481') { message.channel.send('Uh, tu n\'es pas l\'owner du bot.'); }
    else {
        message.channel.send('Arrete du process en cours...')
            .then(() => process.exit(0));
    }
};

module.exports.help = {
    name: 'stop'
};