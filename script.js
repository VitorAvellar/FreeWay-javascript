function setup() {
  createCanvas(700, 400);
  trilhaSonora.loop()
}

function draw() {
  background(imagemDaEstrada);
  ator();
  carro();
  movimentoCarro();
  movimentoPenguin();
  voltaPosicao()
  verificaCoisao()
  incluiPontos()
  marcaPonto()
}