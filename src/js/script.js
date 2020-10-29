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

  // Modal
  //появляется модальное окно при клике на кнопки "заказать звонок" и "Заказать консультацию"
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  // нажатие на крестик, закрытие модального окна
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  // при нажатии на кнопку "купить" товар
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  // валидация модальных окон
  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символов")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // отправка письма с данными, при нажатии на "Заказать звонок" и "Получить консультацию"
  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");

      // появления модального окна "Спасибо за вашу заявку!"
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      //...

      $('form').trigger('reset');
    });
    return false;
  });

  // Smooth scroll and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  // скрипт для плавного возврата в начало страницы при нажатии на pageup
  $("a[href^=#up]").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();

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