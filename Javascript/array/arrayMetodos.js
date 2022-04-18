const pilotos = ["Vettlel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Remove o último item do array
console.log(pilotos)

pilotos.push("Verstappen") // Adiciona o elemento ao array.
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array.
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona no primeiro elemento do array.
console.log(pilotos)

// splice pode adicionar ou remover elementos.

// ADICIONANDO...
pilotos.splice(2, 0, "Botas", "Massa")
console.log(pilotos)

// REMOVENDO...
pilotos.splice(3, 1) // No indice 3, vai remover 1
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //Gera um novo array a partir do indice escolhido.
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // vai criar um novo array do indice 1 até o 3. Ele para no último indice declarado.
console.log(algunsPilotos2)