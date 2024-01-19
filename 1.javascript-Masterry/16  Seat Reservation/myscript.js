/* ----------------------------------------- */
/* MANEIRA "ROMOTA" E ULTRAPASSADO DE FAZER: */
/* const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"] */

/* --------THE LEFT SIDE-------- */
/* let html = ""
let counter = 1

// o método forEach() é um método array, o que significa que você o executa em um array, como "linhas" ("rows"). Então você pode passar uma função, e essa função recebe um argumento que representa cada elemento do array.
rows.forEach(function(row) {
  html += `<div class="label">${row}</div>`

  for(let i=0; i<3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`
    counter++
  }
  //isso com certeza está gerando os assentos, mas a numeração está errada. A fila "B" começa no assento 4, mas você realmente quer que comece no assento 16 
  counter = counter + 12
})
document.querySelector('#left').innerHTML = html */
/* ------THE RIGHT SIDE------- */
/* html = ""
counter = 1
rows.forEach(function(row) {
  counter = counter + 12 //o contador +12 é adicionado acima
  for(let i=0; i<3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`
    counter++
  }
  //e o label fica por ultimo 
  html += `<div class="label">${row}</div>`
})
document.querySelector('#right').innerHTML = html */
/* -------MIDDLE SECTION------- */
/* html = ""
counter = 1
rows.forEach(function(row) {
  counter = counter + 3 //o contador agora é +3
  for(let i=0; i<9; i++) {// muda do 3 pro 9 
    html += `<div id="${row + counter}">${counter}</div>`
    counter++
  }
  //repete o contador acima 
  counter = counter + 3
  //não precisamos do label aqui 
})
document.querySelector('#middle').innerHTML = html */

var reservedSeats = {
  record1: {
    seat:"b19",
    owner: {
      fname:"Joe",
      lname:"Smith"
    }
  },
  record2: {
    seat:"b20",
    owner: {
      fname:"Joe",
      lname:"Smith"
    }
  },
  record3: {
    seat:"b21",
    owner: {
      fname:"Joe",
      lname:"Smith"
    }
  },
  record4: {
    seat:"b22",
    owner: {
      fname:"Joe",
      lname:"Smith"
    }
  }
}

/* ----------------------------------------- */
/* ----MODO MAIS RESUMIDO É "MODERNO----" */
/* // Para cada coluna... */
  // Se eu estou na seção direita, esquerda ou no centro, faça a coisa certa...
  // Percorra (loop) os assentos dessa seção
  
function makeRows(sectionLength, rowLength, placement) {
  const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]
  let html = ""
  let counter = 1

  rows.forEach(row => {
    switch(placement) {
      /* fazer um rótulo (label) */
      case "left": html += `<div class="label">${row}</div>`;
      break

      /* adicionar 12 ao contador */
      case "right": counter = counter + (rowLength - sectionLength); /*pq o rowLength(comprimento da coluna) é 15, e o sectionLength(comprimento da seção) é 3. O resultado: 12*/
      break      

      /* (centro) adicionar 3 ao contador */
      default: counter = counter + ((rowLength - sectionLength)/2);
    }

    //loop aqui (adcionando uma classe)
    for(let i=0; i<sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`
      counter++
    }

    switch(placement) {
      //adicionar 12 ao contador
      case "left": counter = counter + (rowLength - sectionLength);
      break

      //fazer um rótulo (label)
      case "right": html += `<div class="label">${row}</div>`;
      break

      //(centro) adicionar 3 ao contador
      default: counter = counter + ((rowLength - sectionLength)/2);
    }
  })
  document.getElementById(placement).innerHTML = html
}

/* EXECUTANDO A FUNÇÃO PARA CADA SEÇÃO */

/* execute esta função três vezes - com parâmetros definidos para cada seção - e você terá todos os 300 assentos exibidos em sua página. */
makeRows(3, 15, 'left')
makeRows(3, 15, 'right')
makeRows(9, 15, 'middle')

/* =--=================--= */
(function(){
  'use strict'
  for (const key in reservedSeats) {
  if (reservedSeats.hasOwnProperty(key)) {
    const obj = reservedSeats[key]
    console.log(obj.seat) 

    document.getElementById(obj.seat).className = 'r'
    document.getElementById(obj.seat).innerHTML = 'R'
  } 
}
}())

/* ------------------ */
(function(){
  'use strict'
  let selectSeats = []
  let seats = document.querySelectorAll('.a')

  seats.forEach(function(seat) {
    seat.addEventListener('click', function(event) {
      //
    })
  })
}())