const mainElement = document.querySelector('main')

let filmData

async function getFilms() {
  const filmsPromise = await fetch('https://ghibliapi.vercel.app/Films')
  const films = await filmsPromise.json()
  console.log(films)

  setSort(films)
  addCards(films)
  filmData = films

  //para o sorteador de ordem ficar "desabilitado" como padrão logo depois de atualizar a página
  document.querySelector('#sortorder').removeAttribute('disabled')
}
getFilms()

/* ------NAV------- */
//sortear os filmes por base ou de titulo, data de lançamento ou score
document.getElementById('sortorder').addEventListener('change', function() {
  /* console.log(document.getElementById('sortorder').value) */

  mainElement.innerHTML = ''
  setSort(filmData)
  addCards(filmData)
})
function setSort(array) {
  const sortOrder = document.querySelector('#sortorder').value

  switch(sortOrder) {
    case 'title': array.sort((a,b) => (a.title > b.title) ? 1:-1); break
    case 'release_date': array.sort((a,b) => (a.release_date > b.release_date) ? 1:-1); break
    case 'rt_score': array.sort((a,b) => (parseInt(a.rt_score) > parseInt(b.rt_score)) ? -1:1)
  }
}
//para evitar que a pagina atualize toda vez que eu mudar o sorteamento dos filmes
function addCards(array) {
  array.forEach(eachFilm => {
    createCard(eachFilm)
  })
}
/* ---------------- */

function createCard(data) {
  const card = document.createElement('article')
  const movieTitle = document.createElement('h2')
  const movieTitleTxt = document.createTextNode(data.title)
  movieTitle.appendChild(movieTitleTxt)
  
  const director = document.createElement('p')
  const directorTxt = document.createTextNode(`Director: ${data.director}`)
  director.appendChild(directorTxt)

  const year = document.createElement('p')
  const yearTxt = document.createTextNode(`Released: ${data.release_date}`)
  year.appendChild(yearTxt)

  const description = document.createElement('p')
  const descriptionTxt = document.createTextNode(data.description)
  description.appendChild(descriptionTxt)

  const rating = document.createElement('p')
  const ratingTxt = document.createTextNode(`Rotten Tomatoes Score: ${data.rt_score}`)
  rating.appendChild(ratingTxt)

  card.appendChild(movieTitle)
  card.appendChild(director)
  card.appendChild(year)
  card.appendChild(description)
  card.appendChild(rating)

  mainElement.appendChild(card)
}