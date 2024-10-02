let temDinheiro=true
let estarEnsolarado=true
let carroEstarNaGaragem=false

let resultadoE ='1# (And)-vai no shopping? '
resultadoE += temDinheiro && estarEnsolarado

console.log(resultadoE)

let resultadoOu = '2# (OR)-vai no shopping? '
 
resultadoOu+= estarEnsolarado || carroEstarNaGaragem

console.log(resultadoOu)

console.log(true != false)
console.log(false != false)
console.log(true != true)
console.log(false != true)
 
