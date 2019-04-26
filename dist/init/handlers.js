"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var start_1 = __importDefault(require("../handlers/start"));
var admin_1 = __importDefault(require("../handlers/admin"));
var stats_1 = __importDefault(require("../handlers/stats"));
var Handlers = /** @class */ (function () {
    function Handlers() {
    }
    Handlers.init = function (bot) {
        try {
            start_1.default.init(bot); // Обработчик для /start
            admin_1.default.init(bot); // Обработчик для /admin
            stats_1.default.init(bot); // Обработчик для статистики
            logger_1.default.trace('>>> Обработчики инициализированы');
        }
        catch (_a) {
            logger_1.default.trace('XXX Произошла ошибка при инициализации обработчиков!');
        }
    };
    return Handlers;
}());
exports.default = Handlers;
