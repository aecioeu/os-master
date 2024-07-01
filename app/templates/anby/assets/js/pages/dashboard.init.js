! function(r) {
    "use strict";

    function t() {
        this.$body = r("body"), this.$chatInput = r(".chat-input"), this.$chatList = r(".conversation-list"), this.$chatSendBtn = r(".chat-send"), this.$chatForm = r("#chat-form")
    }
    t.prototype.save = function() {
        var t = this.$chatInput.val(),
            e = moment().format("h:mm");
        return "" == t ? (this.$chatInput.focus(), !1) : (r('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-7.jpg" alt="male"><i>' + e + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Shreyu</i><p>' + t + "</p></div></div></li>").appendTo(".conversation-list"), this.$chatInput.focus(), this.$chatList.animate({
            scrollTop: this.$chatList.prop("scrollHeight")
        }, 1e3), !0)
    }, t.prototype.init = function() {
        var e = this;
        e.$chatInput.keypress(function(t) {
            if (13 == t.which) return e.save(), !1
        }), e.$chatForm.on("submit", function(t) {
            return t.preventDefault(), e.save(), e.$chatForm.removeClass("was-validated"), e.$chatInput.val(""), !1
        })
    }, r.ChatApp = new t, r.ChatApp.Constructor = t
}(window.jQuery),
function(o) {
    "use strict";

    function t() {}
    t.prototype.initCharts = function() {
        var t = {
            chart: {
                type: "area",
                height: 45,
                width: 90,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: ["#727cf5"],
            tooltip: {
                fixed: {
                    enabled: !(window.Apex = {
                        chart: {
                            parentHeightOffset: 0,
                            toolbar: {
                                show: !1
                            }
                        },
                        grid: {
                            padding: {
                                left: 0,
                                right: 0
                            }
                        },
                        colors: ["#5369f8", "#43d39e", "#f77e53", "#ffbe0b"],
                        tooltip: {
                            theme: "dark",
                            x: {
                                show: !1
                            }
                        }
                    })
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: .45,
                    opacityTo: .05,
                    stops: [45, 100]
                }
            }
        };
        new ApexCharts(document.querySelector("#today-revenue-chart"), t).render(),
            new ApexCharts(document.querySelector("#today-product-sold-chart"),
                o.extend({}, t, {
                    colors: ["#f77e53"]
                })).render(),
            new ApexCharts(document.querySelector("#today-new-customer-chart"),
                o.extend({}, t, {
                    colors: ["#43d39e"]
                })).render(),
            new ApexCharts(document.querySelector("#today-new-visitors-chart"), o.extend({}, t, {
                colors: ["#ffbe0b"]
            })).render();

    }, t.prototype.init = function() {

        o("#dash-daterange").flatpickr({
                mode: "range",
                defaultDate: [moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD')],
                onClose: function(selectedDates, dateStr, instance) {
                    dash(dateStr)
                },
                onReady: function(selectedDates, dateStr, instance) {
                    //console.log(dateStr)
                    //quando começar

                    dash(dateStr)
                },



            }), o("#order-daterange").flatpickr({
                mode: "range",
                //defaultDate: [moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD')],
                onClose: function(selectedDates, dateStr, instance) {
                    order(dateStr)
                },
                onReady: function(selectedDates, dateStr, instance) {
                    var date = `${moment().startOf('month').format('YYYY-MM-DD')} to ${moment().endOf('month').format('YYYY-MM-DD')}`
                    if (!dateStr) $("#order-daterange").val(date)

                    order((dateStr) ? dateStr : date)
                },



            }),
            o("#calendar-widget").flatpickr({
                inline: !0,
                shorthandCurrentMonth: !0,

            }),
            o.ChatApp.init(),
            this.initCharts()
    }, o.Dashboard = new t, o.Dashboard.Constructor = t
}(window.jQuery),
function() {
    "use strict";
    window.jQuery.Dashboard.init()
}();

var icons2 = ["lab la-accessible-icon", "fas fa-american-sign-language-interpreting", "las la-assistive-listening-systems", "las la-audio-description", "las la-blind", "las la-braille", "las la-closed-captioning", "las la-deaf", "las la-low-vision", "las la-phone-volume", "las la-question-circle", "fas fa-sign-language", "las la-tty", "las la-universal-access", "las la-wheelchair", "las la-bell", "fas fa-bell-slash", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "las la-radiation", "las la-radiation-alt", "las la-skull-crossbones", "las la-cat", "las la-crow", "las la-dog", "las la-dove", "las la-dragon", "las la-feather", "las la-feather-alt", "las la-fish", "las la-frog", "las la-hippo", "las la-horse", "las la-horse-head", "las la-kiwi-bird", "las la-otter", "las la-paw", "las la-spider", "las la-angle-double-down", "las la-angle-double-left", "las la-angle-double-right", "las la-angle-double-up", "las la-angle-down", "las la-angle-left", "las la-angle-right", "las la-angle-up", "las la-arrow-alt-circle-down", "las la-arrow-alt-circle-left", "las la-arrow-alt-circle-right", "las la-arrow-alt-circle-up", "las la-arrow-circle-down", "las la-arrow-circle-left", "las la-arrow-circle-right", "las la-arrow-circle-up", "las la-arrow-down", "las la-arrow-left", "las la-arrow-up", "las la-arrows-alt", "las la-arrows-alt-h", "las la-arrows-alt-v", "las la-caret-down", "las la-caret-left", "las la-caret-right", "las la-caret-square-down", "las la-caret-square-left", "las la-caret-square-right", "las la-caret-square-up", "las la-caret-up", "las la-cart-arrow-down", "las la-chart-line", "las la-chevron-circle-down", "las la-chevron-circle-left", "las la-chevron-circle-right", "las la-chevron-circle-up", "las la-chevron-down", "las la-chevron-left", "las la-chevron-right", "las la-chevron-up", "las la-cloud-download-alt", "las la-cloud-upload-alt", "las la-compress-arrows-alt", "las la-download", "las la-exchange-alt", "las la-expand-arrows-alt", "las la-external-link-alt", "las la-external-link-square-alt", "las la-hand-point-down", "las la-hand-point-left", "las la-hand-point-right", "las la-hand-point-up", "las la-hand-pointer", "las la-history", "las la-level-down-alt", "las la-level-up-alt", "las la-location-arrow", "las la-long-arrow-alt-down", "las la-long-arrow-alt-left", "las la-long-arrow-alt-right", "las la-long-arrow-alt-up", "las la-mouse-pointer", "fas fa-play", "las la-random", "las la-recycle", "las la-redo", "las la-redo-alt", "las la-reply", "las la-reply-all", "las la-retweet", "las la-share", "las la-share-square", "las la-sign-in-alt", "las la-sign-out-alt", "las la-sort", "las la-sort-alpha-down", "las la-sort-alpha-down-alt", "las la-sort-alpha-up", "las la-sort-alpha-up-alt", "las la-sort-amount-down", "las la-sort-amount-down-alt", "las la-sort-amount-up", "las la-sort-amount-up-alt", "las la-sort-down", "las la-sort-numeric-down", "las la-sort-numeric-down-alt", "las la-sort-numeric-up", "las la-sort-numeric-up-alt", "las la-sort-up", "las la-sync", "las la-sync-alt", "las la-text-height", "las la-text-width", "las la-undo", "las la-undo-alt", "las la-upload", "las la-audio-description", "las la-backward", "las la-broadcast-tower", "las la-circle", "las la-closed-captioning", "las la-compress", "las la-compress-arrows-alt", "las la-eject", "las la-expand", "las la-expand-arrows-alt", "las la-fast-backward", "las la-fast-forward", "las la-file-audio", "las la-file-video", "las la-film", "las la-forward", "las la-headphones", "las la-microphone", "las la-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "las la-music", "las la-pause", "las la-pause-circle", "las la-phone-volume", "las la-photo-video", "fas fa-play", "fas fa-play-circle", "las la-podcast", "las la-random", "las la-redo", "las la-redo-alt", "las la-rss", "las la-rss-square", "las la-step-backward", "las la-step-forward", "las la-stop", "las la-stop-circle", "las la-sync", "las la-sync-alt", "las la-tv", "las la-undo", "las la-undo-alt", "las la-video", "las la-volume-down", "las la-volume-mute", "las la-volume-off", "las la-volume-up", "lab la-youtube", "las la-air-freshener", "fas fa-ambulance", "las la-bus", "las la-bus-alt", "las la-car", "las la-car-alt", "las la-car-battery", "las la-car-crash", "las la-car-side", "las la-charging-station", "las la-gas-pump", "las la-motorcycle", "las la-oil-can", "las la-shuttle-van", "las la-tachometer-alt", "las la-taxi", "las la-truck", "las la-truck-monster", "las la-truck-pickup", "las la-apple-alt", "las la-campground", "las la-cloud-sun", "las la-drumstick-bite", "las la-football-ball", "las la-hiking", "las la-mountain", "las la-tractor", "las la-tree", "las la-wind", "las la-wine-bottle", "las la-beer", "las la-blender", "las la-cocktail", "las la-coffee", "fas fa-flask", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-martini-alt", "fas fa-glass-whiskey", "las la-mug-hot", "las la-wine-bottle", "fas fa-wine-glass", "fas fa-wine-glass-alt", "lab la-500px", "lab la-accusoft", "lab la-adn", "lab la-adobe", "lab la-adversal", "lab la-affiliatetheme", "lab la-airbnb", "lab la-algolia", "lab la-amazon", "lab la-amilia", "lab la-android", "lab la-angellist", "lab la-angrycreative", "fab fa-angular", "lab la-app-store", "lab la-app-store-ios", "lab la-apper", "lab la-apple", "lab la-artstation", "lab la-asymmetrik", "fab fa-atlassian", "lab la-audible", "lab la-autoprefixer", "lab la-avianex", "lab la-aviato", "lab la-aws", "lab la-bandcamp", "lab la-battle-net", "lab la-behance", "lab la-behance-square", "lab la-bimobject", "lab la-bitbucket", "lab la-bity", "fab fa-black-tie", "fab fa-blackberry", "lab la-blogger", "lab la-blogger-b", "lab la-bootstrap", "lab la-buffer", "lab la-buromobelexperte", "fab fa-buy-n-large", "fab fa-buysellads", "lab la-canadian-maple-leaf", "lab la-centercode", "lab la-centos", "lab la-chrome", "lab la-chromecast", "lab la-cloudscale", "lab la-cloudsmith", "lab la-cloudversify", "lab la-codepen", "lab la-codiepie", "lab la-confluence", "lab la-connectdevelop", "lab la-contao", "lab la-cotton-bureau", "lab la-cpanel", "lab la-creative-commons", "lab la-creative-commons-by", "lab la-creative-commons-nc", "lab la-creative-commons-nc-eu", "lab la-creative-commons-nc-jp", "lab la-creative-commons-nd", "lab la-creative-commons-pd", "lab la-creative-commons-pd-alt", "lab la-creative-commons-remix", "lab la-creative-commons-sa", "lab la-creative-commons-sampling", "lab la-creative-commons-sampling-plus", "lab la-creative-commons-share", "lab la-creative-commons-zero", "lab la-css3", "lab la-css3-alt", "lab la-cuttlefish", "lab la-dashcube", "lab la-delicious", "lab la-deploydog", "lab la-deskpro", "lab la-dev", "lab la-deviantart", "lab la-dhl", "lab la-diaspora", "lab la-digg", "lab la-digital-ocean", "lab la-discord", "lab la-discourse", "lab la-dochub", "lab la-docker", "lab la-draft2digital", "lab la-dribbble", "lab la-dribbble-square", "lab la-dropbox", "lab la-drupal", "lab la-dyalog", "lab la-earlybirds", "lab la-ebay", "lab la-edge", "lab la-elementor", "lab la-ello", "lab la-ember", "lab la-empire", "lab la-envira", "fab fa-erlang", "lab la-etsy", "lab la-evernote", "lab la-expeditedssl", "lab la-facebook", "lab la-facebook-f", "lab la-facebook-messenger", "lab la-facebook-square", "lab la-fedex", "lab la-fedora", "lab la-figma", "lab la-firefox", "lab la-first-order", "lab la-first-order-alt", "lab la-firstdraft", "lab la-flickr", "lab la-flipboard", "lab la-fly", "lab la-font-awesome", "lab la-font-awesome-alt", "fab fa-font-awesome-flag", "lab la-fonticons", "lab la-fonticons-fi", "lab la-fort-awesome", "lab la-fort-awesome-alt", "lab la-forumbee", "lab la-foursquare", "lab la-free-code-camp", "lab la-freebsd", "lab la-fulcrum", "lab la-get-pocket", "lab la-git", "lab la-git-alt", "lab la-git-square", "lab la-github", "lab la-github-alt", "lab la-github-square", "lab la-gitkraken", "fab fa-gitlab", "lab la-gitter", "lab la-glide", "lab la-glide-g", "lab la-gofore", "lab la-goodreads", "lab la-goodreads-g", "lab la-google", "lab la-google-drive", "fab fa-google-play", "lab la-google-plus", "lab la-google-plus-g", "lab la-google-plus-square", "lab la-gratipay", "lab la-grav", "lab la-gripfire", "lab la-grunt", "lab la-gulp", "lab la-hacker-news", "lab la-hacker-news-square", "lab la-hackerrank", "lab la-hips", "lab la-hire-a-helper", "lab la-hooli", "lab la-hornbill", "lab la-hotjar", "lab la-houzz", "lab la-html5", "lab la-hubspot", "lab la-imdb", "lab la-instagram", "lab la-intercom", "lab la-internet-explorer", "lab la-invision", "lab la-ioxhost", "lab la-itch-io", "lab la-itunes", "lab la-itunes-note", "lab la-java", "lab la-jenkins", "lab la-jira", "lab la-joget", "fab fa-joomla", "lab la-js", "lab la-js-square", "lab la-jsfiddle", "lab la-kaggle", "lab la-keybase", "lab la-keycdn", "lab la-kickstarter", "lab la-kickstarter-k", "lab la-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "lab la-leanpub", "lab la-less", "lab la-line", "lab la-linkedin", "lab la-linkedin-in", "lab la-linode", "lab la-linux", "lab la-lyft", "lab la-magento", "lab la-mailchimp", "lab la-mandalorian", "lab la-markdown", "lab la-mastodon", "lab la-maxcdn", "lab la-mdb", "lab la-medapps", "lab la-medium", "lab la-medium-m", "lab la-medrt", "lab la-meetup", "lab la-megaport", "lab la-mendeley", "lab la-microsoft", "lab la-mix", "lab la-mixcloud", "lab la-mizuni", "lab la-modx", "lab la-monero", "lab la-neos", "lab la-nimblr", "lab la-node", "lab la-node-js", "lab la-npm", "lab la-ns8", "lab la-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "lab la-opencart", "lab la-openid", "lab la-opera", "lab la-optin-monster", "lab la-orcid", "lab la-osi", "lab la-page4", "lab la-pagelines", "lab la-palfed", "lab la-patreon", "lab la-periscope", "lab la-phabricator", "lab la-phoenix-framework", "lab la-phoenix-squadron", "lab la-php", "lab la-pied-piper", "lab la-pied-piper-alt", "lab la-pied-piper-hat", "lab la-pied-piper-pp", "lab la-pinterest", "lab la-pinterest-p", "lab la-pinterest-square", "lab la-product-hunt", "lab la-pushed", "lab la-python", "lab la-qq", "lab la-quinscape", "lab la-quora", "lab la-r-project", "lab la-raspberry-pi", "lab la-ravelry", "lab la-react", "lab la-reacteurope", "lab la-readme", "lab la-rebel", "lab la-red-river", "lab la-reddit", "lab la-reddit-alien", "lab la-reddit-square", "lab la-redhat", "lab la-renren", "lab la-replyd", "lab la-researchgate", "lab la-resolving", "lab la-rev", "lab la-rocketchat", "lab la-rockrms", "lab la-safari", "lab la-salesforce", "lab la-sass", "lab la-schlix", "lab la-scribd", "lab la-searchengin", "lab la-sellcast", "lab la-sellsy", "lab la-servicestack", "lab la-shirtsinbulk", "lab la-shopware", "lab la-simplybuilt", "lab la-sistrix", "lab la-sith", "lab la-sketch", "fab fa-skyatlas", "lab la-skype", "fab fa-slack", "fab fa-slack-hash", "lab la-slideshare", "lab la-snapchat", "lab la-snapchat-ghost", "lab la-snapchat-square", "lab la-sourcetree", "lab la-speakap", "lab la-speaker-deck", "lab la-squarespace", "lab la-stack-exchange", "lab la-stack-overflow", "lab la-stackpath", "lab la-staylinked", "lab la-sticker-mule", "lab la-strava", "lab la-studiovinari", "lab la-stumbleupon", "lab la-stumbleupon-circle", "lab la-superpowers", "lab la-supple", "lab la-suse", "lab la-swift", "lab la-symfony", "lab la-teamspeak", "lab la-telegram", "fab fa-telegram-plane", "lab la-tencent-weibo", "lab la-the-red-yeti", "lab la-themeco", "lab la-themeisle", "lab la-think-peaks", "lab la-trade-federation", "lab la-trello", "lab la-tripadvisor", "lab la-tumblr", "lab la-tumblr-square", "lab la-twitter", "lab la-twitter-square", "lab la-typo3", "lab la-uber", "lab la-ubuntu", "lab la-uikit", "lab la-umbraco", "lab la-uniregistry", "lab la-untappd", "lab la-ups", "lab la-usb", "lab la-usps", "lab la-ussunnah", "lab la-vaadin", "lab la-viacoin", "lab la-viadeo", "lab la-viadeo-square", "lab la-viber", "lab la-vimeo", "lab la-vimeo-square", "lab la-vimeo-v", "lab la-vine", "lab la-vk", "lab la-vnv", "lab la-vuejs", "lab la-waze", "lab la-weebly", "lab la-weibo", "lab la-weixin", "lab la-whatsapp", "lab la-whatsapp-square", "lab la-whmcs", "lab la-wikipedia-w", "lab la-windows", "lab la-wix", "lab la-wolf-pack-battalion", "lab la-wordpress", "lab la-wordpress-simple", "lab la-wpbeginner", "lab la-wpexplorer", "lab la-wpforms", "lab la-wpressr", "lab la-xing", "lab la-xing-square", "lab la-y-combinator", "lab la-yahoo", "lab la-yammer", "lab la-yandex", "lab la-yandex-international", "lab la-yarn", "lab la-yelp", "lab la-yoast", "lab la-youtube-square", "lab la-zhihu", "las la-archway", "las la-building", "las la-campground", "las la-church", "las la-city", "las la-clinic-medical", "las la-dungeon", "las la-gopuram", "las la-home", "las la-hospital", "las la-hospital-alt", "las la-hotel", "las la-house-damage", "las la-igloo", "las la-industry", "las la-kaaba", "fas fa-landmark", "las la-monument", "las la-mosque", "fas fa-place-of-worship", "las la-school", "las la-store", "las la-store-alt", "las la-synagogue", "las la-torii-gate", "las la-university", "las la-vihara", "las la-warehouse", "las la-address-book", "las la-address-card", "las la-archive", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "las la-birthday-cake", "las la-book", "las la-briefcase", "las la-building", "las la-bullhorn", "las la-bullseye", "las la-business-time", "fas fa-calculator", "las la-calendar", "las la-calendar-alt", "las la-certificate", "las la-chart-area", "las la-chart-bar", "las la-chart-line", "las la-chart-pie", "las la-city", "las la-clipboard", "las la-coffee", "las la-columns", "las la-compass", "las la-copy", "las la-copyright", "las la-cut", "las la-edit", "las la-envelope", "las la-envelope-open", "las la-envelope-square", "las la-eraser", "las la-fax", "las la-file", "las la-file-alt", "las la-folder", "las la-folder-minus", "las la-folder-open", "las la-folder-plus", "fas fa-glasses", "las la-globe", "las la-highlighter", "las la-industry", "fas fa-landmark", "las la-marker", "las la-paperclip", "las la-paste", "las la-pen", "las la-pen-alt", "las la-pen-fancy", "las la-pen-nib", "las la-pen-square", "las la-pencil-alt", "las la-percent", "las la-phone", "las la-phone-alt", "fas fa-phone-slash", "las la-phone-square", "las la-phone-square-alt", "las la-phone-volume", "las la-print", "las la-project-diagram", "las la-registered", "las la-save", "las la-sitemap", "las la-socks", "las la-sticky-note", "las la-stream", "las la-table", "las la-tag", "las la-tags", "las la-tasks", "las la-thumbtack", "las la-trademark", "las la-wallet", "fas fa-binoculars", "las la-campground", "las la-compass", "las la-fire", "las la-fire-alt", "las la-first-aid", "las la-frog", "las la-hiking", "las la-map", "las la-map-marked", "las la-map-marked-alt", "las la-map-signs", "las la-mountain", "las la-route", "las la-toilet-paper", "las la-tree", "fas fa-dollar-sign", "las la-donate", "las la-dove", "las la-gift", "las la-globe", "las la-hand-holding-heart", "las la-hand-holding-usd", "las la-hands-helping", "las la-handshake", "las la-heart", "las la-leaf", "las la-parachute-box", "las la-piggy-bank", "las la-ribbon", "las la-seedling", "las la-comment", "las la-comment-alt", "las la-comment-dots", "las la-comment-medical", "fas fa-comment-slash", "las la-comments", "las la-frown", "las la-icons", "las la-meh", "las la-phone", "las la-phone-alt", "fas fa-phone-slash", "las la-poo", "las la-quote-left", "las la-quote-right", "las la-smile", "las la-sms", "las la-video", "fas fa-video-slash", "las la-chess", "las la-chess-bishop", "las la-chess-board", "las la-chess-king", "las la-chess-knight", "las la-chess-pawn", "las la-chess-queen", "las la-chess-rook", "las la-square-full", "las la-apple-alt", "las la-baby", "las la-baby-carriage", "las la-bath", "las la-biking", "las la-birthday-cake", "las la-cookie", "las la-cookie-bite", "las la-gamepad", "las la-ice-cream", "las la-mitten", "las la-robot", "las la-school", "las la-shapes", "las la-snowman", "las la-graduation-cap", "las la-hat-cowboy", "las la-hat-cowboy-side", "las la-hat-wizard", "las la-mitten", "las la-shoe-prints", "las la-socks", "las la-tshirt", "las la-user-tie", "las la-archive", "las la-barcode", "las la-bath", "las la-bug", "las la-code", "las la-code-branch", "las la-coffee", "las la-file", "las la-file-alt", "las la-file-code", "las la-filter", "las la-fire-extinguisher", "las la-folder", "las la-folder-open", "las la-keyboard", "fas fa-laptop-code", "las la-microchip", "las la-project-diagram", "las la-qrcode", "las la-shield-alt", "las la-sitemap", "las la-stream", "las la-terminal", "las la-user-secret", "las la-window-close", "las la-window-maximize", "las la-window-minimize", "las la-window-restore", "las la-address-book", "las la-address-card", "fas fa-american-sign-language-interpreting", "las la-assistive-listening-systems", "las la-at", "las la-bell", "fas fa-bell-slash", "lab la-bluetooth", "lab la-bluetooth-b", "las la-broadcast-tower", "las la-bullhorn", "las la-chalkboard", "las la-comment", "las la-comment-alt", "las la-comments", "las la-envelope", "las la-envelope-open", "las la-envelope-square", "las la-fax", "las la-inbox", "fas fa-language", "las la-microphone", "las la-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "las la-mobile", "las la-mobile-alt", "fas fa-paper-plane", "las la-phone", "las la-phone-alt", "fas fa-phone-slash", "las la-phone-square", "las la-phone-square-alt", "las la-phone-volume", "las la-rss", "las la-rss-square", "las la-tty", "las la-voicemail", "las la-wifi", "las la-database", "las la-desktop", "las la-download", "las la-ethernet", "las la-hdd", "las la-headphones", "las la-keyboard", "fas fa-laptop", "las la-memory", "las la-microchip", "las la-mobile", "las la-mobile-alt", "las la-mouse", "las la-plug", "las la-power-off", "las la-print", "las la-satellite", "las la-satellite-dish", "las la-save", "las la-sd-card", "las la-server", "las la-sim-card", "las la-stream", "las la-tablet", "las la-tablet-alt", "las la-tv", "las la-upload", "las la-brush", "las la-drafting-compass", "las la-dumpster", "las la-hammer", "las la-hard-hat", "las la-paint-roller", "las la-pencil-alt", "las la-pencil-ruler", "las la-ruler", "las la-ruler-combined", "las la-ruler-horizontal", "las la-ruler-vertical", "las la-screwdriver", "las la-toolbox", "las la-tools", "las la-truck-pickup", "las la-wrench", "lab la-bitcoin", "lab la-btc", "fas fa-dollar-sign", "lab la-ethereum", "las la-euro-sign", "lab la-gg", "lab la-gg-circle", "las la-hryvnia", "las la-lira-sign", "las la-money-bill", "las la-money-bill-alt", "las la-money-bill-wave", "las la-money-bill-wave-alt", "las la-money-check", "las la-money-check-alt", "las la-pound-sign", "las la-ruble-sign", "las la-rupee-sign", "las la-shekel-sign", "las la-tenge", "las la-won-sign", "las la-yen-sign", "las la-bell", "fas fa-bell-slash", "las la-calendar", "las la-calendar-alt", "las la-calendar-check", "las la-calendar-minus", "las la-calendar-plus", "las la-calendar-times", "las la-clock", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "las la-stopwatch", "las la-adjust", "las la-bezier-curve", "las la-brush", "las la-clone", "las la-copy", "las la-crop", "las la-crop-alt", "las la-crosshairs", "las la-cut", "las la-drafting-compass", "las la-draw-polygon", "las la-edit", "las la-eraser", "las la-eye", "las la-eye-dropper", "fas fa-eye-slash", "las la-fill", "las la-fill-drip", "las la-highlighter", "las la-icons", "fas fa-layer-group", "las la-magic", "las la-marker", "las la-object-group", "las la-object-ungroup", "las la-paint-brush", "las la-paint-roller", "las la-palette", "las la-paste", "las la-pen", "las la-pen-alt", "las la-pen-fancy", "las la-pen-nib", "las la-pencil-alt", "las la-pencil-ruler", "las la-ruler-combined", "las la-ruler-horizontal", "las la-ruler-vertical", "las la-save", "las la-splotch", "las la-spray-can", "las la-stamp", "las la-swatchbook", "las la-tint", "fas fa-tint-slash", "las la-vector-square", "las la-align-center", "las la-align-justify", "las la-align-left", "las la-align-right", "las la-bold", "las la-border-all", "las la-border-none", "las la-border-style", "las la-clipboard", "las la-clone", "las la-columns", "las la-copy", "las la-cut", "las la-edit", "las la-eraser", "las la-file", "las la-file-alt", "las la-font", "fas fa-glasses", "las la-heading", "las la-highlighter", "las la-i-cursor", "las la-icons", "las la-indent", "las la-italic", "las la-link", "las la-list", "las la-list-alt", "las la-list-ol", "las la-list-ul", "las la-marker", "las la-outdent", "fas fa-paper-plane", "las la-paperclip", "las la-paragraph", "las la-paste", "las la-pen", "las la-pen-alt", "las la-pen-fancy", "las la-pen-nib", "las la-pencil-alt", "las la-print", "las la-quote-left", "las la-quote-right", "las la-redo", "las la-redo-alt", "las la-remove-format", "las la-reply", "las la-reply-all", "las la-screwdriver", "las la-share", "las la-spell-check", "las la-strikethrough", "las la-subscript", "las la-superscript", "las la-sync", "las la-sync-alt", "las la-table", "las la-tasks", "las la-text-height", "las la-text-width", "las la-th", "fas fa-th-large", "las la-th-list", "las la-tools", "las la-trash", "las la-trash-alt", "las la-trash-restore", "las la-trash-restore-alt", "las la-underline", "las la-undo", "las la-undo-alt", "las la-unlink", "las la-wrench", "las la-apple-alt", "las la-atom", "las la-award", "las la-bell", "fas fa-bell-slash", "las la-book-open", "las la-book-reader", "las la-chalkboard", "las la-chalkboard-teacher", "las la-graduation-cap", "fas fa-laptop-code", "las la-microscope", "las la-music", "las la-school", "las la-shapes", "las la-theater-masks", "las la-user-graduate", "las la-angry", "las la-dizzy", "las la-flushed", "las la-frown", "las la-frown-open", "las la-grimace", "las la-grin", "las la-grin-alt", "las la-grin-beam", "las la-grin-beam-sweat", "las la-grin-hearts", "las la-grin-squint", "las la-grin-squint-tears", "las la-grin-stars", "las la-grin-tears", "las la-grin-tongue", "las la-grin-tongue-squint", "las la-grin-tongue-wink", "las la-grin-wink", "las la-kiss", "las la-kiss-beam", "las la-kiss-wink-heart", "fas fa-laugh", "fas fa-laugh-beam", "fas fa-laugh-squint", "fas fa-laugh-wink", "las la-meh", "fas fa-meh-blank", "las la-meh-rolling-eyes", "las la-sad-cry", "las la-sad-tear", "las la-smile", "las la-smile-beam", "las la-smile-wink", "las la-surprise", "las la-tired", "las la-atom", "las la-battery-empty", "las la-battery-full", "las la-battery-half", "las la-battery-quarter", "las la-battery-three-quarters", "las la-broadcast-tower", "las la-burn", "las la-charging-station", "las la-fire", "las la-fire-alt", "las la-gas-pump", "las la-industry", "las la-leaf", "las la-lightbulb", "las la-plug", "las la-poop", "las la-power-off", "las la-radiation", "las la-radiation-alt", "las la-seedling", "fas fa-solar-panel", "las la-sun", "las la-water", "las la-wind", "las la-archive", "las la-clone", "las la-copy", "las la-cut", "las la-file", "las la-file-alt", "las la-file-archive", "las la-file-audio", "las la-file-code", "las la-file-excel", "las la-file-image", "las la-file-pdf", "las la-file-powerpoint", "las la-file-video", "las la-file-word", "las la-folder", "las la-folder-open", "las la-paste", "las la-photo-video", "las la-save", "las la-sticky-note", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "las la-book", "las la-cash-register", "las la-chart-line", "las la-chart-pie", "las la-coins", "fas fa-comment-dollar", "fas fa-comments-dollar", "las la-credit-card", "las la-donate", "las la-file-invoice", "fas fa-file-invoice-dollar", "las la-hand-holding-usd", "fas fa-landmark", "las la-money-bill", "las la-money-bill-alt", "las la-money-bill-wave", "las la-money-bill-wave-alt", "las la-money-check", "las la-money-check-alt", "las la-percentage", "las la-piggy-bank", "las la-receipt", "las la-stamp", "las la-wallet", "las la-bicycle", "las la-biking", "las la-burn", "las la-fire-alt", "las la-heart", "las la-heartbeat", "las la-hiking", "las la-running", "las la-shoe-prints", "las la-skating", "las la-skiing", "las la-skiing-nordic", "las la-snowboarding", "las la-spa", "las la-swimmer", "las la-walking", "las la-apple-alt", "las la-bacon", "las la-bone", "las la-bread-slice", "las la-candy-cane", "las la-carrot", "las la-cheese", "las la-cloud-meatball", "las la-cookie", "las la-drumstick-bite", "las la-egg", "las la-fish", "las la-hamburger", "las la-hotdog", "las la-ice-cream", "las la-lemon", "las la-pepper-hot", "las la-pizza-slice", "las la-seedling", "las la-stroopwafel", "las la-chess", "las la-chess-bishop", "las la-chess-board", "las la-chess-king", "las la-chess-knight", "las la-chess-pawn", "las la-chess-queen", "las la-chess-rook", "las la-dice", "las la-dice-d20", "las la-dice-d6", "las la-dice-five", "las la-dice-four", "las la-dice-one", "las la-dice-six", "las la-dice-three", "las la-dice-two", "las la-gamepad", "las la-ghost", "las la-headset", "las la-heart", "fab fa-playstation", "las la-puzzle-piece", "lab la-steam", "lab la-steam-square", "lab la-steam-symbol", "lab la-twitch", "lab la-xbox", "las la-genderless", "las la-mars", "las la-mars-double", "las la-mars-stroke", "las la-mars-stroke-h", "las la-mars-stroke-v", "las la-mercury", "las la-neuter", "las la-transgender", "las la-transgender-alt", "las la-venus", "las la-venus-double", "las la-venus-mars", "las la-book-dead", "las la-broom", "las la-cat", "las la-cloud-moon", "las la-crow", "las la-ghost", "las la-hat-wizard", "las la-mask", "las la-skull-crossbones", "las la-spider", "las la-toilet-paper", "las la-allergies", "las la-fist-raised", "las la-hand-holding", "las la-hand-holding-heart", "las la-hand-holding-usd", "las la-hand-lizard", "las la-hand-middle-finger", "las la-hand-paper", "las la-hand-peace", "las la-hand-point-down", "las la-hand-point-left", "las la-hand-point-right", "las la-hand-point-up", "las la-hand-pointer", "las la-hand-rock", "las la-hand-scissors", "las la-hand-spock", "las la-hands", "las la-hands-helping", "las la-handshake", "las la-praying-hands", "las la-thumbs-down", "las la-thumbs-up", "lab la-accessible-icon", "fas fa-ambulance", "las la-h-square", "las la-heart", "las la-heartbeat", "las la-hospital", "las la-medkit", "las la-plus-square", "las la-prescription", "las la-stethoscope", "las la-user-md", "las la-wheelchair", "las la-candy-cane", "las la-carrot", "las la-cookie-bite", "las la-gift", "las la-gifts", "fas fa-glass-cheers", "las la-holly-berry", "las la-mug-hot", "las la-sleigh", "las la-snowman", "las la-baby-carriage", "las la-bath", "las la-bed", "las la-briefcase", "las la-car", "las la-cocktail", "las la-coffee", "las la-concierge-bell", "las la-dice", "las la-dice-five", "las la-door-closed", "las la-door-open", "las la-dumbbell", "fas fa-glass-martini", "fas fa-glass-martini-alt", "las la-hot-tub", "las la-hotel", "las la-infinity", "las la-key", "las la-luggage-cart", "las la-shower", "las la-shuttle-van", "las la-smoking", "las la-smoking-ban", "fas fa-snowflake", "las la-spa", "las la-suitcase", "las la-suitcase-rolling", "las la-swimmer", "las la-swimming-pool", "las la-tv", "fas fa-umbrella-beach", "las la-utensils", "las la-wheelchair", "las la-wifi", "las la-bath", "las la-bed", "las la-blender", "las la-chair", "las la-couch", "las la-door-closed", "las la-door-open", "las la-dungeon", "las la-fan", "las la-shower", "las la-toilet-paper", "las la-tv", "las la-adjust", "las la-bolt", "las la-camera", "las la-camera-retro", "las la-chalkboard", "las la-clone", "las la-compress", "las la-compress-arrows-alt", "las la-expand", "las la-eye", "las la-eye-dropper", "fas fa-eye-slash", "las la-file-image", "las la-film", "las la-id-badge", "las la-id-card", "las la-image", "las la-images", "las la-photo-video", "las la-portrait", "las la-sliders-h", "las la-tint", "las la-award", "las la-ban", "las la-barcode", "las la-bars", "las la-beer", "las la-bell", "fas fa-bell-slash", "las la-blog", "las la-bug", "las la-bullhorn", "las la-bullseye", "fas fa-calculator", "las la-calendar", "las la-calendar-alt", "las la-calendar-check", "las la-calendar-minus", "las la-calendar-plus", "las la-calendar-times", "las la-certificate", "las la-check", "las la-check-circle", "las la-check-double", "las la-check-square", "las la-circle", "las la-clipboard", "las la-clone", "las la-cloud", "las la-cloud-download-alt", "las la-cloud-upload-alt", "las la-coffee", "las la-cog", "las la-cogs", "las la-copy", "las la-cut", "las la-database", "las la-dot-circle", "las la-download", "las la-edit", "las la-ellipsis-h", "las la-ellipsis-v", "las la-envelope", "las la-envelope-open", "las la-eraser", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "las la-external-link-alt", "las la-external-link-square-alt", "las la-eye", "fas fa-eye-slash", "las la-file", "las la-file-alt", "las la-file-download", "las la-file-export", "las la-file-import", "las la-file-upload", "las la-filter", "las la-fingerprint", "fas fa-flag", "fas fa-flag-checkered", "las la-folder", "las la-folder-open", "las la-frown", "fas fa-glasses", "las la-grip-horizontal", "las la-grip-lines", "las la-grip-lines-vertical", "las la-grip-vertical", "las la-hashtag", "las la-heart", "las la-history", "las la-home", "las la-i-cursor", "las la-info", "las la-info-circle", "fas fa-language", "las la-magic", "las la-marker", "las la-medal", "las la-meh", "las la-microphone", "las la-microphone-alt", "fas fa-microphone-slash", "las la-minus", "las la-minus-circle", "las la-minus-square", "las la-paste", "las la-pen", "las la-pen-alt", "las la-pen-fancy", "las la-pencil-alt", "las la-plus", "las la-plus-circle", "las la-plus-square", "las la-poo", "las la-qrcode", "las la-question", "las la-question-circle", "las la-quote-left", "las la-quote-right", "las la-redo", "las la-redo-alt", "las la-reply", "las la-reply-all", "las la-rss", "las la-rss-square", "las la-save", "las la-screwdriver", "las la-search", "las la-search-minus", "las la-search-plus", "las la-share", "las la-share-alt", "las la-share-alt-square", "las la-share-square", "las la-shield-alt", "las la-sign-in-alt", "las la-sign-out-alt", "las la-signal", "las la-sitemap", "las la-sliders-h", "las la-smile", "las la-sort", "las la-sort-alpha-down", "las la-sort-alpha-down-alt", "las la-sort-alpha-up", "las la-sort-alpha-up-alt", "las la-sort-amount-down", "las la-sort-amount-down-alt", "las la-sort-amount-up", "las la-sort-amount-up-alt", "las la-sort-down", "las la-sort-numeric-down", "las la-sort-numeric-down-alt", "las la-sort-numeric-up", "las la-sort-numeric-up-alt", "las la-sort-up", "las la-star", "las la-star-half", "las la-sync", "las la-sync-alt", "las la-thumbs-down", "las la-thumbs-up", "las la-times", "las la-times-circle", "las la-toggle-off", "las la-toggle-on", "las la-tools", "las la-trash", "las la-trash-alt", "las la-trash-restore", "las la-trash-restore-alt", "las la-trophy", "las la-undo", "las la-undo-alt", "las la-upload", "las la-user", "las la-user-alt", "las la-user-circle", "las la-volume-down", "las la-volume-mute", "las la-volume-off", "las la-volume-up", "las la-wifi", "las la-wrench", "las la-box", "las la-boxes", "las la-clipboard-check", "las la-clipboard-list", "las la-dolly", "fas fa-dolly-flatbed", "las la-hard-hat", "las la-pallet", "las la-shipping-fast", "las la-truck", "las la-warehouse", "fas fa-ambulance", "las la-anchor", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "las la-bath", "las la-bed", "las la-beer", "las la-bell", "fas fa-bell-slash", "las la-bicycle", "fas fa-binoculars", "las la-birthday-cake", "las la-blind", "las la-bomb", "las la-book", "las la-bookmark", "las la-briefcase", "las la-building", "las la-car", "las la-coffee", "las la-crosshairs", "las la-directions", "fas fa-dollar-sign", "las la-draw-polygon", "las la-eye", "fas fa-eye-slash", "las la-fighter-jet", "las la-fire", "las la-fire-alt", "las la-fire-extinguisher", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flask", "las la-gamepad", "las la-gavel", "las la-gift", "fas fa-glass-martini", "las la-globe", "las la-graduation-cap", "las la-h-square", "las la-heart", "las la-heartbeat", "las la-helicopter", "las la-home", "las la-hospital", "las la-image", "las la-images", "las la-industry", "las la-info", "las la-info-circle", "las la-key", "fas fa-landmark", "fas fa-layer-group", "las la-leaf", "las la-lemon", "las la-life-ring", "las la-lightbulb", "las la-location-arrow", "las la-low-vision", "las la-magnet", "las la-male", "las la-map", "las la-map-marker", "las la-map-marker-alt", "las la-map-pin", "las la-map-signs", "las la-medkit", "las la-money-bill", "las la-money-bill-alt", "las la-motorcycle", "las la-music", "las la-newspaper", "las la-parking", "las la-paw", "las la-phone", "las la-phone-alt", "las la-phone-square", "las la-phone-square-alt", "las la-phone-volume", "fas fa-plane", "las la-plug", "las la-plus", "las la-plus-square", "las la-print", "las la-recycle", "las la-restroom", "las la-road", "las la-rocket", "las la-route", "las la-search", "las la-search-minus", "las la-search-plus", "las la-ship", "las la-shoe-prints", "las la-shopping-bag", "las la-shopping-basket", "las la-shopping-cart", "las la-shower", "las la-snowplow", "las la-street-view", "las la-subway", "las la-suitcase", "las la-tag", "las la-tags", "las la-taxi", "las la-thumbtack", "las la-ticket-alt", "las la-tint", "las la-traffic-light", "las la-train", "las la-tram", "las la-tree", "las la-trophy", "las la-truck", "las la-tty", "fas fa-umbrella", "las la-university", "las la-utensil-spoon", "las la-utensils", "las la-wheelchair", "las la-wifi", "fas fa-wine-glass", "las la-wrench", "las la-anchor", "fas fa-binoculars", "las la-compass", "las la-dharmachakra", "las la-frog", "las la-ship", "las la-skull-crossbones", "las la-swimmer", "las la-water", "las la-wind", "las la-ad", "las la-bullhorn", "las la-bullseye", "fas fa-comment-dollar", "fas fa-comments-dollar", "las la-envelope-open-text", "fas fa-funnel-dollar", "las la-lightbulb", "las la-mail-bulk", "las la-poll", "las la-poll-h", "fas fa-search-dollar", "las la-search-location", "fas fa-calculator", "las la-divide", "las la-equals", "las la-greater-than", "las la-greater-than-equal", "las la-infinity", "las la-less-than", "las la-less-than-equal", "las la-minus", "las la-not-equal", "las la-percentage", "las la-plus", "las la-square-root-alt", "las la-subscript", "las la-superscript", "las la-times", "las la-wave-square", "las la-allergies", "fas fa-ambulance", "las la-band-aid", "las la-biohazard", "las la-bone", "las la-bong", "las la-book-medical", "las la-brain", "las la-briefcase-medical", "las la-burn", "las la-cannabis", "las la-capsules", "las la-clinic-medical", "las la-comment-medical", "las la-crutch", "las la-diagnoses", "las la-dna", "las la-file-medical", "las la-file-medical-alt", "las la-file-prescription", "las la-first-aid", "las la-heart", "las la-heartbeat", "las la-hospital", "las la-hospital-alt", "las la-hospital-symbol", "las la-id-card-alt", "las la-joint", "fas fa-laptop-medical", "las la-microscope", "las la-mortar-pestle", "las la-notes-medical", "las la-pager", "las la-pills", "las la-plus", "las la-poop", "las la-prescription", "las la-prescription-bottle", "las la-prescription-bottle-alt", "las la-procedures", "las la-radiation", "las la-radiation-alt", "las la-smoking", "las la-smoking-ban", "las la-star-of-life", "las la-stethoscope", "las la-syringe", "las la-tablets", "las la-teeth", "las la-teeth-open", "las la-thermometer", "las la-tooth", "las la-user-md", "las la-user-nurse", "las la-vial", "las la-vials", "las la-weight", "las la-x-ray", "las la-archive", "las la-box-open", "las la-couch", "las la-dolly", "las la-people-carry", "las la-route", "las la-sign", "las la-suitcase", "las la-tape", "las la-truck-loading", "las la-truck-moving", "fas fa-wine-glass", "las la-drum", "las la-drum-steelpan", "las la-file-audio", "las la-guitar", "las la-headphones", "las la-headphones-alt", "las la-microphone", "las la-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "las la-music", "lab la-napster", "fas fa-play", "las la-record-vinyl", "las la-sliders-h", "lab la-soundcloud", "lab la-spotify", "las la-volume-down", "las la-volume-mute", "las la-volume-off", "las la-volume-up", "fas fa-ambulance", "las la-anchor", "las la-archive", "las la-award", "las la-baby-carriage", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "las la-bath", "las la-bed", "las la-beer", "las la-bell", "las la-bicycle", "fas fa-binoculars", "las la-birthday-cake", "las la-blender", "las la-bomb", "las la-book", "las la-book-dead", "las la-bookmark", "las la-briefcase", "las la-broadcast-tower", "las la-bug", "las la-building", "las la-bullhorn", "las la-bullseye", "las la-bus", "fas fa-calculator", "las la-calendar", "las la-calendar-alt", "las la-camera", "las la-camera-retro", "las la-candy-cane", "las la-car", "las la-carrot", "las la-church", "las la-clipboard", "las la-cloud", "las la-coffee", "las la-cog", "las la-cogs", "las la-compass", "las la-cookie", "las la-cookie-bite", "las la-copy", "las la-cube", "las la-cubes", "las la-cut", "las la-dice", "las la-dice-d20", "las la-dice-d6", "las la-dice-five", "las la-dice-four", "las la-dice-one", "las la-dice-six", "las la-dice-three", "las la-dice-two", "las la-digital-tachograph", "las la-door-closed", "las la-door-open", "las la-drum", "las la-drum-steelpan", "las la-envelope", "las la-envelope-open", "las la-eraser", "las la-eye", "las la-eye-dropper", "las la-fax", "las la-feather", "las la-feather-alt", "las la-fighter-jet", "las la-file", "las la-file-alt", "las la-file-prescription", "las la-film", "las la-fire", "las la-fire-alt", "las la-fire-extinguisher", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flask", "las la-futbol", "las la-gamepad", "las la-gavel", "las la-gem", "las la-gift", "las la-gifts", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-whiskey", "fas fa-glasses", "las la-globe", "las la-graduation-cap", "las la-guitar", "las la-hat-wizard", "las la-hdd", "las la-headphones", "las la-headphones-alt", "las la-headset", "las la-heart", "las la-heart-broken", "las la-helicopter", "las la-highlighter", "las la-holly-berry", "las la-home", "las la-hospital", "fas fa-hourglass", "las la-igloo", "las la-image", "las la-images", "las la-industry", "las la-key", "las la-keyboard", "fas fa-laptop", "las la-leaf", "las la-lemon", "las la-life-ring", "las la-lightbulb", "las la-lock", "las la-lock-open", "las la-magic", "las la-magnet", "las la-map", "las la-map-marker", "las la-map-marker-alt", "las la-map-pin", "las la-map-signs", "las la-marker", "las la-medal", "las la-medkit", "las la-memory", "las la-microchip", "las la-microphone", "las la-microphone-alt", "las la-mitten", "las la-mobile", "las la-mobile-alt", "las la-money-bill", "las la-money-bill-alt", "las la-money-check", "las la-money-check-alt", "las la-moon", "las la-motorcycle", "las la-mug-hot", "las la-newspaper", "las la-paint-brush", "fas fa-paper-plane", "las la-paperclip", "las la-paste", "las la-paw", "las la-pen", "las la-pen-alt", "las la-pen-fancy", "las la-pen-nib", "las la-pencil-alt", "las la-phone", "las la-phone-alt", "fas fa-plane", "las la-plug", "las la-print", "las la-puzzle-piece", "las la-ring", "las la-road", "las la-rocket", "las la-ruler-combined", "las la-ruler-horizontal", "las la-ruler-vertical", "las la-satellite", "las la-satellite-dish", "las la-save", "las la-school", "las la-screwdriver", "las la-scroll", "las la-sd-card", "las la-search", "las la-shield-alt", "las la-shopping-bag", "las la-shopping-basket", "las la-shopping-cart", "las la-shower", "las la-sim-card", "las la-skull-crossbones", "las la-sleigh", "fas fa-snowflake", "las la-snowplow", "las la-space-shuttle", "las la-star", "las la-sticky-note", "las la-stopwatch", "las la-stroopwafel", "las la-subway", "las la-suitcase", "las la-sun", "las la-tablet", "las la-tablet-alt", "las la-tachometer-alt", "las la-tag", "las la-tags", "las la-taxi", "las la-thumbtack", "las la-ticket-alt", "las la-toilet", "las la-toolbox", "las la-tools", "las la-train", "las la-tram", "las la-trash", "las la-trash-alt", "las la-tree", "las la-trophy", "las la-truck", "las la-tv", "fas fa-umbrella", "las la-university", "las la-unlock", "las la-unlock-alt", "las la-utensil-spoon", "las la-utensils", "las la-wallet", "las la-weight", "las la-wheelchair", "fas fa-wine-glass", "las la-wrench", "lab la-500px", "lab la-accusoft", "lab la-adn", "lab la-adobe", "lab la-adversal", "lab la-affiliatetheme", "lab la-airbnb", "lab la-algolia", "lab la-amazon", "lab la-amilia", "lab la-android", "lab la-angellist", "lab la-angrycreative", "fab fa-angular", "lab la-app-store", "lab la-app-store-ios", "lab la-apper", "lab la-apple", "lab la-artstation", "lab la-asymmetrik", "fab fa-atlassian", "lab la-audible", "lab la-autoprefixer", "lab la-avianex", "lab la-aviato", "lab la-aws", "las la-backspace", "lab la-bandcamp", "lab la-battle-net", "lab la-behance", "lab la-behance-square", "lab la-bimobject", "lab la-bitbucket", "lab la-bity", "fab fa-black-tie", "fab fa-blackberry", "las la-blender-phone", "lab la-blogger", "lab la-blogger-b", "lab la-bootstrap", "lab la-buffer", "lab la-buromobelexperte", "fab fa-buy-n-large", "fab fa-buysellads", "lab la-canadian-maple-leaf", "lab la-centercode", "lab la-centos", "lab la-chrome", "lab la-chromecast", "lab la-cloudscale", "lab la-cloudsmith", "lab la-cloudversify", "lab la-codepen", "lab la-codiepie", "lab la-confluence", "lab la-connectdevelop", "lab la-contao", "lab la-cotton-bureau", "lab la-cpanel", "lab la-creative-commons", "lab la-creative-commons-by", "lab la-creative-commons-nc", "lab la-creative-commons-nc-eu", "lab la-creative-commons-nc-jp", "lab la-creative-commons-nd", "lab la-creative-commons-pd", "lab la-creative-commons-pd-alt", "lab la-creative-commons-remix", "lab la-creative-commons-sa", "lab la-creative-commons-sampling", "lab la-creative-commons-sampling-plus", "lab la-creative-commons-share", "lab la-creative-commons-zero", "las la-crown", "lab la-css3", "lab la-css3-alt", "lab la-cuttlefish", "lab la-dashcube", "lab la-delicious", "lab la-deploydog", "lab la-deskpro", "lab la-dev", "lab la-deviantart", "lab la-dhl", "lab la-diaspora", "lab la-digg", "lab la-digital-ocean", "lab la-discord", "lab la-discourse", "lab la-dochub", "lab la-docker", "lab la-draft2digital", "lab la-dribbble", "lab la-dribbble-square", "lab la-dropbox", "lab la-drupal", "las la-dumpster-fire", "lab la-dyalog", "lab la-earlybirds", "lab la-ebay", "lab la-edge", "lab la-elementor", "lab la-ello", "lab la-ember", "lab la-empire", "lab la-envira", "fab fa-erlang", "lab la-etsy", "lab la-evernote", "lab la-expeditedssl", "lab la-facebook", "lab la-facebook-f", "lab la-facebook-messenger", "lab la-facebook-square", "lab la-fedex", "lab la-fedora", "lab la-figma", "las la-file-csv", "lab la-firefox", "lab la-first-order", "lab la-first-order-alt", "lab la-firstdraft", "lab la-flickr", "lab la-flipboard", "lab la-fly", "lab la-font-awesome", "lab la-font-awesome-alt", "fab fa-font-awesome-flag", "lab la-fonticons", "lab la-fonticons-fi", "lab la-fort-awesome", "lab la-fort-awesome-alt", "lab la-forumbee", "lab la-foursquare", "lab la-free-code-camp", "lab la-freebsd", "lab la-fulcrum", "lab la-get-pocket", "lab la-git", "lab la-git-alt", "lab la-git-square", "lab la-github", "lab la-github-alt", "lab la-github-square", "lab la-gitkraken", "fab fa-gitlab", "lab la-gitter", "lab la-glide", "lab la-glide-g", "lab la-gofore", "lab la-goodreads", "lab la-goodreads-g", "lab la-google", "lab la-google-drive", "fab fa-google-play", "lab la-google-plus", "lab la-google-plus-g", "lab la-google-plus-square", "lab la-gratipay", "lab la-grav", "lab la-gripfire", "lab la-grunt", "lab la-gulp", "lab la-hacker-news", "lab la-hacker-news-square", "lab la-hackerrank", "lab la-hips", "lab la-hire-a-helper", "lab la-hooli", "lab la-hornbill", "lab la-hotjar", "lab la-houzz", "lab la-html5", "lab la-hubspot", "lab la-imdb", "lab la-instagram", "lab la-intercom", "lab la-internet-explorer", "lab la-invision", "lab la-ioxhost", "lab la-itch-io", "lab la-itunes", "lab la-itunes-note", "lab la-java", "lab la-jenkins", "lab la-jira", "lab la-joget", "fab fa-joomla", "lab la-js", "lab la-js-square", "lab la-jsfiddle", "lab la-kaggle", "lab la-keybase", "lab la-keycdn", "lab la-kickstarter", "lab la-kickstarter-k", "lab la-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "lab la-leanpub", "lab la-less", "lab la-line", "lab la-linkedin", "lab la-linkedin-in", "lab la-linode", "lab la-linux", "lab la-lyft", "lab la-magento", "lab la-mailchimp", "lab la-mandalorian", "lab la-markdown", "lab la-mastodon", "lab la-maxcdn", "lab la-mdb", "lab la-medapps", "lab la-medium", "lab la-medium-m", "lab la-medrt", "lab la-meetup", "lab la-megaport", "lab la-mendeley", "lab la-microsoft", "lab la-mix", "lab la-mixcloud", "lab la-mizuni", "lab la-modx", "lab la-monero", "lab la-neos", "las la-network-wired", "lab la-nimblr", "lab la-node", "lab la-node-js", "lab la-npm", "lab la-ns8", "lab la-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "lab la-opencart", "lab la-openid", "lab la-opera", "lab la-optin-monster", "lab la-orcid", "lab la-osi", "lab la-page4", "lab la-pagelines", "lab la-palfed", "lab la-patreon", "lab la-periscope", "lab la-phabricator", "lab la-phoenix-framework", "lab la-phoenix-squadron", "lab la-php", "lab la-pied-piper", "lab la-pied-piper-alt", "lab la-pied-piper-hat", "lab la-pied-piper-pp", "lab la-pinterest", "lab la-pinterest-p", "lab la-pinterest-square", "lab la-product-hunt", "lab la-pushed", "lab la-python", "lab la-qq", "lab la-quinscape", "lab la-quora", "lab la-r-project", "lab la-raspberry-pi", "lab la-ravelry", "lab la-react", "lab la-reacteurope", "lab la-readme", "lab la-rebel", "lab la-red-river", "lab la-reddit", "lab la-reddit-alien", "lab la-reddit-square", "lab la-redhat", "lab la-renren", "lab la-replyd", "lab la-researchgate", "lab la-resolving", "lab la-rev", "lab la-rocketchat", "lab la-rockrms", "lab la-safari", "lab la-salesforce", "lab la-sass", "lab la-schlix", "lab la-scribd", "lab la-searchengin", "lab la-sellcast", "lab la-sellsy", "lab la-servicestack", "lab la-shirtsinbulk", "lab la-shopware", "las la-signature", "lab la-simplybuilt", "lab la-sistrix", "lab la-sith", "lab la-sketch", "las la-skull", "fab fa-skyatlas", "lab la-skype", "fab fa-slack", "fab fa-slack-hash", "lab la-slideshare", "lab la-snapchat", "lab la-snapchat-ghost", "lab la-snapchat-square", "lab la-sourcetree", "lab la-speakap", "lab la-speaker-deck", "lab la-squarespace", "lab la-stack-exchange", "lab la-stack-overflow", "lab la-stackpath", "lab la-staylinked", "lab la-sticker-mule", "lab la-strava", "lab la-studiovinari", "lab la-stumbleupon", "lab la-stumbleupon-circle", "lab la-superpowers", "lab la-supple", "lab la-suse", "lab la-swift", "lab la-symfony", "lab la-teamspeak", "lab la-telegram", "fab fa-telegram-plane", "lab la-tencent-weibo", "lab la-the-red-yeti", "lab la-themeco", "lab la-themeisle", "lab la-think-peaks", "lab la-trade-federation", "lab la-trello", "lab la-tripadvisor", "lab la-tumblr", "lab la-tumblr-square", "lab la-twitter", "lab la-twitter-square", "lab la-typo3", "lab la-uber", "lab la-ubuntu", "lab la-uikit", "lab la-umbraco", "lab la-uniregistry", "lab la-untappd", "lab la-ups", "lab la-usb", "lab la-usps", "lab la-ussunnah", "lab la-vaadin", "lab la-viacoin", "lab la-viadeo", "lab la-viadeo-square", "lab la-viber", "lab la-vimeo", "lab la-vimeo-square", "lab la-vimeo-v", "lab la-vine", "lab la-vk", "lab la-vnv", "las la-vr-cardboard", "lab la-vuejs", "lab la-waze", "lab la-weebly", "lab la-weibo", "las la-weight-hanging", "lab la-weixin", "lab la-whatsapp", "lab la-whatsapp-square", "lab la-whmcs", "lab la-wikipedia-w", "lab la-windows", "lab la-wix", "lab la-wolf-pack-battalion", "lab la-wordpress", "lab la-wordpress-simple", "lab la-wpbeginner", "lab la-wpexplorer", "lab la-wpforms", "lab la-wpressr", "lab la-xing", "lab la-xing-square", "lab la-y-combinator", "lab la-yahoo", "lab la-yammer", "lab la-yandex", "lab la-yandex-international", "lab la-yarn", "lab la-yelp", "lab la-yoast", "lab la-youtube-square", "lab la-zhihu", "lab la-alipay", "lab la-amazon-pay", "lab la-apple-pay", "las la-bell", "lab la-bitcoin", "las la-bookmark", "lab la-btc", "las la-bullhorn", "las la-camera", "las la-camera-retro", "las la-cart-arrow-down", "las la-cart-plus", "lab la-cc-amazon-pay", "lab la-cc-amex", "lab la-cc-apple-pay", "lab la-cc-diners-club", "lab la-cc-discover", "lab la-cc-jcb", "lab la-cc-mastercard", "lab la-cc-paypal", "lab la-cc-stripe", "lab la-cc-visa", "las la-certificate", "las la-credit-card", "lab la-ethereum", "las la-gem", "las la-gift", "lab la-google-wallet", "las la-handshake", "las la-heart", "las la-key", "las la-money-check", "las la-money-check-alt", "lab la-paypal", "las la-receipt", "las la-shopping-bag", "las la-shopping-basket", "las la-shopping-cart", "las la-star", "lab la-stripe", "lab la-stripe-s", "las la-tag", "las la-tags", "las la-thumbs-down", "las la-thumbs-up", "las la-trophy", "las la-award", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "las la-bullhorn", "las la-check-double", "las la-democrat", "las la-donate", "las la-dove", "las la-fist-raised", "fas fa-flag-usa", "las la-handshake", "las la-person-booth", "las la-piggy-bank", "las la-republican", "las la-vote-yea", "las la-ankh", "las la-atom", "las la-bible", "las la-church", "las la-cross", "las la-dharmachakra", "las la-dove", "las la-gopuram", "las la-hamsa", "las la-hanukiah", "las la-haykal", "las la-jedi", "las la-journal-whills", "las la-kaaba", "las la-khanda", "las la-menorah", "las la-mosque", "las la-om", "las la-pastafarianism", "las la-peace", "fas fa-place-of-worship", "las la-pray", "las la-praying-hands", "las la-quran", "las la-star-and-crescent", "las la-star-of-david", "las la-synagogue", "las la-torah", "las la-torii-gate", "las la-vihara", "las la-yin-yang", "las la-atom", "las la-biohazard", "las la-brain", "las la-burn", "las la-capsules", "las la-clipboard-check", "las la-dna", "las la-eye-dropper", "las la-filter", "las la-fire", "las la-fire-alt", "fas fa-flask", "las la-frog", "las la-magnet", "las la-microscope", "las la-mortar-pestle", "las la-pills", "las la-prescription-bottle", "las la-radiation", "las la-radiation-alt", "las la-seedling", "las la-skull-crossbones", "las la-syringe", "las la-tablets", "las la-temperature-high", "las la-temperature-low", "las la-vial", "las la-vials", "fab fa-galactic-republic", "fab fa-galactic-senate", "las la-globe", "las la-jedi", "lab la-jedi-order", "las la-journal-whills", "las la-meteor", "las la-moon", "lab la-old-republic", "las la-robot", "las la-rocket", "las la-satellite", "las la-satellite-dish", "las la-space-shuttle", "las la-user-astronaut", "las la-ban", "las la-bug", "las la-door-closed", "las la-door-open", "las la-dungeon", "las la-eye", "fas fa-eye-slash", "las la-file-contract", "las la-file-signature", "las la-fingerprint", "las la-id-badge", "las la-id-card", "las la-id-card-alt", "las la-key", "las la-lock", "las la-lock-open", "las la-mask", "las la-passport", "las la-shield-alt", "las la-unlock", "las la-unlock-alt", "las la-user-lock", "las la-user-secret", "las la-user-shield", "las la-bookmark", "las la-calendar", "las la-certificate", "las la-circle", "las la-cloud", "las la-comment", "las la-file", "las la-folder", "las la-heart", "las la-heart-broken", "las la-map-marker", "fas fa-play", "las la-shapes", "las la-square", "las la-star", "las la-bell", "las la-birthday-cake", "las la-camera", "las la-comment", "las la-comment-alt", "las la-envelope", "las la-hashtag", "las la-heart", "las la-icons", "las la-image", "las la-images", "las la-map-marker", "las la-map-marker-alt", "las la-photo-video", "las la-poll", "las la-poll-h", "las la-retweet", "las la-share", "las la-share-alt", "las la-share-square", "las la-star", "las la-thumbs-down", "las la-thumbs-up", "las la-thumbtack", "las la-user", "las la-user-circle", "las la-user-friends", "las la-user-plus", "las la-users", "las la-video", "las la-asterisk", "las la-atom", "las la-certificate", "las la-circle-notch", "las la-cog", "las la-compact-disc", "las la-compass", "las la-crosshairs", "las la-dharmachakra", "las la-fan", "las la-haykal", "las la-life-ring", "las la-palette", "las la-ring", "fas fa-slash", "fas fa-snowflake", "las la-spinner", "las la-stroopwafel", "las la-sun", "las la-sync", "las la-sync-alt", "las la-yin-yang", "las la-baseball-ball", "las la-basketball-ball", "las la-biking", "las la-bowling-ball", "las la-dumbbell", "las la-football-ball", "las la-futbol", "las la-golf-ball", "las la-hockey-puck", "las la-quidditch", "las la-running", "las la-skating", "las la-skiing", "las la-skiing-nordic", "las la-snowboarding", "las la-swimmer", "las la-table-tennis", "las la-volleyball-ball", "las la-allergies", "las la-broom", "las la-cloud-sun", "las la-cloud-sun-rain", "las la-frog", "las la-rainbow", "las la-seedling", "fas fa-umbrella", "las la-ban", "las la-battery-empty", "las la-battery-full", "las la-battery-half", "las la-battery-quarter", "las la-battery-three-quarters", "las la-bell", "fas fa-bell-slash", "las la-calendar", "las la-calendar-alt", "las la-calendar-check", "las la-calendar-day", "las la-calendar-minus", "las la-calendar-plus", "las la-calendar-times", "las la-calendar-week", "las la-cart-arrow-down", "las la-cart-plus", "las la-comment", "las la-comment-alt", "fas fa-comment-slash", "las la-compass", "las la-door-closed", "las la-door-open", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "las la-eye", "fas fa-eye-slash", "las la-file", "las la-file-alt", "las la-folder", "las la-folder-open", "las la-gas-pump", "las la-info", "las la-info-circle", "las la-lightbulb", "las la-lock", "las la-lock-open", "las la-map-marker", "las la-map-marker-alt", "las la-microphone", "las la-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "las la-minus", "las la-minus-circle", "las la-minus-square", "las la-parking", "las la-phone", "las la-phone-alt", "fas fa-phone-slash", "las la-plus", "las la-plus-circle", "las la-plus-square", "las la-print", "las la-question", "las la-question-circle", "las la-shield-alt", "las la-shopping-cart", "las la-sign-in-alt", "las la-sign-out-alt", "las la-signal", "las la-smoking-ban", "las la-star", "las la-star-half", "las la-star-half-alt", "las la-stream", "las la-thermometer-empty", "las la-thermometer-full", "las la-thermometer-half", "las la-thermometer-quarter", "las la-thermometer-three-quarters", "las la-thumbs-down", "las la-thumbs-up", "las la-tint", "fas fa-tint-slash", "las la-toggle-off", "las la-toggle-on", "las la-unlock", "las la-unlock-alt", "las la-user", "las la-user-alt", "fas fa-user-alt-slash", "fas fa-user-slash", "las la-video", "fas fa-video-slash", "las la-volume-down", "las la-volume-mute", "las la-volume-off", "las la-volume-up", "las la-wifi", "lab la-acquisitions-incorporated", "las la-book-dead", "lab la-critical-role", "lab la-d-and-d", "lab la-d-and-d-beyond", "las la-dice-d20", "las la-dice-d6", "las la-dragon", "las la-dungeon", "lab la-fantasy-flight-games", "las la-fist-raised", "las la-hat-wizard", "lab la-penny-arcade", "las la-ring", "las la-scroll", "las la-skull-crossbones", "lab la-wizards-of-the-coast", "las la-archway", "fas fa-atlas", "las la-bed", "las la-bus", "las la-bus-alt", "las la-cocktail", "las la-concierge-bell", "las la-dumbbell", "fas fa-glass-martini", "fas fa-glass-martini-alt", "las la-globe-africa", "las la-globe-americas", "las la-globe-asia", "las la-globe-europe", "las la-hot-tub", "las la-hotel", "las la-luggage-cart", "las la-map", "las la-map-marked", "las la-map-marked-alt", "las la-monument", "las la-passport", "fas fa-plane", "fas fa-plane-arrival", "fas fa-plane-departure", "las la-shuttle-van", "las la-spa", "las la-suitcase", "las la-suitcase-rolling", "las la-swimmer", "las la-swimming-pool", "las la-taxi", "las la-tram", "las la-tv", "fas fa-umbrella-beach", "fas fa-wine-glass", "fas fa-wine-glass-alt", "lab la-accessible-icon", "las la-address-book", "las la-address-card", "las la-baby", "las la-bed", "las la-biking", "las la-blind", "las la-chalkboard-teacher", "las la-child", "las la-female", "las la-frown", "las la-hiking", "las la-id-badge", "las la-id-card", "las la-id-card-alt", "las la-male", "las la-meh", "las la-people-carry", "las la-person-booth", "las la-poo", "las la-portrait", "las la-power-off", "las la-pray", "las la-restroom", "las la-running", "las la-skating", "las la-skiing", "las la-skiing-nordic", "las la-smile", "las la-snowboarding", "las la-street-view", "las la-swimmer", "las la-user", "las la-user-alt", "fas fa-user-alt-slash", "las la-user-astronaut", "las la-user-check", "las la-user-circle", "las la-user-clock", "las la-user-cog", "las la-user-edit", "las la-user-friends", "las la-user-graduate", "las la-user-injured", "las la-user-lock", "las la-user-md", "las la-user-minus", "las la-user-ninja", "las la-user-nurse", "las la-user-plus", "las la-user-secret", "las la-user-shield", "fas fa-user-slash", "las la-user-tag", "las la-user-tie", "las la-user-times", "las la-users", "las la-users-cog", "las la-walking", "las la-wheelchair", "las la-bolt", "las la-cloud", "las la-cloud-meatball", "las la-cloud-moon", "las la-cloud-moon-rain", "las la-cloud-rain", "las la-cloud-showers-heavy", "las la-cloud-sun", "las la-cloud-sun-rain", "las la-meteor", "las la-moon", "las la-poo-storm", "las la-rainbow", "las la-smog", "fas fa-snowflake", "las la-sun", "las la-temperature-high", "las la-temperature-low", "fas fa-umbrella", "las la-water", "las la-wind", "fas fa-glass-whiskey", "las la-icicles", "las la-igloo", "las la-mitten", "las la-skating", "las la-skiing", "las la-skiing-nordic", "las la-snowboarding", "las la-snowplow", "las la-tram"]

/*
var icons = []
var items = document.querySelectorAll('li div span i');
for (i = 0; i < items.length; i++) {
    // console.log();
    var preico = items[i].classList[0]
    var ico = items[i].classList[1]

    if (ico != 'la-arrow-right') {

        var res = ico.split("la");

        if (res.length == 2) {
            icons.push(`${preico} ${ico}`)
        }
    }

}

console.log(icons)*/

$('.icon-select').on('click', function(event) {
    console.log('modal')

    tpl = ``
    icons2.forEach(function(item) {

        if (item.indexOf('fas') > -1 || item.indexOf('fab') > -1) {

        } else {
            tpl += ` <button type="button" icon="${item}" class="btn btn-light icon-selected" style="font-size: 21px;margin-bottom: 3px;">
            <i class="${item}"></i></button>`
        }
        // do something with `item`

        //  <i class="lni lni-cart"></i>


    });
    $('.icons-show').append(tpl)
    $('#myModal').modal('show');

});




$(function() {




    $('body').on('click', '.icon-selected', function() {
        var selected = $(this).attr("icon")
            //console.log(selected)

        $('.icon').val(selected)
        $('.icon-select').empty().html(`<i class="la-2x ${selected}"></i>`)
        $('#myModal').modal('hide');

    });
});




$('.id-category').on('change.bootstrapSwitch', function(e) {
    var id = $(this).attr('id-categorie')
    var status = ((e.target.checked == true) ? 1 : 0)
    categoryUpdate(id, status)

});

function categoryUpdate(id, status) {

    $.ajax({
        url: "/loja/update/category-update",
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

function deleteseller(url) {
    var msj = 'Deseja Apagar esse vendedor?';
    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/seller/delete",
            type: "POST",
            data: {
                "url": url
            },
            success: function(response) {
                console.log('update successful')
                $(`#${url}`).remove()
            },
            error: function() {
                alert("error");
            }

        });

    }
}

function deleteBanner(name) {
    var msj = 'Deseja Apagar esse Banner?';
    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/banner/delete",
            type: "POST",
            data: {
                "name": name
            },
            success: function(response) {
                console.log('update successful')
                $(`[banner='${name}']`).remove()

            },
            error: function() {
                alert("error");
            }

        });

    }
}


function deleteStory(name) {
    var msj = 'Deseja Apagar esse Story?';
    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/story/delete",
            type: "POST",
            data: {
                "name": name
            },
            success: function(response) {
                console.log('update successful')
                $(`[story='${name}']`).remove()

            },
            error: function() {
                alert("error");
            }

        });

    }
}



function saveStory(name) {

    var url = $(`input[bannerUrl='${name}']`).val()
    var storyButtonText = $(`input[storyButtonText='${name}']`).val()
    if (url) {
        var msj = 'Todos os Clicks serão redirecionados para ' + url;
    } else {
        var msj = 'Ao clicar no banner não será redirecionado.';
    }

    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/story/update-url",
            type: "POST",
            data: {
                "name": name,
                "url": url,

            },
            success: function(response) {
                console.log('update successful')

            },
            error: function() {
                alert("error");
            }

        });

    }
}

function saveBanner(name) {

    var url = $(`input[bannerUrl='${name}']`).val()

    if (url) {
        var msj = 'Todos os Clicks serão redirecionados para ' + url;
    } else {
        var msj = 'Ao clicar no banner não será redirecionado.';
    }

    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/banner/update-url",
            type: "POST",
            data: {
                "name": name,
                "url": url,

            },
            success: function(response) {
                console.log('update successful')

            },
            error: function() {
                alert("error");
            }

        });

    }
}




function deleteproduct(id_product) {
    var msj = 'Deseja Apagar esse Produtos e Todas as Suas imagens ?';
    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/product/delete",
            type: "POST",
            data: {
                "id_product": id_product
            },
            success: function(response) {
                console.log('update successful')
                $(`#${id_product}`).remove()
            },
            error: function() {
                alert("error");
            }

        });

    }
}


function deletecategory(id_categorie) {
    var msj = 'Deseja Apagar essa Categoria, todos os Produtos e Todas as Suas imagens ?';
    if (!confirm(msj)) {
        return false;
    } else {

        $.ajax({
            url: "/loja/categorie/delete",
            type: "POST",
            data: {
                "id_categorie": id_categorie
            },
            success: function(response) {
                console.log('update successful')
                $(`#${id_categorie}`).remove()
            },
            error: function() {
                alert("error");
            }

        });

    }
}



function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + ' mil' : Math.sign(num) * Math.abs(num)
}



function dash(dateStr) {

    if (getParam('tour') == 'true') {
        console.log(getParam('tour'))


        $('.dashboard_info').empty().html(`<div class="col-md-6 col-xl-6 col-12 ">
        
        <p class="mb-2">✌️ Essa é nossa plataforma catalogo por whatsapp.
        Para aprender a usar você pode ver esse video.👇 <small>(3mim duração)</small></p>
        
        <video controls >
        <source src="/assets.admin/video/video2.mp4" type="video/mp4" />
        </video>
        <a href="/loja/dashboard" class="btn btn-success mb-3">😁 Eu aprendi! </a>
        <a href="/loja/dashboard" class="btn btn-danger mb-3">😟 Pular essa etapa. </a>
        
        </div>
        
       
        
        `)

        $('.sellers_info').remove()

    } else {

        $('.load').empty().append(`<img width="25" src="/assets.admin/images/load.gif">`)
        var range = dateStr.split(' ')

        $.ajax({
            url: "/loja/api/dashboard",
            type: "POST",
            data: {
                "start": range[0],
                "end": ((range[2]) ? range[2] : range[0])
            },
            success: function(response) {

                $('.sum_orders').text(kFormatter(response.sum_orders))
                $('.total_orders').text(response.total_orders)
                $('.ticket').text(kFormatter((response.sum_orders / response.total_orders > 0 ? (response.sum_orders / response.total_orders).toFixed(2) : 0)))
                $('.order_views').attr('href', `/loja/orders?start=${range[0]}&end=${((range[2]) ? range[2] : range[0])}`)

            },
            error: function() {
                alert("error");
            }

        });

    }


}


var months = ["", "Jan", "February", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dec"
];


var e = new Date,
    r = {
        chart: {
            height: 296,
            type: "area"
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "smooth",
            width: 4
        },
        series: [{
            name: "Pedidos",
            data: [0]
        }, {
            name: "Pedidos2",
            data: [1000]
        }],
        zoom: {
            enabled: !1
        },
        legend: {
            show: !1
        },
        colors: ["#43d39e"],
        xaxis: {

            categories: ['0'],
            tickAmount: 6,

        },
        yaxis: {
            labels: {
                formatter: function(t) {
                    return kFormatter(t)
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [45, 100]
            }
        }
    };
var chart = new ApexCharts(document.querySelector("#revenue-chart"), r)
chart.render();


function order(dateStr) {

    $('.left-timeline').empty().append(`<img width="25" src="/assets.admin/images/load.gif">`)
    var range = dateStr.split(' ')

    $.ajax({
        url: "/loja/api/orders",
        type: "POST",
        data: {
            "start": range[0],
            "end": ((range[2]) ? range[2] : range[0])
        },
        success: function(response) {
            

            var data = response.orders
            var obj = {};
            for (var i = 0; i < data.length; i++) {
                var date = data[i].Date;
                // Get previous date saved inside the result
                var p_date = obj[date] || {};
                // Merge the previous date with the next date
                obj[date] = Object.assign(p_date, data[i]);
            }

            // Convert to an array
            var result = Object.values(obj);

            var transactions = []

            var total = 0

            var sellers = []


            if (response.orders.length > 0) {
                var tpl_orders = ''
              



                $.each(response.orders, function(i, order) {

                    

                    var range = order.created.split('T')
                    var date = new Date(order.created);

                    tpl_orders += `<div class="row  border-bottom">
                    <div class="col-lg-4 mb-2 mb-lg-0 mt-3">
                    <span class="star-toggle uil uil-star text-warning"></span>
                      PED: <strong>#${order.order_cod}</strong> <span class="badge badge-soft-danger p-1">Recebido</span> ${((order.read == 0) ? '<span class="badge badge-soft-success p-1">NOVO</span>': '')}
                    </div> <!-- end col -->
                    <div class="col-lg-12">
                        <div class="d-sm-flex justify-content-between">
                            <div>
                            <p class="text-muted ml-4">
                            Cliente: ${((order.name) ? order.name : '(Não Informado)')} <br>
                            ${((order.whatsapp) ? order.whatsapp + '<br>' : '')}
     
                            Vendedor : <strong>${order.seller_name}</strong><br>
            
                        
                        </p>
                            </div>
                            <div class="mt-3 mt-sm-0">
                                <ul class="list-inline font-13 text-sm-right">
                                    <li class="list-inline-item pr-1">
                                        <i class="uil uil-schedule font-16 mr-1"></i>
                                        ${date.getDate()}/ ${months[(date.getMonth() + 1)]}
                                    </li>
                                    <li class="list-inline-item pr-2">
                                        <i class="uil uil-card-atm font-16 mr-1"></i>
                                        <strong class="success" style="color:#43d39e">+<rs>R$</rs>${order.total}</strong>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div class="mt-3 mb-4 mt-sm-0">
                            <a href="/loja/order/${order.order_cod}" class="btn btn-block btn-primary btn-sm">Ver Datalhes</a>
                            </div>
                        </div> <!-- end .d-flex-->
                    </div> <!-- end col -->
                </div>`

                    /*
                        tpl_orders += `
                    <li class="event-list">
                        <div>
                            <div class="media">
                                <div class="event-date text-center mr-4">
                                    <div class=" avatar-sm rounded-circle bg-soft-primary">
                                        <span class="font-size-16 avatar-title text-primary font-weight-semibold">
                        ${date.getDate()}
                    </span>
                                    </div>
                                    <p class="mt-2">
                                        ${months[(date.getMonth() + 1)]}
                                    </p>
                                </div>
                                <div class="media-body">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="mt-0">

                                                Às
                                                ${date.getHours()}:${((date.getMinutes() < 10) ? '0' + date.getMinutes(): date.getMinutes())}
                                            </h5>

                                            <p class="text-muted">
                                                Codigo:
                                                <strong>#${order.order_cod}</strong><br> Vendedor :
                                                <strong>${order.seller_name}</strong><br>
                                                <strong class="success">+<rs>R$</rs>${order.total}</strong>
                                            
                                            </p>
                                            <div>
                                                <a href="/loja/order/${order.order_cod}" class="btn btn-primary btn-sm">Ver Datalhes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`*/

                    total += parseFloat(order.total)
                    transactions.push({
                        "date": range[0],
                        "price": order.total
                    })

                })


                $('.order-list').empty().append(tpl_orders)
                $('.total').text(`Total: <rs>R$</rs>${total.toFixed()}`)



                var sumedUpDates = [];
                var prices = [];


                function isDateSumedUp(date) {
                    return sumedUpDates.indexOf(date) !== -1;
                }

                function sumUpDate(date) {
                    var sum = 0;

                    transactions.forEach(t => {
                        if (t.date === date) {
                            sum += parseInt(t.price);
                        }
                    });

                    sumedUpDates.push(date);
                    prices.push(sum);
                }

                transactions.forEach(t => {
                    if (!isDateSumedUp(t.date)) {
                        sumUpDate(t.date);
                    }
                });


                var obj = {};

                sumedUpDates.forEach((d, i) => obj[d] = prices[i]);


                chart.updateOptions({
                    xaxis: {
                        categories: sumedUpDates.reverse()
                    }
                });
                chart.updateSeries([{
                    data: prices.reverse()
                }])

                /* chart.updateOptions({
                     colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
                         '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
                     ],
                     series: [{
                             name: "Series1",
                             data: [51, 42, 109, 38, 47]
                         },
                         {
                             name: "Series2",
                             data: [56, 90, 12, 32, 44]
                         },
                         {
                             name: "Series3",
                             data: [22, 43, 21, 100, 56]
                         }
                     ],
                     xaxis: {
                         categories: ["A", "B", "C"]
                     }
                 });*/







            } else {
                console.log('Não existem peididos no periodo')
                $('.left-timeline').empty().text('Não há resultados')

                chart.updateOptions({
                    xaxis: {
                        categories: ['sem-dados']
                    }
                });
                chart.updateSeries([{
                    data: [0]
                }])
            }

        },
        error: function() {
            alert("error");
        }

    });
}

function getParam(param) {

    var url = new URL(window.location.href),
        c = url.searchParams.get(param);
    return c

}



$('.id-product').on('change.bootstrapSwitch', function(e) {
    var id = $(this).attr('id-product')
    var action = $(this).attr('action')
    var status = ((e.target.checked == true) ? 1 : 0)
    productUpdate(id, status, action)

});

/*
$('input#12.custom-control-input.activeVariation').on('change.bootstrapSwitch', function(e) {
  
});*/


function productUpdate(id, status, action) {

    $.ajax({
        url: "/loja/update/product-update",
        type: "POST",
        data: {
            "id": id,
            "status": status,
            "action": action
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

function UpdateOrder(product_id) {
    console.log('init')
    var order = []
    $('span[data-dz-name]').each(function(i, obj) {
        var file = $(this).text()
        order.push({
            file,
            i
        })
    });

    console.log(order)
    $.ajax({
        url: "/loja/product/update-order",
        type: "POST",
        data: {
            "product_id": product_id,
            "order": order
        }
    });
}


function UpdateOrderStories() {
    console.log('init')
    var order = []
    $('video').each(function(i, obj) {
        var file = $(this).attr('id')
        order.push({
            file,
            i
        })
    });

    //console.log(order)
    $.ajax({
        url: "/loja/stories/update-order",
        type: "POST",
        data: {
            "order": order
        }
    });
}

function UpdateOrderBanners() {
    console.log('init')
    var order = []
    $('.card').each(function(i, obj) {
        var file = $(this).attr('cnt')
        if (file) {
            order.push({
                file,
                i
            })
        }

    });

    //console.log(order)
    $.ajax({
        url: "/loja/banner/update-order",
        type: "POST",
        data: {
            "order": order
        }
    });
}

var url = window.location.href;
var activeTab = url.substring(url.indexOf("#") + 1);
if (activeTab) {

    $('a[href="#' + activeTab + '"]').tab('show')
}

$('.cr-slider').attr({
    'min': 0.000
});

Dropzone.options.mydropzone = {
    //url does not has to be written 
    //if we have wrote action in the form 
    //tag but i have mentioned here just for convenience sake 
    url: '/loja/upload',
    transformFile: function(file, done) {

        var myDropZone = this;

        // Create the image editor overlay
        var editor = document.createElement('div');
        editor.style.position = 'fixed';
        editor.style.left = 0;
        editor.style.right = 0;
        editor.style.top = 0;
        editor.style.bottom = 0;
        editor.style.zIndex = 9999;
        editor.style.backgroundColor = '#fff';
        document.body.appendChild(editor);

        // Create the confirm button
        var confirm = document.createElement('button');
        confirm.style.position = 'fixed';
        confirm.style.left = '10vw';
        confirm.style.width = '80vw';
        confirm.style.bottom = '20px';
        confirm.style.zIndex = 9999;
        confirm.textContent = 'Concluir';
        confirm.className = "form-control btn btn-success "
        confirm.addEventListener('click', function() {

            // Get the output file data from Croppie
            croppie.result({
                type: 'blob',
                quality: 1,
                size: {
                    width: 1024,
                    height: 1126
                }
            }).then(function(blob) {

                // Update the image thumbnail with the new image data
                myDropZone.createThumbnail(
                    blob,
                    myDropZone.options.thumbnailWidth,
                    myDropZone.options.thumbnailHeight,
                    myDropZone.options.thumbnailMethod,
                    false,
                    function(dataURL) {

                        // Update the Dropzone file thumbnail
                        myDropZone.emit('thumbnail', file, dataURL);

                        // Return modified file to dropzone
                        done(blob);
                    }
                );

            });

            // Remove the editor from view
            editor.parentNode.removeChild(editor);

        });
        editor.appendChild(confirm);

        var size = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        width = size - (size / 5)
        height = size - (size / 10)

        // Create the croppie editor
        var croppie = new Croppie(editor, {
            //enableResize: true,
            type: 'square',
            showZoomer: true,
            viewport: {
                width: ((width < 400) ? width : 400),
                height: ((height < 440) ? height : 440)
            },
            boundary: {
                width: '100vw',
                height: '80vh'
            },

            enableOrientation: true
        });

        // Load the image to Croppie

        croppie.bind({
            url: URL.createObjectURL(file)
        });

    },
    clickable: true,
    parallelUploads: 1,
    acceptedFiles: 'image/*',
    uploadMultiple: false,
    addRemoveLinks: true,
    dictRemoveFile: 'Apagar',
    autoProcessQueue: true, // this is important as you dont want form to be submitted unless you have clicked the submit button
    autoDiscover: false,
    // previewsContainer: '#previewDiv', // we specify on which div id we must show the files
    accept: function(file, done) {
        console.log("uploaded");
        done();
    },
    error: function(file, msg) {
        alert(msg);
    },
    /*
        removedfile: function(file) {
    console.log(this)

    //this.removeFile(file);
            //this.removeFile(file);
            /*x = confirm('Do you want to delete?');
            if(!x)  return false;
            var name = ((file.previewElement.id) ? file.previewElement.id : file.name);
                    $.ajax({
                        url: "/loja/media/delete",
                        type: "POST",
                        data: { 'name': name }
                    });

                   
                   
           
         },*/


    init: function() {
            var myDropzone = this;

            $.ajax({
                url: "/loja/media",
                type: "POST",
                data: {
                    "product_id": jQuery("#product_id").val()
                },
                success: function(images) {

                    $.each(images.image, function(i, image) {

                        var mockFile = {
                            name: image.name,
                            size: 12345
                        };
                        // Call the default addedfile event handler
                        myDropzone.emit("addedfile", mockFile);
                        myDropzone.emit("thumbnail", mockFile, '/media/' + jQuery("#store_folder").val() + '/' + image.name);
                        myDropzone.emit("complete", mockFile);
                        myDropzone.files.push(mockFile);

                    })
                },
                error: function() {
                    alert("error");
                }

            });


            this.on("sending", function(data, xhr, formData) {
                //  console.log(data)
                formData.append("product_id", jQuery("#product_id").val());
                formData.append("count", $('span[data-dz-name]').length);
            });

            this.on("success", function(file, response) {

                //    console.log(response) //nome da nova file
                file.previewElement.id = response;

                // console.log(response, file)


            });

            this.on("removedfile", function(file) {
                //                alert(file.name);

                var name = ((file.previewElement.id) ? file.previewElement.id : file.name);
                $.ajax({
                    url: "/loja/media/delete",
                    type: "POST",
                    data: {
                        'name': name
                    }
                });

                /* console.log(file)
                 var name = ((file.previewElement.id) ? file.previewElement.id : file.name);


                 $.ajax({
                     url: "/loja/media/delete",
                     type: "POST",
                     data: { 'name': name }
                 });*/

                //var _ref;
                // return ((_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0);


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


function tmpStories(file) {


    var template = `
    <div class="col-12 col-xl-6 col-md-6 col-sm-6 " story="${file}">
   <div class="card" cnt="${file}">
      <div class="card-body" >
         <div class="badge badge-danger move" style="top:-10px; left:-10px">
            <img src="/assets.admin/images/move.svg" >
         </div>
         <div class="badge badge-danger" onclick="deleteStory('${file}')" style="position: absolute;right: -5px;top: -5px;">APAGAR
         </div>
         <div class="card-body" style="background: #000;padding: 0;border-radius: 5px;">
            <div class="media">
               <div class="media-body" style="text-align: center;" >
               <video id="${file}" width="100%" height="280px" controls="controls" style="max-height: 100%; min-height:280px;">
               <source src="/media/${jQuery("#store_folder").val()}/stories/${file}" type="video/mp4" />
               <!--Suportado em IE9, Chrome 6 e Safari 5 -->
               O seu navegador não suporta a tag vídeo
               </video> 
               </div>
            </div>
         </div>

        <!-- <div class="col">
         <a class="text-dark collapsed" data-toggle="collapse" href="#a${file.split('.')[0]}" aria-expanded="false" aria-controls="a${file.split('.')[0]}">
             <h5 class="mb-0"><i class="uil uil-angle-down font-size-18"></i>OPÇOES DESTE STORY</h5>
         </a>

         <div class="collapse" id="a${file.split('.')[0]}">
             <div class="card mb-0 shadow-none">

             <div  class="mt-2 comment-area-box">
                                                            
             <div class="form-group mt-1">
             <input storyUrl="${file}" type="text" class="form-control" id="simpleinput" name="address" value="${file}" placeholder="Texto do Botão. Ex: Veja esse Produto">
          </div>
             <textarea rows="3" class="form-control border-1 resize-none" placeholder="Url de Redirecionamento: EX: https://google.com.br"></textarea>

            

                                                            <div class="mt-2" >
                                                                <div class="float-right">
                                                                    <button type="submit" class="btn btn-sm btn-success"><i class="uil uil-message mr-1" onclick="saveStory('${file}')"></i>Salvar</button>
                                                                </div>
                                                                <div>
                                                              
                                                                </div>
                                                            </div>
                                                        </div>


         </div>
         </div>
         </div>-->

      </div>
   </div>
</div>
</div>`
        /*

            var template = `<div class="col-6 col-xl-3 col-md-4 col-sm-4">
            <div class="card" id="${file}">
                <div class="card-body" style="background: #000;padding: 0;    border-radius: 5px;">
                    <div class="media">
                        <div class="media-body" style="text-align: center;">
                        <video id="${file}" width="100%" controls="controls" style="max-height: 100%; min-height:280px;">
                        <source src="/media/${jQuery("#store_folder").val()}/stories/${file}" type="video/mp4" />
                        <!--Suportado em IE9, Chrome 6 e Safari 5 -->
                        O seu navegador não suporta a tag vídeo
                        </video> 
                   </div>
                        
                            <a href="/loja/categories/7VxlFCdngx/product/create" class="btn btn-danger btn-sm btn-block mr-1">Excluir</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>`
        */
    return template

}


Dropzone.options.mydropzoneVideos = {
    url: '/loja/StoriesUpload',
    clickable: true,
    parallelUploads: 1,
    acceptedFiles: "video/*",
    uploadMultiple: false,
    addRemoveLinks: true,
    autoProcessQueue: true, // this is important as you dont want form to be submitted unless you have clicked the submit button
    autoDiscover: false,
    previewsContainer: "#template-preview",
    //previewsContainer: '#template-preview', // we specify on which div id we must show the files
    accept: function(file, done) {
        console.log("uploaded", file);
        done();
    },
    error: function(file, msg) {
        alert(msg);
    },
    init: function() {
            var myDropzoneVideo = this;
            $.ajax({
                url: "/loja/StoriesMedia",
                type: "POST",
                data: {
                    "product_id": jQuery("#product_id").val()
                },
                success: function(images) {
                    $.each(images.image, function(i, image) {
                        /* var mockFile = {
                                name: image.name,
                                size: 12345
                            };
                           */
                        $('.stories').append(tmpStories(`${image.name}`))
                    });
                },
                error: function() {
                    alert("error");
                }

            });

            this.on('addedfile', function(origFile) {
                $('.dz-file-preview').remove()
            });
            this.on("sending", function(data, xhr, formData) {
                //  console.log(data)
                formData.append("count", $('video').length);
            });
            this.on("success", function(file, response) {
                // obj = JSON.parse(response);
                file.previewElement.id = response;
                console.log(response, file)
                $('.stories').append(tmpStories(`${response}`))
            });
            this.on("removedfile", function(file) {
                //                alert(file.name);
                console.log(file)
                var name = ((file.previewElement.id) ? file.previewElement.id : file.name);
                $.ajax({
                    url: "/loja/media/delete",
                    type: "POST",
                    data: {
                        'name': name
                    }
                });

            });
            //now we will submit the form when the button is clicked
            $("#send").on('click', function(e) {
                e.preventDefault();
                myDropzoneVideo.processQueue(); // this will submit your form to the specified action path
                // after this, your whole form will get submitted with all the inputs + your files and the php code will remain as usual 
                //REMEMBER you DON'T have to call ajax or anything by yourself, dropzone will take care of that
            });
        } // init end
};



function tmpBanners(name, redirect) {

    var template = `
    <div class="col-12 col-xl-6 col-md-6 col-sm-6 " banner="${name}">
   <div class="card" cnt="${name}">
      <div class="card-body">
         <div class="badge badge-danger move">
            <img src="/assets.admin/images/move.svg">
         </div>
         <div class="badge badge-danger" onclick="deleteBanner('${name}')" style="position: absolute;right: 10px;top: 10px;">APAGAR
         </div>
         <div class="card-body" style="background: #000;padding: 0;border-radius: 5px;">
            <div class="media">
               <div class="media-body" style="text-align: center;" >
                  <img class="banner-img" width="100%" src="/media/${jQuery("#store_folder").val()}/banners/${name}"></img>
               </div>
            </div>
         </div>
         <div class="row mt-2">
            <div class="col-xl-8 col-sm-8">
               <div class="form-group">
                  <input bannerUrl="${name}" type="text" class="form-control" id="simpleinput" name="address" value="${redirect}" placeholder="Url: EX: https://google.com.br">
               </div>
            </div>
            <div class="col-xl-4 col-sm-4 ">
               <button type="submit" id="send" class="form-control btn btn-success " onclick="saveBanner('${name}')">Salvar</button>
            </div>
         </div>
      </div>
   </div>
</div>
</div>`
    return template
}


Dropzone.options.mydropzoneBanners = {
    url: '/loja/BannersUpload',
    clickable: true,
    parallelUploads: 1,
    acceptedFiles: "image/*",
    uploadMultiple: false,
    addRemoveLinks: false,
    autoProcessQueue: true, // this is important as you dont want form to be submitted unless you have clicked the submit button
    autoDiscover: false,
    previewsContainer: "#template-preview",
    //previewsContainer: '#template-preview', // we specify on which div id we must show the files
    accept: function(file, done) {
        console.log("uploaded", file);
        done();
    },
    error: function(file, msg) {
        alert(msg);
    },
    init: function() {
            var myDropzoneBanners = this;
            $.ajax({
                url: "/loja/BannersMedia",
                type: "POST",
                data: {
                    // "product_id": jQuery("#product_id").val()
                },
                success: function(images) {
                    console.log(images)
                    $.each(images.image, function(i, image) {
                        /* var mockFile = {
                                name: image.name,
                                size: 12345
                            };
                           */
                        $('.banners').append(tmpBanners(image.name, image.redirect))
                    });
                },
                error: function() {
                    alert("error");
                }

            });

            this.on('addedfile', function(origFile) {
                $('.dz-file-preview').remove()
            });
            this.on("sending", function(data, xhr, formData) {
                //  console.log(data)
                formData.append("count", $('.banner-img').length);
            });
            this.on("success", function(file, response) {
                // obj = JSON.parse(response);
                file.previewElement.id = response;
                console.log(response, file)
                $('.stories').append(tmpBanners(`${response}`, ''))
            });
            this.on("removedfile", function(file) {
                //                alert(file.name);
                console.log(file)
                var name = ((file.previewElement.id) ? file.previewElement.id : file.name);
                $.ajax({
                    url: "/loja/media/delete",
                    type: "POST",
                    data: {
                        'name': name
                    }
                });

            });
            //now we will submit the form when the button is clicked
            $("#send").on('click', function(e) {
                e.preventDefault();
                myDropzoneBanners.processQueue(); // this will submit your form to the specified action path
                // after this, your whole form will get submitted with all the inputs + your files and the php code will remain as usual 
                //REMEMBER you DON'T have to call ajax or anything by yourself, dropzone will take care of that
            });
        } // init end
};





function p(n) {

    var x = n.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    g = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    n.value = g

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#imgInp").change(function() {
    readURL(this);
});
window.addEventListener("load", function() {

    //$('#phone').addEventListener('input', function(e) {

    //});

})


function k(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(",", ".");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}





function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function get(name) {
    if (typeof Storage !== "undefined") {
        return localStorage.getItem(name);
    } else {
        alert("Please use a modern browser as this site needs localstroage!");
    }
}

function store(name, val) {
    if (typeof Storage !== "undefined") {
        localStorage.setItem(name, val);
    } else {
        alert("Please use a modern browser as this site needs localstroage!");
    }
}

function remove(name) {
    if (typeof Storage !== "undefined") {
        localStorage.removeItem(name);
    } else {
        alert("Please use a modern browser as this site needs localstroage!");
    }
}



function addSubVariation() {

    if (!get('variations-temp')) {
        var data = []
    } else {
        var data = JSON.parse(get('variations-temp'))
    }
    console.log(data)


    console.log(data.findIndex((obj => obj.variations.varid == "jnr")))
    JSON.parse(get('variations-temp')).findIndex((obj => {
        console.log(obj.id['RMABS'])
    }))
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


$('.addvariations').on('click', function(event) {
    $('#variation').modal('show');
    store('temp-variation-name', $('.name').val())
    $('.name').val(get('temp-variation-name'))
});



$('.variations_done').on('click', function(event) {
    store('temp-variation-name', $('.name').val())
    variationCheck()
    $('#variation').modal('hide');
});

$('.subvariations_done').on('click', function(event) {
    store('temp-variation-name', $('.name').val())
    subVariationsCheck()
    $('#subvariation').modal('hide');
    NewTemplateVariations(JSON.parse(get('variations-temp')))
});


//subVariationsCheck

function variationCheck() {

    if (!get('variations-temp')) {
        data = []
    } else {
        data = JSON.parse(get('variations-temp'))
    }

    $('.variation').each(function(index, itemData) {

        if ($(this).find('.name').val() && $(this).find('.variation').val()) {
            var variations = []
            var id = makeid(5)
            var vari = $(this).find('.variation').val().split(',')

            for (var i = 0; i < $(this).find('.variation').val().split(',').length; i++) {
                arr = {
                        "varid": id + '-' + makeid(3),
                        "variation": vari[i],
                        'subvariation': false,
                        "active": true
                    }
                    //{ "description": "COR", "val": ["123 -preto", "457 -branco"] }
                variations.push(arr);
            }

            data.push({
                id: id,
                name: $(this).find('.name').val(),
                variations
            });
        }

        store("variations-temp", JSON.stringify(data))
        $('[name="variations_data"]').val(JSON.stringify(data));
        NewTemplateVariations(JSON.parse(get('variations-temp')))
            //render display variations
    })


}



$('#myModal').on('hidden.bs.modal', function() {
    // do something…
})




function NewTemplateVariations(variations) {
    var variation_tpl = ``
    var total = 0

    $.each(variations, function(i, variation) {
                var variation_add = ``
                total++
                if (variation.variations) {

                    $.each(variation.variations, function(i2, variations_added) {
                                // console.log(variations_added)
                                //subvariation
                                var sub_variation_add = ``
                                    //  console.log(variations_added.subvariation)
                                if (variations_added.subvariation) {
                                    sub_variation_add += ` <span class="badge badge-primary">Sub-Variação - ${variations_added.subvariation.description}</span>`
                                }

                                $.each(variations_added.subvariation.value, function(i3, subvar) {
                                    //  console.log(subvar)
                                    sub_variation_add += `
                    <span class="badge badge-soft-info p-1">${subvar}</span>`
                                })

                                /*variation_add += `<div class="custom-control custom-switch mb-2">
                                <input type="checkbox" class="custom-control-input activeVariation" id="${variations_added.variation}" name="${variations_added.variation}" checked>`
                                <label class="custom-control-label" for="${variations_added.variation}">
                                </label>
                                   </div>`
                                */

                                variation_add += `
                                <span class="badge badge-soft-danger p-1 mt-1">
                                ${variations_added.variation}</span>
                                ${((sub_variation_add) ? `${sub_variation_add}<br>`: '')}             
                                `


            })
        }

        variation_tpl += ` <!-- task -->
        <div class="row justify-content-sm-between border-bottom">
       
            <div class="col-12 mb-1 mb-lg-0">
            <div class="">
            <div class="dropdown float-right">
                   <a href="#" class="dropdown-toggle text-muted arrow-none" data-toggle="dropdown" aria-expanded="false" draggable="false">
                   <i class="uil uil-ellipsis-v font-size-14"></i>
                   </a>
                   <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(16px, 19px, 0px);">
                     <a href="javascript:void(0);" class="dropdown-item subvariation" varid="${variation.id}" onclick="newSubBariation(this)" draggable="false">
                     <i class="uil uil-edit-alt mr-2 " ></i> Editar Sub-Variação</a>
                      <div class="dropdown-divider"></div>
                       <a href="javascript:void(0);" class="dropdown-item text-danger"  varid="${variation.id}"  onclick="deletevariation(this)" draggable="false"><i class="uil uil-trash mr-2"></i>Apagar</a>
                      </div>
                     </div>
                     <h5 class="mt-2 mb-0 font-size-16">
                     
                     <span class="badge badge-soft-dark  p-1">Variação: ${variation.name}</span>
                     </h5>
            </div>
            
            <div class="col-12">
                <div class="d-sm-flex justify-content-between">
                    <div class="mt-0 mt-sm-0">
                        <ul class="list-inline font-13 text-sm-left"> ${variation_add}</ul>
                    </div>
                </div>
                
            </div>
            </div>
        </div>`

    })

    $('.variations_qnt').text(`(${total})`)
    $('.created-variations').empty().append(((variation_tpl) ? variation_tpl : 'Produto sem variações.'))

    var data = JSON.parse(get('variations-temp'))
    $('[name="variations_data"]').val(((JSON.stringify(data) != null) ? JSON.stringify(data) : 'false'));

}

function deletevariation(el) {


    var varid = $(el).attr('varid')
    console.log(varid)

    if (!get('variations-temp')) {
        var data = []
    } else {
        var data = JSON.parse(get('variations-temp'))
    }


    var finditem = data.findIndex((obj => obj.id == varid))
    console.log(data[finditem].variations[0].subvariation.description)
    data.splice(finditem, 1);
    console.log(data)
    store("variations-temp", JSON.stringify(data))
    NewTemplateVariations(JSON.parse(get('variations-temp')))

}

//NewTemplateVariations(JSON.parse(get('variations-temp')))

function newSubBariation(el) {


    var varid = $(el).attr('varid')

    if (!get('variations-temp')) {
        var data = []
    } else {
        var data = JSON.parse(get('variations-temp'))
    }

    var finditem = data.findIndex((obj => obj.id == varid))
    var itemTitle = data[finditem].variations[0].subvariation.description

    var subvar_tpl = `<div class="row " style="border-bottom: 1px solid #f6f6f7 !important;margin-bottom: 11px;">
    <div class="col-12 col-md-5" >
        <div class="form-group">
            <label for="simpleinput">Sub-Variação</label>
            <input type="text" class="form-control subvariationtitle" value="${((itemTitle != undefined) ? itemTitle : '')}" placeholder="Ex: Cor" required>

        </div>
    </div>
    </div>`

    $.each(data[finditem].variations, function (x, item) {
        console.log(item)
        subvar_tpl += `    
        <div class="row subvariations" variationid="${finditem}" varid="${item.varid}" style="border-bottom: 1px solid #f6f6f7 !important;margin-bottom: 11px;">
        <div class="col-12 col-md-5" >
            <div class="form-group">
                <label for="simpleinput">Conteudo - ${item.variation}  <small>(Separado por virgula)</small></label>
                <input type="text" class="form-control name" value="${((data[finditem].variations[x].subvariation.value != undefined) ? data[finditem].variations[x].subvariation.value: '')}" placeholder="Ex: Azul, Preto, Rosa">
            </div>
        </div>
    </div>`
    });

    $('.subvarbody').empty().append(((subvar_tpl) ? subvar_tpl : 'Ainda não há produtos'))
    $('#subvariation').modal('show');

}

$('.subvariation').on('click', function (event) {



});

function subVariationsCheck() {
    var arr = []
    var title = $('.subvariationtitle').val()
    if (!get('variations-temp')) {
        data = []
    } else {
        data = JSON.parse(get('variations-temp'))
    }

    $('.subvariations').each(function (index, itemData) {
        var value = (($(this).find('.name').val().split(',') != "") ? $(this).find('.name').val().split(',') : false)
        var varid = $(this).attr('varid')
        var variationid = $(this).attr('variationid')
        console.log(variationid, varid, value)
        var id = data[variationid].variations.findIndex((obj => obj.varid == varid))
        //  console.log(id)
        // if (title) {
        data[variationid].variations[id].subvariation = {
            "description": title,
            "value": value
        }
        store("variations-temp", JSON.stringify(data))
        // }else{        
        //alert('Não foi adicionado pois não há titulo da sub variação')
        // return false
        // }
    })

    $('[name="variations_data"]').val(JSON.stringify(data));
}