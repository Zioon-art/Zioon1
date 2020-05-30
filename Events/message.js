const Discord = require("discord.js");
const prefix = "Z!"

module.exports = async(client, message) => {

 if(message.author.bot) return;
 if(message.channel.type === "dm") return;


 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift();

 const cmd = client.commands.get(command);

 if(!cmd) return;

 cmd.run(client, message, args);
}