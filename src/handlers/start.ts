import * as api from 'telegraf'
import StartMessage from '../controllers/start'

export default class Start {
  public static init(bot: api.Telegraf<api.ContextMessageUpdate>) {
    bot.start(async (ctx: api.ContextMessageUpdate) => {
      await StartMessage.send(ctx)
    })
  }
}
