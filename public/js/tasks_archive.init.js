
import { showTasks, showTasksDates } from './components/card-task.js';
import { checkWhatsapp } from './components/whastsapp.js';


$(document).ready(function () {
 // $(".parsley-examples").parsley();
});

$(document).on("select2:open", () => {
  document.querySelector(".select2-search__field").focus();
});

var select = $('[data-plugin="select_servidores"]')
  .select2({
    ajax: {
      url: "/api/servidores/search?",
      dataType: "json",
      data: function (params) {
        var query = {
          term: params.term,
        };

        // Query parameters will be ?search=[term]&type=public
        return query;
      },
      type: "GET",
      placeholder: "Buscar ...",
      minimumInputLength: 3,

      processResults: function (data) {
        return {
          results: data,
        };
      },
    },
    templateResult: formatRepo,
    templateSelection: function (data) {
      if (!data.id) {
        return data.text;
      }
      return $(`<span>${data.registration} - ${data.name}</span>`);
    },
  })

  .on("select2:open", function (e) {
    document.querySelector(".select2-search__field").focus();
  })

  .on("select2:select", function (e) {
    var data = e.params.data;

    $("#destiny").text(data.location);
    var contato = $("#contato").val(data.phone).inputmask("(99) 99999-9999");
    checkWhatsapp(data.phone);
  });


  if ($(".contato").length) {
 
    $('.contato').inputmask("mask", {
        "mask": "(99) 99999-9999",
        showMaskOnFocus: true,
        showMaskOnHover: false,
        autoUnmask: true,
        clearMaskOnLostFocus: true,
        greedy: false,
        oncomplete : function () {

          checkWhatsapp($(".contato").val());
        }
    });
    
  }



function formatRepo(data) {
  //console.log(data)
  if (data.loading) {
    return data.text;
  }

  var $tpl = $(`
                <div class="p-1">
                    <span class="location"><i class="uil uil-map-pin-alt text-dark"></i><span class="badge badge-soft-primary" style="margin-left:5px;">${data.location}</span></span>
                    <h5 class="mt-1 mb-1"><span class="text-dark bold repository__name">${data.registration} ${data.name}</span>
                    <br><span class="badge badge-soft-secondary mt-1">${data.role}</span> </h5>                                   
                </div>
        `);

  return $tpl;
}



function initTasks(date) {
  $(".tarefas").empty();

  var data = {
    show: $("#status").val(),
    start: date[0],
    end: date[1],
    term: $("#busca").val(),
  };

  $.ajax({
    type: "POST",
    url: `/api/tasks/archive`,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: function (data) {
       $(".load").hide();
       showTasksDates(data);
    },
    error: function (errMsg) {
      alert(errMsg);
    },
  });
}


if($("#range-datepicker").length){


const flatpickr = $("#range-datepicker").flatpickr({
  locale: "pt",
  mode: "range",
  dateFormat: "d/m/Y",
  defaultDate: [
    moment(new Date()).subtract(7, "days").format("DD/MM/YYYY"),
    moment(new Date()).format("DD/MM/YYYY"),
  ],
  onClose: function (selectedDates, dateStr, instance) {
    initTasks(selectedDates);
  },
  onReady: function (selectedDates, dateStr, instance) {
    console.log(selectedDates[0], selectedDates[1]);
    initTasks(selectedDates);
  },
});




$("#busca").on("input", function () {
    var dInput = this.value;
    console.log(dInput);
  
    initTasks(flatpickr.selectedDates);
    //$(".dDimension:contains('" + dInput + "')").css("display","block");
  });
}
