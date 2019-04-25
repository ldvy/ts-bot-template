"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(chatId) {
    var admins = [300922262];
    return admins.includes(chatId);
}
exports.isAdmin = isAdmin;
