// IIFE => Immediately Invoked Function Expression

(function(){
    // Aqui será excutado imetiadamente, mas está fora do espoco abrangente.
    console.log("Dentro da função")
    console.log("Será executado na hora!")
    console.log("Foge do escopo mais abrangente!")
})()


console.log("==========================================")
console.log("Aqui tudo está no escopo global.")
console.log("Será executado na hora!")
console.log("São semelhantes na forma de execução, mas em escopos diferentes.")
