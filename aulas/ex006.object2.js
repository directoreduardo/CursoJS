// MÉTODOS DE OBJETOS
let destino = {a: 1, b: 2}
let origem = {b: 4, c: 5}
// Object.assign(target, source) -> target = alvo; source = origem/fonte
let destinoRetornado = Object.assign(destino, origem)
console.log(destinoRetornado, destino) // irá retornar: { a: 1, b: 4, c: 5 } { a: 1, b: 4, c: 5 } - houve um efeito colateral que acabou alterando o 'destino' (que deveria retornar {a: 1, b: 2})
console.log()


// Clonagem de objetos
let obj = {a:1}
let copia = Object.assign({}, obj) // a "origem" está sendo copiada para um objeto vazio, esse objeto vazio evita o efeito colateral mostrado acima
console.log(copia)
console.log()


// Mesclagem de objetos
let o1 = {a: 1}
let o2 = {b: 2}
let o3 = {c: 3}
let mesclaObj = Object.assign({}, o1, o2, o3)
console.log(mesclaObj, o1) // irá retornar: { a: 1, b: 2, c: 3 } { a: 1 }
console.log()


// Transformar um array de arrays em objeto e transformar objeto em array
let arrayDeEntrada = [
    ['abc', 2],
    ['def', 4]
]
let objeto = Object.fromEntries(arrayDeEntrada) 
console.log(objeto) // irá retornar: { abc: 2, def: 4 }

let objetoDeEntrada = {
    'abc': 3,
    'def': 6
}
let lista = Object.entries(objetoDeEntrada)
console.log(lista) // irá retornar: [ [ 'abc', 3 ], [ 'def', 6 ] ]
console.log()


// Object.keys() e Object.values()
let objExemplo = {100: 'a', 2: 'b', 7: 'c'}
let chave = Object.keys(objExemplo)
let valor = Object.values(objExemplo)
console.log(chave, valor) // irá retornar: [ '2', '7', '100' ] [ 'b', 'c', 'a' ]