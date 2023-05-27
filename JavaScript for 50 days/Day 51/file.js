const form = document.querySelector('form')
const total = document.querySelector('.total')
const amountInp = document.querySelector('#amount')
const tipInp = document.querySelector('#tip')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(amountInp.value && tipInp.value){
        let result = +amountInp.value + +(tipInp.value * amountInp.value/100)
        total.textContent = result
    }else{
        total.textContent = 'Please fill inputs'
    }
})