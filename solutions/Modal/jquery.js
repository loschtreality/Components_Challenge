//NOTE: Remember to comment-in the JQuery CDN in the html file

const $modal = $('.modal')
const $modalWrapper = $('.modal-wrapper')
const $modalButton = $('#modal-button')
const $modalClose = $('.modal-close')

function toggleModal(ev) {
  ev.stopPropagation()
  $modalWrapper.toggleClass('modal-hidden')
  $modal.toggleClass('modal-hidden')
}


$modalWrapper.click(toggleModal)
$modalButton.click(toggleModal)
$modalClose.click(toggleModal)
