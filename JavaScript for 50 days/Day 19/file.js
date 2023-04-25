const timer = document.querySelector('.timer')
const btns = document.querySelectorAll('button')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
let timeLeft = 1500;
startBtn.addEventListener('click',()=>{
    startId = setInterval(() => {
        timeLeft--;
        startBtn.disabled = true
        setTimer()
    }, 1000);
})
stopBtn.addEventListener('click',()=>{
    clearInterval(startId)
    startBtn.disabled = false
})
resetBtn.addEventListener('click',()=>{
    startBtn.disabled = false
    timeLeft = 1500;
    setTimer()
    clearInterval(startId)
})

function setTimer(){
    let minutes = Math.floor(timeLeft/60)
    let sec = timeLeft % 60
    timer.textContent = `${minutes.toString().padStart(2 , '0')}:${sec.toString().padStart(2,'0')}`
}