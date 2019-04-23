"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.trace = function (data) {
        this.logger.log('trace', data);
    };
    Logger.debug = function (data) {
        this.logger.log('debug', data);
    };
    Logger.error = function (data) {
        this.logger.log('error', data);
    };
    Logger.warn = function (data) {
        this.logger.log('warn', data);
    };
    Logger.fatal = function (data) {
        this.logger.log('fatal', data);
    };
    Logger.notify = function (data) {
        this.logger.info(data);
    };
    Logger.logger = require('simple-node-logger').createSimpleLogger('./logfile.log');
    return Logger;
}());
exports.default = Logger;
