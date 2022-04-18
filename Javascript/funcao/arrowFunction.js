let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return "OLÁ"
}

ola = () => "Olá"
ola = _ => "Olá" // Possuí parametros
console.log(ola())