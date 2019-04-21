"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.trace = function (data) {
        this.logger.log('trace', data);
    };
    Logger.notify = function (data) {
        this.logger.info(data);
    };
    Logger.logger = require('simple-node-logger').createSimpleLogger('./logfile.log');
    return Logger;
}());
exports.default = Logger;
