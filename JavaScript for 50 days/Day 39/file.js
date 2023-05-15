const box = document.querySelector('.box')
const btn = document.querySelector('.btn')
const loader = document.querySelector('.img')

const options = {
    method : 'GET',
    headers : {
        'X-RapidAPI-Host' : 'dad-jokes.p.rapidapi.com',
        'X-RapidAPI-Key' : 'bee73c12d0mshaddd0adc937ada6p1ce49fjsn0ec437517c43',
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    getJokeData()
})
async function getJokeData (){
    loader.style.display = 'block'
    const url = await fetch('https://dad-jokes.p.rapidapi.com/random/joke',options);
    const data = await url.json()
    loader.style.display = 'none'
    setData(data?.body[0])
    console.log(data)
}

function setData(joke){
    box.innerHTML = ''
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <span class="setup">${joke.setup}</span>
    <span class="punch">${joke.punchline}</span>
    `
    box.append(card)
}
btn.addEventListener('click',()=>{
    box.innerHTML = ''
    getJokeData()
})