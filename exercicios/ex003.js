/*  Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function elevado(base, expoente) {
    return console.log(`${base} ^ ${expoente} = ${Math.pow(base, expoente)}`)
}

elevado(2, 3)
elevado(5, 5)
elevado(5, -5)