//Função e variáveis são HOISTED (ou 'levadas aou topo'). Exemplo, variáveis (var, let e const):
/*
bar = 2
console.log(bar)
var bar

// É igual à:

var bar
bar = 2
console.log(bar)
*/
// Porém, usando a variável de CONST, isso não será possivel pois ele é uma variável constante. Entretanto, esse comportamento é bastante diferente quando falamos de objetos declarados com CONST. Embora um objeto declarado com CONST não possa ser atualizado, é possível atualizar as propriedades desse objeto. Assim, podemos declarar um objeto com CONST dessa forma:
/*

const greeting = {
    message: "say Hi",
    times: 4
}

// NÃO SERÁ POSSIVEL fazer isso:

greeting = {
    words: "Hello",
    number: "five"
} // erro:  atribuição a uma variável constante.

// SERÁ POSSIVEL, contudo, fazer isso:

greeting.message = "say Hello instead";

*/

//---DISCLAIMER:: Somente declarações são elevadas. Inicializações não fazem parte do hoisted. Exemplo:
/*
var x = 10
console.log(x,y)
var y = 7 // 7 será undefined
*/

//======== Diferença entre VAR e LET + EXEMPLOS: =====
//A variavel de LET e VAR não são constantes (diferentemente de var, porém, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error), no entanto, ambas são de escopos diferentes. A váriavel de LET (assim como a de CONST) têm escopo de bloco, enquanto a de VAR tem escopo global. Por exemplo, ao usar let, você não precisa se preocupar se usou o nome para uma variável antes, já que a variável existe somente dentro daquele escopo. Já a de VAR define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

//----EX 1

// VAR:
/*
var greeter = "hey hi";
var greeter = "say Hello instead";

var greeter = "hey hi";
greeter = "say Hello instead";

// Ambas as alterações/atualizações NÃO darão erro e retornará "say Hello instead"
*/

// LET: 
/*
let greeter = "hey hi";
greeter = "say Hello instead"; //retornará "say Hello instead"

let greeter = "hey hi";
let greeter = "say Hello instead"; // erro: identificador 'greeter' já foi declarado

// Let pode ser atualizado, mas não declarado novamente.
*/

//----EX 2

// VAR
/*
var greeter = "say Hi";
if (true) {
    var greeter = "say Hello instead";
    console.log(greeter); // RETORNARÁ: "say Hello instead"
}
console.log(greeter); // RETORNARÁ: "say Hello instead"
*/

// LET:
/*
let greeter = "say Hi";
if (true) {
    let greeter = "say Hello instead";
    console.log(greeter); // RETORNARÁ: "say Hello instead"
}
console.log(greeter); // RETORNARÁ: "say Hi"
*/