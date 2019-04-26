import Logger from '../init/logger'
import { sendGlobal } from '../helpers/functions'
import AdminMessage from '../controllers/admin'

// Немного модулей без типов ES5
const Markup = require('telegraf/markup')
const Stage = require('telegraf/stage')
const WizardScene = require('telegraf/scenes/wizard')

/**
 * Сцена рассылки
 */
export default new WizardScene(
    'gsend',
    async (ctx: any) => {
        let keyboard = Markup.keyboard([
            Markup.button('Назад')
        ]).oneTime().resize().extra()

        await ctx.reply('Введите сообщение для рассылки', keyboard)
        return ctx.wizard.next()
    },
    async (ctx: any) => {
        if (ctx.message.text === 'Назад') {
            await AdminMessage.send(ctx)
            return ctx.scene.leave()
        }
        
        await sendGlobal(ctx)

        await ctx.reply('Рассылка успешно проведена! 🎉', AdminMessage.keyboard)
        Logger.notify(`Рассылка успешно проведена! 🎉 Админ: ${ctx.from.id}; Сообщение: "${ctx.message.text}"`)
        return ctx.scene.leave()
    }
)