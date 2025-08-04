// === Reference ===
// 1. array
let zoo =[];
console.log(typeof zoo);  /* 배열도 객체(object)타입에 속함 */
zoo = ['koala'];
console.log(zoo);
zoo = ['dog'];   /* 값의 재할당이 이루어 지면서 배열내의 값이 수정됨 */
console.log(zoo);
zoo.push('koala');
console.log(zoo);
zoo.push('cat');
zoo.push('뚱이');
console.log(zoo);
zoo.pop();
console.log(zoo[0]);
console.log(zoo.length);
console.log(zoo[zoo.length - 1]);

/* dunction */
function wash(x){
    return x + 5; /* "티셔츠" + 5 */
}

 console.log(wash("티셔츠")); 
 console.log(typeof wash); 

 /* object */
 const person = {
    /* 키(key): 벨류 (value) */
    todos:['학원가기','점심먹기'],
    name: '뚱이',
    age: 5,
    action: function () {
        console.log("스폰지밥놀자")
    }
 }
 /* 객체에 저장된 함수를 메서드
    함수의 호출시 => 식별자() 
    메서드이 호출시 => 식별자.키값()
    함수>메서드
    메서드!==함수
    */
 console.log(person.name);
 person.action();
 
