const api_key = "6e3d82109189d13bfbc8dc8576dc8431";
const form = document.querySelector('form')
const input = document.querySelector('.input')
const box = document.querySelector('.box')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const feels = document.querySelector('.feels')
const overview = document.querySelector('.overview')
const img = document.querySelector('img')

window.addEventListener('DOMContentLoaded',()=>{
    init()
})
function init(){
    console.log('hello')
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(input.value)
})
async function getData(city){
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    const data = await url.json()
    console.log(data)
    if(data.cod === '404'){
        document.querySelector('.box').style.display = 'none'
        document.querySelector('.error').textContent = 'City not found'
    }else{
        document.querySelector('.error').textContent = ''
        document.querySelector('.box').style.display = 'flex'
        setData(data)
    }
    input.value = ''
}
function setData(data){
    city.textContent = data?.name
    temp.textContent = 'Temperature : ' + data?.main?.temp + ' ℃'
    feels.textContent = 'Feels like : ' + data?.main?.feels_like + ' ℃'
    overview.textContent ='Overview : ' + data?.weather[0]?.description
    img.src = `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png` 
}