
var pool = require("../config/pool-factory");


const getTask = async (data) => {

  if(data.show == 'false') data.show = 'new'

  let rows = await pool.query(`Select
  *,
  tasks.created as created_task
  From tasks 
  INNER JOIN servidores ON servidores.id = tasks.id_servidor 
  WHERE status = ? AND (task_id LIKE ? OR servidores.name LIKE ?) AND (tasks.created BETWEEN ? AND ?) ORDER BY tasks.priority ASC, tasks.created DESC`, 
  [data.show, `%${data.term}%`, `%${data.term}%`, data.start, data.end]);
 
  if (rows.length > 0) {

    const tasks = [] 

    for (const row of rows) {
      var tecnico = await getTasktecnicos(row.task_id)
      row.tecnico = tecnico
      tasks.push(row)
    }

    console.log(tasks)
  
  return tasks

  }else return false;
 
 /* if (rows.length > 0) return   res.json(rows);
  return res.json({status: "Sorry! Not found."});*/

};


const getTaskArchive222 = async (data) => {

  if(data.show == 'false') data.show = 'new'

  let rows = await pool.query(`Select
  *,
  tasks.created as created_task
  From
  tasks Inner Join
  servidores On servidores.id = tasks.id_servidor WHERE status = ? AND task_id LIKE ? AND (tasks.created BETWEEN ? AND ?) ORDER BY tasks.priority ASC, tasks.created DESC`, 
  [data.show, `%${data.term}%`, data.start, data.end]);
 
  if (rows.length > 0) {

    const tasks = [] 

    for (const row of rows) {
      var tecnico = await getTasktecnicos(row.task_id)
      row.tecnico = tecnico
      tasks.push(row)
    }
  
  return tasks

  }else return false;
 
 /* if (rows.length > 0) return   res.json(rows);
  return res.json({status: "Sorry! Not found."});*/

};


const getTaskArchive = async (data) => {

  console.log(data)
 


 
let rows = await pool.query(`Select
  *,
  tasks.updated as updated_task
  From
  tasks Inner Join
  servidores On servidores.id = tasks.id_servidor WHERE status = ? AND (task_id LIKE ? OR servidores.name LIKE ?) AND tasks.updated BETWEEN ? AND ? ORDER BY  tasks.updated DESC`, 
  ['archive', `%${data.term}%`,`%${data.term}%`, data.start, data.end]);
   if (rows.length > 0) {

    const tasks = [] 

    for (const row of rows) {
      var tecnico = await getTasktecnicos(row.task_id)
      row.tecnico = tecnico
      tasks.push(row)
    }

   const data = tasks


   // this gives an object with dates as keys
   const groups = data.reduce((groups, game) => {
   
     const date = game.updated_task.toLocaleDateString();
     if (!groups[date]) {
       groups[date] = [];
     }
     groups[date].push(game);
     return groups;
   }, {});
   
   // Edit: to add it in the array format instead
   const groupArrays = Object.keys(groups).map((date) => {
     return {
       date,
       tasks: groups[date]
     };
   });
   


   return groupArrays;

   }else{
     return false;
   }
  

 };


const getMyTask = async (data) => {


/*SELECT * FROM TB_ContratoCotista
INNER JOIN TB_Contrato ON TB_Contrato.id_contrato = TB_ContratoCotista.id_contrato
INNER JOIN TB_Cotista ON TB_Cotista = TB_ContratoCotista.id_cotista */

const tasks = [] 


  let rows = await pool.query(`SELECT  *,
  tasks.created as created_task From task_tecnico
  INNER JOIN tasks ON tasks.task_id = task_tecnico.task_id
  INNER JOIN servidores ON servidores.id = tasks.id_servidor
  WHERE task_tecnico.id_tecnico = ?
  AND tasks.status = ?
  AND tasks.task_id LIKE ? 
  AND (tasks.created BETWEEN ? AND ?) 
  ORDER BY tasks.priority ASC, tasks.created DESC`, 
  [data.tecnico_id, `pendding`,`%${data.term}%`, data.start, data.end]);
 
  if (rows.length > 0) {

    for (const row of rows) {
      var tecnico = await getTasktecnicos(row.task_id)
      row.tecnico = tecnico
      tasks.push(row)
    }
   
  }

  //pesquisar por item dentro da task
  if(data.term.length > 4){

  let itensOnTask = await pool.query(`SELECT  *
  FROM task_patrimonio
  WHERE task_patrimonio.registration LIKE ?
  ORDER BY created DESC`, 
  [`%${data.term}%`]);

  if(itensOnTask.length > 0){
    //getTaskData
    for (const iten of itensOnTask) {
      console.log(iten.task_id)

      var task = await getTaskData(iten.task_id)
      if(task.length > 0){
      var tecnico = await getTasktecnicos(iten.task_id)
      task[0].tecnico = tecnico
      task[0].info = 'patrimonio'
    
      tasks.push(task[0])
    }
    }
    
  }
}

  if (tasks.length > 0) return tasks
  return false
   
 
 /* if (rows.length > 0) return   res.json(rows);
  return res.json({status: "Sorry! Not found."});*/

};

const getTaskCount = async () => {

  let rows = await pool.query(`Select
    tasks.status As status,
    Count(tasks.status) As count
From
    tasks
Group By
    tasks.status`);

  if (rows.length > 0) return rows;
  return false;

};

const getPatrimonioServicebyTask = async (task_id, registration) => {

  let rows = await pool.query(`Select
  *,
  created AS service_created
  From task_service
  tasks WHERE task_id = ? AND registration = ? ORDER BY created DESC`, [task_id, registration]);

  if (rows.length > 0) return rows;
  return false;

};


const getTaskData = async (task_id) => {

    let rows = await pool.query(`Select
    *,
    tasks.created as created_task
    From
    tasks Inner Join
    servidores On servidores.id = tasks.id_servidor WHERE task_id = ?`, [task_id]);

    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const getCompleteTask = async (start, end) => {
    let rows = await pool.query(`Select
    *,
    tasks.created as created_task,
    tasks.updated as updated_task
    From
    tasks Inner Join
    servidores On servidores.id = tasks.id_servidor WHERE tasks.status = 'complete' AND (tasks.last_notification BETWEEN ? AND ?) `, [start, end]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const updateTaskDate = async (task_id, update) => {

    console.log(update)

    await pool.query(
      "UPDATE tasks SET last_notification = ?  WHERE task_id = ?",
      [update, task_id]
    );

    };
  

  const getTaskPatrimonio = async (id) => {
    let rows = await pool.query(`SELECT * FROM task_patrimonio WHERE id = ?`, [id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const getTaskPatrimoniobyIdTask = async (task_id) => {
    let rows = await pool.query(`SELECT * FROM task_patrimonio WHERE task_id = ?`, [task_id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const getService = async (id) => {
    let rows = await pool.query(`SELECT * FROM task_service WHERE id = ?`, [id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };



  const getTaskHistory = async (task_id) => {

    let rows = await pool.query(`SELECT * FROM history WHERE task_id = ? ORDER BY created DESC`, [task_id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const getTasktecnicos = async (task_id) => {

    let rows = await pool.query(`SELECT * FROM task_tecnico WHERE task_id = ? ORDER BY created DESC`, [task_id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  const getTecnico = async (task_id) => {

    let rows = await pool.query(`SELECT * FROM task_tecnico WHERE task_id = ? ORDER BY created DESC`, [task_id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };




  
  const getTaskSign = async (task_id) => {

    let rows = await pool.query(`SELECT * FROM task_sign WHERE task_id = ? ORDER BY created DESC LIMIT 0,1`, [task_id]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };

  


  const getNotesHistory = async (task_id) => {
 
   let rows = await pool.query(`Select * , task_notes.created as note_created
    From
    task_notes Inner Join
    tecnicos On tecnicos.id = task_notes.id_tecnicos WHERE task_notes.task_id = ? ORDER BY task_notes.created DESC`, [task_id]);
    if (rows.length > 0) {

    const data = rows

    console.log
    // this gives an object with dates as keys
    const groups = data.reduce((groups, game) => {
    
      const date = game.note_created.toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});
    
    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        notes: groups[date]
      };
    });
    


    return groupArrays;

    }else{
      return false;
    }
   


   
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };
  

const getServidor = async (id_servidor) => {

    let rows = await pool.query("SELECT * FROM servidores WHERE id = ?", [id_servidor]);
    if (rows.length > 0) return rows;
    return false;
   
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };


  const getActiveTecnicos = async () => {

    let rows = await pool.query("SELECT * FROM tecnicos WHERE active = '1'");
    //if (rows.length > 0) return rows;
    
    var tecnicos = []
    
    if(rows.length > 0){
      //getTaskData

      rows.forEach(function(item) {
      
        tecnicos.push({
          value : item.name,
          uid: item.id,
          image: `/img/profile/${item.profile}`
        })
    

      
       // do something with `item`
      });
      
      return tecnicos
      
    }else return false;
   


    
    
   /* if (rows.length > 0) return   res.json(rows);
    return res.json({status: "Sorry! Not found."});*/
 
  };



  const insertHistory = async (type, title, description, id_tecnicos, task_id) => {

    var data = {
      task_id: task_id,
      id_tecnicos:id_tecnicos,
      type: type, 
      title: title, 
      description : description};
  
      await pool.query("INSERT INTO history SET ?", data, function (err, result) {
        if(err){
          console.log(err)
        }
  
      });

  }

  

  module.exports = {
    getActiveTecnicos,
  getTaskSign,
  getService,
  getPatrimonioServicebyTask,
  getMyTask,
  getTaskCount,
  getTasktecnicos,
  getTaskArchive,
  getTask,
  updateTaskDate, 
  getNotesHistory,
  getTecnico,
  getCompleteTask,
  getTaskPatrimonio,
  getTaskPatrimoniobyIdTask,
  getTaskData,
  getTaskHistory,
  getServidor,
  insertHistory
  
  };