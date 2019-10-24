import Telegraf from 'telegraf'
import config from '../config'
import Logger from './logger'

export default class Bot {
  private static token: string
  
  public static async configure() {
    this.token = config.token
    
    const bot = new Telegraf(this.token)
  
    if (config.webhook.useWebhook) {
      bot.startWebhook('/secret-path', null, 5000)
    }
    
    await bot.launch()
    
    Logger.trace('>>> Бот сконфигурирован')
    return bot
  }
}
