/*
function parimpar(n){
    if (n%2==0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
let res = parimpar(437)
console.log(res)
*/
//--------------------
//=0 é um parametro pré definido caso, por algum motivo, eu não chame ou n1 ou o n2 - sem essa pré definição acabaria retornando NaN:
/*
function soma(n1=0, n2=0){ 
    return n1 + n2
}
console.log(soma(5,9))
*/
//--------------------PASSAR PARA UMA VARIAVEL UM PARÂMETRO PARA EXECUTAR UMA FUNÇÃO:
/*
let v = function(x){
    return x*2
}
console.log(v(5))
*/
//--------------------ARROW FUNCTIONS:
// como não ha criação de var (ou let) e não há muito complexidade no bloco, apenas uma linha de código e um "return", eu posso, com o arrow function, tirar as chaves e tirar o "return" e simplificar deste jeito:
/*
let arrowF = () => 'Sou o retorno na Arrow Function' 
console.log(arrowF())
*/
//--------------------IIFE - ou Função Imediata:
// a diferença é que, aqui, voce não precisa chamar como "uma função", apenas chama a sua variável
/*
let retornoIIFE = (function(){
    return 'Retorno de uma função imediata'
})()
console.log(retornoIIFE) 
*/
//--------------------FATORIAL: TRADICIONAL:
/*
function fatorial(n){
    let fat = 1
    for(let c = n;c>1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
*/
//-------------------FATORIAL: RECURSIVA:
/*
function fatorial(n){
    if (n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
*/