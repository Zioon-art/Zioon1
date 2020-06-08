const Discord = require('discord.js')
module.exports = {
    name : 'embed',
    execute(client, message, args){
        const em = new Discord.MessageEmbed()
        .setTitle('This part will be the most highlighted')
        .setDescription('Here u type in the description or whatever u want')
        .addField('THis will the upper part',"and this will be the lower part", true)
        .addField('THis will put em in one line',"if this is empy the lower part will say undefined")
        .setTimestamp()
        .setFooter("if u want anything else at the end in small text use the footer")
        .setAuthor('This will be the second most highlighted part')
        .setImage(message.author.displayAvatarURL())
        
        .setThumbnail(message.author.displayAvatarURL())
        .setURL()
        .setColor("RANDOM")
        
       
        message.channel.send(em);
    }
}

module.exports.help = {
    name: "embed"
};
