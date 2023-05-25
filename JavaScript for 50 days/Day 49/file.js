const allImages = document.querySelectorAll('.card')
allImages.forEach(img=>{
    img.addEventListener('click',(e)=>{
        allImages.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})