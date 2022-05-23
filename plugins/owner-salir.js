let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('El bot saldra del grupo , , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'salir']
handler.tags = ['owner']
handler.command = /^(salir|leavegc)$/i

handler.group = true
handler.rowner = true
handler.admin = false

export default handler
