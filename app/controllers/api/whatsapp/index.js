const express = require('express');
const router = express.Router();
const moment = require('moment')
var request = require('request');
require('dotenv').config()
var db = require('../../../config/db')

var pool = require("../../../config/pool-factory");
const { json } = require('body-parser');

// Estrutura /API/Tasks

//whatsapp
//var client = require("../../../config/wpp");
//const { sendMsg }  = require('../../../config/senderHelper')




router.post('/check', async function (req, res) {

  const body = req.body
  const number = body.number.toString().replace(/\D/g, "")

  console.log(number)

  
  var options = {
    'method': 'POST',
    'url': process.env.EVO + '/chat/whatsappNumbers/' + process.env.INSTANCE,
    'headers': {
      'Content-Type': 'application/json',
      'apikey': 'TYHDTSFH344D4FD5936544120E713976'
    },
    body: JSON.stringify({
      "numbers": [
        `55${number}`
      ]
    })
  };
  request(options, function (error, r) {
    try {
      if (error) throw error;  
      const response = JSON.parse(r.body)
      console.log(response[0]);
      return res.status(200).json(response[0]);

    } catch (error) {
      console.error('Ocorreu um erro:', error.message);
    }
  });



  /*

 const [result] = await client.onWhatsApp("55" + number);

  if (typeof result !== 'undefined') {
   console.log(result);

   return res.status(200).json({
    status: result,
    message: "Numero tem Whatsapp",
  });

 }else{
  console.log('algum erro ocorreu ao buscar 55' + number)
  console.log(result)
  return res.status(200).json({
    status: {
      exists : false
    },
    message: "Não existe",
  });
 }*/

})




router.post("/assing-message", async function (req, res, next) {

  const body = req.body
  console.log(body)

     /* await sendMsg(
              {
              type: body.type,
              message: body.message,
              from: body.from,
              footer: (body.footer) ? body.footer : '',
              buttons : body.buttons
              },
              client
          );*/

          
  return res.status(200).json({
    status: false,
    message: "404 - Não existe",
  });

})

router.post("/send", async function (req, res, next) {

    const body = req.body
    console.log(body)

       const msg =  await sendMsg(
                {
                type: body.type,
                message: body.message,
                from: body.from
                },
                client
            );

  

    return res.status(200).json({
      status: false,
      message: "404 - Não existe",
    });

  })

module.exports = router;