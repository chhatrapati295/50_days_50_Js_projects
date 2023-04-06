const heading = document.querySelector('.heading')
const decreaseBtn = document.querySelector('.de')
const resetBtn = document.querySelector('.re')
const increaseBtn = document.querySelector('.in')
const allBtns = document.querySelectorAll('button')
let count = 0;

allBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.textContent === 'Increase'){
            count++;
            numberingColor()
            heading.textContent = count
        }else if(btn.textContent === 'Decrease'){
            count--;
            numberingColor()
            heading.textContent = count
        }else{
            count =0;
            numberingColor()
            heading.textContent = count
        }
    })
})

function numberingColor (){
    if(count > 0){
        heading.style.color = 'green'
    }else if(count < 0){
        heading.style.color = 'red'
    }else{
        heading.style.color = 'black'
    }
}
