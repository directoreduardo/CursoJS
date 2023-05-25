// -------------- MÉTODO: Object.preventExtensions()
let object1 = {}
object1.a = 1234 // criando uma propriedade dentro do objeto chamado "a", com um númeto qualquer

Object.preventExtensions(object1) // referenciando o objeto global (Object) e chamando o método dentro dele chamado preventExtensions, passando o objeto (object1) para dentro dele

object1.a = 4321 // reatribuindo outro valor na propriedade dentro do object1

console.log(object1) // o valor mudou, pois o preventExtension previne que exista extensões, ou seja criar novas propriedades ao objeto, por exemplo: object1.b = 1234 - irá criar um erro!
console.log('------------------')

// -------------- MÉTODO: Object.seal()
let object2 = {}

object2.a = 222

Object.seal(object2)

object2.a = 333

console.log(object2) // o valor tam´bem irá mudar. Porém assim como o preventExtension ele previne que exista extensões. Assim como não pode deletar a propriedade (delete object2.a)
console.log('------------------')
// -------------- MÉTODO: Object.freeze()
let object3 = {}

object3.a = 123

Object.freeze(object3)

object3.a = 12345

console.log(object3) // irá retornar "123" - o valor ficou imutável e não irá reatribuir o valor. Esse é o método que torna o objeto, quase que 100% (pelo menos de forma rasa): imutável... "quase" porque se nos tiver mais um nível de objeto dentro do nosso objeto, ainda sim não vai ter um objeto 100% imutável. Exemplo:
/*
let object2 = {
    abc: {
        d: {

        }
    }
}
(...)
object.abc.d = 123 // o "d" terá o valor "'123"    
 */