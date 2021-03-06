$(document).ready(function() {
    /*===================================
    =            Modalbox.js            =
    ===================================*/

    // vars needed
    var     modalBox = $('div.inner-modal'),
            modalOverlay = $('div.modal-overlay'),
            modalContent = $('div.modal-content');


    // toggle modal
    function toggleModal() {
		$('div.modal-content').addClass('no-close');
        modalOverlay.show();
        setTimeout(function() {
            modalOverlay.addClass('disp');
            setTimeout(function() {
                modalBox.addClass('disp');
            }, 100);
        }, 100);
    }

    // hide modal
    function removeModal(e) {
        // if clicked inside modal box, ignore it
        if ($(e.target).closest('.no-close')[0]) {
            return false;
        } else {
            modalOverlay.removeClass('disp');
            modalBox.removeClass('disp');
            setTimeout(function() {
                modalOverlay.hide();
                modalContent.empty();
            }, 300);
        }
    }

    // bind button to toggle modal
    $(document).on('click', '.modal-btn', function(e) {
        e.preventDefault();
        toggleModal();
        var modalSlug = $(this).attr('data-modalslug');
        var contentToAppend = $('[data-type="modalcontent"][data-modalslug="'+modalSlug+'"]').html();
        modalContent.append(contentToAppend);
    });

    // bind overlay to hide modal
    modalOverlay.on('click', function(e) {
        removeModal(e);
    });

    // hide modal on esc keyup
    $(document).keyup(function(e){
        if(e.which === 27) {
          removeModal(e);
        }
    });
});