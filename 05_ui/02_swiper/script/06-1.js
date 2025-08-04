//전역변수들
let verticalSwiper, horizontalSwiper;
//방향 전환 섹션 인덱스
const index_horizontal_section = 3;
const index_5_section = 4;
const index_3_section = 2; 



//수직스와이퍼초기화
function initVerticalSwiper(){
    function onChnage(){
    console.log('현재섹션',this.activeIndex);
    
      //인덱스번호 3번 섹션
      if(this.activeIndex === index_horizontal_section){
        //상하스크롤 막기
        verticalSwiper.mousewheel.disable();
        verticalSwiper.allowTouchMove = false;
        if(this.preViousIndex === index_5_section){
          //지정시간 이후 함수실행
         setTimeout(function () {
            horizontalSwiper.slideTo(0, 0)
         }, 50)
        }

      }else{
        //상하스크롤 열기
        verticalSwiper.mousewheel.enable();
        verticalSwiper.allowTouchMove = true;
      } 

    }
    //상하슬라이더 시작
    function onVStart(){
        //index[4]->index[3]
        console.log("onVStart",this.preViousIndex);
        
        if(this.preViousIndex === index_5_section && this.activeIndex === index_horizontal_section){
             verticalSwiper.allowTouchMove = false;
            verticalSwiper.mousewheel.disable();
        }
    }
    //상하슬리이더 종료
    function onVEnd(){
        if(this.activeIndex === index_horizontal_section){
            horizontalSwiper.update();
        }
    }
    verticalSwiper = new Swiper('.verticals',{
        direction: 'vertical',
        slidePerView:1,
        mousewheel: true, 
        on:{
        slideChange: onChnage, //슬라이드 바뀔때
        slideChangeTransitionStart: onVStart, //이동 시작시
        slideChangeTransitionEnd: onVEnd,  //이동 종료시
    } 
})
}
//수평스와이퍼초기화
function initHorizontalSwiper(){
    function onEnd(){
        horizontalSwiper.canMoveToNext = true
    }
    function onStart(){
         horizontalSwiper.canMoveToPrev = true
    }
    function onDone(){
        //마지막 슬라이더에서 우측으로 넘기려고 할때
    if (horizontalSwiper.canMoveToNext && horizontalSwiper.isEnd) {
        //다음섹션으로 이동 -> 상하스크롤 켜기
        verticalSwiper.mousewheel.enable();
        }
        horizontalSwiper.canMoveToNext = false;
    
    }
    
    horizontalSwiper = new Swiper('.verticals',{
        direction: 'horizontal',
        slidePerView:1,
        mousewheel: true,
        pagination:{ 
            el:'.swiper-pagination',
            clickable: true
        }, 
        on:{
           reachEnd: onEnd,
           reachBeginning: onStart,
           transitionEnd: onDone
        },
})

}



initVerticalSwiper();
initHorizontalSwiper();