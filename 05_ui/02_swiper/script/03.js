const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    /* min-width: 640~767 */
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    //screen > 768
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})