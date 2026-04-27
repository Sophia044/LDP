// Questão 43 — Número primo
let numero = 17;
let ehPrimo = true;
if (numero < 2) {
  ehPrimo = false;
} else if (numero === 2) {
  ehPrimo = true;
} else if (numero % 2 === 0) {
  ehPrimo = false;
} else if (numero % 3 === 0) {
  ehPrimo = false;
} else if (numero % 5 === 0) {
  ehPrimo = false;
} else if (numero % 7 === 0) {
  ehPrimo = false;
} else if (numero % 11 === 0) {
  ehPrimo = false;
} else if (numero % 13 === 0) {
  ehPrimo = false;
}
// Nota: cobre primos até ~196. Para valores maiores, utilize um laço de repetição.

if (ehPrimo) {
  console.log(`O número ${numero} É primo.`);
} else {
  console.log(`O número ${numero} NÃO é primo.`);
}