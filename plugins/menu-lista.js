import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
      {title: "π πΎπππΌπΏπππΌ π", description: null, rowId: `${usedPrefix}creadora`},
      {title: "π πππππΎππΏπΌπΏ π", description: null, rowId: `${usedPrefix}ping`},
      {title: "β¨ ππππ πΎπππππππ β¨", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "π πππππππΌπΎπΓπ π", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "β­ ππππ ππππ β­", description: null, rowId: `${usedPrefix}menu3`},
      {title: "π ππππ ππππππππΌπππ(πΌ) π", description: null, rowId: `${usedPrefix}ownermenu`},

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `β­ββββββββββββββββββββββ\nβ${ucapan()}\nβπβ’.ΒΈπΒΈ.β’ *${name}* β’.ΒΈπΒΈ.β’π\nβ°ββββββββββββββββββββββ
β­βββγ *${wm}* γββββ¬£
ββͺ *Tiempo Actual*	    
ββΊ ${time}   
β   ββββββββββββββββββββ
ββͺ *Activa durante* 
ββΊ ${uptime}
β   ββββββββββββββββββββ
ββͺ *VersiΓ³n de GataBot-MD*
ββΊ ${vs}
β   ββββββββββββββββββββ
ββͺ *Usuario(s)*
ββΊ ${Object.keys(global.db.data.users).length} 
β   ββββββββββββββββββββ
ββͺ *Modo*
ββΊ ${global.opts['self'] ? 'πππππΌπΏπ' : 'πππ½πππΎπ'}
β   ββββββββββββββββββββ
ββͺ *Chat(s) Prohibido(s)*
ββΊ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
β   ββββββββββββββββββββ
ββͺ *Usuario(s) Prohibido(s)*
ββΊ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
β°ββββββββββββββββββββββ¬£`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "πππππΌ πΏπ ππππ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "π *BIENVENIDO(A)* π"
  if (time >= 4) {
    res = "π *Buenos DΓ­as* β"
  }
  if (time >= 11) {
    res = "ποΈ *Buenas Tardes* π€οΈ"
  }
  if (time >= 15) {
    res = "π *Buenas tardes* π₯οΈ"
  }
  if (time >= 17) {
    res = "π *Buenas noches* π«"
  }
  return res
}
