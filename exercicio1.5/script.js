function contar(){
    //usando let ao invés de var
    let ini = document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){ // se o inicio, fim e passo for igual a 0
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Deste modo é impossivel contar!'
    }else{ 
        res.innerHTML = 'Contando: <br>' // <br> para quebrar linha considerando que está usando o innerHTML e não o innerText
        let i = Number(ini.value) // por mais que a caixa de texto seja numérica, ela não está como um número, por isso a conversão
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){ // se o passo for menor ou igual a 0
            alert('Passo inválido! Considerando PASSO 1')
            p = 1 // o passo deixar de valer 0 e irá começar a valer 1
        }
        if(i<f){ // se o valor do inicio for menor que o valor final: contagem crescente
            for(let c=i; c<=f; c+=p){ // o contador vai começar no início e enquanto o contador for menor ou igual ao fim, o contador vai receber ele mesmo mais o passo
                res.innerHTML += ` ${c} \u{1f449}` // {1f449} é um emoticon em html que só funciona entre crase
            }
        }else{
            for(let c=i; c>=f; c-=p){ // contagem regressiva; do maior pro menor: enquanto o contador for maior ou igual ao fim, o contador vai perder o passo
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}