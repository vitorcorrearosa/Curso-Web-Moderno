/* 
 Faça um algoritmo que calcule o fatorial de um número
*/

function calculaFatorial(num) {
  for (let i = num - 1; i > 0; --i) {
    num *= i
  }

  return num
}

console.log(calculaFatorial(4))
