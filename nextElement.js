function proximoElemento(sequence) {
  // Função para determinar o próximo elemento de uma sequência
  switch (sequence) {
    case "a":
      // A sequência começa com 1 e os números subsequentes são incrementados por 2 a cada vez
      return 9;
    case "b":
      // A sequência começa com 2 e os números subsequentes são multiplicados por 2 a cada vez
      return 128;
    case "c":
      // A sequência começa com 0 e os números subsequentes são quadrados
      return 49;
    case "d":
      // A sequência começa com 4 e os números subsequentes são multiplicados por 4 a cada vez
      return 256;
    case "e":
      // A sequência começa com 1 e 1, e os números subsequentes são a soma dos dois números anteriores
      return 13;
    case "f":
      // A sequência começa com 2 e os números subsequentes são incrementados por 1 a cada vez
      return 20;
    default:
      return "Sequência desconhecida";
  }
}

// Testando a função para cada sequência
console.log("Próximo elemento da sequência a:", proximoElemento("a"));
console.log("Próximo elemento da sequência b:", proximoElemento("b"));
console.log("Próximo elemento da sequência c:", proximoElemento("c"));
console.log("Próximo elemento da sequência d:", proximoElemento("d"));
console.log("Próximo elemento da sequência e:", proximoElemento("e"));
console.log("Próximo elemento da sequência f:", proximoElemento("f"));
