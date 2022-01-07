// escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
//  vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo

const pontos = []

const comparaPontuacao = function (pontos) {
  let pontuacao
  let menorPontuacao = ''
  let maiorPontuacao = ''
  let numeroRecordes = ''
  let numeroFracassos = ''

  for (let i in pontos) {
    pontuacao = pontos[i]
    if (menorPontuacao == 0) {
      menorPontuacao = pontuacao
    } else if (pontuacao < menorPontuacao) {
      menorPontuacao = pontuacao
      numeroFracassos++
    } else if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao
      numeroRecordes++
    }
  }

  return console.log(`Sua maior pontuação foi: ${maiorPontuacao} batendo o recorde ${numeroRecordes} vezes.
Sua menor pontuação foi: ${menorPontuacao} fracassando ${numeroFracassos} vezes.`)
}

comparaPontuacao([2, 3, 4, 2, 1, 9, 4, 10])
