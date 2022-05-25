let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Introducir enlace\n\nEjemplo: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*Espera un momento...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
si todavía está borroso, significa que el video está borroso de youtube`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i
handler.premium = true


module.exports = handler
