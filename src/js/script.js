// для slick
$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});

// для tiny-slider
// const slider = tns({
//   container: '.carousel__inner',
//   items: 1, // кол-во слайдов в карусели одновременно
//   slideBy: 'page',
//   autoplay: false,
//   controls: false, // скрыть родные кнопки tiny-slider
//   nav: false
// });

// document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };

// document.querySelector('.next').onclick = function () {
//   slider.goTo('next');
// };