/* 
  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function nomeclaturaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoB == ladoC) {
    console.log('O triângulo é Equilátero!')
  } else if (ladoA == ladoB && ladoA != ladoC) {
    console.log('O triângulo é Isóceles!')
  } else {
    console.log('O triângulo é Escaleno!')
  }
}

nomeclaturaTriangulo(35, 35, 12)
nomeclaturaTriangulo(50, 50, 50)
nomeclaturaTriangulo(50, 500, 5)
