let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/096776ca165d85888ebd6.png', m, { packname: "welcome", author: "ʕ•́ᴥ•̀ʔっ" })
}

handler.customPrefix = /^(bienvenido|bienvenidad)$/i
handler.command = new RegExp

export default handler
