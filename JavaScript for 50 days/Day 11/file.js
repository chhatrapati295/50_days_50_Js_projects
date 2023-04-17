const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    if(btn.textContent == 'Follow'){
        btn.textContent = 'Following'
        btn.classList.add('active')
    }else{
        btn.textContent = 'Follow'
        btn.classList.remove('active')
    }
})