// Questão 31 — Forma triângulo?
let a = 3, b = 4, c = 5;
if (a + b > c && a + c > b && b + c > a) {
  console.log(`Os lados ${a}, ${b} e ${c} FORMAM um triângulo.`);
} else {
  console.log(`Os lados ${a}, ${b} e ${c} NÃO formam um triângulo.`);
}