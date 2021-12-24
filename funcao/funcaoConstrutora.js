function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let VelociodadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (VelociodadeAtual + delta <= velocidadeMaxima) {
            VelociodadeAtual += delta
        } else {
            VelociodadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return VelociodadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())