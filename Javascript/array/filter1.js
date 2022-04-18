const produtos = [
    {nome:"Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plastico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))


// LOGICA DO PROFESSOR 
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))



/* Minha Lógica
const caro = produtos.filter(function(valor){
    return valor.preco > 500
})

const fraco = caro.filter(function(f){
    return f.fragil == true
})

console.log(fraco)
*/