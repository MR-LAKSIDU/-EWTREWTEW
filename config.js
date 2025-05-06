const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VtpkXaxZ#uv56K3kBs7cRAqq6FAq7kPFsGEL7cshVu-To71K5laY",
FILENAME: process.env.FILENAME || "QUEEN-ESHU-MD-V1",
CHANNEL_NAME: process.env.CHANNEL_NAME || "💗 QUEEN-ESHU-MD-V1 💗",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363303242803015@newsletter",
TITLE: process.env.TITLE || "QUEEN-ESHU-MD-V1",
BODY: process.env.BODY || "CREATED BY ESHAN TECH SL🛡️",
WORK_TYPE: process.env.WORK_TYPE || "only_group",
WEBURL: process.env.WEBURL|| "https://github.com/CYBER-ESHU/ESHU-MD",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/xmhW7DJ/6252.png"     
};
