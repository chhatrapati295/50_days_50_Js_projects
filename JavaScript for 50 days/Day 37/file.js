const box = document.querySelector('.box')

window.addEventListener('DOMContentLoaded',()=>{
  getRecipeData()
})

async function getRecipeData(){
  const url = await fetch('https://api.spoonacular.com/recipes/random?apiKey=bcdd22855b594b22be2720d676a8c9cd&number=10')
  const data = await url.json()
  console.log(data)
  setData(data.recipes)
}
function setData(data){
  data.map(item=>{
    const card = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('span')
    const des = document.createElement('div')
    const content = document.createElement('div')
    content.className = 'content'

    card.className = 'card'
    image.src = item.image;
    image.className = 'img'
    title.textContent = item.title;
    title.className = 'title'
    des.textContent = (item?.analyzedInstructions[0]?.steps).map(st=>{
      return st.step
    }).join(', ').slice(0,500) + ' ...'

    card.append(image);
    content.append(title)
    content.append(des)
    card.append(content)
    box.append(card)

  })
}

document.querySelector('.nextBtn').addEventListener('click',()=>{
  getRecipeData()
})