"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chatLogging_1 = __importDefault(require("../middlewares/chatLogging"));
var addUsers_1 = __importDefault(require("../middlewares/addUsers"));
var logger_1 = __importDefault(require("./logger"));
var Middlewares = /** @class */ (function () {
    function Middlewares() {
    }
    Middlewares.init = function (bot) {
        try {
            addUsers_1.default.init(bot); // прослойка добавления пользователя в базу
            chatLogging_1.default.init(bot); // прослойка логирования переписки
            logger_1.default.trace('>>> Прослойки инициализированы');
        }
        catch (_a) {
            logger_1.default.trace('XXX Произошла ошибка при инициализации прослоек!');
        }
    };
    return Middlewares;
}());
exports.default = Middlewares;
