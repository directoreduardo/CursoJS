function contar(){
    //usando let ao invés de var
    let ini = document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){ // se o inicio, fim e passo for igual a 0
        alert('[ERRO] Faltam dados!')
    }else{
        res.isConnected = 'Contando: '
        let i = Number(ini.value) // por mais que a caixa de texto seja numérica, ela não está como um número, por isso a conversão
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c=i; c<=f; c+=p){ // o contador vai começar no início e enquanto o contador for menor ou igual ao fim, o contador vai receber ele mesmo mais o passo

        }
    }
}