"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Start = /** @class */ (function () {
    function Start() {
    }
    Start.init = function (bot) {
        bot.start(function (ctx) {
            ctx.reply('Heyyyyy');
        });
    };
    return Start;
}());
exports.default = Start;
