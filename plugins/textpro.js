// MISAEL

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *T E X T P R O* —`
    let caption = 'Seleccione'
const sections = [
   {
	title: "TIPOS DE logos",
	rows: [
	    {title: "3d-deep-sea-metal", rowId: ".textpro 3d-deep-sea-metal " + args[0] + ""},
	    {title: "American-flag-3D", rowId: ".textpro American-flag-3D " + args[0] + ""},
	    {title: "3D-sci-fi", rowId: ".testpro 3D-sci-fi " + args[0] + ""},
	    {title: "3D-rainbow-color-calligraphy", rowId: ".textpro 3D-rainbow-color-calligraphy " + args[0] + ""},
	    {title: "3D-water-pipe", rowId: ".textpro 3D-water-pipe " + args[0] + ""},
	    {title: "Halloween-skeleton", rowId: ".textpro Halloween-skeleton " + args[0] + ""},
	    {title: "a-spooky-Halloween", rowId: ".textpro a-spooky-Halloween " + args[0] + ""},
	    {title: "a-cinematic-horror", rowId: ".texpro a-cinematic-horror " + args[0] + ""},
            {title: "a-sketch", rowId: ".textpro a-sketch " + args[0] + ""},
	    {title: "blue-circuit-style", rowId: ".textpro blue-circuit-style " + args[0] + ""},
	    {title: "space", rowId: ".textpro space " + args[0] + ""},
	    {title: "a-metallic", rowId: ".textpro a-metallic " + args[0] + ""},
	    {title: "Creat-glossy-metalic", rowId: ".textpro Creat-glossy-metalic " + args[0] + ""},
	    {title: "a-Captain-America", rowId: ".textpro a-Captain-America " + args[0] + ""},
	    {title: "science-fiction", rowId: ".textpro science-fiction " + args[0] + ""},
	    {title: "Video-game-classic-8-bit", rowId: ".textpro Video-game-classic-8-bit " + args[0] + ""},
	    {title: "green-horror-style", rowId: ".textpro green-horror-style " + args[0] + ""},
	    {title: "a-transformer", rowId: ".textpro a-transformer " + args[0] + ""},
	    {title: "berry", rowId: ".textpro berry " + args[0] + ""},
	    {title: "layered", rowId: ".textpro layered " + args[0] + ""},
	    {title: "Online-thunder--generator", rowId: ".textpro Online-thunder--generator " + args[0] + ""},
	    {title: "a-magma-hot", rowId: ".textpro a-magma-hot " + args[0] + ""},
	    {title: "3D-stone-cracked-cool", rowId: ".textpro 3D-stone-cracked-cool " + args[0] + ""},
	    {title: "3D-neon-light", rowId: ".textpro 3D-neon-light " + args[0] + ""},
	    {title: "impressive-glitch", rowId: ".textpro impressive-glitch " + args[0] + ""},
	    {title: "a-glitch", rowId: ".textpro a-glitch " + args[0] + ""},
	    {title: "Harry-Potter", rowId: ".textpro Harry-Potter " + args[0] + ""},
	    {title: "embossed--on-cracked-surface", rowId: ".textpro embossed--on-cracked-surface " + args[0] + ""},
	    {title: "Broken-glass", rowId: ".textpro Broken-glass " + args[0] + ""},
	    {title: "art-paper-cut", rowId: ".textpro art-paper-cut " + args[0] + ""},
	    {title: "artistic-black-and-white-status-and-quote-with-your-photos", rowId: ".textpro artistic-black-and-white-status-and-quote-with-your-photos " + args[0] + ""},
	    {title: "Online-3D-gradient--generator", rowId: ".textpro Online-3D-gradient--generator " + args[0] + ""},
	    {title: "a-3D-glossy-metal", rowId: ".textpro a-3D-glossy-metal " + args[0] + ""},
	    {title: "3D-realistic--on-the-beach", rowId: ".textpro 3D-realistic--on-the-beach " + args[0] + ""},
	    {title: "a-watercolor", rowId: ".textpro a-watercolor " + args[0] + ""},
	    {title: "Online-multicolor-3D-paper-cut", rowId: ".textpro Online-multicolor-3D-paper-cut " + args[0] + ""},
	    {title: "Write-text-on-foggy-window", rowId: ".textpro Write-text-on-foggy-window " + args[0] + ""},
	    {title: "neon-devil-wings", rowId: ".textpro neon-devil-wings " + args[0] + ""},
	    {title: "3D-underwater--generator", rowId: ".textpro 3D-underwater--generator " + args[0] + ""},
	    {title: "Online-black-and-white-bear-mascot-logo-creation", rowId: ".textpro Online-black-and-white-bear-mascot-logo-creation " + args[0] + ""},
	    {title: "wonderful-graffiti-art", rowId: ".textpro wonderful-graffiti-art " + args[0] + ""},
	    {title: "a-cool-graffiti-text-on-the-wall", rowId: ".textpro a-cool-graffiti-text-on-the-wall " + args[0] + ""},
	    {title: "cool-wall-graffiti", rowId: ".textpro cool-wall-graffiti " + args[0] + ""},
            {title: "a-christmas-holiday-snow", rowId: ".textpro a-christmas-holiday-snow " + args[0] + ""},
	    {title: "a-futuristic-technology-neon-light", rowId: ".textpro a-futuristic-technology-neon-light " + args[0] + ""},
	    {title: "snow--for-winter-holidays", rowId: ".textpro snow--for-winter-holidays " + args[0] + ""},
	    {title: "a-cloud--on-the-sky", rowId: ".textpro a-cloud--on-the-sky " + args[0] + ""},
	    {title: "3D-luxury-gold", rowId: ".textpro 3D-luxury-gold " + args[0] + ""},
	    {title: "3D-gradient", rowId: ".textpro 3D-gradient " + args[0] + ""},
	    {title: "Blackpink-logo-style", rowId: ".textpro Blackpink-logo-style " + args[0] + ""},
	    {title: "realistic-vintage-style-light-bulb", rowId: ".textpro realistic-vintage-style-light-bulb " + args[0] + ""},
	    {title: "realistic-cloud", rowId: ".textpro realistic-cloud " + args[0] + ""},
	    {title: "a-cloud--in-the-sky", rowId: ".textpro a-cloud--in-the-sky " + args[0] + ""},
	    {title: "Write-in-Sand-Summer-Beach", rowId: ".textpro Write-in-Sand-Summer-Beach " + args[0] + ""},
	    {title: "Sand-Writing", rowId: ".textpro Sand-Writing " + args[0] + ""},
	    {title: "Sand-engraved-3d", rowId: ".textpro Sand-engraved-3d " + args[0] + ""},
	    {title: "a-summery-sand-writing", rowId: ".textpro a-summery-sand-writing " + args[0] + ""},
	    {title: "Foil-Balloon--For-Birthday", rowId: ".textpro Foil-Balloon--For-Birthday " + args[0] + ""},
	    {title: "3d-glue--with-realistic-style", rowId: ".textpro 3d-glue--with-realistic-style " + args[0] + ""},
	    {title: "space-3D", rowId: ".textpro space-3D " + args[0] + ""},
	    {title: "Metal-Dark-Gold", rowId: ".textpro Metal-Dark-Gold " + args[0] + ""},
	    {title: "Glitch--Style-Tik-Tok", rowId: ".textpro Glitch--Style-Tik-Tok " + args[0] + ""},
            {title: "a-Stone", rowId: ".textpro a-Stone " + args[0] + ""},
	    {title: "Neon-Light--With-Galaxy-Style", rowId: ".textpro Neon-Light--With-Galaxy-Style " + args[0] + ""},
	    {title: "1917-Style", rowId: ".textpro 1917-Style " + args[0] + ""},
	    {title: "80's-Retro-Neon", rowId: ".textpro 80's-Retro-Neon " + args[0] + ""},
	    {title: "Minion--3D", rowId: ".textpro Minion--3D " + args[0] + ""},
	    {title: "Pornhub-Style-Logo", rowId: ".textpro Pornhub-Style-Logo " + args[0] + ""},
	    {title: "Double-Exposure--Black-&-White", rowId: ".textpro Double-Exposure--Black-&-White " + args[0] + ""},
	    {title: "Holographic-3D", rowId: ".textpro Holographic-3D " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
	    {title: "", rowId: ".textpro  " + args[0] + ""},
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
handler.help = ['textpro']
handler.tags = ['internet']
handler.command = /^(logo)$/i

export default handler
