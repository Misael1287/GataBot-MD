let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*𝙴𝙵𝙴𝙲𝚃𝙾 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾!*', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(glass|glas)$/i
export default handler
