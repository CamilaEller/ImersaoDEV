function jogar() {
idade = prompt("Qual sua idade?");
if (idade < 18) {
  alert("Você não pode jogar!!");
}
if (idade >= 18) {
  alert("Vamos iniciar!");
  escolhajogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
  escolhapc = Math.floor(Math.random() * 3) + 1;

  // Jogador pedra, pc pedra -> empate.
  // Jogador tesoura, pc tesoura -> empate.
  // Jogador papel, pc papel -> empate.

  if (escolhajogador == escolhapc) {
    alert("Empate!");
  }

  if (escolhajogador == 1) {
    if (escolhapc == 2) {
      // Jogador pedra, pc papel -> PC vence
      alert("O PC venceu com papel!");
    }
    if (escolhapc == 3) {
      // Jogador pedra, pc tesoura -> Jogador vence
      alert("Parabéns, você venceu! O PC jogou tesoura");
    }
  }

  if (escolhajogador == 2) {
    if (escolhapc == 1) {
      // Jogador papel, pc pedra -> Jogador vence
      alert("Parabéns, você venceu! O PC jogou pedra.");
    }
    if (escolhapc == 3) {
      // Jogador papel, pc tesoura -> PC vence
      alert("O PC venceu com tesoura!");
    }
  }

  if (escolhajogador == 3) {
    if (escolhapc == 1) {
      // Jogador tesoura, pc pedra -> PC vence
      alert("O PC venceu com pedra!");
    }
    if (escolhapc == 2) {
      // Jogador tesoura, pc papel -> Jogador vence
      alert("Parabéns, você venceu! O PC jogou papel.");
    }
  }

  alert("A escolha do PC foi " + escolhapc);
}
}