# Discord-Account-Hoster
Hosts your discord account online forever! Education Purpose Only.

## Features
1. Hosts your discord account online forever.
2. Supports multiple accounts.
3. Randomly changes the status of the account.

## Is it safe?
Yes, it is safe to use. This account hoster is made using `discord.js-selfbot-v13` which is a selfbot package modified from base `discord.js` v13 package which is widely used by develoopers and is available online at this [github repository](https://github.com/aiko-chan-ai/discord.js-selfbot-v13)

> # But using selfbots is against discord's terms of service. so you can be banned too.

## Requirements
1. NodeJS version 16.6.0 or higher.
2. Discord account tokens.
3. Valid internet connection.

## Not working?
If you are facing any issues, you can create an issue in the repository or you can contact me on discord: `@CodeSuthar`

> Reasons for not working:
1. The npm package `discord.js-selfbot-v13` may have been patched by discord.
2. You are using an outdated version of NodeJS.
3. You have not filled the required fields in the `config.hoster.json` file.
4. You have not installed the required packages.
5. You have not started the account hoster.

## How to use?

1. Install NodeJS from [here](https://nodejs.org/en/download/) with version 16.6.0 or higher.

2. Download the source code from [here](https://github.com/CodeSuthar/Discord-Account-Hoster) or clone it using git cli by running the following command:
```bash
git clone https://github.com/CodeSuthar/Discord-Account-Hoster.git
```
3. Now go to the directory where you have downloaded the source code and inside it edit the `config.hoster.json` file and fill the required fields.

> tokens: This discord account hoster supports multiple accounts. You can add multiple tokens in the tokens array.
```js
{
    "tokens": [
        "token1",
        "token2"
    ],
}
```

> statusTexts: This account hoster randomly gets a status out of multiple status texts. You can add multiple status texts in the statusTexts array.
```js
{
    "statusTexts": [
        "Quote",
        "Love Coding"
    ]
}
```

> statusEmojis: No need to edit this as it is already filled with some emojis. You can add more emojis in the statusEmojis array.
```js
{
    "statusEmojis": [
        "🎉",
        "🎈"
    ]
}
```

4. After the edits, save the file.

5. Now open the terminal in the directory where you have downloaded the source code and run the following commands in sequence:

> 1. Install the required packages
```bash
npm install
```

> 2. Start the account hoster
```bash
npm start
```
or 
```bash
node index.js
```

# 🔒 | License

This project is licensed under the MIT License - see the [LICENSE HERE](https://github.com/CodeSuthar/Discord-Account-Hoster/blob/main/LICENSE)