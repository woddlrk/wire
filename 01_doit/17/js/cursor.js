const cur1 = document.querySelector('.cursor1');
const cur1Pos = cur1.style;
const cur2 = document.querySelector('.cursor2');
const cur2Pos = cur2.style;

document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  //const box1 = document.querySelector('.box1');
  //const box2 = document.querySelector('.box2');
  cur1Pos.top = `${y - cur1.offsetHeight / 2}px`;
  cur1Pos.left = `${x - cur1.offsetWidth / 2}px`;
  cur2Pos.top = `${y - cur2.offsetHeight / 2}px`;
  cur2Pos.left = `${x - cur2.offsetWidth / 2}px`;
})
document.querySelector('.box1').addEventListener('mouseover', () => {
  cur1.classList.add('sty1');
})
document.querySelector('.box1').addEventListener('mouseout', () => {
  cur1.classList.remove('sty1');
})
document.querySelector('.box2').addEventListener('mouseover', () => {
  cur2.classList.add('sty2');
})
document.querySelector('.box2').addEventListener('mouseout', () => {
  cur2.classList.remove('sty2');
})