# Discord-Account-Hoster
Hosts your discord account online forever! Education Purpose Only.

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