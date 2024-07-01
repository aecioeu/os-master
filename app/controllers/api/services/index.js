const express = require('express');
const router = express.Router();
var db = require('../../../config/db')
var moment = require('moment'); // require


var pool = require("../../../config/pool-factory");


// Estrutura /API/SERVICES

router.get('/search', async function (req, res) {

    const term = req.query.term  ? req.query.term : ' '

    let rows = await pool.query("SELECT * FROM list_service WHERE name LIKE ? LIMIT 10", [`%${term}%`]);
      if (rows.length > 0) return   res.json(rows);
      return res.json({status: "Sorry! Not found."});

})



router.post('/delete', async function (req, res) {

  const dados = req.body
  console.log(dados.id)

  var data = {
    id : dados.id,
    task_id : dados.task_id
  }

  var service = await db.getService(dados.id)

  if(service){
    db.insertHistory("task", `Serviço Apagado da Tarefa` , `${req.user.name} apagou o serviço ${service[0].service} da tarefa.`, req.user.id, dados.task_id)
  }

  if (dados.id) {
    pool.query("DELETE FROM task_service WHERE id = ? AND task_id = ?", [
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