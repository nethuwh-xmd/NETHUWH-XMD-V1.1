const { cmd } = require('../command');
const config = require('../config');


cmd({
    pattern: "owner",
    react: "👑",
    desc: "Display full owner and team info with image",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const caption = `
╭───[ 👑 *OWNER INFO* ]───◆
│ 👤 Name      : 𝚈.𝙼 𝚌𝚑𝚊𝚖𝚒𝚗𝚍𝚞 𝚁𝙰𝙽𝚂𝙸𝙺𝙰
│ 📞 Number    : wa.me/94773024361
│ 📧 Email     : ransikachamindu43@gmail.com
│ 💻 Skills    : WhatsApp Bots, Web Dev, Automation
│ 🌐 Languages : Sinhala 🇱🇰 / English 🌍
╰────────────────────────────◆

╭───[ 🌐 *ONLINE LINKS* ]───◆
│ 🌍 Website 1  : https://chama-md4.onrender.com
│ 🌐 Website 2  : https://chama-md-web-new1.onrender.com
│ 📸 Instagram  : https://instagram.com/chma_md
│ 🎥 YouTube    : https://youtube.com/@chamamd
│ 💬 Telegram   : https://t.me/CHMA_SUPPORT
│ 📣 WhatsApp   : https://whatsapp.com/channel/0029VaLZy4hFKA2VtXzFfM
│ 🎵 TikTok     : https://tiktok.com/@chma_md
│ 💻 GitHub     : https://github.com/CHMA2009
╰────────────────────────────◆

╭───[ 👥 *CHMA-MD TEAM* ]───◆
│ 👑 Owner      : 𝚈.𝙼 𝚌𝚑𝚊𝚖𝚒𝚗𝚍𝚞 𝚁𝙰𝙽𝚂𝙸𝙺𝙰
│   • Number    : wa.me/94773024361
│   • Skills    : WhatsApp Bots, Web Dev
│
│ 👨‍💻 Dev 1     : Name One
│   • Number    : wa.me/94XXXXXXXXX
│   • Skills    : Node.js, UI Design
│
│ 🧑‍💻 Dev 2     : Name Two
│   • Number    : wa.me/94XXXXXXXXX
│   • Skills    : Python, APIs
│
│ 👨‍💻 Dev 3     : Name Three
│   • Number    : wa.me/94XXXXXXXXX
│   • Skills    : MongoDB, Deployment
│
│ 🆘 Support    : CHMA Support
│   • Telegram  : https://t.me/CHMA_SUPPORT
╰────────────────────────────◆

🤖 *Bot:* CHMA-MD Official Bot  
📜 *Try Commands:* .menu | .support | .groupinfo
        `;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/sk415z.jpg' },
            caption: caption
        });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: `❌ Error: ${error.message}` });
    }
});

