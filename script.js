// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper = new Swiper('.swiper', {
  effect: 'slider',
  navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
});

const menu_button = document.getElementById("hamburger-button");
const close_button = document.getElementById("close-button");

menu_button.addEventListener()