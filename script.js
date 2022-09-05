let mobileMenu = document.querySelector(".nav-list")
let hamburger = document.querySelector(".fa-bars")

hamburger.addEventListener('click', () => {
    if(mobileMenu.style['display'] == 'none'){
        mobileMenu.style.setProperty('display', 'flex')
        console.log(mobileMenu.style.display);

    }
    else {
        mobileMenu.style.setProperty('display', 'none')
        console.log(mobileMenu.style.display);
    }

})