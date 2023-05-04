const btns = document.querySelectorAll('.btn')
const texts = document.querySelectorAll('.text')
const textEl = document.querySelector('.text')
let count = 0

btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        count++;
        e.target.parentNode.nextElementSibling.classList.toggle('live')
        if(count%2 === 1){
            e.target.textContent = 'Hide'
        }else{
            e.target.textContent = 'Show'
        }
    })
})