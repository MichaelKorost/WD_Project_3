const navBar = document.querySelector('.nav-bar')
const navMenu = document.querySelector(".nav__menu");
const navMenuImg = document.querySelector(".nav__menu img");
const navMenuClose = document.querySelector(".nav__menu-close");
const navTitle = document.querySelector(".nav__title");
const navItem = document.querySelectorAll(".nav__item");

navMenu.addEventListener("click", openNavMenu);

function openNavMenu() {
  // navBar.classList.toggle('nav-bar--active')
  navMenuImg.classList.toggle("nav__menu--deactive");
  navMenuClose.classList.toggle("nav__menu-close--active");
  navTitle.classList.toggle("nav__title--active");
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("nav__item--active");
  }
}
