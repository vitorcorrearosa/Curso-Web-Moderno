function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let contador = 0

while (opcao != -1) {
    contador++
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`O número escolhido foi: ${opcao}.`)
}
console.log(`Foram ecolhidos ${contador} números antes de fechar a repetição`) // só botei por curiosidade msm