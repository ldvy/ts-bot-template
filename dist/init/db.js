"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_json_1 = __importDefault(require("../config.json"));
var logger_js_1 = __importDefault(require("./logger.js"));
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.connect = function () {
        // Проверка окружения и смена url базы данных
        process.env.NODE_ENV === 'production' ? this.url = config_json_1.default.prod.dbUrl : this.url = config_json_1.default.dev.dbUrl;
        // Подключение к базе данных
        mongoose_1.default.connect(this.url, { useNewUrlParser: true }, function (err) {
            if (err)
                logger_js_1.default.fatal("XXX \u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043A MongoDB! \u0422\u0435\u043A\u0441\u0442 \u043E\u0448\u0438\u0431\u043A\u0438: \n" + err.message);
            else
                logger_js_1.default.trace('>>> База данных подключена');
        });
    };
    return DB;
}());
exports.default = DB;
