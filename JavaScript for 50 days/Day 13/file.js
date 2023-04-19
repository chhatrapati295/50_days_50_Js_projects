const form = document.querySelector('form')
const results = document.querySelector('.results')
const input = document.querySelector('.input')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getData(input.value)
})

async function getData(word){
    const url = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=15&client_id=BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8`)
    const data = await url.json()
    const div = document.createElement('div')
    data.results.map(item=>{
        return `<img src='https://images.unsplash.com/photo-1681483476977-${item.id}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt=''/>`
    })
    console.log(data)
}