$(document).ready(function() {
   // $('.parsley-examples').parsley();
});



function services (services) {
    tpl = '';
    if(services.length > 0){
        tpl = '<h6 class="header-title mb-1 mt-2">Histórico de Serviços</h6>'
    }

services.forEach(function (service, index) {
        tpl += `<div class="row mt-2">
        <div class="col">
            
              
                <label class="form-check-label" for="task2">
                    ${service.service}
                    <br><small> ${service.description}</small>
                </label>
                <p class="fs-13 text-muted">${moment(service.created).fromNow()} em ${moment(service.created).format("DD/MM/YYYY HH:mm:ss")}</p>
         
        </div>
            </div>`
    })
    
return tpl


}
    

function tecnicos(tecnicos) {
    var tpl = ''
    
    if(tecnicos != false){
        tpl = `<hr class="mt-2 mb-2"><span class="fs-12 mt-2 mb-1 bold text-dark">${(tecnicos.length> 1) ? `Técnicos atendendo:`:`Técnico atendendo:` } </span>`
        tecnicos.forEach(function (tecnico, index) {
            tpl += `<span class="badge badge-soft-secondary fs-13">${tecnico.name}</span>`
        })
        
    }

    return tpl
}



function waranty(start){
  
    

    if( moment().diff(start, 'days') >= 365){
         return `<label class="badge badge-soft-danger">Sem Garantia</label>`
    }else{
         return `<label class="badge badge-soft-success">Equipamento em Garantia</label>`
    }

}

function tplte(row) {

    return `<div class="col-xl-6 col-lg-6">
    <div class="card">
        
        <div class="card-body">
            
           
        
            <p class="text-success text-uppercase  mb-2"><i class="uil uil-map-pin-alt text-dark"></i><span class="badge badge-soft-primary" style="margin-left:5px;">${row.centro_custo}</span></p>
            <h5 class="mt-1 mb-1"><span class="text-dark fs-17 dots">${row.registration} - ${row.name}</span></h5>
            <span class="badge badge-soft-secondary mt-1">${row.orgao}</span> </h5>
            <p class="text-muted mb-1 mt-2  ">
           Responsável: <b>${row.responsavel}</b>
            </p>
            <p class="text-muted mb-1 mt-1  ">
           Situação: <b>${row.situacao}</b>
            </p>


            ${services(row.services)}
                 
         
        </div>
        <div class="card-body border-top">
            <div class="row align-items-center">
                <div class="col-sm-auto">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item pe-2">
                            <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Due date">
                                <i class="uil uil-calender me-1"></i>Adquirido ${moment(row.data_aquisicao).fromNow()}
                            </span>
                        </li>
                       
                        <li class="list-inline-item">
                            <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Comments">
                                <i class="uil uil-eye"></i> R$ ${row.valor_atualizado}
                            </span>
                        </li>

                        <li class="list-inline-item">
                            <span class="text-muted d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Comments">
                                <i class="uil uil-shield-question"></i> ${waranty(row.data_aquisicao)}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col offset-sm-1">
                    
                </div>
            </div>
        </div>
        
    </div>
    <!-- end card -->
</div>`

}

function showPatrimonio(data){

    console.log(data)

    $('.load').hide()

        if(data){

            var tpl = ""
            data.forEach(function (row, index) {
                tpl += tplte(row)
            })
        
            $(".patrimonio").empty().append(tpl)

        }else{

            $(".patrimonio").empty().append(`
            
            <div class="col-12 text-center">
                                
                                        <h4 class="header-title mt-3 pt-3 mb-3" style="font-size:50px !important">😅</h4>
                                        <p class="sub-header">
                                           Busque pela Plaqueta
                                        </p>

                                 
                            </div>
            `)
        }

   
 

}


initPatrimonio('')
function initPatrimonio(term){
    $(".tarefas").empty()

    var data = {
        term: $('#busca').val()
      }
//http://localhost:3000/api/patrimonio/search?&term=00&_type=query&q=00
    $.ajax({
        type: "GET",
        url: `/api/patrimonio/search?&term=${term}`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function (data) {
            showPatrimonio(data)
        },
        error: function (errMsg) {
            alert(errMsg);
        }
    
    })


}



$('#busca').on("input", function() {
   
    var dInput = this.value;
    console.log(dInput);
    initPatrimonio(dInput)
    //$(".dDimension:contains('" + dInput + "')").css("display","block");

});


