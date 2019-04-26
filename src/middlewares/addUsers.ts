import * as api from 'telegraf'
import User from '../models/user'
import Logger from '../init/logger'

/**
 * Прослойка для добавления новых пользователей
 * @async
 */

export default async (ctx: api.ContextMessageUpdate, next: Function) => {
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

    // Добавляем админа @vilkup
    if (chatId === 300922262)
        await user.set('isAdmin', true)

    // Сохраняем его
    await user.save((err) => {
        if (!err)
            Logger.notify('Добавлен новый пользователь!')
    })

    await next()
}
