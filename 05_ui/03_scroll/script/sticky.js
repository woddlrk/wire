const header = document.querySelector('.page_header');
//const headerTop = header.offsetTop;
const headerTop = header.clientHeight;
window.addEventListener('scroll', () => {
  const currentTop = window.scrollY;
  console.log(headerTop, currentTop);
  if (currentTop > headerTop){
    header.classList.add('sticky')
  }
  if (currentTop > 50) {
  document.querySelector('.dummy').classList.add('on');
  
  }else {
     header.classList.remove('sticky')
  }
})