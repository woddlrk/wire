const tabWrapper = document.querySelectorAll('.tab_wrapper');
const singleTab = () => {
    const tabCon = document.querySelectorAll('.tab_content>div');
    const targetLink = document.querySelectorAll('.tab_menu a');
    targetLink.forEach((el, idx) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            // el.classList.remove('active');
            targetLink.forEach((els) => {
                 els.classList.remove('active');
                })
            e.target.classList.add('active');  
            let orgTarget = e.target.getAttribute('href');
            tabCon.forEach((el) => {
                el.style.display = 'none'
            })
            document.querySelector(orgTarget).style.display = 'block';
            })


    })
    // forEach 배열의 요소를 한번씩 순회
}
singleTab()