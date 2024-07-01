const express = require('express');
const router = express.Router();
const moment = require('moment')
var db = require('../../../config/db')



var pool = require("../../../config/pool-factory");


// Estrutura /API/Tasks


router.post('/all', async function (req, res) {


  const dados = req.body
  var data = {
    show: req.body.show,
    start: moment(req.body.start).format("YYYY-MM-DD 00:00:00"),
    end: moment(req.body.end).format("YYYY-MM-DD 23:59:59"),
    term: req.body.term
  };

 var rows = await db.getTask((data))
 res.json(rows);

})


router.post('/archive', async function (req, res) {


  const dados = req.body
  var data = {
    show: req.body.show,
    start: moment(req.body.start).format("YYYY-MM-DD 00:00:01"),
    end: moment(req.body.end).format("YYYY-MM-DD 23:59:59"),
    term: req.body.term
  };

 var rows = await db.getTaskArchive((data))
 res.json(rows);

})


router.post('/mytasks', async function (req, res) {

  const dados = req.body
  var data = {
    tecnico_id : req.user.id,
    start: moment(req.body.start).format("YYYY-MM-DD 00:00:00"),
    end: moment(req.body.end).format("YYYY-MM-DD 23:59:59"),
    term: req.body.term
  };

 var rows = await db.getMyTask(data)
 res.json(rows);

})

router.get('/patrimonio/:task_id', async function (req, res) {
  

  const task_id = req.params.task_id
  let rows = await pool.query(`SELECT * FROM task_patrimonio WHERE task_id = ?`, [task_id]);
  // if (rows.length > 0) return   res.json(rows);
  // return res.json({status: "Sorry! Not found."});

  if (rows.length > 0) {

    const tasks = [] 

    for (const row of rows) {
      var services = await db.getPatrimonioServicebyTask(row.task_id, row.registration)
      row.services = services
      tasks.push(row)
    }

  //return tasks

  
  res.json({
    "data": tasks
  });

  }else{

    
   res.json({
    "data": rows
  });


  }



})

router.get('/history/:task_id', async function (req, res) {

  const task_id = req.params.task_id
  var data = await db.getTaskHistory(task_id)
  res.json(data);

})

router.get('/notes/:task_id', async function (req, res) {

  const task_id = req.params.task_id
  var data = await db.getNotesHistory(task_id)
  res.json(data);

})

router.get('/about', function (req, res) {
  res.send('About this Api');

})

module.exports = router;