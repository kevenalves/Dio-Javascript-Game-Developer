const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
// 'break' causa um desvio no laço corrente para fora.
// break não funciona em cima do if
console.log("-----------------------------------")

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// 'continue' age em cima da repetição corrente.
console.log("--------------------------------------")


// Não use esse tipo de estrutura!
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log("Fim!")