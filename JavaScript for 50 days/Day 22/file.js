const cel = document.querySelector('#cel')
const far = document.querySelector('#far')
const kel = document.querySelector('#kel')

const formOne = document.querySelector('.one')
const formTwo = document.querySelector('.two')
const formThree = document.querySelector('.three')

formOne.addEventListener('submit',(e)=>{
    e.preventDefault()
    far.value = +cel.value*1.8 + 32
    kel.value = +cel.value + 273.15
})
formTwo.addEventListener('submit',(e)=>{
    e.preventDefault()
    cel.value = (+far.value- 32)/1.8;
    kel.value = (+far.value- 32)/1.8 + 273.3;
})
formThree.addEventListener('submit',(e)=>{
    e.preventDefault()
    cel.value = +kel.value - 273.32
    far.value = (+kel.value- 273.32)*1.8 + 32;
})
