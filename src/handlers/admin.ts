import * as api from 'telegraf'
import { isAdmin } from '../helpers/functions'
import AdminMessage from '../controllers/admin'

export default class Admin {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.command('admin', async (ctx: api.ContextMessageUpdate) => {
            if (await isAdmin(ctx.from.id)) {
                await AdminMessage.send(ctx)
            }
        })

        // Обработчик для "Рассылка"
        bot.hears('Рассылка 📡', async (ctx: any) => {
            if (await isAdmin(ctx.from.id)) {
                ctx.scene.enter('gsend')
            }
        })
    }
}