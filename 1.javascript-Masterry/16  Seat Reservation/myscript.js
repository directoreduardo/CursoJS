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

'use strict'
for (const key in reservedSeats) {
if (reservedSeats.hasOwnProperty(key)) {
    const obj = reservedSeats[key]
    /* console.log(obj.seat) */ 

    document.getElementById(obj.seat).className = 'r'
    document.getElementById(obj.seat).innerHTML = 'R'
  } 
}


/* ------------------ */
(function(){
  'use strict'
  let selectSeats = []
  const seats = document.querySelectorAll('.a')

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      console.log(seat.id) 
      // pegar o id do seat, executar uma função (seatSelectionProcess) que adiciona ou remove o seat do array
      seatSelectionProcess(seat.id)
    })
  })

  function seatSelectionProcess(thisSeat) {
    /* 
    Uma última questão (reparos)...

    Depois de reservar alguns assentos (seats), você ainda consegue selecioná-los novamente, mesmo eles tendo ficado vermelhos e tenham o 'R' dentro deles.

    isso ocorre porque quando a página foi carregada, esses elementos tiveram o eventListener adicionado a eles, e mesmo que a classe e o html desses dois elementos tenham mudado, o eventListener ainda está lá
    */
    //isso adicionará apenas itens ao array que NÃO possuem a classe "r" (note o !)
    if(!document.getElementById(thisSeat).classList.contains('r')) {
      //adicionar ou remover seats do array
      let index = selectSeats.indexOf(thisSeat)
      console.log(index)

      if (index > -1) {
        //deve estar no array. retire-o e coloque a classe de volta em 'a'
        selectSeats.splice(index, 1)
        document.getElementById(thisSeat).className = 'a'
      }else {
        //adicione ao array (usando o push()). coloque a classe do seat em 's'
        selectSeats.push(thisSeat)
        document.getElementById(thisSeat).className = 's'
      }
      //executando a função (mais abaixo está o código aqui executado)
      manageConfirmForm()
      console.log(selectSeats)
    }  
  }

  /* -------------------------------------- */
  /* abrir e fechar manipuladores de eventos de formulário */

  //EventListener para o botão de reserva abrir o formulário
  document.querySelector('#reserve').addEventListener('click', function(event) {
    event.preventDefault() //previne que apareça '#' no link da pagina ao interagir com o botão 'reserve'
    document.querySelector('#resform').style.display="block"
  })
  //EventListener para fechar o formulário se alguém clicar em cancelar
  document.querySelector('#cancel').addEventListener('click', function(event) {
    event.preventDefault()
    document.querySelector('#resform').style.display="none"
  })

  /* --------------------------------------- */
  /* se nenhum seat (assento) for selecionado, os usuários não poderão preencher o formulário e clicar no botão de reserva. */

  //crie uma função chamada manageConfirmForm() e tenha uma instrução if/else que verifica se há algo no array selectedSeats.
  function manageConfirmForm() {
    //se houver, defina o elemento com id="confirmres" para display 'block', se não houver defina-o para display 'none'
    if(selectSeats.length > 0) {
      document.querySelector('#confirmres').style.display="block"
      //para n haver contradição visual e deixar mais completo e didatico as seats escolhidas. seat no singular e no plural (seats):
      if(selectSeats.length === 1) {
        document.querySelector('#selectedseats').innerHTML = `You have selected seat: ${selectSeats[0]}`
      } else {
        let seatString = selectSeats.toString()
        //para que haja espaço nas string seats e um "and" no final da ultima seat
        seatString = seatString.replace(/,/g, ", ")
        seatString = seatString.replace(/,(?=[^,]*$)/, ' and')
        document.querySelector('#selectedseats').innerHTML = `You have selected some seats: ${seatString}`
      }
    } else {
      document.querySelector('#confirmres').style.display="none"
      //proxima etapa/desafio:
      /* 
      Ao invés de mostrar o formulário, o parágrafo com id definido como "selectedseats" precisa ter este HTML:
      'You need to select some seats to reserve. <br><a href="#" id="error">Close</a> this dialogo box and pick at least one seat.'
      */
      document.querySelector('#selectedseats').innerHTML = 'You need to select some seats to reserve. <br><a href="#" id="error">Close</a> this dialogo box and pick at least one seat.'
      //agora precisamos adicionar um 'manipulador de cliques' na função para que, ao clicar em #error, feche a caixa de dialogo de novo
      document.querySelector('#error').addEventListener('click', function() {
        document.querySelector('#resform').style.display="none"
      })
    }
  }
  /* ------------------------------------ */
  /* EXECUTANDO A FUNÇÃO */
  //toda vez que você adiciona ou remove um assento dentro e fora do array, esta função deve ser executada
  //então isso significa que ele precisa entrar na função seatSelectionProcess()
  //onde mais ele precisa ser executado?
  /* execute-o imediatamente, quando a página carregar! */
  manageConfirmForm()
  /* ------------------------------------ */

  /* CONFIGURANDO AS ETAPAS FINAIS */
  //quando este formulário é enviado, uma função chamada processReservation() é executada
  document.querySelector("#confirmres").addEventListener('submit', function(event) {
    event.preventDefault()
    processReservation()
  })
  function processReservation() {
    //para começar, nesta função, você precisa saber quantos registros já estão no objeto reservadoSeats (ou foram reservados e estão no banco de dados)
    const hardCodeRecords = Object.keys(reservedSeats).length
    //então você precisa obter o nome e o sobrenome da pessoa que os reservou, no formulário
    const fname = document.querySelector('#fname').value
    const lname = document.querySelector('#lname').value
    let counter = 1
    let nextRecord = ''

    selectSeats.forEach(function(thisSeat) {
      //defina o nome da classe como "r"
      document.getElementById(thisSeat).className = 'r'
      //defina o innerHTML desse seat <div> como "R"
      document.getElementById(thisSeat).innerHTML = 'R'

      //adicione cada registro ao objeto reservadoSeats
      //nextRecord deve ter record5 pela primeira vez no array. Este é o número do hardCodeRecords mais 1 (counter)
      nextRecord = `record${hardCodeRecords + counter}`
      reservedSeats[nextRecord] = {
        seat:thisSeat,
        owner:{
          fname:fname,
          lname:lname
        }
      }
      counter++
    })
    /* ------------ */
    /* LIMPEZA...

    Depois de passar pelo array selectSeats e adicionar os registros ao objeto reservedSeats, você precisa fechar o formulário, esvaziar o array selectSeats e executar a função manageConfirmForm novamente para redefinir seu estado original. */
    document.querySelector('#resform').style.display="none"
    selectSeats = []
    manageConfirmForm()

    //voce pode ver o resultado no console
    console.log(reservedSeats)
  }
}())