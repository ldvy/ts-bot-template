import * as api from 'telegraf'
import User from '../models/user'
import Logger from '../init/logger'

export default class addUsers {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.use(async (ctx, next) => {
            // Получаем данные о пользователе из контекста
            let chatId = ctx.from.id
            let username = ctx.from.username
            let name = ctx.from.first_name

            // Составляем имя в зависимости от наличия фамилии
            if (ctx.from.last_name !== undefined) name = `${ctx.from.first_name} ${ctx.from.last_name}`

            // Создаём нового пользователя
            let user = new User({
                chatId: chatId,
                username: username,
                name: name
            })

            // Сохраняем его
            user.save((err) => {
                if (!err)
                    Logger.notify('Добавлен новый пользователь!')
            })

            await next()
        })
    }
}