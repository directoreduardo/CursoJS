/* É uma boa ideia colocar todo esse script dentro de um manipulador de eventos (event handler) para quando o window for carregar, para que não faça nada até que todas as imagens sejam baixadas. */
//Cada variável é descrita no comentário abaixo dela.
window.addEventListener('load', function() {
  const slideCount = document.querySelectorAll('#slider-wrapper ul li').length
  //Quantos slides?
  
  const slideWidth = document.querySelector('#slider-wrapper').offsetWidth
  //Qual a largura de cada slide?

  const totalWidth = slideCount * slideWidth + 'px'
  //Largura total do slider
  
  const slider = document.querySelector('#slider-wrapper ul')
  //Elemento DOM do slider

  const next = document.querySelector('#next')
  //Next button

  const previous = document.querySelector('#prev')
  //Previous button
  
  let leftPosition = 0 //A variável leftPosition mudará conforme o slider desliza (slides) para a esquerda e para a direita

  let counter = 0 //O contador será usado para controlar qual slide está no window

  slider.style.width = totalWidth //Finalmente, a largura do slider é definida. Isso não é realmente necessário porque o mesmo cálculo está no CSS, mas pode ser útil se você quiser torná-lo responsivo ou adicionar ou remover slides

  /* quando voce clica em "next button" o slider irá slidar para o proximo slide. Se o user estiver no final da faixa sldie, o controle slider slidará de volta ao início */
  next.addEventListener('click', function(evt) {
    evt.preventDefault()

    counter++
    if(counter===slideCount) {
      //defina o counter em 0
      counter = 0
    } 
    //mova o slider para o proxomo slider
    leftPosition = `-${counter * slideWidth}px`
    slider.style.left = leftPosition
  })

  previous.addEventListener('click', function(evt) {
    evt.preventDefault()

    counter--
    if(counter<0) {counter = slideCount-1} 
    leftPosition = `-${counter * slideWidth}px`
    slider.style.left = leftPosition
  })
})