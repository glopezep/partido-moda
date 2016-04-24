import $ from 'jquery'

var $mainMenu = $('.MainMenu')
var $mainMenuButton = $mainMenu.find('.MainMenu-button')
var $mainMenuContainer = $mainMenu.find('.MainMenu-container')

$mainMenuButton.on('click', changeState)
$mainMenuButtonCloset.on('click', changeState)

function changeState (event) {
  event.preventDefault()
  $mainMenuContainer.toggleClass('is-active')
}
