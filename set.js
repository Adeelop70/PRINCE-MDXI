
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUTZOiSBD9L3XVGAER0IiOWEBBWxERbJGNOZRQQLV8VpUoTvjfJ7C7p+ewO9vLqajKyHz58r38AYoSU7RELZj8ABXBDWSoO7K2QmACtHMcIwL6IIIMggnYW1bQJmrTs04crw3M6dqbsfSipDvj4prR7nScieiGxzYfPoF7H1TnY4bDPyQsbdH2pcXgddy8Uq6J0x56FaE83b+Iw+tu3Wx9Hst4PIKm8wTuXUaICS6SWZWiHBGYLVG7gZh8DT5cT/3qzFM4Lndsc147tzpwXlJDUKinBDsxr2+j67MpGqfd1+CvPUKlleucBzvKhbwnDELoivVta2zz5HQsVT7cRsagFq7v8ClOChQtIlQwzNov804NvblyvmB5N+i6iy0LueVcyCTh0sZBWeiN4K1M1dW94ovAC4Mdg8oRmL62/AjSIJSH4sjZ1JHQvIha67vSvilPEcpnvwPfkA+tnP4P7+VsQLl1uwtNS5GHvOtZ6crz7abUWClskjpo2qOvWu3SVL8I3/URmx+caXabMWMdZ1SGvqa9SOWFEQ0nbc8PKyc/zV/oJ3zIzuRPKJ05tLVLuk3ne2Iv7FznhDTY7BSk2i9csAxUoabStAn3NcbHZloHzl5ahGR50/1jPXiVlEpGKxNnFdsNjIi6h1lvoyVPj45OqF1EYMLf+4CgBFNGIMNl0d0pUh/AqHFRSBB7sAuqhteuCR+woGp3WU6y08bVbtzgFhytsVgcE6KxHQeTTZ48gT6oSBkiSlE0x5SVpLUQpTBBFEz+/t4HBbqyt7l11YZ8H8SYULYrzlVWwuhjqB+PMAzLc8Hctgj17oAImHCf14gxXCS0o/FcQBKmuEF6ChkFkxhmFP1qEBEUgQkjZ/TLtHoZdbwPx3v7MAos0Af5Yx44AhMwFoZDWRIknleUiST9Rb9durSwqr4ViIE+yB5hwkiQFIFTJFHgRgLXRXYP918Iu4QRYhBnFEyAbpmcGJ2MmR3vxdAyTfWSqHqigs+OPpTxRv0mbl/Pl/n52hara6rebkHil7ViecqwqUhZB1FK7BWV/Yv69A9JwATEfLK6hSPSuoue52FTk21aXXTRqh1uwE+NjamlUt1zeZVz5xr/nHmjMB+K9tRAFE+b5OpxAVoWs2NjXHlz39sfZ+m0k1EfRKjBIfq92HX1KmVxOF6ut0Y9X/QGe2sTwEFyOSg6I840tauxblV7lmbxbPT82pOOy1FWbma7VbOH49OgimKtqCzFXzjG9EYFR4Ta5U2zD89k77sKP+TUzar7jTF6WL+A3QT/e3ZvwDuJcff+bznel8m/GFLzhkopU02mYdUqB8dShIMhLZvpbLCWJSgtc/8Ab1i2eUUF9/v3PqgyyOKS5N2uLyJS4gj0ASnPnWYXRVz+oZiuLhazd7dmkDL10wcezhFlMK/AhJdHgiwIgiK/RW1IWc0hTTvl7E8jrdN0q1aVyyD7cBVQu+/5lIL7T6+K0oNwBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
