let valores = [8,1,7,4,2,9]
console.log(valores)

//CÓDIGO TRADICIONAL, MANEIRA ANTIGA:
/*
for(let pos = 0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//A MANEIRA MAIS MODERNA E SIMPLIFICADA DE SE FAZER: (que só funciona em arrays e objetos, que na verdade são a mesma coisa pois todo array em javascript é um object)

for(let pos in valores){ // para cada posição em num:
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}