"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var start_1 = __importDefault(require("../handlers/start"));
var Handlers = /** @class */ (function () {
    function Handlers() {
    }
    Handlers.init = function (bot) {
        start_1.default.init(bot); // Обработчик старта
        logger_1.default.trace('>>> Обработчики инициализированы');
    };
    return Handlers;
}());
exports.default = Handlers;
