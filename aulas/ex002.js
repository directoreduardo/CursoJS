// OPERADORES TERNÁRIOS (?:) - EXEMPLO:
let idade = 17
idade >= 18? console.log('Maior de idade'): console.log('Menor de idade')
// Outro exemplo, com funções, utilizando operadores ternários e if/else em casos não muito complexos:
//--- com if/else:
/*
let somaOuMulti = function (valor){
    if(valor>=10){
        return valor+valor
    }else{
        return valor*valor
    }
}
console.log(somaOuMulti(11))*/
//--- A mesma formula, só que usando operadores ternários:
let somaOuMulti = function (valor){
    return valor>=10?valor+valor:valor*valor
}
console.log(somaOuMulti(11))
// + arrow function:
/*
let somaOuMulti = (valor) => valor>=10?valor+valor:valor*valor
console.log(somaOuMulti(11))*/

// SWITCH:
var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){ //switch é uma expressão [switch(expressão)], não um condição [if(condição)]! O switch funciona melhor em dados pontuais, não em intervalos
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sabado')
        break  
} // "default:" seria o equivalente ao "else{}" do 'if(){}'. Porém é opcional, assim como o "break" na ultima sentença
// outro exemplo:
/*
let exemplo = 2
switch(exemplo){
    case 1:
        console.log('exemplo 1')
        break
    case 2:
        console.log('exemplo 2')
        break
    case 3:
        console.log('exemplo 3')        
} // retornará: 'exemplo 2'
*/