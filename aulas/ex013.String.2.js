// MÉTODOS DE AÇÕES
let stringTransformada // undefined
let umaString = ' Essa é uma string de teste de estudos dos Métodos de String '

console.log(stringTransformada = umaString.repeat(3)) // cria copia da string principal, a string na qual voce está chamando o método. Neste caso, 3 copias
console.log('-----') 

console.log(stringTransformada = umaString.concat(' Uma outra string qualquer')) // irá concatenar, juntar uma string com a outra
console.log('-----')

console.log(stringTransformada = umaString.replace('Essa', 'Isto')) // substitui uma parte da string por outra (pode-se utilizar expressões regulares)
console.log('-----')

console.log(stringTransformada = umaString.slice(0, 5)) // vai 'fatiar' a string principal
console.log('-----')

console.log(stringTransformada = umaString.split(' ')) // todas as regras que vocÊ passar para ele, ele vai fazer uma separação da string e transformar em um array - neste caso em específico: toda vez que tiver um espaço (' '), ele irá criar um novo item de array
console.log('Outro exemplo:')
console.log(stringTransformada = umaString.split(' ').map(valor => valor + '-').join('')) // apenas join() irá acrementar virgulas como espaço
console.log('-----')

console.log(stringTransformada = umaString.substring(0, 5)) // basicamente faz a mesma coisa que o .slice()
console.log('-----')

console.log(stringTransformada = umaString.toLocaleLowerCase()) // tudo em minúsculo
console.log(stringTransformada = umaString.toLocaleUpperCase()) // tudo em maiúsculo
console.log('-----')

stringTransformada = umaString.trim() // irá cortar os espaços nas duas extremidades
stringTransformada = umaString.trimStart() // irá cortar apenas no começo
stringTransformada = umaString.trimEnd() // irá cortar apenas no final