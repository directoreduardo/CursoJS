let valores = [8,1,7,4,2,9]
console.log(valores)
console.log('----------------')

//CÓDIGO TRADICIONAL, MANEIRA ANTIGA:
/*
for(let pos = 0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//A MANEIRA MAIS MODERNA E SIMPLIFICADA DE SE FAZER: (que só funciona em arrays e objetos, que na verdade são a mesma coisa pois todo array em javascript é um object)

for(let pos in valores){ // para cada posição em num:
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('--------------------------')
console.log()

// Recapitulando estudos:
let meuArrayLiteral = [1,2,3] // forma literal
let meuArrayConstrutorInstance = new Array(1,2,3)
let meuArrayConstrutorCall = Array(1,2,3) // caso eu tivesse criando com um elemento, tipo: Array(5) - significa o número de elementos que esse array irá ter
let meuArrayFrom = Array.from(meuArrayLiteral)
let meuArraySpread = [... meuArrayFrom]

//---INSERIR E REMOVER ELEMENTOS DAS EXTREMIDADES--

let arr = [1]
arr.push(2) // inserindo valor no final do array - adiciona à direita
arr.unshift(3) // inseirndo valor no início do array - adiciona à esquerda

arr.shift() // remove o primeiro elemento da lista
arr.pop() // remove o ultimo elemento da lista

// REMOVER ELEMENTOS DE QUALQUER PONTO
let arrRemoveAnyPoint = [1,7,5,3]
arrRemoveAnyPoint.splice(1,2) // índice 1 e 2, ou seja, o elemento 7 e 5 
// caso eu queria deletar a penas o elemento 5:
arrRemoveAnyPoint.splice(2,1) // índice 2, quantos elementos irá ser deletados: 1

// PREENCHER UM ARRAY COM VALORES
let arrPreenchido = new Array(10) // 10 espaços de array que começará undefined
arrPreenchido.fill(5, 2) // o primeiro argumento é o valor que eu quero preencher, o segundo é o critério, é onde eu vou começar esse preenchimento (no caso, a partir do índice 2) - caso eu queira que preencha todos os espaço com o elemento 5, apenas .fill(5). Caso eu queira que comece no índice 2 e termine no índice 8: .fill(5,2,8)

// CRIAR UM SUB ARRAY A PARTIR DE UM ARRAY
let arrArray = ['Brazil', 'Developer', 'javascript', 'python', 'c++']
// suponha que eu quera pegar apenas as linguagens de programação deste array
// vou criar outra variável:
let arrSubArray = arrArray.slice(2) // vou fatiar o array: começar do índice 2 até o final

// ORDENAR UM ARRAY
let arrayOrdenado = [2,3,1,10,9,4,5,8,0]
// arrayOrdenado.sort() não funcionaria aqui porque ele só irá ordrnar a partir do primeiro número, ou seja, o 10 não seria o ultimo número porque seu primeiro número é 1. Ou seja, teremos que passar uma função para isso:
//exemplo:
arrayOrdenado.sort((a, b) => a - b) // 1 = se a - b for negativo, quer dizer que a ordem está correta. 2 = se a - b for igual a 0, quer dizer que os números são iguais e não vai acontecer nada. 3 = se a - b for positivo, nesse caso os elementos trocam de posição, pois a ordem está errada

// FILTER, FIND, FOREACH, MAP , REDUCE
let arrBase = [ // uma lista de objetos
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2}
]
let filtered = arrBase.filter(el => el.a > 2) //- só me retorne quando o elemento e a propriedade do elemento a, for maior do que 2
let find = arrBase.find(el => el.a == 10) //- só irá encontrar um, o primeiro elemento que encontrar ele retorna
let forEach = arrBase.forEach(el => console.log(`a: ${el.a}, b: ${el.b}`)) //- não irá retornar nada, é apenas um print para cada elemento
let maped = arrBase.map(el => el.a += 1) //- vai mapear os valores e vai poder retornar um valor, um array novo, com os valores já mapeados; se eu quiser somar todos os valores com +1, eu vou poder fazer
let reduce = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0) //- vai fazer uma interação sobre todos os valores - acc é o acumulador (o valor que vai ser acumulado), curr é o valor corrente (o valor atual) - poderia passar também o array e poderia passar também o índice do elemento atual do elemento (index). Qual vai ser o valor inicial pro meu acumulador, posso dizer que pode começar com o 0, que é o caso aqui - irá acumulando até chegar no final e retornar o valor acumulado; vai reduzir todo o array até chegar num valor menor reduzido. No caso acima retornará 19, porém se for incrementado o .map que adicionou +1, retornará 24 