// Questão 47 — Classificação por intervalo
let numero = 75;
if (numero < 0) {
  console.log(`O número ${numero} é MENOR QUE 0.`);
} else if (numero >= 0 && numero <= 10) {
  console.log(`O número ${numero} está ENTRE 0 e 10.`);
} else if (numero >= 11 && numero <= 50) {
  console.log(`O número ${numero} está ENTRE 11 e 50.`);
} else if (numero >= 51 && numero <= 100) {
  console.log(`O número ${numero} está ENTRE 51 e 100.`);
} else {
  console.log(`O número ${numero} é MAIOR QUE 100.`);
}