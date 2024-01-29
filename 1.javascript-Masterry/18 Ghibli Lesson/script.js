const mainElement = document.querySelector('main')
/* ========= */
const navLinks = document.querySelectorAll('#mainnav ul li a')
/* ========= */

let filmData
/* ========= */
let dataSet = 'films'
let url = 'https://ghibliapi.vercel.app/films'
/* ========= */

/* MUDANÇAS AQUI */
async function getData(url) {
  const dataPromise = await fetch(url)
  const data = await dataPromise.json()
  console.log(data)

  if (dataSet === 'films') {
    mainElement.innerHTML = ''
    setSort(data)
    addCards(data)
    filmData = data
    document.querySelector('nav form').style.visibility = "visible"
    document.querySelector('#sortorder').removeAttribute('disabled')
  } else {
    mainElement.innerHTML = ''
    document.querySelector('nav form').style.visibility = "hidden"
    addCards(data)
  }
}
getData(url)

document.getElementById('sortorder').addEventListener('change', function() {
  mainElement.innerHTML = ''
  setSort(filmData)
  addCards(filmData)
})
/* ---------------------------------- */
/* MUDANÇAS AQUI */
/* =-=-==-=-=-=-=-=-=-=-=-=-==-=-=-= */
/* ADICIONANDO CLICK HANDLER */
navLinks.forEach(function(eachLink) {
  eachLink.addEventListener('click', function(event) {
    event.preventDefault()

    const thisLink = event.target.getAttribute('href').substring(1)
    //alert(thisLink)
    url = 'https://ghibliapi.vercel.app/' + thisLink
    dataSet = thisLink
    getData(url)
  })
})
/* =-=-==-=-=-=-=-=-=-=-=-=-==-=-=-= */
function setSort(array) {
  const sortOrder = document.querySelector('#sortorder').value

  switch(sortOrder) {
    case 'title': array.sort((a,b) => (a.title > b.title) ? 1:-1); break
    case 'release_date': array.sort((a,b) => (a.release_date > b.release_date) ? 1:-1); break
    case 'rt_score': array.sort((a,b) => (parseInt(a.rt_score) > parseInt(b.rt_score)) ? -1:1)
  }
}

function addCards(array) {
  array.forEach(eachFilm => {
    createCard(eachFilm)
  })
}

/* ---------------------------------- */
/* MUDANÇAS AQUI */
/* =-=-==-=-=-=-=-=-=-=-=-=-==-=-=-= */
async function createCard(data) {
  const card = document.createElement('article')
  /* //card.innerHTML = filmCardContents(data)
  card.innerHTML = await peopleCardContents(data) */
  //DOM principal:
  switch(dataSet) {
    case 'films': card.innerHTML = filmCardContents(data); break
    case 'people': card.innerHTML = await peopleCardContents(data); break
    case 'locations': card.innerHTML = await locationCardContents(data); break
    //os códios abaixo estão, por algum motivo, corrompido. melhor explicado no "indivItem(url, item)", por isso, irei deixar desativado pois evitará erros quando for clidado 
    /* case 'species': card.innerHTML = await speciesCardContents(data); break
    case 'vehicles': card.innerHTML = await vehicleCardContents(data) */
  }
  mainElement.appendChild(card)
}

function filmCardContents(data) {
  let html = `<h2>${data.title}</h2>`
  html += `<p><strong>Director:</strong> ${data.director}</p>`
  html += `<p><strong>Released:</strong> ${data.release_date}</p>`
  html += `<p>${data.description}</p>`
  html += `<p><strong>Rotten Tomatoes Score:</strong> ${data.rt_score}</p>`
  return html
}

//esta função criará os guts (a tradução varia entre: estômago, coragem, etc.) para o cartão de pessoas, sem os filmes (você os adicionará a seguir)
async function peopleCardContents(data) {
  const thefilms = data.films
  let filmtitles = []
  for (eachFilm of thefilms) {
    const filmTitle = await indivItem(eachFilm, 'title')
    filmtitles.push(filmTitle)
  }

  const species = await indivItem(data.species, 'name')
  let html = `<h2>${data.name}</h2>`
  html += `<p><strong>Details:</strong> gender ${data.gender}, age ${data.age}, eye color ${data.eye_color}, hair color ${data.hair_color}</p>`
  html += `<p><strong>Films:</strong> ${filmtitles.join(', ')}</p>`
  html += `<p><strong>Species:</strong> ${species}</p>`
  return html
}

/* LOCATIONS */
async function locationCardContents(data) {
  /* CORRIGINDO ERRO DO LOCATIONS */ 
  /* const theResidents = data.residents
  let residentNames = []
  for (eachResident of theResidents) {
    const resName = await indivItem(eachResident, 'name')
    residentNames.push(resName)
  } */
  //substitua o código no topo desta função que trata dos residentes e adicione este:
  const regex = 'https?:\/\/'
  const theResidents = data.residents
  let residentNames = []
  for (eachResident of theResidents) {
    if (eachResident.match(regex)) {
      const resName = await indivItem(eachResident, 'name')
      residentNames.push(resName)
    } else {
      residentNames[0] = 'no data available'
    }
  }

  const thefilms = data.films
  let filmtitles = []
  for (eachFilm of thefilms) {
    const filmTitle = await indivItem(eachFilm, 'title')
    filmtitles.push(filmTitle)
  }

  let html = `<h2>${data.name}</h2>`
  html += `<p><strong>Details:</strong> climate ${data.climate}, terrain ${data.terrain}, surface water ${data.surface_water}%</p>`
  html += `<p><strong>Resindets:</strong> ${residentNames.join(', ')}</p>`
  html += `<p><strong>Films:</strong> ${filmtitles.join(', ')}</p>`
  return html
}

/* SPECIES (código principal corrompido)*/
async function speciesCardContents(data) {
  const people = data.people
  let peopleNames = []
  for (eachPerson of people) {
    const personName = await indivItem(eachPerson, 'name')
    peopleNames.push(personName) 
  }

  const thefilms = data.films
  let filmtitles = []
  for (eachFilm of thefilms) {
    const filmTitle = await indivItem(eachFilm, 'title')
    filmtitles.push(filmTitle)
  }

  let html = `<h2>${data.name}</h2>`
  html += `<p><strong>Description:</strong> ${data.description}</p>`
  html += `<p><strong>Vehicle Class:</strong> ${data.vehicle_class}</p>`
  html += `<p><strong>Length:</strong> ${data.length} feet</p>`
  html += `<p><strong>Pilot:</strong> ${await indivItem(data.pilot, 'name')}</p>`
  html += `<p><strong>Film:</strong> ${await indivItem(data.films, 'title')}</p>`
  return html
}

/* VEHICLES (código principal corrompido)*/
async function vehicleCardContents(data) {
  let html = `<h2>${data.name}</h2>`
  html += `<p><strong>Classification:</strong> ${data.classification}</p>`
  html += `<p><strong>Eye Colors:</strong> ${data.eye_color}</p>`
  html += `<p><strong>Hair Colors:</strong> ${data.hair_color}</p>`
  html += `<p><strong>People:</strong> ${peopleNames.join(', ')}</p>`
  html += `<p><strong>Films:</strong> ${filmtitles.join(', ')}</p>`
  return html
}

async function indivItem(url, item) {
  //uma boa maneira de lidar com erros é usar o 'try', o 'catch' e finalmente a 'structure'. aqui a função tentará obter os dados. se falhar, e irá falhar, 20 vezes, o catch será acionado e definirá a variável theltem como 'nenhum dado disponível'
  //então finalmente executa e retorna theItem, que possui o nome de um residente (neste caso ou então 'no data available')
  /* var theltem
  try {
    const itemPromise = await fetch(url)
    const data = await itemPromise.json()
    return data[item]
  } catch(err) {
    theltem = 'no data available'
  } finally {
    return theltem
  } */
  //infelizmente, a versão acima, que é uma tentativa de corrigir erros do 'location', acaba bugando o nome dos filmes no 'filmtitles', então se for para ver os nomes dos filmes, use a versão abaixo, mesmo ela tendo problemas na pagina 'location'.
  //no "CORRIGINDO ERRO DO LOCATIONS" acima no "locationCardContents", foi corrigido totalmente esse erro do nome dos filmes, não precisando, portanto, usar a versão aqui acima do "try, catch and finally". No entanto, os arquivos dos 'species' e 'vehicles' estão, por algum motivos, corrompidos, então, caso use esse simples código abiaxo, as duas páginas restantes não vão ser interagidas, porém se usar o "try, catch and finally" vc poderá acessar, porém ainda estará corrompida e mostrará que a pagina está em erro. portanto, por agora, vou abilitar somente esse código abaixo que, por mais q não interaja com o 'species' e 'vehicles', os outros tres anteriores funcionam normalmente

  const itemPromise = await fetch(url)
  const data = await itemPromise.json()
  return data[item]
}