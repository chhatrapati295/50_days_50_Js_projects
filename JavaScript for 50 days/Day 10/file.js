const mealBtn = document.querySelector('#get_meal')
const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const container = document.querySelector('.container')
const img = document.querySelector('.container img')
const cat = document.querySelector('.category')
const area = document.querySelector('.area')
const tags = document.querySelector('.tags')
const ingItem = document.querySelector('.ingItem')
const ingItems = document.querySelector('.ingItems')
const mealName = document.querySelector('.mealName')
const desc = document.querySelector('.des')

mealBtn.addEventListener('click',async ()=>{
    const url = await fetch(API_URL)
    const data = await url.json()
    console.log(data)
    setData(data?.meals[0])
})

function setData(data){
    img.src = `${data.strMealThumb}`
    mealName.textContent = `${data.strMeal}`
    desc.textContent = `${data.strInstructions}`
    desc.textContent = `${data.strInstructions}`
    cat.textContent = `${data.strCategory}`
    area.textContent = `${data.strArea}`
    tags.textContent = `${data.strTags}`
}