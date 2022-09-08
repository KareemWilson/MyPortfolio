import projectsData from './data.js';
import generateProjectCard from './projectCard.js';

const mobileMenu = document.querySelector('.nav-list');
const humburger = document.querySelector('.openMenu');
const closeMenu = document.querySelectorAll('.close-menu');
const closeBtn = document.querySelector('.fa-close');

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
closeMenu.forEach((element) =>
  element.addEventListener('click', closeMobileMenu)
);

// ------------------------------------

projectsData.forEach((project) => generateProjectCard(project));
