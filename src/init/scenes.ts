import * as api from 'telegraf'
import gsend from '../scenes/gsend'
import Logger from './logger'

const Stage = require('telegraf/stage')

export default class Scenes {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>): void {
        try {
            const stage = new Stage()   // создаём менеджер сцен
            stage.register(gsend)       // регистрируем сцену рассылки

            bot.use(stage.middleware())
            
            Logger.trace('>>> Сцены зарегистрированы')
        }
        catch {
            Logger.trace('XXX Произошла ошибка при регистрации сцен!')
        }
    }
}