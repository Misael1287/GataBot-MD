
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
  
//await conn.sendFile(m.chat, pickRandom(girl), 'girl.jpg', ✅ Resultado 🤭', m)
await conn.sendButton(m.chat, '✅ Resultado 🤭', 'Click en siguiente para ir a la siguiente imagen', pickRandom(girl), [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]],m)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']
handler.premium = false
handler.limit = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
