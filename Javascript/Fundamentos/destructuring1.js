// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa // Usando destructuring para pegar essas informações.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// Quando for desestruturar um dado aninhado, preste atenção para ter certeza
// que o caminho existe, ou vai dar erro.

                    //EXEMPLO:

// const {conta: { ag, num } } = pessoa
// console.log(ag, num)