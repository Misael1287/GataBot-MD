import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age, role, exp  } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
╭───ꕥ *𝙿𝙴𝚁𝙵𝙸𝙻* ꕥ───✾
│
│•> *𝙽𝙾𝙼𝙱𝚁𝙴 :* ${username} ${registered ? '(' + name + ') ': ''}
│•> *𝙽𝚄𝙼𝙴𝚁𝙾 :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│•> *𝙻𝙸𝙽𝙺   :* wa.me/${who.split`@`[0]}${registered ? '\n│•> *𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
│•> *𝚁𝙰𝙽𝙶𝙾  :* *${role}*
│•> *𝙻𝙸𝙼𝙸𝚃𝙴 :* ${limit} 𝚄𝚂𝙾𝚂
│•> *𝙴𝚇𝙿    :* *${exp}*
│•> *𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* ${registered ? 'Si': 'No'}
│•> *𝙿𝚁𝙴𝙼𝙸𝚄𝙼:* ${prem ? 'Si' : 'No'}
│•> *𝙱𝙰𝙽𝙴𝙰𝙳𝙾:* No
│•> *𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾:* No
│•> *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂:* 0/5
╰─────────────────────`
conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
