"use strict";

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

// Dark Mode Styles
const darkMode = () => {
  // Navbar Style
  nav.style.backgroundColor = 'rgb(25 25 25 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

  // Icon Toggle
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].style.color = 'white';

  // Images in About Section
  // image1.src = 'img/dark-mode/undraw_programming_re_dark.svg';
  // image2.src = 'img/dark-mode/undraw_web_development_dark.svg';
  // image3.src = 'img/dark-mode/undraw_code_thinking_re_dark.svg';
};

// Light Mode Styles
const lightMode = () => {
  // Navbar Style
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(25 25 25 / 50%)';

  // Icon Toggle
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  toggleIcon.children[1].style.color = 'black';

  // // Images in About Section
  // image1.src = "img/light-mode/undraw_programming_re_light.svg";
  // image2.src = "img/light-mode/undraw_web_development_light.svg";
  // image3.src = "img/light-mode/undraw_code_thinking_light.svg";
}

// Switch Theme
const switchTheme = () => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();

  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();

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
