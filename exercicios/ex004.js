/* 
   Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function caulculo(divisor, dividendo) {
  let resultado = divisor / dividendo
  let resto = divisor % dividendo

  return console.log(`Resultado: ${resultado}.
  Resto: ${resto}`)
}

caulculo(2, 3)
