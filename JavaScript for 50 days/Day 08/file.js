const content = [
    {
        id:1,
        mainName : 'Susan Smith',
        mainDesignation : 'Actor',
        mainReview : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        mainSrc : 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg'
    },
    {
        id:2,
        mainName : 'Anna Johnson',
        mainDesignation : 'Doctor',
        mainReview : 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        mainSrc : 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg'
    },
    {
        id:3,
        mainName : 'Bill Anderson',
        mainDesignation : 'Comedian',
        mainReview : 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        mainSrc : 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg'
    },
    
]

const img = document.querySelector('img')
const title = document.querySelector('.title')
const job = document.querySelector('.job')
const review = document.querySelector('.review')
const leftBtn = document.querySelector('.btnLeft')
const rightBtn = document.querySelector('.btnRight')
let count=0

window.addEventListener('DOMContentLoaded',()=>{
    init(0)
})
function init(index){
    img.src = `${content[index].mainSrc}`
    title.textContent = `${content[index].mainName}`
    job.textContent = `${content[index].mainDesignation}`
    review.textContent = `${content[index].mainReview}`
}

leftBtn.addEventListener('click',()=>{
        if(count > 0){
            count--;
            init(count)
        }else{
            count = content.length-1;
            init(count)
        }
})
rightBtn.addEventListener('click',()=>{
        if(count < content.length-1){
            count++;
            init(count)
        }else{
            count = 0;
            init(count)
        }
})