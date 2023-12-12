//PRIMEIRA PARTE: TRANSICIONAR DE MANEIRA SMOTTH AO CLICAR NAS SESSÕES
const navLinks = document.querySelectorAll('nav ul li a')
navLinks.forEach(function(eachLink) {
  eachLink.addEventListener('click', smoothScroll)
})
function smoothScroll(event) {
  event.preventDefault()

  const targetID = event.target.getAttribute('href')
  const targetSection = document.querySelector(targetID)
  const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 200
  window.scrollBy({top: originalTop, left: 0, behavior:'smooth'})
  console.log(originalTop)
}

//SEGUNDA PARTE: DESTACAR AS SESSÕES AO SCROLLAR A PAGINA
window.addEventListener('load', function() {
  const posts = document.querySelectorAll('section')
  let postTops = []
  let pagetop
  let counter = 1
  let prevCounter = 1 // no jQuery usamos 0 porque usa o método 'eq()' que só funciona com 0
  let doneResize

  //Adicionar window.pageYOffce ao valor nos dará um valor consistente. pageYOffset é a quantidade de piexels que o window scrollou pela viewport (janela de vizualização) e, portanto, nos dará um numero consistente a cada vez.
  //Teste no navegador, você verá que não importa para onde a página seja rolada, você receberá 200 pela primeira postagem
  //Em segunda, arredonde a distância e coloque todos eles no array postTops
  posts.forEach(function(post) {
    postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset))
  })
  console.log(postTops) //resumindo, a sessão 1 é 208, a sessão 2 é 974, a sessão 3 é 2358, a sessão 4 é 2953, a sessão 5 é 3409

  window.addEventListener('scroll', function() {
    pagetop = window.pageYOffset + 250
    /* console.log(pagetop) */

    if(pagetop > postTops[counter]) {
      counter++
      console.log(`scrolling down ${counter}`)
    } else if(counter > 1 && pagetop < postTops[counter-1]) {
      counter--
      console.log(`scrolling up ${counter}`)
    }

    if(counter != prevCounter) {
      navLinks.forEach(function(eachLink) {
        eachLink.removeAttribute('class')
      })
      const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`)
      thisLink.className = 'selected'
      prevCounter = counter
    }
  })

  
  //**NÃO SEI A ATÉ QUE PONTO ESSA PARTE DO CÓDIGO É UTIL OU QUE REALMENTE FUNCIONOU (ASSIM COMO NO CÓDIGO EM jQUERY)****
  this.window.addEventListener('resize', function() {
    clearTimeout(doneResize)
    doneResize = setTimeout(function() {
      console.log('done resizing!') //basicamente, assim que eu parar de redimencionar a tela (responsividade), irá logar como 'done resizing!'
      resetPagePosition()
    }, 500)
  })
  function resetPagePosition() {
    postTops = []
    posts.forEach(function(post) {
      postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset))
    })
    const pagePosition = window.pageYOffset + 250
    counter = 0
    postTops.forEach(function(post) {
      if(pagePosition > post) {
        counter++
      }
    })
    navLinks.forEach(function(eachLink) {
      eachLink.removeAttribute('class')
    })
    const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`)
    thisLink.className = 'selected'
  }
})