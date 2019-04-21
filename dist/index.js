"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = __importDefault(require("./init/bot"));
var handlers_1 = __importDefault(require("./init/handlers"));
var bot = bot_1.default.configure();
handlers_1.default.init(bot);
