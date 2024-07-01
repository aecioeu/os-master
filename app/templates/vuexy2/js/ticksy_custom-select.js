jQuery(document).ready(function($) {

	// Find all of the custom <select> elements.
	$('.custom-select-element').each(function(){

		var thisSelectElement = $(this),
			thisSelectID = thisSelectElement.attr('id'),
			thisSelectType = thisSelectElement.attr('data-type'),
			thisSelectPretext = thisSelectElement.attr('data-pretext'),
			thisSelectEmptyMessage = thisSelectElement.attr('data-empty-message'),
			thisSelectStyles = thisSelectElement.attr('style'),
			thisSelectClasses = thisSelectElement.attr('data-classes'),
			isMultiple = thisSelectElement.attr('multiple'),
			isDisabled = thisSelectElement.attr('disabled'),
			multipleData = '';
			parentElement = thisSelectElement.parent(),
			customOptionsHTML = '',
			customOptions = '',
			defaultText = '';
			totalSelected = 0;

		if (typeof thisSelectClasses == 'undefined'){
			thisSelectClasses = '';
		} else {
			thisSelectClasses = ' '+thisSelectClasses;
		}

		if (typeof thisSelectEmptyMessage == 'undefined'){
			thisSelectEmptyMessage = '';
		}

		if (typeof isMultiple == 'undefined'){
			multipleData = ' data-multiple=""';
			isMultiple = false;
		} else {
			multipleData = ' data-multiple="true"';
			isMultiple = true;
			thisSelectClasses += ' multiple';
		}

		if (typeof isDisabled !== 'undefined' && isDisabled == 'disabled'){						
			thisSelectClasses += ' disabled';
		}

		if (typeof thisSelectPretext == 'undefined'){
			thisSelectPretext = '';
		}

		if (typeof thisSelectStyles == 'undefined'){
			thisSelectStyles = '';
		}

		var customSelectHTML = '<span'+multipleData+' data-pretext="'+thisSelectPretext+'" data-select-id="'+thisSelectID+'" style="'+thisSelectStyles+'" class="ticksy-custom-select'+thisSelectClasses+'">\n';

		if (thisSelectElement.find('optgroup').length){

			customOptions = generateSelectOptions(thisSelectElement,thisSelectType);
			defaultText = customOptions["defaultText"];

			thisSelectElement.find('optgroup').each(function(){

				var thisOptGroup = $(this);
				var groupName = thisOptGroup.attr('label');
				customOptions = generateSelectOptions(thisOptGroup,thisSelectType);
				customOptionsHTML += '<span class="option-group"><strong>'+groupName+'</strong>'+customOptions["customOptionsHTML"]+'</span>';
				totalSelected = customOptions["totalSelected"];

			});

		} else {

			customOptions = generateSelectOptions(thisSelectElement,thisSelectType);
			customOptionsHTML = customOptions["customOptionsHTML"];
			defaultText = customOptions["defaultText"];
			totalSelected = customOptions["totalSelected"];

		}

		if (isMultiple && totalSelected > 1){
			customSelectHTML += '\t<span class="ticksy-custom-select-default-text">'+defaultText+'</span>\n';
		} else {
			customSelectHTML += '\t<span class="ticksy-custom-select-default-text">'+thisSelectPretext+defaultText+'</span>\n';
		}

		if (isMultiple){
			customSelectHTML += '\t<span class="ticksy-custom-select-list-wrapper">\n';
		}

		customSelectHTML += '\t<span class="ticksy-custom-select-list">\n';

		if (!customOptionsHTML){
			customSelectHTML += '<span style="padding-left:10px;">'+thisSelectEmptyMessage+'</span>';
		} else {
			customSelectHTML += customOptionsHTML;
		}

		customSelectHTML += '\t</span>\n';

		if (isMultiple){
			customSelectHTML += '\t<span class="ticksy-custom-select-options"><a href="#" class="ticksy-custom-select-all"><i class="ti ti-check"></i>&nbsp;&nbsp;'+ticksy_lang_strings.select_all+'</a><a href="#" class="ticksy-custom-select-done">'+ticksy_lang_strings.done+'</a></span></span>\n';
		}

		customSelectHTML += '\n\t<span class="ticksy-custom-select-arrow"><i class="ti ti-caret-right"></i></span>';
		if (thisSelectType == 'category'){ customSelectHTML += '\n\t<span class="required custom-select"><i class="ti ti-asterisk"></i></span>'; }
		customSelectHTML += '\n</span>';

		thisSelectElement.hide();
		var customSelectObj = $.parseHTML(customSelectHTML);
		thisSelectElement.after(customSelectObj);
		$(customSelectObj).find('.ticksy-custom-select-default-text > .ticksy-custom-select-option').removeClass();
		var thisDefaultText = $(customSelectObj).find('.ticksy-custom-select-default-text');
		thisDefaultText.find('img').prependTo(thisDefaultText);

		var thisCustomSelectObj = $(customSelectObj);

		thisCustomSelectObj.on('clear-custom-select',function(e){
			var thisCustomSelect = $(this);
			var thisSelectID = thisCustomSelect.attr('data-select-id');
			var matchingSelectObj = $('select#'+thisSelectID);
			var defaultText = matchingSelectObj.find('option:first-child').text();
			thisCustomSelect.find('.ticksy-custom-select-default-text').html(defaultText);
			thisCustomSelect.find('.ticksy-custom-select-option').removeClass('is-selected');
			matchingSelectObj.find('option').removeAttr('selected');
			matchingSelectObj.change();
		});

		thisCustomSelectObj.find('img').error(function () {
  			$(this).remove();
		});

	});

	$('body').on('click','.ticksy-custom-select',function(e){

		e.preventDefault();

		var thisCustomSelect = $(this);
		if(thisCustomSelect.hasClass('disabled'))
		{
			return false;
		}
		var isInList = $(e.target).parents('.ticksy-custom-select-list').length;
		var isMultiple = thisCustomSelect.attr('data-multiple');
		if (isMultiple){
			var thisCustomSelectListWrapper = thisCustomSelect.find('.ticksy-custom-select-list-wrapper');
			var heightSetting = 372;
		} else {
			var thisCustomSelectListWrapper = false;
			var heightSetting = 335;
		}
		var thisCustomSelectList = thisCustomSelect.find('.ticksy-custom-select-list');
		var thisListHeight = thisCustomSelectList.outerHeight() + 10;
		if (thisListHeight > heightSetting){ thisListHeight = heightSetting; }
		var thisOffsetTop = parseInt(thisCustomSelect.offset().top);
		var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		var distanceToBottom = documentHeight - thisOffsetTop - 35;
		var distanceToWindowBottom = windowHeight - thisOffsetTop - 35 + $(window).scrollTop();
		var compareNumber = thisListHeight + 10;
		var moveNumber = compareNumber + 10;

		if (distanceToWindowBottom < compareNumber){
			var positionAdjustment = moveNumber - distanceToBottom;
			positionAdjustment = 33 - positionAdjustment - scrollBottom;
			if (isMultiple){
				thisCustomSelectListWrapper.css({'top':positionAdjustment+'px'});
				thisCustomSelectList.css({'top':''});
			} else {
				thisCustomSelectList.css({'top':positionAdjustment+'px'});
			}
		} else {
			if (isMultiple){
				thisCustomSelectListWrapper.css({'top':'32px'});
				thisCustomSelectList.css({'top':''});
			} else {
				thisCustomSelectList.css({'top':''});
			}
		}

		if (!thisCustomSelect.hasClass('active')){
			thisCustomSelect.addClass('active');
			setTimeout(function(){
				thisCustomSelect.addClass('fade');
				thisCustomSelectList.animate({ scrollTop: 0 },0);
			},10);
			cs_detectClickedOff(thisCustomSelect,thisCustomSelectList);
		} else {
			if (!isInList && isMultiple || !isMultiple){
				thisCustomSelect.removeClass('fade');
				thisCustomSelect.removeClass('active');
			}
		}

	});

	// Keep page from scrolling when scrolling in dropdown list.
	$('.ticksy-custom-select-list').bind('mousewheel', function(e){
	    $(this).scrollTop($(this).scrollTop()-e.originalEvent.wheelDeltaY);
	    return false;
	});

	$('body').on('click','.ticksy-custom-select-all',function(e){
		e.preventDefault();
		var thisLink = $(this);
		var thisSelectList = thisLink.parents('.ticksy-custom-select-list-wrapper').find('.ticksy-custom-select-list');
		var thisCustomSelect = thisLink.parents('.ticksy-custom-select');
		thisSelectList.spin('ticksy');
		thisSelectList.find('.ticksy-custom-select-option').css({'opacity':0.5});
		setTimeout(function(){
			thisSelectList.find('.ticksy-custom-select-option').each(function(){
				if (!$(this).hasClass('is-selected')){
					$(this).trigger('click');
				}
			});
			thisCustomSelect.trigger('click');
			thisSelectList.find('.ticksy-spinner').remove();
			thisSelectList.find('.ticksy-custom-select-option').css({'opacity':1});
			cs_resetSelectAllLink(thisLink,thisSelectList);
		},100);
		return false;
	});

	$('body').on('click','.ticksy-custom-select-option',function(e){

		e.preventDefault();
		var thisCustomOption = $(this),
			thisCustomSelect = thisCustomOption.parents('.ticksy-custom-select'),
			selectAllLink = thisCustomSelect.find('.ticksy-custom-select-all'),
			isMultiple = thisCustomSelect.attr('data-multiple');
			thisCustomSelectList = thisCustomOption.parents('.ticksy-custom-select-list'),
			matchingSelectID = thisCustomSelect.attr('data-select-id'),
			matchingSelectObj = thisCustomSelect.siblings('#'+matchingSelectID),
			thisValue = thisCustomOption.attr('data-value'),
			thisSelectPretext = thisCustomSelect.attr('data-pretext');

		if (isMultiple){

			if (thisCustomOption.hasClass('is-selected')){

				if (thisCustomSelectList.find('.ticksy-custom-select-option.is-selected').length > 1){
					thisCustomOption.removeClass('is-selected');
					matchingSelectObj.find('option[value="'+thisValue+'"]').removeAttr('selected');
					matchingSelectObj.change();
				}

			} else {

				thisCustomOption.addClass('is-selected');
				matchingSelectObj.find('option[value="'+thisValue+'"]').attr('selected','selected');
				matchingSelectObj.change();

			}

			var selectedListItems = '';

			if (thisCustomSelectList.find('.ticksy-custom-select-option.is-selected').length > 1){
				thisCustomSelectList.find('.ticksy-custom-select-option.is-selected').each(function(){
					var thisName = $(this).find('.ticksy-custom-select-option-name').text();
					selectedListItems += thisName+', ';
				});
				selectedListItems = selectedListItems.slice(0, -2);
				var multipleCount = thisCustomSelectList.find('.ticksy-custom-select-option.is-selected').length;
				thisCustomSelect.find('.ticksy-custom-select-default-text').html('<span class="multiple-count">'+multipleCount+'</span>'+thisSelectPretext+' <span class="ticksy-custom-select-option-name">'+selectedListItems+'</span>');
				thisCustomSelect.find('.ticksy-custom-select-default-text').find('.ticksy-custom-select-option').removeClass();
				thisCustomSelect.find('.ticksy-custom-select-default-text > img').hide();
			} else {
				var selectedListItems = thisCustomSelectList.find('.ticksy-custom-select-option.is-selected').html();
				thisCustomSelect.find('.ticksy-custom-select-default-text').html(thisSelectPretext+selectedListItems);
				thisCustomSelect.find('.ticksy-custom-select-default-text').find('.ticksy-custom-select-option').removeClass();
				thisCustomSelect.find('.ticksy-custom-select-default-text > img').show();
			}

			var thisDefaultText = $(thisCustomSelect).find('.ticksy-custom-select-default-text');
			thisDefaultText.find('img').prependTo(thisDefaultText);

		} else {

			var thisName = $(this).html();

			// Clear currently selected.
			thisCustomSelectList.find('.ticksy-custom-select-option').removeClass('is-selected');

			// Add "is-selected" class to new option.
			thisCustomOption.addClass('is-selected');

			// Update the real <select> element with the new value and change the text in the Custom Select object.
			matchingSelectObj.val(thisValue);
			matchingSelectObj.change();
			thisCustomSelect.find('.ticksy-custom-select-default-text').html(thisSelectPretext+thisName);

		}

		cs_resetSelectAllLink(selectAllLink,thisCustomSelectList);

	});

	function generateSelectOptions(thisSelectElement,thisSelectType){

		var customOptionsHTML = '';
		var defaultText = '';
		var selectedListItems = '';
		var totalSelected = 0;
		var thisSelectPretext = thisSelectElement.attr('data-pretext');
		var isMultiple = thisSelectElement.attr('multiple');

		if (typeof thisSelectPretext == 'undefined'){
			thisSelectPretext = '';
		}

		if (typeof isMultiple == 'undefined'){
			isMultiple = false;
		} else {
			isMultiple = true;
		}

		// Read the options of this <select>.
		thisSelectElement.find('option').each(function(){
			var thisOption = $(this),
				optionValue = thisOption.attr('value'),
				optionText = thisOption.text();

			/* **** IMPORTANT **** */
			// Set the default text from the first blank option value.
			if (optionValue && parseInt(optionValue) == 0 && !defaultText || !optionValue && !defaultText){

				defaultText = optionText;

			// Set the rest of the options.
			} else {

				/* **** IMPORTANT **** */
				// Need to set a 'data-type' on the <select> to get the correct data into the HTML output.

				// Category List (from Submit Form)
				if (thisSelectType == 'category'){

					var productID = thisOption.attr('data-product');
					var isSelected = thisOption.attr('selected');
					var categoryID = optionValue;
					var categoryThumb = thisOption.attr('data-thumb');
					var categoryThumbClass = thisOption.attr('data-thumb-class');
					var hasThumbClass = '', isSelectedClass = '';
					var thisOptionsHTML = '';

					if (typeof isSelected != 'undefined' && isSelected){ isSelectedClass = ' is-selected'; defaultText = optionText; totalSelected = totalSelected + 1; } else { isSelected = false; }
					if (typeof categoryThumb != 'undefined' && categoryThumb){ hasThumbClass = ' has-thumb'; }
					if (typeof categoryThumbClass == 'undefined'){ categoryThumbClass = ''; } else { categoryThumbClass = ' '+categoryThumbClass; }

					thisOptionsHTML += '\t\t<span data-product-id="'+productID+'" data-value="'+categoryID+'" class="ticksy-custom-select-option'+hasThumbClass+isSelectedClass+'">\n';
					if (categoryThumb) { thisOptionsHTML += '\t\t\t<img src="'+categoryThumb+'" title="'+optionText+'" class="ticksy-custom-select-option-thumb'+categoryThumbClass+'">\n'; }
					thisOptionsHTML += '\t\t\t<span class="ticksy-custom-select-option-name" title="'+optionText+'">'+optionText+'</span><i class="ti ti-check"></i>\n\t\t</span>\n';

					customOptionsHTML += thisOptionsHTML;
					if (isSelected){ defaultText = thisOptionsHTML }

				} else {

					var isSelected = thisOption.attr('selected');
					var thisValue = optionValue;
					var thisThumb = thisOption.attr('data-thumb');
					var thisThumbClass = thisOption.attr('data-thumb-class');
					var hasThumbClass = '', isSelectedClass = '';
					var thisOptionsHTML = '';

					if (typeof isSelected != 'undefined'){ isSelectedClass = ' is-selected'; defaultText = optionText; totalSelected = totalSelected + 1; } else { isSelected = false; }
					if (typeof thisThumb != 'undefined'){ hasThumbClass = ' has-thumb'; }
					if (typeof thisThumbClass == 'undefined'){ thisThumbClass = ''; } else { thisThumbClass = ' '+thisThumbClass; }

					thisOptionsHTML += '\t\t<span data-value="'+thisValue+'" class="ticksy-custom-select-option'+hasThumbClass+isSelectedClass+'">\n';
					if (thisThumb) { thisOptionsHTML += '\t\t\t<img src="'+thisThumb+'" title="'+optionText+'" class="ticksy-custom-select-option-thumb'+thisThumbClass+'">\n'; }
					thisOptionsHTML += '\t\t\t<span class="ticksy-custom-select-option-name" title="'+optionText+'">'+optionText+'</span><i class="ti ti-check"></i>\n\t\t</span>\n';

					customOptionsHTML += thisOptionsHTML;
					if (isSelected){ defaultText = thisOptionsHTML }

				}

			}

		});

		if (isMultiple){

			if (totalSelected > 1){
				thisSelectElement.find('option:selected').each(function(){
					var thisName = $(this).text();
					selectedListItems += thisName+', ';
				});
				selectedListItems = selectedListItems.slice(0, -2);
				defaultText = '<span class="multiple-count">'+totalSelected+'</span>'+thisSelectPretext+' <span class="ticksy-custom-select-option-name">'+selectedListItems+'</span>';
			}

		}

		var customOptions = {customOptionsHTML:customOptionsHTML,defaultText:defaultText,totalSelected:totalSelected};
		return customOptions;

	}

	function cs_detectClickedOff(container1,container2){

		$(document).mouseup(function(e){

			if (typeof container2 == 'undefined'){
				container2 = false;
			}

		    if (!container1.is(e.target) && container1.has(e.target).length === 0){
			    if (container2 && !container2.is(e.target) && container2.has(e.target).length === 0){
					container1.removeClass('fade active');
				}
		    }

		});

	}

	function cs_resetSelectAllLink(thisLink,thisList){
		var totalUnselected = thisList.find(".ticksy-custom-select-option").not(".is-selected").length;
		if (totalUnselected > 0){
			thisLink.parent().removeClass('inactive');
		} else {
			thisLink.parent().addClass('inactive');
		}
	}

});
