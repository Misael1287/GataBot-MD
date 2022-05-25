import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#play Good Feeling - Flo Rida*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* 
${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* 
${description}
📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* 
${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* 
${durationH}
👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* 
${viewH}
🔗 *𝚄𝚁𝙻:* 
${url}
  `.trim(), wm, thumbnail, '', '', null, null, [
    ['𝙑𝙞𝙙𝙚𝙤 | 1️⃣', `${usedPrefix}ytv ${url} yes`],
    ['𝙑𝙞𝙙𝙚𝙤 | 2️⃣', `${usedPrefix}play.2 ${url} yes`],
    ['𝘼𝙪𝙙𝙞𝙤 | 1️⃣', `${usedPrefix}yta ${url} yes`]
  ], m)
    let info = `💝 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝘼𝙍𝙇𝙀.
💗 𝙔𝙊𝙐 𝙈𝘼𝙔 𝘼𝙇𝙎𝙊 𝘽𝙀 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏𝙀𝘿.`.trim()  
await conn.sendHydrated(m.chat, info, wm, thumbnail, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝘼𝙪𝙙𝙞𝙤 | 2️⃣', `${usedPrefix}play.1 ${url} yes`],
['𝘽𝙪𝙨𝙘𝙖𝙧 | 𝙎𝙚𝙖𝙧𝙘𝙝 | 🌐', `.ytsearch ${url} yes`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]
], m,)
    
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
