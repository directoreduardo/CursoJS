// Currying é uma tecninca avançada para se trabalhar com vários paremetros ao mesmo tempo, só que sem utilizar uma chamada de função, mas várias chamada de função
let resultado
function ehMaiorCurrying(a) {
    let comparacao
     = false; // comparar apenas uma função é igual a comparar ele com ele mesmo. Exemplo: 2 é maior que ele mesmo? false!
    return function ehMaiorCurrying2(b){
        if(!b){
            return comparacao

        }
        comparacao
         = a > b
        a = b
        return ehMaiorCurrying2
    }
}
resultado = ehMaiorCurrying(2)(3)()
console.log(resultado)
console.log()

// usando um acumulador
function soma(num1){
    let acumulador = num1
    return function soma2(num2){
        if(!num2){
            return acumulador
        }
        acumulador += num2
        return soma2
    }
}
let resultado2 = soma (2)(3)(5)(10)(4)(-1)()
console.log(resultado2)