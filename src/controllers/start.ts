import * as api from 'telegraf'

const Markup = require('telegraf/markup')

export default class StartMessage {
  /* public static keyboard = Markup.keyboard([
    // ...
  ]).oneTime().resize().extra() */
  
  public static async send(ctx: api.ContextMessageUpdate): Promise<void> {
    await ctx.reply('Heyyyyy')
  }
}
