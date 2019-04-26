import * as api from 'telegraf'
import StatsMessage from '../controllers/stats'

export default class Stats {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.hears('Статистика 📊', async (ctx: api.ContextMessageUpdate) => {
            await StatsMessage.send(ctx)
        })
    }
}