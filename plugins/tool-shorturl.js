import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *S H O R T E D  U R L* —`
    let caption = 'Seleccione el tipo de URL'
const sections = [
   {
	title: "TIPOS DE URL",
	rows: [
	    {title: "URL pqueño", rowId: ".short " + args[0] + " tinyurl"},
	    {title: "LinkPoi", rowId: ".short " + args[0] + " linkpoi"},
	    {title: "Poco", rowId: ".short " + args[0] + " bitly"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Selecciona",
  sections
}

if (!args[0]) return m.reply('¿Dónde está el enlace?')
if (!args[1]) return conn.sendMessage(m.chat, listMessage)

//TINY
if (args[1] == "tinyurl") {
	let res = await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)
    let json = await res.json()
    let { result } = await json
m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${result}`,m)
}
//--------------

//LINKPOI
if (args[1] == "linkpoi") {
	let poi = await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)
	let jpoi = await poi.json()
	let { shorturl } = jpoi
	m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${shorturl.replace('\/','/')}`,m)
}
//------------
if (args[1] == "bitly") {
	let bit = await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${args[0]}&APIKEY=YOURAPIKEY`)
	let bitly = await bit.json()
	let { result } = bitly
	let { link } = result
	m.reply('_*En proceso...*_')
conn.reply(m.chat, `💌 *Link:* ${link}`,m)
}
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i

export default handler
