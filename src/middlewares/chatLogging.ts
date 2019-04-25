import * as api from 'telegraf'
import Logger from '../init/logger'

export default class chatLogging {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>): void {
        bot.use(async (ctx, next) => {
            // Получаем данные о пользователе из контекста
            let username = ctx.from.username
            let name = ctx.from.first_name

            // Составляем имя в зависимости от наличия фамилии
            if (ctx.from.last_name !== undefined) name = `${ctx.from.first_name} ${ctx.from.last_name}`

            // Логируем сообщение
            if (username !== undefined)
                Logger.notify(`Сообщение от ${name} (@${username}): "${ctx.message.text}"`)
            else
                Logger.notify(`Сообщение от ${name}: "${ctx.message.text}"`)
            
            await next()
        })
    }
}