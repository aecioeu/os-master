$(function () {
  'use strict';

  var boards,
    openSidebar = true,
    kanbanWrapper = $('.kanban-wrapper'),
    sidebar = $('.update-item-sidebar'),
    datePicker = $('#due-date'),
    select2 = $('.select2'),
    commentEditor = $('.comment-editor'),
    addNewForm = $('.add-new-board'),
    updateItemSidebar = $('.update-item-sidebar'),
    addNewInput = $('.add-new-board-input');

  var assetPath = '/';
 /* if ($('body').attr('data-framework') === 'laravel') {
    assetPath = $('body').attr('data-asset-path');
  }*/
  
  var data = [
  {
    "id": "board-in-progress",
    "title": "In Progress",
    "item": [
      {
        "id": "in-progress-1",
        "title": "Research FAQ page UX",
        "comments": "3",
        "badge-text": "UX",
        "badge": "success",
        "due-date": "5 April",
        "attachments": "2",
        "assigned": [
          "avatar-s-1.jpg",
          "avatar-s-2.jpg"
        ],
        "members": ["Bruce", "Dianna"]
      },
      {
        "id": "in-progress-2",
        "title": "Find new images for pages",
        "comments": "1",
        "badge-text": "Images",
        "image": "04.jpg",
        "badge": "warning",
        "due-date": "2",
        "attachments": "5",
        "assigned": [
          "avatar-s-3.jpg",
          "avatar-s-4.jpg"
        ],
        "members": ["Laurel", "Oliver"]
      }
    ]
  },
  {
    "id": "board-in-review",
    "title": "In Review",
    "item": [
      {
        "id": "in-review-1",
        "title": "Review completed Apps",
        "comments": "6",
        "badge-text": "App",
        "badge": "info",
        "due-date": "8 April",
        "attachments": "2",
        "assigned": [
          "avatar-s-5.jpg",
          "avatar-s-6.jpg"
        ],
        "members": ["Arthur", "Harley"]
      },
      {
        "id": "in-review-2",
        "title": "Review Javascript code",
        "comments": "2",
        "badge-text": "Code Review",
        "badge": "danger",
        "attachments": "4",
        "due-date": "10 April",
        "assigned": [
          "avatar-s-7.jpg",
          "avatar-s-8.jpg"
        ],
        "members": ["Helena", "Jordan"]
      }
    ]
  },
  {
    "id": "board-done",
    "title": "Done",
    "item": [
      {
        "id": "done-1",
        "title": "Forms & Tables section",
        "comments": "2",
        "badge-text": "Forms",
        "badge": "success",
        "due-date": "7 April",
        "attachments": "1",
        "assigned": [
          "avatar-s-8.jpg",
          "avatar-s-9.jpg"
        ],
        "members": ["Barry", "Victor"]
      },
      {
        "id": "done-2",
        "title": "Completed Charts & Maps",
        "comments": "2",
        "badge-text": "Charts & Maps",
        "badge": "primary",
        "due-date": "7 April",
        "attachments": "3",
        "assigned": [
          "avatar-s-10.jpg",
          "avatar-s-11.jpg"
        ],
        "members": ["Lois", "Clark"]
      }
    ]
  }
]
boards = data;
  // Get Data
  /*$.ajax({
    type: 'GET',
    dataType: 'json',
    async: false,
    url: assetPath + 'data/kanban.json',
    success: function (data) {
      boards = data;
    }
  });*/

  // Toggle add new input and actions
  addNewInput.toggle();

  // datepicker init
  if (datePicker.length) {
    datePicker.flatpickr({
      monthSelectorType: 'static',
      altInput: true,
      altFormat: 'j F, Y',
      dateFormat: 'Y-m-d'
    });
  }

  

  // Comment editor
  if (commentEditor.length) {
    new Quill('.comment-editor', {
      modules: {
        toolbar: '.comment-toolbar'
      },
      placeholder: 'Write a Comment... ',
      theme: 'snow'
    });
  }

  // Render board dropdown
  function renderBoardDropdown() {
    return (
      "<div class='dropdown'>" +
      feather.icons['more-vertical'].toSvg({
        class: 'dropdown-toggle cursor-pointer font-medium-3 me-0',
        id: 'board-dropdown',
        'data-bs-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      }) +
      "<div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'>" +
      "<a class='dropdown-item delete-board' href='#'> " +
      feather.icons['trash'].toSvg({ class: 'font-medium-1 align-middle' }) +
      "<span class='align-middle ms-25'>Delete</span></a>" +
      "<a class='dropdown-item' href='#'>" +
      feather.icons['edit'].toSvg({ class: 'font-medium-1 align-middle' }) +
      "<span class='align-middle ms-25'>Rename</span></a>" +
      "<a class='dropdown-item' href='#'>" +
      feather.icons['archive'].toSvg({ class: 'font-medium-1 align-middle' }) +
      "<span class='align-middle ms-25'>Archive</span></a>" +
      '</div>' +
      '</div>'
    );
  }

  // Render item dropdown
  function renderDropdown() {
    return (
      "<div class='dropdown item-dropdown px-1'>" +
      feather.icons['more-vertical'].toSvg({
        class: 'dropdown-toggle cursor-pointer me-0 font-medium-1',
        id: 'item-dropdown',
        ' data-bs-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      }) +
      "<div class='dropdown-menu dropdown-menu-end' aria-labelledby='item-dropdown'>" +
      "<a class='dropdown-item' href='#'>Copy task link</a>" +
      "<a class='dropdown-item' href='#'>Duplicate task</a>" +
      "<a class='dropdown-item delete-task' href='#'>Delete</a>" +
      '</div>' +
      '</div>'
    );
  }
  // Render header
  function renderHeader(color, text) {
    return (
      "<div class='d-flex justify-content-between flex-wrap align-items-center mb-1'>" +
      "<div class='item-badges'> " +
      "<div class='badge rounded-pill badge-light-" +
      color +
      "'> " +
      text +
      '</div>' +
      '</div>' +
      renderDropdown() +
      '</div>'
    );
  }

  // Render avatar
  function renderAvatar(images, pullUp, margin, members, size) {
    var $transition = pullUp ? ' pull-up' : '',
      member = members !== undefined ? members.split(',') : '';

    return images !== undefined
      ? images
          .split(',')
          .map(function (img, index, arr) {
            var $margin = margin !== undefined && index !== arr.length - 1 ? ' me-' + margin + '' : '';

            return (
              "<li class='avatar kanban-item-avatar" +
              ' ' +
              $transition +
              ' ' +
              $margin +
              "'" +
              "data-bs-toggle='tooltip' data-bs-placement='top'" +
              "title='" +
              member[index] +
              "'" +
              '>' +
              "<img src='" +
              assetPath +
              '' +
              img +
              "' alt='Avatar' height='" +
              size +
              "'>" +
              '</li>'
            );
          })
          .join(' ')
      : '';
  }

  // Render footer
  function renderFooter(attachments, comments, assigned, members) {
    return (
      "<div class='d-flex justify-content-between align-items-center flex-wrap mt-1'>" +
      "<div> <span class='align-middle me-50'>" +
      feather.icons['paperclip'].toSvg({ class: 'font-medium-1 align-middle me-25' }) +
      "<span class='attachments align-middle'>" +
      attachments +
      '</span>' +
      "</span> <span class='align-middle'>" +
      feather.icons['message-square'].toSvg({ class: 'font-medium-1 align-middle me-25' }) +
      '<span>' +
      comments +
      '</span>' +
      '</span></div>' +
      "<ul class='avatar-group mb-0'>" +
      renderAvatar(assigned, true, 0, members, 28) +
      '</ul>' +
      '</div>'
    );
  }

  // Init kanban
  var kanban = new jKanban({
    element: '.kanban-wrapper',
    gutter: '15px',
    widthBoard: '250px',
    dragItems: true,
    boards: boards,
    dragBoards: false,
    addItemButton: false,
    itemAddOptions: {
      enabled: true, // add a button to board for easy item creation
      content: '+ Add New Item', // text or html content of the board button
      class: 'kanban-title-button btn btn-default btn-xs', // default class of the button
      footer: false // position the button on footer
    },
    click: function (el) {
      var el = $(el);
      var flag = false;
      var title = el.attr('data-eid') ? el.find('.kanban-text').text() : el.text(),
        date = el.attr('data-due-date'),
        dateObj = new Date(),
        year = dateObj.getFullYear(),
        dateToUse = date
          ? date + ', ' + year
          : dateObj.getDate() +
            ' ' +
            dateObj.toLocaleString('en', {
              month: 'long'
            }) +
            ', ' +
            year,
        label = el.attr('data-badge-text'),
        avatars = el.attr('data-assigned');

      if (el.find('.kanban-item-avatar').length) {
        el.find('.kanban-item-avatar').on('click', function (e) {
          e.stopPropagation();
        });
      }
      $(document).on('click','.item-dropdown', function(e) {
        flag = true
      })
      setTimeout(function(){
        if(flag === false) {
          sidebar.modal('show');
        }
      }, 50)
      sidebar.find('.update-item-form').on('submit', function (e) {
        e.preventDefault();
      });
      sidebar.find('#title').val(title);
      sidebar.find(datePicker).next('.form-control').val(dateToUse);
      sidebar.find(select2).val(label).trigger('change');
      sidebar.find('.assigned').empty();
      sidebar
        .find('.assigned')
        .append(
          renderAvatar(avatars, false, '50', el.attr('data-members'), 32) +
            "<li class='avatar avatar-add-member ms-50'>" +
            "<span class='avatar-content'>" +
            feather.icons['plus'].toSvg({ class: 'avatar-icon' }) +
            '</li>'
        );
    },
    buttonClick: function (el, boardId) {
      var addNew = document.createElement('form');
      addNew.setAttribute('class', 'new-item-form');
      addNew.innerHTML =
        '<div class="mb-1">' +
        '<textarea class="form-control add-new-item" rows="2" placeholder="Add Content" required></textarea>' +
        '</div>' +
        '<div class="mb-2">' +
        '<button type="submit" class="btn btn-primary btn-sm me-1">Add</button>' +
        '<button type="button" class="btn btn-outline-secondary btn-sm cancel-add-item">Cancel</button>' +
        '</div>';
      kanban.addForm(boardId, addNew);
      addNew.querySelector('textarea').focus();
      addNew.addEventListener('submit', function (e) {
        e.preventDefault();
        var currentBoard = $(".kanban-board[data-id='" + boardId + "']");
        kanban.addElement(boardId, {
          title: "<span class='kanban-text'>" + e.target[0].value + '</span>',
          id: boardId + '-' + currentBoard.find('.kanban-item').length + 1
        });

        currentBoard.find('.kanban-item:last-child .kanban-text').before(renderDropdown());
        addNew.remove();
      });
      $(document).on('click', '.cancel-add-item', function () {
        $(this).closest(addNew).toggle();
      });
    },
    dragEl: function (el, source) {
      $(el).find('.item-dropdown, .item-dropdown .dropdown-menu.show').removeClass('show');
    }
  });

  if (kanbanWrapper.length) {
    new PerfectScrollbar(kanbanWrapper[0]);
  }

  // Render add new inline with boards
  $('.kanban-container').append(addNewForm);

  // Change add item button to flat button
  $.each($('.kanban-title-button'), function () {
    $(this).removeClass().addClass('kanban-title-button btn btn-flat-secondary btn-sm ms-50');
    Waves.init();
    Waves.attach("[class*='btn-flat-']");
  });

  // Makes kanban title editable
  $(document).on('mouseenter', '.kanban-title-board', function () {
    $(this).attr('contenteditable', 'true');
  });

  // Appends delete icon with title
  $.each($('.kanban-board-header'), function () {
    $(this).append(renderBoardDropdown());
  });

  // Deletes Board
  $(document).on('click', '.delete-board', function () {
    var id = $(this).closest('.kanban-board').data('id');
    kanban.removeBoard(id);
  });

  // Delete task
  $(document).on('click', '.dropdown-item.delete-task', function () {
    openSidebar = true;
    var id = $(this).closest('.kanban-item').data('eid');
    kanban.removeElement(id);
  });

  // Open/Cancel add new input
  $('.add-new-btn, .cancel-add-new').on('click', function () {
    addNewInput.toggle();
  });

  // Add new board
  addNewForm.on('submit', function (e) {
    e.preventDefault();
    var $this = $(this),
      value = $this.find('.form-control').val(),
      id = value.replace(/\s+/g, '-').toLowerCase();
    kanban.addBoards([
      {
        id: id,
        title: value
      }
    ]);
    // Adds delete board option to new board & updates data-order
    $('.kanban-board:last-child').find('.kanban-board-header').append(renderBoardDropdown());

    // Remove current append new add new form
    addNewInput.val('').css('display', 'none');
    $('.kanban-container').append(addNewForm);

    // Update class & init waves
    $.each($('.kanban-title-button'), function () {
      $(this).removeClass().addClass('kanban-title-button btn btn-flat-secondary btn-sm ms-50');
      Waves.init();
      Waves.attach("[class*='btn-flat-']");
    });
  });

  // Clear comment editor on close
  sidebar.on('hidden.bs.modal', function () {
    sidebar.find('.ql-editor')[0].innerHTML = '';
    sidebar.find('.nav-link-activity').removeClass('active');
    sidebar.find('.tab-pane-activity').removeClass('show active');
    sidebar.find('.nav-link-update').addClass('active');
    sidebar.find('.tab-pane-update').addClass('show active');
  });

  // Re-init tooltip when modal opens(Bootstrap bug)
  sidebar.on('shown.bs.modal', function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  $('.update-item-form').on('submit', function (e) {
    e.preventDefault();
    sidebar.modal('hide');
  });

  // Render custom items
  $.each($('.kanban-item'), function () {
    var $this = $(this),
      $text = "<span class='kanban-text'>" + $this.text() + '</span>';
    if ($this.attr('data-badge') !== undefined && $this.attr('data-badge-text') !== undefined) {
      $this.html(renderHeader($this.attr('data-badge'), $this.attr('data-badge-text')) + $text);
    }
    if (
      $this.attr('data-comments') !== undefined ||
      $this.attr('data-due-date') !== undefined ||
      $this.attr('data-assigned') !== undefined
    ) {
      $this.append(
        renderFooter(
          $this.attr('data-attachments'),
          $this.attr('data-comments'),
          $this.attr('data-assigned'),
          $this.attr('data-members')
        )
      );
    }
    if ($this.attr('data-image') !== undefined) {
      $this.html(
        renderHeader($this.attr('data-badge'), $this.attr('data-badge-text')) +
          "<img class='img-fluid rounded mb-50' src='" +
          assetPath +
          'images/slider/' +
          $this.attr('data-image') +
          "' height='32'/>" +
          $text +
          renderFooter(
            $this.attr('data-due-date'),
            $this.attr('data-comments'),
            $this.attr('data-assigned'),
            $this.attr('data-members')
          )
      );
    }
    $this.on('mouseenter', function () {
      $this.find('.item-dropdown, .item-dropdown .dropdown-menu.show').removeClass('show');
    });
  });

  if (updateItemSidebar.length) {
    updateItemSidebar.on('hidden.bs.modal', function () {
      updateItemSidebar.find('.file-attachments').val('');
    });
  }
});
