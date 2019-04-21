import Telegraf from 'telegraf'
import Logger from './logger'
import config from '../config.json'

export default class Bot { 
    private static token: string
    
    public static configure() {
        process.env.NODE_ENV === 'production' ? this.token = config.token : this.token = config.devToken

        const bot = new Telegraf(this.token)
        bot.launch()
        Logger.trace('>>> Бот сконфигурирован!')

        return bot
    }
}