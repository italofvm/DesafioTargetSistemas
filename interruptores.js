let lampadas = [false, false, false]; // false significa que a lâmpada está apagada

// Função para ligar todas as lâmpadas
function ligarTodasLampadas() {
  for (let i = 0; i < lampadas.length; i++) {
    lampadas[i] = true;
  }
}

// Função para desligar todas as lâmpadas
function desligarTodasLampadas() {
  for (let i = 0; i < lampadas.length; i++) {
    lampadas[i] = false;
  }
}

// Função para ligar os dois primeiros interruptores e desligar o último
function ligarDoisPrimeirosDesligarUltimo() {
  for (let i = 0; i < lampadas.length; i++) {
    if (i < 2) {
      lampadas[i] = true;
    } else {
      lampadas[i] = false;
    }
  }
}

// Primeira ida: Ligar todas as lâmpadas
console.log("Primeira Ida: Ligar todas as lâmpadas");
ligarTodasLampadas();
console.log("Lâmpadas:", lampadas);

// Segunda ida: Ligar os dois primeiros interruptores e desligar o último
console.log(
  "Segunda Ida: Ligar os dois primeiros interruptores e desligar o último"
);
ligarDoisPrimeirosDesligarUltimo();
console.log("Lâmpadas:", lampadas);

// Resultado: A primeira lâmpada está acesa, a segunda lâmpada está acesa, e a terceira lâmpada está apagada.
