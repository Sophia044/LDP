// Questão 16 — Menor entre três números
let a = 8, b = 15, c = 11;
if (a <= b && a <= c) {
  console.log(`O menor número é ${a}.`);
} else if (b <= a && b <= c) {
  console.log(`O menor número é ${b}.`);
} else {
  console.log(`O menor número é ${c}.`);
}