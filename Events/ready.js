module.exports = async(client) => {
    client.user.setPresence({
        activity: {
            name: "Z!help affiche les commande !"
        }
    })
};