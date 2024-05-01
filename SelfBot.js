module.exports = async (token, status, statusText, statusEmoji) => {
    const { Client } = require("discord.js-selfbot-v13");

    const client = new Client();

    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag} and ${client.user.id}`);


        // set discord status like dnd, idle, online and statusText
        if (client.user.username == "codesuthar") {
            client.settings.setCustomStatus({
                text: "Love you coding",
                status: "dnd",
                emoji: "💻",
                expires: null
            });
        } else {
            console.log(`Setting status to ${status} and statusText to ${statusText} and statusEmoji to ${statusEmoji}`);
            
            client.settings.setCustomStatus({
                text: statusText,
                status: status,
                emoji: statusEmoji,
                expires: null
            });
        }
    });

    client.login(token);
}