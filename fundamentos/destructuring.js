function rand({
    min = 0,
    max = 1000
}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 500,
    min: 0
}
console.log(rand(obj))
console.log(rand({
    min: 955
}))
console.log(rand({}))