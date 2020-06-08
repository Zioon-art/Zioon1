const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    message.delete()

        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !")

        let argsresult;
        let mChannel = message.mentions.channels.first()

        if(mChannel) {
            argsresult = args.slice(1).join(" ")
            if(!argsresult) return message.channel.send("Merci de dire le message a envoyer")
            mChannel.send(argsresult)
        } else {
            argsresult = args.join(" ")
            if(!argsresult) return message.channel.send("Merci de dire le message a envoyer")
            message.Channel.send(argsresult)
        }
}


module.exports.help = {
    name: "say"
}