// MÉTODOS DE COMPARAÇÃO E VERIFICAÇÃO

String.prototype.match() // retorna array
// Um objeto de expressão regular (regexp). Se regexp (regexp será estuda em aulas mais avançadas) não for uma RegExp (um objeto do tipo regexp), o mesmo será convertido para uma nova RegExp usando new RegExp(regexp)
// Se você não fornecer nenhum parâmetro ao usar o método match(), você obterá um Array com uma string vazia: [""]
//Exemplo:
let str = 'Para melhores informações, veja o Capítulo 3.4.5.1'
let re = /(capítulo \d+(\.\d)*)/i // exemplo de uma expressão regular (regexp)
let found = str.match(re) 
console.log(found)
// retornará:
/* 
[
  'Capítulo 3.4.5.1',
  'Capítulo 3.4.5.1',
  '.1',
  index: 34,
  input: 'Para melhores informações, veja o Capítulo 3.4.5.1',
  groups: undefined
]
*/
console.log('-----------')
let outroFound = str.match('Para')
console.log(outroFound)
// retornará
/*
[
  'Para',
  index: 0,
  input: 'Para melhores informações, veja o Capítulo 3.4.5.1',
  groups: undefined
]
*/

