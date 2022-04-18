const escola = "Cod3r"

console.log(escola.charAt(4)) // Começa a contar a partir da casa número 0, por isso retorna 'R'.
console.log(escola.charAt(5)) //JS é muito flexível, vai retornar um valor vazio ao invés de um erro.
console.log(escola.charCodeAt(3)) // Retorna o valor da string através da tabela UNICODE.
console.log(escola.indexOf('3')) // Começa a contar da casa 0 e vai retornar o '3'.

console.log(escola.substring(1)) // Vai retornar do indice 1 pra frente.
console.log(escola.substring(0, 3)) // Vai do indice 0 até o 3.

console.log("Escola ".concat(escola).concat("!")) // O + também pode ser usado para concatenar.
console.log(escola.replace(3, "e")) // Espefica oque vai ser substituido.

console.log("Ana,Maria,Pedro".split(",")) // Transformou em um array, a partir da vírgula.