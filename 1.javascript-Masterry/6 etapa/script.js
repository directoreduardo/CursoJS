//ESCONDENDO OS MENUS
const submenus = document.querySelectorAll('ul li ul')

function hideSubmenus() {
  for (let i=0; i<submenus.length; i++) {
    // o nome postulado no style.css
    submenus[i].className = 'hide-menu'
  }
}
hideSubmenus()

//INTERAGINDO/MOSTRANDO OS MENUS
const menulink = document.querySelectorAll('.menulink')

for (let i=0; i<menulink.length; i++) {
  //deve-se usar a função anonima "function()" ao invés da "() =>"
  menulink[i].addEventListener('click', function(event) {
    event.preventDefault()
    
    const thisMenu = this.parentNode.querySelector('ul')

     
    //PODER FECHAR O MENU DEPOIS DE ABRIR
    if (thisMenu.classList.contains('hide-menu')) {
      
      //CASO VC QUEIRA Q, QUANDO INTERAGIR COM UM DOS LINKS, FECHAR O OUTRO QUE ESTIVER ABERTO:
      hideSubmenus()

      // o nome postulado no style.css
      thisMenu.className = 'show-menu'
    } else {
      thisMenu.className = 'hide-menu'
    }
  })
}