let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // criando de forma global, um vetor vazio. Será usado para analisar os dados

function isNumero(n){ // *recebe 1 parâmetro
    if(Number(n)>=1 && Number(n)<=100){ // verificando se n é ou não um número. Só irá aceitar um valor entre 0 à 100
        return true
    }else{
        return false
    }
}

function inLista(n, l){ // *recebe 2 parâmetros
    if(l.indexOf(Number(n)) !=-1){ // indexOf() - irá retornar a index, se não há um valor nessa index, retornará - 1 (ou, NaN). Ou seja: se, na lista.indexOf o Number de n for DIFERENTE de - 1 (vazio):
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ // se o número for realmente um número e se este número NÃO (!) está na lista 
        valores.push(Number(num.value)) // adicionou na lista mas não há um retorno visual
        // adicionando esse elemento no meu select; adcionando um option:
        let item = document.createElement('option') // "criando de forma dinâmica"
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) // adicionando o retorno visual na lista
        res.innerHTML = '' // quando eu conseguir adicionar um elemento (ou outro elemento), ele irá limpar o resultado, pois eu tenho que finalizar de novo para poder ver o resultado - que estará no método finalizar()
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // depois que adcionar o número, dando certo ou errado, irá apagar sozinho e esvaziar barra de imput
    num.focus() // depois que adicionar o número, para não precisar clicar no input de novo, o .focus() já deixará clicado automaticamente
}

function finalizar(){
    if(valores.length==0){ // se o vetor estiver vazio
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length // total de elementos, para saber quantos elementos o meu vetor tem

        let maior = valores[0]
        // o maior e o menor número, até o momento, é o primeiro
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){ // para cada posição in valores
            soma += valores[pos]
            if(valores[pos]>maior) // se os valores na posição [pos] for maior que o maior valor:
                maior = valores[pos]
            if(valores[pos]<menor) // ...se for menor
                menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = '' // zerando o res - ele irá receber os elementos
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` // += (concatenado com) - operadores de atribuição
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}