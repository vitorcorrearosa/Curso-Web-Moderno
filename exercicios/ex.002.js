 /* Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto  ao tamanho de seus lados.
 Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 */

 function tipoDeTriangulo(lado1 = 0, lado2 = 0, lado3 = 0) {
     if (lado1 && lado3 === lado2) {
         console.log('O seu triangulo é um Equilátero!')
     } else if (lado1 === lado2 && lado3 !== lado2) {
         console.log('O seu triangulo é um Isósceles!')
     } else if (lado1 !== lado2 && lado3 !== lado2) {
         console.log('O seu triangulo é um Escaleno!')
     } else {
         console.log('Valores inválidos')
     }
 }

 tipoDeTriangulo(5, 5, 5)
 tipoDeTriangulo(50, 50, 5)
 tipoDeTriangulo(15, 50, 5)
 tipoDeTriangulo(0.85, -50, -50)
 tipoDeTriangulo(50)
 tipoDeTriangulo()