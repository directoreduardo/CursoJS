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

  //------------------------
  //ADICIONAR MANUPULADOR DE CLIQUES (CLICK HANDLER) PARA "PRÓXIMO" BOTÃO ("NEXT" BUTTON)
  //adicionar click hanlder para "próximo link" e, dentro, adicione o counter
  $('#next').click(function() {
    counter++

    //--MANIPULADOR DE PRÓXIMO CLIQUE COM INSTRUÇÃO 'IF'
    //Para que, ao clicar nas 6 fotos, retorne para a foto 1
    if (counter === imageCount) {
      counter = 0
    }

    //em seguida, defina o leftPosition para um número negativo e termine com "px"
    leftPosition = `-${counter * imageWidth}px` //- quando o link é clicado pela primeira vez, o leftPosition se tornará -400px, que deslizará (slides) toda a faixa de imagens para a esquerda 400px, colocando a segunda imagem na janela

    //ANIMAR O SLIDE TRIP
    $('#slider ul').animate({left: leftPosition}, 700) //obs: no código original, no final (de 700, ...) terminária com (... 'easeInQuat'), porém como deu erro no meu código, eu apaguei e deixei como está, agora funcionou
  })

  //------------------------
  //ADICIONAR MANUPULADOR DE CLIQUES (CLICK HANDLER) PARA O BOTÃO "ANTERIOR" ("PREVIOUS" BUTTON)
  //praticamente igual ao #next acima, só que com umas pequenas mudanças a mais
  $("#previous").click(function() {
    counter--

    //se eu voltar (previous button) a primeira imagem (foto 1), ela imediatamente desliza (slider) para a ultima (foto 5)
    if (counter < 0) {
      counter = imageCount-1
    }

    leftPosition = `-${counter * imageWidth}px`

    $("#slider ul").animate({left: leftPosition}, 700)
  })
})