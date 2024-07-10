const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728423534";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,728xxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,728xxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "728223534,728xxxxxx ";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_13_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNES2VVZnk4RTFETGZWSlA1NlZFblU1c2tUQzdSakszcGxlV0V5OGx0aVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdDZFphZ0pXUzBtTXhyNmRUaEhLZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDE0YTVmODItYTg3Ni00NmI4LWIxOGMtZGNkMWQ3Y2ExMzEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDIxNSxcbiAgICAgIDg2LFxuICAgICAgMTAwLFxuICAgICAgMTM5LFxuICAgICAgMTAzLFxuICAgICAgMjUzLFxuICAgICAgMTc4LFxuICAgICAgMjI2LFxuICAgICAgODgsXG4gICAgICAxMTMsXG4gICAgICA2NCxcbiAgICAgIDIyOSxcbiAgICAgIDcyLFxuICAgICAgMjYsXG4gICAgICAyNDYsXG4gICAgICAxMzMsXG4gICAgICA4OSxcbiAgICAgIDE1NixcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDkyLFxuICAgICAgMTE1LFxuICAgICAgMTUyLFxuICAgICAgODMsXG4gICAgICAyMjgsXG4gICAgICAxODcsXG4gICAgICAxMjAsXG4gICAgICAyMjYsXG4gICAgICAyMDksXG4gICAgICAzNixcbiAgICAgIDE1MyxcbiAgICAgIDIzNCxcbiAgICAgIDE2OSxcbiAgICAgIDc4LFxuICAgICAgMjI4LFxuICAgICAgMTc2LFxuICAgICAgMjAsXG4gICAgICAxMDEsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjdYQ1Q3UERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyODQyMzUzNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjMwMTA3MTYwMTc4ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQTXFiNEhFSzNBdDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic0NSSVhBU01NaENPOXM3M0l0eTFwVkh1VXZzcG5RWlhERjVMYm14ak5CWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5cVdzbExEMXRnM0twOEtqL05FQmxZTTQ0Qk43RDQzdXRPYzNpUHZRS1JPSFI1N0hseFRtOERXLzhzbDYrWjFJeWpBYW5GOURsR1ZMN29LSis5ZWlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvSlBmT3FVenAzY2lGMlR5NGYxUW53SklCS1dZVENDMkR1dGRkN1lnSndPTm9RK3lkejQwZWt5U1QyelhwY3NORFEvaWJ5UFozQk8yTlNKSzJYU0dpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjg0MjM1MzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NzQwMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVSZS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
