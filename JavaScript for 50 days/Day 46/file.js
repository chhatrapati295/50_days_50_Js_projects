const API_KEY = 'BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8'

const form = document.querySelector('form')
const box = document.querySelector('.box')
const input = document.querySelector('.input')
const nextBtn = document.querySelector('.next')
const loader = document.querySelector('.loader')

let page=1

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    box.innerHTML = ''
    getPhotoData(input.value)
})

const getPhotoData = async (query)=>{
    loader.style.display = 'block'
    const url = await fetch(`https://api.unsplash.com/search/photos?orientation=landscape&page=${page}&query=${query}&client_id=${API_KEY}`)
    const json = await url.json()
    loader.style.display = 'none'
    console.log(json?.results)
    const data = json?.results
    data.map(item=>{
        const img = document.createElement('img')
        img.src = item?.urls?.small
        const link = document.createElement('a')
        link.href = item?.links?.download
        link.append(img)
        box.append(link)
    })
    nextBtn.style.display = 'block'
}

nextBtn.addEventListener('click',()=>{
    page++;
    getPhotoData(input.value)
})
