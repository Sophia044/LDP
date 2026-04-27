// Questão 27 — Deve pagar imposto?
let salario = 2500;
if (salario > 2000) {
  console.log(`Salário R$${salario.toFixed(2)}: deve pagar imposto.`);
} else {
  console.log(`Salário R$${salario.toFixed(2)}: isento de imposto.`);
}