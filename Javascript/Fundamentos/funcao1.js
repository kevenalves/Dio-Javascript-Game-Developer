// Função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN porque não tem como realizar a operação de um número com algo que não é um número.
imprimirSoma(2, 10, 4, 5, 6, 7) // JS vai somar os dois valores e ignorar os outros.
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN porque não tem como realizar a operação de um número com algo que não é um número.
