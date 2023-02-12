//Função e variáveis são HOISTED (ou 'levadas aou topo'). Exemplo:

bar = 2
console.log(bar)
var bar

// É igual à:
/*
var bar
bar = 2
console.log(bar)
*/
// Porém, usando a variável de CONST, isso não será possivel pois ele é uma variável constante.

//A variavel de LET e VAR não são constantes, no entanto, ambas são de escopos diferentes. A váriavel de LET (assim como a de CONST) têm escopo de bloco, enquanto a de VAR tem escopo global. Por exemplo, ao usar let, você não precisa se preocupar se usou o nome para uma variável antes, já que a variável existe somente dentro daquele escopo. Já a de VAR define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

//---Somente declarações são elevadas. Inicializações não fazem parte do hoisted. Exemplo:

var x = 10
console.log(x,y)
var y = 7 // 7 será undefined