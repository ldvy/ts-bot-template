import * as api from 'telegraf'
import Logger from './logger'
import Start from '../handlers/start'

export default class Handlers {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        try {
            Start.init(bot) // Обработчик старта

            Logger.trace('>>> Обработчики инициализированы')
        }
        catch {
            Logger.trace('XXX Произошла ошибка при инициализации обработчиков!')
        }
    }
}
