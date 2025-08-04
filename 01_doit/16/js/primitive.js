/*  === primitive === */
/* 1. number */
let num1 = 1;
let num2 = 2;
 //* console.log(typeof num2); */
let sum = num1 + num2;  //연산자
console.log('sum:'+ sum +'/////sum type:' + typeof sum);

/* 2. string */
let str1 = '월';
let str2 = '2';
let sum2 = str1 + str2;
/* num */
let sum3 = num1 + num2 + str1;
console.log(sum3, typeof sum3);
/* 자바스크립트의 자료형은 값에 따라 결정됨(실행후 결정) 
   동적타입언어(Dynamic type) : 너무 유연해서 예측할 수 없는 버그가 발생함 */
   /* 타입스크립트: 자바스크립트의 슈퍼셋
      정적타입언엄(Static type): 자료형을 선언하고 사용 */
    //   boolean
    let fect = true;
    let lie = false;
    console.log(typeof fect, '/////', typeof lie);

    // null
    let temp = null;
    console.log(typeof temp);
    // null은 객체타입으로 반환

    // nudefined
    let noName;
    console.log(typeof noName);