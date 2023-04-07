const heading = document.querySelector('.heading')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')


let hr=0; let min=0; let sec=0;
startBtn.addEventListener('click',()=>{
        id1 = setInterval(() => {
            startBtn.disabled = true;
            if(sec > 59){
                min++;
                sec=0
            }else if(min >= 59){
                hr++;
                min=0
            }else{
                sec++;
            }
            heading.textContent = `${hr.toString().padStart(2,'0')} : ${min.toString().padStart(2,'0')} : ${sec.toString().padStart(2,'0')}`
        }, 1000);
    })
    stopBtn.addEventListener('click',()=>{
        startBtn.disabled =false;
        clearInterval(id1)
    })