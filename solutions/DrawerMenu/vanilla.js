const closeButton = document.querySelector('#drawer-close')
const dockedTrigger = document.querySelector('#docked')
const undockedTrigger = document.querySelector('#undocked')
const drawer = document.querySelector('.drawer')
const shader = document.querySelector('.shader')


// Open / Close Drawer
function toggleDrawer(shaded) {
  return function (ev) {
    if (shaded) shader.classList.toggle('hidden')

    drawer.classList.toggle('hidden')
  }
}

function hideAll() {
  drawer.classList.add('hidden')
  shader.classList.add('hidden')
}

// Open / Close Drawer with background shading

closeButton.addEventListener('click', hideAll)
shader.addEventListener('click', hideAll)
dockedTrigger.addEventListener('click', toggleDrawer(false))
undockedTrigger.addEventListener('click', toggleDrawer(true))
