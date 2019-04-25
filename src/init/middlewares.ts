import * as api from 'telegraf'
import chatLogging from '../middlewares/chatLogging'
import addUsers from '../middlewares/addUsers'
import Logger from './logger'

export default class Middlewares {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        try {
            addUsers.init(bot) // прослойка добавления пользователя в базу
            chatLogging.init(bot) // прослойка логирования переписки
            
            Logger.trace('>>> Прослойки инициализированы')
        }
        catch {
            Logger.trace('XXX Произошла ошибка при инициализации прослоек!')
        }
    }
}