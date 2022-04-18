console.log("teste 01)")

function teste1(num) {
    if(num > 7)
        console.log(num) // Se não utilizar {} na estrutura 'if', o JS compreende,
        //Apenas a primeira sentença como pertencente a estrutura de controle.
        console.log("Final") 
}

teste1(6)
teste1(8)

console.log("--------------------------------------------------------------")
console.log("teste 02)")

function teste2(num) {
    if(num > 7); { // Cuidado com o ;, não usar com estruturas de controle!
        console.log(num)
    }
}

teste2(6)
teste2(8)