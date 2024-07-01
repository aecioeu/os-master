(function($) {

	$('a.fancy, .fancy-link-inner a').fancybox();
	$('a.fancy-gallery').fancybox({
		helpers : {
			title: {
				type: 'over'
			}
		},
		wrapCSS: 'slideinfo',
		beforeLoad: function() {
			var clone = $(this.element).children('.slide-info').clone();

			if (clone.length) {
				this.title = clone.html();
			}
		}
	});

	$('.portfolio-item a.vimeo, .portfolio-item a.youtube, .blog article a.youtube, .blog article a.vimeo').fancybox({
		type: 'iframe'
	});
	$('.portfolio-item a.self_video').fancybox({
		width: '80%',
		height: '80%',
		autoSize: false,
		content: '<div id="fancybox-video"></div>',
		afterShow: function() {
			var $video = $('<video width="100%" height="100%" autoplay="autoplay" controls="controls" src="'+this.element.attr('href')+'" preload="none"></video>');
			$video.appendTo($('#fancybox-video'));
			$video.mediaelementplayer();
		}
	});
})(jQuery);
