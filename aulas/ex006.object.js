// Um objeto é uma coleção de dados relacionados e/ou funcionalidades (que geralmente consitem em diversas variáveis e funções - que são chamadas propriedades e métodos quando estão dentro de um objeto)
// Objetos podem ser inicializados usando new Object(), Object.create() ou usando (a mais usada) uma forma notação literal

// Usando a notação literal:
/*
let objetoVazio = {
    prop1: // — propriedades são estáticas: podendo aqui ser um número, string, array. Porém também pode ser uma função (se tornando um método)
}
*/
// Declarando
let dotNotation = {
    prop1: 'Sou uma propriedade que será acessada usando dot Notation', // não esquecer das virgulas!
    metodo: function(){
        return 'Sou o retorno de um método, ou seja, uma função dentro de um objeto'
    }
}
// Acessando a propriedade e o método:
console.log(dotNotation.prop1)
console.log(dotNotation.metodo) // uma referencia para essa função
console.log(dotNotation.metodo()) // chamando a função
// Declarando uma nova propriedade e depois um novo método:
console.log('=-=-=-=-=-=')
dotNotation.prop2 = 'Sou outra propriedade com valor tipo String'
dotNotation.metodo2 = () => 'Sou o retorno de outro método' // usando arrow function
// Acesando os novos componentes:
console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())

// Usando Bracket notation (notação de colchetes) - é uma outra forma de acessar componentes de um método:
/*
let bracketNotation = {}
console.log(bracketNotation['prop1'])
console.log(bracketNotation['metodo']()) 
// Também pode declarar novas propriedades e métodos - unica diferença é trocar o .prop1 por ['prop1]
*/


//CeV exemplo
console.log('------------------------------------------------------')
let amigo ={
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(7)
console.log(`Agora ${amigo.nome} pesa ${amigo.peso}Kg`)