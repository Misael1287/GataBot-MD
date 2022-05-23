module.exports = Object.assign(async function handler(m, { isOwner, isPremium, command }) {
    if (!(isOwner || isPremium)) {
        global.dfail('premium', m, conn)
        throw false
    }
    if (!m.quoted) throw '¡Mensaje de respuesta!'
    if (!m.quoted.fileSha256) throw 'Falta hash SHA256'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Hash no encontrado en la base de datos'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('¡Hecho!')
}, {
    help: ['un', ''].map(v => v + 'lockcmd'),
    tags: ['database'],
    command: /^(un)?lockcmd$/i
})
