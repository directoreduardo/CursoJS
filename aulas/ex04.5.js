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
