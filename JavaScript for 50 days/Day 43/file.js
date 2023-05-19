const form = document.querySelector('form')
const input = document.querySelector('.input')
const lists = document.querySelector('.lists')


let list = JSON.parse(localStorage.getItem('list'))
if(list){
    list.forEach(liItem=>{
        todoList(liItem)
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    todoList()
})

function todoList(task){
    let newTask = input.value
    if(task){
        newTask = task.name
    }
    const liEl = document.createElement('li')
    liEl.innerText = newTask
    lists.append(liEl)
    input.value = ''
    const trashBtn = document.createElement('div')
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`
    liEl.append(trashBtn)
    trashBtn.addEventListener('click',()=>{
        liEl.remove()
        updateLocalStorage()
    })
    updateLocalStorage()
}

function updateLocalStorage(){
    const allLiEl = document.querySelectorAll('li')
    list = [];
    allLiEl.forEach(oneLi=>{
        list.push({
            name : oneLi.innerText
        })
    })
    localStorage.setItem('list',JSON.stringify(list))
}