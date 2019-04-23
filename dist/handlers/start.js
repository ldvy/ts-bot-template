"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
var logger_1 = __importDefault(require("../init/logger"));
var Start = /** @class */ (function () {
    function Start() {
    }
    Start.init = function (bot) {
        bot.start(function (ctx) {
            ctx.reply('Heyyyyy');
            var user = new user_1.default({
                chatId: ctx.from.id,
                username: ctx.from.username
            });
            user.save(function () {
                logger_1.default.debug('saved');
            });
        });
    };
    return Start;
}());
exports.default = Start;
