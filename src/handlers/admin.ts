import * as api from 'telegraf'
import { Markup, Extra } from 'telegraf'
import { isAdmin } from '../helpers/functions'

export default class Admin {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.command('admin', async (ctx: api.ContextMessageUpdate) => {
            if (isAdmin(ctx.from.id)) {
                ctx.reply('Heyyyyy, admin')
            }
        })
    }
}