let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "welcome", author: "ʕ•́ᴥ•̀ʔっ" })
}

handler.customPrefix = /^(bienvenido|bienvenidad)$/i
handler.command = new RegExp

export default handler
