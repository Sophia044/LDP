// Questão 49 — Cálculo de aumento salarial
let salario = 1500;
let aumento = 0;
if (salario <= 1000) {
  aumento = salario * 0.20;
} else if (salario <= 3000) {
  aumento = salario * 0.15;
} else {
  aumento = salario * 0.10;
}
let novoSalario = salario + aumento;
console.log(`Salário atual: R$${salario.toFixed(2)} — Aumento: R$${aumento.toFixed(2)} — Novo salário: R$${novoSalario.toFixed(2)}.`);