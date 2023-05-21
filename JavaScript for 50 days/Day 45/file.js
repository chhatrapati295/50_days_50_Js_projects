const data = [
    {
        que : 'What is the capital of Rajasthan ?',
        a: 'Delhi',
        b: 'Jaipur',
        c: 'Goa',
        d: 'Jodhpur',
        ans : 'Jaipur'
    },
    {
        que : 'What is the capital of Bihar ?',
        a: 'Patna',
        b: 'Delhi',
        c: 'Goa',
        d: 'Ajmer',
        ans : 'Patna'
    },
    {
        que : 'What is the capital of Goa ?',
        a: 'Delhi',
        b: 'Jaipur',
        c: 'Panjim',
        d: 'Sikar',
        ans : 'Panjim'
    },
    {
        que : 'What is the capital of Haryana ?',
        a: 'Chandigarh',
        b: 'Jaipur',
        c: 'Ahmedabad',
        d: 'Bissau',
        ans : 'Chandigarh'
    },
    {
        que : 'What is the capital of Tamilnadu ?',
        a: 'Bangalore',
        b: 'Chennai',
        c: 'Ajmer',
        d: 'Mumbai',
        ans : 'Chennai'
    },
]

const info = document.querySelector('.info')
const startBtn = document.querySelector('.startBtn')
const box = document.querySelector('.box')
const question = document.querySelector('.que')
const nextBtn = document.querySelector('.nextBtn')
const form = document.querySelector('form')
const input = document.querySelector('.nameInput')
const allOptions = document.querySelectorAll('label')
const allTicks = document.querySelectorAll('.opt')

let userName;
let count = 0

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    info.style.display = 'none';
    box.style.display = 'flex';
    console.log(input.value)
    userName = input.value
    startQuiz(count)
})
function startQuiz(count){
    let num = data[count]
    question.textContent = `${count+1}. ` + num.que
    allOptions[0].textContent = num.a
    allOptions[1].textContent = num.b
    allOptions[2].textContent = num.c
    allOptions[3].textContent = num.d
    selectTik()
}

function selectTik(){
    allTicks.forEach(tik=>{
        if(tik.checked){
            console.log(tik.value)
        }
    })
}