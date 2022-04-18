let valor // Variável não inicializada.
console.log(valor)

console.log("------------")
valor = null // ausência de valor.
console.log(valor) // Caso queira zerar o valor de uma variavel, sempre use null.

// console.log(valor.toString()) // vai dar ERRO!
console.log("----------------")
const produto = {}
console.log(produto.preco)
console.log(produto)

console.log("-----------------")
produto.preco = undefined // Evite atribuir undefined
console.timeLog(!!produto.preco)
// delete produto.preco
console.log(produto)

console.log("----------------------")
produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)