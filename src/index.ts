import Bot from './init/bot'
import DB from './init/db'
import Handlers from './init/handlers'

const bot = Bot.configure()

Handlers.init(bot)
DB.connect()