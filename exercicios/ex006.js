// J = C × i × t
// J = juros simples;
// C = capital inicial;
// i = taxa de juros;
// t = tempo da aplicação

const jurosSimples = function (capitalInicial, taxaJuros, tempoAplicacao) {
  const jurosSimples = capitalInicial * taxaJuros * tempoAplicacao
  return console.log(
    `Juros simples: R$${jurosSimples.toFixed(2).replace('.', ',')}`
  )
}

jurosSimples(500, 100, 20)

const jurosCompostos = function (capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao)
  const jurosCompostos = montante - capitalInicial
  return console.log(
    `Juros Compostos: R$${jurosCompostos.toFixed(2).replace('.', ',')}`
  )
}

jurosCompostos(500, 100, 20)
