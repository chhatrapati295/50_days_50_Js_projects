const items = document.querySelector('.items')
const toggleBtn = document.querySelector('.toggle')
const head1 = document.querySelector('.head1')
const item = document.querySelectorAll('.item')


toggleBtn.addEventListener('click',(e)=>{
    items.style.display = 'flex';
    e.target.classList.add('live');
})

item.forEach(one=>{
    one.addEventListener('click',(e)=>{
        head1.textContent = e.target.textContent;
        items.style.display = 'none'
        toggleBtn.classList.remove('live')
    })
})