const allEmojis = document.querySelectorAll('img')
const submitBtn = document.querySelector('.submit')
const container = document.querySelector('.container')

let feed = ''
allEmojis.forEach(emg=>{
    emg.addEventListener('click',(e)=>{
        allEmojis.forEach(emg=>{
            emg.classList.remove('active')
        })
        e.target.classList.add('active')
        feed = e.target.nextElementSibling.innerHTML
    })
})

submitBtn.addEventListener('click',()=>{
    updateUI()
})
function updateUI(){
    container.innerHTML = ''
    const lastMsg = document.createElement('div')
    lastMsg.className = 'lastMsg'
    lastMsg.innerHTML = `
    <span className="msgText">Thankyou ! We use your feedback to improve customer support.</span>
    <h3 className="msg">Your feedback is ${feed}</h3>
    `
    container.append(lastMsg)
}