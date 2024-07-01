(function($) {

	function HeaderAnimation(el, options) {
		this.el = el;
		this.$el = $(el);
		this.options = {
			startTop: 1
		};
		$.extend(this.options, options);
		this.initialize();
	}

	HeaderAnimation.prototype = {
		initialize: function() {
			var self = this;
			this.$wrapper = $('#site-header-wrapper');
			this.$topArea = $('#top-area');
			this.topAreaInSiteHeader = $('#site-header #top-area').length > 0;
			this.$headerMain = $('.header-main', this.$el);
			this.hasAdminBar = document.body.className.indexOf('admin-bar') != -1;
			this.htmlOffset = this.hasAdminBar ? parseInt($('html').css('margin-top')) : 0;
			this.scrollTop = 0;
			this.topOffset = 0;
			this.settedWrapperHeight = false;
			this.initedForDesktop = false;

			this.hideWrapper = this.$wrapper.hasClass('site-header-wrapper-transparent');
			this.videoBackground = $('.page-title-block .gem-video-background').length && $('.page-title-block .gem-video-background').data('headerup');

			if(this.$el.hasClass('header-on-slideshow') && $('#main-content > *').first().is('.gem-slideshow, .block-slideshow')) {
				this.$wrapper.css({position: 'absolute'});
			}

			if(this.$el.hasClass('header-on-slideshow') && $('#main-content > *').first().is('.gem-slideshow, .block-slideshow')) {
				this.$wrapper.addClass('header-on-slideshow');
			} else {
				this.$el.removeClass('header-on-slideshow');
			}

			if(this.videoBackground) {
				this.$el.addClass('header-on-slideshow');
				this.$wrapper.addClass('header-on-slideshow');
			}

			this.initForDesktop();

			$(window).scroll(function() {
				self.scrollHandler();
			});

			$(window).resize(function() {
				self.initForDesktop();
				self.scrollHandler();

				setTimeout(function() {
					self.initializeHeight();
				}, 350);
			});
		},

		initForDesktop: function() {
			if (window.isResponsiveMenuVisible() || this.initedForDesktop) {
				return false;
			}

			this.initializeHeight();
			this.initializeStyles();

			if (this.$topArea.length && !this.topAreaInSiteHeader)
				this.options.startTop = this.$topArea.outerHeight();
		},

		setMargin: function($img) {
			var $small = $img.siblings('img.small'),
				w = 0;

			if (this.$headerMain.hasClass('logo-position-right')) {
				w = $small.width();
			} else if (this.$headerMain.hasClass('logo-position-center') || this.$headerMain.hasClass('logo-position-menu_center')) {
				w = $img.width();
				var smallWidth = $small.width(),
					offset = (w - smallWidth) / 2;

				w = smallWidth + offset;
				$small.css('margin-right', offset + 'px');
			}
			if (!w) {
				w = $img.width();
			}
			$small.css('margin-left', '-' + w + 'px');
			$img.parent().css('min-width', w + 'px');

			$small.show();
		},

		initializeStyles: function() {
			var self = this;

			if (this.$headerMain.hasClass('logo-position-menu_center')) {
				var $img = $('#primary-navigation .menu-item-logo a .logo img.default', this.$el);
			} else {
				var $img = $('.site-title a .logo img.default', this.$el);
			}

			if ($img.length && $img.is(':visible') && $img[0].complete) {
				self.setMargin($img);
				self.initializeHeight();
			} else {
				$img.on('load error', function() {
					self.setMargin($img);
					self.initializeHeight();
				});
			}

		},

		initializeHeight: function() {
				if (window.isResponsiveMenuVisible()) {
				this.$el.removeClass('shrink fixed');
				if (this.settedWrapperHeight) {
					this.$wrapper.css({
						height: ''
					});
				}
				return false;
			}

			if (this.hideWrapper) {
				return false;
			}

			var shrink = this.$el.hasClass('shrink');
			this.$el.removeClass('shrink');
			var elHeight = this.$el.outerHeight();
			this.$wrapper.height(elHeight);
			this.settedWrapperHeight = true;
			if(shrink) {
				this.$el.addClass('shrink');
			}
		},

		updateTopOffset: function() {
			var offset = this.htmlOffset;

			if (this.$wrapper.hasClass('header-on-slideshow') && !this.$el.hasClass('fixed'))
				offset = 0;

			if (this.$topArea.length && !this.topAreaInSiteHeader && window.isTopAreaVisible()) {
				var top_area_height = this.$topArea.outerHeight();
				this.options.startTop = top_area_height;
				if (this.scrollTop < top_area_height)
					offset += top_area_height - this.scrollTop;
			}

			if (this.topOffset != offset) {
				this.topOffset = offset;
				this.$el.css('top', offset + 'px');
			}
		},

		scrollHandler: function() {
			if (window.isResponsiveMenuVisible()) {
				return false;
			}


			if (this.getScrollY() >= this.options.startTop) {
				if (!this.$el.hasClass('shrink')) {
					var shrinkClass = 'shrink fixed';
					if (window.gemSettings.fillTopArea) {
						shrinkClass += ' fill';
					}
					this.$el.addClass(shrinkClass)

					if (this.hasAdminBar) {
						this.$el.css({
							top: this.htmlOffset
						});
					}
				}
			} else {
				if (this.$el.hasClass('shrink')) {
					this.$el.removeClass('shrink fixed')

					if (this.hasAdminBar) {
						this.$el.css({
							top: ''
						});
					}
				}
			}
		},

		updateScrollTop: function() {
			this.scrollTop = $(window).scrollTop();
		},

		getScrollY: function(){
			return window.pageYOffset || document.documentElement.scrollTop;
		},
	};

	$.fn.headerAnimation = function(options) {
		options = options || {};
		return new HeaderAnimation(this.get(0), options);
	};
})(jQuery);
