

const { delay, rand, makeid } = require("./functions");
const fs = require("fs");


const sendMsg = async (payload, client) => {

    //payload.from = payload.from.toString().replace(/\D/g, "")
    await client.presenceSubscribe(payload.from);
    await delay(rand(500));
  
    if (payload.type == "audio")
      await client.sendPresenceUpdate("recording", payload.from);
    else await client.sendPresenceUpdate("composing", payload.from);
  
    await delay(rand(2000));
    await client.sendPresenceUpdate("paused", payload.from);
  
    switch (payload.type) {
      case "text":
        await client.sendMessage(payload.from, { text: payload.message });
        break;
  
      case "image":
        await client.sendMessage(payload.from, {
          image: { stream: fs.createReadStream(payload.config.file) },
          caption: payload.message,
        });
        break;

        case "video":

          const base64 = fs.readFileSync(payload.config.jpegThumbnail, "base64");
          const buffer = Buffer.from(base64, "base64");

          await client.sendMessage(payload.from, {
            video: fs.readFileSync(payload.config.file), 
            caption: payload.message,
            jpegThumbnail: buffer
           // gifPlayback: true
          });
        break;
  
      case "pdf":
     
        await client.sendMessage(payload.from,  {
          document: { stream: fs.createReadStream(payload.config.file) },
          mimetype: "application/pdf",
          fileName: payload.config.filename + ".pdf",
        });
        break;

        case "audio":
          await client.sendMessage(payload.from, {
            audio: { url: payload.config.file },
            //mimetype: "audio/ogg",
            ptt: true,
          });
          break;
  
      case "button2":
        var templateButtons = [];
        
        payload.buttons.forEach(function (button, i) {
          templateButtons.push({
            index: i + 1,
            quickReplyButton: {
              displayText: button,
              id: i + 1,
            },
          });
        });
  
        var templateMessage = {
          text: payload.message,
          footer: payload.footer,
          templateButtons: templateButtons,
        };
  
        await client.sendMessage(payload.from, templateMessage);

        break;
  
      case "button":
        var templateButtons = [];
  
        payload.config.buttons.forEach(function (button, i) {
          if (button.type == "link") {
            templateButtons.push({
              index: i + 1,
              urlButton: {
                displayText: button.text,
                url: button.action,
              },
            });
          }
          if (button.type == "call") {
            templateButtons.push({
              index: i + 1,
              callButton: {
                displayText: button.text,
                phoneNumber: button.action,
              },
            });
          }
          if (button.type == "text") {
            templateButtons.push({
              index: i + 1,
              quickReplyButton: {
                displayText: button.text,
                id: button.action,
              },
            });
          }
        });
  
        var templateMessage = {
          text: payload.message,
          footer: payload.footer,
          templateButtons: templateButtons,
        };
  
        await client.sendMessage(payload.from, templateMessage);
        break;
    }
  };

  
  module.exports = {
    sendMsg
   };