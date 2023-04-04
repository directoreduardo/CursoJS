let foo = ["1", "2", "3"]
let [um, dois, tres] = foo
console.log(um)
console.log(dois)
console.log(tres)
console.log('-=-=--==-=-')
//-------
let a, b
[a, b] = [1, 2]
console.log(a)
console.log(b)
console.log('-=-=--==-=-')
//------
//com um valor default:
let c, d
[c=5, d=7] = [1]
console.log(c) 
console.log(d)
console.log('-=-=--==-=-')
//------
//com objetos:
let e = {p: 42, q: true}
let {p, q} = e
console.log(p,q)
console.log('-=-=--==-=-')
//-
let f, g
({f, g} = {f: 1, g: 2})
console.log(f,g)
console.log('-=-=--==-=-')
//-
let h = {p: 43, q: false}
let {p: car, q: bar} = h
console.log(car,bar)
console.log('-=-=--==-=-')
//-
let key = "z"
let {[key]: fol} = {z: "bar"}
console.log(fol)

// BONUS
//---------- Parâmetros com Valores Predefinidos -----
// jeito antigo
/*
function multiplicar(a, b){
    b = typeof b !== 'undefined'?b: 1
    a = typeof a !== 'undefined'?b: 1
    return a*b
}*/
// jeito atual
function multiplicar(a = 1, b = 1){
    return a*b
}