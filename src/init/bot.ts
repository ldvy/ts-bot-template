import Telegraf from 'telegraf'
import Logger from './logger'
import config from '../config.json'

export default class Bot { 
    private static token: string

    public static async configure() {
        // Проверка окружения и смена токена
        process.env.NODE_ENV === 'production' ? this.token = config.prod.token : this.token = config.dev.token

        const bot = new Telegraf(this.token)    // Создание обьекта
        await bot.launch()                      // Запуск

        Logger.trace('>>> Бот сконфигурирован')
        return bot
    }
}