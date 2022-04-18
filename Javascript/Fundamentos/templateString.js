const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template)

    // expressões...
    console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() // É possível usar função dentro de um template String.
console.log(`Ei... ${up("cuidado")}!`)