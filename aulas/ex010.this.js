// Chamar o this diretamente no console nos traz o objeto global do contexto em que o JS está executando
/*
// *esse código não foi feito para ser usado no Node
console.log(this.document === document) // - true
// em navegadores web, o objeto "window" é também o objeto "global":
console.log(this === window) // - true
this.a = 37
console.log(window.a) // - 37
*/
/*
// Quando não estiver no modo estrito o this apontará para o objeto global:
function thisNaoEstrito(){console.log(this)}

// Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução, assim, no caso a seguir, this por padrão será indefinido (undufined)
function thisEstrito(){'use strict'; console.log(this)}
*/

// Como método de um objeto
let o = {
    prop: 100,
    f: function(){ // "f" é uma propriedade que faz uma referência a uma função
        return this.prop // ao usar apenas "this", ele retornará só o objeto, por exemplo: { prop: 100, f: [Function: f] }
    }
}
console.log(o.f())
console.log('-------------------------------')

// Função Arrow 
// Nas arrow  function, o this é definido lexicalmnte, isto é, seu valor é definido pelo contexto de execução onde está inserido. Em um código global, this assume o objeto global:
/*
// CONTEXTO DE CRIAÇÃO: GLOBAL
let arrowThis = () => {console.log(this)}

//CONTEXTO DE CRIAÇÃO: OBJETO //- ERRADO!
let obj1 = {
    prop: 150,
    arrowF: () => {console.log(this)}
}

// CONTEXTO DE CRIAÇÃO: OBJETO // - CORRETO!
let obj2 = {
    exemplo1: 'exemplo1',
    mostraThis: function(){
        console.log((() => this)())
    }
}
*/
//----------------BIND---
// O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada

//Exemplo
//'use strict'
function thisBindEx(){
    console.log(this) // sem o 'use strict' o this aponta para o objeto global
}
// ligando a função thisBindEx() a um objeto:
let obj = {exemplo: 'exemplo'}
thisBindEx = thisBindEx.bind(obj) // ao fazer essa atribuição, o this da função thisBindEx() não será mais global, mas o objeto 'obj'
thisBindEx()
console.log('-------------------------------')

//----------CALL & APPLY
// Nota: call() e apply() tem uma sintaxe idêntica. A diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumento
//-----------------CALL--
// O método call() chama uma função com um dado 'this' e argumentos passados individualmente. O call() permite que uma função/método, pertencente a um dado objeto, seja atribuido e chamado por um objeto diferente. Dessa forma podendo reutilizar o método de um objeto em diversos outros objetos

//Exemplo
let obj1 = {exemplo1: 'exemplo1', mostraThis: function thisCallEx(){
    console.log(this)
}}
obj1.mostraThis() // chamando o método acima
console.log() // pulando uma linha
let obj2 = {exemplo2: 'exemplo2'} 
// exemplo de lista de argumentos: fun.call(thisArg[, arg1[, arg2[, ...]]])
// ou, traduzindo para o exemplo prático: mostraThis: function thisCallEx(a, b, c) — obj1.mostraThis.call(obj2, 1, 2, 3) 
obj1.mostraThis.call(obj2) // "logando" o obj1 porém chamando como obj2
console.log('-------------------------------')

//--------------------------APPLY--
// O método apply() chama um função com um dado valor this, e argumentos como uma array (ou um objeto array.like). Em outras palavras é um call que aceita argumentos por meio de um array ao invés de serem passados individualmente (um a um)

//Exemplo
let obj3 = {exemplo3: 'exemplo3', mostraThis2: function thisApplyEx(){
    console.log(this)
}}
obj3.mostraThis2()
console.log()
let obj4 = {exemplo4: 'exemplo4'}
// exemplo de array de argumentos: fun.apply(this.Arg, [argsArray])
// ou, traduzindo para o exemplo prático: mostraThis2: function thisApplyEx(a, b, c) — obj3.mostraThis.apply(obj4, [1, 2, 3]) 
obj3.mostraThis2.apply(obj4)