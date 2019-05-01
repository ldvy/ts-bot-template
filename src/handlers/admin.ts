import * as api from 'telegraf'
import { isAdmin } from '../helpers/functions'
import AdminMessage from '../controllers/admin'
import StatsMessage from '../controllers/stats'
import AdminsListMessage from '../controllers/adminsList'

export default class Admin {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        // Обрадотчик для "/admin"
        bot.command('admin', async (ctx: api.ContextMessageUpdate) => {
            if (await isAdmin(ctx.from.id)) {   // проверяем является ли пользователь админом
                await AdminMessage.send(ctx)
            }
        })

        // Обработчик для "Рассылка"
        bot.hears('Рассылка 📡', async (ctx: any) => {
            if (await isAdmin(ctx.from.id)) {
                await ctx.scene.enter('gsend')
            }
        })

        // Обработчик для "Статистика"
        bot.hears('Статистика 📊', async (ctx: api.ContextMessageUpdate) => await StatsMessage.send(ctx))

        // Обработчик для "Добавить админа(ов)"
        bot.hears('Добавить админа(ов) 👔', async (ctx: any) => {
            if (await isAdmin(ctx.from.id)) {
                await ctx.scene.enter('addAdmins')
            }
        })

        bot.hears('Список админов 📃', async (ctx: api.ContextMessageUpdate) => {
            if (await isAdmin(ctx.from.id)) {
                await AdminsListMessage.send(ctx)
            }
        })
    }
}