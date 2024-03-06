function inverterString(str) {
  let strInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  return strInvertida;
}

// String a ser invertida
let minhaString = "Olá, Mundo!";

// Invertendo a string
let stringInvertida = inverterString(minhaString);

// Imprimindo a string invertida
console.log(stringInvertida);
