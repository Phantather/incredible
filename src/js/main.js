window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu')
    menuItem = document.querySelectorAll('.menu_item')
    hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active')
    })
    menuItem.forEach( item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active')
            menu.classList.toggle('menu_active')
        })
    })

    $(window).scroll(function (){
        if ($(this).scrollTop() < 2500){
            $('.pageup').fadeIn()
        }else
            $('.pageup').fadeOut()
    })
})