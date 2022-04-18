//Está alterando apenas a informação de nome e não a constante pessoa.
// const pessoa -> (Aponta para um valor de mémoria - > que armazena o dado)
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa = {nome = "Ana"}
//Desta forma está tentando alterar a constante pessoa, pois está atribuindo a 'pessoa' um atributo 'nome' que armazena 'Ana' - Daria ERRO!

Object.freeze(pessoa) // Congela o objeto não aceitando mais alterações.

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa) // Todas essas alterações não são efetivas devido ao objeto estar congelado.

console.log("============================================")
const pessoaConstante = Object.freeze({nome: "Keven"})
console.log(pessoaConstante)