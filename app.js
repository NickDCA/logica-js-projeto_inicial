alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 100');
  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
  tentativas++;
}

// if (tentativas > 1) {
//   alert(
//     `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// } else {
//   alert(`Você descobriu o número secreto ${numeroSecreto} com 1 tentativa`);
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(
  `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
