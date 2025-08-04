document.addEventListener('DOMContentLoaded',()=>{
    
    // 
    // ========================
const one = document.getElementById("one");
console.log(one);
one.style.color = 'red'

// getElementByClassName
// ========================
const hi = document.getElementsByClassName('highlight');
//배열 자료형으로 반환됨
console.log(hi);

hi[0].textContent="🍕🍕🍕🍕🍕";
for (let i = 0; i < hi.length; i++){hi[i].textContent += "🥐🥐🥐🥐"}

// getElementsByTagName
// ========================
const ul=document.getElementsByTagName('ul');
console.log(ul);
const li=`<li>🍺🍺🍺동적추가</li>`
for(let i = 0; i < ul.length; i++){
    ul[i].innerHTML += li;
}
})
