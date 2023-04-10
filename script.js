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

const selectedTheme = (isDark) => {
  // Navbar Style
  isDark ? nav.style.backgroundColor = 'rgb(25 25 25 / 50%)' : nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  isDark ? textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' : textBox.style.backgroundColor = 'rgb(25 25 25 / 50%)';

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

// Contact Links
const gotoLink = (clsSelector) => {
  if(clsSelector === "fa-github") {
    window.open("https://github.com/DMR0M");
  } else if(clsSelector === "fa-linkedin") {
    window.open("https://www.linkedin.com");
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