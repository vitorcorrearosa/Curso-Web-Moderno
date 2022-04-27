/* 
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

M = C*(1+i)**n 
M = C + J
J = M - C

J = C * i * t
*/

function jurosCompostos(capital, taxa, tempo) {
  compostos = capital * (1 + taxa) ** tempo
  return compostos
}

function jurosSimples(capital, taxa, tempo) {
  simples = capital * taxa * tempo
  return simples
}

console.log(`Juros Simples: R$${jurosSimples(500, 10, 20)}`)
console.log(`Juros Compostos: R$${jurosCompostos(500, 10, 20)}`)
