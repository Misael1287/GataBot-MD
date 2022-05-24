let handler = async (m, { conn }) => {
let emot = pickRandom(["🐈", "😽", "😼", "🐱", "🤖", "😼", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(gata dios|gata - bot|gata-bot|gatabot)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
