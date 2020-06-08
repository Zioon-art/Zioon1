const { get } = require("https");

module.exports.run = async(client, message, args) => {

    if (!message.channel.nsfw) {
        return message.channel.send("Vous devez etre dans un salon NSFW !");
    }

    get("https://neko-love.xyz/api/v1/neko", (res) => {
        const { statusCode } = res;
        if (statusCode !== 200) {
            return message.channel.send("Une erreur est survenue evec l'API.");
        }

        res.setEncoding("utf8");
        let rawData = "";

        res.on("data", chunk => {
            rawData += chunk;
        });

        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        image: {
                            url: parsedData.url
                        },
                        footer: {
                            text: `${client.user.username}`
                        }
                    }
                });
            } catch (error) {
                console.error(error.message);

            }
        });
    }).on("error", (error) => {
        console.error(error.message);
    });
};

module.exports.help = {
    name: "neko"
};