const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
*_Pair Code Connected*
*_Made With love by Dullah-md♻️_*
❖⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷❖
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃ FOR ALL DULLAH_MD BOT
┃ _Thanks for your support._
╰──━━━━━━◇✣❖◇━━━━━━━───❂
  ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃❖  『••• ⬡𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽⬡ •••』
┃⬡ *Ytube:* _youtube.com/@herokuplatform_
┃⬡ *wa-me:* _https://wa.me/255716945971_
┃⬡ *wa-me:* _https://wa.me/255756715126_
┃⬡ *t-me:* _https://t.me/Dullahmd_
┃
┃⬡MY bot Repos⬡
┃
┃⬡ *LUCKY bot:* _https://github.com/abdallahsalimjuma/DULLAH_MD_
┃⬡ *My Github:* _https://github.com/abdallahsalimjuma_
┃
┃⬡Support channels⬡
┃
┃⬡ *WATSAPP:* _https://whatsapp.com/channel/GufiUEQ7Jj1D2kszcZqOgx_
┃⬡ *TELEGRAM:* _https://t.me/+u3zlb5y6OfxhOTdk_
┃
┃⬡ *©Copyright* _DULLAH-MD|CRAZYBOT
╰───━━━━━━◇✣❖◇━━━━━━━───❂
▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
✣➻⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷➻✣

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
