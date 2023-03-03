// ------- PROMISE.ALL() & PROMISE.RACE()
// PROPRIEADES: Promise.prototype - Representa o protótipo para o método construtor da Promise (assunto já trabalhado); Promise.length - Propriedade length cujo o valor é sempre 1 (número de argumentos do método construtor)
// MÉTODOS:

// Promise.all(lista) — Retorna uma promise que é só resolvida quando todas as promises no argumento 'lista' forem resolvidas ou rejeitadas assim que uma das promises da lista for rejeitada. Se a promise retornada for resolvida, ela é resolvida com um array dos valores das promises resolvidas na lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira promise que foi rejeitada na lista. Este método pode ser útil para agregar resultados múltiplas promises.

// Promise.race(lista) — Retorna uma promise que resolve ou rejeita assim que uma das promises do argumento 'lista' resolve ou rejeita, com um valor ou o motivo daquela promise.

let promise1 = new Promise((resolve, reject)=>{
   setTimeout(() => resolve('promise 1 resolvida'), 1000) // setTimeot(()) estabelece um delay para cada promise que for resolvida, ignorando a ordem original. Neste caso, a promise 1 terá 1000 milesegundos, ou seja, 1 segundo, enquanto as outras terá um tempo menor, deste modo, serão executadas primeiro (em tese a promise 1 deveria ser executada primeiro, porém ela foi estabelecida com o tempo mais lento pela setTimout(())) 
})
let promise2 = new Promise((resolve, reject)=>{
   setTimeout(() => resolve('promise 2 resolvida'), 500) 
})
let promise3 = new Promise((resolve, reject)=>{
   setTimeout(() => resolve('promise 3 resolvida'), 100) 
})

Promise.all([promise1, promise2, promise3]).then((messages)=>{ // depois que forem resolvidas todas essa promises (na lista), vou utilizar o then (ou catch), 'messages' vai ter todas a promises resolvidas
    console.log(messages)
    console.log('-=-=-=-=-=-=-=-=-=-=-')
})

// Para poder ver somente a primeira promise que for resolvida (na ordem), a gente utiliza o .race. Neste caso em questão, a ultima promise será executa pois o tempo foi alterado através do setTimeout(())
Promise.race([promise1, promise2, promise3]).then((message)=>{ // como apenas uma promise será resolvida, o 'message' é no singulor
    console.log(message)
    console.log('-----')
})

// ------------ ASSYNC / AWAIT

let cincoMil=()=>new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('promise cincoMil resolvida'),5000)
})
let mil=()=>new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('promise mil resolvida'),1000)
})
let quinhetos=()=>new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('promise quinhetos resolvida'),500)
})
let cem=()=>new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('promise cem resolvida'),100)
})
// E se eu quisesse que resolvesse a mais demorada primeiro, depois resolvesse a de 100, 500 e depois a de 1000?

let resolvedoraDePromisesAssincronas = async() => { // 'async' indica que o código é assincrono, tendo possibilidade de fazer ele "esperar" usando o  'await' na frente do código assincrono
    let resultado1 = await cincoMil()
    console.log(`${resultado1}`)
    let resultado2 = await quinhetos()
    console.log(`${resultado2}`)
    let resultado3 = await cem()
    console.log(`${resultado3}`)
    let resultado4 = await mil()
    console.log(`${resultado4}`)
    console.log(`+
    Ultimo console a ser respondido:
    ${resultado1}
    ${resultado2}
    ${resultado3}
    ${resultado4}`)
}
resolvedoraDePromisesAssincronas()