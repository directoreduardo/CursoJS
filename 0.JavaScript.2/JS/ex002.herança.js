// ---------------------HERANÇA

class Dev{
    constructor(nome, idade, Linguagem, tipoDev){
        this.nome = nome
        this.idade = idade
        this.Linguagem = Linguagem
        this.tipoDev = tipoDev
    }
    saudacao(){
        console.log(`Oi! Sou dev ${this.tipoDev} tenho ${this.idade} anos, trabalho com ${this.Linguagem} e me chamo ${this.nome}`)
    }
}

// especializando para um Frontends e Backends:
class FrontendDev extends Dev{
    constructor(nome, idade, Linguagem, framework){
        super(nome, idade, Linguagem)
        this.framework = framework
        this.tipoDev = 'Frontend'
    }
}
let frontend1 = new FrontendDev('Pedro', 35, 'JavaScript', 'React')
console.log(frontend1)
frontend1.saudacao()
console.log('----------')

class BackendDev extends Dev{
    constructor(nome, idade, Linguagem, bancoDeDados){
        super(nome, idade, Linguagem)
        this.bancoDeDados = bancoDeDados
        this.tipoDev = 'Backend'
    }
}
let backend1 = new BackendDev('João', 25, "C#", 'SQL Server')
console.log(backend1)
backend1.saudacao()
console.log('--=-=---=-=-=--==-=-=-=-=-=-=-=--=-=-=-=-=--')
console.log()

// ---------------------PROTOTYPES
// É uma emulação de herança de classe

let animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}
let gato = {
    som: 'miau',
    tipo: 'gato'
}
Object.setPrototypeOf(gato, animal) // o prototype de gato (o objeto que é pai do objeto gato), vai ser animal
gato.emitirSom() // caso o gato não tivesse a função 'som', ele iria buscar no 'objeto pai' e retornaria, portanto, "um som de animal". Ele só acessa o protótipo (animal) se não existir no original (gato)
console.log('--------')
let gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function(){
        console.log(this.som.toUpperCase()) // o som: 'miau' em capslock
    }
}
Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()
console.log('--=-=---=-=-=--==-=-=-=-=-=-=-=--=-=-=-=-=--')
console.log()

// ---------------------HERANÇA SEM USAR CLASSES
// Usando de exemplo o código acima (HERANÇA): "transportando" para o JS:

let Dev2 = function(nome, idade, Linguagem, tipoDev){
    this.nome = nome
    this.idade = idade
    this.Linguagem = Linguagem
    this.tipoDev = tipoDev
    this.saudacao = function(){
        console.log(`Oi! Sou dev ${this.tipoDev} tenho ${this.idade} anos, trabalho com ${this.Linguagem} e me chamo ${this.nome}`)
    }
}

let FrontendDev2 = function(nome, idade, Linguagem, framework){
    let newDev2 = new Dev2(nome, idade, Linguagem, 'Frontend')
    newDev2.framework = framework
    Object.setPrototypeOf(this, newDev2)  // o this de FrontendDev2 vai ser prototype de newDev2
}
let frontend2 = new FrontendDev2('Pedro(2)', 35, 'JavaScript(2)', 'React')
console.log(frontend2)
frontend2.saudacao()
console.log('----------')

let BackendDev2 = function(nome, idade, Linguagem, bancoDeDados){
    let newDev2 = new Dev2(nome, idade, Linguagem, 'Backend')
    newDev2.bancoDeDados = bancoDeDados
    Object.setPrototypeOf(this, newDev2)
}
let backend2 = new BackendDev2('João(2)', 25, "C#(2)", 'SQL Server')
console.log(backend2)
backend2.saudacao()