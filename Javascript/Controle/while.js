function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// while vai executar até que a expressão seja 'false' / Essa estrutura é perfeita
// para executar um quantidade indeterminada de repetições.
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Número sorteado foi ${opcao}.`)
}

console.log("Até a próxima!")
