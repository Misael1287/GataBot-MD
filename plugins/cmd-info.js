module.exports = Object.assign(async function handler(m, { conn, text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw 'No se encontro (╥﹏╥)'
    let sticker = global.db.data.sticker[hash]
    if (sticker) return m.reply(`
*FileSha256:* ${hash}
*Texto:* ${sticker.text}
*Tiempo de creacion:* ${sticker.at}
*Bloqueado:* ${sticker.locked ? 'Si' : 'No'}
*Nombre del creador:* ${conn.getName(sticker.creator)}
*Número de creador:* ${splitM(sticker.creator)}
*Creador Jid:* ${sticker.creator}
${sticker.mentionedJid.length > 0 ? `*Mención Cmd:*
${sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:\n*Nombre de la mención:* ${conn.getName(v)}\n*Número de mención:* ${splitM(v)}\n*Mención Jid:* ${v}`).join('\n\n')}` : ''} 
`.trim())
    else m.reply('Sticker Not in the database')
}, {
    help: ['cmd'].map(v => 'info' + v + ' <text>'),
    tags: ['database'],
    command: ['infocmd']
})

/**
* split Jid
* @param {String} jid 
* @returns String
*/
function splitM(jid) {
    return jid.split('@')[0]
}
