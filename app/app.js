
const toggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('menu-open');
  toggle.classList.toggle("menu-icon");
})

