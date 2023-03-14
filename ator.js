//posição penguin
let xPenguin = 330
let yPenguin = 350
let colisao = false
//pontuação
let pontos = 0

function ator() {
    image(imagemDoAtor, xPenguin, yPenguin, 60, 60)
}

function movimentoPenguin() {
    if (keyIsDown(UP_ARROW)) {
        yPenguin -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yPenguin += 3;
        }
    }

    if (keyIsDown(LEFT_ARROW)) {
        if (podeSeMoverE()) {
            xPenguin -= 3;
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        if (podeSeMoverD()) {
            xPenguin += 3;
        }
    }
}

function verificaCoisao() {

    for (let i = 0; i < imagemCarros.length; i++) {

        colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPenguin, yPenguin, 40, 35)

        if (colisao) {
            voltaPosicaoInicial()
            somColisao.play()

            if (pontosMaiorQueZero()) {
                pontos -= 1

            }
        }
    }
}

function voltaPosicaoInicial() {
    yPenguin = 350;
}

function incluiPontos() {
    textSize(25)
    textAlign(CENTER)
    fill(color('#191970'))
    text(pontos, 100, 28)
}

function marcaPonto() {
    if (yPenguin < -1) {
        pontos -= -1
        voltaPosicaoInicial();
        somPontos.play()
    }
}

function pontosMaiorQueZero() {
    return pontos > 0
}

function podeSeMover() {
    return yPenguin < 350

}

function podeSeMoverE() {
    return xPenguin > -12
}

function podeSeMoverD() {
    return xPenguin < 651
}