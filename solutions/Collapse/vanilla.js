const collapseItems = Array.from(document.querySelectorAll('.collapse-item'))
const collapseTitles = Array.from(document.querySelectorAll('.collapse-title'))

/* Event Methods */
function toggleContent(ev) {
  const collapseContent = this.nextElementSibling
  collapseContent.classList.toggle('collapse-hide')
}

/* Event Listeners */
collapseTitles.forEach(function(collapseTitle) {
  collapseTitle.addEventListener('click', toggleContent);
})
