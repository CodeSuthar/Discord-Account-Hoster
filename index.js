const config = require('./config.hoster');

console.log(`Starting ${config.tokens.length} selfbots...`);

for (var i = 0; i < config.tokens.length; i++) {
    const token = config.tokens[i];
    const status = generateRandomStatus(config);
    require('./SelfBot')(token, status.status, status.statusText, status.statusEmoji);
}

function generateRandomStatus(config) {
    const status = config.statuses[Math.floor(Math.random() * config.statuses.length)];
    const statusText = config.statusTexts[Math.floor(Math.random() * config.statusTexts.length)];
    const statusEmoji = config.statusEmojis[Math.floor(Math.random() * config.statusEmojis.length)];

    return {
        status,
        statusText,
        statusEmoji
    }
}