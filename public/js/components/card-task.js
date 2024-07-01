

function priority(priority) {

  var text = ""
  if (priority == "1") {
    text = ["danger", "Alta"];
  } else if (priority == "2") {
    text = ["success", "Normal"];
  } else {
    text = ["primary", "Baixa"];
  }
  var tpl = `<div class="badge bg-${text[0]} float-end">Prioridade ${text[1]}</div>`;
  return tpl;
}

function tecnicos(tecnicos) {
  var tpl = "";

  if (tecnicos != false) {
    tpl = `<hr class="mt-2 mb-2"><span class="fs-12 mt-2 mb-1 bold text-dark">${tecnicos.length > 1 ? `Técnicos:` : `Técnico:`
      } </span>`;
    tecnicos.forEach(function (tecnico, index) {
      tpl += `<span class="badge badge-soft-secondary fs-13 ml-1">${tecnico.name}</span>`;
    });
  }

  return tpl;
}

function tplte(row, time) {
  return `<div class="col-xl-4 col-lg-6">
      <div class="card card-${row.priority}" style="animation: f ease ${time}s;">
          <a href="/tasks/${row.status == "archive" && row.type == "in"
      ? `takeaway/${row.task_id}`
      : `view/${row.task_id}`
    }" >
          <div class="card-body">
              
           
          
              <p class="text-success text-uppercase  mb-2"><i class="uil uil-map-pin-alt text-dark"></i><span class="badge badge-soft-primary" style="margin-left:5px;">${row.location
    }</span></p>
              <h5 class="mt-1 mb-1"><span class="text-dark fs-17 dots">${row.registration
    } - ${row.name}</span></h5>
              <span class="badge badge-soft-secondary mt-1 dots">${row.role
    }</span> </h5>
              <p class="text-muted mb-1 mt-2  ">${row.description}</p>
               
              ${tecnicos(row.tecnico)}
               
           
          </div>
          <div class="card-body border-top">
              <div class="row align-items-center">
                  <div class="col-12">
                  
                      <ul class="list-inline mb-0">
                      <li class="list-inline-item pe-2">
                              <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Comments">
                                  <i class="uil uil-clipboard-alt"></i> #${row.task_id} 
                              </span>
                          </li>
                          <li class="list-inline-item ">
                              <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Due date">
                                  <i class="uil uil-calender me-1"></i> ${moment(
      row.created_task
    ).fromNow()}
                              </span>
                          </li>
                          <li style="display: contents;">
                          ${priority(row.priority)} 
                          </li>
                         </ul>
                        
                  </div>
               
                  
              </div>
          </div>
          </a>
      </div>
      <!-- end card -->
  </div>`;
}

function showTasks(data) {


  
  if (data) {
    var tpl = "";
    data.forEach(function (row, index) {
      tpl += tplte(row, ((index*200)/1000));
    });

    $(".tarefas").empty().append(tpl);
  } else {
    $(".tarefas").empty().append(`
              
              <div class="col-12 text-center">
               <h4 class="header-title mt-3 pt-3 mb-3" style="font-size:50px !important">😅</h4>
                                          <p class="sub-header">
                                             Não há nenhuma tarefa.
                   </p>
  
                                   
                              </div>
              `);
  }
}




function tpltedate(row, time) {
  return `<div class="col-xl-4 col-lg-6">
      <div class="card card-${row.priority}" style="animation: f ease ${time}s;">
          <a href="/tasks/${row.status == "archive" && row.type == "in"
      ? `takeaway/${row.task_id}`
      : `view/${row.task_id}`
    }" >
          <div class="card-body">
              
           
          
              <p class="text-success text-uppercase  mb-2"><i class="uil uil-map-pin-alt text-dark"></i><span class="badge badge-soft-primary" style="margin-left:5px;">${row.location
    }</span></p>
              <h5 class="mt-1 mb-1"><span class="text-dark fs-17 dots">${row.registration
    } - ${row.name}</span></h5>
              <span class="badge badge-soft-secondary mt-1 dots">${row.role
    }</span> </h5>
              <p class="text-muted mb-1 mt-2  ">${row.description}</p>
               
              
              ${tecnicos(row.tecnico)}
           
          </div>
          <div class="card-body border-top">
              <div class="row align-items-center">
                  <div class="col-12">
                  
                      <ul class="list-inline mb-0">
                      <li class="list-inline-item pe-2">
                              <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Comments">
                                  <i class="uil uil-clipboard-alt"></i> #${row.task_id} 
                              </span>
                          </li>
                         <li class="list-inline-item ">
                              <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Due date">
                                  <i class="uil uil-calender me-1"></i> ${moment(
      row.updated
    ).format('HH:mm')}
                              </span>
                          </li>
                          <li style="display: contents;">
                          ${priority(row.priority)} 
                          </li>
                         </ul>
                        
                  </div>
               
                  
              </div>
          </div>
          </a>
      </div>
      <!-- end card -->
  </div>`;
}

function showTasksDates(data) {
  console.log(data)

  
  if (data) {
    var tpl = "";

    data.forEach(function(cards, index) {
      //datas organizadas

      //template da linha

      tpl +=`<ul style="list-style: none;"> <li class="position-relative">
      <hr>
      <h4><span class="badge bg-light text-dark position-absolute top-0 start-50 translate-middle fs-17">${cards.date}</span></h4>
      </li></ul>`


      //sao os cards
      cards.tasks.forEach(function (card, index) {
        tpl += tpltedate(card, ((index*200)/1000));
      });



    })




    $(".tarefas").empty().append(tpl);
  } else {
    $(".tarefas").empty().append(`
              
              <div class="col-12 text-center">
               <h4 class="header-title mt-3 pt-3 mb-3" style="font-size:50px !important">😅</h4>
                                          <p class="sub-header">
                                             Não há nenhuma tarefa.
                   </p>
  
                                   
                              </div>
              `);
  }
}

export {
  showTasks,
  showTasksDates
};