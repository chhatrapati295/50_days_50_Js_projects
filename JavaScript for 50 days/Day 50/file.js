const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
let count=0
btn.addEventListener('click',()=>{
    count++
    if(count % 2 === 1){
        input.style.display = 'block'
    }else{
        input.style.display = 'none'
    }
})