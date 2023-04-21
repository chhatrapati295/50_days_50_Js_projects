const amount = document.getElementById('amount')
const percentage = document.getElementById('percentage')
const total = document.querySelector('.total')
const btn = document.querySelector('button')
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    total.textContent = getData()
})

function getData(){
    const first = eval((amount.value/100)*percentage.value)
    const second = eval(+amount.value + +first)
    return second
}