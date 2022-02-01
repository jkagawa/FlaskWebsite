const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

function toggleLightDarkMode(isLight) {
  isLight ? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
}

function switchTheme(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark');
    toggleLightDarkMode(false);
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    toggleLightDarkMode(true);
  }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme
const currTheme = localStorage.getItem('theme');
if(currTheme) {
  document.documentElement.setAttribute('data-theme', currTheme);
  if(currTheme==='dark') {
    toggleSwitch.checked = true;
    toggleLightDarkMode(false);
  }
  else {
    toggleSwitch.checked = false;
    toggleLightDarkMode(true);
  }
}


window.onscroll = function(event) {
  var doc_el = document.documentElement;
  doc_el = (doc_el.clientHeight)? doc_el : document.body;
  var target_el = document.querySelectorAll('.non-intro-style-dark');
  var cont = document.querySelector('.header_container');
  var cont2 = document.querySelector('.dropdown_container');

  //Check if top of element hits bottom of fixed header
  if (doc_el.scrollTop > (target_el[0].offsetTop-50)) {
    cont.classList.add("container_style");
    cont2.classList.add("container_style");
  }
  else {
    cont.classList.remove("container_style");
    cont2.classList.remove("container_style");
  }
};
