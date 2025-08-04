// 문서를 다 읽고 실행해
//document.addEventListener("DOMContentLoaded",()=>{})
$(() => {
  const mm = $('#m-navbar');
  const wrap = $('.wrap');

  $('.hamburger').on('click', show)

  function show() {
    if (mm.is(':hidden')) {
      mm.css('display', 'flex');
      wrap.addClass('bg');
      $('header').css('background', '#fff');
      $('.hamburger i').removeClass('bi-list').addClass('bi-x');
    } else {
      mm.hide();
      wrap.removeClass('bg');
      $('.hamburger i').removeClass('bi-x').addClass('bi-list');
    }
  }

});
