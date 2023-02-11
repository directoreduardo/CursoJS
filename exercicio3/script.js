let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // criando de forma global, um vetor vazio. Será usado para analisar os dados

function isNumero(n){ // recebe 1 parâmetro
    if(Number(n)>=1 && Number(n)<=100){ // verificando se n é ou não um número. Só irá aceitar um valor entre 0 à 100
        return true
    }else{
        return false
    }
}

function inLista(n, l){ // recebe 2 parâmetros
    if(l.indexOf(Number(n)) !=-1){ // indexOf() - irá retornar a index, se não há um valor nessa index, retornará - 1 (ou, NaN). Ou seja: se, na lista.indexOf o Number de n for DIFERENTE de - 1 (vazio):
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
}