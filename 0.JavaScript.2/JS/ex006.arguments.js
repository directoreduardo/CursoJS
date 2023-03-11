/*
let somaTresNumeros = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(somaTresNumeros(1, 2, 2)) // resposta: 5
*/
function somaNumerosInfinitamenteV1() {
    let args = Array.from(arguments)
    let soma = 0
    for(let i = 0;i<args.length;i++)
    soma += args[i]
    return soma
}
console.log(somaNumerosInfinitamenteV1(1,2,2,3,4,5))
console.log('-=-=-=--=')

// versão ainda mais simplificada (usando reduce):
function somaNumerosInfinitamenteV2(args) {
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual)
}
console.log(somaNumerosInfinitamenteV2([1,2,2,3,4,5]))