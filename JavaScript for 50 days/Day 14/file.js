const btn = document.querySelector('.btn')
const lists = document.querySelector('.lists')
let count = 0
btn.addEventListener('click',()=>{
    count++;
    if(count%2 == 1){
        lists.style.display = 'flex'
    }else{
        lists.style.display = 'none'
    }
})