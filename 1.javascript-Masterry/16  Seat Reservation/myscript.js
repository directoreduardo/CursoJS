


// Para cada coluna...

  // Se eu estou na seção direita, esquerda ou no centro, faça a coisa certa...
  // Percorra (loop) os assentos dessa seção
  
function makeRows(sectionLength, rowLength, placement) {
  const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]
  let html = ""
  let counter = 1

  rows.forEach(function(row) {
    switch(placement) {
      /* fazer um rótulo (label) */
      case "left": html += `<div class="label">${row}</div>`
      break

      /* adicionar 12 ao contador */
      case "right": counter = counter + (rowLength - sectionLength) /*pq o rowLength(comprimento da coluna) é 15, e o sectionLength(comprimento da seção) é 3. O resultado: 12*/
      break      

      /* (centro) adicionar 3 ao contador */
      default: counter = counter + ((rowLength - sectionLength)/2)
      break
    }

    //loop aqui (adcionando uma classe)
    for(let i=0; i<sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`
      counter++
    }

    switch(placement) {
      //adicionar 12 ao contador
      case "left": counter = counter + (rowLength - sectionLength)
      break

      //fazer um rótulo (label)
      case "right": html += `<div class="label">${row}</div>`
      break

      //(centro) adicionar 3 ao contador
      default: counter = counter + ((rowLength - sectionLength)/2)
      break
    }
  })
  document.getElementById(placement).innerHTML = html
}

/* EXECUTANDO A FUNÇÃO PARA CADA SEÇÃO */

/* execute esta função três vezes - com parâmetros definidos para cada seção - e você terá todos os 300 assentos exibidos em sua página. */
makeRows(3, 15, 'left')
makeRows(3, 15, 'right')
makeRows(3, 15, 'middle')