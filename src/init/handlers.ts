import * as api from 'telegraf'
import Logger from './logger'
import Start from '../handlers/start'
import Message from '../handlers/message'

export default class Handlers {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        try {
            Start.init(bot) // Обработчик старта
            Message.init(bot) // Обработчик любого сообщения

            Logger.trace('>>> Обработчики инициализированы')
        }
        catch {
            Logger.trace('XXX Произошла ошибка при инициализации обработчиков!')
        }
    }
}
