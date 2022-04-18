var a = 3 // 'var' permite a altereção do valor declarado.
let b = 4 // 'let' não permite a alteração do valor declarado.


var a = 30
b = 40

console.log(a, b)

var a = 300
b = 400
// Tomar cuidado ao usar 'var', já que permite alterar valores
//declarados anteriormente.
//Priorizar 'let' sempre que possível.
console.log(a, b)

const c = 5
// Constante não permite a alteração do valor declarado.
// Usado sempre em dados fixos. 
console.log(c)