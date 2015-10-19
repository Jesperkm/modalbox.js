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
		$('div.modal-content *').addClass('no-close');
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
        if ($(e.target).hasClass('no-close')) {
            return false;
        } else {
            modalOverlay.removeClass('disp');
            modalBox.removeClass('disp');
            setTimeout(function() {
                modalOverlay.hide();
                // modalContent.empty();
            }, 300);
        }
    }

    // bind button to toggle modal
    $('.modal-btn').on('click', function() {
        toggleModal();
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