// MÉTODOS DE COMPARAÇÃO E VERIFICAÇÃO
// Método de Comparação:
//----------Método match()
String.prototype.match() // retorna array
// Um objeto de expressão regular (regexp). Se regexp (regexp será estuda em aulas mais avançadas) não for uma RegExp (um objeto do tipo regexp), o mesmo será convertido para uma nova RegExp usando new RegExp(regexp)
// Se você não fornecer nenhum parâmetro ao usar o método match(), você obterá um Array com uma string vazia: [""]
//Exemplo:
/*
let str = 'Para melhores informações, veja o Capítulo 3.4.5.1'
let re = /(capítulo \d+(\.\d)*)/i // exemplo de uma expressão regular (regexp)
let found = str.match(re) 
console.log(found)
*/
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

/*
//Usando como uma String normal
let outroFound = str.match('Para')
console.log(outroFound)
// retornará
*/
/*
[
  'Para',
  index: 0,
  input: 'Para melhores informações, veja o Capítulo 3.4.5.1',
  groups: undefined
]
*/

// Outro exemplo
let str1 = 'NaN significa "não é um número". Infinity contem -Infinity e +Infinity em JavaScript', str2 = 'Meu avô tem 65 anos e minha avó tem 63', str3 = 'O contrato foi declarado null (nulo) e void (sem efeito)'
console.log(str1.match('número')) // 'numero' é um string. retornará ["numero"]
console.log(str1.match(NaN)) // o tipo de NaN é um numero. retornará ["NaN"]
console.log(str1.match(Infinity)) // o tipo de Infinity é um numero. retornará ["Inifinity"]
console.log(str1.match(+Infinity)) // retorna ["Infinity"]
console.log(str1.match(-Infinity)) // retorna ["-Infinity"]
console.log(str1.match(65)) // retorna ["65"]
console.log(str1.match(+65)) // um numero com sinal positivo. retorna ["65"]
console.log(str1.match(null)) // retorna ["null"]

//-----------Método search()
String.prototype.search() // Retorna o índice na string do primeiro trecho que satisfaz a expressão regular. Do contrário, o valor -1 será retornado
// Um objeto contendo uma expressão regular. Se o objeto obj for passado como parâmetro e não for do tipo RegExp, ele será implicitamente convertido para uma RegExp através da instrução new RegExp(obj)
//Exemplo
let str01 = 'NaN significa "não é um número". Infinity contem -Infinity e +Infinity em JavaScript'
console.log(str01.search('número')) // retorna 24
console.log(str01.search(NaN)) // retorna 0
console.log(str01.search(Infinity)) // retorna 33
console.log('=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=')

// OUTRAS
let stringDeTeste = 'Essa é uma string de teste para o estudo de métodos. Meu nome é Eduardo!'
console.log(stringDeTeste.startsWith('Essa')) // se começa com esse valor = TRUE (pode ser alterada, por exemplo ('Essa', 2) - ai não seria mais 'Essa', mas 'sa')
console.log(stringDeTeste.endsWith('uma', 10)) // fatiar até o elemento que represente o índice 10, no caso: 'uma' = TRUE
console.log(stringDeTeste.includes('métodos')) // verifica se a String inclui ou não este valor representado = TRUE
console.log(stringDeTeste.indexOf('é')) // começa contando da esquerda para direita, verifica qual índice e encontra essa palavra/letra acima = índice 5
console.log(stringDeTeste.lastIndexOf('!')) // começa contando da direita para esquerda, verifica qual índice e encontra essa palavra/letra acima = índice 71
console.log(stringDeTeste.valueOf()) // retorna a stirng em si

console.log(stringDeTeste.charCodeAt(0)) // retorna o charCode, neste caso de 0 que é 'E' = 69
console.log(String.fromCharCode(69)) // o contario, qual letra do alfabeto que é representado por 69 = 'E'