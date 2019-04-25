import * as api from 'telegraf'
import User from '../models/user'
import Logger from '../init/logger'

export default class Start {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.start(async (ctx: api.ContextMessageUpdate) => {
            ctx.reply('Heyyyyy')

            /* let user = new User({
                chatId: ctx.from.id,
                username: ctx.from.username
            })

            user.save(() => {
                Logger.debug('saved')
            }) */
        })
    }
}