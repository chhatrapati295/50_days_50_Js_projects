
const form = document.querySelector("form");
const box = document.querySelector(".box");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  box.innerHTML = '';
  getData(input.value);
});

async function getData(name) {
  const url = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=cb4bcd23588985c02fedbd26178bc5d8&query=${name}`
  );
  const data = await url.json();
  const list = data.results.map((item) => {
    return `<div class="card">
        <img src='https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}' alt="" class="image">
        <span class="title">${item.original_title}</span>
        <span class="des">${item.overview.slice(0,50)}</span>
        <span class="rating">${item.popularity}</span>
    </div>`;
  });
  const card = document.createElement('div')
  card.className = 'list'
  card.innerHTML = list
  console.log(card)
  box.append(card)
}