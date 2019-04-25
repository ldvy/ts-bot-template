export function isAdmin(chatId: number): boolean {
    let admins = [300922262]

    return admins.includes(chatId)
}