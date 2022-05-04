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

function calculaDiferenca(nota) {
  this.diferenca = 0
  let i = nota

  while (i % 5 != 0) {
    diferenca++
    i++
  }
  return diferenca
}

function arredondaNota(nota, diferenca) {
  let notaArredondada

  if (nota < 38) {
    return `Aluno reprovado! Nota: ${nota}`
  } else if (diferenca < 3) {
    notaArredondada = nota + diferenca
    return `Aluno aprovado! Nota: ${notaArredondada}`
  } else {
    notaArredondada = nota
    return `Aluno aprovado! Nota: ${notaArredondada}`
  }
}

function sistemaNota(nota) {
  calculaDiferenca(nota)
  arredondaNota(nota, diferenca)
}

console.log(sistemaNota(12))
console.log(sistemaNota(13))
