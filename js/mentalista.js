var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou, o Número Secreto é MAIOR que esse aí";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou, o Número Secreto é MENOR que esse aí";
  }
}

// revisão
// if, else, else if, Math.random(), ==
