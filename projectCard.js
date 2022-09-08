const openPopUp = (proj) => {
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.close');
  const projectImg = document.querySelector('.project-img');
  const popupTitle = document.querySelector('.popup-title');
  const seeLive = document.querySelectorAll('.see-live-btn');
  const sourceBtn = document.querySelectorAll('.source-btn');
  const techUsed = document.querySelector('.techs-used');
  const detailsPara = document.querySelector('.details-para');

  projectImg.setAttribute('src', proj.img);
  popupTitle.innerHTML = proj.name;
  detailsPara.innerHTML = proj.description;
  popup.style.display = 'block';

  if (techUsed.children.length === 0) {
    for (let i = 0; i < proj.technologies.length; i += 1) {
      const li = document.createElement('li');
      li.setAttribute('class', 'tech');
      techUsed.appendChild(li);
      li.innerHTML += proj.technologies[i];
    }
  }

  const closePopUp = (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  };

  const byCloseBtn = () => {
    popup.style.display = 'none';
  };

  close.addEventListener('click', () => byCloseBtn());
  window.addEventListener('click', (event) => closePopUp(event));
  seeLive.forEach((ele) => ele.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.replace(proj.linkToLive);
  }));
  sourceBtn.forEach((ele) => ele.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.replace(proj.sourceLink);
  }));
};

const generateProjectCard = (project) => {
  const worksContainer = document.querySelector('.section-container');
  const projectCard = document.createElement('div');
  const cardTop = document.createElement('div');
  const cardBottom = document.createElement('div');
  const projectTitle = document.createElement('h3');
  const techUsed = document.createElement('ul');
  const projectBtn = document.createElement('button');

  worksContainer.appendChild(projectCard);
  projectCard.appendChild(cardTop);
  projectCard.appendChild(cardBottom);
  cardBottom.appendChild(projectTitle);
  cardBottom.appendChild(techUsed);
  cardBottom.appendChild(projectBtn);

  projectCard.setAttribute('class', 'projectCard');
  cardTop.setAttribute('class', 'cardTop');
  cardBottom.setAttribute('class', 'cardBottom');
  projectTitle.setAttribute('class', 'cardTitle');
  techUsed.setAttribute('class', 'techs');
  projectBtn.setAttribute('class', 'btn open-popup');

  projectTitle.innerHTML = project.name;
  projectBtn.innerHTML = 'See Project';

  if (techUsed.children.length === 0) {
    for (let i = 0; i < project.technologies.length; i += 1) {
      const li = document.createElement('li');
      li.setAttribute('class', 'tech');
      techUsed.appendChild(li);
      li.innerHTML += project.technologies[i];
    }
  }
  projectBtn.addEventListener('click', () => openPopUp(project));
};

export default generateProjectCard;
