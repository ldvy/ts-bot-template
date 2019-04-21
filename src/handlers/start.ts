import * as api from 'telegraf'

export default class Start {
    public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
        bot.start((ctx: any) => {
            ctx.reply('Heyyyyy')
        })
    }
}