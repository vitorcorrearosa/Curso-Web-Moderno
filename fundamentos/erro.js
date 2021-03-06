function tratrarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratrarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {
    name: 'Roberto'
}
imprimirNomeGritado(obj)