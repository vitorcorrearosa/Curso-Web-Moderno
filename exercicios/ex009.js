/*
 Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. . As notas
possuem a seguinte regra de arredondamento: 

Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. 

Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function arredondaNota(nota) {
  let notaArredondada = 0
  let i = nota
  let diferenca = 0

  if (nota < 38) {
    notaArredondada = nota
    return console.log(`Aluno Reprovado com a nota ${notaArredondada}`)
  } else {
    while (i % 5 != 0) {
      diferenca++
      i++
    }

    if (diferenca < 3) {
      notaArredondada = nota + diferenca
      return console.log(`Aluno Aprovado com a nota ${notaArredondada}`)
    } else {
      notaArredondada = nota
      return console.log(`Aluno Aprovado com a nota ${notaArredondada}`)
    }
  }
}

arredondaNota(29)
arredondaNota(53)
arredondaNota(91)
