const $menu = document.querySelector('.wrap-menu')
const $btnMenuOpen = document.querySelector('.menu-pic')
const $btnMenuClose = document.querySelector('.btnMenu_close')

$btnMenuOpen.addEventListener('click', function() {
    $menu.classList.add('wrap-menu_open')
})

$btnMenuClose.addEventListener('click', function() {
    $menu.classList.remove('wrap-menu_open')
})