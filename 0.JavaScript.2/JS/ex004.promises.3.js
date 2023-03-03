// CONTINUANDO OS ESTUDOS DE AWAIT (+ THEN & CATCH) 

let mil=()=> new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('promise mil resolvida'),1000)
})
let cem=()=> new Promise((resolve, reject)=>{
    setTimeout(()=>reject('promise cem rejeitada'),100)
})
let resolverAssincronas = async()=>{
    let resultado1 = await mil().then((res)=>{
        console.log(res)
        return res
    }).catch((err)=>{
        console.log(err)
    })
    console.log('Código 1 aqui')
    let resultado2 = await cem().then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    console.log(`
Código 2 aqui
Mensagens:
${resultado1}
${resultado2}`)
}
resolverAssincronas()