const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");

const openPopUp = () => {
  popup.style.display = "block";
  console.log("sjndasjl");
};

const closePopUp = (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };

const generateProjectCard = (project) => {
  const worksContainer = document.querySelector(".section-container");
  const projectCard = document.createElement("div");
  const cardTop = document.createElement("div");
  const cardBottom = document.createElement("div");
  const projectTitle = document.createElement("h3");
  const techUsed = document.createElement("ul");
  const projectBtn = document.createElement("button");

  worksContainer.appendChild(projectCard);
  projectCard.appendChild(cardTop);
  projectCard.appendChild(cardBottom);
  cardBottom.appendChild(projectTitle);
  cardBottom.appendChild(techUsed);
  cardBottom.appendChild(projectBtn);

  projectCard.setAttribute("class", "projectCard");
  cardTop.setAttribute("class", "cardTop");
  cardBottom.setAttribute("class", "cardBottom");
  projectTitle.setAttribute("class", "cardTitle");
  techUsed.setAttribute("class", "techs");
  projectBtn.setAttribute("class", "btn open-popup");

  projectTitle.innerHTML = project.name;
  projectBtn.innerHTML = "See Project";
  let techList = techUsed.innerHTML;
  techList = `${project.technologies.forEach((techno) => {
    let tech = document.createElement("li");
    tech.setAttribute("class", "tech");
    tech.innerHTML = techno;
    techUsed.appendChild(tech);
  })}`;

  projectBtn.addEventListener("click", () => {
    openPopUp();
    console.log("hi");
  });
  closeBtn.addEventListener("click", () => (popup.style.display = "none"));
window.addEventListener("click", (event) => closePopUp(event));

};

export default generateProjectCard;
