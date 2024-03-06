function sequenciaDeFibonacci(limit) {
  // Gera a sequência de Fibonacci até o limite especificado.
  let sequence = [0, 1];
  while (sequence[sequence.length - 1] < limit) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
}

function isInFibonacciSequence(number) {
  // Verifica se um número pertence à sequência de Fibonacci.
  const sequence = sequenciaDeFibonacci(number);
  return sequence.includes(number);
}

// Número a ser verificado
const numberToCheck = 21;

// Verificando se o número pertence à sequência de Fibonacci
if (isInFibonacciSequence(numberToCheck)) {
  console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(
    `O número ${numberToCheck} não pertence à sequência de Fibonacci.`
  );
}
