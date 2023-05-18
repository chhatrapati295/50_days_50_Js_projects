const input = document.querySelector('.input')
const form = document.querySelector('form')
const lists = document.querySelector('.lists')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value !== ''){
        const div1= document.createElement('div')
        div1.className = 'div1'
        const deleteBtn = document.createElement('button')
        deleteBtn.addEventListener('click',(e)=>{
            e.target.parentNode.remove()
        })
        deleteBtn.textContent = 'Delete'
        const li = document.createElement('li')
    li.textContent = input.value;
    div1.append(li)
    div1.append(deleteBtn)
    lists.appendChild(div1)
    input.value= ''
    }
})