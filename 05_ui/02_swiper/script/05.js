//변수들
let verticalSwiper, horizontalSwiper;
//수직스와이퍼초기화
function initVerticalSwiper(){
    verticalSwiper = new Swiper('.verticals',{
        direction: 'vertical',
        slidePerView:1,
        mousewheel: true, 
        on:{
        slideChange: function(){
            console.log('slide change');
            console.log(this.activeIndex);
           
        }
    }
})
}
//수평스와이퍼초기화



initVerticalSwiper();