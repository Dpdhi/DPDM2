let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `γ ππππππ πΌππππ DPD γ`
const sections = [
   {
	title: ` ππππππ πΌπ`,
	rows: [
	{title: `π°ππ ππππππ`, rowId: ".sc", description: "πΉπππππ π»πππ πΊππππ ππππ"},
	{title: `πΌπ’ πππππππ`, rowId: ".ytowner", description: "πΉπππππ π»πππ πππππππππ"},
	{title: `πΌπ’ πΈππππππππ`, rowId: ".igowner", description: "πΉπππππ π»πππ π΅πππππ  πππ"},
	{title: `πΆππππ πΈπππ`, rowId: ".gc3", description: "πππππ πΌπππππππππ πΈπππ πππππππ π³πππ πΉππππ"},
]
  },{
	title: ` πΆππππ π±ππ πΎπππ`,
	rows: [
	    	{title: `πΆππππ π±ππ π·`, rowId: ".gc1", description: "πΉπππππ π»πππ πΉπππ πππ"},
	{title: `πΆππππ π±ππ πΈ`, rowId: ".gc2", description: "πΉπππππ π»πππ π±πππ πππππ!"},
	]
  },{
	title: ` SUPPORT ME βββββββΒ·β’`,
	rows: [
	    {title: "πΉ β’ Donasi", rowId: ".donasi"},
	{title: "π β’ Sewa", rowId: ".sewa"},
	{title: "π β’ Buy Premium", rowId: ".premium"},
	]
  },
]

//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./image/3SBot.jpg')}}
	}

const listMessage = {
  text: ` `,
  footer: teks,
  title: 'α΄ΚΙͺα΄α΄ Κα΄α΄α΄α΄Ι΄ Ι΄α΄α΄‘!',
  buttonText: "α΄ΚΙͺα΄α΄",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fcon, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['sosialmedia']
handler.tags = ['info']
handler.command = /^(sosialmedia)/i
handler.register = false

module.exports = handler