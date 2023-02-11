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
/*
function soma(n1=0, n2=0){ //=0 é um parametro pré definido caso, por algum motivo, eu não chame ou n1 ou o n2 - sem essa pré definição acabaria retornando NaN
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