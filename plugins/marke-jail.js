let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/jail', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*𝙿𝚁𝙸𝚂𝙸𝙾𝙽𝙴𝚁𝙾 𝙽𝚄𝙼𝙴𝚁𝙾 𝟸𝟹𝟺*', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(carcel|jail)$/i
export default handler
