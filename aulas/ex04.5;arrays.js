// O objeto Array do JS é um objeto global usado na construção de 'arrays': objetos de alto nível semelhante a listas
// - são objetos tem, nativamente, diversos métodos embutidos para realizar diversos tipos de operações (dentre os diversos tipos de operações estão: inserir, remover, atravessar o array, e criar novos arrays)
//- são heterogêneos (aceitam diversos tipos de dados dentro da mesma linha - inclusive outros arrays e objetos)
//- não tem tamanho fixo (pode ser alterado a qualquer momento)
//- dados não são necessariamente armazenados contiguamente - podem ser contíguos ou espaçados
//- índices são acessados por meio de números a partir do 0

/*
// Criando array de forma literal
let frutas = []
// ou
let frutas = ['maçã', 'banana']
console.log(frutas.length) // 2
*/
/*
// Outra maneira seria usando o operador new constrói um novo objeto por meio da função construtora do Array
let frutas = new Array ['maça', 'banana'] // declarando os elementos como argumentos
let arrTamanho = new Array[10] // dando o número de posições como argumentos (número de espaço dentro do array) - quando você faz isso, todos os espaços deste array vão inicar com o valor undefined
console.log(frutas)
*/

let num = [5, 8, 2, 9, 3]
console.log(num)
num.sort() // irá deixar os valores em ordem 
num.push(1) // irá acrescentar um valor no ultimo índice. Foi adicionado logo depois do método sort(), logo não irá ser afetado 
console.log('Valores em ordem utilizando o método sort() e adicionando um índice a mais com o método push():')
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // length é im atributo e irá contar quantas indices há no vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // irá buscar o valor que está dentro da index. Adicione aqui um valor
if(pos==-1){ // -1 em javascript é o vazio, neste caso, se o valor adicionado logo acima não estiver no array num, irá aparecer um -1 ou, neste exemplo, o console logo abaixo:
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor oito está na posicção ${pos}`) //  irá contar a ultima mostragem, neste caso, a que está com os valores ordenados com o método sort() e um índice a mais adicionado no método push()
}
// Outros exemplos:

let str = 'hello'
let count = 0
while(count<str.length){
    console.log(str[count]) // acesso a um índice de uma string
    count++
}