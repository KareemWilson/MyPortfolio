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

projectsData.forEach((project) => generateProjectCard(project));

const form = document.querySelector('#contact');
const email = document.querySelector('#mail');
const error = document.querySelector('#mail + .error');
const upperCaseCheck = () => {
  if (email.value != email.value.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const showError = () => {
  if (email.validity.valueMissing) {
    error.textContent = 'You should type your mail';
  } else if (email.validity.typeMismatch) {
    error.textContent = 'You should enter email address';
    if (upperCaseCheck()) {
      error.textContent = 'your Email should be in lowercase';
    }
  }
  if (upperCaseCheck()) {
    error.textContent = 'your Email should be in lowercase';
  }
  error.className = 'error active';
};

email.addEventListener('input', () => {
  if (email.validity.valid && !upperCaseCheck()) {
    error.textContent = '';
    error.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid || upperCaseCheck()) {
    showError();
    event.preventDefault();
  }
});
