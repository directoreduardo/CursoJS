// Getters e Setters são pseudo propriedades dentro de um objeto. São funções que se comportam como propriedades. Exemplo:
let obj = {
    listaString: ["string1", "string2", "string3"],
    get primeiraString(){
        return this.listaString.length ? this.listaString[0] : null
    },
    set primeiraString(item){
        this.listaString.unshift(item)
    }
}
console.log(obj.primeiraString)
obj.primeiraString = "nova string" // a reatribuição só é possivel pela existença de um 'set'
console.log(obj.primeiraString)
console.log('--------------')

// USANDO CLASSE:
class Usuario{
    // # São propriedades privadas. Só são vistas do lado de dentro da minha classe
    #primeiroNome = 'Eduardo'
    #segundoNome = 'Henrique'
    get nomeCompleto(){
        return `${this.#primeiroNome} ${this.#segundoNome}`
    }
    set nomeCompleto(value){
        [this.#primeiroNome, this.#segundoNome] = value.split(" ")
    }
}
let usuario = new Usuario()
console.log(usuario.nomeCompleto)
usuario.nomeCompleto = 'Alteração1 Alteração2 ValorNãoDefinido3'
console.log(usuario.nomeCompleto)
console.log('--------------')


// USANDO PROPRIEDADES ESTÁTICAS:
class ClasseStringTeste{
    static #strInterna = 'uma string teste'
    static get str(){
        return this.#strInterna
    }
    static set str(valor){
        this.#strInterna = valor
    }
}
// (static significa não precisar instanciar minha classe)
console.log(ClasseStringTeste.str)
ClasseStringTeste.str = 'Alteração4'
console.log(ClasseStringTeste.str)