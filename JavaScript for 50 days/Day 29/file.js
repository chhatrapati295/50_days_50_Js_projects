
const form = document.querySelector('form')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const box = document.querySelector('.box')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(input.value)
})
async function getData(num){
    const url = await fetch(`https://api.unsplash.com/photos/random?count=${num}&client_id=BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8`)
    const data = await url.json()
    console.log(data)
    box.innerHTML = ''
    setData(data)
}
function setData(items){
    const div = document.createElement('div')
    div.className = 'items'
    div.innerHTML = items.map(item=>{
        return `<img src=${item?.urls?.small} alt="" class='img' />`
    })
    box.append(div)

}