import Logger from '../init/logger'
import { addAdmins } from '../helpers/functions'
import AdminMessage from '../controllers/admin'

// Немного модулей без типов ES5
const Markup = require('telegraf/markup')
const Stage = require('telegraf/stage')
const WizardScene = require('telegraf/scenes/wizard')

/**
 * Сцена добавления админов
 */
export default new WizardScene(
    'addAdmins',
    // Запрашиваем перечень chatId
    async (ctx: any) => {
        let keyboard = Markup.keyboard([
            Markup.button('Назад')
        ]).oneTime().resize().extra()

        await ctx.reply('Введите chatId новых админов (по одному на строку)\nОни должны быть пользователем бота!', keyboard)
        return ctx.wizard.next()
    },
    // Финальное действие
    async (ctx: any) => {
        if (ctx.message.text === 'Назад') {
            await AdminMessage.send(ctx)
            return ctx.scene.leave()
        }
        
        try {
            let chatIds: Array<number> = ctx.message.text.split('\n').map(Number)            
            await addAdmins(chatIds)    // добавляем админов

            await ctx.reply('Операция прошла успешно! 🎉', AdminMessage.keyboard)
            Logger.notify(`Новые админы добавлены! 🎉 Админ: ${ctx.from.id}; Количество: ${chatIds.length}`)
        }
        catch (err) {
            await ctx.reply('Не удалось добавить новых админов, приносим извинения.\nВозможно, Вы ввели некорректные данные', AdminMessage.keyboard)
            Logger.error(err.message)
        }
        return ctx.scene.leave()
    }
)