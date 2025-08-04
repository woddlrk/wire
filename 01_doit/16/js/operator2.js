/* 비료 연산자
피연산자 2개의 값을 비교후 참/거짓 변환
주로 조건문에 사용 */
let x = 10;
let y = 20;
//x = 'a'
console.log(`x>y는? ${x > y}`);  //10>20 좌항의 값이 우항보다 큰가 (초과)? false
console.log(`x<y는? ${x < y}`);  //10>20 좌항의 값이 우항보다 작은가? true
console.log(`x>=y는? ${x >= y}`);  //10>20 좌항의 값이 우항보다 (이상) 크거나 같은가? false
console.log(`x<=y는? ${x <= y}`);  //10>20 좌항의 값이 우항보다 (이상) 작거나 같은가? true
x = '20';
console.log(`x==y는? ${x == y}`);  //좌항과 우항의 값이 같다. true
console.log(`x===y는? ${x === y}`);  //'20'=== 20: 좌항과 우항의 값이 자료형이 같다. false
// ! not 연산자
console.log(`x!=y는? ${x!=y}`);  //'20'!=20 : 좌항과 우항의 값이 다르다.false
console.log(`x!==y는? ${x!==y}`);  //'20'!=20 : 좌항과 우항의 값이 자료형이 다르다. true

/* 논리(이항)연산자  &&, ||. !*/
 
let z = true;
let w = true;
let v = false;
console.log(!z); //부정연산자 ! (~가 아니다.):false
console.log(`z&&w&&z: ${z && w && z}`); // and연산자 (피연산자 모두 true => true)  //true
console.log(`z||v : ${z||v}`);  // or연산자(피연산자 중 하나라도 true => true)
