import Telegraf from 'telegraf'
import config from '../config.json'
import Logger from './logger'

export default class Bot {
  private static token: string
  
  public static configure() {
    // Проверка окружения и смена токена
    this.token = process.env.NODE_ENV === 'production' ? config.prod.token : config.dev.token
    
    const bot = new Telegraf(this.token)    // Создание обьекта
    bot.launch()                            // Запуск
    
    Logger.trace('>>> Бот сконфигурирован')
    return bot
  }
}