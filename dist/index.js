"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = __importDefault(require("./init/bot"));
var db_1 = __importDefault(require("./init/db"));
var handlers_1 = __importDefault(require("./init/handlers"));
var middlewares_1 = __importDefault(require("./init/middlewares"));
var bot = bot_1.default.configure();
middlewares_1.default.init(bot);
handlers_1.default.init(bot);
db_1.default.connect();
