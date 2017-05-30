const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalButton = document.querySelector('#modal-button')
const modalClose = document.querySelector('.modal-close')

function toggleModal(ev) {
  ev.stopPropagation() // stops event from firing on modalWrapper when "X" is clicked
  modalWrapper.classList.toggle('modal-hidden')
  modal.classList.toggle('modal-hidden')
}

modalWrapper.addEventListener('click', toggleModal)
modalButton.addEventListener('click', toggleModal)
modalClose.addEventListener('click', toggleModal)
