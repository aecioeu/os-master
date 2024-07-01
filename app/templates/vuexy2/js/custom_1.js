jQuery(document).ready(function($) {
	
	"use strict";
	
	var redactorBoxPreview = $('.redactor-previewContent').redactor({
		plugins: ['source','iconic2'],
		buttons: ['bold', 'italic'],
		formatting: ['span'],
		breakline: true,
		minHeight: 100,
		maxHeight: 500,
		convertLinks: true,
		linkNofollow: true,
		linkSize: 1000,
		convertImageLinks: false,
		callbacks: {
	        beforeInsertingLink: function(link){
	            link.url = link.url.replace(/['"]+/g,'');
	            return link;
	        }
	    }
	});
	
	$.fn.spin.presets.ticksy = {
	 	lines: 10, // The number of lines to draw
		length: 7, // The length of each line
		width: 5, // The line thickness
		radius: 11, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#aaa', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '50%', // Top position relative to parent
		left: '50%' // Left position relative to parent
	};
	
	$.fn.spin.presets.ticksy_tiny = {
	 	lines: 10, // The number of lines to draw
		length: 4, // The length of each line
		width: 2, // The line thickness
		radius: 5, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#555', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '43px', // Top position relative to parent
		left: '50%' // Left position relative to parent
	};
	
	$.fn.spin.presets.ticksy_tiny_white = {
	 	lines: 10, // The number of lines to draw
		length: 4, // The length of each line
		width: 2, // The line thickness
		radius: 5, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#888', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '30px', // Top position relative to parent
		left: '50%' // Left position relative to parent
	};
	
	$.fn.spin.presets.ticksy_tiny_centered = {
	 	lines: 10, // The number of lines to draw
		length: 4, // The length of each line
		width: 2, // The line thickness
		radius: 5, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#aaa', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '50%', // Top position relative to parent
		left: '50%' // Left position relative to parent
	};
	
	$.fn.spin.presets.ticksy_inline = {
	 	lines: 10, // The number of lines to draw
		length: 4, // The length of each line
		width: 2, // The line thickness
		radius: 5, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#aaa', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '18px', // Top position relative to parent
		left: '100%', // Left position relative to parent
	};
	
	$.fn.spin.presets.ticksy_tabbed_chart = {
	 	lines: 10, // The number of lines to draw
		length: 7, // The length of each line
		width: 5, // The line thickness
		radius: 11, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#aaa', // #rgb or #rrggbb or array of colors
		speed: 2, // Rounds per second
		trail: 50, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'ticksy-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '232px', // Top position relative to parent
		left: '50%' // Left position relative to parent
	};
		
	$('body').on('focus','.field.password',function(){
		$(this).attr('type','text');
	});
	
	$('body').on('blur','.field.password',function(){
		$(this).attr('type','password');
	});
	
	if ($('ul.comment-list').length){
		
		$(window).on('load resize',function(){
			$('ul.comment-list').find('> li').each(function(){
				
				var thisLi = $(this),
					leftSideHeight = Math.ceil(thisLi.find('.left').outerHeight()),
					rightSide = thisLi.find('.right'),
					rightSideHeight = Math.floor(rightSide.outerHeight());
					
				if (rightSideHeight < leftSideHeight){
					rightSide.css({'min-height':leftSideHeight+'px'});
				}
					
			});			
		});
		
	}
	
	$('body').on('click','header#mobile-header .menu-toggle',function(e){
		
		e.preventDefault();
			
		if ($('body').hasClass("sidebar-active")){
			$('body').removeClass('sidebar-active');
		} else {
			$('body').addClass('sidebar-active');
		}
		
	});
		
	$(window).on('load resize',function(){
		
		var windowWidth = $(window).width();
		if (windowWidth <= 875){
			$('body').find('.tooltipstered').tooltipster('disable');
		} else {
			$('body').find('.tooltipstered').tooltipster('enable');
		}
		
	});
	
	$(window).on('load',function(){
		
		$('body').removeClass('preload');
		
		if ($('.success-banner.show-on-load').length){
			$('.success-banner.show-on-load').addClass('active');
		}
		
		init_tooltips();
		
		// Hide Broken Images
		if ($('.comment-block-wrap').length){
			$('.comment-block-wrap').find('img').error(function(){ $(this).replaceWith('<span class="missing-image"><i class="ti ti-photo"></i>&nbsp;&nbsp;Missing Image</span>'); });
		}
		
		$('.article-content').not('.editor').find('pre').each(function(i, block) {
			hljs.highlightBlock(block);
		});
		
		$('.comment-content pre').each(function(i, block) {
			hljs.highlightBlock(block);
		});

		if($('input.password-meter[type=password]').length)
		{
			SPI_Utils.addPasswordMeter( 'input.password-meter[type=password]' );	
		}
	});
	
	// New Page Panels (Settings, Profile, etc.)
	if ($('.panel-hidden').length){
		
		var currentHash = window.location.hash,
			thisToggle,
			thisPanelTitle,
			thisPanelName;
		
		if (currentHash){
			currentHash = currentHash.split('#');
			currentHash = currentHash[1];
		} else {
			currentHash = false;
		}
		
		if (!currentHash){
			
			if ($('#sidebar-block .link-list a.toggle-panel-link.current').length){
				thisToggle = $('#sidebar-block .link-list a.toggle-panel-link.current');
			} else {
				thisToggle = $('#sidebar-block .link-list a.toggle-panel-link:first');
			}
			
			thisPanelTitle = thisToggle.html();
			thisPanelName = thisToggle.data('panel');
		
		} else {
			
			thisToggle = $('#sidebar-block .link-list a.toggle-panel-link[data-panel="'+currentHash+'"]');
			thisPanelTitle = thisToggle.html();
			thisPanelName = thisToggle.data('panel');
			
		}
		
		$('.ticksy-page-panel > article > h3 > span.panel-title').html(thisPanelTitle);
		$('a.toggle-panel-link').removeClass('current');
		thisToggle.addClass('current');
		$('.panel-hidden').hide();
		$('.panel-hidden[data-panel="'+thisPanelName+'"]').show();
			
		$('body').on('click','a.toggle-panel-link',function(e){
			
			e.preventDefault();
			var rpc = $('.panel-hidden[data-panel="personal_info"]').data('rpc');
			if(rpc ==1) 
			{
				return false;
			}

			var thisToggle = $(this),
				thisPanelTitle = thisToggle.html(),
				thisPanelName = thisToggle.data('panel');
				
			window.location.hash = thisPanelName;
			
			$('.ticksy-page-panel > article > h3 > span.panel-title').html(thisPanelTitle);
				
			$('a.toggle-panel-link').removeClass('current');
			thisToggle.addClass('current');
			$('.panel-hidden').hide();
			$('.panel-hidden[data-panel="'+thisPanelName+'"]').show();
			
		});
		
	}
		
	var supportVerifiedBlock = $('#support-verified');
	
	$('body').on('click','#support-verified .view-details',function(e){
		e.preventDefault();
		if (supportVerifiedBlock.hasClass('active')){
			supportVerifiedBlock.removeClass('active');
		} else {
			supportVerifiedBlock.addClass('active');	
		}
	});
	
	$(document).mouseup(function(e){
	    var container = $("#support-verified");
	    if (!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('active');
	    }
	});
	
	$('body').on('change','.ticksy-link-select',function(){
		var selectedLink = $(this).val();
		window.location = selectedLink;
	});
	
	// Tabs
	$('body').on('click','.tc-tabs .tab',function(e){
		
		e.preventDefault();
		
		var thisTab = $(this),
			tabContainer = thisTab.parents('.tc-tab-wrapper').parent();
			
		if (!thisTab.hasClass('active')){
			var thisTabID = thisTab.attr('id');
			thisTabID = thisTabID.split('-');
			thisTabID = thisTabID[1];
			tabContainer.find('.tc-tabs .tab').removeClass('active');
			tabContainer.find('.tc-tab-content').removeClass('active');
			thisTab.addClass('active');
			$('#tc-'+thisTabID+'-content').addClass('active');	
		}
		
    });
	
	var likeSpamPrevention = false;
	
	// List Formats
	$('body').on('click','.list-formats a',function(e){
		e.preventDefault();
		var thisFormatIcon = $(this);
		var thisFormat = thisFormatIcon.attr('data-format');
		$('.list-formats a').removeClass('active');
		thisFormatIcon.addClass('active');
		$('.ticket-list').removeClass('compact extended default');
		$('.ticket-list').addClass(thisFormat);
		setCookie('ticksy_list_format',thisFormat);
	});
	
	// Like a comment
	$('body').on('click','.like-comment',function(e){
		e.preventDefault();
		if (!likeSpamPrevention){	
			likeSpamPrevention = true;	
			var thisLikeButton = $(this);
			var isLiked = thisLikeButton.hasClass('liked');
			var comment_id = thisLikeButton.attr('data-commentid');
			var user_id = thisLikeButton.attr('data-userid');
			
			if (!isLiked){
				thisLikeButton.addClass('liked');
			} else {
				thisLikeButton.removeClass('liked');
			}
			
			ajaxRequests.push = $.ajaxQueue({
				url 	: ticksy_js_vars.ajax_url,
				data	: 'action=like_comment&is_liked='+isLiked+'&comment_id='+comment_id+'&user_id='+user_id,
				success	: function(data) {
					console.log(data);
					var result = data.split(':::');
					if (result[0] === 'error'){
						// Do nothing
					} else if (result[0] === 'success'){
						thisLikeButton.parents('.like-button').replaceWith(result[1]);
						init_tooltips();
					}
					
					setTimeout(function(){
						likeSpamPrevention = false;
					},500);
				}
			});
		}
	});
	
	var flagSpamPrevention = false;
	
	// Flag a comment
	$('body').on('click','.flag-comment',function(e){
		e.preventDefault();
		if (!flagSpamPrevention){	
			flagSpamPrevention = true;	
			var thisFlagButton = $(this);
			var isFlagged = thisFlagButton.hasClass('flagged');
			var comment_id = thisFlagButton.attr('data-commentid');
			var user_id = thisFlagButton.attr('data-userid');
			var thisCommentBlock = thisFlagButton.parents('li');
			
			if (isFlagged){
				thisFlagButton.removeClass('flagged');
				thisCommentBlock.removeClass('flagged');
			} else {
				thisFlagButton.addClass('flagged');
				thisCommentBlock.addClass('flagged');
			}
			
			ajaxRequests.push = $.ajaxQueue({
				url 	: ticksy_js_vars.ajax_url,
				data	: 'action=flag_comment&is_flagged='+isFlagged+'&comment_id='+comment_id+'&user_id='+user_id,
				success	: function(data) {
					var result = data.split(':::');
					if (result[0] === 'error'){
						// Do nothing
					} else if (result[0] === 'success'){
						setTimeout(function(){
							thisFlagButton.parents('.flag-button').replaceWith(result[1]);
							init_tooltips();
						},200);
					}
					
					setTimeout(function(){
						flagSpamPrevention = false;
					},500);
				}
			});
		}
	});
	
	// Dropzones
	if ($('#attachmentsForm').length){
	
		var attachmentsDropzone = new Dropzone(document.getElementById('attachmentsForm'), { // Make the whole body a dropzone
		  	url: ticksy_js_vars.ajax_url,
		  	autoProcessQueue: true,
		  	previewsContainer: "#attachment-visuals", // Define the container to display the previews
		  	previewTemplate: '<span class="dz-preview dz-file-preview"><span class="dz-details"><span class="dz-filename"><i class="ti ti-paperclip"></i>&nbsp;&nbsp;&nbsp;<span data-dz-name></span></span>&nbsp;&nbsp;&nbsp;<span class="dz-size" data-dz-size></span>&nbsp;&nbsp;&nbsp;<i class="ti ti-times" style="cursor:pointer;font-size:15px;" data-dz-remove></i></span><span class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></span><i class="ti ti-refresh ti-spin"></i></span>',
		  	clickable: "a.ticksyAttachFile",
		  	acceptedFiles: 'image/*,application/pdf,.zip,.mp4,.mkv,.avi,.doc,.docx,.csv,.xls,.txt,.log',
		  	maxFilesize: 15,
		  	maxFiles:4
		});
		
		$('body').on('click','a.ticksyAttachFile',function(e){
			e.preventDefault();
		});
				
		attachmentsDropzone.on("maxfilesexceeded", function(){
			$('a.re-ticksyAttachFile').hide();
		});
		
		attachmentsDropzone.on("error", function(file,errorMessage){
			attachmentsDropzone.removeFile(file);
			create_ticksy_modal();
			$('.tm-window').html(errorMessage);
		});
		
		attachmentsDropzone.on("removedfile", function(){
			
			// Get list of current files
			var newAttachmentString = '';
			var currentFiles = attachmentsDropzone.getAcceptedFiles();
			for (var key in currentFiles) {
				
				if ( currentFiles[key].xhr.response ){
				
					var thisString = currentFiles[key].xhr.response;
					thisString = thisString.split(':::');
					thisString = thisString[1];

					if (newAttachmentString){
						newAttachmentString += ','+thisString;
					} else {
						newAttachmentString += thisString;
					}
					
				}
			   
			}
			
			newAttachmentString = '['+newAttachmentString+']';
			$('form').find('input[name="attachments_list"]').val(newAttachmentString);
		
		});
		
		attachmentsDropzone.on("sending",function(){
			$('#submit-ticket-comment-button, #submit-ticket-button').attr('disabled',true);
		});
	
		attachmentsDropzone.on("queuecomplete",function(){
			$('#submit-ticket-comment-button, #submit-ticket-button').attr('disabled',false);
		});
		
		attachmentsDropzone.on("success", function(file,result) {
			
			result = result.split(':::');
			
			if (result[0] === 'error'){
				attachmentsDropzone.removeFile(file);
				create_ticksy_modal();
				$('.tm-window').html(result[1]);
			} else if (result[0] === 'success'){
				
				var currentAttachmentsVal = $('form').find('input[name="attachments_list"]').val(),
					newAttachmentsVal;
				
				if (currentAttachmentsVal){
					newAttachmentsVal = currentAttachmentsVal.substring(1, currentAttachmentsVal.length-1) + ',' + result[1];
				} else {
					newAttachmentsVal = result[1];
				}
				
				$('form').find('input[name="attachments_list"]').val('['+newAttachmentsVal+']');
			}
		});
	
	}
	
	if ($('#avatarForm').length){
		
		var avatarDropzone = new Dropzone(document.getElementById('avatarForm'), { // Make the whole body a dropzone
		  	url: ticksy_js_vars.ajax_url,
		  	autoProcessQueue: true,
		  	previewsContainer: "#avatar-dropzone", // Define the container to display the previews
		  	previewTemplate: '<i>',
		  	clickable: "#avatar-dropzone",
		  	acceptedFiles: '.gif,.jpg,.jpeg,.png',
		  	maxFilesize: 10,
		  	//maxFiles:1
		});
		
		avatarDropzone.on("error", function(file,errorMessage){
			avatarDropzone.removeFile(file);
			create_ticksy_modal();
			$('.tm-window').html(errorMessage);
		});
				
		avatarDropzone.on("addedfile",function(){
			$('#avatar-dropzone .ti-refresh').show();
			$('#submit-profile-edit-button').attr('disabled',true);
		});
	
		avatarDropzone.on("queuecomplete",function(){
			$('#avatar-dropzone .ti-refresh').hide();
			$('#submit-profile-edit-button').attr('disabled',false);
		});
		
		avatarDropzone.on("success", function(file,result) {
			
			result = result.split(':::');
			
			if (result[0] === 'error'){
				avatarDropzone.removeFile(file);
				create_ticksy_modal();
				$('.tm-window').html(result[1]);
			} else if (result[0] === 'success'){
				$('#avatar-img').html('<img class="avatar" src="https://ticksy_avatars.s3.amazonaws.com/'+result[1]+'">');
				$('form').find('input[name="avatar_file"]').val(result[1]);
			}
		});	
		
	}

	// Conditional Hidden Form Elements
	$('.conditional-hidden').each(function(){
		var hiddenField = $(this);
		var condition = hiddenField.attr('data-conditional');
		var checked = $('input[name="'+condition+'"]').is(':checked');
		if (checked){ hiddenField.show(); }
		$('input[name="'+condition+'"]').on('change',function(){
			var checked = $(this).is(':checked');
			if (checked){ hiddenField.slideDown(200); } else { hiddenField.slideUp(200); }
		});
	});
	
	// Conditional Shown Form Elements
	$('.conditional-shown').each(function(){
		var hiddenField = $(this);
		var condition = hiddenField.attr('data-conditional');
		var checked = $('input[name="'+condition+'"]').is(':checked');
		if (!checked){ hiddenField.show(); }
		$('input[name="'+condition+'"]').on('change',function(){
			var checked = $(this).is(':checked');
			if (!checked){ hiddenField.slideDown(200); } else { hiddenField.slideUp(200); }
		});
	});

	// Click the Sign In Modal Button
	$('body').on('click', '.signin', function(e){
		
		e.preventDefault();
		
		if ($('.tm-window').length){
			
			switch_ticksy_modal(false);
			setTimeout(function(){

				$('.tm-window').load(ticksy_js_vars.ajax_url, {'load':'signin_register_form'}, function(){
					switch_ticksy_modal(true);
					init_switchery('.tm-window');
				});
			},350);
			
		} else {
			
			create_ticksy_modal();
			$('.tm-window').load(ticksy_js_vars.ajax_url, {'load':'signin_register_form'}, function(){
				init_switchery('.tm-window');
			});
		
		}
			
	});
	
	// Click the Forgot Password Modal Link
	$('body').on('click', '.forgot-password', function(e){
		
		e.preventDefault();
		if ($('.tm-window').length)
		{
			switch_ticksy_modal(false);
			setTimeout(function(){
				$('.tm-window').load(ticksy_js_vars.ajax_url, {'load':'forgot_password_form'}, function(){
					init_switchery('.tm-window');
					switch_ticksy_modal(true);
					$('#forgot-password-form').find('input[name="email_address"]').select();
				});
			},350);
		}
		else
		{
			create_ticksy_modal();
			$('.tm-window').load(ticksy_js_vars.ajax_url, {'load':'forgot_password_form'}, function(){
				init_switchery('.tm-window');
			});
		}
		
	});
	
	// Click the Email Registration Modal Link
	$('body').on('click', '.email-registration', function(e){
		
		e.preventDefault();
		switch_ticksy_modal(false);
		setTimeout(function(){
			
			create_ticksy_modal();
			$('.tm-window').load(ticksy_js_vars.ajax_url, {'load':'email_registration_form'},function(){
				switch_ticksy_modal(true);
				$('#email-registration-form').find('input[name="first_name"]').select();
				SPI_Utils.addPasswordMeter( '#email-registration-form input.password-meter[type=password]' );
			});
			
		},350);
		
	});
	
	// Click the Sign In Form Submit Button
	$('body').on('click', '#reset-password-button', function(e){
		e.preventDefault();
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#forgot-password-form').serialize(),
			success	: function(data) {
				//alert(data);
				var result = data.split(':::');
				if (result[0] === 'error'){
					$('#forgot-password-form .error-message').html(result[1]).hide().fadeIn(200);
				} else if (result[0] === 'success'){
					window.location = "/";
				} else {
					//alert(data);
				}
			}
		});
	});
	
	// Click the Sign In Form Submit Button
	$('body').on('click', '#regular-signin-button', function(e){
		e.preventDefault();
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#regular-signin-form').serialize(),
			success	: function(data) {
				//alert(data);
				var result = data.split(':::');
				if (result[0] === 'error'){
					$('#regular-signin-form .error-message').html(result[1]).hide().fadeIn(200);
				} else if (result[0] === 'success'){
					window.location = result[1];
				} else {
					//alert(data);
				}
			}
		});
	});
	
	// Click the Register Form Submit Button
	$('body').on('click', '#email-registration-button', function(e){
		e.preventDefault();

		// var pwdStrength = SPI_Utils.getPwdScore( $('#email-registration-form input.password-meter[type=password]').val().trim());
		// if( pwdStrength < 80 )
		// {
		// 	var err = '<i class="ti ti-warning"></i>&nbsp;&nbsp;You have to set a stronger password!<br> Use uppercase, lowercase, numerical and special characters!';		
		// 	$('#email-registration-form .error-message').html(err).hide().fadeIn(200)
		// 	setTimeout (
		// 		function(){
		// 			$('#email-registration-form .error-message').hide()
		// 		}, 5000);
		// 	return false;
		// }

		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#email-registration-form').serialize(),
			success	: function(data) {
				
				var result = data.split(':::');
				if (result[0] === 'error'){
					$('#email-registration-form .error-message').html(result[1]).hide().fadeIn(200);
				} else if (result[0] === 'success'){
					window.location = "/profile/";
				} 
			}
		});
	});
	
	// Close the error/success banner
	$('body').on('click','.success-banner a.button, #error-banner a.button',function(e){
		
		e.preventDefault();
		$('.success-banner, #error-banner').removeClass('active');
		setTimeout(function(){
			$('.success-banner, #error-banner').hide();
		},200);
		
	});
	
	// Close the Modal Window
	$('body').on('click','.tm-overlay, .tm-window .close, .tm-window .cancel',function(e){
		e.preventDefault();
		close_ticksy_modal();
		return false;
	});
	
	// Submit Comment Form
	$('body').on('click','#submit-ticket-comment-button',function(e){
		
		e.preventDefault();
		var thisButton = $(this);
		thisButton.prop('disabled',true);
		
		setTimeout(function(){
			$('div.action-bar').spin('ticksy_tiny');
			$('div.action-bar').find('.dropdown').hide();
			$('div.action-bar').addClass('loading');
		},1);		
		
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#submit-comment-form').serialize(),
			success	: function(data) {
				//alert(data);
				console.log(data);
				var result = data.split(':::');
				if (result[0] === 'error'){
					
					thisButton.prop('disabled',false);
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
					$('div.action-bar').removeClass('loading');
					$('div.action-bar .ticksy-spinner').remove();
					
				} else if (result[0] === 'success'){
					
					setTimeout(function(){
						window.location = '/ticket/'+result[1];
					},200);
					
				} else {
					//alert(data);
					thisButton.prop('disabled',false);
					$('div.action-bar').removeClass('loading');
					$('div.action-bar .ticksy-spinner').remove();
				}
			}
		});
	    
	});
	
	$('body').on('change','#close-ticket-block input',function(){
		var isPrivateChecked = $('#make_private').is(':checked');
		var isClosedChecked = $('#close_ticket').is(':checked');
		if (isPrivateChecked && !isClosedChecked){
			$('.action-bar').addClass('private');
			$('#submit-ticket-comment-button').html(LANG_SendPrivateReply).addClass('private');
		} else if (!isPrivateChecked && isClosedChecked){
			$('.action-bar').removeClass('private');
			$('#submit-ticket-comment-button').html(LANG_SendReplyAndClose).removeClass('private');
		} else if (isPrivateChecked && isClosedChecked){
			$('.action-bar').addClass('private');
			$('#submit-ticket-comment-button').html(LANG_SendPrivateReplyAndClose).addClass('private');
		} else {
			$('.action-bar').removeClass('private');
			$('#submit-ticket-comment-button').html(LANG_SendReply).removeClass('private');
		}
	});
	
	$('body').on('change','input#make_private_comment',function(){
		var isPrivateChecked = $(this).is(':checked');
		if (isPrivateChecked){
			$('#edit-comment-button').html(LANG_UpdateCommentPrivate).removeClass('color-2').addClass('color-5');
		} else {
			$('#edit-comment-button').html(LANG_UpdateComment).addClass('color-2').removeClass('color-5');
		}
	});
	
	// Submit Profile Form
	$('body').on('click','#submit-profile-edit-button',function(e){
		
		e.preventDefault();
		$('.success-banner, #error-banner').removeClass('active');
		setTimeout(function(){
			$('.success-banner, #error-banner').hide();
		},200);
		
		// if($('input.password-meter[type=password]').length)
		// {
		// 	if($( 'input.password-meter[type=password]' ).val().trim() != '' )
		// 	{
		// 		var pwdStrength = SPI_Utils.getPwdScore( $('input.password-meter[type=password]').val().trim());
		// 		if( pwdStrength < 80 )
		// 		{
		// 			create_ticksy_modal();
		// 			var err = '<h3 class="bordered"><span>Whoops, something went wrong ...</span></h3><ul><li> You have to set a stronger password!<br> Use uppercase, lowercase, numerical and special characters! </li></ul><p><a href="#" class="cancel button color-2 sm">Okay</a></p><a class="close" href="#"><i class="ti ti-times"></i></a>';
		// 			$('.tm-window').html(err);			
		// 			return false;
		// 		}
		// 	}
		// }
		
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#edit-profile-form').serialize(),
			success	: function(data) 
			{				
				var result = data.split(':::');
				if (result[0] === 'error')
				{
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
				} 
				else if (result[0] === 'success')
				{
					
					$('#submit-profile-edit-button').attr('disabled',true);
					setTimeout(function(){
						window.scrollTo(0,0);
						show_success_banner(result[1]);
						$('#submit-profile-edit-button').attr('disabled',false);
						$('input[name="password"], input[name="password_verify"]').val('');
						var rpc = $('.panel-hidden[data-panel="personal_info"]').data('rpc');
						if(rpc == 1) 
						{
							$('.panel-hidden[data-panel="personal_info"]').data('rpc',0);
							$('.panel-hidden[data-panel="personal_info"]').attr('data-rpc',0);
							$('.ticksy-page-panel > article > h3 > span.password_change_required').remove();
						}
					},500);
				}
			}
		});
	    
	});
	
	// Delete a Comment
	$('body').on('click','.delete-comment',function(e){
		
		e.preventDefault();
		var comment_id = $(this).attr('data-comment-id');
		var ticket_id = $('.ticketBlock').attr('data-ticket-id');
		var confirmText = $(this).attr('data-confirm');
		var confirm_task = confirm(confirmText);
		
		if (confirm_task){
		
			$('#data-ajax-loader').load(ticksy_js_vars.ajax_url, {'action':'delete_comment','comment_id':comment_id,'ticket_id':ticket_id}, function(result){
				result = result.split(':::');
				if (result[0] === 'error'){
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
				} else if (result[0] === 'success'){
					$('#commentBlock-'+result[1]).slideUp(200,function(){
						$(this).remove();
					});
				}
			});
		
		}
		
	});
	
	// Delete an Attachment
	$('body').on('click','.delete-attachment',function(e){
		
		e.preventDefault();
		var thisAttachmentsBlock = $(this).parents('.attachments');
		var attachment_id = $(this).attr('data-attachment-id');
		var comment_id = $(this).attr('data-comment-id');		
		var confirmText = $(this).attr('data-confirm');
		var confirm_task = confirm(confirmText);
		
		if (confirm_task){
			var data = {'action':'delete_attachment', 'attachment_id':attachment_id, 'comment_id':comment_id};
			$('#data-ajax-loader').load(ticksy_js_vars.ajax_url, data, function(result){
				
				result = result.split(':::');
				if (result[0] === 'error'){
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
				} else if (result[0] === 'success'){
					$('#attachment-'+attachment_id).remove();
					var attachmentsLeft = thisAttachmentsBlock.find('.attachment-item').length;
					if (!attachmentsLeft){
						thisAttachmentsBlock.remove();
					}
				}
			});
		
		}
		
	});
	
	// Edit a Comment
	$('body').on('click','.edit-comment',function(e){
		
		e.preventDefault();
		var comment_id = $(this).attr('data-comment-id');
		var comment_block = $('#commentBlock-'+comment_id).find('.comment');
		
		// Find any already open editors and hide those
		$('.comment .redactor-box').each(function(){
			var openBoxID = $(this).parents('li').attr('data-comment-id');
			removeCommentEditor(openBoxID);
		});
		
		comment_block.load(ticksy_js_vars.ajax_url, {'load':'edit_comment','comment_id':comment_id}, function(){
			// Comment edit textarea loaded. Let's Redactorfy it.
			init_redactor_comments(comment_block);
			initRedactorReturn();
			init_switchery('#make-private-block');
		});
		
	});
	
	// Submit Edit Comment Form
	$('body').on('click','#edit-comment-button',function(e){
		
		e.preventDefault();
		
		var comment_block = $(this).parents('li');
		var thisButton = $(this);
		thisButton.prop('disabled',true);
		
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#edit-comment-form').serialize(),
			success	: function(data) {
				
				var result = data.split(':::');
				if (result[0] === 'error'){
					
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
					thisButton.prop('disabled',false);
					
				} else if (result[0] === 'success'){
					
					$.post(ticksy_js_vars.ajax_url, {'load':'single_comment','comment_id':result[1]}, function( data ){
						comment_block = comment_block.replaceWith(data);
						init_redactor_comments(comment_block);
						init_layout_features();
						comment_block.find('pre').each(function(i, block) {
							hljs.highlightBlock(block);
						});
					});
					
				} else {
					
					thisButton.prop('disabled',false);
					
				}
			}
		});
	    
	});
	
	$('body').on('click','.search-button',function(e){
		e.preventDefault();
		$(this).parents('form').trigger('submit');
	});
	
	$('body').on('submit','form.mobile-search-form',function(){
		var thisValue = $(this).find('input[name="q"]').val();
		if (!thisValue){
			return false;
		}
	});
	
	$('#search-form').on('submit',function(){
		var thisValue = $(this).find('input[name="q"]').val();
		if (!thisValue){
			return false;
		}
	});
	
	$('body').on('click','#cancel-edit-comment',function(e){
		e.preventDefault();
		var comment_block = $(this).parents('li');
		var openBoxID = comment_block.attr('data-comment-id');
		removeCommentEditor(openBoxID);
	});
	
	$('body').on('click','#cancel-post-comment',function(e){
		e.preventDefault();
		$('div.action-bar').removeClass('active');
		$('div.reply-box').hide();
	});

	$('body').on('click','#unsubscribe',function(e){
		e.preventDefault();

		var ticket_id = $("[name='ticket_id']").val();
		var confirmUnsubscribe = confirm(LANG_ConfirmUsubscribe);
		if (confirmUnsubscribe)
		{
			ajaxRequests.push = $.ajaxQueue({
				url 	: ticksy_js_vars.ajax_url,
				data	: 'action=unsubscribe&ticket_id='+ticket_id,
				success	: function(data) {
					//alert(data);
					var result = data.split(':::');
					if (result[0] == 'error'){
						create_ticksy_modal();
						$('.tm-window').html(result[1]);
					} else if (result[0] == 'success'){
						setTimeout(function(){
							window.location = '/';
						},200);
					}
				}
			});
		}	
	});
	
	init_layout_features();
	init_redactor_comments();
	init_switchery('');
	
	// Shortcut Keys
	if ($('#submit-comment-form').length){
		
		initRedactorReturn();
		
		$('body').on('click','.action-bar .reply',function(e){
			e.preventDefault();
			if ($('#customer-notes').length){ $('#customer-notes').hide(); }
			$('div.action-bar').addClass('active reply').removeClass('note customer-notes');
			$('.action-bar .dropdown').removeClass('active');
			$('div.note-box').hide();
			$('div.reply-box').show();
			
			var replyBoxPosition = $('div.reply-box').offset().top + 1,
				redactorObj = $('div.reply-box').find('textarea.redactor-comment').redactor('core.object');
			redactorObj.focus.end();
			if (redactorObj.detect.isMobile()){
				setTimeout(function(){	
					window.scrollTo(0,replyBoxPosition);
				},100);
			}
			
		});
	
		$(window).keyup(function (event) {
				
			// "R" keypress to bring up "reply" form
		    if(event.which === 82){
			    
			    // If the "Edit Comment" form is already showing, don't do anything.

				if (
					$("textarea").is(":focus") || 
					$("input").is(":focus") || 
					$('.comment').find('.redactor-box').is(':visible') || 
					$('.note-box').find('.redactor-box').is(':visible') || 
					$('#customer-notes').find('.redactor-box').is(':visible') || 
					$('.note-box').find('.redactor-box').is(':visible') || 
					$('.slicknav_nav').is(':visible')||
					!$('a.reply').is(':visible')
				   )
				{
				    // Do nothing
				} else {
					if ($('#customer-notes').length){ $('#customer-notes').hide(); }
					$('div.action-bar').addClass('active reply').removeClass('note customer-notes');
					$('div.note-box').hide();
				    $('div.reply-box').show();
				    $('div.reply-box').find('.redactor-layer').focus();
				}
				
		    }
		    
		});
		
	}
	
	// Attachment fields
	$('#attachment-fields').on('change', 'input[type="file"]:last-child', function(){
		var lastVal = $(this).val();
		lastVal = lastVal.replace(/C:\\fakepath\\/i, '');
		$('#attachment-visuals').append('<span><i class="ti ti-paperclip"></i>&nbsp;&nbsp;&nbsp;'+lastVal+'<i class="ti ti-times"></i></span>');
		$('#attachment-fields').append('<input type="file" name="attachments[]">');	
	});
	
	$('#attachment-visuals').on('click', '.fa-times', function(){
		var thisPos = $(this).parent().index();
		$('#attachment-fields input:eq('+thisPos+')').remove();
		$(this).parent().remove();
	});

	// Initialize the Comment Box and Dropzone
	function init_redactor_comments(insideThis){
		
		insideThis = (typeof insideThis === "undefined") ? false : insideThis;
		var textareaBlock, redactorMinHeight, pluginsVal;
		
		if (insideThis){
			textareaBlock = insideThis.find('textarea.redactor-comment');
		} else {
			textareaBlock = jQuery('textarea.redactor-comment');
		}
		
		if (textareaBlock.hasClass('editing')){
			redactorMinHeight = false;
		} else {
			redactorMinHeight = 200;
		}
		
		if (textareaBlock.hasClass('backend')){
			
			if (textareaBlock.hasClass('note')){
				pluginsVal = ['source','iconic2'];
				textareaBlock.redactor({
					shortcutsAdd: {
        				'ctrl+shift+0': { func: 'block.format', params: ['pre'] }
    				},
    				callbacks: {
				        beforeInsertingLink: function(link){
				            link.url = link.url.replace(/['"]+/g,'');
				            return link;
				        }
				    },
					buttons: ['format', 'bold', 'italic', 'lists', 'image', 'link'],
					formatting: ['p', 'pre'],
					imageUpload: '/app/'+ticksy_public_theme+'/shared_assets/amazon/s3_image_upload.php',
					plugins: pluginsVal,
					linkNewTab: true,
					toolbarFixed: false,
					minHeight: redactorMinHeight,
					linkify: true,
					linkNofollow: true,
					linkSize: 1000
				});
			} else {
				pluginsVal = ['clips','article_links','source','iconic2','emoticons'];
				textareaBlock.redactor({
					shortcutsAdd: {
        				'ctrl+shift+0, meta+shift+0': { func: 'block.format', params: ['pre'] }
    				},
    				callbacks: {
				        beforeInsertingLink: function(link){
				            link.url = link.url.replace(/['"]+/g,'');
				            return link;
				        },
				        imageUpload: function(image, json){
				             console.log( json );
				        },
				        imageUploadError: function(json, xhr){
				             console.log( json );
				        }
				    },
					buttons: ['format', 'bold', 'italic', 'lists', 'image', 'link'],
					formatting: ['p', 'pre'],
					imageUpload: '/app/'+ticksy_public_theme+'/shared_assets/amazon/s3_image_upload.php',
					plugins: pluginsVal,
					linkNewTab: true,
					toolbarFixed: false,
					minHeight: redactorMinHeight,
					linkify: true,
					linkNofollow: true,
					linkSize: 1000
				});
			}
			
		} else {
			pluginsVal = ['iconic2'];
			textareaBlock.redactor({
				shortcutsAdd: {
					'ctrl+shift+0': { func: 'block.format', params: ['pre'] }
				},
				callbacks: {
			        beforeInsertingLink: function(link){
			            link.url = link.url.replace(/['"]+/g,'');
			            return link;
			        },
			        imageUpload: function(image, json){
			             console.log( json );
			        },
			        imageUploadError: function(json, xhr){
			             console.log( json );
			        }
			    },
				buttons: ['format', 'bold', 'italic', 'lists', 'link', 'emoticons'],
				formatting: ['p', 'pre'],
				imageUpload: '/app/'+ticksy_public_theme+'/shared_assets/amazon/s3_image_upload.php',
				plugins: pluginsVal,
				linkNewTab: true,
				toolbarFixed: false,
				minHeight: redactorMinHeight,
				convertLinks: true,
				convertUrlLinks: true,
				linkNofollow: true,
				linkSize: 1000,
				convertImageLinks: false
			});
		}
		
	}

});

// Fix scrolling in dropdowns
function fix_tab_scrolling(){
	
	"use strict";
	
	jQuery('.tc-tab-content:not(.any-height)').unbind('mousewheel');
	jQuery('header#header nav .tickets span.dropdown').unbind('mousewheel');
	
	jQuery('.tc-tab-content:not(.any-height)').bind('mousewheel', function(e){
		jQuery(this).scrollTop(jQuery(this).scrollTop()-e.originalEvent.wheelDeltaY);
		return false;    
	});
	
	jQuery('header#header nav .tickets span.dropdown').bind('mousewheel', function(e){
		jQuery(this).scrollTop(jQuery(this).scrollTop()-e.originalEvent.wheelDeltaY);
		return false;    
	});
	
}

// Create Ticksy Modal
function create_ticksy_modal(){
	
	"use strict";
	
	if (!jQuery('.tm-window').length){
		jQuery('body *').blur();
		jQuery('<div class="ticksy-modal"><div class="tm-overlay"></div><div class="tm-window"><div style="height:100px"></div></div></div>').appendTo('body');
		jQuery('.ticksy-modal .tm-window').spin('ticksy');
	}
}

// Show Success Bar
function show_success_banner(successContent){
	
	"use strict";
	
	jQuery('.success-banner').show();
	jQuery('.success-banner').find('p').replaceWith(successContent);
	setTimeout(function(){
		jQuery('.success-banner').addClass('active');
	},50);
	
}

// Close Ticksy Modal
function close_ticksy_modal(){
	
	"use strict";
	
	if ($('.tm-window').length){
		jQuery('.ticksy-modal').fadeOut(200);
		jQuery('.ticksy-modal').addClass('tm-closing');
		setTimeout(function(){
			jQuery('.ticksy-modal').remove();
		},300);
	}
}

// Switch Ticksy Modal
function switch_ticksy_modal(show){
	
	"use strict";
	
	if (show){
		jQuery('.ticksy-modal').removeClass('tm-switching');
		setTimeout(function(){
			jQuery('.tm-window').show();
		},200);
	} else {
		jQuery('.ticksy-modal').addClass('tm-switching');
		setTimeout(function(){
			jQuery('.tm-window').hide();
			jQuery('.tm-window').html('');
		},100);
	}
	
}

// Initialize the Ajax Spinner and FitVids
function init_layout_features(){
	
	"use strict";
	
	jQuery('.fancybox').fancybox({
		title: false,
		width	: '100%',
		height	: '100%',
		autoSize	: true,
		fitToView	: true,
	});
	jQuery('.authLoader .spinner').spin('ticksy');
	jQuery('.page-content').fitVids();	
	
}

function init_switchery(insideThis){
	
	"use strict";
	
	insideThis = (typeof insideThis === "undefined") ? false : insideThis + ' ';
	
	var elem = document.querySelector(insideThis + '.js-switch'),
		elems;
	
	new Switchery(elem,{
		color          : '#'+color_2,
		secondaryColor : '#'+color_5,
		jackColor      : '#fff',
		className      : 'switchery',
		speed          : '0.3s',
   		size           : 'default'
	});
	
	elems = Array.prototype.slice.call(document.querySelectorAll(insideThis + '.js-switch-sm'));
	elems.forEach(function(html) {
	  
		new Switchery(html,{
			color          : '#'+color_2,
			jackColor      : '#fff',
			className      : 'switchery',
			speed          : '0.3s',
			size           : 'small'
		});
		
	});
	
	elems = Array.prototype.slice.call(document.querySelectorAll(insideThis + '.js-switch-red'));
	elems.forEach(function(html) {
	  	new Switchery(html,{
			color          : '#'+color_5,
			jackColor      : '#fff',
			className      : 'switchery',
			speed          : '0.3s',
			size           : 'small'
		});
	});
	
	elems = Array.prototype.slice.call(document.querySelectorAll(insideThis + '.js-switch-grey'));
	elems.forEach(function(html) {
		new Switchery(html,{
			color          : '#ccc',
			jackColor      : '#fff',
			className      : 'switchery',
			speed          : '0.3s',
			size           : 'small'
		});
	});
}

// Initialize the CMD+RETURN keystroke
function initRedactorReturn(insideThis){
	
	"use strict";
	
	insideThis = (typeof insideThis === "undefined") ? false : insideThis;

	if (insideThis){
		// Submit form on CMD + ENTER or CTRL + ENTER
		insideThis.find(".redactor-box").keydown(function(event) {
			if((event.metaKey || event.ctrlKey) && event.which === 13){
			    jQuery(this).parents('form').find('button').trigger('click');
		    }
		});
	} else {
		jQuery(".redactor-box").keydown(function(event) {
			if((event.metaKey || event.ctrlKey) && event.which === 13){
			    jQuery(this).parents('form').find('button').trigger('click');
		    }
		});
	}
}

// Remove the comment editor
function removeCommentEditor(comment_id){
	"use strict";
	loadSingleComment(comment_id);
}

// Load a single comment
function loadSingleComment(comment_id){
	
	"use strict";
	var comment_block = jQuery('#commentBlock-'+comment_id);
	
	jQuery.post(ticksy_js_vars.ajax_url, {'load':'single_comment','comment_id':comment_id}, function( data ){
		comment_block = comment_block.replaceWith(data);
		//init_redactor_comments(comment_block);
		init_layout_features();
		comment_block.find('pre').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	});

}

function enable_loader(){
	"use strict";
	jQuery('body').addClass('full-loader-active');
	jQuery('body.full-loader-active .full-loader-overlay').spin('ticksy');
}

function disable_loader(){
	"use strict";
	jQuery('body.full-loader-active .full-loader-overlay').spin(false);
	jQuery('body').removeClass('full-loader-active');
}

function init_tooltips(){
	"use strict";
	jQuery('.tooltip').not('.tooltipstered').tooltipster({
		 theme: 'tooltipster-light',
		 delay: 150,
		 speed: 150,
		 animation: 'tiny-pop',
	});
	
}

// Set a Cookie
function setCookie(cookiename,cookievalue){
	"use strict";
    document.cookie = cookiename + '=' + cookievalue + '; max-age=" + 60*60*24*30 + "; path=/';
}


// Ajax Queue Function
(function($) {
	
	"use strict";
 
	// jQuery on an empty object, we are going to use this as our Queue
	var ajaxQueue = $({});
	 
	$.ajaxQueue = function( ajaxOpts ) {
	    var jqXHR,
	        dfd = $.Deferred(),
	        promise = dfd.promise();
	 
	    // queue our ajax request
	    ajaxQueue.queue( doRequest );
	 
	    // add the abort method
	    promise.abort = function( statusText ) {
	 
	        // proxy abort to the jqXHR if it is active
	        if ( jqXHR ) {
	            return jqXHR.abort( statusText );
	        }
	 
	        // if there wasn't already a jqXHR we need to remove from queue
	        var queue = ajaxQueue.queue(),
	            index = $.inArray( doRequest, queue );
	 
	        if ( index > -1 ) {
	            queue.splice( index, 1 );
	        }
	 
	        // and then reject the deferred
	        dfd.rejectWith( ajaxOpts.context || ajaxOpts, [ promise, statusText, "" ] );
	        return promise;
	    };
	 
	    // run the actual query
	    function doRequest( next ) {
	        jqXHR = $.ajax( ajaxOpts )
	            .done( dfd.resolve )
	            .fail( dfd.reject )
	            .then( next, next );
	    }
	 
	    return promise;
	};
	 
})(jQuery);