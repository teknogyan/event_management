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

const swiper = new Swiper(".swiper", {
  effect: "slider",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menu_button = document.getElementById("hamburger-button");
const close_button = document.getElementById("close-button");
const menu = document.getElementById("mobile-menu");
const logo = document.getElementById("logo");

menu_button.addEventListener('click', () =>{
logo.style.display = "none"
menu.style.display= "flex"
menu_button.style.display = "none";
close_button.style.display = "block"
});

close_button.addEventListener('click', () => {
  logo.style.display = "block"
menu.style.display= "none"
menu_button.style.display = "block";
close_button.style.display = "none"
})

