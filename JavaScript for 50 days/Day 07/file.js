const comp = document.querySelector('.comp')
const user = document.querySelector('.user')
const btns = document.querySelectorAll('.buttons button')
const result = document.querySelector('.result')
const box = document.querySelector('.box')
const startBtn = document.querySelector('.startBtn')
const reset = document.querySelector('.reset')
let choice = ['Rock','Paper','Scissor']

window.addEventListener('DOMContentLoaded',()=>{
    init()
})
function init(){
    startBtn.addEventListener('click',(e)=>{
        e.target.style.display = 'none'
        box.style.display = 'flex'
    })
    btns.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            let ranNum = Math.floor(Math.random() * (choice.length-1))
            comp.textContent = choice[ranNum]
            user.textContent = e.target.textContent
            checkWin()
            // comp.textContent = ''
            // user.textContent = ''
        })
    })
}
function checkWin(){
    if(comp.textContent === 'Rock' && user.textContent === 'Paper'){
        result.textContent = 'You Won'
    }else if(comp.textContent === 'Paper' && user.textContent === 'Rock'){
        result.textContent = 'Computer Won'
    }else if(comp.textContent === 'Rock' && user.textContent === 'Scissor'){
        result.textContent = 'Computer Won'
    }else if(comp.textContent === 'Scissor' && user.textContent === 'Rock'){
        result.textContent = 'You Won'
    }else if(comp.textContent === 'Paper' && user.textContent === 'Scissor'){
        result.textContent = 'You Won'
    }else if(comp.textContent === 'Scissor' && user.textContent === 'Paper'){
        result.textContent = 'Computer Won'
    }else{
        result.textContent = 'Game draw !'
    }
}
reset.addEventListener('click',()=>{
    window.location.reload()
})