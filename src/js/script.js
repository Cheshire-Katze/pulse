// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     // adaptiveHeight: true,
//     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }
//     ]
//   });
// }); для slick

const slider = tns({
  container: '.carousel__inner',
  items: 1, // кол-во слайдов в карусели одновременно
  slideBy: 'page',
  autoplay: false,
  controls: false, // скрыть родные кнопки tiny-slider
  nav: false
});

document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};