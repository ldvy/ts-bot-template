import mongoose from 'mongoose'
import config from '../config.json'
import Logger from './logger.js'

export default class DB {
    private static url: string

    public static connect() {
        // Проверка окружения и смена url базы данных
        process.env.NODE_ENV === 'production' ? this.url = config.prod.dbUrl : this.url = config.dev.dbUrl

        // Подключение к базе данных
        mongoose.connect(this.url, { useNewUrlParser: true }, (err: any) => {
            if (err)
                Logger.fatal(`XXX Возникла ошибка при подключении к MongoDB! Текст ошибки: \n${err.message}`)
            else
                Logger.trace('>>> База данных подключена')
        })
    }
}