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
