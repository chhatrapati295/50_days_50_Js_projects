const amount = document.querySelector('#amount')
const tip = document.querySelector('#tip')
const form = document.querySelector('form')
const total = document.querySelector('.total')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getTotal()
})
function getTotal(){
    let result;
    result = +amount.value + +(amount.value*tip.value/100)
    total.textContent = result;
    amount.value = '';
    tip.value = '';
}