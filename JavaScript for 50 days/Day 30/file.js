const startBtn = document.querySelector('.startBtn')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const rem = document.querySelector('.rem')
const prev = document.querySelector('.prev')
const input = document.querySelector('.input')
const container = document.querySelector('.container')

let totalAttempts = 5
let compNum = 0

startBtn.addEventListener('click',()=>{
    box1.style.display = 'none';
    box2.style.display = 'flex';
    function getRandomNum(){
        return Math.floor(Math.random()*100 + 1)
    }
    compNum = getRandomNum()
    rem.textContent = totalAttempts
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value > 100 || input.value == NaN || input.value <1){
        result.textContent = 'Number must between 1 to 100'
        return null;
    }
    totalAttempts--;
    rem.textContent = totalAttempts;
    prev.textContent += input.value + ', '
    // console.log('input' , input.value , 'comp' , compNum)
    if(totalAttempts === 0 && +input.value !== compNum){
        container.innerHTML = `<h1>Game over</h1>
        <button class='restart' onclick='restartGame()'>Restart</button>`
    }else{
        if(+input.value > +compNum){
            result.textContent = 'Your guess is high'
        }else if(+input.value === compNum){
            container.innerHTML = `<h1>You won 🟢</h1>
            <button class='restart' onclick='restartGame()'>Restart</button>`
        }else{
            result.textContent = 'Your guess is low'
        }
        input.value = '';
    }
})

function restartGame(){
    window.location.reload()
}