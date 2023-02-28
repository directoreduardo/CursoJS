// --------Herança

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
    constructor(nome, idade, Linguagem, tipoDev, framework){
        super(nome, idade, Linguagem, tipoDev)
        this.framework = framework
    }
}
let frontend1 = new FrontendDev('Pedro', 35, 'JavaScript', 'Frontend', 'React')
console.log(frontend1)
frontend1.saudacao()
console.log('----------')

class BackendDev extends Dev{
    constructor(nome, idade, Linguagem, tipoDev, bancoDeDados){
        super(nome, idade, Linguagem, tipoDev)
        this.bancoDeDados = bancoDeDados
    }
}
let backend1 = new BackendDev('João', 25, "C#", 'Backend', 'SQL Server')
console.log(backend1)
backend1.saudacao()