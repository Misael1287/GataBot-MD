
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
  
//await conn.sendFile(m.chat, pickRandom(girl), 'girl.jpg', β Resultado π€­', m)
await conn.sendButton(m.chat, 'β Resultado π€­', 'Click en siguiente para ir a la siguiente imagen', pickRandom(girl), [['π ππΈπΆππΈπ΄π½ππ΄ π', `${usedPrefix + command}`]],m)
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
