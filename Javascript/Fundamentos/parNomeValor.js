// par nome/valor
const saudacao = "Opa" // contexto léxico = local onde foi declaro sua variável
//léxico = palavra


function exec() {
    const saudacao = "Falaaaa" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)