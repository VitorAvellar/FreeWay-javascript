// y dos carros
let yCarros = [40, 96, 150, 210, 260]

//posiçao inicial
let xCarros = [800, 800, 800, 800, 800]

//velocidade carros
let velocidadeCarros = [3.5, 5, 7, 8, 10]

// compreimento e altura do carro
let comprimentoCarro = 50
let alturaCarro = 40

function carro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
    }
}

function movimentoCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i]
    }
}

function voltaPosicao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 800
        }
    }
}

function passouTodaTela(xCarro) {
    return xCarro < -60
}