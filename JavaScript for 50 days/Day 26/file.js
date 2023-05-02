const input = document.querySelector('input')
const total = document.querySelector('.total')
const rem = document.querySelector('.rem')
let limit = 50;

window.addEventListener('DOMContentLoaded',()=>{
    rem.textContent = limit
    total.textContent = 0
    input.addEventListener('keyup',(e)=>{
        if(rem.textContent == 0){
            window.location.reload()
        }else{
            total.textContent = e.target.value.length
            rem.textContent = limit - e.target.value.length
        }
    })
})