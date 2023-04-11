// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bee73c12d0mshaddd0adc937ada6p1ce49fjsn0ec437517c43',
// 		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
const input = document.querySelector('.input')
const form = document.querySelector('form')
const word1 = document.querySelector('.word')
const defi1 = document.querySelector('.defi')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(input.value)
})

const options = {
    method : 'GET',
    headers : {
        'X-RapidAPI-Key' : 'bee73c12d0mshaddd0adc937ada6p1ce49fjsn0ec437517c43',
        'X-RapidAPI-Host' : 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
}

const getData = async (word)=>{
    const url = await fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`,options)
    const data = await url.json()
    console.log(data)
    console.log(typeof data.definition)
    word1.textContent = data.word
    defi1.textContent = data.definition.slice(0,100)
}