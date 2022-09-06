const mobileMenu = document.querySelector('.nav-list');
const humburger = document.querySelector('.openMenu');
const closeMenu = document.querySelectorAll('.close-menu');
const closeBtn = document.querySelector('.close');
const popupBtn = document.querySelectorAll('.open-popup')
const popup = document.querySelector('.popup')

const openMobileMenu = () => {
  mobileMenu.style.display = 'block';
  closeBtn.classList.remove('invisible');
  humburger.classList.add('invisible');
};

const closeMobileMenu = () => {
  mobileMenu.style.display = 'none';
  humburger.classList.remove('invisible');
  closeBtn.classList.add('invisible');
};

humburger.addEventListener('click', openMobileMenu);
closeMenu.forEach((element) => element.addEventListener('click', closeMobileMenu));



const openPopUp = () => {
    popup.style.display = 'block'
}

const closePopUp = (event) => {
    if(event.target == popup){
        popup.style.display = 'none' 
        console.log(event.target);   
    }
    // popup.style.display = 'none'
}
popupBtn.forEach((element) => element.addEventListener('click', openPopUp ))
closeBtn.addEventListener("click", () => popup.style.display = 'none')
window.addEventListener('click', (event) => closePopUp(event))

