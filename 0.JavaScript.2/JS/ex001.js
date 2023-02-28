// ---------------------------IIFE (Immediately Invoked Function Expression), ou Expressão de função imediatamente invocada:
/* 
(
    function (){
        //código
    }
)() //- self executing anonymous function (função anônima autoexecutável)
*/
let resultado = (function(){
    let meuNome = 'Eduardo'
    return meuNome
})()
console.log(resultado)
console.log('-------------')

// ----------------------------LOOP: For/Of
let listaDeEst = ['RJ','SP','MG']
for (let estado of listaDeEst){
    console.log(estado + ' é um estado brasileiro.')
}
console.log('-------------')

// ---------------------------CLASSES---------
// Não existe classes no JS, a versão 6 do ECMAScript adicionou classes como uma abstração da linguagem, no final são apenas templates de objetos do JS
/*
class NomeClasse{
    contructor(){
        ...
    }
}
*/ 
class Carro{
    constructor(nome, ano){
        this.nome = nome
        this.ano = ano
    }
}
let carro1 = new Carro('Audi', 2010)
let carro2 = new Carro('Ferrari', 1996)
console.log(carro1, carro2)
