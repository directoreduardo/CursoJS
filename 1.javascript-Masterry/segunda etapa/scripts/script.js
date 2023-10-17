//---UTILIZANDO O ONCLICK---
/* let myImage = ['image/image1.jpg', 'image/image2.jpg', 'image/image3.jpg', 'image/image4.jpg', 'image/image5.jpg']
let currentImage = 0 */ // quando o slideshow carregar, é a primeira imagem que será mostrada, no array, este elemento é o numero 0
/* //------NEXT----------
function nextPhoto() {
  currentImage++
  if (currentImage > myImage.length-1) {
    currentImage = 0
  }
  document.querySelector('.myimage').src = myImage[currentImage]
}
document.querySelector('.next').onclick = nextPhoto
//------PREVIOUS-------
function previousPhoto() {
  currentImage-- 
  if (currentImage < 0) {
    currentImage = myImage.length-1
  }
  document.querySelector('.myimage').src = myImage[currentImage]
}
document.querySelector('.previous').onclick = previousPhoto */

//----------------------------------------------
//---UTILIZANDO O EVENTLISTENER + FADE IN EFFECT 
const myImage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']
let currentImage = 0

const container = document.querySelector('.content')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.previous')
//------NEXT------
nextBtn.addEventListener('click', (event) => {
  event.preventDefault //como o proprio nome sujere, isso é uma precaução, prevenir que haja exposição na barra de endereço

  currentImage++
  if (currentImage > myImage.length-1) {
    currentImage = 0
  }

  const newSlide = document.createElement('img')// 1) criar novo elemento de image (Create a new image element)
  newSlide.src = `image/${myImage[currentImage]}` //2) definir o atribute de origem (Set the source attribute);
  newSlide.className = 'fadeinimg' // 3) definir o nome da classe (Set the class name); - certifique q o nome da string seja o mesmo que o que está em estilos.css
  container.appendChild(newSlide) // 4) anexa-lo ao contêiner (Append it to the container)

  // Para evitar que as imgans fiquem empilhando (stacking) acada click - Remove Extra Children, simplificando com que não tenha mais que duas imagens na lista, portanto, não empilhando, deixando o DOM um pouco mais limpo
  if (container.children.length > 2) {
    container.removeChild(container.children[0]) //além adicionar a terceira imagem, também remove a primeira, a que está no topo
  }
})
//------PREVIOUS-----
// Praticamente igual ao 'next', porém com umas pequenas mudanças de diferente, mudanças essas já mostrado na versão 'onclick' no topo. Eu poderia resumir ainda mais e pegar as ultimas partes que são identicas e sem mudanças e criar uma função em cima, porém por motivos mais didatico, eu escolhi deixar assim, mesmo parecendo repetitivo e redundante
prevBtn.addEventListener('click', (event) => {
  event.preventDefault

  currentImage--
  if (currentImage < 0) {
    currentImage = myImage.length-1
  }

  const newSlide = document.createElement('img')
  newSlide.src = `image/${myImage[currentImage]}`
  newSlide.className = 'fadeinimg'
  container.appendChild(newSlide)

  if (container.children.length > 2) {
    container.removeChild(container.children[0])
  }
})