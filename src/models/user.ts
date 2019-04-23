import mongoose, { Schema } from 'mongoose'

export const UserSchema: Schema = new Schema({
    chatId: { type: String, required: true, unique: true },
    username: String
})

const User = mongoose.model('User', UserSchema)

export default User