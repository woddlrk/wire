const tabWrapper = $('.tab_wrapper');
// 제이쿼리객체는 단수, 복수 구별 안함
const link = $('.tab_menu a');
// 성능 개선을 위해서 상위에서 탐색시킴
const targetLink = tabWrapper.find('.tab_menu a');
const tabCon = tabWrapper.find('.tab_content>div')
targetLink.on('click',function(e){
    e.preventDefault();
    // this는 여러개중 이벤트가 발생한 이거
    let currentEl = $(this);
    let currentLink = currentEl.attr('href');
    console.log(currentLink);
    targetLink.removeClass('active');
    currentEl.addClass('active');
    tabCon.hide();
    $(currentLink).show();
})
