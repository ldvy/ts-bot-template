import * as api from 'telegraf'
import { getAdmins } from '../helpers/functions'
import AdminMessage from '../controllers/admin'

const Markup = require('telegraf/markup')

export default class AdminsListMessage {
    public static async send(ctx: api.ContextMessageUpdate): Promise<void> {
        let admins = await getAdmins()

        for (const admin of admins) {
            let keyboard = Markup.inlineKeyboard([
                Markup.callbackButton('123', '123')
            ]).extra()
            await ctx.reply(admin.name, keyboard)
        } 
    }   
}