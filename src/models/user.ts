import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// Схема пользователя
export const UserSchema: Schema = new Schema({
    chatId: { type: String, required: true, unique: true },
    username: { type: String, unique: true },
    name: { type: String, required: true }
})

UserSchema.plugin(uniqueValidator)               // подключаем валидатор уникальности
const User = mongoose.model('User', UserSchema)  // создаём модель

export default User