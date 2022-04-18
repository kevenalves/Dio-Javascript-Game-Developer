const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // JS retorna undefined ao invés de apresentar um erro.

valores[4] = 10 // adicionou o valor 10 na posiçãos 4 do array.
valores[10] = 15 // adicionou o valor na posição 10 e deixou as anteriores não declaradas, vazias.
console.log(valores)
console.log("O array tem ", valores.length, "posições.")

valores.push({id: 3}, false, null, "teste") // Não misture tipos de dados.
console.log(valores)

console.log(valores.pop()) // Retira o último valor declarado e retorna o mesmo.
delete valores[0] // determina qual posição do array vai ser deletada.
console.log(valores)


console.log(typeof valores) // em JS array é um objeto.