const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra o indice indicado
console.log(escola.charAt(5)) // Caso o indice não exista, aprensentará um valor vazio
console.log(escola.charCodeAt(3)) // Mostra o código unicode 
console.log(escola.indexOf("3")) // mostra o indice associado ao valor passado

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) // Quebra a string em um array