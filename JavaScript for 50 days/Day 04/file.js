const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const para = document.querySelector('.para')

function getWords(){
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let word = ''
    for(let i=0;i<(Math.floor(Math.random()*10) + 5);i++){
        let random = Math.floor(Math.random()*(letter.length-1))
        word += letter[random]
    }
    return (word)
}
function getPara(){
    let paragraph = ''
    for(let i=0;i< input.value;i++){
        paragraph += getWords();
        paragraph += ' '
    }
    para.textContent = paragraph
    document.querySelector('.copyBtn').style.display = 'block';
    document.querySelector('.copyBtn').addEventListener('click',(e)=>{
        navigator.clipboard.writeText(e.target.previousElementSibling.textContent)
    })
}
btn.addEventListener('click',getPara)