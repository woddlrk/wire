{/* var : 선언, 초기화 전 참조시 끌어올림 (hoisting) 발생 */
console.log(a);  //undefined
var a;  //변수의 선언
a =10;
console.log(a);
a = '상헌님 오셨어요';
console.log(a);
var a = '나령님 오셨어요';  //a변수의 초기화2
console.log(a);

//let, const
/*  var : 재할당 가능, 중복 선언O, 호이스티O */
/*  let : 재할당 가능, 중복 선언X, 호이트팅X */
/*  const : 재할당 X, 중족 선언X, 호이트팅X */
/* 변수, 함수 값을 참조할수 있는 유효범위 => scope */
/* hoisting : scope 이 끌어올려지는 현상 */
console.log(b);

let b;
console.log(b);
b = 100;
console.log(b);

}
{
let b = 500;
console.log(b);
}
