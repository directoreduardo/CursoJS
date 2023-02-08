function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length==0||fano.value>ano){ //se não digitou o ano OU ENTÃO se o fano.value for maior que o ano atual:
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex') //('redsex') [0] é a bolinha do masculino e o ('redsex') [1] é a bolinha do feminino
        var idade = ano - Number(fano.value) //o valor atual menos(-) o valor digitado no fano 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //é como se fosse no HTML e colocasse <img id="foto"> - é a mesma coisa só que mostrado em JS
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }else{ // também pode ser: else if(fsex[1].checked){}
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //= adicionar um elemento, no caso, logo em seguida do innerHTML. Aqui é onde mostrará as fotos
    }
}