jQuery(document).ready(function($) {
	
	if ($('input.ticksy-instant-search').length){
		
	    $('input.ticksy-instant-search').each(function(){
		    var thisSearchField = $(this),
		    	searchType = thisSearchField.attr('data-searchType');
		    init_instant_search(thisSearchField,searchType);
	    });
	    
    }
    
    function init_instant_search(thisSearchField,type){
	    
	    var searchTypeTimer = 0,
	    	thisSearchParent = thisSearchField.parent(),
	    	thisSearchResults = thisSearchParent.find('.ticksy-instant-results'),
	    	searchQuery = false,
	    	previousSearchQuery = false,
	    	removeSearchResultsTimer = false,
	    	searchFieldBlurTimer = false,
	    	fetchSearchResultsTimer = false,
	    	searchingAjax = $.ajax();
	    		    
		thisSearchField.on('keydown',function(e){
			
			thisSearchResults = thisSearchParent.find('.ticksy-instant-results');
			
			if (e.which == 27){
				thisSearchField.val('').blur();
				removeSearchResults(thisSearchResults);
				e.preventDefault();
				return false;
			}				
			
			thisSearchField.trigger('instant_search_results_display');
			
	    });
	    
	    thisSearchField.on('instant_search_results_display',function(){
			
			if (searchTypeTimer) {
			    clearTimeout(searchTypeTimer);
			}
			searchTypeTimer = setTimeout(function(){
				
				clearTimeout(removeSearchResultsTimer);
				clearTimeout(fetchSearchResultsTimer);
				
				searchingAjax.abort();
				searchQuery = thisSearchField.val();
				
				if (searchQuery.length > 2){
					
					if (searchQuery != previousSearchQuery && previousSearchQuery != false || !previousSearchQuery || !thisSearchParent.find('.ticksy-instant-results').length){
						
						previousSearchQuery = searchQuery;
					
						if (!thisSearchParent.find('.ticksy-instant-results').length){
							
							thisSearchParent.append('<div class="ticksy-instant-results"></div>');
							
							// Keep page from scrolling when scrolling in instant search list.
							thisSearchParent.find('.ticksy-instant-results').bind('mousewheel', function(e){
							    $(this).scrollTop($(this).scrollTop()-e.originalEvent.wheelDeltaY);
							    return false;    
							});
												
						}
							
						thisSearchResults = thisSearchParent.find('.ticksy-instant-results');
						
						if (thisSearchField.parents('.backend-search').length){
						    thisSearchField.parents('.backend-search').addClass('showing-results');
						}
						
						thisSearchResults.html('');
						setTimeout(function(){
							thisSearchResults.addClass('active');
						},1);
						var searchSpinner = thisSearchResults.spin('ticksy_tiny_centered');
						
						fetchSearchResultsTimer = setTimeout(function(){
						
							searchingAjax = $.ajax({
								method	: 'post',
								url 	: ticksy_js_vars.ajax_url,
								data	: 'action=instant_search&type='+type+'&query='+searchQuery,
								success	: function(html) {
									
									thisSearchResults.html(html);
									
									thisSearchParent.find('.tc-tab-content').bind('mousewheel', function(e){
									    $(this).scrollTop($(this).scrollTop()-e.originalEvent.wheelDeltaY);
									    return false;    
									});
									
									if (typeof searchSpinner != 'undefined'){
										searchSpinner.spin(false);
									}
									
								}
							});
						
						},750);
					
					}
				
				} else {
					
					if (thisSearchResults){
						removeSearchResults(thisSearchResults);
					}
					
				}
				
			}, 300);
			
	    });
	    
	    thisSearchField.on('blur',function(e){
		    if (!thisSearchField.hasClass('mobile-search-field')){
			    clearTimeout(searchFieldBlurTimer);
			    searchFieldBlurTimer = setTimeout(function(){
				    if (thisSearchResults.find("a:focus").length == 0){
					    removeSearchResults(thisSearchResults);
				    } else {
					    e.preventDefault();
				    }
				},100);
			}
		});
		
		// Show results when clicked into again.
		thisSearchField.on('focus',function(e){
			previousSearchQuery = false;
		    $(this).trigger('keydown');
		});
		
		$(document).click(function(event) {
			clearTimeout(searchFieldBlurTimer);
		    searchFieldBlurTimer = setTimeout(function(){
			    if(!$(event.target).closest(thisSearchResults).length && !$(event.target).is(thisSearchResults) &&
			       !$(event.target).closest(thisSearchField).length && !$(event.target).is(thisSearchField)) {
			        if($(thisSearchResults).is(":visible")) {
				        thisSearchField.val('');
			            removeSearchResults(thisSearchResults);
			        }
			    }  
			},100);      
		});
	    
    }
    
});

function removeSearchResults(thisSearchResults){
    if (thisSearchResults.parents('.backend-search').length){
	    thisSearchResults.parents('.backend-search').removeClass('showing-results');
	}
    thisSearchResults.removeClass('active');
	removeSearchResultsTimer = setTimeout(function(){
		thisSearchResults.remove();
	},200);
}