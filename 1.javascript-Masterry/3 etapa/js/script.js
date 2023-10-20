document.querySelector('.convert').addEventListener('submit', (event) => {
  event.preventDefault() //previne q a pagina não atualize ao clicar no form

  let distance = parseFloat(document.querySelector('.distance').value)
  
  let answer = document.querySelector('.answer')
  if (distance) {
    let conversion = (distance * 1.609344).toFixed(3)
    
    
    answer.innerHTML = `<h2 class="answer-outro">${distance} miles converts to ${conversion} kilometers</h2>`
  } else {
    answer.innerHTML = '<h2>Please privde a number!</h2>'
  }
})

//---------ADVANCED DISTANCE CONVERTER-----------
//*Converter milhas em kilometros ao apertar a tecla (K, por exemplo) e (M) para converter kilometros em milhas 
let convertType = 'miles'
const heading = document.querySelector('h1')
const intro = document.querySelector('p')
const answer = document.querySelector('.answer')
const form = document.querySelector('.convert')

document.addEventListener('keydown', (event) => {
  let key = event.code
  if (key === 'KeyK') {
    // mudar o valor da variável 'convertType'
    convertType = 'kilometers'
    // mudar o 'heading'
    heading.innerHTML = "Kilometers to Miles Converter"
    // mudar o paragrafo 'intro'
    intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
    
  } else if (key === 'KeyM') {
    convertType = 'miles'
    heading.innerHTML = "Miles to Kilometers Converter"
    intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const distance = parseFloat(document.querySelector('.distance').value)

  if (distance) {
    // converter M em K 1.609344
    // converter K em M 0.621371192
    if (convertType == "miles") {
      const converted = (distance * 1.609344).toFixed(3)
      answer.innerHTML = `<h2 class="answer-outro">${distance} miles converts to ${converted} kilometers</h2>`
    } else {
      const converted = (distance * 0.621371192).toFixed(3)
      answer.innerHTML = `<h2 class="answer-outro">${distance} kilometers converts to ${converted} miles</h2>`
    }
  }else {
    answer.innerHTML = '<h2>Please provide a number!</h2>'
  }
})