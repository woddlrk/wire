// 1. 객체리터럴 {}
// 2. 내장객체
// 2.1. 자바스크립트에서 미리 정의해 놓은 객체
// 2.1.1. DOM (문서객체모델)
// 2.1.1.1document  객체
// 2.1.1.1browser 객체

// 3. 사용자 정의객체
const book = {
  // key: value
  title: '자바스크립트',
  pages: 50,
  //method
  cart: function (n) {
    console.log(`${this.title}책 ${n} 장바구니 추가`);
  }
};
console.log(book.title);
console.log(book.pages);
book.cart('1권');
//console.log()
