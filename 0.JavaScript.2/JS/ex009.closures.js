//Suponhe que tem uma função chamada de A e, dentro desta função, uma função chamada B, a função B consegue acessar as variáveis criadas na função A: e isso é chamado de CLOSURES
//Exemplo básico:
function init(){
    let nome = 'Uma string'
    function mostrarNome(){ // O closures aplicado
        console.log(nome)
    }
    mostrarNome()
}
init()
// Agora uma função mais parecida com o coneito do Closures:
function init2(){
    let nome = 'Uma string2'
    function mostrarNome2(){
        console.log(nome)
    }
    return mostrarNome2
}
let minhaFuncao = init2()
minhaFuncao()
console.log('------------------')

//Outro exemplo
function criarContadora(){
    let contador = 0
    return function(){ // aqui tem o inicio da closures
        console.log(contador)
        contador++
    } // aqui o respectivo final
}
let contadora = criarContadora()
contadora()
contadora()
contadora()
console.log('---------------')

//Uma soma sequencial, prepétua:
//usando recursão*

//utilizando currying, exemplo: soma(2)(3)(5)(10)(4)(-1)()
function soma(num1){
    return(num2) => {
        if (!num2){
            return num1
        }
        return soma(num1 + num2)
    }
}
console.log(soma(2)(3)())