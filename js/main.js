'use strict'

/*------swiper------ */

var mySwiper = new Swiper('.swiper-container', {
 // Optional parameters
 loop: true,

 // If we need pagination
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },

 // And if we need scrollbar
 scrollbar: {
  el: '.swiper-scrollbar',
 },
})


/*------burger__menu------*/


'use strict'
window.addEventListener('DOMContentLoaded', function () {
 document.querySelector('#header__burger').addEventListener('click', function () {
  document.querySelector('.header__list-toggle').classList.toggle('header__list')
 })
})

window.addEventListener('DOMContentLoaded', function () {
 document.querySelector('#burger__button').addEventListener('click', function () {
  document.querySelector('.header__list-toggle').classList.toggle('header__list')
 })
})

