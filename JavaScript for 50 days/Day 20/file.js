const btns = document.querySelectorAll('.btns button')
const result = document.querySelector('.result')
const userScore = document.querySelector('.userScore')
const compScore = document.querySelector('.compScore')
const choices = ['Rock','Paper','Scissor']
let compChoice =''
let userPoints=0;
let compPoints=0;

window.addEventListener('DOMContentLoaded',()=>{
    compChoice = compGuess()
})
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if((compChoice === 'Rock' && e.target.textContent ==='Paper') || 
            (compChoice === 'Paper' && e.target.textContent ==='Scissor') ||
            (compChoice === 'Scissor' && e.target.textContent ==='Rock')){
                result.textContent = 'You Won';
                userPoints++;
        }else if((compChoice === 'Paper' && e.target.textContent ==='Rock')||
            (compChoice === 'Scissor' && e.target.textContent ==='Paper') ||
            (compChoice === 'Rock' && e.target.textContent ==='Scissor')){
                result.textContent = 'Computer Won'
                compPoints++;
        }
        else{
            result.textContent = 'Draw'
        }
        userScore.textContent = userPoints;
        compScore.textContent = compPoints;
        compChoice = compGuess()
    })
})

function compGuess (){
    let choice = choices[Math.floor(Math.random()*choices.length)]
    console.log(choice)
    return choice
}