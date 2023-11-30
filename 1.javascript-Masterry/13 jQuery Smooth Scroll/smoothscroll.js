$("nav ul li a").click(function() {
  const thisSection = $(this).attr("href")
  const thisLink = $(this)

  $("html, body").stop().animate({
    scrollTop: $(thisSection).offset().top - 200
  }, 800, /* (1).stop serve para que, caso eu queria interromper uma animação ao clicar em outra neste meio tempo, por exemplo, eu cliquei na sessão 4 mas no meio da animação eu cliquei na sessão 2, com o .stop, a primeira animação irá parar e imediatemente continuar a seguinte. (2)scrollTop é uma propriedade do HTML que retorna ou define a posição que os elementos vão estar do topo do window. (3).offset basicamente permite com que mova um elemento particular para um lugar particular na tela, neste caso, iremos mover para o topo. Mais informações sobre isso aqui: (https://api.jquery.com/offset/) */ 'easeOutCirc', function() {
    $('nav ul li a').removeAttr('class') //ao clicar em uma outa sessão, a anterior voltar ao normal
    thisLink.addClass('selected')
  }) 
})

//--Próxima etapa: fazer que o scroll modifique as sessoões com o .selected
$(window).on('load', function() {
  const posts = $('section')
  let pageTop
  let postPos

  $(window).scroll(function() {
    postPos = $(posts[0]).offset().top
    pageTop = $(window).scrollTop()
    console.log(`${pageTop} and ${postPos}`)
  })
})