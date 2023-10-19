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