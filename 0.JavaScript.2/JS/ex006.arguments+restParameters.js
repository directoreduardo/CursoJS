/*
let somaTresNumeros = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(somaTresNumeros(1, 2, 2)) // resposta: 5
*/
// ---------------ARGUMENTS
function somaNumerosInfinitamenteV1() {
    let args = Array.from(arguments)
    let soma = 0
    for(let i = 0;i<args.length;i++)
    soma += args[i]
    return soma
}
console.log(somaNumerosInfinitamenteV1(1,2,2,3,4,5))
console.log('---------')

// versão ainda mais simplificada (usando reduce):
function somaNumerosInfinitamenteV2(args) {
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual)
}
console.log(somaNumerosInfinitamenteV2([1,2,2,3,4,5]))
console.log('-=-=-=--=')

//---------------REST PARAMETERS
let somaNumerosInfinitamenteV3 = (...args2) => { // para o rest parameters funcionar, ele deve ser o unico parâmetro ou o ultimo parâmetro formal
    return args2.reduce((acumulador, valorAtual) => acumulador += valorAtual)
}
console.log(somaNumerosInfinitamenteV3(1,2,2,3,4,5))
console.log('---------')

// Se eu quiser q o primeiro numero mutiplique os outros:
let multiplicaPeloPrimeiro = (multiplicador, ...args3) => {
    return args3.map((num) => multiplicador*num)
}
console.log(multiplicaPeloPrimeiro(2, 1, 2, 3, 4, 5))
console.log('-=-=-=--=')
console.log()


// ---------------Spread Operator
//exemplo:
let listaNumeros0 = [1, 2 ,3]
let somaTresNumeros = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(somaTresNumeros(...listaNumeros0))
console.log('---------')

//porém concatenando mais de 1 array:
let listaNumeros1 = [1,2,3]
let listaNumeros2 = [4,5,6]
let listaNumerosTotal = [...listaNumeros1, listaNumeros2]
console.log(listaNumerosTotal)
console.log('---------')

//trabalando com objetos:
let obj1 = {a: 1, b: 2}
let obj2 = {prop1: 4, prop2: 5}
let objCopy = {...obj1, c: 3, ...obj2}
console.log(objCopy) 