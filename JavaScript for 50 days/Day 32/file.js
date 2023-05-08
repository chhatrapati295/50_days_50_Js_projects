const allImages = document.querySelectorAll('img')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
let count = 0;

allImages.forEach((img,index)=>{
    img.style.left = `${index*100}%`
})

nextBtn.addEventListener('click',()=>{
    count++;
    if(count > allImages.length-1){
        count =0;
        setPhoto(count)
    }else{
        setPhoto(count)
    }
})
prevBtn.addEventListener('click',()=>{
    count--;
    if(count < 0){
        count = allImages.length-1;
        setPhoto(count);
    }else{
        setPhoto(count)
        }
})

function setPhoto(num){
    allImages.forEach((img)=>{
        img.style.transform = `translateX(-${num*100}%)`
    })
}