"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.init = function (bot) {
        /* bot.on('text', async (ctx: api.ContextMessageUpdate) => {
            let name = `${ctx.from.first_name} ${ctx.from.last_name}`
            let username = ctx.from.username

            let user = await new User({
                chatId: ctx.from.id,
                username: ctx.from.username
            })

            await user.save()

            Logger.notify(`Сообщение от ${name} (@${username}): "${ctx.message.text}"`)
        }) */
    };
    return Message;
}());
exports.default = Message;
