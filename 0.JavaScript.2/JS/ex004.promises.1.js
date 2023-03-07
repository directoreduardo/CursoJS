
// ---------------CALLBACK VS PROMISES
// Transoformando uma exemplo de callback em primises
//-Callback:
let statusPantera = '' // adicionar status emocional: 'feliz', 'entediado' ou 'triste'
function isPanteraFeliz(callback, errorCallback){
    switch(statusPantera){
        case 'feliz':
            callback({
                mensagem: 'FELIZ',
            })
            break
        case 'entendiado':
            errorCallback({
                mensagem: 'ENTENDIADO',
            })
            break
        case 'triste':
            errorCallback({
                mensagem: 'TRISTE',
            })
            break
        default:
            errorCallback({
                mensagem: 'EMOCINAMENTE INDEFINIFO'
            })
    }
}
isPanteraFeliz(
    (Response) => console.log(`Tudo certo. O gato está ${Response.mensagem}`),
    (error) => console.error(`Deu ruim... O gato está ${error.mensagem}`)
)

// --TRANSFORMANDO O CÓDIFO ACIMA EM PROMISES:

let statusPantera2 = ''
let isPanteraFeliz2 = new Promise((resolve, reject) => {
    switch(statusPantera){
        case 'feliz':
            resolve({
                mensagem: 'FELIZ(2)',
            })
            break
        case 'entendiado':
            reject({
                mensagem: 'ENTENDIADO(2)',
            })
            break
        case 'triste':
            reject({
                mensagem: 'TRISTE(2)',
            })
            break
        default:
            reject({
                mensagem: 'EMOCINAMENTE INDEFINIFO(2)'
            })
    }
})
isPanteraFeliz2.then((response) => {
    console.log(`Tudo certo. O gato está ${Response.mensagem}`)
}).catch((error) => {
    console.error(`Deu ruim... O gato está ${error.mensagem}`)
})