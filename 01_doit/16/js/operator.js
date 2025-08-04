/*  ** 산술연산자 **  */

{
//let a;
//let b;
let a, b;
a = 2;
b = 5;
// console.log('a와 b를 더할때 + 연산자 =' + a + b); 
console.log(`"덧셈 +" ${a + b}`);  //7
console.log(`"뺄셈 -" ${a - b}`);  //-3
console.log(`"곱셈 *" ${a * b}`);  //10
console.log(`"나눗셈 /" ${a / b}`);  //0.4
console.log(`"나머지 %" ${a % b}`);  //2
console.log(`"1 증가 ++" ${++a}`);  //3 (2+1=3)
console.log(`"1 감소 --" ${--b}`);  //4 (5-1=4)
a = 10;
b = ++a + 5;  //16 (11+5=16)
console.log(b);
console.log(`"제곱 **" ${2 ** 3}`);  //8
/* 연산 결과에 따른 자료형 변환 */
let t1 = '망고는';
console.log(typeof t1);  //string
let t2 = 5;
console.log(typeof t2);  //number
let t3 = true;
console.log(typeof t3);  //boolean
console.log(`========================`);
console.log(`${t1+t2}의 자료형은 ${typeof t1 + t2}`);  //string + number = string
console.log(`${typeof t1 * 1}`);  // not a number => NaN
/*  자료형을 변경하는 명령어 */
let t4 = '10';
console.log(`${typeof String(t3)}`);  //string
console.log(`${typeof Number(t3)}:${t3}`);  //number
console.log(`${typeof Boolean(0)}:${Boolean(0)}`);
}
/*  **대입(할당)연산자**  */
{
    let a;
    console.log(`= : 우향의 값을 좌항에 할당 ${a = 5} /// a의 값은 ${a}`);
    //복합대입연산자
    a = '??';
    let b = '***';
    console.log(a += b);  //a=a+b => a+=b
    console.log(a -= b);  //a=a-b => a-=b
}
