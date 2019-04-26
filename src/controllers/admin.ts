import * as api from 'telegraf'

const Markup = require('telegraf/markup')

export default class AdminMessage {
    public static keyboard = Markup.keyboard([
        ['Рассылка 📡', 'Статистика 📊'],
        ['Добавить админа(ов) 👔'],
        ['Устранить админа(ов) ✖️']
    ]).oneTime().resize().extra()

    public static async send(ctx: api.ContextMessageUpdate): Promise<void> {
        await ctx.reply('Heyyyyy, admin', this.keyboard)
    }   
}