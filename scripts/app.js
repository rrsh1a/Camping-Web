const navBtn = document.querySelector('.navBtn')
const navMenu = document.querySelector('.mobileNavMenu')
navBtn.addEventListener('click' , function(){
    navBtn.classList.toggle('navBtnOpen')
    navMenu.classList.toggle('mobileNavMenuOpen')
})