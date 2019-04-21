import Bot from './init/bot'
import Handlers from './init/handlers'

const bot = Bot.configure()

Handlers.init(bot)