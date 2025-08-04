let win = window;
win.addEventListener('scroll', () => {
  let sct1 = win.scrollY;//scrollX
  let sct2 = win.pageYOffset;
  let sct3 = document.documentElement.scrollTop;
  let sct4 = document.body.scrollTop;

  document.querySelector('p:nth-of-type(2)').innerHTML = `
  scrollY(최신버전-제일많이씀):${sct1}
  <hr>
  pageYOffset(IE지원):${sct2}
  <hr>
  documentElement.scrollTop(HTML요소에서 스크롤 감지):${sct3}
  <hr>
  body.scrollTop(비표준 html지원//Quirks모드에서 동작):${sct4}
  `;

})