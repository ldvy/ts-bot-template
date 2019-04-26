"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = __importDefault(require("telegraf"));
var logger_1 = __importDefault(require("./logger"));
var config_json_1 = __importDefault(require("../config.json"));
var Stage = require('telegraf/stage');
var WizardScene = require('telegraf/scenes/wizard');
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.configure = function () {
        // Проверка окружения и смена токена
        process.env.NODE_ENV === 'production' ? this.token = config_json_1.default.prod.token : this.token = config_json_1.default.dev.token;
        var bot = new telegraf_1.default(this.token); // Создание обьекта
        bot.launch(); // Запуск
        logger_1.default.trace('>>> Бот сконфигурирован');
        return bot;
    };
    return Bot;
}());
exports.default = Bot;
