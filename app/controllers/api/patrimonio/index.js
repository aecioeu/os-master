const express = require('express');
const router = express.Router();
var db = require('../../../config/db')
var moment = require('moment'); // require


var pool = require("../../../config/pool-factory");


// Estrutura /API/ITENS

router.get('/search', async function (req, res) {

    const term = req.query.term  ? req.query.term : ' '

    let sv = []

    let rows = await pool.query("SELECT * FROM patrimonio WHERE registration LIKE ? OR name LIKE ? LIMIT 10", [`%${term}%`, `%${term}%`]);  
  
    if (rows.length > 0) {
      for (const row of rows) {

        let services  = await pool.query("SELECT * FROM task_service WHERE registration = ?", [row.registration]);
        row.services = services
        sv.push(row)
      }
     
      return   res.json(sv);
    }else return res.json({status: "Sorry! Not found."});

})



router.post('/delete', async function (req, res) {

  const dados = req.body
  console.log(dados.id)

  var data = {
    id : dados.id,
    task_id : dados.task_id
  }

  var patrimonio = await db.getTaskPatrimonio(dados.id)

  console.log(patrimonio)

  if(patrimonio){
    db.insertHistory("task", `Patrimônio Apagado da Tarefa` , `${req.user.name} apagou o patrimonio nº ${patrimonio[0].registration} - ${patrimonio[0].name} da tarefa.`, req.user.id, dados.task_id)
  }

  if (dados.id) {
    pool.query("DELETE FROM task_patrimonio WHERE id = ? AND task_id = ?", [
     dados.id,
     dados.task_id,
    ]);
  }

  

  res.json({
    status: "Deletado",
  });


})


router.get('/about', function (req, res) {
  res.send('About this Api');

})

module.exports = router;