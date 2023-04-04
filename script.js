"use strict";

// Selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');
const modeText = document.querySelector('.toggle-text');
const modeIcon = document.querySelector('.fas');


// Switch Theme
const switchTheme = () => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');

    image1.src = 'img/dark-mode/undraw_programming_re_dark.svg';
    image2.src = 'img/dark-mode/undraw_web_development_dark.svg';
    image3.src = 'img/dark-mode/undraw_code_thinking_re_dark.svg';

    modeText.textContent = 'Dark Mode';
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");

  } else {
    document.documentElement.setAttribute("data-theme", "light");

    image1.src = "img/light-mode/undraw_programming_re_light.svg";
    image2.src = "img/light-mode/undraw_web_development_light.svg";
    image3.src = "img/light-mode/undraw_code_thinking_light.svg";

    modeText.textContent = "Light Mode";
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");

  } 
};

// Contact Link
const gotoLink = (clsSelector) => {
  switch (clsSelector) {
    case "fa-github":
      window.open("https://github.com/DMR0M");
    case "fa-linkedin":
      window.open("https://www.linkedin.com/in/rommel-dela-merced-943970233/");
    case "fa-square-facebook":
      window.open("https://www.facebook.com/MemaPr1nce");
    case "fa-instagram":
      window.open("https://www.instagram.com/rommru/");
  }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
