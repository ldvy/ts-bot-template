import * as api from 'telegraf'
import User, { IUser } from '../models/user'
import Logger from '../init/logger'

/**
 * Получает список пользователей
 * @async
 * @function getUsers
 * @returns { Promise<IUser[]> }
 */
export async function getUsers(): Promise<IUser[]> {
    return await User.find({})
}

/**
 * Получает список админов
 * @async
 * @function getAdmins
 * @returns { Promise<IUser[]> }
 */
export async function getAdmins(): Promise<IUser[]> {
    return await User.find({ isAdmin: true })
}

/**
 * Проверяет является ли пользователь админом
 * @async
 * @function isAdmin
 * @param chatId 
 * @returns { Promise<Boolean> }
 */
export async function isAdmin(chatId: number): Promise<Boolean> {
    let res = await User.find({ chatId: chatId, isAdmin: true })
    return res.length > 0 ? true : false
}

/**
 * Проводит глобальную рассылку
 * @async
 * @function sendGlobal
 * @param ctx
 * @returns { Promise<void> }
 */
export async function sendGlobal(ctx: api.ContextMessageUpdate): Promise<void> {
    let users = await User.find({})

    for (const user of users) {
        if (user.chatId != ctx.from.id) {
            try {
                await ctx.telegram.sendMessage(user.chatId, ctx.message.text)
            }
            catch {
                throw new Error('Не удалось выполнить рассылку')
            }
        }
    }
}

/**
 * Добавляет новых админов
 * @async
 * @function addAdmins
 * @param chatIds
 * @returns { Promise<void> }
 */
export async function addAdmins(chatIds: Array<number>): Promise<void> {
    for (const id of chatIds) {
        try {
            let user = await User.findOne({ chatId: id })

            await user.set('isAdmin', true) // делаем юзера админом

            // Сохраняем его
            await user.save((err) => {
                if (!err)
                    Logger.notify('Добавлен новый админ!')
            })
        }
        catch {
            throw new Error('Ошибка при добавлении админов')
        }
    }
}