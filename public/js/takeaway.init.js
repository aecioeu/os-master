import { checkWhatsapp } from "./components/whastsapp.js";

$(".created_time").text(
  moment($(".created_time").text()).format("DD/MM/YYYY HH:ss")
);
$(".date").text(moment().format("LL"));

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

    $(".name").text(data.name);

    var contato = $("#contato").val(data.phone).inputmask("(99) 99999-9999");
    checkWhatsapp(data.phone);
  });

$(document).ready(function () {
  if ($(".contato").length) {
    $(".contato").inputmask("mask", {
      mask: "(99) 99999-9999",
      showMaskOnFocus: true,
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true,
      greedy: false,
      oncomplete: function () {
        checkWhatsapp($(".contato").val());
      },
    });
  }
});

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
