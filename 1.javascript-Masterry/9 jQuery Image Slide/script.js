//-------FUNÇÃO DE CARREGAMENTO DE JANELA
//use o método jQuery.on() e mova o código para que fique dentro da função de retorno de chamada anônima. Este método executará a função de retorno de chamada quando todas as imagens forem carregadas. Ele também atua como um fechamento, então você pode simplesmente adicionar a diretiva ‘use strict’.
$(window).on('load', function() {
  'use strict'

  const imageCount = $('#slider ul li').length
  const imageWidth = $('#slider ul li img').first().width()
  //depois adiciona mais variáveis. totalWidth é a largura total da primeira imagem vezes o número de imagens (que seria 2000px)
  const totalWidth = (imageCount * imageWidth) + 'px'
  /* alert(totalWidth) */

  //então a variável leftPosition mudará com base no slide que está sendo exibido. É 0 para o primeiro slide e -400px para o segundo slide, etc...
  let leftPosition = 0
  let counter = 0 // o counter nos ajudará a controlar em qual slide estamos

  $('#slider ul').css('width', totalWidth)
})