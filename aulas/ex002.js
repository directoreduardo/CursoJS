var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){ //switch é uma expressão [switch(expressão)], não um condição [if(condição)]! O switch funciona melhor em dados pontuais, não em intervalos
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sabado')
        break  
} // "default:" seria o equivalente ao "else{}" do 'if(){}'. Porém é opcional, assim como o "break" na ultima sentença