const openMenu = document.querySelector('.openMenu');
const xBtn = document.querySelector('.xBtn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

const menuOpenClose = function() {
  menu.classList.toggle('-translate-x-full');
  overlay.classList.toggle('-translate-x-full');
}

openMenu.addEventListener('click', menuOpenClose);
xBtn.addEventListener('click', menuOpenClose);
overlay.addEventListener('click', menuOpenClose);





// carousel of logos
$(document).ready(function(){
    $('.owl').owlCarousel({
      loop:true,
      autoplay:true,
      dots:false,
      margin: 20,
      responsive:{
        0: {
          items: 1.3
        },
        640: {
          items: 2.3
        },
        768: {
          items: 3.3
        },
        1280: {
          items: 4.3
        }
    }
  })
  });