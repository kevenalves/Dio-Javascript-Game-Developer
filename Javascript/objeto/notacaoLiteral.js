const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // Metodo antigo.

const obj2 = {a, b, c} // Metodo novo ES2015
console.log(obj1, obj2)

const nomeAttr = "nota"
const valorAttr = 7.87

const obj3 = {} // Metodo Antigo
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Metodo Novo ES2015
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // Metodo Antigo
    },
    funcao2() {
        // Metodo Novo ES2015
    }
}

console.log(obj5)