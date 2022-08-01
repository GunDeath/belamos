let hamburgerMenu = document.getElementById('hamburgerMenuMain')
let navMenu = document.querySelector('.nav__menu-list')



hamburgerMenu.addEventListener('click', ()=>{
    let responsive_class_name = 'nav__menu_active'
    navMenu.classList.toggle(responsive_class_name)
})
