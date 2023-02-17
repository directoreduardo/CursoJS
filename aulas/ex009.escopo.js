// Argumentos de função parâmetro são vistos como variáveis locais dentro da função
function params(local1, local2){
    console.log(local1, local2)
}
params('Sou local 1', 'Sou local 2')
console.log('------------------------------')

// Outra situação é quando temos uma função dentro de outra
let nivelGlobal = 'nivel global'
let nivel01 = undefined, nivel02 = undefined, nivel03 = undefined
function funcao1(){
    let nivel01 = 'nivel 01'

    function funcao2(){
        let nivel02 = 'nivel 02'

        function funcao3(){
            let nivel03 = 'nivel 03'
            console.log(`\nFunção 3, resultados: \n${nivelGlobal} \n${nivel01} \n${nivel02} \n${nivel03}`)
        }
        funcao3()
        
        console.log(`\nFunção 2, resultados: \n${nivelGlobal} \n${nivel01} \n${nivel02} \n${nivel03 ? nivel03 : 'nivel 03 - inacessivel'}`)
    }
    funcao2()

    console.log(`\nFunção 1, resultados: \n${nivelGlobal} \n${nivel01} \n${nivel02 ? nivel02 : 'nivel 02 - inacessivel'} \n${nivel03 ? nivel03 : 'nivel 03 - inacessivel'}`)
}
funcao1()
// Basicamente, não se coleta valores de "fora para dentro" de um escopo, porém se coleta de "dentro para fora"
console.log('--------------------------------------')

// PRÁTICA ALTAMENTE PERIGOSA!
// Escopo global automático sem uso das palavras reservadas let, const e var

// Exemplo1:
let obj = {func: function(){a = 10; console.log(a)}} // uma função anônima que será referente ao nome "func", "a" é uma variável sem a utilização de uma palavra chave; ponto e virgula necessário em um codigo em linha
obj.func()
a = 5 // alterando o valor de a
console.log(a) // o valor pode ser acessado do lado de fora do método, o valor se torna global: o valor será 5
obj.func() // continuará 10
// Em outras palavras, eu modifiquei o valor da "variável maliciosa" tanto de fora pra dentro como de dentro pra fora
