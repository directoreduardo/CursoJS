// JSON.parse() - faz uma análise na sequencia JSON, transforma os valores e suas propriedades, e retorna o valor 
// transoformando uma String (com objeto) em objeto
let json = '{"result": true, "count": 42}' // a segunda áspas tem que ser dupla
let obj = JSON.parse(json)
console.log(obj.count) // retornará: 42
console.log(obj.result) // retornará: true
console.log()


// JSON.stringify() - retorna uma String JASON. Transforma qualquer estrutura de dados em String
//Exemplo
let str = JSON.stringify([1, 'false, false'])
console.log(str) // retornará: [1,"false, false"] - que é uma String