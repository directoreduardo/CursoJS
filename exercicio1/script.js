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
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<10){
                //criança
            }else if(idade<21){
                //jovem
            }else if(idade<50){
                //adulto
            }else{
                //idoso
            }
        }else{ // também pode ser: else if(fsex[1].checked){}
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                //criança
            }else if(idade<21){
                //jovem
            }else if(idade<50){
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}