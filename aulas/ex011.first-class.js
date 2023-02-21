// Entende-se que uma linguagem de programação tem Função First-class quando suas funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor a uma variável

// Atribuir uma função a uma variável
let foo = function(){
    console.log('foobar')
}
foo()
console.log('---------------')

// Passar uma função como argumento
function dizOla(){
    return 'Ola, '
}
function apresentacao(funcaoMensagemOla, nome){
    console.log(funcaoMensagemOla + nome)
}
apresentacao(dizOla(), 'JavaScripit!')
console.log('--------------------------')

// Retornar uma função - dois tipos
function printaDev(){
    return function(){
        console.log('Dev!')
    }
}
// usando uma variável:
let myFunc = printaDev()
myFunc()
console.log()
// usando parênteses duplo:
printaDev()() // a gente tem duas funções e irá retornar as duas