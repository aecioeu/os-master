! function(r) {
    "use strict";

    function t() { this.$body = r("body"), this.$chatInput = r(".chat-input"), this.$chatList = r(".conversation-list"), this.$chatSendBtn = r(".chat-send"), this.$chatForm = r("#chat-form") }
    t.prototype.save = function() {
        var t = this.$chatInput.val(),
            e = moment().format("h:mm");
        return "" == t ? (this.$chatInput.focus(), !1) : (r('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-7.jpg" alt="male"><i>' + e + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Shreyu</i><p>' + t + "</p></div></div></li>").appendTo(".conversation-list"), this.$chatInput.focus(), this.$chatList.animate({ scrollTop: this.$chatList.prop("scrollHeight") }, 1e3), !0)
    }, t.prototype.init = function() {
        var e = this;
        e.$chatInput.keypress(function(t) { if (13 == t.which) return e.save(), !1 }), e.$chatForm.on("submit", function(t) { return t.preventDefault(), e.save(), e.$chatForm.removeClass("was-validated"), e.$chatInput.val(""), !1 })
    }, r.ChatApp = new t, r.ChatApp.Constructor = t
}(window.jQuery),
function(o) {
    "use strict";

    function t() {}
    t.prototype.initCharts = function() {
        var t = { chart: { type: "area", height: 45, width: 90, sparkline: { enabled: !0 } }, series: [{ data: [25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54] }], stroke: { width: 2, curve: "smooth" }, markers: { size: 0 }, colors: ["#727cf5"], tooltip: { fixed: { enabled: !(window.Apex = { chart: { parentHeightOffset: 0, toolbar: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, colors: ["#5369f8", "#43d39e", "#f77e53", "#ffbe0b"], tooltip: { theme: "dark", x: { show: !1 } } }) }, x: { show: !1 }, y: { title: { formatter: function(t) { return "" } } }, marker: { show: !1 } }, fill: { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [45, 100] } } };
        new ApexCharts(document.querySelector("#today-revenue-chart"), t).render(), new ApexCharts(document.querySelector("#today-product-sold-chart"), o.extend({}, t, { colors: ["#f77e53"] })).render(), new ApexCharts(document.querySelector("#today-new-customer-chart"), o.extend({}, t, { colors: ["#43d39e"] })).render(), new ApexCharts(document.querySelector("#today-new-visitors-chart"), o.extend({}, t, { colors: ["#ffbe0b"] })).render();
        var e = new Date,
            r = {
                chart: { height: 296, type: "area" },
                dataLabels: { enabled: !1 },
                stroke: { curve: "smooth", width: 4 },
                series: [{ name: "Revenue", data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35] }],
                zoom: { enabled: !1 },
                legend: { show: !1 },
                colors: ["#43d39e"],
                xaxis: {
                    type: "string",
                    categories: function(t, e) {
                        for (var r = new Date(e, t, 1), o = [], a = 0; r.getMonth() === t && a < 15;) {
                            var n = new Date(r);
                            o.push(n.getDate() + " " + n.toLocaleString("en-us", { month: "short" })), r.setDate(r.getDate() + 1), a += 1
                        }
                        return o
                    }(e.getMonth(), e.getFullYear()),
                    tooltip: { enabled: !1 },
                    axisBorder: { show: !1 },
                    labels: {}
                },
                yaxis: { labels: { formatter: function(t) { return t + "k" } } },
                fill: { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [45, 100] } }
            };
        new ApexCharts(document.querySelector("#revenue-chart"), r).render();
        r = { chart: { height: 296, type: "bar", stacked: !0, toolbar: { show: !1 } }, plotOptions: { bar: { horizontal: !1, columnWidth: "45%" } }, dataLabels: { enabled: !1 }, stroke: { show: !0, width: 2, colors: ["transparent"] }, series: [{ name: "Net Profit", data: [35, 44, 55, 57, 56, 61] }, { name: "Revenue", data: [52, 76, 85, 101, 98, 87] }], xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], axisBorder: { show: !1 } }, legend: { show: !1 }, grid: { row: { colors: ["transparent", "transparent"], opacity: .2 }, borderColor: "#f3f4f7" }, tooltip: { y: { formatter: function(t) { return "$ " + t + " thousands" } } } };
        new ApexCharts(document.querySelector("#targets-chart"), r).render();
        r = { plotOptions: { pie: { donut: { size: "70%" }, expandOnClick: !1 } }, chart: { height: 298, type: "donut" }, legend: { show: !0, position: "right", horizontalAlign: "left", itemMargin: { horizontal: 6, vertical: 3 } }, series: [44, 55, 41, 17], labels: ["Clothes 44k", "Smartphons 55k", "Electronics 41k", "Other 17k"], responsive: [{ breakpoint: 480, options: { legend: { position: "bottom" } } }], tooltip: { y: { formatter: function(t) { return t + "k" } } } };
        new ApexCharts(document.querySelector("#sales-by-category-chart"), r).render()
    }, t.prototype.init = function() { o("#dash-daterange").flatpickr({ mode: "range", defaultDate: [moment().subtract(7, "days").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")] }), o("#calendar-widget").flatpickr({ inline: !0, shorthandCurrentMonth: !0 }), o.ChatApp.init(), this.initCharts() }, o.Dashboard = new t, o.Dashboard.Constructor = t
}(window.jQuery),
function() {
    "use strict";
    window.jQuery.Dashboard.init()
}();



var icons = ["frame-expand", "forward", "pause", "shuffle", "volume-low", "video", "volume-high", "full-screen", "volume-medium", "backward", "play", "volume-mute", "stop", "volume", "gallery", "spinner", "spinner-arrow", "spiner-solid", "hourglass", "line-double", "indent-decrease", "sort-amount-dsc", "italic", "text-align-right", "indent-increase", "sort-amount-asc", "line-spacing", "text-align-left", "spellcheck", "page-break", "text-format", "line-dotted", "bold", "sort-alpha-asc", "text-align-justify", "line-dashed", "pilcrow", "pagination", "strikethrough", "text-align-center", "text-format-remove", "underline", "surf-board", "pyramids", "travel", "bi-cycle", "popup", "car-alt", "comments-alt", "car", "phone", "anchor", "bus", "scooter", "caravan", "train-alt", "bullhorn", "phone-set", "support", "comments-reply", "train", "taxi", "envelope", "ship", "plane", "postcard", "bubble", "bridge", "road", "helicopter", "comments", "inbox", "reply", "drop", "cloud", "thunder-alt", "sun", "cloudy-sun", "night", "rain", "thunder", "graph", "network", "keyword-research", "target-customer", "bar-chart", "seo", "wheelbarrow", "paint-bucket", "ruler-alt", "helmet", "shovel", "hammer", "construction", "ruler-pencil", "ruler", "construction-hammer", "bricks", "paint-roller", "trowel", "fresh-juice", "pizza", "chef-hat", "juice", "burger", "service", "coffee-cup", "restaurant", "dinner", "heart", "minus", "cross-circle", "invention", "help", "circle-minus", "bolt-alt", "power-switch", "eye", "protection", "teabag", "unlock", "checkmark-circle", "checkbox", "circle-plus", "more", "lock-alt", "thumbs-up", "heart-filled", "close", "infinite", "warning", "plus", "flag", "funnel", "flag-alt", "bolt", "shield", "thumbs-down", "more-alt", "key", "life-ring", "lock", "question-circle", "ticket-alt", "ticket", "music", "radio-button", "pointer", "information", "list", "checkmark", "hand", "tree", "sprout", "flower", "bug", "leaf", "trees", "island", "mashroom", "chevron-left", "chevron-down-circle", "enter", "arrow-down-circle", "angle-double-down", "arrow-left", "arrow-up", "arrows-vertical", "angle-double-up", "exit", "direction-ltr", "shift-left", "chevron-right-circle", "exit-down", "pointer-left", "chevron-up-circle", "arrow-right-circle", "arrow-top-left", "pointer-down", "direction", "direction-rtl", "direction-alt", "arrow-top-right", "pointer-up", "angle-double-right", "shift-right", "arrow-left-circle", "arrow-right", "chevron-right", "chevron-left-circle", "arrows-horizontal", "chevron-up", "pointer-right", "exit-up", "chevron-down", "arrow-down", "arrow-up-circle", "angle-double-left", "weight", "pulse", "first-aid", "microscope", "sthethoscope", "dumbbell", "basketball", "wheelchair", "slim", "heart-monitor", "syringe", "skipping-rope", "hospital", "ambulance", "capsule", "emoji-speechless", "emoji-sad", "emoji-smile", "emoji-friendly", "emoji-happy", "emoji-suspect", "emoji-tounge", "emoji-cool", "stamp", "customer", "revenue", "target-revenue", "cart-full", "stats-up", "handshake", "agenda", "paperclip", "pie-chart", "grow", "notepad", "offer", "invest-monitor", "pin", "cart", "apartment", "stats-down", "consulting", "delivery", "quotation", "briefcase", "tag", "target", "investment", "school-bench-alt", "graduation", "pencil", "compass", "world-alt", "write", "blackboard", "pencil-alt", "world", "book", "certificate", "clipboard", "library", "school-bench", "eraser", "twitter-filled", "flickr", "firefox", "behance", "amazon-original", "lineicons-alt", "apple", "chrome", "facebook-messenger", "spotify-original", "behance-original", "wordpress", "cpanel", "skype", "soundcloud", "slack", "souncloud-original", "css3", "facebook-filled", "opera", "discord", "swift", "patreon", "twitter", "react", "linkedin", "trello", "dribbble", "codepen", "angellist", "reddit", "sketch", "producthunt", "yahoo", "jsfiddle", "jcb", "stumbleupon", "github-original", "app-store", "youtube", "linkedin-original", "windows", "twitch", "google-pay", "paypal-original", "joomla-original", "amex", "stackoverflow", "apple-pay", "stripe", "php", "megento", "atlassian", "line", "android-original", "google", "whatsapp", "wechat", "mastercard", "pinterest", "amazon", "amazon-pay", "facebook", "play-store", "paypal", "ubuntu", "wordpress-filled", "laravel", "quora", "html5", "snapchat", "slideshare", "nodejs", "google-wallet", "spotify", "nodejs-alt", "diners-club", "drupal-original", "goodreads", "telegram", "instagram-original", "bitcoin", "envato", "facebook-original", "mailchimp", "discover", "blogger", "git", "docker", "python", "edge", "lineicons", "shopify", "instagram", "hacker-news", "vimeo", "vk", "angular", "ycombinator", "instagram-filled", "npm", "joomla", "facebook-oval", "500px", "google-drive", "github", "creative-commons", "bitbucket", "twitter-original", "java", "aws", "visa", "adobe", "android", "dropbox-original", "dev", "drupal", "airbnb", "javascript", "microsoft", "dropbox", "firefox-original", "tumblr", "steam", "figma", "telegram-original", "medium", "bootstrap", "timer", "users", "alarm", "folder", "shopping-basket", "control-panel", "mouse", "menu", "add-files", "cloud-download", "star-empty", "rocket", "bookmark", "upload", "cut", "display", "laptop", "calendar", "magnifier", "share", "laptop-phone", "headphone", "mobile", "unlink", "star", "trash", "rss-feed", "printer", "camera", "cogs", "zoom-out", "save", "image", "remove-file", "reload", "empty-file", "zoom-in", "cloud-sync", "mic", "search-alt", "domain", "bluetooth", "share-alt", "harddrive", "star-half", "star-filled", "code", "dashboard", "cloud-network", "plug", "alarm-clock", "scroll-down", "download", "headphone-alt", "magnet", "archive", "game", "shortcode", "website", "link", "package", "website-alt", "ban", "cloud-upload", "bookmark-alt", "zip", "map-marker", "keyboard", "files", "signal", "database", "microphone", "map", "code-alt", "cloud-check", "tab", "user", "cog", "display-alt", "bulb", "search", "calculator", "yen", "diamond", "coin", "money-location", "credit-cards", "wallet", "money-protection", "pound", "diamond-alt", "euro", "dollar", "rupee", "baloon", "flags", "candy-cane", "spray", "fireworks", "cake", "candy", "layout", "slice", "select", "brush-alt", "ux", "layers", "brush", "move", "vector", "crop", "highlight", "highlight-alt", "pallet", "grid-alt", "grid", "cup", "gift", "crown", "tshirt", "home", "thought"]

$('.icon-select').on('click', function(event) {
    console.log('modal')

    tpl = ``
    icons.forEach(function(item) {
        // do something with `item`

        //  <i class="lni lni-cart"></i>
        tpl += ` <button type="button" icon="${item}" class="btn btn-light icon-selected" style="font-size: 21px;margin-bottom: 3px;">
        <i class="lni lni-${item}"></i></button>`

    });
    $('.icons-show').append(tpl)
    $('#myModal').modal('show');

});




$(function() {

    $('body').on('click', '.icon-selected', function() {
        var selected = $(this).attr("icon")
            //console.log(selected)

        $('.icon').val(selected)
        $('.icon-select').empty().html(`<i class="lni lni-${selected}"></i>`)
        $('#myModal').modal('hide');

    });
});




$('.custom-control-input').on('change.bootstrapSwitch', function(e) {
    var id = $(this).attr('id-categorie')
    var status = ((e.target.checked == true) ? 1 : 0)
    categoryUpdate(id, status)

});

function categoryUpdate(id, status) {

    $.ajax({
        url: "/update/category-update",
        type: "POST",
        data: {
            "id": id,
            "status": status
        },
        success: function(response) {
            console.log('update successful')
        },
        error: function() {
            alert("error");
        }

    });
}
/*

// DropZone
Dropzone.options.dropzone = {
    paramName: "files", // The name that will be used to transfer the file
    maxFilesize: 10, // MB
    //uploadMultiple: true,
    autoProcessQueue: false,
    accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
            done("Naha, you don't.");
        } else { done(); }
    }
};*/

Dropzone.options.mydropzone = {
    //url does not has to be written 
    //if we have wrote action in the form 
    //tag but i have mentioned here just for convenience sake 
    url: '/create/product',
    clickable: true,
    parallelUploads: 5,
    maxFiles: 5,
    acceptedFiles: 'image/*',
    uploadMultiple: true,
    addRemoveLinks: true,
    autoProcessQueue: false, // this is important as you dont want form to be submitted unless you have clicked the submit button
    autoDiscover: false,
    // paramName: 'pic', // this is optional Like this one will get accessed in php by writing $_FILE['pic'] // if you dont specify it then bydefault it taked 'file' as paramName eg: $_FILE['file'] 
    // previewsContainer: '#previewDiv', // we specify on which div id we must show the files
    accept: function(file, done) {
        console.log("uploaded");
        done();
    },
    error: function(file, msg) {
        alert(msg);
    },

    init: function() {
            var myDropzone = this;

            /* var mockFile = {
                name: 'FileName',
                size: 12345,
                accepted: true,
                kind: 'image'
            };
            this.emit("addedfile", mockFile);
            this.files.push(mockFile);
            this.createThumbnailFromUrl(mockFile, 'imageurl', function() {
                this.emit("complete", mockFile);
            });*/
            this.on("sendingmultiple", function(data, xhr, formData) {
                console.log(data)
                $('#product-form input,#product-form textarea').each(function(key, value) {
                    //formData.append("firstname", jQuery("#firstname").val());

                    console.log(value)

                })


            });

            this.on("removedfile", function(file) {
                alert(file.name);

                $.ajax({
                    url: "uploads/delete.php",
                    type: "POST",
                    data: { 'name': file.name }
                });


            });
            //now we will submit the form when the button is clicked
            $("#send").on('click', function(e) {

                e.preventDefault();

                myDropzone.processQueue(); // this will submit your form to the specified action path
                // after this, your whole form will get submitted with all the inputs + your files and the php code will remain as usual 
                //REMEMBER you DON'T have to call ajax or anything by yourself, dropzone will take care of that
            });
        } // init end
};
/*
$("#mydropzone").dropzone({
    //url: "tat",
    autoProcessQueue: false,
    uploadMultiple: true, //if you want more than a file to be   uploaded
    addRemoveLinks: true,
    maxFiles: 10,
    previewsContainer: '#previewDiv',

    init: function() {
        var submitButton = document.querySelector("#submitForm");
        var wrapperThis = this;

        submitButton.addEventListener("click", function() {
            wrapperThis.processQueue();
        });

        this.on("addedfile", function(file) {

            // Create the remove button
            var removeButton = Dropzone.createElement("<button class='remove'> Remove File</button>");

            // Listen to the click event
            removeButton.addEventListener("click", function(e) {
                // Make sure the button click doesn't submit the form:
                e.preventDefault();
                e.stopPropagation();

                // Remove the file preview.
                wrapperThis.removeFile(file);
            });

            file.previewElement.appendChild(removeButton);
        });

        // Also if you want to post any additional data, you can do it here
        this.on('sending', function(data, xhr, formData) {
            formData.append("PKId", $("#PKId").val());
        });

        this.on("maxfilesexceeded", function(file) {
            alert('max files exceeded');
            // handle max+1 file.
        });
    }
});*/

function variationCheck() {
    data = []
    $('.variation').each(function(index, itemData) {

        if ($(this).find('.name').val() && $(this).find('.variation').val()) {
            data.push({
                name: $(this).find('.name').val(),
                variation: $(this).find('.variation').val().split(',')
            })
        }

    });
    console.log(data)

    $('[name="variations_data"]').val(JSON.stringify(data));

}

function TemplateVariations(variationName, variations) {
    return `<div class="row variation">
    <div class="col-12 col-md-5">
        <div class="form-group">
            <label for="simpleinput">Variação</label>
            <input type="text" class="form-control name" value="${variationName}" placeholder="Ex: Tamanho, Cor">

        </div>
    </div>
    <div class="col-10 col-md-6">
        <div class="form-group">
            <label for="simpleinput">Conteudo <small>(Separado por virgula)</small></label>
            <input type="text" class="form-control variation" value="${variations}" placeholder="Ex: P, M, G">

        </div>
    </div>
    <div class="col-2 col-md-1">
        <div class="form-group mt-1 text-left">
            <label for="simpleinput">&nbsp</label>
            <a href="#" class="delete btn btn-link text-danger btn-lg p-0">
                <i class="uil uil-multiply font-size-18"></i>
            </a>

        </div>
    </div>

</div>`

}


var max_fields = 10;
var wrapper = $(".variations");
var add_button = $(".add_variations");

var x = 1;
$(add_button).click(function(e) {
    e.preventDefault();
    if (x < max_fields) {
        x++;
        // $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="delete">Delete</a></div>'); //add input box
        $(wrapper).append(TemplateVariations('Cor', 'preto, branco')); //add input box

    } else {
        alert('You Reached the limits')
    }
});

$(wrapper).on("click", ".delete", function(e) {
    variationCheck()
    console.log("delete")
    e.preventDefault();
    $(this).closest('.row').remove();
    x--;
})

var sizeData = $('[name="variations_data"]').val()
if (sizeData.length > 0) {
    $.each(JSON.parse(sizeData), function(x, value) {
        console.log()




        $(wrapper).append(TemplateVariations(value.name, value.variation)); //add input box
    });
}