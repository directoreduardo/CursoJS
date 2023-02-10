function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length==0){ // se estiver vazio. Neste caso, porque o valor ainda não está (ainda) transformado em número
        window.alert('Por favor, digite um numero!')
    }else{
        let n = Number(num.value) // agora sim transformando o valor em número
        // fazendo a tabuada só que em while():
        let c = 1
        tab.innerHTML = '' // para limpar a tabuada anterior, caso você queira adicionar uma logo em seguida
        while(c<=10){
            let item = document.createElement('option') // criação de option em JS
            item.text = `${n} x ${c} = ${n*c}`
            item.value =  `tab${c}` // neste caso, o value só irá fazer sentido quando for estudado em outras linguagens, tipo PHP. Mas no JS isso não faz muito sentido, então é opcional
            tab.appendChild(item) // para fazer o que está acima aparecer
            c++
        }
       // feito em for():
       /*
       tab.innerHTML = ''
       for(let c=1; c<=10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
       }
       */
    }
}