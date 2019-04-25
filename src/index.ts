import Bot from './init/bot'
import DB from './init/db'
import Handlers from './init/handlers'
import Middlewares from './init/middlewares'

const bot = Bot.configure()

Middlewares.init(bot)
Handlers.init(bot)
DB.connect()