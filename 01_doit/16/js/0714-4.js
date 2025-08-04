/*  변수 x 를 선언하고 숫자1로 초기화 */
let x = 1;
/* 후위 증가연산자 */
console.log(`x++ : ${x++}`);  //1(2)  : x=x+1
console.log(x);  //2
/* 전위 증가연산자 */
x = 1;
console.log(x);
console.log(`++x: ${++x}`);  //2
console.log(`${x++}`);  //2
console.log(`${x++}`);  //3(4)
console.log(`${++x}`);  //5
console.log(`${--x}`);  //4
console.log(`${x--}`);  //4
console.log(`===============`);  
console.log(`${x++}`);    //3(4)
console.log(`${--x}`);    //3
