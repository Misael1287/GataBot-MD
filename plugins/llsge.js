let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `π π  πππ©ππ½π€π©-ππΏ π π `,
rows: [
{title: "π | ππππππ", description: "Ι’Κα΄α΄α΄κ± α΄κ°α΄ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}grupos`},
{title: "π | ππππΌπΏπ", description: "α΄κ±α΄α΄α΄α΄ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}estado`},
{title: "π | πππππΏ", description: "α΄ α΄Κα΄α΄Ιͺα΄α΄α΄ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix + command}infobot`},
{title: "π | πππππΏ2", description: "Ιͺα΄κ°α΄Κα΄α΄α΄Ιͺα΄ κ±α΄ΚΚα΄ α΄Κ Κα΄α΄", rowId: `${usedPrefix + command}speed`},
{title: "π | πΎπΌππΌπΎππππππππΎπΌπ", description: "α΄α΄α΄α΄κ± Κα΄κ± α΄α΄Κα΄α΄α΄α΄ΚΙͺκ±α΄Ιͺα΄α΄κ± α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix + command}caracteristicas`},
{title: "π | πΏπππΌπ", description: "Ιͺα΄κ°α΄Κα΄α΄α΄Ιͺα΄Ι΄ κ±α΄ΚΚα΄ α΄α΄Ι΄α΄α΄Ιͺα΄Ι΄α΄κ±", rowId: `${usedPrefix}donar`},   
{title: "π | πππππΌ πΏπ ππππππ", description: "Ι’Κα΄α΄α΄κ± α΄α΄Ι΄α΄α΄ α΄κ±α΄α΄ α΄Κ Κα΄α΄", rowId: `${usedPrefix}grouplist`},    
{title: "π | πππππ", description: "α΄Κ α΄Κα΄α΄α΄α΄Κ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}owner`},      
{title: "π | ππΎπππ", description: "κ±α΄ΚΙͺα΄ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}script`},    
{title: "ποΈ | ππΌπππ", description: "α΄α΄α΄Ι’α΄ α΄α΄α΄α΄α΄α΄α΄Ιͺα΄α΄", rowId: `${usedPrefix}mates`},
{title: "ποΈ | πππ", description: "α΄α΄α΄Ι’α΄ α΄Κα΄κ±Ιͺα΄α΄ α΄Ιͺα΄α΄Κα΄ α΄α΄Κα΄α΄Κ α΄Ιͺα΄α΄Κα΄ α΄α΄Ι΄ α΄Κ Κα΄α΄", rowId: `${usedPrefix}ppt`},
{title: "ποΈ | ππππππππππ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄Κα΄κ±α΄Ιͺα΄α΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}prostituto`},
{title: "ποΈ | ππππππππππΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄Κα΄κ±α΄Ιͺα΄α΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}prostituta`},
{title: "ποΈ | ππΌπ2", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ Ι’α΄Κ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}gay2`},
{title: "ποΈ | ππππ½ππΌππΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ Κα΄κ±ΚΙͺα΄Ι΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}lesbiana`},
{title: "ποΈ | ππΌππππ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄α΄α΄Κα΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}pajero`},
{title: "ποΈ | ππΌππππΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄α΄α΄Κα΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}pajera`},
{title: "ποΈ | ππππ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}puto`},
{title: "ποΈ | ππππΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}puta`},
{title: "ποΈ | ππΌππΎπ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄Ι΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}manco`},
{title: "ποΈ | ππΌππΎπΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ α΄α΄Ι΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}manca`},
{title: "ποΈ | ππΌππΌ", description: "α΄α΄Κα΄α΄Κα΄Ι΄α΄α΄ α΄Κ α΄α΄Κα΄α΄Ι΄α΄α΄α΄α΄ α΄α΄ Κα΄α΄α΄ Qα΄α΄ α΄Ιͺα΄Ι΄α΄", rowId: `${usedPrefix}rata`},
{title: "ποΈ | ππππ", description: "α΄α΄α΄Ιͺα΄α΄Κ α΄α΄ α΄α΄α΄Κ", rowId: `${usedPrefix}love`},
{title: "ποΈ | πΏππππΌπ", description: "α΄α΄xα΄α΄Κ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄", rowId: `${usedPrefix}doxear`},
{title: "ποΈ | πππ", description: "α΄α΄α΄Ι’α΄ α΄Κα΄κ±Ιͺα΄α΄ α΄Ιͺα΄α΄Κα΄ α΄α΄Κα΄α΄Κ α΄Ιͺα΄α΄Κα΄", rowId: `${usedPrefix}PVP`},
{title: "ποΈ | ππππππππΌ", description: "α΄Κα΄Ι’α΄Ι΄α΄α΄Κα΄ α΄ΚΙ’α΄ α΄Κ Κα΄α΄", rowId: `${usedPrefix}pregunta`},
{title: "ποΈ | ππππ", description: "α΄α΄α΄Ι’α΄ α΄α΄ α΄Κα΄Ι’α΄α΄α΄Ι΄α΄α΄α΄κ±", rowId: `${usedPrefix}slot`},
{title: "ποΈ | πΊπ°π΄π°", description: "α΄α΄Κα΄ α΄α΄α΄α΄ α΄Κκ±α΄Κ α΄α΄Ι΄ α΄Κ Κα΄α΄", rowId: `${usedPrefix}simi`},
{title: "ποΈ | πππππΌππ", description: "Qα΄Ιͺα΄Ι΄α΄κ± κ±α΄Ι΄ Κα΄κ± α΄α΄κ± Ι’α΄Κκ± α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}topgays`},
{title: "ποΈ | ππππππΌπππ", description: "Qα΄Ιͺα΄Ι΄α΄κ± κ±α΄Ι΄ Κα΄κ± α΄α΄κ± α΄α΄α΄α΄α΄κ± α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}topotakus`},  
{title: "ποΈ | πππππΌπ ππΌππππΌ", description: "κ°α΄α΄α΄Κ α΄α΄Κα΄α΄α΄ α΄α΄Ι΄ ΙͺΙ΄α΄α΄Ι’Κα΄Ι΄α΄α΄κ± α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}formarpareja`},
{title: "ποΈ | ππππΏπΌπΏ", description: "α΄Κ Κα΄α΄ α΄α΄ Κα΄α΄α΄ α΄Ι΄α΄ α΄Κα΄Ι’α΄Ι΄α΄α΄", rowId: `${usedPrefix}verdad`},
{title: "ποΈ | ππππ", description: "α΄Κ Κα΄α΄ α΄α΄ Κα΄α΄α΄ α΄Ι΄ Κα΄α΄α΄", rowId: `${usedPrefix}reto`},
{title: "βοΈ | πππΌπ½ππ", description: "α΄α΄α΄Ιͺα΄ α΄Κ κ°α΄Ι΄α΄Ιͺα΄Ι΄α΄κ± α΄α΄Κα΄ α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}enable`},
{title: "βοΈ | πΏπππΌπ½ππ", description: "α΄α΄κ±α΄α΄α΄Ιͺα΄ α΄Κ κ°α΄Ι΄α΄Ιͺα΄Ι΄α΄κ± α΄α΄Κα΄ α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}disable`},
{title: "π₯ | ππΌπΎππ½πππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ± α΄α΄ κ°α΄α΄α΄Κα΄α΄α΄", rowId: `${usedPrefix}facebook`},
{title: "π₯ | πππππΌπππΌπ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ± α΄α΄ ΙͺΙ΄κ±α΄α΄Ι’Κα΄α΄", rowId: `${usedPrefix}instagram`},
{title: "π₯ | πππΏπΌππππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄Κα΄ΚΙͺα΄ α΄κ± α΄α΄ α΄α΄α΄α΄κ°ΙͺΚα΄", rowId: `${usedPrefix}mediafire`},
{title: "π₯ | ππππΎππππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ Κα΄α΄α΄κ±Ιͺα΄α΄ΚΙͺα΄ α΄α΄ Ι’Ιͺα΄Κα΄Κ", rowId: `${usedPrefix}gitclone`},
{title: "π₯ | ππππππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ± α΄α΄ α΄Ιͺα΄α΄α΄α΄", rowId: `${usedPrefix}tiktok`},
{title: "π₯ | πππ3", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄α΄α΄Ιͺα΄κ± α΄α΄Κ α΄α΄α΄Ιͺα΄ α΄α΄ α΄Ι΄ α΄ΚΚ", rowId: `${usedPrefix}ytmp3`},
{title: "π₯ | πππ4", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ± α΄α΄Κ α΄α΄α΄Ιͺα΄ α΄α΄ α΄Ι΄ α΄ΚΚ", rowId: `${usedPrefix}ytmp4`},
{title: "π₯ | πππΌπ.1", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄α΄α΄Ιͺα΄κ±", rowId: `${usedPrefix}play.1`},
{title: "π₯ | πππΌπ.2", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ±", rowId: `${usedPrefix}play.2`},
{title: "π₯ | πππΌπ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ±/α΄α΄α΄Ιͺα΄κ± α΄α΄ Κα΄α΄α΄α΄Κα΄", rowId: `${usedPrefix}play`},
{title: "π₯ | πππΌπ3", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄ Ιͺα΄α΄α΄κ±/α΄α΄α΄Ιͺα΄κ± α΄α΄ Κα΄α΄α΄α΄Κα΄", rowId: `${usedPrefix}play3`},
{title: "π₯ | πππππππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ α΄α΄Ι΄α΄Ιͺα΄Ι΄α΄κ± α΄α΄ κ±α΄α΄α΄Ιͺκ°Κ", rowId: `${usedPrefix}spotify`},
{title: "π₯ | πππΌπππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ι’α΄α΄Ι’Κα΄", rowId: `${usedPrefix}imagen`},
{title: "π₯ | ππππππππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΙͺΙ΄α΄α΄Κα΄α΄", rowId: `${usedPrefix}pinteret`},
{title: "π₯ | ππΌππππΌπππ", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ κ°α΄Ι΄α΄α΄κ± α΄α΄ α΄α΄Ι΄α΄α΄ΚΚα΄", rowId: `${usedPrefix}wallpaper`},
{title: "π₯ | ππΌππππΌπππ2", description: "α΄α΄κ±α΄α΄ΚΙ’α΄Κ κ°α΄Ι΄α΄α΄κ± α΄α΄ α΄α΄Ι΄α΄α΄ΚΚα΄", rowId: `${usedPrefix}wallpaper2`},
{title: "π₯ | ππππππππ", description: "Κα΄κ±α΄α΄Κ α΄ Κα΄ κ°α΄α΄α΄ α΄α΄ α΄Κα΄Κκ°ΙͺΚ α΄α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ α΄α΄ α΄Ιͺα΄α΄α΄α΄", rowId: `${usedPrefix}pptiktok`},
{title: "π₯ | πππππΌππ", description: "Κα΄κ±α΄α΄Κ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ α΄Ι΄ ΙͺΙ΄κ±α΄α΄Ι’Κα΄α΄", rowId: `${usedPrefix}igstalk`},
{title: "π₯ | πππππππππΌππ", description: "Κα΄κ±α΄α΄Κ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ α΄Ι΄ α΄Ιͺα΄α΄α΄α΄", rowId: `${usedPrefix}tiktokstalk`},
{title: "π | πΌπΏπΏ", description: "α΄α΄Κα΄ α΄Ι’Κα΄Ι’α΄Κ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}add`},
{title: "π | πππΎπ", description: "α΄α΄Κα΄ α΄ΚΙͺα΄ΙͺΙ΄α΄Κ α΄ α΄Ι΄ ΙͺΙ΄α΄α΄Ι’Κα΄Ι΄α΄α΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}kick`},
{title: "π | πππππ", description: "α΄α΄Κα΄ α΄α΄α΄Ιͺα΄ α΄Κ α΄ α΄α΄κ±α΄α΄α΄Ιͺα΄ α΄Κ Qα΄α΄ κ±α΄Κα΄ Κα΄κ± α΄α΄α΄ΙͺΙ΄κ± Κα΄ΚΚα΄Ι΄", rowId: `${usedPrefix}grupo`},
{title: "π | πππππππ", description: "α΄α΄Κα΄ α΄Κα΄α΄α΄α΄ α΄Κ α΄ α΄Ι΄ α΄Ιͺα΄Ι΄ΚΚα΄ α΄ α΄α΄α΄ΙͺΙ΄", rowId: `${usedPrefix}promote`},
{title: "π | πΏπππππ", description: "α΄α΄Κα΄ α΄α΄Ι’Κα΄α΄α΄Κ α΄ α΄Ι΄ α΄α΄α΄ΙͺΙ΄ α΄ α΄Ιͺα΄Ι΄ΚΚα΄", rowId: `${usedPrefix}demote`},
{title: "π | π½πΌππΎππΌπ", description: "α΄α΄Κα΄ Κα΄Ι΄α΄α΄Κ α΄Κ α΄Κα΄α΄ Κ Ι΄α΄ α΄α΄α΄α΄α΄Ι΄ α΄κ±α΄Κ α΄Κ Κα΄α΄", rowId: `${usedPrefix}banchat`},
{title: "π | πππ½πΌππΎππΌπ", description: "α΄α΄Κα΄ α΄α΄κ±Κα΄Ι΄α΄α΄Κ α΄Κ α΄Κα΄α΄ Κ Qα΄α΄ α΄α΄α΄α΄α΄Ι΄ α΄α΄ΙͺΚΙͺα΄’α΄Κ α΄Κ Κα΄α΄", rowId: `${usedPrefix}unbanchat`},
{title: "π | πππππππππ", description: "Ιͺα΄κ°α΄Κα΄α΄α΄Ιͺα΄Ι΄ κ±α΄ΚΚα΄ α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}infogroup`},
{title: "π | ππππ", description: "ΚΙͺΙ΄α΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}link`},
{title: "π | πππππΌππ", description: "α΄α΄α΄ΚΙͺα΄Κ α΄Κ Ι΄α΄α΄ΚΚα΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}setname`},
{title: "π | ππππΏπππΎ", description: "α΄α΄α΄ΚΙͺα΄Κ Κα΄ α΄α΄κ±α΄ΚΙͺα΄α΄Ιͺα΄Ι΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}setdesc`},
{title: "π | πππππΎπΌπ", description: "α΄α΄Κα΄ ΚΚα΄α΄α΄Κ α΄ α΄α΄α΄α΄κ± Κα΄κ± ΙͺΙ΄α΄α΄Ι’Κα΄Ι΄α΄α΄κ± α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}invocar`},
{title: "π | πππππππΎπππ", description: "α΄α΄Κα΄ α΄α΄Ιͺα΄α΄Κ Κα΄ ΚΙͺα΄Ι΄α΄ α΄Ι΄Ιͺα΄α΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}setwelcome`},
{title: "π | ππππ½ππ", description: "α΄α΄Κα΄ α΄α΄Ιͺα΄α΄Κ Κα΄ α΄α΄κ±α΄α΄α΄Ιͺα΄α΄α΄ α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}setbye`},
{title: "π | πππΏπππΌπ", description: "α΄α΄Κα΄ α΄α΄α΄ΙͺΚ α΄Ι΄ α΄α΄Ι΄κ±α΄α΄α΄ α΄ α΄α΄α΄α΄κ± Κα΄κ± ΙͺΙ΄α΄α΄Ι’Κα΄Ι΄α΄α΄κ± α΄α΄Κ Ι’Κα΄α΄α΄", rowId: `${usedPrefix}hidetag`},
{title: "π | ππππππΌπ", description: "α΄α΄Κα΄ Κα΄α΄Κα΄α΄Κ Κα΄ ΚΙͺα΄Ι΄α΄ α΄Ι΄Ιͺα΄α΄/α΄α΄κ±α΄α΄α΄Ιͺα΄α΄/α΄Κα΄α΄α΄α΄ α΄Κ/α΄α΄Ι’Κα΄α΄α΄α΄Ιͺα΄Ι΄", rowId: `${usedPrefix}simular`},
{title: "π§§ | πππππ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ Ιͺα΄α΄Ι’α΄Ι΄", rowId: `${usedPrefix}toimg`},
{title: "π§§ | ππππ3", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ α΄Ι΄ α΄ Ιͺα΄α΄α΄ α΄α΄α΄Ιͺα΄", rowId: `${usedPrefix}tomp3`},
{title: "π§§ | πππππ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ α΄Ι΄ α΄α΄α΄Ιͺα΄", rowId: `${usedPrefix}toptt`},
{title: "π§§ | πππππΏππ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ α΄Ι΄ α΄α΄α΄Ιͺα΄ α΄ Ιͺα΄α΄α΄", rowId: `${usedPrefix}tovideo`},
{title: "π§§ | πππππ", description: "α΄α΄Κα΄ κ±α΄ΚΙͺΚ α΄Ι΄α΄ Ιͺα΄α΄Ι’α΄Ι΄/α΄ Ιͺα΄α΄α΄ α΄ ΙͺΙ΄α΄α΄ΚΙ΄α΄α΄", rowId: `${usedPrefix}tourl`},
{title: "π§§ | πππ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ Qα΄α΄ Κα΄α΄ α΄ΙͺΙ’α΄ α΄ΚΙ’α΄", rowId: `${usedPrefix}tts`},
{title: "ποΈ | πππππ", description: "α΄α΄Κα΄ α΄Κα΄α΄Κ α΄Ι΄ Κα΄Ι’α΄ α΄α΄Κκ±α΄Ι΄α΄ΚΙͺα΄’α΄α΄α΄", rowId: `${usedPrefix}logos`},
{title: "ποΈ | πππππΎπΌππΏ", description: "α΄α΄Κα΄ α΄Κα΄α΄Κ α΄Ι΄α΄ α΄Κα΄α΄Ι΄α΄Ιͺα΄Κ", rowId: `${usedPrefix}simpcard`},
{title: "ποΈ | ππππππΎπΌππΏ", description: "α΄α΄Κα΄ α΄Κα΄α΄Κ α΄Ι΄α΄ α΄Κα΄α΄Ι΄α΄Ιͺα΄Κ", rowId: `${usedPrefix}hornycard`},
{title: "ποΈ | πππππΎπ", description: "α΄α΄Κα΄ α΄α΄α΄α΄ α΄Κα΄Ιͺα΄α΄ α΄Ι΄ Κα΄ΚΙͺ", rowId: `${usedPrefix}lolice`},
{title: "ποΈ | πππΎππππππ", description: "α΄α΄α΄α΄Ι΄α΄α΄ΚΙͺα΄ α΄Ι΄ Κα΄α΄α΄α΄Κα΄", rowId: `${usedPrefix}ytcomment`},
{title: "ποΈ | πππππππππππΏ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κκ±α΄ α΄κ±α΄α΄α΄Ιͺα΄α΄", rowId: `${usedPrefix}itssostupid`},
{title: "ποΈ | πππππππΌπ", description: "α΄α΄Κα΄ Κα΄α΄α΄Κ α΄Ιͺxα΄Κ Κα΄ κ°α΄α΄α΄ α΄α΄ α΄α΄Κκ°ΙͺΚ", rowId: `${usedPrefix}pixel`},
{title: "ποΈ | π½πππ", description: "Κα΄α΄α΄Κ α΄Ι΄ α΄κ°α΄α΄α΄α΄ α΄ α΄α΄ κ°α΄α΄α΄ α΄α΄ α΄α΄Κκ°ΙͺΚ", rowId: `${usedPrefix}blur`},
{title: "πΎ | πΎππππππΌππ ππππΌππΏπ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΚΙͺκ±α΄Ιͺα΄Ι΄α΄ Κα΄Ι΄α΄Κα΄α΄", rowId: `${usedPrefix}cristianoronaldo`},
{title: "πΎ | πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄κ±κ±Ιͺ", rowId: `${usedPrefix}messi`},
{title: "πΎ | ππππ", description: "α΄α΄α΄α΄ α΄Κα΄α΄α΄α΄ΚΙͺα΄", rowId: `${usedPrefix}meme`},
{title: "πΎ | ππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΚΙͺα΄α΄κ±", rowId: `${usedPrefix}girl`},
{title: "πΎ | πΌππππΌπ", description: "α΄α΄ α΄Ι΄α΄ Ιͺα΄ α΄Ι΄ α΄ Ιͺα΄α΄α΄ α΄α΄ α΄Ι΄α΄Κα΄α΄α΄Ι΄Ιͺα΄Ιͺα΄Ι΄α΄α΄ α΄α΄Κα΄ Κα΄α΄ΚΚα΄κ±", rowId: `${usedPrefix}asupan`},
{title: "πΎ | ππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ιͺα΄α΄’Ιͺ", rowId: `${usedPrefix}itzy`},
{title: "πΎ | π½ππΌπΎπππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ ΚΚα΄α΄α΄α΄ΙͺΙ΄α΄", rowId: `${usedPrefix}blackpink`},
{title: "πΎ | ππππ π½ππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄κ±", rowId: `${usedPrefix}kpop bts`},
{title: "πΎ | ππππ πππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄xα΄", rowId: `${usedPrefix}kpop exo`},
{title: "πΎ | ππππ π½ππΌπΎπππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ ΚΚα΄α΄α΄α΄ΙͺΙ΄α΄", rowId: `${usedPrefix}kpop blackpink`},
{title: "πΎ | πππππππΏ", description: "α΄ Ιͺα΄α΄α΄ α΄α΄ Κα΄ΚΙͺκ±", rowId: `${usedPrefix}lolivid`},
{title: "πΎ | ππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄ΚΙͺ", rowId: `${usedPrefix}loli`},
{title: "πΎ | ππΌπππΏπΌπΏ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄ Ι΄α΄α΄ Ιͺα΄α΄α΄", rowId: `${usedPrefix}navidad`},
{title: "πΎ | ππΌππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Κα΄α΄α΄κ±", rowId: `${usedPrefix}ppcouple`},
{title: "πΎ | ππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ι΄α΄α΄α΄", rowId: `${usedPrefix}neko`},
{title: "πΎ | ππΌπππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄‘α΄Ιͺκ°α΄", rowId: `${usedPrefix}waifu`},
{title: "πΎ | πΌππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄ΙͺΚα΄", rowId: `${usedPrefix}akira`},
{title: "πΎ | πΌππππΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄ΙͺΚα΄α΄α΄", rowId: `${usedPrefix}akiyama`},
{title: "πΎ | πΌπππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Ι΄Ι΄α΄", rowId: `${usedPrefix}anna`},
{title: "πΎ | πΌππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄κ±α΄Ι΄α΄", rowId: `${usedPrefix}asuna`},
{title: "πΎ | πΌππππΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Κα΄κ±α΄α΄‘α΄", rowId: `${usedPrefix}ayuzawa`},
{title: "πΎ | π½πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄Κα΄α΄α΄", rowId: `${usedPrefix}boruto`},
{title: "πΎ | πΎππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΚΙͺΚα΄", rowId: `${usedPrefix}chiho`},
{title: "πΎ | πΎππππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΚΙͺα΄α΄Ι’α΄", rowId: `${usedPrefix}chitoge`},
{title: "πΎ | πΏπππΏπΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ιͺα΄α΄Κα΄", rowId: `${usedPrefix}deidara`},
{title: "πΎ | ππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Κα΄’α΄", rowId: `${usedPrefix}erza`},
{title: "πΎ | πππΌπππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Κα΄ΙͺΙ΄α΄", rowId: `${usedPrefix}elaina`},
{title: "πΎ | ππ½πΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Κα΄", rowId: `${usedPrefix}eba`},
{title: "πΎ | ππππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄ΙͺΚΙͺα΄", rowId: `${usedPrefix}emilia`},
{title: "πΎ | ππππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄κ±α΄Ιͺα΄", rowId: `${usedPrefix}hestia`},
{title: "πΎ | ππππΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ ΚΙͺΙ΄α΄α΄α΄", rowId: `${usedPrefix}hinata`},
{title: "πΎ | πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ ΙͺΙ΄α΄ΚΙͺ", rowId: `${usedPrefix}inori`},
{title: "πΎ | πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ιͺκ±α΄α΄’α΄", rowId: `${usedPrefix}isuzu`},
{title: "πΎ | πππΌπΎππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ιͺα΄α΄α΄ΚΙͺ", rowId: `${usedPrefix}itachi`},
{title: "πΎ | πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ιͺα΄α΄ΚΙͺ", rowId: `${usedPrefix}itori`},
{title: "πΎ | ππΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ι’α΄", rowId: `${usedPrefix}kaga`},
{title: "πΎ | ππΌππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ι’α΄Κα΄", rowId: `${usedPrefix}kagura`},
{title: "πΎ | πππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Ιͺα΄ΚΙͺ", rowId: `${usedPrefix}kaori`},
{title: "πΎ | ππππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ι΄Ιͺα΄α΄", rowId: `${usedPrefix}keneki`},
{title: "πΎ | ππΌππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄α΄α΄ΚΙͺ", rowId: `${usedPrefix}kotori`},
{title: "πΎ | ππππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Κα΄α΄Ιͺ", rowId: `${usedPrefix}kurumi`},
{title: "πΎ | ππΌπΏπΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄α΄α΄Κα΄", rowId: `${usedPrefix}madara`},
{title: "πΎ | ππππΌππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Ιͺα΄α΄κ±α΄", rowId: `${usedPrefix}mikasa`},
{title: "πΎ | ππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Ιͺα΄α΄", rowId: `${usedPrefix}miku`},
{title: "πΎ | ππππΌππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄ΙͺΙ΄α΄α΄α΄", rowId: `${usedPrefix}minato`},
{title: "πΎ | ππΌππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ι΄α΄Κα΄α΄α΄", rowId: `${usedPrefix}naruto`},
{title: "πΎ | ππππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Ι΄α΄α΄’α΄α΄α΄", rowId: `${usedPrefix}nezuko`},
{title: "πΎ | ππΌππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ κ±α΄Ι’ΙͺΚΙͺ", rowId: `${usedPrefix}sagiri`},
{title: "πΎ | ππΌππππ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ κ±α΄κ±α΄α΄α΄", rowId: `${usedPrefix}sasuke`},
{title: "πΎ | ππΌππππΌ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ κ±α΄α΄α΄Κα΄", rowId: `${usedPrefix}sakura`},
{title: "πΎ | πΎπππππΌπ", description: "Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄κ±α΄Κα΄Κ", rowId: `${usedPrefix}cosplay`},
{title: "π | ππΌπΎπ", description: "α΄α΄ α΄α΄Ι΄α΄α΄ α΄Ι΄ α΄α΄α΄α΄ α΄α΄ α΄Ι΄α΄ α΄α΄α΄α΄Κ", rowId: `${usedPrefix}pack`},
{title: "π | ππΌπΎπ2", description: "α΄α΄ α΄α΄Ι΄α΄α΄ α΄Ι΄ α΄α΄α΄α΄ α΄Κα΄α΄α΄α΄ΚΙͺα΄", rowId: `${usedPrefix}pack2`},
{title: "π | ππΌπΎπ3", description: "α΄α΄ α΄α΄Ι΄α΄α΄ α΄Ι΄ α΄α΄α΄α΄ α΄α΄ α΄Ι΄ Κα΄α΄ΚΚα΄", rowId: `${usedPrefix}pack3`},
{title: "π | πππΏπππππ", description: "α΄α΄ α΄Ι΄α΄ Ιͺα΄ α΄Ι΄ α΄ Ιͺα΄α΄α΄κ± xxx", rowId: `${usedPrefix}videoxxx`},
{title: "π | ππππΌπ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄α΄α΄κ±", rowId: `${usedPrefix}tetas`},
{title: "π | π½ππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄α΄α΄Κ", rowId: `${usedPrefix}booty`},
{title: "π | ππΎπΎππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄α΄ΚΙͺ", rowId: `${usedPrefix}ecchi`},
{title: "π | πππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ κ°α΄ΚΚα΄κ±", rowId: `${usedPrefix}furro`},
{title: "π | ππππ½ππΌππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ Κα΄κ±ΚΙͺα΄Ι΄α΄κ±", rowId: `${usedPrefix}imagenlesbians`},
{title: "π | ππΌπππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ι΄α΄Ιͺα΄κ±", rowId: `${usedPrefix}panties`},
{title: "π | ππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄Ι΄α΄κ±", rowId: `${usedPrefix}pene`},
{title: "π | πππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄α΄Κα΄α΄ α΄α΄Κ α΄α΄ΚΙ΄α΄", rowId: `${usedPrefix}porno`},
{title: "π | πππππ2", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄α΄Κα΄α΄ α΄α΄Κ α΄α΄ΚΙ΄α΄", rowId: `${usedPrefix}porno2`},
{title: "π | ππΌππΏπππππ", description: "α΄Ι΄α΄ Ιͺα΄ α΄Ι΄α΄ Ιͺα΄α΄Ι’α΄Ι΄ xxx", rowId: `${usedPrefix}randomxxx`},
{title: "π | πππΎπππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄α΄α΄Κα΄κ±", rowId: `${usedPrefix}pechos`},
{title: "π | ππΌππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄α΄Ιͺ", rowId: `${usedPrefix}yaoi`},
{title: "π | ππΌππ2", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄α΄Ιͺ", rowId: `${usedPrefix}yaoi2`},
{title: "π | ππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄ΚΙͺ", rowId: `${usedPrefix}yuri`},
{title: "π | ππππ2", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄ΚΙͺ", rowId: `${usedPrefix}yuri2`},
{title: "π | πππΌππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Κα΄α΄Ιͺα΄α΄κ±", rowId: `${usedPrefix}trapito`},
{title: "π | πππππΌπ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Κα΄Ι΄α΄α΄Ιͺ", rowId: `${usedPrefix}hentai`},
{title: "π | ππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± α΄α΄ α΄Ιͺα΄κ±", rowId: `${usedPrefix}pies`},
{title: "π | ππππππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘Κα΄ΚΙͺ", rowId: `${usedPrefix}nsfwloli`},
{title: "π | ππππππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘α΄ΚΙ’Κ", rowId: `${usedPrefix}nsfworgy`},
{title: "π | ππππππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘κ°α΄α΄α΄", rowId: `${usedPrefix}nsfwfoot`},
{title: "π | πππππΌππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘α΄κ±κ±", rowId: `${usedPrefix}nsfwass`},
{title: "π | πππππ½πΏππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘Κα΄κ±α΄", rowId: `${usedPrefix}nsfwbdsm`},
{title: "π | πππππΎππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘α΄α΄α΄", rowId: `${usedPrefix}nsfwcum`},
{title: "π | πππππππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘α΄Κα΄", rowId: `${usedPrefix}nsfwero`},
{title: "π | ππππππππΏππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘κ°α΄α΄α΄α΄α΄", rowId: `${usedPrefix}nsfwfemdom`},
{title: "π | πππππππΌππ", description: "α΄Ι΄α΄ Ιͺα΄ Ιͺα΄α΄Ι’α΄Ι΄α΄κ± Ι΄κ±κ°α΄‘Ι’Κα΄κ±κ±", rowId: `${usedPrefix}nsfwglass`},
{title: "π οΈ | πΌππ", description: "Ι΄α΄α΄Ιͺκ°Ιͺα΄α΄ α΄α΄Κ Qα΄α΄ α΄α΄ α΄α΄κ±α΄Ι΄α΄α΄Κα΄κ±", rowId: `${usedPrefix}afk`},
{title: "π οΈ | πΌπΎππππΌπ", description: "Κα΄α΄Κ Qα΄α΄ α΄Ι΄ ΚΙͺΙ΄α΄ Κα΄ΚΙ’α΄ κ±α΄ Κα΄Ι’α΄ α΄α΄Κα΄α΄", rowId: `${usedPrefix}acortar`},
{title: "π οΈ | πΎπΌππΎ", description: "Κα΄α΄α΄Κ α΄α΄α΄Κα΄α΄Ιͺα΄Ι΄α΄κ± α΄α΄α΄α΄α΄α΄α΄Ιͺα΄α΄κ± α΄Ι΄ Κα΄ α΄α΄Κα΄α΄Κα΄α΄α΄Κα΄", rowId: `${usedPrefix}calc`},
{title: "π οΈ | πΏππ", description: "α΄ΚΙͺα΄ΙͺΙ΄α΄Κ α΄Ι΄ α΄α΄Ι΄κ±α΄α΄α΄ α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}del`},
{title: "π οΈ | πππΎππΏπ", description: "Κα΄α΄Κ α΄Ι΄ QΚ", rowId: `${usedPrefix}qrcode`},
{title: "π οΈ | πππΌπΏππππ", description: "Κα΄α΄α΄Κ α΄Ι΄ QΚ", rowId: `${usedPrefix}readmore`},
{title: "π οΈ | πππΌπππΌ", description: "Κα΄α΄α΄Κ κ±α΄α΄α΄ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄", rowId: `${usedPrefix}spamwa`},
{title: "π οΈ | πππππππππ", description: "κ°α΄α΄Ι΄α΄α΄κ± α΄α΄ α΄α΄xα΄α΄", rowId: `${usedPrefix}styletext`},
{title: "π οΈ | πππΌπΎπΎππππΌπ", description: "α΄Κ Κα΄α΄ Κα΄α΄α΄α΄Ιͺα΄Ι΄α΄ α΄Ι΄  α΄α΄α΄α΄Ιͺ α΄ Κα΄ α΄α΄Ι΄κ±α΄α΄α΄κ± Qα΄α΄ α΄α΄ΙͺQα΄α΄α΄α΄κ±", rowId: `${usedPrefix}reacionar`},
{title: "π οΈ | πππΌπΏππΎππ", description: "α΄Κα΄α΄α΄α΄ΙͺΚ α΄Ι΄ α΄α΄Ι΄κ±α΄α΄α΄", rowId: `${usedPrefix}traducir`},
{title: "π΅ | π½πΌππΌππΎπ", description: "α΄ α΄Κ α΄α΄κ± α΄Ιͺα΄α΄α΄Ι΄α΄α΄κ±", rowId: `${usedPrefix}balance`},
{title: "π΅ | πΎππΌππ", description: "Κα΄α΄Κα΄α΄α΄Κ α΄α΄α΄α΄α΄α΄κ±α΄ α΄Ιͺα΄ΚΙͺα΄", rowId: `${usedPrefix}claim`},
{title: "π΅ | πππ", description: "α΄ α΄Κ Κα΄ α΄α΄ΚΚα΄ α΄α΄ α΄Κα΄κ±Ιͺκ°Ιͺα΄α΄α΄Ιͺα΄Ι΄", rowId: `${usedPrefix}top`},
{title: "π΅ | πππππππ", description: "κ±α΄ΚΙͺΚ α΄α΄ Ι΄Ιͺα΄ α΄Κ", rowId: `${usedPrefix}levelup`},
{title: "π΅ | ππππ", description: "α΄α΄α΄κ±α΄Κα΄ α΄α΄ κ±Ι΄", rowId: `${usedPrefix}myns`},
{title: "π΅ | ππππππ", description: "α΄α΄α΄κ±α΄Κα΄ α΄α΄ α΄α΄Κκ°ΙͺΚ", rowId: `${usedPrefix}perfil`},
{title: "π΅ | ππππ", description: "α΄Κα΄Κα΄α΄α΄Κ α΄α΄Κ α΄xα΄", rowId: `${usedPrefix}work`},
{title: "π΅ | ππππΌπ", description: "α΄ΙͺΙ΄α΄Κ Κ α΄Ι΄α΄α΄Ι΄α΄Κα΄Κ α΄xα΄", rowId: `${usedPrefix}minar`},
{title: "π΅ | π½ππ", description: "α΄α΄α΄α΄Κα΄Κ α΄Ιͺα΄α΄α΄Ι΄α΄α΄κ±", rowId: `${usedPrefix}buy`},
{title: "π΅ | π½πππΌππ", description: "α΄α΄α΄α΄Κα΄Κ α΄α΄α΄α΄κ± Κα΄κ± α΄Ιͺα΄α΄α΄Ι΄α΄α΄κ± Qα΄α΄ κ±α΄ α΄α΄α΄α΄α΄", rowId: `${usedPrefix}buyall`},
{title: "π΅ | πππΌπππππ", description: "Κα΄α΄α΄Κ α΄Ι΄α΄ α΄Κα΄κ±κ°α΄Κα΄Ι΄α΄Ιͺα΄ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄", rowId: `${usedPrefix}transfer`},
{title: "π΅ | πππππππΎπΌπ", description: "Κα΄Ι’Ιͺκ±α΄Κα΄Κα΄α΄ α΄Ι΄ Κα΄ Κα΄κ±α΄ α΄α΄ α΄α΄α΄α΄κ± α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}verificar`},
{title: "π΅ | πππππ", description: "α΄ΚΙͺα΄ΙͺΙ΄α΄Κ Κα΄Ι’Ιͺκ±α΄Κα΄", rowId: `${usedPrefix}unreg`},
{title: "π½ | ππππππππ", description: "α΄α΄Ι΄α΄α΄Κ α΄α΄κ± α΄α΄α΄α΄Ιͺκ± α΄Ι΄ α΄Ι΄α΄", rowId: `${usedPrefix}emojimix`},
{title: "π½ | ππππππππ2", description: "κ±α΄Κα΄ α΄Ι΄α΄ κ±α΄ΚΙͺα΄ α΄α΄ α΄α΄α΄α΄Ιͺκ± α΄α΄α΄Ιͺκ°Ιͺα΄α΄α΄α΄κ± α΄α΄ α΄Ι΄α΄ Qα΄α΄ α΄κ±α΄α΄α΄α΄κ±", rowId: `${usedPrefix}emojimix2`},
{title: "π½ | πΌπππ", description: "Κα΄α΄Κ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄ Κα΄ Qα΄α΄ α΄κ±α΄ΚΙͺα΄ α΄κ±", rowId: `${usedPrefix}attp`},
{title: "π½ | πππ", description: "Κα΄α΄Κ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄ Κα΄ Qα΄α΄ α΄κ±α΄ΚΙͺα΄ α΄κ±", rowId: `${usedPrefix}ttp`},
{title: "π½ | ππΌπ", description: "α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄α΄ΚΙͺα΄Ιͺα΄Ι΄α΄α΄ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ Qα΄α΄ α΄α΄ΙͺQα΄α΄α΄α΄κ±", rowId: `${usedPrefix}pat`},
{title: "π½ | ππΌππ", description: "α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄Ι΄α΄α΄ α΄Ι΄α΄ Κα΄κ°α΄α΄α΄α΄α΄ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ Qα΄α΄ α΄α΄ΙͺQα΄α΄α΄α΄κ±", rowId: `${usedPrefix}slap`},
{title: "π½ | ππππ", description: "α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄Ι΄α΄α΄ α΄Ι΄ Κα΄κ±α΄ α΄ α΄ΚΙ’α΄Ιͺα΄Ι΄ Qα΄α΄ α΄α΄ΙͺQα΄α΄α΄α΄κ±", rowId: `${usedPrefix}kiss`},
{title: "π½ | πΏπΌπΏπ", description: "α΄Ι΄ α΄α΄α΄α΄ α΄Κ α΄α΄’α΄Κ", rowId: `${usedPrefix}dado`},
{title: "π½ | ππ", description: "α΄α΄α΄ΚΙͺα΄Κ α΄Ι΄ Ι΄α΄α΄ΚΚα΄ α΄α΄ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ", rowId: `${usedPrefix}wm`},
{title: "π½ | ππππΎπππππΌππππ", description: "Κα΄α΄α΄Κ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄Κκ±α΄Ι΄α΄ΚΙͺα΄’α΄α΄α΄", rowId: `${usedPrefix}stickermarker`},
{title: "π½ | ππππΎπππππππππ", description: "Κα΄α΄α΄Κ α΄Ι΄ κ±α΄Ιͺα΄α΄α΄Κ α΄α΄Κκ±α΄Ι΄α΄ΚΙͺα΄’α΄α΄α΄", rowId: `${usedPrefix}stickerfilter`},
{title: "π | ππππ2", description: "α΄α΄Ι΄α΄ α΄α΄ α΄α΄α΄Ιͺα΄κ± α΄α΄Κ Κα΄α΄", rowId: `${usedPrefix}menu2`},
{title: "π€΅ | ππππ πππππ", description: "α΄α΄Ι΄α΄ α΄α΄Κα΄ α΄Κ α΄Κα΄α΄Ιͺα΄α΄α΄ΚΙͺα΄", rowId: `${usedPrefix}ownermenu`},
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

const listMessage = {
text: ' ',
footer: `β­ββγ *${wm}* γβββ¬£
βπππππππππ
βββββββββββββββββββ
βπ *Β‘Hola!* ${username}
βββββββββββββββββββ
βπππππππππ
β°ββββββγ π  *${vs}* γβββββββ¬£

β­ββγ πππππππΌπΎπΓπ | ππππ ππππ γβββ¬£
β *PRESIONE ESTE MENSAJE PARA IR AL MENΓ.*
βββββββββ *Nota* ββββββββ
ββ«Ήβ«Ί α΄Κ α΄α΄Ι΄α΄ α΄α΄Ι΄ Ι΄α΄ α΄κ±α΄α΄ α΄α΄α΄Κα΄α΄α΄ Κα΄ κ°α΄Κα΄α΄ α΄α΄α΄α΄Ι΄α΄α΄κ±
ββ«Ήβ«Ί κ±Ιͺ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄ Ι΄α΄ κ°α΄Ι΄α΄Ιͺα΄Ι΄α΄ Ι΄α΄α΄Ιͺκ°Ιͺα΄α΄α΄α΄ α΄Κ α΄ΚΙͺα΄  Ι’Κα΄α΄Ιͺα΄κ± 
β°βββββββββββββββββββββ¬£
${author}`,
title: null,
buttonText: "βπππΈβπ»ππ",
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['menu3', 'help3', '?3']
handler.tags = ['main']
handler.command = /^(menucompleto3|menu3|menΓΊ3|memu3|memΓΊ3|\?3)$/i
handler.exp = 50
handler.fail = null
export default handler
