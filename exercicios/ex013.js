/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(dia) {
  switch (dia) {
    case 7:
    case 1:
    case 6:
      return console.log('Fim de Semana')
      break

    case 2:
    case 3:
    case 4:
    case 5:
      return console.log('Dia Útil')
      break

    default:
      return console.log('Dia inválido')
  }
}

diaUtil(1)
diaUtil(5)
diaUtil(50)
