const hamIcon=document.querySelector('.ham_menu');
console.log(hamIcon);
hamIcon.addEventListener('click',function(){
    document.querySelector('.nav_bar').classList.toggle('active');
   hamIcon.classList.toggle('fa-times') 
})