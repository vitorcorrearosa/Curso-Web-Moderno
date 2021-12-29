/*    Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
         multiplicação e divisão desses valores. 
*/

let operacao = (valor1 = 1, valor2 = 1) => {
    return `${valor1} + ${valor2} = ${valor1 + valor2}
${valor1} - ${valor2} = ${valor1 - valor2}
${valor1} * ${valor2} = ${valor1 * valor2}
${valor1} / ${valor2} = ${valor1 / valor2}`
}

console.log(operacao(15, 25))
console.log(operacao(15))
console.log(operacao())
console.log(operacao(-15, 0.56))
console.log(operacao(135.20, 2945.50))