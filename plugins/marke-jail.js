let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/jail', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*πΏππΈππΈπΎπ½π΄ππΎ π½ππΌπ΄ππΎ πΈπΉπΊ*', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(carcel|jail)$/i
export default handler
