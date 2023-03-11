let main = () => {
    try { // caso não funcione o 'try' ele vai cair no catch
        codigo 
    } catch (error) {
        console.error(`Deu erro no código. Esse é o erro:
        ${error}`)
    } /*finally { // essa mensagem sempre irá aparecer
        console.info('Esse valor sempre será mostrado')

    }*/
}
main()
console.log('-=-=-=-=-=-==-=-=-==-')

// Outros níveis
let funcao1 = () => {
    console.log('sou a função1')
    try {
        codigo2
    } catch (error) {
        console.error(`Erro da funçao1: ${error}`)
    }
}
let funcao2 = () => {
    console.log('sou a função2')
    
    sdsds
}
/*let funcao3 = () => {
    console.log('sou a funçao3')
    let valor = true
    try {
        if(valor){
            throw new Error() // irá forçar o erro mesmo o valor estando correto
        }
    } catch (error) {
       console.error(`${error}`)
    }
}*/
let main2 = () => {
    try {
    funcao1()
    funcao2()
    } catch (error) {
        console.error(`Erro da função 2: ${error}`)
    }
    console.log('passou por aqui')
}
main2()