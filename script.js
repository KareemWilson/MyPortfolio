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
const name = document.querySelector('.full-name');
const email = document.querySelector('#mail');
const msg = document.querySelector('.message-input');
const error = document.querySelector('#mail + .error');
const formInputs = document.querySelectorAll('.form-input');
const formData = JSON.parse(localStorage.getItem('form'));

const upperCaseCheck = () => {
  if (email.value !== email.value.toLowerCase()) {
    return true;
  }
  return false;
};

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    formData[input.id] = input.value;
    localStorage.setItem('form', JSON.stringify(formData));
  });
});

const showError = () => {
  if (email.validity.valueMissing) {
    error.textContent = 'You should type your email';
  }
  if (email.validity.typeMismatch) {
    error.textContent = 'You should enter a valid email address';
  }
  if (upperCaseCheck()) {
    error.textContent = 'your Email should be in lowercase';
  }
  error.className = 'error active';
};

if (!formData) {
  const formData = { fullName: '', mail: '', message: '' };
  localStorage.setItem('form', JSON.stringify(formData));
} else {
  showError();
}

email.addEventListener('input', () => {
  if (email.validity.valid && !upperCaseCheck()) {
    error.textContent = '';
    error.className = 'error';
  } else {
    showError();
  }
});

const fillInputsFromLocalStorage = () => {
  console.log(localStorage);
  name.value = formData.fullName;
  email.value = formData.mail;
  msg.value = formData.message;
};

fillInputsFromLocalStorage();

form.addEventListener('submit', (event) => {
  if (!email.validity.valid || upperCaseCheck()) {
    showError();
    event.preventDefault();
  }
});
