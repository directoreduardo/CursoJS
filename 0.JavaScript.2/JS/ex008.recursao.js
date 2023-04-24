/*
let soma = 0
for(let i = 1; i <= 5; i++){
    soma += i
}
console.log(soma) // 1 + 2 + 3 + 4 + 5 = 15
*/
function somaRecursiva(n){
    if (n==1){
        return 1
    }
    return n + somaRecursiva(n-1) // fatorial: troca o '+' por '*'
}
console.log(somaRecursiva(5))
console.log('=-=-=-=-=-=-=-=-=-=-=-')
//-------------------CONTAGEM REGRESSIVA---------
function timeout(numero){
    return new Promise(resolve => setTimeout(() => resolve(numero), 1000))
}
async function contagemRegressiva(numero){
    if (numero <= 0){
        return console.log('Fim!')
    }
    console.log(await timeout(numero))
    return contagemRegressiva(numero - 1)
}
contagemRegressiva(5)