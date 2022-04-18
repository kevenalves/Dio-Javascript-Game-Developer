let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

IsAtivo = 1
console.log(!!isAtivo) // Testando se é verdadeiro ou falço, com duas negação '!!'

// Valores verdadeiros...
console.log("---------------")
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // Só se tiver um espaço, sem espaço da falso.
console.log(!!"texto")
console.log(!![]) // array
console.log(!!{}) // objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Os falsos...
console.log("-------------------")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("--------------------------")
let nome = ""
console.log(nome || "Desconhecido") // Operação lógica com String é permitido no JS.

let sobrenome = "Alves"
console.log(sobrenome || "Desconhecido")