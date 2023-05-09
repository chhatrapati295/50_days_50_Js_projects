const API_KEY = '9a1059763c80417498462013230802';
const API_URL = ` http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`


const form = document.querySelector('form')
const input = document.querySelector('.input')
const temp = document.querySelector('.temp')
const overview = document.querySelector('.overView')
const imageIcon = document.querySelector('.icon')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const press = document.querySelector('.pressure')
const visi = document.querySelector('.visibility')
const humi = document.querySelector('.humidity')
const time = document.querySelector('.time')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(input.value)
    input.value = ''
})
window.addEventListener('DOMContentLoaded',()=>{
    getData('Jaipur')
})

async function getData (city){
    const url = await fetch(API_URL + city)
    const data = await url.json()
    setData(data)
    console.log(data)
}
function setData(info){
    temp.textContent = `${info.current.temp_c} ℃`;
    overview.textContent  = `${info.current.condition.text}`;
    imageIcon.src = `${info.current.condition.icon}`;
    city.textContent = `${info.location.name}`;
    country.textContent = `${info.location.country}`;
    press.textContent = `${info.current.pressure_mb} mb`
    humi.textContent = `${info.current.humidity} %`;
    visi.textContent = `${info.current.vis_km} km`;
    time.textContent = getTime(`${info.location.localtime_epoch}`);
}

function getTime (duration){
    var hrs = ~~((duration / 3600)%24);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    let ret = hrs+ ":" + mins + ":" + secs + ' PM';
    return ret;
}