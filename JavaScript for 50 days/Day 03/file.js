const data=[{
    question : 'What is your name ?',
    a : 'Vishal',
    b : 'Chhatrapati',
    c : 'Pulkit',
    d : 'Naren',
    ans : 'a'
    },
    {
        question : 'What is your age ?',
        a : '22',
        b : '23',
        c : '26',
        d : '21',
        ans : 'a'
    },
    {
        question : 'What is your fav color ?',
        a : 'blue',
        b : 'green',
        c : 'purple',
        d : 'black',
        ans : 'b'
    },
]
const que = document.querySelector('.que')
const nextBtn = document.querySelector('.nextBtn')
const opts = document.querySelectorAll('label')
const options = document.querySelectorAll('input')
let count=0
let rightAns =0;
let wrongAns =0;
window.addEventListener('DOMContentLoaded',()=>{
    setData(0)
})
function setData(count){
    if(count < data.length){
        que.textContent = `${count + 1}` + ' . ' + data[count].question;
        opts[0].textContent = data[count].a;
        opts[1].textContent = data[count].b;
        opts[2].textContent = data[count].c;
        opts[3].textContent = data[count].d;
    }else{
        endGame()
    }
}
nextBtn.addEventListener('click',()=>{
    checkAns(count)
    count++;
    resetCheck()
    setData(count)
})
function checkOpt(){
    let opt;
    options.forEach((option)=>{
        if(option.checked){
            opt = option.value
        }
    })
    return opt;
}

function checkAns (){
    let userAns = checkOpt()
    if(userAns === data[count].ans){
        rightAns++;
        console.log('right ans' ,rightAns)
    }else{
        wrongAns++;
        console.log('wrong ans' ,wrongAns)
    }
}

function endGame(){
    const p = document.createElement('p')
    p.textContent = `Your score is ${rightAns} / ${data.length}`
    p.className = 'endText'
    const btn = document.createElement('button')
    btn.textContent = 'Restart'
    btn.addEventListener('click',()=>{
        window.location.reload()
    })
    btn.className = 'endText'
    document.querySelector('.container').innerHTML = ''
    document.querySelector('.container').append(p)
    document.querySelector('.container').append(btn)
}

function resetCheck(){
    options.forEach((opt)=>{
        if(opt.checked){
            opt.checked = false
        }
    })
}