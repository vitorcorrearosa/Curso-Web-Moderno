// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acesar e manipular variáveis externas à funcção

const x = 'Global'

function fora() {
    const x = 'Fora'

    function dentro() {
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)