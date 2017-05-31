//NOTE: Remember to comment-in the JQuery CDN in the html file
const $closeButton = $('#drawer-close')
const $dockedTrigger = $('#docked')
const $undockedTrigger = $('#undocked')
const $drawer = $('.drawer')
const $shader = $('.shader')

function toggleDrawer(shaded) {
  return function (ev) {
    if (shaded) $shader.toggleClass('hidden')
    $drawer.toggleClass('hidden')
  }
}

function hideAll() {
  $drawer.addClass('hidden')
  $shader.addClass('hidden')
}

$closeButton.click(hideAll)
$shader.click(hideAll)
$dockedTrigger.click(toggleDrawer(false))
$undockedTrigger.click(toggleDrawer(true))
