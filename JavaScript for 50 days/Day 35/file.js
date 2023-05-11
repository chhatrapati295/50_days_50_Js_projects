
const container = document.querySelector('.container')

window.addEventListener('DOMContentLoaded',()=>{
  getGenres()
})

async function getGenres(){
  const url = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=cb4bcd23588985c02fedbd26178bc5d8`)
  const data = await url.json()
  console.log(data?.genres)
  const genres = data?.genres.map(genre=>{
    return genre.name
  })
  console.log(genres)
}