let detailsForm = document.querySelector('.destination_details_form')

detailsForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault()

  // 1. extrair o valor de cada campo do formulário 
  let destName = event.target.elements['name'].value
  let destLocation = event.target.alements['location'].value
  let destPhoto = event.target.elements['photo'].value
  let destDesc = event.target.elements['description'].value

  // 2. limpar o campo do formulário
  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.element[i].value = ''
  }

  // 3. executar uma função que cria um novo card
  let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc)

  // 4. se precisar, mudar o header no topo da lista de destinos
  let wishListContainer = document.querySelector('.destinations_container')
  //*se o container está vazio
  if (wishListContainer.children.length === 0) {
    document.querySelector('.title').innerHTML = 'My Wish List'
  }

  // 5. adicionar o card
  document.querySelector('.destinations_container'). appendChild(destCard)
}

// O conteudo gerado pelo JS descrito no HTML
function createDestinationCard(name, location, photoURL, description) {
  let card = document.createElement('div')
  card.className = 'card'

  let img = document.createElement('img')
  img.setAttribute('alt', name)

  let constantPhotoUtl = "photo.webp"
  if (photoURL.length === 0) {
    img.setAttribute('src', constantPhotoUtl)
  } else {
    img.setAttribute('src', photoURL)
  }
  card.appendChild(img)

  let cardBody = document.createElement('div')
  cardBody.className = 'card-body'

  let cardTitle = document.createElement('h3')
  cardTitle.innerText = name
  cardBody.appendChild(cardTitle)

  let cardSubtitle = document.createElement('h4')
  cardSubtitle.innerText = location
  cardBody.appendChild(cardSubtitle)

  if (description.length !== 0) {
    let cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.innerText = description
    cardBody.appendChild(cardText)
  }

  let cardDeleteBtn = document.createElement('button')
  cardDeleteBtn.innerText = 'Remove'
  cardDeleteBtn.addEventListener('click', removeDestination)
  cardBody.appendChild(cardDeleteBtn)

  card.appendChild(cardBody)

  return card
}

function removeDestination(event) {
  let card = event.target.parentElement.parentElement
  card.remove()
}