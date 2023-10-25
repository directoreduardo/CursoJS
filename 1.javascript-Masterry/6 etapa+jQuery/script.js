'use strict'
//ESCONDENDO OS MENUS
//*primeiro tipo:
/* $('ul li ul').css('display', 'none') */

//*segundo tipo (mais simplificado):
$('ul li ul').hide()

//INTERAGINDO/MOSTRANDO OS MENUS
$('.menulink').click(function() {
  let thisMenu = $(this).next('ul') //$(this) pega o link, e então o jQuery tem uma função auxiliar chamada next() que irá pegar o proximo elemento, neste caso, a lista não ordenada <ul>

  //CASO VC QUEIRA Q, QUANDO INTERAGIR COM UM DOS LINKS, FECHAR O OUTRO QUE ESTIVER ABERTO:
  $('ul li ul').not(thisMenu).hide()

  //*primeiro tipo:
    /* if (thisMenu.is(':visible')) { // o metodo .is() retornará verdadeiro ou falso dependendo do que for passado. Voce pode passar o filtro :visible para ver se o menu atualmente está amostra ou não *

    thisMenu.hide()
  } else {
    thisMenu.show()
  }  */

  //*segundo tipo (mais facil):
  thisMenu.toggle()
})