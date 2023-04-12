const cancelBtn = document.querySelector('.cancelBtn')
const menuBtn = document.querySelector('.menuBtn')
const navItems = document.querySelector('.nav-items')

menuBtn.addEventListener('click',()=>{
    navItems.classList.add('active')
})
cancelBtn.addEventListener('click',()=>{
    navItems.classList.remove('active')
})