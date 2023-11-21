const TelegramBot = require('node-telegram-bot-api');

const token = '6570460337:AAFler9l5tKFcagv0pC18MivIFfaSXircoo';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, msg.text);
});