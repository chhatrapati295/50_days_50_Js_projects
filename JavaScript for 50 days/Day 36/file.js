const data = [
  {
    id : 1,
    text : 'Dolor sit amet consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae. sit amet consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae.',
    image : "https://picsum.photos/id/237/200/300" 
  },
  {
    id : 2,
    text : 'Rascala fafafa Dolor sit amet consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae. sit amet consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae.',
    image : "https://picsum.photos/id/238/200/300" 
  },
  {
    id : 3,
    text : 'Consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae. sit amet consectetur adipisicing elit. Facilis quis odit qui dolorum explicabo similique itaque, dicta quaerat, deserunt nemo minima placeat reiciendis id optio earum perferendis ex commodi recusandae.',
    image : "https://picsum.photos/id/239/200/300" 
  },

]

const tabs = document.querySelectorAll('.tab')
const content = document.querySelector('.content')
const img = document.querySelector('.img')

window.addEventListener('DOMContentLoaded',()=>{
    img.src = `${data[0].image}`
    content.textContent = `${data[0].text}`
})

tabs.forEach((tab,index)=>{
  tab.addEventListener('click',(e)=>{
    tabs.forEach(tab=>{
      tab.classList.remove('live')
    })
    e.target.classList.add('live')
    img.src = `${data[index].image}`
    content.textContent = `${data[index].text}`
  })
})