//------------PROMISES
// É um objeto que é construido utilizando essa função construtora de promise [new Promise()]. É um objeto que vai representar uma eventual conclusão ou falha de uma operação assíncrona qualquer
// Três situaçãoes: ele pode estar ou conluído ou ter tido uma falha, ou estar pendente para que seja realizada essa operação
//- PENDING = PENDENTE; FULFILLED (ou RESOLVED) = RESOLVIDO; REJECTED = REJEITADA

let umaPromessa = new Promise((resolve, reject) => { // as duas funções passadas como parâmetro (resolve, reject) já são padrão dentro da promise (é esperado pela promise), então a gente sempre passa elas para poderem ser utilizadas. Pode simplesmente usar o 'resolve' se quiser
    let soma = 1+3
    if(soma===2){
        resolve('Tudo certo')
    }else{
        reject('Deu ruim')
    }
})
console.log('esperando promise...')
// Como tratar o retorno dessa promise:
// o objeto umaPromessa pode encadear chamadas de métodos
umaPromessa.then((resultado) => { // '.then' é quando a promise foi resolvida. Se acima deu 'resolve', ele vai entrar nessa função '.then'
    console.log(`Valor do then: ${resultado}`) 
}).catch((erro) => { // se deu 'reject', ele vai entrar nessa função '.catch'
    console.log(`Valor do catch: ${erro}`)
}).finally(() => { // se deu algum dos dois (resolve ou reject) ele vai entrar na função '.finally' - ele é sempre executado independente do resultado!
    console.log(`Independente do resultado eu sempre estarei aqui`)
})
// disclaimer: esse evento acima, o retorno da promise (umaPromessa.then(())), só irá ser executado quando o 'event loop' for até o final (executar tudo o que tem que resovler), para só ai então executar e resolver esse bloco. Exemplo:
console.log('*isso irá ser logado antes da promise')
console.log('---')