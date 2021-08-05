const swiperTariff = new Swiper('.tariff__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.tariff__arrow--next',
    prevEl: '.tariff__arrow--prev',
  },
  keyboard: {
    enabled: true,
  },
});

const swiperClients = new Swiper('.clients__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.clients__arrow--next',
    prevEl: '.clients__arrow--prev',
  },
  keyboard: {
    enabled: true,
  },
});