const input = document.querySelector('.input')
const copy = document.querySelector('.copy')
const gen = document.querySelector('.generate')

gen.addEventListener('click',()=>{
    getPass()
})
let pass = '';
function getPass(){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let main = ''
    for(let i=0;i<10;i++){
        pass = letters[Math.floor(Math.random()*60)]
        main += pass
    }
    input.value = main
}
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(input.value)
    document.querySelector('.notification').textContent = input.value
    document.querySelector('.notification').style.transform = 'translateY(100%)'
    setTimeout(() => {
        document.querySelector('.notification').style.transform = 'translateY(-100%)'
    }, 3000);
})