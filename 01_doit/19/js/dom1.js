const one = document.querySelector('#one');
console.log(one);
one.style.color = "red";
//여러개 일때는 최초의 한개만 취득
const hi=document.querySelector('.highlight');
console.log(hi);
//여러개를 취득할때 All
const his=document.querySelectorAll('.highlight');
console.log(his);
//for(;;){}
/* 콜백함수 -> 다른 함수를 매개변수로 받는 함수 */
/* 배열.forEach((매개변수,매개변수)=>{}) */
his.forEach((a,b) => {
    //console.log(`forEach의 결과: ${a}//$a{b}`);
    a.style.background = "yellow"
    a.style.marginTop = `${b*100}px`
})
