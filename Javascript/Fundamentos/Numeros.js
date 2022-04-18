const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// Mesmo estando com . flutuante, Js entende como inteiro por ser .0
// Se fosse .1, não entenderia como inteiro.

const avaliacao1 = 9.873
const avaliacao2 = 6.879

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Limitou o número de casas em 2.
console.log(media.toString()) // Exibe o valor total, sem limitar o número de casas.
console.log(media.toString(2)) // Transformou o resultado em número binário.
console.log(typeof media)

                        //ALGUNS CUIDADOS COM NUMBER

console.log(7 / 0) // JS tem a função infinity. Qualquer número dividido por 0 não da erro, da infinito.
console.log("10" / 2) // Mesmo em String o JS entende como número e executa o cálculo.
console.log("10,2" / 2) // Se o JS não entender como um número, ele não vai realizar a operação.
console.log("10.2" / 2) // Com Ponto, ele entende normalmente, mesmo estando em String.

console.log(0.1 + 0.7) // Tomar cuidado com a imprecisão da línguagem. Especificação I3E

console.log("3" + 2) // A string tem prioridade neste caso então o JS vai concatenar.
console.log("3" - 2) // O JS vai realizar a operação, pois o - só tem função aritmética. 