const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const input = document.querySelector('.input')
const remData = document.querySelector('#one')
const prevData = document.querySelector('#two')
const result = document.querySelector('.result')

const startBtn = document.querySelector('.startBtn')
const checkBtn = document.querySelector('.checkBtn')
const form = document.querySelector('form')
let compGuess;
let remAttempts = 5

startBtn.addEventListener('click',()=>{
    box1.style.display = 'none';
    box2.style.display = 'flex';
    init()
})
function init(){
    let guessNum = Math.floor(Math.random() *100)
    compGuess = guessNum
    remData.textContent = remAttempts;
    console.log(compGuess)
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            remAttempts--;
            if(remAttempts > 0){
                checkWin()
            }else{
                looseFunc()
            }
            input.value = ''
        })
}
function checkWin (){
    if(input.value > 100){
        result.textContent = 'Number must be 1 to 100'
        return;
    }
    remData.textContent = remAttempts;
    prevData.textContent += input.value + '  '
    if(input.value == compGuess){
        result.textContent = 'You are correct'
        console.log('right')
        afterWin()
    }else if(input.value > compGuess){
        console.log('Your guess is high')
        result.textContent = 'Your guess is high'
    }else{
        console.log('Your guess is low')
        result.textContent = 'Your guess is low'
    }
}

function afterWin (){
    form.style.display = 'none'
    result.style.fontSize = '1.2rem'
    const btn = document.createElement('button')
    btn.className = 'restart'
    btn.textContent = 'Restart'
    document.querySelector('.attempts').after(btn)
    btn.addEventListener('click',()=>{
        window.location.reload()
    })
}
function looseFunc(){
    form.style.display = 'none'
    result.style.fontSize = '1.2rem'
    result.textContent = 'You loose !'
    const btn = document.createElement('button')
    btn.className = 'restart'
    btn.textContent = 'Restart'
    document.querySelector('.attempts').after(btn)
    btn.addEventListener('click',()=>{
        window.location.reload()
    })
    remData.textContent = 0;
    prevData.textContent += input.value + '  '
}