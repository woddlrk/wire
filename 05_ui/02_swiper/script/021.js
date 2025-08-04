'use strict';/* 자바스크립트를 엄격하게 검사 */
const promoSlider = new Swiper('.promotion .swiper-container', {
  //autoplay: {
  //  delay: 1500
  //},
  //  effect: 'cube'
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})