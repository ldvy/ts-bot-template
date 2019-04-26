import * as api from 'telegraf'
import User from '../models/user'

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
 * @param msg 
 * @param api 
 * @returns { Promise<void> }
 */
export async function sendGlobal(ctx: api.ContextMessageUpdate): Promise<void> {
    let users = await User.find({})
    
    for (const user of users) {        
        if (user.chatId != ctx.from.id)
            await ctx.telegram.sendMessage(user.chatId, ctx.message.text)
    }
}