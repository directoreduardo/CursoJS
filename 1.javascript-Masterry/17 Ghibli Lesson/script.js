const mainElement = document.querySelector('main')

async function getFilms() {
  const filmsPromise = await fetch('https://ghibliapi.vercel.app/Films')
  const films = await filmsPromise.json()
  console.log(films)
}
getFilms()