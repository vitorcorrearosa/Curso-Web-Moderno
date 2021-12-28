// IIFE -> Imediately Invoked Function Expression

(function () {
    const teste = 'Olá'
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    console.log(teste)
})()

//console.log(teste)