"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gsend_1 = __importDefault(require("../scenes/gsend"));
var logger_1 = __importDefault(require("./logger"));
var Stage = require('telegraf/stage');
var Scenes = /** @class */ (function () {
    function Scenes() {
    }
    Scenes.init = function (bot) {
        try {
            var stage = new Stage(); // создаём менеджер сцен
            stage.register(gsend_1.default); // регистрируем сцену рассылки
            bot.use(stage.middleware());
            logger_1.default.trace('>>> Сцены зарегистрированы');
        }
        catch (_a) {
            logger_1.default.trace('XXX Произошла ошибка при регистрации сцен!');
        }
    };
    return Scenes;
}());
exports.default = Scenes;
