let mobileMenu = document.querySelector(".nav-list")
let humburger = document.querySelector('.openMenu')
let closeMenu = document.querySelectorAll(".close-menu")
let closeBtn = document.querySelector(".fa-close")

const openMobileMenu = () => {
    mobileMenu.style.display = 'block'
    closeBtn.classList.remove('invisible')
    humburger.classList.add("invisible")

}

const closeMobileMenu = () => {
    mobileMenu.style.display = 'none'
    humburger.classList.remove('invisible')
    closeBtn.classList.add("invisible")

}

humburger.addEventListener('click', openMobileMenu)
closeMenu.forEach(element => element.addEventListener('click', closeMobileMenu));

