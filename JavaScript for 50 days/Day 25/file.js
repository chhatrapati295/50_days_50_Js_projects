const API_KEY = 'BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8';

const form = document.querySelector('form')
const nextBtn = document.querySelector('.next')
const input = document.querySelector('.input')
let pageNumber = 1

window.addEventListener('DOMContentLoaded',()=>{
    nextBtn.style.display = 'none'
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.querySelector('.earlyMsg').style.display = 'none'
    document.querySelector('.box').innerHTML = ''
    getData(input.value)
})
nextBtn.addEventListener('click',()=>{
    pageNumber++;
    getData(input.value)
})
async function getData(query){
    const url = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${pageNumber}&per_page=15&client_id=${API_KEY}`)
    const data = await url.json()
    setData(data?.results)
    console.log(data.results)
    nextBtn.style.display = 'block'
}
function setData(items){
    const cardList = document.createElement('div')
    const cardHtml = items.map(item=>{
        return `
        <div class='card' key=${item.id}>
        <img src=${item?.urls?.small_s3} alt="">
        <a href=${item.links.download}'>
        <p class="des">${item?.alt_description}</p></div>
        </a>
        `

    })
    cardList.className = 'cardList'
    cardList.innerHTML = cardHtml
    document.querySelector('.box').append(cardList)
}