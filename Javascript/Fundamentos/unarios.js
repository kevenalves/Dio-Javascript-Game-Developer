let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // Verdadeiro!
/* Primeiro acrescentou +1 na variável num1, depois fez a comparação
e por último fez o decremento de -1. */

console.log(num1 === num2)

//MANTENHA SEMPRE O CÓDIGO SIMPLES!