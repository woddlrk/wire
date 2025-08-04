/* 위치얻기 */
const p = document.querySelector('p:nth-of-type(2)');
let offset = p.offsetTop;
let offsetX = p.offsetLeft;
p.innerHTML=`top: ${offset} //${offsetX} <hr>`
/* 크기얻기 */
let h1=p.clientHeight;
p.innerHTML+=`clientHeight(패딩포함): ${h1}<hr>`
let h2=p.scrollHeight;
p.innerHTML+=`scrollHeight(패딩포함, 화면에 잘린 부분 포함): ${h2}<hr>`
let h3=p.offsetHeight;
p.innerHTML+=`offsetHeight(보더,패딩포함,스크롤바 포함): ${h3}<hr>`
