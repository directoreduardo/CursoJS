$("nav ul li a").click(function() {
  const thisSection = $(this).attr("href")
  const thisLink = $(this)

  $("html, body").stop().animate({
    scrollTop: $(thisSection).offset().top - 200
  }, 800, /* (1).stop serve para que, caso eu queria interromper uma animação ao clicar em outra neste meio tempo, por exemplo, eu cliquei na sessão 4 mas no meio da animação eu cliquei na sessão 2, com o .stop, a primeira animação irá parar e imediatemente continuar a seguinte. (2)scrollTop é uma propriedade do HTML que retorna ou define a posição que os elementos vão estar do topo do window. (3).offset basicamente permite com que mova um elemento particular para um lugar particular na tela, neste caso, iremos mover para o topo. Mais informações sobre isso aqui: (https://api.jquery.com/offset/) */ 'easeOutCirc'
  
  /* , function() {
    $('nav ul li a').removeAttr('class') //ao clicar em uma outa sessão, a anterior voltar ao normal
    thisLink.addClass('selected')
  } */) 
  return false
})

//--Próxima etapa: fazer que o scroll modifique as sessoões com o .selected
$(window).on('load', function() {
  const allLinks = $("nav ul li a")
  const posts = $('section')
  let pageTop
  let postPos
  let counter = 0
  let prevCounter = 0
  let doneResize

  
  let postTops = []
  posts.each(function() {
    postTops.push(Math.floor($(this).offset().top))
  })
  console.log(postTops) //resumindo, a sessão 1 é 207, a sessão 2 é 974, a sessão 3 é 2358, a sessão 4 é 2953, a sessão 5 é 3409

  resetPagePosition()

   $(window).scroll(function() {
    /* postPos = $(posts[0]).offset().top
    pageTop = $(window).scrollTop()
    console.log(`${pageTop} and ${postPos}`)  */

    pageTop = $(window).scrollTop() + 210
    if(pageTop > postTops[counter+1]) /*scrollar pra baixo até a próxima sessão*/{
      //incrementar o contador (counter)
      counter++
      console.log(`scrolling down ${counter}`)
    } else if(counter > 0 && pageTop < postTops[counter]) /*scrollar pra cima até a sessão anterior*/{
      //decrementar o contador (counter)
      counter--
      console.log(`scrolling up ${counter}`)
    }

    //--ADICIONANDO DESTAQUE NOS LINKS DAS SESSÕES ENQUANTO SCROLLA-------
    if(counter != prevCounter) {
      $(allLinks).removeAttr('class') // se o counter não é igual ao prevCounter, então pegaremos todos os links (allLinks) e removermos o atributo classe
      $("nav ul li a").eq(counter).addClass('selected') // então pegaremos os links, tags iguais (eq) ao counter (primeira sessão a tag será 0, a segunda 1, etc.) e adicionaremos a classe 'selected'
      prevCounter = counter
    }
  })

  //MELHORIAS NO SITE - POR EXEMPLO A QUESTÃO DO REDIMENSIONAMENTO------
  $(window).on('resize', function() {
    clearTimeout(doneResize)
    doneResize = setTimeout(function() {
      resetPagePosition()
    }, 500) 
  })
  function resetPagePosition() {
    postTops = []
    posts.each(function() {
      postTops.push(Math.floor($(this).offset().top)) 
    })
    console.log(postTops)// a cada redimensionamento o postTops mudará, deste modo, os destaques nos links das sessões (pela classe 'selected') não serão alteradas ao diminuir ou aumentar a responsividade da pagina - não bugará!

    console.log('done resizing!') //basicamente, assim que eu parar de redimencionar a tela (responsividade), irá logar como 'done resizing!'

    //tentando corrigir o que seria o habitual ao redimensionar a página ao scrollar em uma sessão:
    const pagePosition = $(window).scrollTop()+210
    counter = 0
    for(let i=0; i<postTops.length; i++) {
      if(pagePosition>postTops[i]) {
        counter++
      }
    }
    counter--
    $(allLinks).removeAttr('class')
    $("nav ul li a").eq(counter).addClass('selected')
  }
})