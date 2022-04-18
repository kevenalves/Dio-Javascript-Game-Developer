const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

//forEach recebe 3 parametros oficiais, sendo o 'nome', o indice e o próprio array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array) - Com este comando ele exibiria todo o array.
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)