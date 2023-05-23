const timer = document.querySelector('.timer')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const allBtns = document.querySelectorAll('button')

let count = 10;
let init = 10
let id1;

allBtns.forEach(btn=>{
    timer.textContent = count
    btn.addEventListener('click',(e)=>{
        if(e.target.textContent === 'Start'){
            id1 = setInterval(() => {
                count--;
                if(count >0){
                    timer.textContent = count
                }else{
                    timer.textContent = 'Time is up'
                }
            }, 1000);
        }else if(e.target.textContent === 'Stop'){
            clearInterval(id1)
            timer.textContent = count
        }else{
            count = init;
            clearInterval(id1)
            timer.textContent = count
        }
    })
})