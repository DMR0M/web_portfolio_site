"use strict";

import { projectInfo } from "./src/project_desc.js";
import { get_skills } from "./src/skills.js";


// Selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');
const modeText = document.querySelector('.toggle-text');
const modeIcon = document.querySelector('.fas');
const textBox = document.getElementById('text-box');

const dlResumeElem = document.querySelector('.fa-file-pdf');

const techSkills = document.querySelectorAll('.skill');
const projectBtns = document.querySelectorAll('.btn');


// const projectContainer = document.querySelector('.project-section');
const projectImage = document.querySelector('.text-box > img');

const projectTitle = document.querySelector('.project-section > h2');
const projectTextDesc = document.querySelector('.project-section > h3');

const contacts = document.querySelectorAll('.contact-group > .fa-brands');

window.addEventListener('load', () => {
  // Get project image
  projectImage.src = './img/projects/my_website.png';
  projectImage.alt = 'Personal Portfolio Website';

  // Get project title
  projectTitle.textContent = projectInfo[0].title;

  // Get project description
  projectTextDesc.textContent = projectInfo[0].description;

  // Get project technologies or programming languages used
  projectInfo[0].techonologies.forEach((techonology) => {
    const projectTech = document.createElement('span');
    projectTech.textContent = techonology;

    projectTitle.appendChild(projectTech);
  });

  selectSkillDisplay('Javascript');
});


const selectedTheme = (isDark) => {
  // Navbar Style
  isDark ? nav.style.backgroundColor = 'rgb(25 25 25 / 50%)' : nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  isDark ? projectTextDesc.style.color = 'rgb(255 255 255 / 50%)' : projectTextDesc.style.color = 'rgb(0 0 0 / 75%)';
  isDark ? projectImage.style.boxShadow = '0 0 10px rgba(255, 255, 255, 1);' : projectImage.style.boxShadow = '0 10px 10px rgba(0, 0, 0, 1);';
  // isDark ? projectTextDesc.textContent = projectDescriptions[0] : projectTextDesc.textContent = projectDescriptions[1];
  // isDark ? textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' : textBox.style.backgroundColor = 'rgb(25 25 25 / 50%)';

  // Icon Toggle
  isDark ? toggleIcon.children[0].textContent = 'Dark Mode' : toggleIcon.children[0].textContent = 'Light Mode';
  isDark ? toggleIcon.children[1].classList.remove('fa-sun') : toggleIcon.children[1].classList.remove('fa-moon');
  isDark ? toggleIcon.children[1].classList.add('fa-moon') : toggleIcon.children[1].classList.add('fa-sun');
  isDark ? toggleIcon.children[1].style.color = 'white' : toggleIcon.children[1].style.color = 'black';
}

// Switch Theme
const switchTheme = () => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    selectedTheme(true)

  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    selectedTheme(false)
  } 
};

// Select Skill Display
const selectSkillDisplay = (techSkill) => {
  
  // Remove h3 elements inside skills container
  const removeElements = (containerName) => {
    const iconElems = document.querySelectorAll(`${containerName} > h3`);
      h3Elems.forEach((iconElems) => iconElems.remove());
    }
    // document.querySelector('.selected').textContent = `Skills in ${techSkill}`

    document.querySelector('.container-1 > h2').textContent = get_skills(techSkill).title[0];
    document.querySelector('.container-2 > h2').textContent = get_skills(techSkill).title[1];

    if (techSkill === 'Python') {
      removeElements('.container-1');
      removeElements('.container-2');

      get_skills(techSkill).frameworks.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-1').appendChild(skillLabel);

      });
      get_skills(techSkill).libraries.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-2').appendChild(skillLabel);
      });

    } else if (techSkill === 'Javascript') {
      removeElements('.container-1');
      removeElements('.container-2');

      get_skills(techSkill).others.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-1').appendChild(skillLabel);
      });
      get_skills(techSkill).libraries.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-2').appendChild(skillLabel);
      });

    } else if (techSkill === 'Web Design') {
      removeElements('.container-1');
      removeElements('.container-2');
      get_skills(techSkill).cssFrameworks.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-1').appendChild(skillLabel);
      });

    } else if (techSkill === 'Database') {
      removeElements('.container-1');
      removeElements('.container-2');
      get_skills(techSkill).sqlDatabases.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-1').appendChild(skillLabel);
      });
      get_skills(techSkill).noSqlDatabases.forEach((skill) => {
        const skillLabel = document.createElement('h3');
        skillLabel.textContent = skill;
        document.querySelector('.container-2').appendChild(skillLabel);
      });
    }
};

// Skills in About Section
techSkills.forEach((skill) => {
  const skillText = skill.textContent.trimStart();
  skill.addEventListener('click', () => selectSkillDisplay(skillText));
});

// Contact Links
const gotoLink = (clsSelector) => {
  if(clsSelector === "fa-github") {
    window.open("https://github.com/DMR0M");
  } else if(clsSelector === "fa-linkedin") {
    window.open("https://ph.linkedin.com/in/rommel-dela-merced-943970233");
  } else if(clsSelector === "fa-instagram") {
    window.open("https://www.instagram.com/rommru/")
  } else if(clsSelector === "fa-square-facebook") {
    window.open("https://www.facebook.com/MemaPr1nce")
  }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Save theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    selectedTheme(true)
  }
} 

// Download / View Resume Button
dlResumeElem.addEventListener('click', () => {
  alert('Resume Downloaded');
});

// Project Buttons
projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const btnId = button.id;

    if (btnId === 'project-1') {
      // console.log(projectInfo[0].title);

      // Get project image
      projectImage.src = './img/projects/my_website.png';
      projectImage.alt = 'Personal Portfolio Website';

      // Get project title
      projectTitle.textContent = projectInfo[0].title;

      // Get project description
      projectTextDesc.textContent = projectInfo[0].description;

      // Get project technologies or programming languages used
      projectInfo[0].techonologies.forEach((techonology) => {
        const projectTech = document.createElement('span');
        projectTech.textContent = techonology;

        projectTitle.appendChild(projectTech);
      });
    }
    else if (btnId === 'project-2') {
      // console.log(projectInfo[1].title);

      // Get project image
      projectImage.src = './img/projects/log_your_learning.png';
      projectImage.alt = 'Learning Log Website';

      // Get project title
      projectTitle.textContent = projectInfo[1].title;

      // Get project description
      projectTextDesc.textContent = projectInfo[1].description;

      // Get project technologies or programming languages used
      projectInfo[1].techonologies.forEach((techonology) => {
        const projectTech = document.createElement('span');
        projectTech.textContent = techonology;

        projectTitle.appendChild(projectTech);
      });
    }
    else if (btnId === 'project-3') {
      // console.log(projectInfo[2].title);

      // Get project image
      projectImage.src = './img/projects/pokemon_stats_viewer.png';
      projectImage.alt = 'Learning Log Website';

      // Get project title
      projectTitle.textContent = projectInfo[2].title;

      // Get project description
      projectTextDesc.textContent = projectInfo[2].description;

      // Get project technologies or programming languages used
      projectInfo[2].techonologies.forEach((techonology) => {
        const projectTech = document.createElement('span');
        projectTech.textContent = techonology;

        projectTitle.appendChild(projectTech);
      });
    }
  });
});

const iconClicked = (iconId) => {
  if (iconId === 'github-link') window.open('https://github.com/DMR0M');
  else if (iconId === 'linkedin-link') window.open('https://ph.linkedin.com/in/rommel-dela-merced-943970233');
  else if (iconId === 'instagram-link') window.open('https://www.instagram.com/rommru');
  else if (iconId === 'facebook-link') window.open('https://www.facebook.com/MemaPr1nce');
}

contacts.forEach(link => {
  const iconId = link.id;
  
  console.log(iconId);
  link.addEventListener('click', () => iconClicked(iconId));
});

