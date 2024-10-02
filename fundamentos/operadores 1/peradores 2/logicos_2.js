
const t1=false
const t2=false

console.log('vamos compra a tv de 50"? ' + (t1 && t2) ) //and
console.log('vamos compra a tv de 32"? ' + (t1 !== t2) ) //xor


let tomarSorvet=t1 || t2

console.log('vamos tomar sorvete? ' + (t1 || t2) )  //OR\r

let ficarEnCasa=!tomarSorvet

console.log('vamos ficar em casa? ',!tomarSorvet) //not