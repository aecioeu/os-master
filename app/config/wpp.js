
const {
    default: makeWAclientet,
    delay,
    MessageType,
    MessageOptions,
    Mimetype,
    useSingleFileAuthState,
    DisconnectReason,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    processSenderKeyMessage,
  } = require("@adiwajshing/baileys");

  const { state, saveState } = useSingleFileAuthState(
    "./app/sessions/auth_info_multi.json"
  );


  
  var fs = require('fs');

  if (!fs.existsSync('./app/sessions')){
      fs.mkdirSync('./app/sessions', { recursive: true });
      
  }

  const startSock = async() => {





    const client = makeWAclientet({
      //logger: P({ level: 'debug' }),
      
      auth: state,
      printQRInTerminal: true,
      version: [2, 2204, 13], 
    });
  
  
    //await start(client);
    
  
    client.ev.on("connection.update", (update) => {
      const { connection } = update;
      if (connection === "close") {
        console.log("closed connection =/");
        //startSock()
       
        process.exit();
  

  
      } else if (connection === "open") {
        console.log("opened connection");
      }
    });
  
    //const botNumber = client.user.id.includes(':') ? client.user.id.split(':')[0] + '@s.whatsapp.net' : client.user.id
  
    client.ev.on("messages.upsert", async (m) => {
      const msg = m.messages[0];
      if (
        !msg.key.fromMe &&
        m.type === "notify" &&
        m.messages[0].key.remoteJid !== "status@broadcast"
      ) {
        console.log("Enviando mensagem para: ", m.messages[0].key.remoteJid);
       // await processMessage(msg, client);
      }
    });
  
  
  
    //client.ev.on("presence.update", (m) => console.log(m));
    //client.ev.on("chats.update", (m) => console.log(m));
    //client.ev.on("contacts.update", (m) => console.log(m));
  
    client.ev.on("creds.update", saveState);

  

  module.exports = client;

 
}
startSock()