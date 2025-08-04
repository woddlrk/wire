let win = window;
const dot = document.querySelector('.dot');
const body = document.querySelector('body');
const header = document.querySelector('.page_header');
//.page_header의 모든 하위 노드를 headerClone에 heml 태그로 할당
let headerClone = header.innerHTML;
//headerCloneContainer 변수에 빈 div 를 할당
let headerCloneContainer = document.createElement('div')
//header 의 높이 계산(스크롤양과 비교할 값)
const threshold = header.offsetTop + header.offsetHeight;
console.log(threshold);
//clone 생성
//8번 라인에서 생성한 div 태그에 클래스 추가
 headerCloneContainer.classList.add('page_header_clone');
 //6번 라인의 복사본을 headerCloneContainer에 html로 추가
  headerCloneContainer.innerHTML = headerClone;
  //body의 자식으로 gheaderCloneContainer를 추가
  body.appendChild(headerCloneContainer) 

win.addEventListener('scroll', ()=> {
    let sct = this.scrollY;
    if (sct > threshold){  //스크롤 양이 10번의 header 높이보다 크면
        headerCloneContainer.classList.add('visible')
    }else{
        headerCloneContainer.classList.remove('visible')
    }


        /* 
        * top button 표시
         */
        if(sct > 300) {
            dot.style.opacity = '1'
        } else {
            dot.style.opacity = '0'
        }



    //console.log(sct);
    //if (sct > 10) {
        //dot.classList.add('on');
        //dot.style.top = sct + 'px'
    //}
})

dot.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('html,body').scrollTo({top:500, behavior: 'smooth' });
})