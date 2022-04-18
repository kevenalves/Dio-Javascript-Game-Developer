{
     { 
         { 
             { 
                 {var sera = "Será?"
                } 
            } 
        } 
    } 
}
console.log(sera)
// Se não estiver dentro de uma função, a váriavel vai ficar visível
// no escopo global.

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)
// Local está declarado dentro do escopo da função, vai dar erro
// ao tentar acessa-lo fora deste escopo.