const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]

let html = ""
let counter = 1

/* o método forEach() é um método array, o que significa que você o executa em um array, como "linhas" ("rows"). Então você pode passar uma função, e essa função recebe um argumento que representa cada elemento do array. */
rows.forEach(function(row) {
  html += `<div class="label">${row}</div>`

  for(let i=0; i<3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`
    counter++
  }
})
document.querySelector('#left').innerHTML = html