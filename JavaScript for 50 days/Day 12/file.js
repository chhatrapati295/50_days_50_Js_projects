const API_KEY = '53015ecfbd59c9ebf385bd744acd3563';
const form = document.querySelector('form')
const box = document.querySelector('.box')
const input = document.querySelector('.input') 
const img = document.querySelector('img') 
const temp = document.querySelector('.temp') 
const feels = document.querySelector('.feels') 
const hum = document.querySelector('.hum') 
const wind = document.querySelector('.wind') 
const overview = document.querySelector('.overview') 
const load = document.querySelector('.load') 
const load2 = document.querySelector('.load2') 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getData(input.value)
})
async function getData (city){
    try{
        load.style.display = 'block';
        load2.style.display = 'none';
        const URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric `)
    const data = await URL.json()
    load.style.display = 'none';
    console.log(data)
    box.style.display = 'flex'
    img.src = `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
    temp.textContent = data?.main?.temp + ' ℃'
    feels.textContent = data?.main?.feels_like + ' ℃'
    hum.textContent = data?.main?.humidity
    overview.textContent = data?.weather[0]?.description
    wind.textContent = data?.wind?.speed + 'kmph'
    }
    catch(error){
        box.style.display = 'none'
        load2.style.display = 'block'
        load2.textContent = 'City not found !'
    }

}