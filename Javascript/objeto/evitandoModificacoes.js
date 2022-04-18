// Object.preventExtensions
// Permite que os atributos definidos sejam modificados e excluídos, mas impede qualquer adição de atributos.
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha" // vai subistuir o nome
produto.descricao = "Borracha escolar branca" // Não vai ter feito, pois não aceita extenção
delete produto.tag // vai deletar o atrivuto tag
console.log(produto)


// Object.seal
// Impede de adicionar ou deletar qualquer atributo, mas permite modificações nos existentes.
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // Não existe este atributo, não vai permitir.
delete pessoa.nome // Não permite deletar ou acrescentar nada.
pessoa.idade = 29 // Vai realizar a substituição, pois permitar alterar os atributos existentes.
console.log(pessoa)

// Object.freeze = objeto congelado. Não permite nenhum tipo de alteração.