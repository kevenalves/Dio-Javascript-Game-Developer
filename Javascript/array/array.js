console.log(typeof Array, typeof new Array, typeof [])

let aprovados =  new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined, não existe o quarto elemento no array.

aprovados[3] = "Paulo"
aprovados.push("Keven",) // Melhor metodo de adicionar um novo elemento.
console.log(aprovados.length) // Verifica quando elementos existem no array.

aprovados[9] = "Aline" // Não vai dar erro, os elementos anteiores a este ficaram como undefined.
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Este metodo organiza os elementos alterando o array original.
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
// Este metodo 'splice' possibilita excluir ou adicionar um elemento no array
aprovados.splice(1, 1) // vai deletar 1 elemento começando do indice 1
aprovados.splice(1, 0, "Elemento1") // Começando do indice 1, não vai deletar nada e vai adicionar o 'Elemento1'
console.log(aprovados)
