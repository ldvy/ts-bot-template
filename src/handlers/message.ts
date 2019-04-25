import * as api from 'telegraf'
import User from '../models/user'
import Logger from '../init/logger'

export default class Message {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        /* bot.on('text', async (ctx: api.ContextMessageUpdate) => {
            let name = `${ctx.from.first_name} ${ctx.from.last_name}`
            let username = ctx.from.username

            let user = await new User({
                chatId: ctx.from.id,
                username: ctx.from.username
            })

            await user.save()

            Logger.notify(`Сообщение от ${name} (@${username}): "${ctx.message.text}"`)
        }) */
    }
}