const Discord = require('discord.js');
var servers = {};
const ytdl = require("ytdl-core");

module.exports.run = async(client, message, args) => {
    function play(connection, message) {
        var server = servers[message.guild.id];

    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on('end', function(){
        if(server.queue[0]){
            play(connection, message);
        }else {
            connection.disconnect();

        }
    });

    }

    if(!args[0]) {
    message.channel.send(':x: Tu dois mettre un lien !');
    return; 
    };

    if(!message.author.Voice.channel) {
    message.channel.send(':x: Tu dois etre dans un salon vocal pour écouter de la musique !');
    return;
    };

    if(!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
    };

    var server = servers[message.guild.id];

    server.queue.push(args[1]);

    if(!message.guild.VoiceConnection) message.author.voice.channel.join().then(function(connection){
        play(connection, message);
    })
}

module.exports.help = {
    name: "play",
}