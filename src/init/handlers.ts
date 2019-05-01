import * as api from 'telegraf'
import Logger from './logger'
import Start from '../handlers/start'
import Admin from '../handlers/admin'

export default class Handlers {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>): void {
        try {
            Start.init(bot) // Обработчик для /start
            Admin.init(bot) // Обработчик для /admin

            Logger.trace('>>> Обработчики инициализированы')
        }
        catch {
            Logger.trace('XXX Произошла ошибка при инициализации обработчиков!')
        }
    }
}
