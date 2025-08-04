//전역변수들
let verticalSwiper, horizontalSwiper;
//방향 전환 섹션 인덱스
const index_horizontal_section = 3;
const index_5_section = 4;
const index_3_section = 2; 



//수직스와이퍼초기화
function initVerticalSwiper(){
    verticalSwiper = new Swiper('.verticals',{
        direction: 'vertical',
        slidePerView:1,
        mousewheel: true, 
        on:{
        slideChange: handleVerticalSlideChange,
        slideChangeTransitionStart: handleVerticalTransitionStart,
        slideChangeTransitionEnd: handleVerticalTransitionEnd,
    }
})
}
//수평스와이퍼초기화
function initHorizontalSwiper(){
    horizontalSwiper = new Swiper('.verticals',{
        direction: 'horizontal',
        slidePerView:1,
        mousewheel: true,
        pagination:{ 
            el:'.swiper-pagination',
            clickable: true
        }, 
        on:{
           reachEnd: handleHorizontalReachEnd,
           reachBeginning: handleHorizontalReachBeginning,
            transitionEnd: handleHorizontalTransitionEnd
        },
})
}
/*
*수평스와이퍼 이벤트핸들러 
**/

 //수평 스와이퍼의 마지막 슬라이드 도달시 기능
function handleHorizontalReachEnd(){
   horizontalSwiper.canMoveToNext = true; 
}

 //수평 스와이퍼의 첫번째  슬라이드 도달시 기능
function handleHorizontalReachBeginning(){
    horizontalSwiper.canMoveToPrev = true; 
}

 //수평 스와이퍼의 애니메이션 종료시 기능
function handleHorizontalTransitionEnd(){
    if(horizontalSwiper.canMoveToNext && horizontalSwiper.isEnd){
        enableVerticalScroll(function(){
            verticalSwiper.slideNext();
        })
    }
    horizontalSwiper.canMoveToNext = false;
}

/*
*수직 스와이퍼 이벤트핸들러 
**/

 //수직 스와이퍼의 슬라이드가 변경될때
function handleVerticalSlideChange(){}

 //수직 스와이퍼의 첫번째  슬라이드 도달시 기능
function handleVerticalTransitionStart(){}

 //수직 스와이퍼의 애니메이션 종료시 기능
function handleVerticalTransitionEnd(){}





initVerticalSwiper();
initHorizontalSwiper();