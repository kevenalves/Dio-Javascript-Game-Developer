function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // No while não executaria o bloco de código.

//doWhile é muito pareceido com 'while', a única diferença é que ele executa
// o bloco de código primeiro e depois verifica se deve continuar ou não.
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Número sorteado foi: ${opcao}.`)
} while (opcao != -1) 

console.log("Até a próxima!")