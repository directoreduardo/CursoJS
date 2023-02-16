// São funções usadas para construir objetos
// Os exemplos abaixo é de uma função construtora de ventiladores
function Ventilador(velMax){ // um construtor é iniciado com a letra Maiuscula. É uma convenção, não uma regra
    this.velocidadeMaxima = velMax // 'this.' é utilizado para "apontar" para um objeto que vai ser construido - recebe (=) -: o valor, que será ou uma propriedade (um objeto), ou uma função (um método), que farão parte desse objeto - como quase tudo em JS
    this.ligado = false // inicializando a função com false
}
// Instâncias
// Para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reserva "new" seguida da chamada da função
let ventilador1 = new Ventilador(3)
// Acessando propriedades
// Para acessar propriedades, como já foi visto, usamos o "."
console.log(ventilador1.velocidadeMaxima) // retorna 3

// Diferente de outras linguagens orientadas a objetos, podemos adicionar propriedades e métodos em tempo de execução:
ventilador1.cor = 'branco'
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function(){ 
    if(this.ligado) 
        this.ligado = false
    else 
        this.ligado = true
// se ela for verdadeira, ela vai "desligar" e se tornar false
// se não, ela vai "ligar" e ser tornar true, ou seja, ela vai alternar quando for chamada
}
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log('------------------------------------')
console.log(ventilador1) // Mostrará a estrutura do objeto com o construtor

// Adicionando o método por meio do protótipo para que seja aplicado a todos os objetos
function liga(){
    this.ligado = true
}
Ventilador.prototype.ligar = liga // A a forma como se trabalha com herança em JS. Para ligar essa função a todos os objetos que venham a ser criado com a função construtora "Ventilador", se utiliza o prototype, que irá acessar a raiz da função construtora "Ventilador", e todos os objetos que vierem a ser construídos com essa função, vão ter, por exemplo, a função "liga" - que é uma versão menor e simples da "ligaDesliga" criada antes