"use strict";

const navBurger = document.querySelector('.navbar__hamburger');
const navMenu = document.querySelector('.navbar__menu');


navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
})