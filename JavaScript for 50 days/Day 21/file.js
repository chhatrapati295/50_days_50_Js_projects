const input = document.querySelector('#input')
const result = document.querySelector('.result')

let startId = ''
let errorId = ''
input.addEventListener('input',(e)=>{
    if(e.target.value <=0 || isNaN(e.target.value)){
        result.textContent = 'Please put a valid number !'
        clearTimeout(errorId)
        errorId = setTimeout(()=>{
            result.textContent = ''
            e.target.value = ''
        },2000)
    }else{
        result.textContent = (e.target.value/2.2).toFixed(2)
        clearTimeout(startId)
        startId = setTimeout(()=>{
            result.textContent = ''
            e.target.value = ''
        },10000)
    }
})