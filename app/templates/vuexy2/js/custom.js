var searchInputDefault = jQuery('#banner').find('input.ticksy-instant-search').attr('placeholder');

jQuery(document).ready(function($) {

	$("img.parallax-slider").initialize( function(){
		$(this).on('load',function(){
			$('#banner').css({'background':'transparent'});
			$('#banner').css({'height':'60% !important'});
		});
	});
	
	$('#mobile-nav').slicknav({
		prependTo	: 'header#header',
		label		: ''
	});
	
	if ($('#submit-ticket-form').length)
	{
		
		var categorySelectCustom = $('.ticksy-custom-select[data-select-id="ticketSubmitCategory"]');
		var categorySelectObj = $('#ticketSubmitCategory');
	
		var submitHash = window.location.hash;
		if (submitHash){
			submitHash = submitHash.split('#');
			submitHash = submitHash[1];
			setTimeout(function(){
				categorySelectCustom.find('.ticksy-custom-select-list span[data-value="'+submitHash+'"]').trigger('click');
				categorySelectCustom.removeClass('fade active');
			},10);
		} else {
			var categoryTotalOptions = categorySelectObj.find('option').length;
			categoryTotalOptions = categoryTotalOptions - 1;
			if (categoryTotalOptions == 1){
				setTimeout(function(){
					categorySelectCustom.find('.ticksy-custom-select-list span:first-child').trigger('click');
					categorySelectCustom.removeClass('fade active');
				},10);
			}
		}
		
		$('body').on('change','#ticketSubmitCategory',function(){
			var categorySelect = $(this),
				currentVal = categorySelect.val();
			window.location.hash = currentVal;
		});
	
	}
	
	$('body').on('click','nav .search',function(e){
		
		var thisButton = $(this);
		if (!thisButton.hasClass('active')){
			e.preventDefault();
			thisButton.addClass('active');
			$('.frontend-search input[name="q"]').focus();
			detectClickedOffSearch(thisButton);
			setTimeout(function(){
				thisButton.addClass('complete');
			},200);
			$('nav > a, nav > span.with-dd').addClass('search-active');
		}
		
	});
	
	function detectClickedOffSearch(container){
		
		$("body").keyup(function (event) {
			
			var backendSearch = $('nav .search'),
				thisSearchResults = backendSearch.find('.ticksy-instant-results');
			
		    if(event.which == 27){
			    
			    if (backendSearch.hasClass('active')){
					backendSearch.removeClass('active');
					backendSearch.removeClass('complete');
					removeSearchResults(thisSearchResults);
					$('.frontend-search input[name="q"]').val('').blur();
					
					setTimeout(function(){
						$('nav > a, nav > span.with-dd').removeClass('search-active');
					},200);
			   	}
			   	
		    }
		});
		
		$(document).click(function(e) {
			
			var thisSearchResults = container.find('.ticksy-instant-results');
	
			if(!$(e.target).closest(thisSearchResults).length && !$(e.target).is(thisSearchResults) && !$(e.target).closest(container).length && !$(e.target).is(container)) {	       	
			    container.removeClass('active');
			    $('.frontend-search input[name="q"]').blur().val('');
			    removeSearchResults(thisSearchResults);
				container.removeClass('complete');
			    setTimeout(function(){
					$('nav > a, nav > span.with-dd').removeClass('search-active');
				},200);
			}
			    
		});
	
	}
	
	// Submit Ticket Form
	$('body').on('click','#submit-ticket-button',function(e){
		
		e.preventDefault();
		
		var thisButton = $(this);
		thisButton.attr('disabled',true);

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
		// 			thisButton.attr('disabled',false);		
		// 			return false;
		// 		}
		// 	}
		// }
		
		ajaxRequests.push = $.ajaxQueue({
			type	: 'post',
			url 	: ticksy_js_vars.ajax_url,
			data	: $('#submit-ticket-form').serialize(),
			success	: function(data) {				
				var result = data.split(':::');
				if (result[0] == 'error'){
					thisButton.attr('disabled',false);
					if($('#envato_purchase_code_wrap input').length > 0)
					{

						var external_purchase_required = $('#external_purchase_verification_div').length;
						if( external_purchase_required > 0 )
						{
							$('#external_purchase_verification_div').slideUp(150);
							$('#external_purchase_verification_div').fadeIn(100);

							if( $('[name="external_purchase_code"]').length == 0 && $('[name="envato_purchase_code"]').length > 0 )
							{
								$('[name="envato_purchase_code"]').attr('name','external_purchase_code');
							}
						}
						
						if($('#envato_purchase_code_wrap input').val().trim() != "")
						{
							$('form#submit-ticket-form #envato_purchase_code_wrap').show();
						}
					}
					
					create_ticksy_modal();
					$('.tm-window').html(result[1]);
				} else if (result[0] == 'success'){
					window.location = '/ticket/'+result[1];
				} else {
					//alert(data);
					thisButton.attr('disabled',false);
				}
			}
		});
	    
	});
	
	// Full Screen Banner Repositioning
	if ($('#banner').length && $('#banner').hasClass('full-screen-banner')){
		
		$(window).on('load',function(){
			reposition_banner_text_block();
		});
		
		$(window).on('resize',function(){
			reposition_banner_text_block();
		});
	
	}
	
	if ($('#banner').length){
			
		$(window).on('load',function(){
			update_search_placeholder();
		});
		
		$(window).on('resize',function(){
			update_search_placeholder();
		});
	
	}

	
	// Change category dropdown on submit ticket form.
	// $('body').on('change','#ticketSubmitCategory_dev',function(){
	$('body').on('change','#ticketSubmitCategory',function(){

		var selected_option = $(this).find('option:selected');
		var type = selected_option.data('type');
		var already_verified = false; 
		$('.code_wrap input').val('');        
		$('#check_type').val(type);
		
		if(type == 'edd' || type == 'envato' || type == 'themely' || type == 'freemius') {
			var product_id = selected_option.data(type+'-product');
			$('#verified_categories span').each(function() {				
				
				if ($(this).attr('data-code')!='' && $(this).attr('data-code') !== null && (product_id == $(this).attr('data-product-id')))
				{ 
					already_verified = true; 
					$('input#'+type+'_purchase_code').val($(this).attr('data-code')); 					
				}
			});
		}		
		$('.code_wrap').hide();  
        if(type!='' && !already_verified) {  
			$('#'+type+'_purchase_code_wrap').slideDown(150);			
		}
		$('.submit-registration-row').slideDown(150);

	});

	
	$('body').on('keyup','#external_purchase_code_wrap input[name="external_purchase_code"]',function(){
		$(this).trigger('change');
	});
	
	$('body').on('change','#external_purchase_code_wrap input[name="external_purchase_code"]',function(){
		if ($(this).val())
		{
			$('#external_purchase_code_wrap').addClass('manual');
			$('.submit-registration-row').slideDown(150);
		}
		else 
		{
			$('#external_purchase_code_wrap').removeClass('manual');
			// $('.submit-registration-row').slideUp(150);
			$('.submit-registration-row').slideDown(150);
		}
	});

	$('body').on('keyup','#envato_purchase_code_wrap input[name="envato_purchase_code"]',function(){
		$(this).trigger('change');
	});
	
	$('body').on('change','#envato_purchase_code_wrap input[name="envato_purchase_code"]',function(){
		if ($(this).val()){
			$('#envato_purchase_code_wrap').addClass('manual');
			$('.submit-registration-row').slideDown(150);
		} else {
			$('#envato_purchase_code_wrap').removeClass('manual');
			// $('.submit-registration-row').slideUp(150);
			$('.submit-registration-row').slideDown(150);
		}
	});
	
	if ($('.public-private-switch input[type="checkbox"]').length){
			
		var thisSwitcheryWrapper = $('.public-private-switch');
		
		thisSwitcheryWrapper.find('span').removeClass("active");
		var currentValue = thisSwitcheryWrapper.find('input[type="checkbox"]').is(':checked');
		if (currentValue){
			thisSwitcheryWrapper.find('span.public').addClass("active");
		} else {
			thisSwitcheryWrapper.find('span.private').addClass("active");
		}
		
		$('.public-private-switch').on('change', 'input[type="checkbox"]', function(){
			thisSwitcheryWrapper.find('span').removeClass("active");
			var currentValue = $(this).is(':checked');
			if (currentValue){
				thisSwitcheryWrapper.find('span.public').addClass("active");
			} else {
				thisSwitcheryWrapper.find('span.private').addClass("active");
			}
		});
		
	}

});

function update_search_placeholder(){
	var searchInput = jQuery('#banner').find('input.ticksy-instant-search'),
		windowWidth = $(window).width();
		
	if (windowWidth <= 650){
		searchInput.attr('placeholder','Search ...');
	} else {
		searchInput.attr('placeholder',searchInputDefault);
	}
}

function reposition_banner_text_block(){
	var bannerTextBlock = jQuery('#banner').find('div.text'),
		bannerTextBlockHeight = bannerTextBlock.height() / 2;
		
	bannerTextBlock.css({'margin-top':'-'+bannerTextBlockHeight+'px'});
}
