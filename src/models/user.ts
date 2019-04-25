import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export const UserSchema: Schema = new Schema({
    chatId: { type: String, required: true, unique: true },
    username: { type: String, unique: true },
    name: { type: String, required: true }
})

UserSchema.plugin(uniqueValidator)
const User = mongoose.model('User', UserSchema)

export default User