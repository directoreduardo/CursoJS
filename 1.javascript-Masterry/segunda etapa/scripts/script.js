let myImage = ['image/image1.jpg', 'image/image2.jpg', 'image/image3.jpg', 'image/image4.jpg', 'image/image5.jpg']
let currentImage = 0 // quando o slideshow carregar, é a primeira imagem estará que será mostrada, no array, este elemento é o numero 0
//UTILIZANDO O ONCLICK
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

//---UTILIZANDO O EVENTLISTENER + 

let container = document.querySelector('.content')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.previous')