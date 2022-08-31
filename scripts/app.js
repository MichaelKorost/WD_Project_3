const page = document.querySelector(".page");
const navBar = document.querySelector(".nav-bar");
const navMenu = document.querySelector(".nav__menu");
const navMenuImg = document.querySelector(".nav__menu img");
const navMenuClose = document.querySelector(".nav__menu-close");
const navTitle = document.querySelector(".nav__title");
const navTitleLogo = document.querySelector(".nav__title a");
const navItem = document.querySelectorAll(".nav__item");

navMenu.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
  navBar.classList.toggle("nav--active");
  navMenuImg.classList.toggle("nav__menu--deactive");
  navMenuClose.classList.toggle("nav__menu-close--active");
  navTitle.classList.toggle("nav__title--active");
  page.classList.toggle("page--scroll-lock");
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("nav__item--active");
  }
}

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", toggleNavMenu);
}

navTitleLogo.addEventListener("click", closeNavMenu);

function closeNavMenu() {
  console.log("function close working");
  if (navBar.classList.contains("nav--active")) {
    console.log("closing");
    toggleNavMenu();
  }
}

//create toggle navMenu
//create nav dynamically
