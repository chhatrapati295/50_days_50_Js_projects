const API_KEY = 'bcdd22855b594b22be2720d676a8c9cd'
const URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
const nextBtn = document.querySelector('.nextBtn')
const loader = document.querySelector('.loader')


window.addEventListener('DOMContentLoaded',()=>{
    getData()
})
async function getData(){
    loader.style.display = 'block'
    const url = await fetch(URL)
    const data = await url.json()
    loader.style.display = 'none'
    console.log(data.recipes)
    setData(data?.recipes)
}
function setData(data){
    const cards = data.map(recipe=>{
        return `<div class="card">
                <a href=${recipe.sourceUrl} target='_blank'>
                <img src=${recipe.image} alt="">
                </a>
                <div class="right">
                    <h2 class="title">${recipe.title}</h2>
                    <p class="text">${recipe.instructions}</p>
                </div>
        </div>
        `
    })
    const card = document.createElement('div')
    card.innerHTML = cards
    document.querySelector('.box').append(card)
}

nextBtn.addEventListener('click',()=>{
    getData()
})