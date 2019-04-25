import Bot from './init/bot'
import DB from './init/db'
import Handlers from './init/handlers'
import Middlewares from './init/middlewares'

const bot = Bot.configure() // конфигурируем бот

Middlewares.init(bot)       // инициализируем прослойки
Handlers.init(bot)          // инициализируем обработчики
DB.connect()                // подключаемся к БД