# Superb template for building Telegram Bots
## It's based on a couple of pretty cool technologies:
* [Typescript](https://www.typescriptlang.org) ❤
* [Telegraf](https://telegraf.js.org)📡
* [MongoDB](https://www.mongodb.com/what-is-mongodb) 🔮
* [Mongoose](https://github.com/Automattic/mongoose/) 🐿️

`src` folder has the next structure:  
```bash
├───index.ts
├───config.json
├───texts.json
├───controllers/
├───handlers/
├───helpers/
├───init/
├───middlewares/
├───models/
└───scenes/
```
### So, let's learn how to build bots with TS-Bot-Template!
Firstly, you should insert your connection data into `config.json`  
There are `dev` and `prod` objects. Using them depends on your `NODE_ENV`
```json
{
    "dev": {
        "token": "<TOKEN>",
        "dbUrl": "mongodb://127.0.0.1:27017/tsbot",
        "port": 80
    },
    "prod": {
        "token": "<TOKEN>",
        "dbUrl": "mongodb://127.0.0.1:27017/tsbot",
        "port": 8080
    }
}
```
At `index.ts` we configure our bot and initialize [Telegraf middlewares](https://telegraf.js.org/#/?id=middleware), [scenes](https://telegraf.js.org/#/?id=stage), message handlers and DB connection.

```javascript
import Bot from './init/bot'
import DB from './init/db'
import Handlers from './init/handlers'
import Middlewares from './init/middlewares'
import Scenes from './init/scenes'

const bot = Bot.configure() // configuring bot

Middlewares.init(bot)       // initializing middlewares
Scenes.init(bot)            // initializing scenes
Handlers.init(bot)          // initializing handlers
DB.connect()                // connecting to DB
```
