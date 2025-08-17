const fs = require('fs');
const config = require('../config');
const { cmd } = require('../command');
const { sleep } = require('../lib/functions');

cmd({
    pattern: 'savecontact',
    alias: ["vcf", "scontact", "savecontacts"],
    desc: 'gc vcard',
    category: 'tools',
    filename: __filename
}, async (conn, mek, m, { from, isGroup, isOwner, groupMetadata, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command is for *groups only*.");
        if (!isOwner) return reply("🛑 *_Only the bot owner can use this command_*");

        const { participants, subject } = groupMetadata;
        let vcard = '';
        let index = 0;

        for (let participant of participants) {
            let num = participant.id.split('@')[0];
            vcard += `BEGIN:VCARD\n`;
            vcard += `VERSION:3.0\n`;
            vcard += `FN:𝚌𝚑𝚊𝚖𝚊𝚖𝚍-${index}\n`;
            vcard += `TEL;type=CELL;type=VOICE;waid=${num}:+${num}\n`;
            vcard += `END:VCARD\n`;
            index++;
        }

        const filePath = './contacts.vcf';
        reply(`📁 Saving *${participants.length}* participants as contacts...`);

        fs.writeFileSync(filePath, vcard.trim());
        await sleep(2000);

        await conn.sendMessage(from, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/vcard',
            fileName: 'chamindu.vcf',
            caption: `✅ *Saved Contacts Successfully!*\n👥 Group: *${subject}*\n📇 Contacts: *${participants.length}*\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚌𝚑𝚊𝚖𝚊 𝚖𝚍`
        }, { quoted: mek });

        fs.unlinkSync(filePath); // Remove after sending
    } catch (err) {
        console.error(err);
        reply(`❌ Error: ${err.message}`);
    }
});