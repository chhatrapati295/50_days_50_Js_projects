const allEmojis = document.querySelectorAll('.emoji')
const allStars = document.querySelectorAll('.star')

allEmojis.forEach((emo,index)=>{
    emo.style.transform = `translateX(${index*3}rem)`
})
allStars.forEach((star,idx)=>{
    star.addEventListener('click',()=>{
        updataEmoji(idx)
    })
})
function updataEmoji(idx){
    allEmojis.forEach((emo)=>{
        emo.style.transform = `translateX(-${idx*3}rem)`
    })
    allStars.forEach((star,index)=>{
        if(index < idx +1){
            star.classList.add('active')
        }else{
            star.classList.remove('active')
        }
    })
}