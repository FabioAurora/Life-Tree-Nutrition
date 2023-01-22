"use strict";
/* accessing DOM elements */
const navBurger = document.querySelector('.navbar__hamburger');
const navMenu = document.querySelector('.navbar__menu');

/* Menu toggle class and translate animation */
let menuActive = false;
navBurger.addEventListener('click', () => {
  menuActive = !menuActive;
  navBurger.classList.toggle('active', menuActive);
  navMenu.classList.toggle('active', menuActive);
  if(!menuActive){
    navMenu.classList.add('inactive')
  }else{
    navMenu.classList.remove('inactive')
  }
});

//remove the inactive class after the transition is finished:
navMenu.addEventListener('transitionend', (e) => {
    if(e.propertyName === 'transform' && !menuActive) {
        navMenu.classList.remove('inactive');
    }
})



/* animate elements from right to left when the DOM elements are loaded */
document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll('.animated-element');
    let delay = 0;
    let interval = .5;

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = delay + (interval * index) + 's';
            element.classList.add('animate');
        }, delay * 1000);
    });
});