const TelegramApi = require('node-telegram-bot-api')

const token = '6328858478:AAG4XyP8kHfNj8PjCF7XhEEy2DLWivygL1w'
const bot = new TelegramApi(token, {polling:true})




start = () => {
    
bot.on('message', msg => {
    const chatId = msg.chat.id
    const text = msg.text
    if(text === '/start') {
        bot.sendMessage(chatId, 'Привет')
    }

})
}

start()







